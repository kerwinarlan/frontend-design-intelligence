# Fundamental Domain: Web Performance & Core Web Vitals

Visual polish must never sacrifice web performance or Core Web Vitals scores.

## 1. Core Web Vitals Targets
* **LCP (Largest Contentful Paint)**: < 2.5s. Main hero text and hero image must load immediately.
* **INP (Interaction to Next Paint)**: < 200ms. JavaScript event handlers, UI toggles, and state changes must yield to main thread rendering promptly.
* **CLS (Cumulative Layout Shift)**: < 0.1. Prevent dynamic content, web fonts, or late-loading images from shifting layout geometry.

## 2. Animation Performance Optimization
* **Avoid Layout Thrashing**: Read DOM properties first, write second. Batch style reads and writes.
* **`will-change` Property**: Use `will-change: transform, opacity` only on elements actively being animated, and remove it when animation completes. Overuse consumes GPU memory.
* **Containment**: Use CSS `contain: layout style paint` or `content-visibility: auto` on off-screen list items or long case study sections.

## 3. Font & Asset Optimization
* **Self-Host Variable Fonts**: Use WOFF2 format with `font-display: swap` to prevent FOIT (Flash of Unstyled Text).
* **Image & Video Optimization**:
  * Serve WebP / AVIF images with explicit `width` and `height` attributes.
  * Use HTML5 `<video autoplay loop muted playsinline>` for hero background motion instead of heavy GIFs.
