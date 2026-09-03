---
name: ui-polish
description: Component-level micro-refinement for buttons, cards, forms, tables, modals, navigation bars, badges, and empty/loading states.
---

# Skill: UI Polish

## Description
Focuses on micro-refinement of individual UI components—improving spatial alignment, border definitions, typography contrast, interaction states, and edge-case handling.

## WHEN TO USE
* User asks to "polish my components", "clean up buttons and inputs", "fix spacing and borders", "make the cards look modern", or "improve table and form design".

## WHEN NOT TO USE
* High-level visual hierarchy or hero section art direction.

---

## WORKFLOW

### Step 1: Component Audit
Audit target components against [knowledge/fundamentals/typography.md](knowledge/fundamentals/typography.md), [knowledge/fundamentals/layout.md](knowledge/fundamentals/layout.md), and [knowledge/fundamentals/color.md](knowledge/fundamentals/color.md):
* Check 4px/8px grid alignment (`p-2`, `p-4`, `p-6`).
* Ensure crisp 1px neutral borders (`border-zinc-200` or `border-zinc-800`).
* Verify presence of all 5 interaction states (Default, Hover, Focus, Active, Disabled).

### Step 2: Micro-Refinement Application
1. **Buttons**: Ensure `min-h-[44px]`, clean padding, custom focus ring (`ring-2 ring-offset-2`), and tactile active scale (`active:scale-[0.98]`).
2. **Cards**: Tighten border radius (8px-12px), add subtle border hover transition (`hover:border-zinc-700`).
3. **Tables**: Add `tabular-nums` for numeric alignment, sticky headers, subtle row hover highlighting (`hover:bg-zinc-900/50`).
4. **Forms**: Add clear labels, explicit focus rings, inline field validation error states.
5. **Empty & Loading States**: Add skeleton loaders (`animate-pulse`) and meaningful empty state illustrations.

### Step 3: Responsive & Accessibility Checks
Ensure touch targets meet 44x44px minimum and color contrast satisfies WCAG AA.

---

## REQUIRED INSPECTION
* `knowledge/fundamentals/ui-ux.md`
* `knowledge/patterns/cards.md`
* `knowledge/patterns/microinteractions.md`

## DECISION RULES
* Do not introduce arbitrary custom colors outside the project's established design tokens.
* Preserve existing component props and event handler signatures.

## OUTPUT
* Refined component source code with crisp borders, exact spacing, complete interaction states, and accessibility compliance.
