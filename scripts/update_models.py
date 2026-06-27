#!/usr/bin/env python3
"""Build the homepage MODEL_FEED ticker data from the Hugging Face Hub API.

Only models from an allowlist of reputable labs are included, so the feed never
fills up with minor/unknown uploads or community quant repacks. For each lab we
take its currently-notable models (trendingScore), then order everything by
release date. No API key required.

Run locally:  python3 scripts/update_models.py
Output:       _data/models.json   (read by Jekyll for the ticker)
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import date

API = "https://huggingface.co/api/models"

# Reputable labs to feature, HF org slug -> display name.
# NOTE: Anthropic, OpenAI's frontier models and Manus are closed and do NOT
# publish open weights on Hugging Face, so they can't appear here — this feed
# reflects open-weight releases. Add or remove orgs freely.
KNOWN_ORGS = {
    "meta-llama": "Meta",
    "google": "Google",
    "deepseek-ai": "DeepSeek",
    "mistralai": "Mistral",
    "Qwen": "Qwen",
    "microsoft": "Microsoft",
    "openai": "OpenAI",
    "amazon": "Amazon",
    "nvidia": "NVIDIA",
    "zai-org": "Zhipu",
    "moonshotai": "Moonshot",
    "01-ai": "01.AI",
    "allenai": "AllenAI",
    "CohereLabs": "Cohere",
    "ai21labs": "AI21",
    "tiiuae": "TII",
    "ibm-granite": "IBM",
    "internlm": "InternLM",
}

PER_ORG = 3        # notable models pulled per lab
MAX_ITEMS = 16     # entries in the final feed

# repack / quantization / precision-variant markers we don't want as "releases"
SKIP = re.compile(
    r"(gguf|awq|gptq|int4|int8|fp8|fp4|nvfp4|bf16|fp16|-bnb|mlx|onnx|spinquant|"
    r"qlora|-4bit|-8bit|exl2|w4a16|smashed|-hf$)",
    re.I,
)


def fetch(params):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "agentic-times-modelfeed"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def size_of(text):
    m = re.search(r"(\d+(?:\.\d+)?)\s*[bB]\b", text)
    if not m:
        return None
    v = m.group(1)
    if v.endswith(".0"):
        v = v[:-2]
    return v + "B"


def describe(model):
    idl = model["id"].lower()
    tags = " ".join(model.get("tags", [])).lower()
    bits = []
    sz = size_of(model["id"]) or size_of(tags)
    if sz:
        bits.append(sz)
    if any(k in idl for k in ("moe", "-a3b", "-a1.8b", "-a22b")) or "mixture-of-experts" in tags:
        bits.append("MoE")
    if any(k in idl for k in ("reason", "-r1", "think", "-o1")):
        bits.append("reasoning")
    if "coder" in idl or "code" in idl:
        bits.append("coding")
    if any(k in idl for k in ("vl", "vision", "-omni")) or "image-text-to-text" in tags or "multimodal" in tags:
        bits.append("multimodal")
    elif any(k in idl for k in ("instruct", "-it", "chat", "conversational")):
        bits.append("instruct")
    return " · ".join(bits[:3]) if bits else "Open language model"


def main():
    seen = set()
    items = []
    for org, disp in KNOWN_ORGS.items():
        try:
            models = fetch({
                "author": org, "filter": "text-generation",
                "sort": "trendingScore", "direction": -1, "limit": 12,
            })
        except Exception as e:  # noqa: BLE001
            print(f"warn: {org}: {e}", file=sys.stderr)
            continue
        kept = 0
        for m in models:
            mid = m["id"]
            name = mid.split("/")[-1]
            if mid in seen or SKIP.search(name):
                continue
            created = (m.get("createdAt") or "")[:10]
            try:
                d = date.fromisoformat(created)
            except ValueError:
                continue
            seen.add(mid)
            items.append({
                "name": name,
                "org": disp,
                "desc": describe(m),
                "date": d.strftime("%d.%m.%Y"),
                "_sort": created,
                "url": "https://huggingface.co/" + mid,
            })
            kept += 1
            if kept >= PER_ORG:
                break

    items.sort(key=lambda x: x["_sort"], reverse=True)
    items = items[:MAX_ITEMS]
    for it in items:
        it.pop("_sort", None)

    out = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "_data", "models.json"))
    with open(out, "w") as f:
        json.dump(items, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"wrote {len(items)} models -> {out}")


if __name__ == "__main__":
    main()
