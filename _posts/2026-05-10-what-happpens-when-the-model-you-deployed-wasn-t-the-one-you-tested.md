---
title: What Happens When the Model You Deployed Wasn't the One You Tested?
category: Governance
deck: New research from the CDT AI Governance Lab and MIT finds that fine-tuning foundation models produces safety drift that is unpredictable, cross-domain, and poorly governed. For enterprises building agents on customised models, the implications go beyond the training pipeline.
author: The Agentic Times
date: 2026-05-06T18:25:00
image: /assets/images/uploads/at_governance_deploy_060526.png
---

The standard enterprise path to deploying an AI agent now is pretty baked in. Take a capable foundation model, fine-tune it on domain-specific data, embed it as the reasoning core of an agent, and ship it. It's a reasonable approach and has also become routine in ways that are starting to outpace the governance around it.

A new report from the Center for Democracy and Technology's AI Governance Lab, produced with MIT's Algorithmic Alignment Group, identifies a structural problem running through that sequence — one that becomes considerably more serious the moment the model is operating as an agent rather than a tool a human interacts with directly.

The research examined 31 foundation models fine-tuned for medical and legal applications, comparing their safety characteristics against the base models they derived from. The core finding shows that fine-tuning shifts a model's safety behaviour in ways that cannot be predicted in advance, cannot be inferred from the scope of the modification, and do not stay confined to the domain being tuned. A model fine-tuned for specialised medical tasks was found to generate detailed guidance on harm methods that the base model refused outright. A legal variant produced content the base model would not. In both cases the training data was benign and the intended use legitimate. The safety degradation was a side effect, which is precisely what makes it hard to screen for.

The CDT researchers call this "safety drift." It can go in either direction. The direction cannot be reliably anticipated from the training process, which is precisely what makes it a deployment problem rather than just a research one. For a model a human queries directly, safety drift is a problem. For a model running as the core of an autonomous agent, it's a different category of problem entirely.

Agents do not pause for human review before acting. They invoke tools, write communications, query databases, and execute transactions — often in sequences where no human sees the intermediate steps. If the model at the centre of that system has drifted in a domain no one thought to check, the agent acts on it anyway. With 57% of organisations now running agents in production — per LangChain's 2026 State of AI Agents report — this is not a theoretical exposure, it's already distributed across thousands of live deployments.

The report's most pointed governance finding is about accountability, specifically, how badly current frameworks map to where risk actually sits. Most governance approaches treat degree of modification as the primary trigger for scrutiny. The CDT research shows this logic does not hold. Safety drift does not correlate with how much a model was changed. A small fine-tune on harmless data can produce material safety failures; a more extensive modification may not.

The result is a gap that lands on the enterprise deployer. The foundation model provider built and tested a safe base model, but has no visibility into how downstream fine-tuning altered it. The deployer modified the model and embedded it in an agent, but likely never re-evaluated safety after fine-tuning, because no standard yet requires it. When something goes wrong, the agent has already acted, and accountability is genuinely unclear.

The CDT report calls for responsibility to be allocated by expertise rather than modification, shared safety evaluation infrastructure, and formalised transparency mechanisms between providers and deployers. None of those exist in any standardised form today but will be garnering more attention as the industry becomes increasingly agentic in nature.
