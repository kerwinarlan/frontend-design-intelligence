# Fundamental Domain: Layout & Composition

Interface layout provides structural logic, visual balance, and intuitive focal points across screen sizes.

---

## Principle 1: 4px / 8px Base Grid Discipline
* **Why**: A fixed spatial grid eliminates arbitrary pixel decisions and establishes harmonious rhythm across components.
* **Symptoms of Poor Implementation**: Random `margin-top: 13px`, `padding: 19px`, `gap: 7px` CSS rules creating misaligned cards and buttons.
* **Appropriate Implementation**: All padding, margins, gaps, and component heights MUST be multiples of 4px or 8px (`p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px, `p-12` = 48px).
* **Exceptions**: 1px crisp borders (`border`) or 2px outline rings (`ring-2`) do not offset the 8px grid when using `box-sizing: border-box`.
* **Examples**:
  ```html
  <div class="flex flex-col gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
    <!-- Clean 24px container padding with 16px child gap -->
  </div>
  ```

---

## Principle 2: Content-Driven Asymmetry & Focal Points
* **Why**: Symmetric grids where every card is identical force equal visual weight onto unequal information, boring the viewer. Asymmetry creates a clear scanning anchor.
* **Symptoms of Poor Implementation**: Monotonous 3x3 grids of identical square cards; hero sections where text, image, and buttons all have equal visual prominence.
* **Appropriate Implementation**: Use 2/3 and 1/3 column splits (`grid-cols-1 lg:grid-cols-3`) or feature hero cards that span 2 columns (`lg:col-span-2`).
* **Examples**:
  ```html
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <div class="lg:col-span-2 bg-zinc-900 p-8 rounded-xl border border-zinc-800">
      <!-- Primary Feature / Live Demo (2/3 width) -->
    </div>
    <div class="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
      <!-- Supporting Metrics / Logs (1/3 width) -->
    </div>
  </div>
  ```

---

## Principle 3: Max Container Width Constraints
* **Why**: Unconstrained full-width layouts force users to turn their head side-to-side on widescreen monitors to read text or locate primary actions.
* **Symptoms of Poor Implementation**: Navigation bars where the logo is pinned to x=0px and login button is pinned to x=2560px.
* **Appropriate Implementation**: Wrap page content in max-width containers centered with `mx-auto`:
  * Article / Case Study Prose: `max-w-3xl` (768px)
  * Standard Landing / Marketing Page: `max-w-6xl` (1152px)
  * Widescreen Dashboard / Tool: `max-w-7xl` (1280px) or `max-w-[1400px]`
* **Examples**:
  ```html
  <main class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
    <!-- Constrained content container -->
  </main>
  ```

---

## Principle 4: Optical Header Anchor Ratio
* **Why**: Proximity principle (Gestalt psychology) dictates that a section header must visually belong to the content below it, not the section above it.
* **Symptoms of Poor Implementation**: Equal top and bottom margins on section titles (`my-8`), causing headers to float awkwardly between two unrelated content blocks.
* **Appropriate Implementation**: Top margin above a header MUST be roughly 2x to 3x greater than the bottom margin below it (`mt-16 mb-4` or `pt-12 pb-3`).
* **Examples**:
  ```html
  <section className="pt-16 pb-6">
    <h2 className="text-2xl font-bold text-zinc-100">System Architecture</h2>
    <p className="mt-2 text-sm text-zinc-400">Overview of edge routing layers.</p>
  </section>
  ```

---

## Provenance & Standards References
* W3C CSS Grid Layout Module Level 2 & Flexible Box Layout
* web.dev - Layout & Visual Composition Principles
* Tailwind CSS Grid System Standards
