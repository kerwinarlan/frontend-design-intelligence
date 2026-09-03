# Component Pattern: Kinetic & Animated Typography

Kinetic typography uses subtle text reveals and character animations to draw focus to primary headlines and key takeaways.

## Key Typographic Patterns

### 1. Staggered Character / Word Mask Reveal
* **Mechanism**: Each word or character is wrapped in an overflow-hidden inline block. The text slides up from `translateY(100%)` to `translateY(0)` with a staggered delay (20ms-50ms per character).
* **When To Use**: Main page hero headline entrance.
* **When NOT To Use**: Long body paragraphs or frequently changing interface labels.

### 2. Kinetic Quote / Highlight Sweep
* **Mechanism**: An accent underline or background highlight expands smoothly (`scaleX(0)` -> `scaleX(1)`) underneath a key phrase after text entrance completes.
* **When To Use**: Pull quotes, key value propositions, portfolio thesis statements.

### 3. Metric Counter Up Roll
* **Mechanism**: Key numbers (e.g. "99.8%", "120 FPS", "<15ms") count up smoothly from 0 to target value using requestAnimationFrame or Framer Motion `useSpring`.
* **When To Use**: Showcase stats, benchmark results, portfolio metrics.
