# Agent Instructions - Frontend Design Intelligence

This document specifies operational standards for AI coding agents modifying or extending `frontend-design-intelligence`.

## Mission
Provide an actionable, evidence-based design, motion, UI/UX, and portfolio polish intelligence system for coding agents. Transform technically functional web applications into polished, memorable, and high-craft portfolio showpieces without breaking functionality or adding generic AI visual slop.

## System Architecture
The repository uses progressive disclosure across five primary layers:
1. **Pi Skills (`.pi/skills/`)**: Lightweight workflow orchestrators loaded on-demand by Pi Agent.
2. **Docs (`docs/`)**: System architecture, design principles, taxonomy, anti-slop guidelines, and portfolio storytelling frameworks.
3. **Knowledge (`knowledge/`)**: Deep domain knowledge covering fundamentals, pattern libraries, structured reference databases, and implementation recipes.
4. **Evaluations (`evals/`)**: Quantitative and qualitative design rubrics plus automated inspection utilities.
5. **Tooling (`scripts/`)**: CLI validation tools for schema enforcement, skill verification, and project auditing.

## Anti-Slop Requirements
Agents modifying code or recommendations in this system MUST strictly enforce the anti-slop guidelines in `docs/ANTI_SLOP.md`:
* **Banned visual clichés**: Purple/blue glowing gradients, giant glassmorphism panels without contrast, glowing borders everywhere, generic bento grids, decorative ambient orbs, generic SaaS copy ("Revolutionize your workflow", "Powered by AI"), excessive 24px+ card border radii.
* **Required design attributes**: High contrast legibility, restrained color palettes (maximum 2-3 hues), precise typographic scale, clear visual hierarchy, intentional motion that communicates state/spatial continuity, and authentic project storytelling.

## Knowledge Contribution Rules
When adding new knowledge, references, patterns, or recipes:
1. **Search Before Creation**: Search `knowledge/` to prevent duplicate pattern entries or overlapping recipes.
2. **Reference Provenance**: Retain source URLs, platform names, and observed attributes for all external references. Never fabricate observations.
3. **Structured Fields**: Reference records MUST populate required JSON fields (composition, motion primitives, choreography, CSS/Motion/GSAP/Lottie feasibility, use cases).
4. **Implementation Recipes**: Every recipe MUST explicitly document: `WHY`, `WHEN TO USE`, `WHEN NOT TO USE`, `ACCESSIBILITY`, `PERFORMANCE`, and `IMPLEMENTATION OPTIONS`.

## Verification Gate
Before completing any task in this repository, agents MUST run:
```bash
npm run validate
```
Ensure all TypeScript scripts compile cleanly and pass validation.
