# System Architecture

## Overview
`frontend-design-intelligence` provides a structured, progressive-disclosure intelligence layer for coding agents. It bridges the gap between raw functionality and high-craft frontend presentation.

```mermaid
graph TD
    A[User Request / Pi Agent] --> B[Pi Skill Layer]
    B --> C[Portfolio Polish]
    B --> D[Frontend Audit]
    B --> E[Motion Pass]
    B --> F[Hero Redesign]
    B --> G[UI Polish]
    B --> H[Study Reference]

    C & D & E & F & G & H --> I[Docs & Design Principles]
    C & D & E & F & G & H --> J[Knowledge Base]

    J --> K[Fundamentals]
    J --> L[Patterns]
    J --> M[References & Jitter]
    J --> N[Recipes - CSS/Motion/GSAP/Lottie]

    C & D --> O[Evaluation Rubric]
    O --> P[Design Report / Code Changes]
```

## Architectural Layers

### 1. Progressive Disclosure Skill Layer
Skills in `.pi/skills/` are kept compact to minimize token overhead in agent system prompts. Each `SKILL.md` contains concise instructions, decision workflows, and pointers to deeper knowledge docs.

### 2. Knowledge Retrieval Architecture
Knowledge is partitioned into four clear tiers in `knowledge/`:
* `fundamentals/`: Core web UI/UX mechanics (typography, layout, responsive design, color, accessibility, performance, storytelling).
* `patterns/`: Reusable UI compositions and interaction patterns.
* `references/`: Structured JSON databases of analyzed motion and design benchmarks (starting with Jitter).
* `recipes/`: Copy-pasteable, frameworks-aware code snippets (Tailwind, Framer Motion, GSAP, Lottie, vanilla CSS).

### 3. Evaluation & Quality Control Layer
Located in `evals/`. Defines a 14-point evaluation rubric and provides structured tools for before/after visual and architectural comparison.

### 4. Tooling & Automation Layer
Located in `scripts/`. Provides executable scripts to:
* Validate skill declarations against Agent Skills specification.
* Validate JSON schema and cross-document references in knowledge bases.
* Audit target frontend projects for stack detection, anti-slop violations, and missing interaction states.

## Scalability & Extensibility
The architecture accommodates future reference corpora beyond Jitter (e.g. Stripe, Linear, Vercel, Apple, or custom client design systems) without altering the core skill interface.
