---
title: GitHub Rolls Out Agent-Signed Commits
category: Coding
deck: GitHub's coding agent now signs every commit it makes, clearing the one branch protection rule that used to shut it out entirely.
author: The Agentic Times
date: 2026-04-06T19:47
image: /assets/images/uploads/at_coding_060426.png
---

GitHub's Copilot cloud agent now signs every commit it makes, and that fixes a real problem around agentic code governance.

Signed commits show up as \`Verified\` on GitHub. They prove a commit genuinely came from whoever (or whatever) claims to have made it, and that nobody tampered with it after the fact. Plenty of engineering teams require this. Security-conscious ones often mandate it through a branch protection rule called "Require signed commits."

Until now, that rule blocked Copilot's cloud agent outright. The agent had no way to sign, so repos enforcing the rule simply couldn't use it. Not degraded performance, not a workaround. Just locked out.

That's no longer the case. Commits from the agent now carry a verified signature like any other, which means repos that previously had no path to agentic coding at all now do.

It's a small change with an outsized effect on adoption. Plenty of enterprise teams run with strict commit signing as a baseline security requirement, non-negotiable, full stop. For those teams, this wasn't a missing feature. It was a hard wall. Now it isn't.

Worth watching whether this becomes the norm other coding agent vendors get pressured to match. Commit signing is a basic trust mechanism in software supply chains, and as agents take on more autonomous commit and PR activity, "did a human or a machine actually make this change, and can you prove it" stops being a nice-to-have question. Expect more vendors to ship signing support as default, not bolted on after the fact.
