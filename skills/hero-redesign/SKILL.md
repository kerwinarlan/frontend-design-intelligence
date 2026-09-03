---
name: hero-redesign
description: Art direction and redesign for web hero sections across developer tools, SaaS applications, portfolio showcases, research projects, and dashboards.
---

# Skill: Hero Redesign

## Description
Specialized skill for updating or completely redesigning hero sections to establish immediate clarity, technical authority, and visual craft.

## WHEN TO USE
* User asks to "redesign my hero section", "make the landing page header look professional", "create an impressive hero for my portfolio project", or "fix the top section of my website".

## WHEN NOT TO USE
* Full-site multi-page architecture refactoring.

---

## WORKFLOW

### Step 1: Project Archetype Classification
Read [docs/PORTFOLIO_DESIGN.md](docs/PORTFOLIO_DESIGN.md) and classify the hero type:
* **Interactive Technical Demo Hero**: Code sandbox, live API terminal, syntax highlighted output.
* **Device Mockup Showcase Hero**: Browser frame, mobile preview, live application screenshot.
* **Editorial Portfolio Hero**: Bold kinetic typography, bio statement, stack pills, direct CTA buttons.

### Step 2: Content & Copy Refinement
Read [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md).
* Eliminate generic slogans ("Transform the way you work with AI").
* Formulate clear, specific technical copy explaining what the project actually does, its stack, and its key capabilities.

### Step 3: Layout & Typographic Composition
1. Apply 1.25 or 1.333 modular type scale.
2. Structure 2-column or centered layout with generous vertical air (`py-16` to `py-24`).
3. Add tech stack badges (e.g., Next.js 15, TypeScript, Tailwind CSS, PostgreSQL).

### Step 4: Motion & Interactive Details
1. Implement staggered text reveal for the headline (`knowledge/recipes/staggered-text-reveal.md`).
2. Add device mockup scroll tilt or terminal typing interaction (`knowledge/recipes/device-mockup-choreography.md`).

---

## REQUIRED INSPECTION
* `knowledge/patterns/heroes.md`
* `docs/ANTI_SLOP.md`
* `docs/PORTFOLIO_DESIGN.md`

## DECISION RULES
* Never force generic SaaS marketing layouts onto a technical developer tool or data dashboard.
* Ensure hero headline and primary CTA load with zero Cumulative Layout Shift (CLS).

## OUTPUT
* Updated hero component code with clean typography, stack pills, live mockup/terminal, and staggered text reveal.
