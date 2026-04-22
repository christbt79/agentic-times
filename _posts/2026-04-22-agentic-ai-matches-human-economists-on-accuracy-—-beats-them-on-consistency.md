---
title: Agentic AI Matches Human Economists on Accuracy — Beats Them on Consistency
category: Dispatches
deck: A new paper from the Federal Reserve Board ran the same economics research task given to 146 human teams through three agentic AI systems. When AI models then rank all submissions, the ordering is the same every time, and humans come last.
author: The Agentic Times
date: 2026-04-22T10:21:00
image: /assets/images/uploads/at_dispatch_human_220426.png
---

A well-established problem is that the same data, given to different research teams with the same question, produces very different answers. A landmark 2025 study by Huntington-Klein et al. demonstrated this at scale: 146 economist teams were each asked to estimate the employment effects of the DACA immigration policy using the same dataset. The spread of answers was striking with estimates ranged across a wide band, driven by thousands of small analytical choices each team made independently about sample construction, research design, and statistical method.

A new working paper from the Federal Reserve Board reran that same exercise with three agentic AIs: Codex with GPT-5.4, Codex with GPT-5.3-Codex, and Claude Code with Opus 4.6. Each model ran 100 independent instances across three progressively constrained versions of the task — 900 total runs — each starting from scratch with no knowledge of the others.

Across all three tasks, the tendency of AI estimates tracked closely with human results. The more significant finding though was in dispersion (the spread, variability, or scattering of data points around a central value). Human economists produced estimates with considerably wider tails: standard deviations up to nine times larger than Codex GPT-5.4 in Task 1, and ranges extending into extreme outliers that no AI model approached. Prescribing the research design in Task 2 reduced AI dispersion substantially — standard deviations fell by 20–45% across models — while human dispersion barely changed. Essentially, AI systems are more sensitive to structured constraints, and when given them, converge more tightly on defensible answers.

The second half of the paper is more striking. Author Serafin Grundl formed 300 comparison groups, each containing one submission from each AI system and one from a human economist. Multiple AI reviewer models then independently ranked each group on methodological quality, with code-level evidence required for every substantive claim. The ranking was identical regardless of which model did the reviewing: GPT-5.4 first, GPT-5.3-Codex second, Opus 4.6 third, humans fourth. Crucially, models showed almost no favouritism toward their own submissions. Opus 4.6 consistently ranked GPT-5.4 and GPT-5.3-Codex ahead of itself!

The paper does not declare victory as such. AI models make errors and cannot yet be assumed error-free simply because recent models improved on their predecessors. The author notes that both caveats apply to human researchers too, and that running multiple AI instances makes it easier to detect errors and map the space of reasonable analytical choices than the equivalent human exercise.

The conclusion is measured but pointed. Agentic AI systems can now perform substantive economics research at human-comparable quality and can do so at a scale and consistency that human teams cannot seem to match.
