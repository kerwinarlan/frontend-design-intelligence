# Fundamental Domain: Typography

Typography is the foundational backbone of digital interface design. Correct typography establishes hierarchy, improves readability, and communicates brand character.

## 1. Type Scales & Modular Ratios

Use consistent modular type scales derived from fixed mathematical ratios:

| Token Name | Major Third (1.25) | Perfect Fourth (1.333) | Tailwind Class | Recommended Usage |
|---|---|---|---|---|
| `text-xs` | 12px / 0.75rem | 12px / 0.75rem | `text-xs` | Badges, captions, fine print |
| `text-sm` | 15px / 0.9375rem | 14px / 0.875rem | `text-sm` | Secondary body, metadata, form labels |
| `text-base` | 16px / 1rem | 16px / 1rem | `text-base` | Primary body copy, inputs, buttons |
| `text-lg` | 20px / 1.25rem | 21px / 1.3125rem | `text-lg` | Subheadings, card titles, intro text |
| `text-xl` | 25px / 1.5625rem | 28px / 1.75rem | `text-xl` | H3 headers, section highlights |
| `text-2xl` | 31px / 1.953rem | 37px / 2.333rem | `text-2xl` | H2 section titles |
| `text-3xl` | 39px / 2.441rem | 50px / 3.111rem | `text-3xl` | H1 page titles |
| `text-4xl` | 49px / 3.052rem | 67px / 4.181rem | `text-4xl` | Hero display headlines |

## 2. Line Height (Leading) Rules
* **Display Headlines (>=32px)**: Tight leading (`1.1` to `1.2` / `leading-tight`).
* **Body Copy (14px-18px)**: Generous leading (`1.5` to `1.6` / `leading-relaxed`).
* **Code / Monospace**: Compact leading (`1.4` to `1.5` / `leading-normal`).

## 3. Letter Spacing (Tracking) Rules
* **Large Display Text**: Negative tracking (`tracking-tight` or `-0.02em` to `-0.04em`).
* **Body Text**: Normal tracking (`tracking-normal` / `0`).
* **All-Caps Badges / Labels**: Expanded tracking (`tracking-wider` or `0.05em` to `0.1em`).

## 4. Measure (Line Length)
Optimal reading line length is **45 to 75 characters per line** (approx. `max-w-prose` or `max-w-2xl` in Tailwind). Never let body text stretch across full-width widescreen displays.

## 5. Recommended Modern Variable Font Pairings
* **Clean Tech / Modern Engineering**: Geist Sans (Body) + Geist Mono (Code) + Inter Display (Headers)
* **Editorial / Premium Portfolio**: Newsreader or Serif Display (Headers) + Inter / Geist (Body) + JetBrains Mono (Code)
* **High Density / Dashboard**: SF Pro / System UI + JetBrains Mono / Fira Code
