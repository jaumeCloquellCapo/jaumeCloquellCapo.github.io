---
layout: post
title: Balancing Granularity: The Dynamics of Designing Optimal Microservices
description: This microservice complexity dichotomy is best understood through two opposing lenses — the granularity disintegrators and the granularity integrators
date: 2024-06-15 08:02:44 -0800
tags: Software
---


I just wrapped up reading "Software Architecture: The Hard Parts". It was quite a delightful read, almost akin to a handbook for unraveling the monolith. Solid insights all around, complemented by a practical case study demonstrating these principles in action.


# Service Granularity, Disintegrators

The philosophy of modularity and granularity, while slightly nuanced, essentially dominate the space of microservices. The former is about deconstructing a system into manifold parts, while the latter pertains to the actual proportions of these constituent elements. The struggle, of course, in the world of a software architect, is to strike that elusive balance — a balance between the lean and agile nature of a microservice, and its comprehensiveness that contributes to the umbrella function of the larger system. 


The measure of granularity lies not in the length of the code or the number of classes but in the scope of the service rendered — the perfect ratio is elusive, and therein lies the complexity of determining the optimal granularity.


Software Architecture the Hard Parts book uses the term “Granularity Disintegrators” and “Granularity Integrators” to capture two ideas related to this.

- Granularity Integrators/Disintegrators: When to consider splitting up a service and when not to. 
- Transactional Sagas: Various approaches you may follow in achieving transactionality in distributed architectures.
