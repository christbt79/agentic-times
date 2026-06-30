---
title: Do We Need Agents to Manage Our Agents?
category: Perspective
deck: ''
author: The Agentic Times
read_time: 5
date: 2026-06-30T21:13
image: /assets/images/uploads/at_perspective_06.png
---

Salesforce calls it Agent Fabric. Google calls it the Gemini Enterprise Agent Platform. Workday just shipped Agent Passport. Every major enterprise vendor now sells some version of the same idea of an agent, or a fleet of them, whose job is to watch, route, and discipline your other agents round the clock.

The honest answer to the question in this piece's title is yes. We do need this I think, and with increasing urgency. Once an organisation moves past a handful of pilot agents into the hundreds, sometimes thousands, that production deployments now involve, no human team can manually route tasks, resolve conflicts between agents, or decide which one gets to act first. That coordination has to happen somewhere, and it has to happen fast enough to keep up with agents that complete tasks in minutes rather than days.

But I don't think we've sat with the more uncomfortable follow-up question nearly enough. If an orchestrator agent is making consequential decisions, deciding what gets escalated, what gets blocked, which agent's output to trust over another's, then it isn't solving the governance problem. It's actually forcing it one level up.

**A different kind of middle manager**

An orchestrator agent is still an AI agent and it still hallucinates. It still makes judgment calls you can't fully predict in advance. Put it in charge of fifty other agents and you haven't removed the unpredictability from your system, you've concentrated it, and that's the stuff of nightmares for a CTO.

A 2026 research paper on [multi-agent collusion](https://arxiv.org/pdf/2601.00360), mapping human anti-collusion mechanisms onto AI systems, flagged this directly. When governance systems themselves use AI components, there's a real risk of what the authors call meta-level collusion, where the agents being supervised find ways to manipulate or corrupt the supervising layer. Their conclusion is blunt. This creates recursive complexity, governance of the governance, with no natural stopping point.

I keep coming back to that phrase, no natural stopping point. If the answer to "who manages the agents" is "another agent," the next question is obviously who manages that one? Add a human at the top and you've solved it on paper. In practice, you've just shifted the bottleneck to wherever the human sits, and that's where the system actually starts to fail.

**Approval fatigue is where this breaks**

We've covered the data on this before. Rubrik's research found 88% of organisations can't roll back agent actions without wider disruption. Most can't even reliably tell whether an agent was involved in an incident after the fact. Layer an orchestrator on top of that and the human reviewer's job doesn't get easier. It gets buried under a different kind of noise; not raw agent output anymore, but an orchestrator's summarised account of fifty agents' worth of decisions, compressed into something a person is supposed to approve in seconds.

'Approval fatigue' is what security researchers have dubbed what happenes next. Once a human is asked to sign off on too many prompts, the approval step stops functioning as a real check and starts functioning as a reflex. People tend to click yes. How many vibecoders stay on 'Aceept all edits' for example.

That's the trap hiding inside agents managing agents. It looks like governance. It can quietly become its opposite, a thicker, more convincing layer of compliance theatre sitting on top of decisions nobody actually reviewed.

**A different kind of layer cake**

My own view is the fix isn't another agent watching the agent that's watching your agents. It's accepting that orchestration and governance are different jobs, and only one of them should be agentic.

Orchestration, the routing, the task decomposition, the deciding-which-specialist-handles-what, genuinely benefits from an AI layer that can reason about ambiguous, shifting workloads. Governance doesn't need reasoning. It needs to be boring, deterministic, and incorruptible. Hard permission boundaries an agent cannot talk its way around. Audit logs that record what happened rather than an LLM's summary of what happened.

Workday's Agent Passport gets close to this with independent, third-party testing rather than letting agents grade their own homework. That's the right instinct for a mature governance approach. The governance layer should be the most boring, least intelligent part of the entire stack, because boring is what makes it trustworthy.

So yes, we need agents to manage our agents. But we should be honest that this only solves the coordination problem, not the accountability one. The accountability layer underneath it needs to be something dumber, slower, and far harder to fool than the agents it's watching.

Build the smart layer where you need adaptability. Build the safety layer where you need certainty. Confusing the two is how organisations end up with governance that looks sophisticated and catches nothing before it's too late!
