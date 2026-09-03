---
name: portfolio-polish
description: Transform modern frontend applications and projects into high-craft, evidence-backed portfolio showpieces. Audits code, typography, layout, motion, storytelling, and anti-slop rules before applying targeted polish. Respects design briefs passed down from creative-director.
---

# Skill: Portfolio Polish

## Description
This is the primary implementation skill for elevating web applications, portfolios, technical demos, and landing pages from visually mediocre or AI-cliché states into senior, production-grade portfolio showpieces. When invoked by `creative-director`, it respects the structured design brief, product context, and intervention level.

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User asks to "polish my portfolio", "make this project look impressive", "redesign this app for hiring managers", or "fix the design of this web app".

## WHEN NOT TO USE
* Simple backend bug fixes or API updates with zero frontend component involvement.

---

## WORKFLOW

### Step 1: Repository & Stack Reconnaissance
1. Read `package.json`, project routes, and main layout files.
2. Determine framework, styling engine, and animation libraries.
3. Check for structured design brief or context passed down from `creative-director`.

### Step 2: Multi-Axis Design Audit
Read [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md), [docs/PORTFOLIO_DESIGN.md](docs/PORTFOLIO_DESIGN.md), and domain context guides in `knowledge/contexts/`. Audit typography, layout, color restraint, motion, and storytelling.

### Step 3: Determine Conceptual Target Level
Apply specified intervention level (Level 1 Polish, Level 2 Redirection, Level 3 Showpiece).

### Step 4: Implementation
Apply targeted code modifications referencing recipes in `knowledge/recipes/`. Preserve existing application logic.

### Step 5: Verification & Playwright QA
Run Playwright browser inspector (`scripts/browser-inspector.ts`) to capture desktop and mobile viewports. Verify `prefers-reduced-motion` compliance.

---

## REQUIRED INSPECTION
1. `docs/ANTI_SLOP.md`
2. `docs/PORTFOLIO_DESIGN.md`
3. `evals/rubric.md`

## DECISION RULES
* Respect product context (e.g. TRUST > NOVELTY for LGU portals).
* **MORE ANIMATION DOES NOT EQUAL BETTER DESIGN**.
* Maintain 100% full keyboard accessibility and WCAG AA text contrast.

## OUTPUT
1. Direct, high-precision code modifications in project files.
2. Summary report detailing changes made, anti-slop patterns removed, and visual QA results.
