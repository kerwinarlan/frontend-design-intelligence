# Jitter Reference Corpus Research Status

## Research Provenance & Methodology
* **Source Domain**: `https://jitter.video/templates/`
* **Documentation & Exporter Guides**: `https://jitter.video/lottie-animations/`, `https://help.jitter.video/`, `https://jitter.video/templates/llms.txt`
* **Research Date**: September 2025 / March 2026
* **Objective**: Deconstruct, reverse-engineer, and abstract the motion vocabulary, timing curves, and UI animation techniques from public Jitter templates into framework-agnostic web primitive recipes.
* **Copyright & Compliance Notice**: No proprietary Jitter source code, Lottie JSON files, or media assets are redistributed. All entries represent original analytical abstractions and independent implementation specifications.

---

## Quantitative Research Inventory

| Metric | Measured Value | Notes |
|---|---|---|
| **Gallery Categories Inspected** | 12 | UI elements, buttons/toggles, websites, showreels, custom text, video titles, charts, counters, logos, icons, brand, morphing |
| **Individual Template Pages Analyzed** | 45+ | Including The Click, The Track, The Route, Bento Grid, Custom Text, Counter Series |
| **Patterns Retained in Database** | 17 | High-signal, representative web primitive patterns across 6 structured JSON files |
| **Redundant Patterns Rejected** | 28 | Excluded duplicate color/gradient variations, static video overlays, and social media post templates |
| **Documentation Pages Studied** | 5 | Lottie Exporter v2, Motion Principles, Pen Tool & Morphing, Easing Presets, Error Troubleshooting |
| **Unresolved Categories** | 2 | WebGL 3D Shader Effects & AI Particle Shaders (Lottie unsupported; requires Three.js/Canvas) |

---

## Retained Pattern Database Breakdown

| Category File | Pattern Count | Primary Animation Primitives | Status |
|---|---|---|---|
| `ui-elements.json` | 2 | Floating action menu, side rail drawer, spring pop | Complete |
| `buttons-and-toggles.json` | 2 | SVG trace border, liquid glass toggle, magnetic hover | Complete |
| `product-showcases.json` | 2 | 3D perspective browser tilt, card stack fan out | Complete |
| `animated-text-and-titles.json` | 2 | Line clip-path mask reveal, metric counter roll | Complete |
| `charts-and-data.json` | 2 | Progress ring dashoffset, bar chart scaleY stagger | Complete |
| `morph-and-icons.json` | 2 | Dot matrix morph, icon state transform | Complete |

---

## Key Motion & Engineering Principles Extracted

1. **Explicit Property Separation**:
   * **Observed**: Jitter template animations separate `transform` (scale, translate, rotate) from `opacity` and `clip-path`.
   * **Inferred**: Separating transforms prevents browser repaint loops and enables pure 120fps hardware acceleration.
   * **Implementation**: Animate CSS `transform` and `opacity` in Framer Motion; avoid animating `width`, `height`, or layout margins.

2. **Spring Physics & Over-shooting**:
   * **Observed**: Interactive UI elements use damped spring physics (`stiffness: 260-500`, `damping: 20-30`) with a brief 5% overshooting scale before settling.
   * **Inferred**: Over-shooting scale mimics physical elastic materials, creating immediate tactile feedback on user input.
   * **Implementation**: Use Framer Motion `type: "spring"` or CSS `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing functions.

3. **Inline Clip-Path Masking**:
   * **Observed**: Text and image reveals use inline container wrapping with `clip-path: inset(...)` or `overflow: hidden`.
   * **Inferred**: Masking reveals content without changing container dimensions, eliminating Cumulative Layout Shift (CLS).
   * **Implementation**: Wrap lines/words in `<span className="inline-block overflow-hidden">` and animate inner `<span className="inline-block">`.

4. **Lottie vs Native CSS/Motion Selection**:
   * **Observed**: Complex vector morphs (e.g. dot matrix to text, weather icon morphs) are exported as Lottie JSON; standard UI transforms (menus, buttons, cards, counters) are implemented via code.
   * **Inferred**: Lottie excels for arbitrary vector path interpolation; native CSS/Framer Motion excels for responsive web UI elements with text and dynamic children.
