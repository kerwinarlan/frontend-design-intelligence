# Fundamental Domain: Color Systems

Color communicates visual depth, functional state, brand personality, and information hierarchy.

---

## Principle 1: The Restrained Color Palette Formula
* **Why**: Unrestricted color usage creates visual chaos and obscures primary calls-to-action.
* **Symptoms of Poor Implementation**: Interfaces using 6 different primary button colors, rainbow gradients, and conflicting card fills.
* **Appropriate Implementation**: Follow the 80-15-5 color discipline formula:
  * **Background Neutrals (80%)**: Off-black/zinc (`#09090B` or `#121215`) for dark mode; off-white (`#FAFAFA` or `#F4F4F5`) for light mode.
  * **Foreground Text Neutrals (15%)**: High contrast primary text (`#F4F4F5` / `#18181B`) and secondary muted text (`#A1A1AA` / `#71717A`).
  * **Accent Hue (5%)**: Single primary brand/action hue (e.g. Electric Blue `#2563EB` or Emerald `#059669`).
* **Examples**:
  ```html
  <button class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">
    Primary Action
  </button>
  ```

---

## Principle 2: Dark Mode Elevation via Tonal Stepping
* **Why**: In dark mode, drop shadows (`box-shadow`) are invisible against dark backgrounds. Elevation and visual depth must be conveyed by making higher-level surfaces progressively lighter zinc/slate tones.
* **Symptoms of Poor Implementation**: Using pure black (`#000000`) for all cards and backgrounds, eliminating spatial depth and causing eye strain.
* **Appropriate Implementation**: Stepped surface tones:
  * Base Background: `#09090B` (`bg-zinc-950`)
  * Elevated Card Surface: `#121215` (`bg-zinc-900`)
  * Hover / Modal Overlay Surface: `#18181B` (`bg-zinc-880` / `bg-zinc-800`)
  * Crisp Border Definition: `#27272A` (`border-zinc-800`)

---

## Principle 3: WCAG AA Text Contrast Compliance
* **Why**: Low contrast text renders interfaces unreadable for users with low vision or in bright outdoor environments. (Source: W3C WCAG 2.2 SC 1.4.3).
* **Symptoms of Poor Implementation**: Light gray text (`#9CA3AF`) on white backgrounds, or dark gray text (`#374151`) on black backgrounds resulting in contrast ratios below 3.0:1.
* **Appropriate Implementation**:
  * Primary Body Copy: Minimum **4.5:1** contrast ratio against background.
  * Large Display Headers (>=24px): Minimum **3.0:1** contrast ratio.
  * Interactive UI Icons & Controls: Minimum **3.0:1** contrast ratio.

---

## Principle 4: Semantic Color Consistency
* **Why**: Color has established universal mental models. Violating semantic color conventions causes user error.
* **Symptoms of Poor Implementation**: Using red for a "Save Success" toast or green for a "Delete Account" button.
* **Appropriate Implementation**:
  * `Info / Interactive`: Blue / Indigo (`text-blue-400`, `bg-blue-500/10`)
  * `Success / Positive`: Emerald / Green (`text-emerald-400`, `bg-emerald-500/10`)
  * `Warning / Caution`: Amber / Yellow (`text-amber-400`, `bg-amber-500/10`)
  * `Destructive / Error`: Rose / Red (`text-rose-400`, `bg-rose-500/10`)

---

## Provenance & Standards References
* W3C Web Content Accessibility Guidelines (WCAG 2.2) - Guideline 1.4.3 (Contrast Minimum)
* Material Design 3 Color System & Apple HIG Color Guidelines
