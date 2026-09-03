# Fundamental Domain: UI / UX Mechanics

User Experience relies on clear affordances, predictable state transitions, and immediate feedback.

## 1. Complete Component Interaction States
Every interactive element MUST explicitly define all 5 core states:
1. **Default / Rest**: Clear visual affordance (button shape, link underline, border).
2. **Hover**: Subtle feedback indicating clickability (5-10% brightness shift, 1-2px vertical lift, color shift).
3. **Focus**: Prominent focus indicator for keyboard navigation (`ring-2 ring-offset-2 ring-neutral-900 dark:ring-neutral-100`).
4. **Active / Pressed**: Immediate tactile response on click (`scale-[0.98]` or active inset shadow).
5. **Disabled**: Reduced opacity (`opacity-50`), `cursor-not-allowed`, removed pointer events (`pointer-events-none`).

## 2. Progressive Disclosure
Do not overwhelm users with every option at once.
* Group secondary settings behind collapsible accordions, tabs, or contextual dropdown menus.
* In data tables, display key summary metrics in rows, revealing detailed logs or raw JSON payloads upon row click or modal expansion.

## 3. Empty, Loading, and Error States
* **Empty States**: Never show a blank screen or empty table. Include a relevant icon, a clear explanatory heading, brief guidance, and a primary call-to-action button (e.g., "No projects found. Create your first project").
* **Loading States**: Prefer pulse skeleton loaders over spinning wheels for inline content to preserve layout geometry and prevent layout shifts.
* **Error States**: Display actionable error messages adjacent to the failure point (e.g., inline field errors rather than generic top-level toasts).
