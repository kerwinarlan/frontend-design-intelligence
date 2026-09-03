---
name: frontend-audit
description: Non-destructive visual design, typography, layout, motion, accessibility, and anti-slop audit for web repositories. Returns a prioritized improvement score and action plan using the 14-point visual quality rubric.
---

# Skill: Frontend Audit

## Description
Performs a rigorous, non-destructive design analysis of a web application or portfolio project. Scores the codebase against 14 design dimensions and generates a prioritized roadmap of visual and structural improvements.

## WHEN TO USE
* User asks for a "design review", "frontend audit", "code critique", "visual feedback", or "how can I make this look better?" without requesting immediate code changes.
* As the initial phase before executing `/skill:portfolio-polish`.

## WHEN NOT TO USE
* User asks for instant automated refactoring or bug fixes.

---

## WORKFLOW

### Step 1: Codebase Scanning
1. Scan project routes, layouts, tailwind configuration, and primary page components.
2. Identify font imports, color token definitions, container widths, and animation usage.

### Step 2: 14-Point Rubric Assessment
Evaluate the project against [evals/rubric.md](evals/rubric.md) across:
1. Visual Hierarchy
2. Typography
3. Layout & Composition
4. Spacing & Rhythm
5. Color Restraint
6. Interaction Quality
7. Motion Quality
8. Responsiveness
9. Accessibility
10. Content Clarity
11. Technical Storytelling
12. Originality
13. Perceived Craft
14. Portfolio Readiness

### Step 3: Anti-Slop Check
Scan for forbidden anti-patterns defined in [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md) (e.g. glowing border gradients, ambient purple blur blobs, bento grid overload, generic AI slogans).

### Step 4: Report Generation
Generate a structured score breakdown and prioritized improvement checklist.

---

## REQUIRED INSPECTION
* `evals/rubric.md`
* `docs/ANTI_SLOP.md`

## DECISION RULES
* Be objective, precise, and candid. Do not inflate scores out of politeness.
* Focus on actionable code-level remedies (e.g., "Replace `leading-none` on line 42 with `leading-tight`", "Add `tabular-nums` to metric counters").

## OUTPUT
* A Markdown audit report presenting scores, anti-slop findings, and prioritized action steps.
