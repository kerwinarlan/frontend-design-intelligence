---
name: portfolio-polish
description: Transform modern frontend applications and projects into high-craft, evidence-backed portfolio showpieces. Audits code, typography, layout, motion, storytelling, and anti-slop rules before applying targeted polish.
---

# Skill: Portfolio Polish

## Description
This is the primary orchestration skill for elevating web applications, portfolios, technical demos, and landing pages from visually mediocre or AI-cliché states into senior, production-grade portfolio showpieces.

## WHEN TO USE
* User asks to "polish my portfolio", "make this project look impressive", "redesign this app for hiring managers", or "fix the design of this web app".
* Preparing a project for portfolio showcase, client pitch, LinkedIn demo video, or GitHub README presentation.

## WHEN NOT TO USE
* Simple backend bug fixes or API updates with zero frontend component involvement.
* Strictly formatted internal command-line utilities without a web interface.

---

## WORKFLOW

### Step 1: Repository & Stack Reconnaissance
1. Read `package.json`, project routes, and main layout files.
2. Determine framework (Next.js, React, Vite, Vue, Astro), styling engine (Tailwind CSS, CSS Modules, Styled Components), and animation libraries installed (Framer Motion, GSAP, Lottie).
3. Identify how to run the application (`npm run dev` or `npm run build`).

### Step 2: Multi-Axis Design Audit
Read [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md) and [docs/PORTFOLIO_DESIGN.md](docs/PORTFOLIO_DESIGN.md). Audit:
* **Visual Hierarchy & Typography**: Type scale, line height, font pairing, letter spacing.
* **Layout & Spacing**: 4px/8px grid alignment, container widths, responsive reflow.
* **Color Discipline**: Neutral contrast ratios, background depth, single accent hue usage.
* **Interaction & Motion**: Hover states, focus rings, spring physics, reduced motion support.
* **Portfolio Storytelling**: Tech stack badges, live architecture visualization, metric callouts.
* **Anti-Slop Enforcement**: Flag and remove purple radial orbs, glowing rainbow borders, uniform 24px rounded bento grids, and generic AI slogans.

### Step 3: Determine Conceptual Target Level
Choose the appropriate level with the user:
* **CONSERVATIVE**: Retain visual structure. Fix typography, spacing, contrast, focus states, and component alignment.
* **PORTFOLIO**: Materially improve layout presentation, add stack badges, interactive micro-demos, and polished transitions.
* **SHOWPIECE**: Full art-directed transformation. Custom hero mockup, kinetic typography, sticky storytelling, and advanced choreography.

### Step 4: Implementation
1. Apply targeted code modifications.
2. Re-use existing components and stdlib before introducing new dependencies.
3. Reference recipes in `knowledge/recipes/` for code patterns.

### Step 5: Verification & Self-Critique
1. Execute build or test commands to ensure zero functional regressions.
2. Inspect responsive breakpoints (`sm`, `md`, `lg`, `xl`).
3. Verify `prefers-reduced-motion` compliance.
4. Produce a summary `DESIGN_REPORT.md` if requested.

---

## REQUIRED INSPECTION
Before editing any frontend code, agents MUST inspect:
1. `docs/ANTI_SLOP.md`
2. `docs/PORTFOLIO_DESIGN.md`
3. `evals/rubric.md`

## DECISION RULES
* **MORE ANIMATION DOES NOT EQUAL BETTER DESIGN**. Only add motion that communicates state, spatial continuity, or key data.
* Never break existing application logic or data flow while updating visual layout.
* Maintain 100% full keyboard accessibility and WCAG AA text contrast.

## OUTPUT
1. Direct, high-precision code modifications in project files.
2. Summary report detailing changes made, anti-slop patterns removed, and testing performed.
