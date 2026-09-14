# Pattern: Canvas Hero Backgrounds

## Overview
Integrates full-bleed interactive Canvas or WebGL animations directly behind DOM hero headlines and actions. Ensures zero layout shift, seamless event passthrough, and viewport power conservation.

---

## Key Design Rules

1. **Contrast & Legibility First**:
   - Keep canvas visuals subtle (maximum opacity 0.35 on dark mode, 0.15 on light mode).
   - Use radial CSS gradient vignettes over the canvas to guarantee WCAG AA text contrast.
2. **Pointer Event Passthrough**:
   - Apply `pointer-events: none` on ambient non-interactive canvas layers.
   - For interactive canvases, place the canvas behind text (`z-0`) and ensure interactive DOM elements (`z-10`) receive clicks normally.
3. **Power & Performance Safeguards**:
   - Stop animation loops when the hero scrolls out of view using `IntersectionObserver`.
   - Limit WebGL device pixel ratio to `2.0` to avoid overheating mobile GPUs.

---

## Layout Structure Example (Tailwind CSS)

```tsx
<section className="relative min-h-[600px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
  {/* Layer 1: Procedural Canvas Background */}
  <div className="absolute inset-0 z-0 pointer-events-auto">
    <ParametricParticleCanvas particleColor="rgba(96, 165, 250, 0.5)" />
  </div>

  {/* Layer 2: Radial Vignette Mask */}
  <div className="absolute inset-0 z-[1] bg-radial from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none" />

  {/* Layer 3: High-Contrast Foreground Content */}
  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
      Next-Generation River Modeling
    </h1>
    <p className="mt-4 text-lg text-zinc-400">
      Deterministic hydraulic calculations compiled with interactive physics visualization.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500">
        Launch Model
      </button>
    </div>
  </div>
</section>
```
