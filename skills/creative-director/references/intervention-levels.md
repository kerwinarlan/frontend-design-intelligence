# Design Intervention Levels

The Creative Director selects an appropriate intervention level based on codebase maturity, user goals, and current visual quality.

---

## Level 1: Polish (Component Micro-Refinement)

### When To Use
* Overall layout, information architecture, and visual system are already strong.
* Functionality and component boundaries are clear.
* Project simply needs micro-refinements.

### Scope of Changes
* Calibrate typography scale and line heights (`leading-tight`, `leading-relaxed`).
* Enforce 4px/8px grid padding (`p-2`, `p-4`, `p-6`).
* Complete missing 5-state interaction controls on buttons and inputs.
* Add explicit keyboard focus rings (`focus-visible:ring-2`).
* Add `font-mono tabular-nums` to dynamic numbers.
* Fix mobile responsive overflow details.

### Primary Specialist Skills
* `ui-polish`
* `motion-pass`

---

## Level 2: Redirection (Visual System & Layout Overhaul)

### When To Use
* Current visual direction looks generic, vibe-coded, or mismatched with its real audience (e.g. an LGU site looking like a fintech app).
* Information hierarchy is confusing or hero section is misleading.
* Component cards are inconsistent or over-rounded.

### Scope of Changes
* Establish new coherent design system direction (colors, typography, radii, borders).
* Redesign hero section with direct technical/civic copy, stack pills, and live mockup.
* Consolidate card layouts into asymmetric 2/3 and 1/3 content-driven grids.
* Overhaul navigation headers and mobile thumb rails.
* Integrate staggered entrances and spring micro-interactions.

### Primary Specialist Skills
* `hero-redesign`
* `ui-polish`
* `motion-pass`

---

## Level 3: Re-Art Direction / Showpiece (Full Transformation)

### When To Use
* Project is a centerpiece portfolio item or major showcase.
* User explicitly requests a top-tier showpiece transformation.
* Existing application functionality can support rich presentation without losing usability.

### Scope of Changes
* Full art-directed visual transformation.
* Custom perspective device mockups with scroll tilt.
* Staggered kinetic typography and line mask reveals.
* Sticky side-by-side architecture storytelling sections.
* Shared-element layout transitions (`layoutId`).
* Complete Playwright browser inspection and visual QA before/after diffs.

### Primary Specialist Skills
* `portfolio-polish` (orchestrating `hero-redesign`, `ui-polish`, `motion-pass`)
