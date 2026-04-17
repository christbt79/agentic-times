---
title: MIT Researchers Find a Smarter Way to Build Leaner AI Models
category: Dispatches
deck: A new technique called CompreSSM compresses AI models during training rather than after — cutting compute costs significantly while actually outperforming models trained small from the start.
author: The Agentic Times
date: 2026-04-13T09:17:00
image: /assets/images/uploads/at_dispatch_mit_130426.png
---

One of the least glamorous but most consequential problems in AI development is the cost of training large models. The compute bills are enormous, the energy consumption significant, and the time required to produce a production-ready model can stretch to weeks. A new technique from researchers at MIT's Computer Science and Artificial Intelligence Laboratory may not solve all of those problems — but it makes a serious dent in them.

The method, called CompreSSM, takes a fundamentally different approach to model compression. Conventional wisdom has long held that you have two options: train a large model and trim it down afterwards, or train a small model from scratch and accept weaker performance. CompreSSM sidesteps both by compressing the model during training itself — identifying which internal components are actually contributing to the model's performance and discarding the rest before the bulk of training even begins.

The mechanism relies on a mathematical concept called Hankel singular values, borrowed from control theory. These values measure how much each internal component of a model contributes to its overall behaviour. The MIT team found that the relative importance of these components stabilises remarkably early — after roughly 10 percent of the training process. Once that ranking is established, the dead weight can be safely cut, and the remaining 90 percent of training runs on a significantly smaller, faster model.

The results are striking. On image classification benchmarks, a model compressed to roughly a quarter of its original size achieved 85.7 percent accuracy — compared to just 81.8 percent for a model trained at that size from scratch. On the Mamba architecture, one of the most widely deployed state-space models, the technique delivered approximately four times faster training speeds.

For the agentic AI field specifically, this matters for a reason that goes beyond raw cost savings. Agentic systems often need to run continuously, process inputs rapidly, and operate across distributed infrastructure. Smaller, faster models that don't sacrifice capability are directly relevant to making those deployments practical and economical at scale.

Lead author Makram Chahine, a PhD student at MIT CSAIL, described the core insight simply: the model is getting rid of parts that are not useful to its development even as it learns. Senior author and MIT professor Daniela Rus framed the broader significance — this turns compression from an afterthought into part of the learning process itself.

The research was accepted at the International Conference on Learning Representations 2026 and will be presented later this month. The team has already demonstrated extensions to more complex architectures, with transformer-adjacent models the stated next frontier.

It is the kind of foundational research that rarely makes headlines but quietly shapes what becomes possible in the years that follow.
