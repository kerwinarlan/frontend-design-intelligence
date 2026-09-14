---
name: hero-redesign
description: Art direction and redesign for web hero sections across developer tools, SaaS applications, portfolio showcases, research projects, dashboards, and government portals. Respects briefs passed down from creative-director.
---

# Skill: Hero Redesign

## Description
Specialized skill for updating or completely redesigning hero sections to establish immediate clarity, technical authority, and visual craft. When invoked by `creative-director`, it respects product context, target audience, and desired perception model.

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User asks to "redesign my hero section", "make the landing page header look professional", "create an impressive hero for my portfolio project", or "fix the top section of my website".

## WHEN NOT TO USE
* Full-site multi-page architecture refactoring.

---

## WORKFLOW

### Step 1: Context & Archetype Classification
Read [docs/PORTFOLIO_DESIGN.md](docs/PORTFOLIO_DESIGN.md) and domain context guides in `knowledge/contexts/`. Classify the hero type:
* **LGU Municipal Service Hero**: Official municipality title, quick service search bar, emergency hotline button.
* **Interactive Technical Demo Hero**: Code sandbox, live API terminal, syntax highlighted output.
* **Device Mockup Showcase Hero**: Browser frame, mobile preview, live application screenshot.
* **Editorial Portfolio Hero**: Bold kinetic typography, bio statement, stack pills, direct CTA buttons.

### Step 2: Content & Copy Refinement
Read [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md). Replace generic slogans ("Revolutionize your workflow with AI") with direct, specific technical or service copy.

### Step 3: Layout & Typographic Composition
Apply modular type scale, 4px/8px grid spacing, and stack badges or service shortcuts.

### Step 4: Motion & Interactive Details
Implement staggered text reveals (`knowledge/recipes/staggered-text-reveal.md`) and Playwright visual capture.

---

## REQUIRED INSPECTION
* `knowledge/patterns/heroes.md`
* `knowledge/patterns/canvas-hero-backgrounds.md`
* `docs/ANTI_SLOP.md`
* `knowledge/contexts/`

## DECISION RULES
* Never force generic SaaS marketing layouts onto a civic portal or technical data dashboard.
* Ensure hero headline and primary CTA load with zero Cumulative Layout Shift (CLS < 0.1).

## OUTPUT
* Updated hero component code with clean typography, stack pills/service shortcuts, live mockup/terminal, and Playwright visual capture.
