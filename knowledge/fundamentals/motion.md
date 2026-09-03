# Fundamental Domain: Motion & Web Animation

Motion is a functional tool for spatial continuity, attention guidance, and state communication.

---

## Principle 1: The 4 Functional Purposes of Motion
* **Why**: Motion without purpose is distraction. Motion must serve a clear cognitive function.
* **Symptoms of Poor Implementation**: Every card bouncing into view on scroll; spinning background graphics that draw focus away from reading text.
* **Appropriate Implementation**: Restrict motion to:
  1. **Spatial Continuity**: Showing where an element came from (e.g. card expanding into modal).
  2. **Immediate Feedback**: Confirming user interaction (e.g. button press scale down).
  3. **Attention Guidance**: Highlighting newly updated metrics or error states.
  4. **Restrained Delight**: Micro-interactions that reinforce perceived quality without delaying tasks.

---

## Principle 2: Easing & Duration Calibration

| Motion Type | Duration (ms) | Easing Curve | Best Used For |
|---|---|---|---|
| **Micro-interaction** | 100ms - 150ms | `ease-out` / `cubic-bezier(0, 0, 0.2, 1)` | Hover states, active clicks, toggle slides |
| **Component Entrance** | 200ms - 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` (Emphasized Decelerate) | Modals, dropdown menus, toast alerts |
| **Layout Shift / Spring** | 300ms - 400ms | Spring (`stiffness: 300, damping: 25`) | Shared element expansion, card stack fan-out |
| **Stagger Sequence** | 30ms - 50ms delay | `ease-out` | List entrances, grid reveals, word masks |

---

## Principle 3: GPU-Accelerated Property Restrictions
* **Why**: Animating CSS properties that trigger browser layout recalculations (`width`, `height`, `top`, `left`, `margin`) causes frame drops and high CPU usage.
* **Symptoms of Poor Implementation**: Janky, stuttering 15fps scroll or transition animations on mobile devices.
* **Appropriate Implementation**: ONLY animate GPU-accelerated composited properties:
  * `transform` (`translate3d`, `scale`, `rotate`)
  * `opacity`
  * `clip-path`
  * `filter` (use sparingly; blur filters are memory-heavy)
* **Examples**:
  ```tsx
  // GOOD: GPU Accelerated Transform
  <motion.div animate={{ x: 100, opacity: 1 }} />

  // BAD: Layout Thrashing
  <motion.div animate={{ left: "100px", width: "300px" }} />
  ```

---

## Principle 4: `prefers-reduced-motion` Accessibility Compliance
* **Why**: Vestibular disorders can cause motion sickness, nausea, or dizziness when users experience large screen movement or parallax scrolling. (Source: W3C WCAG 2.2 SC 2.3.3 / MDN).
* **Symptoms of Poor Implementation**: Ignoring user OS reduced motion preferences and forcing full-screen parallax movement.
* **Appropriate Implementation**: Bypass motion when `prefers-reduced-motion: reduce` is detected:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
  In Framer Motion:
  ```tsx
  import { useReducedMotion } from "framer-motion";

  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  ```

---

## Provenance & Standards References
* W3C WCAG 2.2 Success Criterion 2.3.3 - Animation from Interactions
* Material Design 3 Motion Guidelines & Apple HIG Motion Standards
* MDN Web Docs - Hardware Accelerated CSS Animations
