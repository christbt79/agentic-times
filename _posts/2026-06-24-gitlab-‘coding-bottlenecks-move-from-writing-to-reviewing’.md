---
title: 'GitLab: ‘Coding Bottlenecks Move From Writing to Reviewing’'
category: Governance
deck: GitLab surveyed more than 1,500 DevSecOps pros and found the real story isn't how fast AI writes code. It's that almost nobody can govern what happens to it afterwards.
author: The Agentic Times
date: 2026-06-24T10:25
image: /assets/images/uploads/at_governance_240626.png
---

Hardly anyone would dispute that AI coding tools have delivered on the productivity promise, given how fast code generation is with the likes of Claude Code, Codex, and Cursor. Yet dev teams are shifting from writers to reviewers, and that might not deliver the benefits enterprises are expecting.

GitLab's new AI Accountability Report, based on a Harris Poll survey of 1,528 DevSecOps professionals, found 91% of organisations now run two or more AI coding tools in active use. Six in ten say ROI has exceeded expectations from that approach. Developers are writing and committing code faster than before, and most say overall code quality has held up.

Respondents now spend just 16% of their time writing new code. The rest has shifted downstream, into review, security scanning, compliance, and deployment, the stages AI hasn't sped up at all. We're caught in a moment where productivity gains have shifted rather than reduced, with 85% agreeing the bottleneck has moved from writing code to validating it.

Faster code generation means more code arriving for review, and reviewing AI output carries a different burden than reviewing a colleague's pull request. Developers are now validating logic they didn't write and may not fully follow, at a volume no human review process was built to absorb, with the majority admitting their existing review processes weren't designed for this scale.

The stats from the report make this clear. 84% say the biggest challenge with AI-generated code is governing what happens to it after it's created, not generating it well in the first place. Almost the same number, 82%, agree it risks becoming a new form of technical debt most organisations aren't prepared to manage.

It becomes an even deeper concern for security teams who are now struggling to tell code apart. 43% of respondents can't reliably tell which code in their own codebase was AI-generated and which wasn't. When a production incident hits, 34% of organisations couldn't conclusively determine whether AI-generated code played a role, despite 87% saying beforehand they'd be confident doing exactly that within 24 hours.

The gap between confidence and capability is the report's sharpest finding. Teams believe they can answer the basic accountability questions, where did this code come from, what was it meant to do, who owns it in production, right up until something actually breaks.

Less than a third of organisations say their software lifecycle tools are fully integrated with shared data and workflows. Most run a patchwork where code generation, security scanning, and deployment tooling don't share context, so nobody has a single place to trace a change back to its origin.

To GitLab's credit, the response from respondents isn't denial. 77% already have some formal policy governing how AI-generated code gets reviewed and deployed, and 91% plan to invest further in governance tooling over the next year. Nearly all have either already allocated or expect to allocate budget for it soon.

Code generation got solved faster than anyone expected. Knowing what to do with the code once it exists is the problem nobody's quite solved yet, and it's one we'll keep tracking as more research lands on the same question in the months ahead. With super powerful tools like Anthropic's Fable 5 (temporarily suspended), illustrating the vulnerability issues of AI coding, how quickly can human reviewers be upskilled to cope?
