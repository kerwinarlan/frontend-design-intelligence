# Agent Instructions - Frontend Design Intelligence

This document specifies operational standards for AI coding agents modifying or extending `frontend-design-intelligence`.

## Mission
Provide an actionable, evidence-based design, motion, UI/UX, intent translation, and portfolio polish intelligence system for coding agents. Transform technically functional web applications into polished, memorable, and high-craft portfolio showpieces without breaking functionality or adding generic AI visual slop.

## System Architecture
The repository uses progressive disclosure across five primary layers:
1. **Orchestrator Skill (`skills/creative-director/`)**: Master skill that translates informal user intent, generates structured briefs, classifies product context, and delegates to specialist skills.
2. **Specialist Skills (`skills/`)**: Lightweight workflow orchestrators loaded on-demand by Pi Agent (`portfolio-polish`, `frontend-audit`, `motion-pass`, `hero-redesign`, `ui-polish`, `study-reference`).
3. **Docs & Contexts (`docs/`, `knowledge/contexts/`)**: System architecture, design principles, taxonomy, anti-slop guidelines, portfolio frameworks, and domain context guides (LGU, Dashboard, DevTool, AI/ML, Portfolio).
4. **Knowledge & Recipes (`knowledge/`)**: Deep domain knowledge covering fundamentals, pattern libraries, structured reference databases (Jitter), and framework code recipes (React, Tailwind, Motion, GSAP).
5. **Evaluations & Tooling (`evals/`, `scripts/`)**: 14-point visual quality rubric, Playwright browser inspector, automated schema validators, and project audit CLI.

## Anti-Slop Requirements
Agents modifying code or recommendations in this system MUST strictly enforce the anti-slop guidelines in `docs/ANTI_SLOP.md`:
* **Banned visual clichés**: Purple/blue glowing gradients, giant glassmorphism panels without contrast, glowing borders everywhere, generic bento grids, decorative ambient orbs, generic SaaS copy ("Revolutionize your workflow", "Powered by AI"), excessive 24px+ card border radii.
* **Required design attributes**: High contrast legibility, restrained color palettes (maximum 2-3 hues), precise typographic scale, clear visual hierarchy, intentional motion that communicates state/spatial continuity, and authentic project storytelling.

## Intent Translation Standards
When invoked via `/skill:creative-director`:
1. **Never demand a formal brief from the user**: The primary role of `creative-director` is to generate the brief from vague inputs ("Make it look legit", "Parang mas premium sana", "Vibe-coded").
2. **Satisfy underlying objectives**: Distinguish *what the user said* from *what they actually want to achieve*.
3. **Domain Context Respect**: Enforce domain-specific rules (e.g. TRUST > NOVELTY for LGU municipal portals per `knowledge/contexts/lgu-government.md`).

## Verification Gate
Before completing any task in this repository, agents MUST run:
```bash
npm run validate
```
Ensure all TypeScript scripts compile cleanly, all 7 Pi skills validate, and JSON reference schemas pass.
