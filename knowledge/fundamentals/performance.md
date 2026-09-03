# Fundamental Domain: Web Performance & Core Web Vitals

Visual polish must never sacrifice web performance, loading speed, or Core Web Vitals scores.

---

## Principle 1: Core Web Vitals Optimization Targets
* **Why**: Core Web Vitals directly reflect user-perceived performance and affect SEO rankings. (Source: Google / web.dev).
* **Symptoms of Poor Implementation**: LCP > 4.0s due to unoptimized hero images; INP > 300ms due to heavy synchronous main-thread JavaScript execution; CLS > 0.2 due to late-loading web fonts or un-dimensioned images.
* **Appropriate Implementation**:
  * **LCP (Largest Contentful Paint) < 2.5s**: Preload hero fonts and hero images (`priority` / `rel="preload"`).
  * **INP (Interaction to Next Paint) < 200ms**: Yield main thread using `requestAnimationFrame` or `startTransition` for expensive state updates.
  * **CLS (Cumulative Layout Shift) < 0.1**: Specify explicit `width` and `height` attributes on images/videos; use skeleton loaders.

---

## Principle 2: Self-Hosted Variable Fonts with `font-display: swap`
* **Why**: External font CDNs add DNS lookup latency; default font loading strategies can cause FOIT (Flash of Unstyled Text) or FOUT.
* **Symptoms of Poor Implementation**: Page rendering blank for 2 seconds while Google Fonts loads over network.
* **Appropriate Implementation**: Self-host WOFF2 variable fonts locally using Next.js `next/font` or CSS `@font-face` with `font-display: swap`.

---

## Principle 3: Image & Video Asset Optimization
* **Why**: Uncompressed PNG/JPEG images and giant GIF files account for >70% of network payload size.
* **Symptoms of Poor Implementation**: Committing 15MB GIF animation files or 4K uncompressed PNG screenshots into frontend asset folders.
* **Appropriate Implementation**:
  * Convert screenshots to modern WebP / AVIF formats.
  * Replace animated GIFs with lightweight HTML5 videos:
    ```html
    <video autoplay loop muted playsinline class="w-full rounded-xl">
      <source src="/demo.mp4" type="video/mp4" />
    </video>
    ```

---

## Principle 4: DOM Containment for Long Content Lists
* **Why**: Rendering hundreds of un-contained DOM nodes forces the browser engine to perform expensive layout and paint calculations across the entire document tree.
* **Symptoms of Poor Implementation**: Stuttering page scroll on long case study pages or data table lists.
* **Appropriate Implementation**: Use CSS `content-visibility: auto` or `contain: content` on off-screen sections:
  ```css
  .case-study-section {
    content-visibility: auto;
    contain-intrinsic-size: 1px 800px;
  }
  ```

---

## Provenance & Standards References
* web.dev - Google Core Web Vitals Standards (LCP, INP, CLS)
* Next.js 15 Documentation - Font & Image Optimization
* MDN Web Docs - CSS Content Visibility & Containment
