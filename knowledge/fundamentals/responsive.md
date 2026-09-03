# Fundamental Domain: Responsive Design

Responsive design ensures seamless ergonomics across viewport sizes, orientation, and touch input devices.

---

## Principle 1: Mobile-First Layout Reflow
* **Why**: Designing for mobile viewports first forces content prioritization and eliminates unnecessary desktop clutter.
* **Symptoms of Poor Implementation**: Unusable horizontal scrollbars on mobile phones; compressed text columns overflowing screen boundaries.
* **Appropriate Implementation**: Use mobile-first CSS media queries / Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`):
  * `sm` (>= 640px): Stack 1-column layouts to 2-column grids.
  * `md` (>= 768px): Reveal secondary navigation links, enable sidebar toggles.
  * `lg` (>= 1024px): Full multi-column grid layouts, persistent sidebars.
  * `xl` (>= 1280px): Maximum container width, expanded dashboard widgets.
* **Examples**:
  ```html
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Responsive grid card items -->
  </div>
  ```

---

## Principle 2: Touch Target Ergonomics (44x44px Minimum)
* **Why**: Human finger pads average 10mm-14mm in diameter. Touch targets smaller than 44x44px cause accidental mis-clicks and user frustration. (Source: W3C WCAG 2.2 SC 2.5.8 / Apple HIG).
* **Symptoms of Poor Implementation**: Tiny 16x16px icon buttons or tight 12px text links crammed together on mobile screens.
* **Appropriate Implementation**: Ensure all interactive buttons, links, and form controls have a minimum target size of 44x44px (`min-h-[44px] min-w-[44px]` or `p-3`).
* **Exceptions**: Desktop-only data tables with precise pointer mouse control may use 32px row button targets if padded adequately.

---

## Principle 3: CSS Container Queries (`@container`)
* **Why**: Global viewport media queries (`@media (min-width: ... )`) fail when a component is placed inside a narrow sidebar vs a wide main panel. Container queries make components responsive relative to their immediate parent element width.
* **Symptoms of Poor Implementation**: Card components breaking or stretching awkwardly when placed in a 300px sidebar because the viewport itself is widescreen (1920px).
* **Appropriate Implementation**: Use `@container` on card components:
  ```html
  <div class="@container">
    <div class="flex flex-col @[380px]:flex-row items-center gap-4">
      <!-- Card content reflows based on container width -->
    </div>
  </div>
  ```

---

## Principle 4: Hover State Safeguards for Touch Devices
* **Why**: Touch devices do not have a persistent cursor hover state. Tapping an element on iOS/Android can lock the element in a stuck hover state.
* **Symptoms of Poor Implementation**: Tooltips or hover cards remaining permanently stuck on mobile screens after a single tap.
* **Appropriate Implementation**: Wrap pure hover interactions in `@media (hover: hover)` or Tailwind `hover:` variants properly managed by touch listeners.

---

## Provenance & Standards References
* W3C WCAG 2.2 Success Criterion 2.5.8 - Target Size (Minimum)
* Apple Human Interface Guidelines - Touch Targets & Ergonomics
* MDN Web Docs - CSS Container Queries (`@container`)
