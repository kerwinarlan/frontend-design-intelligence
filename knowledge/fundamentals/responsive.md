# Fundamental Domain: Responsive Design

Responsive design ensures seamless ergonomics across screen sizes, touch inputs, and device contexts.

## 1. Breakpoint Philosophy

| Breakpoint | Range | Key Layout Adjustments |
|---|---|---|
| `sm` | >= 640px | Mobile landscape; stack single column to 2-column grids |
| `md` | >= 768px | Tablets; reveal secondary navigation, sidebar toggles |
| `lg` | >= 1024px | Small laptops; full multi-column grid, persistent sidebars |
| `xl` | >= 1280px | Widescreen; maximum container width, expanded dashboard widgets |
| `2xl` | >= 1536px | Large monitors; center content container with generous margins |

## 2. Fluid Typography & Spacing
Use CSS `clamp()` or Tailwind arbitrary value clamps for smooth viewport scaling without abrupt breakpoint jumps:
```css
/* Fluid headline scaling between 32px (mobile) and 56px (desktop) */
font-size: clamp(2rem, 1.25rem + 2.5vw, 3.5rem);

/* Fluid padding scaling between 16px and 48px */
padding-block: clamp(1rem, 0.5rem + 2vw, 3rem);
```

## 3. Container Queries
When building reusable component cards, prefer CSS Container Queries (`@container`) over global viewport media queries. This ensures cards adjust their layout based on their parent container's width, whether placed in a narrow sidebar or a wide main view.

```html
<div class="@container">
  <div class="flex flex-col @[400px]:flex-row items-center gap-4">
    <!-- Component content reflows automatically -->
  </div>
</div>
```

## 4. Mobile Ergonomics & Touch Targets
* **Touch Target Size**: Minimum interactive area of 44x44px (`min-h-[44px] min-w-[44px]`).
* **Thumb Zone Navigation**: Primary mobile actions positioned within lower 60% of the screen.
* **Disable Hover Tricks on Touch**: Wrap pure hover states in `@media (hover: hover)`.
