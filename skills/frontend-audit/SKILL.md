---
name: frontend-audit
description: Non-destructive visual design, typography, layout, motion, accessibility, and anti-slop audit for web repositories. Returns a prioritized improvement score and action plan using the 14-point visual quality rubric. Respects design briefs passed down from creative-director.
---

# Skill: Frontend Audit

## Description
Performs a rigorous, non-destructive design analysis of a web application or portfolio project. Scores the codebase against 14 design dimensions and generates a prioritized roadmap of visual and structural improvements. When invoked by `creative-director`, it contextualizes rubric scores relative to the product context (e.g. LGU Portal vs. Portfolio Showpiece).

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User asks for a "design review", "frontend audit", "code critique", "visual feedback", or "how can I make this look better?"

## WHEN NOT TO USE
* User asks for instant automated refactoring or bug fixes.

---

## WORKFLOW

### Step 1: Codebase Scanning
Scan project routes, layouts, tailwind configuration, and primary page components.

### Step 2: Contextual 14-Point Rubric Assessment
Evaluate the project against [evals/rubric.md](evals/rubric.md) and domain context guides in `knowledge/contexts/`.

### Step 3: Anti-Slop Check
Scan for forbidden anti-patterns defined in [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md).

### Step 4: Playwright Visual Capture
Run Playwright browser inspector (`scripts/browser-inspector.ts`) to capture desktop and mobile screenshots. Check horizontal layout overflow.

### Step 5: Report Generation
Generate a structured score breakdown, screenshot log, and prioritized improvement checklist.

---

## REQUIRED INSPECTION
* `evals/rubric.md`
* `docs/ANTI_SLOP.md`
* `knowledge/contexts/`

## DECISION RULES
* Be objective, precise, and candid. Do not inflate scores out of politeness.
* Contextualize scores (e.g., a minimal government portal should not be penalized for lacking experimental 3D motion).

## OUTPUT
* A Markdown audit report presenting scores, anti-slop findings, Playwright screenshot captures, and prioritized action steps.
