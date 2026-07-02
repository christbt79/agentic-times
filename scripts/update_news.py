#!/usr/bin/env python3
"""Build the homepage NEWS_TICKER data from Google News RSS (free, no API key).

Pulls brief agentic-AI / AI-model headlines, strips the "- Source" suffix,
filters out off-topic noise, de-duplicates, and writes _data/news.json for the
scrolling news ticker (styled identically to the model ticker).

Run locally:  python3 scripts/update_news.py
Output:       _data/news.json
"""
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime
from email.utils import parsedate_to_datetime

# Google News search RSS. The query is broad; the ALLOW/DENY filters below keep
# it on-topic. Tweak the query or the lists to taste.
QUERY = (
    '"agentic AI" OR "AI agent" OR "AI agents" OR "AI model" OR "AI models" '
    'OR "language model" OR "frontier model" OR "AI lab"'
)
FEED = (
    "https://news.google.com/rss/search?q="
    + urllib.parse.quote(QUERY)
    + "&hl=en-US&gl=US&ceid=US:en"
)

MAX_ITEMS = 18
MAX_WORDS = 14  # truncate long headlines to keep them "brief"

# A headline must contain at least one of these to be considered on-topic.
ALLOW = re.compile(
    r"\b(ai|a\.i\.|agent|agentic|llm|model|gpt|chatgpt|claude|gemini|llama|"
    r"mistral|qwen|deepseek|anthropic|openai|nvidia|copilot|grok|multimodal|"
    r"reasoning|inference|artificial intelligence|neural)\b",
    re.I,
)
# Drop obvious noise / off-topic financial-spam / listicles.
DENY = re.compile(
    r"\b(crypto|bitcoin|ethereum|token price|memecoin|etf|stocks? to buy|"
    r"price prediction|horoscope|how to|best \d+|top \d+|deals?|coupon|"
    r"giveaway|sponsored)\b",
    re.I,
)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "agentic-times-newsfeed"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def clean_title(raw, source):
    text = html.unescape(raw or "").strip()
    # Google News appends " - Source"; strip it if it matches the source.
    if source and text.endswith(" - " + source):
        text = text[: -(len(source) + 3)].rstrip()
    else:
        text = re.sub(r"\s+-\s+[^-]{2,40}$", "", text)  # generic trailing " - Outlet"
    text = re.sub(r"\s+", " ", text).strip()
    words = text.split(" ")
    if len(words) > MAX_WORDS:
        text = " ".join(words[:MAX_WORDS]).rstrip(",.;:") + "…"
    return text


def norm(text):
    return re.sub(r"[^a-z0-9]+", "", text.lower())


def main():
    try:
        root = ET.fromstring(fetch(FEED))
    except Exception as e:  # noqa: BLE001
        print(f"error: could not fetch/parse feed: {e}", file=sys.stderr)
        sys.exit(1)

    seen = set()
    items = []
    for it in root.findall(".//item"):
        raw = it.findtext("title", "")
        source = (it.findtext("source") or "").strip()
        text = clean_title(raw, source)
        if not text or len(text) < 12:
            continue
        if not ALLOW.search(text) or DENY.search(text):
            continue
        key = norm(text)[:60]
        if key in seen:
            continue
        seen.add(key)

        pub = it.findtext("pubDate", "")
        try:
            dt = parsedate_to_datetime(pub)
            date = dt.strftime("%d.%m.%Y")
            sort_key = dt.timestamp()
        except Exception:  # noqa: BLE001
            date, sort_key = "", 0.0

        items.append({
            "text": text,
            "source": source,
            "url": (it.findtext("link") or "").strip(),
            "date": date,
            "_sort": sort_key,
        })

    items.sort(key=lambda x: x["_sort"], reverse=True)
    items = items[:MAX_ITEMS]
    for it in items:
        it.pop("_sort", None)

    out = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "_data", "news.json"))
    with open(out, "w") as f:
        json.dump(items, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"wrote {len(items)} headlines -> {out}")


if __name__ == "__main__":
    main()
