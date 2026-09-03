---
name: motion-pass
description: Targeted web animation and interaction refinement for modern frontend projects. Adds purposeful spring physics, entrances, microinteractions, and reduced-motion support without altering core page layout.
---

# Skill: Motion Pass

## Description
Refines or introduces functional web animation, transitions, micro-interactions, and scroll choreography to an existing interface.

## WHEN TO USE
* User asks to "add animations", "smooth out page transitions", "add microinteractions", "fix janky scroll effects", or "make the UI feel interactive and responsive".

## WHEN NOT TO USE
* Core page layout, typography, or component hierarchy requires structural redesign first.

---

## WORKFLOW

### Step 1: Motion Audit
Read [knowledge/fundamentals/motion.md](knowledge/fundamentals/motion.md) and inspect existing animations:
* Identify unhandled state transitions (hover, active, focus, page loading).
* Flag linear easings (`ease-in-out` or `linear`) on large layout elements and replace with natural spring physics or decelerated curves.
* Flag non-GPU property animations (`width`, `height`, `top`, `left`) causing frame drops.

### Step 2: Pattern & Recipe Selection
Select relevant patterns from `knowledge/references/jitter/` and code recipes in `knowledge/recipes/`:
* Button & microinteraction hover effects (`knowledge/recipes/staggered-text-reveal.md`, `knowledge/patterns/microinteractions.md`).
* Card stack & gallery motion (`knowledge/recipes/card-stack-and-orbit.md`).
* Metrics counter roll (`knowledge/recipes/animated-metrics-counter.md`).
* Device frame scroll tilt (`knowledge/recipes/device-mockup-choreography.md`).

### Step 3: Implementation & Reduced Motion Safeguards
1. Implement motion using Framer Motion, Tailwind CSS transitions, or GSAP.
2. Ensure every animated component implements `useReducedMotion()` or `@media (prefers-reduced-motion: reduce)`.

### Step 4: Performance Verification
Ensure all animated CSS properties use `transform`, `opacity`, or `clip-path` for 60fps/120fps hardware acceleration.

---

## REQUIRED INSPECTION
* `knowledge/fundamentals/motion.md`
* `knowledge/recipes/`

## DECISION RULES
* **MORE ANIMATION != BETTER DESIGN**. Motion MUST serve one of: spatial continuity, feedback, attention guidance, or restrained delight.
* If a transition delays user task completion by >300ms, shorten or eliminate it.

## OUTPUT
* Updated component files with GPU-accelerated, reduced-motion-compliant animation code.
