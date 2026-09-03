# Component Pattern: Card Compositions & Stacks

Cards structure content into distinct visual units.

## Card Patterns

### 1. Elevated Border-Highlight Card
* **Mechanism**: High-contrast solid card (`bg-white` or `bg-zinc-900`) with a crisp 1px neutral border (`border-zinc-200` or `border-zinc-800`). On hover, border transitions smoothly to a primary neutral or accent hue, accompanied by a subtle 2px-4px vertical lift (`-translate-y-1`).

### 2. Interactive Card Stack / Accordion
* **Mechanism**: Cards stacked with slight vertical/horizontal offset (`translate-y-2 scale-95`). Clicking or hovering expands the stack into a spread view.
* **When To Use**: Case study galleries, code snippet comparisons, feature lists.

### 3. Restrained Asymmetric Grid (Refined Bento)
* **Mechanism**: Content-driven grid where cards vary in column span (e.g. 2-column wide card for primary feature, single column cards for secondary metrics).
* **Rule**: Keep corner radii reasonable (8px - 12px). Avoid uniform 24px+ rounded cards.
