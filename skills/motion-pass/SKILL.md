---
name: motion-pass
description: Targeted web animation and interaction refinement for modern frontend projects. Adds purposeful spring physics, entrances, microinteractions, and reduced-motion support without altering core page layout. Respects motion rules passed down from creative-director.
---

# Skill: Motion Pass

## Description
Refines or introduces functional web animation, transitions, micro-interactions, and scroll choreography to an existing interface. When invoked by `creative-director`, it respects domain-specific motion guidelines (e.g. strict restraint for LGU portals, higher energy for portfolio showpieces).

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User asks to "add animations", "smooth out page transitions", "add microinteractions", "fix janky scroll effects", or "make the UI feel interactive and responsive".

## WHEN NOT TO USE
* Core page layout, typography, or component hierarchy requires structural redesign first.

---

## WORKFLOW

### Step 1: Motion Audit
Read [knowledge/fundamentals/motion.md](knowledge/fundamentals/motion.md) and inspect existing animations. Identify unhandled states and non-GPU property animations.

### Step 2: Contextual Pattern Selection
Select relevant patterns from `knowledge/references/jitter/` and code recipes in `knowledge/recipes/` that match the product context (`knowledge/contexts/`).

### Step 3: Implementation & Reduced Motion Safeguards
Implement motion using Framer Motion or CSS. Ensure every animated component implements `useReducedMotion()` or `@media (prefers-reduced-motion: reduce)`.

### Step 4: Visual QA & Performance Verification
Run Playwright browser inspector (`scripts/browser-inspector.ts`) to verify smooth rendering and zero horizontal layout overflow.

---

## REQUIRED INSPECTION
* `knowledge/fundamentals/motion.md`
* `knowledge/recipes/`
* `knowledge/contexts/`

## DECISION RULES
* **MORE ANIMATION != BETTER DESIGN**. Motion MUST serve spatial continuity, feedback, attention guidance, or restrained delight.
* Respect domain restraint (e.g. zero continuous decorative background movement on civic or healthcare portals).

## OUTPUT
* Updated component files with GPU-accelerated, reduced-motion-compliant animation code.
