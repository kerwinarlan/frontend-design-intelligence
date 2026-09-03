# Fundamental Domain: Typography

Typography is 90% of web interface design. Correct typography establishes hierarchy, improves reading stamina, and communicates engineering craft.

---

## Principle 1: Modular Type Scales & Mathematical Ratios
* **Why**: Arbitrary font sizes cause visual noise and irregular reading rhythm. A modular type scale derives every size from a consistent mathematical ratio.
* **Symptoms of Poor Implementation**: Random `text-[13px]`, `text-[17px]`, `text-[22px]` classes scattered across components; headings that blend into body copy.
* **Appropriate Implementation**: Use standard modular scales derived from 1.25 (Major Third) or 1.333 (Perfect Fourth).
  ```
  text-xs  : 12px / 0.75rem   (Captions, badges, fine print)
  text-sm  : 14px / 0.875rem  (Secondary labels, metadata, inputs)
  text-base: 16px / 1.0rem    (Primary body copy, default text)
  text-lg  : 20px / 1.25rem   (Subheadings, card titles)
  text-xl  : 25px / 1.5625rem (H3 section headers)
  text-2xl : 31px / 1.95rem   (H2 page section headers)
  text-3xl : 39px / 2.44rem   (H1 page titles)
  text-4xl : 49px / 3.05rem   (Hero display headlines)
  ```
* **Exceptions**: Dashboard data tables may use compact 13px text (`text-[13px]`) for high density when balanced with adequate row height.
* **Examples**:
  ```html
  <h1 class="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
    System Metrics Telemetry
  </h1>
  ```

---

## Principle 2: Line Height (Leading) Calibration
* **Why**: Large display headers require tight leading to keep multi-line titles visually grouped; small body text requires generous leading so eyes do not jump lines.
* **Symptoms of Poor Implementation**: Default `leading-normal` on 48px headlines causing massive gaps between lines, or `leading-none` on long body paragraphs causing overlapping descenders.
* **Appropriate Implementation**:
  * Display Headlines (>=32px): `leading-tight` (1.1 - 1.2) or `leading-[1.15]`.
  * Body Copy (14px - 18px): `leading-relaxed` (1.5 - 1.6) or `leading-6`.
  * Monospace / Code (12px - 14px): `leading-normal` (1.4 - 1.5).
* **Exceptions**: Single-line button labels and pill badges use `leading-none` with explicit vertical padding.

---

## Principle 3: Letter Spacing (Tracking) & Optical Sizing
* **Why**: As font sizes increase, character counter-forms expand optically, requiring tighter tracking to preserve word shapes. Small uppercase labels require expanded tracking for legibility.
* **Symptoms of Poor Implementation**: Large 64px display headers with loose default character spacing; all-caps badges with jammed together letters.
* **Appropriate Implementation**:
  * Large Headlines (>=32px): `tracking-tight` (`-0.02em` to `-0.03em`).
  * All-Caps Badges / Sub-headers: `tracking-wider` or `tracking-widest` (`0.05em` to `0.1em`).
* **Examples**:
  ```html
  <span class="text-xs font-mono uppercase tracking-widest text-blue-400">
    Architecture Pipeline
  </span>
  ```

---

## Principle 4: Measure (Line Length) Control
* **Why**: Reading stamina degrades when lines exceed 75 characters because the eye struggles to find the start of the next line. (Source: W3C C20 / MDN Web Docs).
* **Symptoms of Poor Implementation**: Body copy stretching across 1920px widescreen monitors.
* **Appropriate Implementation**: Enforce `max-w-prose` (approx 65ch) or `max-w-2xl` on text containers.
* **Examples**:
  ```html
  <p class="mt-4 text-sm text-zinc-400 leading-relaxed max-w-prose">
    Sub-millisecond model execution engine running ONNX models directly at edge nodes.
  </p>
  ```

---

## Principle 5: Monospace Tabular Figures for Dynamic Numbers
* **Why**: Proportional numbers (where '1' is narrower than '8') cause layout jitter and width shifts when values update dynamically.
* **Symptoms of Poor Implementation**: KPI cards or metric counters twitching horizontally as numbers change.
* **Appropriate Implementation**: Always apply `font-mono tabular-nums` or `font-feature-settings: "tnum"` to dynamic metrics.
* **Examples**:
  ```html
  <span class="font-mono text-4xl font-bold tracking-tight text-zinc-100 tabular-nums">
    99.84%
  </span>
  ```

---

## Provenance & Standards References
* W3C Web Content Accessibility Guidelines (WCAG 2.2) - Guideline 1.4.12 (Text Spacing)
* MDN Web Docs - Fundamental Typography & Line Height Guidelines
* Geist Font System Specs (Vercel) & SF Pro Typography Guidelines (Apple HIG)
