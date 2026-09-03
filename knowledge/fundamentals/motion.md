# Fundamental Domain: Motion & Web Animation

Motion is a functional tool for spatial continuity, attention guidance, and state communication.

## 1. The 4 Functional Purposes of Motion
1. **Spatial Continuity**: Explaining where an element came from (e.g., expanding a card into a modal view).
2. **Immediate Feedback**: Confirming user interaction (e.g., button press down, active toggle slide).
3. **Attention Guidance**: Highlighting a newly updated metric, notification dot, or error field.
4. **Restrained Delight**: Subtle micro-interactions that communicate craft without impeding task completion.

## 2. Easing Curves & Timing Rules

| Motion Type | Duration | Easing Function | Best Used For |
|---|---|---|---|
| **Micro-interaction** | 100ms - 150ms | `ease-out` / `cubic-bezier(0, 0, 0.2, 1)` | Hover states, button clicks, active toggles |
| **Component Entrance** | 200ms - 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` (Emphasized Decelerate) | Modals, dropdown menus, toast notifications |
| **Page / Layout Shift** | 300ms - 400ms | Spring (`stiffness: 300, damping: 30`) | Shared element transitions, card expansions |
| **Staggered Sequence** | 50ms - 80ms delay/item | `ease-out` | List entrances, grid reveals, text character reveals |

## 3. GPU Acceleration & Performance Rules
* **Only Animate GPU-Friendly Properties**:
  * `transform` (`translate3d`, `scale`, `rotate`)
  * `opacity`
  * `clip-path`
  * `filter` (use sparingly; blur filters are expensive on mobile)
* **Never Animate**: `width`, `height`, `margin`, `padding`, `top`, `left` (these trigger expensive browser layout recalculations and cause frame drops).

## 4. Reduced Motion Support
Always respect user accessibility settings:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
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
