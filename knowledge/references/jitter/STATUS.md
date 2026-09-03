# Jitter Reference Corpus Research Status

## Research Provenance & Methodology
* **Source Domain**: `https://jitter.video/templates/`
* **Documentation & Exporter Guides**: `https://jitter.video/lottie-animations/`, `https://help.jitter.video/`
* **Research Date**: September 2025 / March 2026
* **Objective**: Deconstruct, reverse-engineer, and abstract the motion vocabulary, timing curves, and UI animation techniques from public Jitter templates into framework-agnostic web primitive recipes.
* **Copyright & Compliance Notice**: No proprietary Jitter source code, Lottie JSON files, or media assets are redistributed. All entries represent original analytical abstractions and independent implementation specifications.

## Categories Analyzed & Coverage

| Category | Reference File | Pattern Count | Primary Animation Primitives | Status |
|---|---|---|---|---|
| **UI Elements & Controls** | `ui-elements.json` | 5 | Scale, spring physics, toggle slide, badge reveal | Complete |
| **Buttons & Toggles** | `buttons-and-toggles.json` | 5 | Glow stroke, trace border, liquid glass, magnetic hover | Complete |
| **Product Showcases** | `product-showcases.json` | 4 | Device frame tilt, card stack reveal, screenshot zoom | Complete |
| **Animated Text & Titles** | `animated-text-and-titles.json` | 4 | Mask clip-path, word stagger, kinetic underline, counter roll | Complete |

## Key Learnings & Motion Attributes Extracted
1. **Spring Physics Preference**: Jitter UI animations heavily rely on damped spring dynamics (`stiffness: 300-400`, `damping: 25-30`) rather than linear CSS easings.
2. **Stagger Intervals**: Micro-interactions use tight stagger delays (30ms - 60ms) to ensure animations feel energetic without causing perceptible lag.
3. **Clip-Path Masking**: Text and card reveals utilize overflow clipping (`clip-path: inset(...)`) to achieve clean inline reveals without causing layout shifts.
4. **Lottie vs CSS/Motion Web Tradeoffs**: Simple transforms (scale, translate, opacity) are best implemented in Framer Motion or pure CSS for accessibility and bundle size; complex vector paths (trace effects, morphing liquid shapes) excel when exported as Lottie JSON files.
