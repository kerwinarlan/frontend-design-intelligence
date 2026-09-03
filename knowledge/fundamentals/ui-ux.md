# Fundamental Domain: UI / UX Mechanics

User Experience relies on clear affordances, predictable state transitions, and immediate feedback loops.

---

## Principle 1: Complete 5-State Component Definition
* **Why**: Users rely on visual state shifts to understand whether an element is interactive, loading, focused, or disabled.
* **Symptoms of Poor Implementation**: Static buttons that show zero feedback when hovered or clicked; missing focus rings during keyboard navigation.
* **Appropriate Implementation**: Every interactive element MUST explicitly handle:
  1. **Default / Rest**: Clear visual affordance (button container, link underline, border).
  2. **Hover**: Subtle shift indicating interactivity (5-10% brightness shift, 1px lift, background fill shift).
  3. **Focus**: Prominent focus ring for keyboard navigation (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`).
  4. **Active / Pressed**: Immediate tactile click response (`active:scale-[0.98]`).
  5. **Disabled**: Reduced opacity (`opacity-50`), `cursor-not-allowed`, removed pointer events (`pointer-events-none`).
* **Examples**:
  ```html
  <button class="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-4 py-2 rounded-lg transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none">
    Submit Query
  </button>
  ```

---

## Principle 2: Progressive Disclosure
* **Why**: Presenting every feature simultaneously overloads working memory (Hick's Law / Cognitive Load Theory).
* **Symptoms of Poor Implementation**: Cluttered dashboards with 50 visible form inputs and competing modal buttons.
* **Appropriate Implementation**: Reveal advanced options on-demand using accordions, tabs, dropdowns, or expandable drawers.
* **Examples**: Showing high-level KPI cards on initial view, revealing raw JSON logs inside an expandable side drawer upon row click.

---

## Principle 3: Skeleton Loaders vs. Layout Shift Prevention
* **Why**: Dynamic content loading should preserve layout geometry to avoid Cumulative Layout Shift (CLS < 0.1).
* **Symptoms of Poor Implementation**: Page elements jumping abruptly when data finishes fetching; central spinner wheels hiding layout structure.
* **Appropriate Implementation**: Use pulse skeleton loaders (`animate-pulse bg-zinc-800`) matching the exact width and height of target content.
* **Examples**:
  ```html
  <div class="h-6 w-32 rounded bg-zinc-800 animate-pulse" />
  ```

---

## Principle 4: Actionable Error Placement
* **Why**: Users need to know immediately where a failure occurred and how to fix it.
* **Symptoms of Poor Implementation**: Generic top-right toast notification saying "Form error occurred" without highlighting the failing input field.
* **Appropriate Implementation**: Display inline error text directly adjacent to failing input controls (`aria-invalid="true"` + `aria-errormessage="..."`).

---

## Provenance & Standards References
* W3C WAI-ARIA Authoring Practices Guide (APG 1.2)
* web.dev - Cumulative Layout Shift (CLS) Mitigation
* NNG (Nielsen Norman Group) - Usability & Progressive Disclosure Standards
