# Fundamental Domain: Web Accessibility (a11y)

Accessibility ensures software is usable by everyone, regardless of vision, mobility, or cognitive differences.

---

## Principle 1: Semantic HTML Foundation
* **Why**: Native HTML elements provide built-in keyboard accessibility, focus handling, and screen reader roles out-of-the-box.
* **Symptoms of Poor Implementation**: Using `<div onClick={...}>` for clickable buttons; missing `<header>`, `<main>`, `<nav>` landmarks.
* **Appropriate Implementation**:
  * Use `<button>` for actions; use `<a>` for navigation links.
  * Use semantic landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).
  * Maintain sequential heading levels (`<h1>` -> `<h2>` -> `<h3>`). Never skip heading levels for visual font sizing—use CSS classes for sizing instead.
* **Exceptions**: Custom canvas or WebGL graphics must provide fallbacks or `aria-label` text descriptions.

---

## Principle 2: Keyboard Focus Visibility & Focus Traps
* **Why**: Keyboard users (navigating via Tab / Shift+Tab / Arrows) rely on clear focus rings to know which element currently has input focus. (Source: W3C WCAG 2.2 SC 2.4.7).
* **Symptoms of Poor Implementation**: Removing default outline with `outline-none` without providing a custom focus ring; modal overlays where keyboard tab focus leaks behind the modal overlay into page background links.
* **Appropriate Implementation**:
  * Custom focus rings: `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`.
  * Modal focus traps: Trap focus inside active modal overlays using `@radix-ui/react-dialog` or explicit focus listeners.

---

## Principle 3: Screen Reader Labels for Icon Controls
* **Why**: Screen readers cannot read inline SVG paths or icon graphics unless explicit text labels are provided. (Source: W3C WAI-ARIA 1.2).
* **Symptoms of Poor Implementation**: `<button><XIcon /></button>` read as "Unlabeled button" by VoiceOver / NVDA.
* **Appropriate Implementation**: Add `aria-label` or visually hidden screen reader text:
  ```html
  <button aria-label="Close modal dialog" class="p-2 text-zinc-400 hover:text-zinc-100">
    <XIcon class="h-5 w-5" aria-hidden="true" />
  </button>
  ```

---

## Principle 4: Dynamic Content Announcements (`aria-live`)
* **Why**: Screen reader users need to be notified when dynamic page regions update without a full page reload (e.g. form error alerts, toast notifications, metric updates).
* **Symptoms of Poor Implementation**: Toast alerts popping up silently on screen without screen readers announcing them.
* **Appropriate Implementation**: Use `aria-live="polite"` for non-disruptive metric/toast updates; use `aria-live="assertive"` for critical error alerts.

---

## Provenance & Standards References
* W3C Web Content Accessibility Guidelines (WCAG 2.2 Level AA)
* W3C WAI-ARIA Authoring Practices Guide (APG 1.2)
* MDN Web Docs - Accessibility & Focus Management
