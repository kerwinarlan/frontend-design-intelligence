# Context Guide: AI / ML Products & Telemetry Interfaces

AI/ML monitoring tools, model telemetry dashboards, and inference engines showcase machine learning performance and model outputs.

## Core Design Principles

1. **Telemetry Over Hype**: Focus on latency metrics (P50/P99 ms), model confidence scores (%), token throughput (tok/s), and memory usage.
2. **Transparent Input/Output Streams**: Display raw prompt inputs, token breakdowns, and system responses clearly.
3. **Restrained Accent Lighting**: Use subtle single-hue status indicators (Emerald for active model, Amber for queued, Rose for failed) rather than purple/pink ambient blur clouds.

## Inappropriate Patterns
* Plastering "Powered by AI Revolution" on every card.
* Unreadable purple-to-pink gradient text.
* Hiding model execution latency or error rates.
