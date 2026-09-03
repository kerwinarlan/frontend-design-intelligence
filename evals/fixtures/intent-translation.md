# Intent Translation Test Fixtures

This document records standardized test cases and benchmark evaluations for `creative-director` intent translation.

---

## Test Fixture 1: "Make it premium."

* **Input Prompt**: *"Make it premium."*
* **Target Project**: SaaS Analytics Application
* **Naive / Flawed Interpretation**: Black background (`#000000`) + metallic gold text (`#D4AF37`) + giant serif fonts.
* **Expected Creative Director Strategy**:
  * **Interpreted Goal**: Increase perceived craft, precision, and visual restraint.
  * **Actions**: Reduce palette to off-black (`#09090B`) + single subtle blue/emerald accent; apply tight tracking on display headers (`tracking-tight`); enforce crisp 1px neutral borders (`border-zinc-800`); add damped spring hover feedback (`active:scale-[0.98]`).
  * **Intervention Level**: Level 1 (Polish) or Level 2 (Redirection).

---

## Test Fixture 2: "Make everything move."

* **Input Prompt**: *"Make everything move so it looks impressive."*
* **Target Project**: Developer Portfolio Project
* **Naive / Flawed Interpretation**: Animate every heading, card, body paragraph, and background icon continuously on loops.
* **Expected Creative Director Strategy**:
  * **Interpreted Goal**: Increase perceived responsiveness, interactivity, and visual energy.
  * **Actions**: Stagger headline word entrance on load; add spring hover lift to feature cards; animate metric counters when scrolled into view; preserve static body copy for reading stamina; enforce `prefers-reduced-motion` compliance.
  * **Intervention Level**: Level 1 (Motion Pass) or Level 2 (Redirection).

---

## Test Fixture 3: "Make this government website futuristic."

* **Input Prompt**: *"Make this government website futuristic."*
* **Target Project**: LGU Municipal Service Portal (`lgu-ph-web`)
* **Naive / Flawed Interpretation**: Cyberpunk neon lights + glowing purple radial orbs + 3D floating crypto shapes.
* **Expected Creative Director Strategy**:
  * **Interpreted Goal**: Transform outdated, clunky municipal portal into a modern, fast, highly competent digital service experience.
  * **Actions**: Apply `knowledge/contexts/lgu-government.md` rules (TRUST > NOVELTY); provide prominent service search bar ("What do you need today?"); feature top municipal services grid (Permits, Taxes, Certificates); add emergency advisory banner; implement mobile thumb-zone navigation.
  * **Intervention Level**: Level 2 (Redirection).

---

## Test Fixture 4: "Make my ML dashboard look impressive."

* **Input Prompt**: *"Make my ML dashboard look impressive for my resume."*
* **Target Project**: ML Model Inference Telemetry Dashboard
* **Naive / Flawed Interpretation**: Replace data tables and metric charts with marketing hero copy and fake customer logos.
* **Expected Creative Director Strategy**:
  * **Interpreted Goal**: Elevate data density, technical storytelling, and real-time execution feedback.
  * **Actions**: Apply `font-mono tabular-nums` to numbers; display P99 execution latency and model confidence scores; add tech stack pills (Next.js 15, WASM, ONNX Runtime); add slide-over drawer for raw payload logs.
  * **Intervention Level**: Level 2 (Redirection) or Level 3 (Showpiece).

---

## Test Fixture 5: "Make this LinkedIn worthy."

* **Input Prompt**: *"Bro this looks vibe-coded. Make it feel like a real LGU portal I can pitch to a mayor, but keep it modern and LinkedIn-worthy. Don't overdo animations."*
* **Target Project**: LGU Web Portal Prototype
* **Naive / Flawed Interpretation**: Generic SaaS landing page with fake testimonials.
* **Expected Creative Director Strategy**:
  * **Interpreted Goal**: Purge AI-slop visual clichés; establish civic authority, official service shortcuts, and high-craft mobile responsiveness.
  * **Actions**: Clean 1px neutral borders; Geist Sans typography; civic blue/gold palette; Playwright visual QA desktop & mobile screenshots.
  * **Intervention Level**: Level 2 (Redirection).
