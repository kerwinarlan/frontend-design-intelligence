---
name: ui-polish
description: Component-level micro-refinement for buttons, cards, forms, tables, modals, navigation bars, badges, and empty/loading states. Respects design briefs passed down from creative-director.
---

# Skill: UI Polish

## Description
Focuses on micro-refinement of individual UI components—improving spatial alignment, border definitions, typography contrast, interaction states, and edge-case handling. When invoked by `creative-director`, it respects intervention levels and domain context rules.

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User asks to "polish my components", "clean up buttons and inputs", "fix spacing and borders", "make the cards look modern", or "improve table and form design".

## WHEN NOT TO USE
* High-level visual hierarchy or hero section art direction.

---

## WORKFLOW

### Step 1: Component Audit
Audit target components against `knowledge/fundamentals/` and `knowledge/contexts/`. Check 4px/8px grid alignment, 1px neutral borders, and 5-state interaction controls.

### Step 2: Micro-Refinement Application
1. **Buttons**: Ensure `min-h-[44px]` touch targets, clean padding, custom focus rings (`focus-visible:ring-2`), and tactile active scale (`active:scale-[0.98]`).
2. **Cards**: Tighten border radius (8px-12px), add subtle border hover transition (`hover:border-zinc-700`).
3. **Tables & Metrics**: Add `tabular-nums` for numeric alignment, sticky headers, subtle row hover highlighting (`hover:bg-zinc-900/50`).
4. **Forms**: Add clear labels, explicit focus rings, inline field validation error states.
5. **Empty & Loading States**: Add skeleton loaders (`animate-pulse`) and meaningful empty state illustrations.

### Step 3: Responsive & Accessibility Checks
Run Playwright browser inspector (`scripts/browser-inspector.ts`) to verify touch target sizes (44x44px min) and WCAG AA color contrast.

---

## REQUIRED INSPECTION
* `knowledge/fundamentals/ui-ux.md`
* `knowledge/patterns/cards.md`
* `knowledge/contexts/`

## DECISION RULES
* Respect domain context (e.g. municipal service forms vs. developer terminal controls).
* Preserve existing component props and event handler signatures.

## OUTPUT
* Refined component source code with crisp borders, exact spacing, complete interaction states, and accessibility compliance.
