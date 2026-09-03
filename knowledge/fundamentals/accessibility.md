# Fundamental Domain: Web Accessibility (a11y)

Accessibility ensures software is usable by everyone, regardless of vision, mobility, or cognitive differences.

## 1. Semantic HTML Foundation
Always use native semantic HTML elements before falling back to ARIA wrappers:
* Use `<button>` for actions; use `<a>` for navigation. Never `<div onClick={...}>`.
* Use `<header>`, `<main>`, `<nav>`, `<aside>`, `<footer>` landmarks.
* Maintain logical heading sequences (`<h1>` -> `<h2>` -> `<h3>`). Never skip levels for visual sizing; use CSS classes for typography scale.

## 2. Focus Management & Keyboard Navigation
* **Focus Visibility**: Custom focus rings must remain clearly visible during keyboard tab navigation (`focus-visible:ring-2 focus-visible:ring-blue-500`).
* **Modal Focus Traps**: When a modal opens, keyboard focus MUST be trapped inside the modal container and restored to the trigger button upon closing.
* **Skip Links**: Include a "Skip to main content" link as the first focusable element on long pages.

## 3. ARIA & Screen Reader Attributes
* **Icon-Only Buttons**: Must include `aria-label` (e.g., `<button aria-label="Close dialog"><XIcon /></button>`).
* **Dynamic Content Updates**: Use `aria-live="polite"` or `aria-live="assertive"` for status indicators, metric updates, or form error alerts.
* **Expanded States**: Use `aria-expanded="true|false"` on collapsible triggers, accordions, and dropdown menus.

## 4. Color & Vision Considerations
* Do not rely solely on color to convey information (e.g., pair red error text with an alert icon and explicit error copy).
* Ensure touch targets are at least 44x44px.
