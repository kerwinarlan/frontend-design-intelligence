# Fundamental Domain: Color Systems

Color communicates hierarchy, status, brand personality, and functional state.

## 1. The Restrained Color Formula
Modern, high-craft interfaces avoid rainbow palettes in favor of strict color discipline:
* **Background Neutrals (80-85%)**: Base background (`#FAFAFA` or `#09090B`), subtle surface cards (`#FFFFFF` or `#121215`), subtle borders (`#E4E4E7` or `#27272A`).
* **Text & Foreground Neutrals (10-15%)**: High contrast primary text (`#18181B` or `#F4F4F5`), muted secondary text (`#71717A` or `#A1A1AA`).
* **Accent Hue (5%)**: Single primary brand or focus color (e.g., Electric Blue `#2563EB`, Emerald `#059669`, or Monochromatic Zinc/Slate).

## 2. Dark Mode Architectural Principles
* **Never Use Pure Black Backgrounds (`#000000`)**: Pure black causes harsh contrast vibration against bright text and eliminates surface depth. Use deep zinc/slate tones (`#09090B`, `#0C0C0E`).
* **Surface Elevation via Tone, Not Heavy Shadows**: In dark mode, drop shadows are nearly invisible. Represent depth by making elevated cards progressively lighter zinc tones (`#121215` -> `#18181B` -> `#27272A`).

## 3. Contrast Ratios & WCAG Guidelines
* **Primary Body Copy**: Minimum 4.5:1 contrast against background (WCAG AA).
* **Large Display Headers**: Minimum 3.0:1 contrast.
* **Non-Text UI Controls & Borders**: Minimum 3.0:1 contrast.

## 4. Semantic Color Mapping
* `Info / Interactive`: Indigo / Blue (`bg-blue-500`, `text-blue-600`)
* `Success / Positive Metric`: Emerald / Green (`bg-emerald-500`, `text-emerald-600`)
* `Warning / Caution`: Amber / Yellow (`bg-amber-500`, `text-amber-600`)
* `Destructive / Failure`: Rose / Red (`bg-rose-500`, `text-rose-600`)
