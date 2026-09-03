# Core Design Principles

Great web design is not the accumulation of trendy visual effects. It is the elimination of friction, the elevation of content, and the precise expression of intent.

## 1. Function Over Ornamentation
Every visual detail—every shadow, line height, border, and animation—must serve a purpose. If an element does not improve legibility, guide user focus, or communicate state, remove it.

## 2. Typographic Rhythm & Spatial Hierarchy
Typography is 90% of web design. 
* Use modular type scales (e.g., 1.25 Major Third or 1.333 Perfect Fourth).
* Maintain strict spatial rhythm using 4px/8px grid increments.
* Ensure generous line heights for body copy (1.5 - 1.6) and tight line heights for display headers (1.1 - 1.2).

## 3. Purposeful, Restrained Motion
Motion must communicate, not decorate.
* **Spatial Continuity**: Show where elements come from and where they go.
* **Feedback**: Provide immediate tactile feedback on interaction (hover, active, submit).
* **Attention Management**: Direct focus to crucial updates or primary calls to action.
* **Physics & Personality**: Prefer smooth spring physics (`stiffness: 300, damping: 30`) over arbitrary linear transitions.

## 4. Contrast & Color Restraint
* Never use pure black (`#000000`) on pure white (`#FFFFFF`) or vice versa; use subtle off-blacks (`#09090B`, `#121214`) and muted off-whites (`#FAFAFA`, `#F4F4F5`).
* Limit core palette to 1 primary neutral, 1 secondary neutral, and 1 intentional accent hue.
* Ensure all text meets WCAG AA contrast (minimum 4.5:1 for normal text, 3:1 for large text).

## 5. Authentic Storytelling
A developer portfolio or technical project should showcase engineering depth:
* Highlight actual code snippets, architecture diagrams, and measurable performance metrics.
* Avoid generic marketing fluff. Show the real interface doing real work.

## 6. Accessibility & Performance First
* Respect `prefers-reduced-motion`.
* Ensure 100% full keyboard accessibility with clear custom focus rings.
* Use hardware-accelerated CSS properties (`transform`, `opacity`) for smooth 60fps/120fps rendering.
