# Component Pattern: Scroll Mechanics & Storytelling

Scroll-driven mechanics link page scrolling directly to visual progress and content reveals.

## Scroll Patterns

### 1. Sticky Storytelling Section
* **Mechanism**: Left column remains sticky (`sticky top-24`) explaining architecture steps (Step 1 -> Step 2 -> Step 3), while the right column scrolls matching code samples or UI states.

### 2. Scroll Progress Bar
* **Mechanism**: 2px accent line fixed at top of screen reflecting document read progress (`scaleX(scrollPercentage)`).

### 3. Horizontal Scroll Gallery
* **Mechanism**: Vertical scroll triggers horizontal translation (`translateX`) across a gallery track of case study cards.
* **Warning**: Never hijack native trackpad inertia completely; use CSS scroll snap (`scroll-snap-type: x mandatory`) where possible.
