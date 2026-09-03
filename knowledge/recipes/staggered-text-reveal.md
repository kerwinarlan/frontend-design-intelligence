# Recipe: Staggered Word & Character Reveal

## Overview
A high-craft text entrance animation that reveals display headlines word-by-word or character-by-character using inline overflow masks and staggered delay intervals.

## Why Use This Pattern
It replaces blunt fade-ins with an editorial, motion-graphic feel that anchors user attention on the primary value proposition.

## When To Use vs. When NOT To Use
* **USE FOR**: Hero headlines (`<h1>`), primary section titles (`<h2>`), case study intro statements.
* **DO NOT USE FOR**: Body copy paragraphs, list items, dynamic form error messages, or frequently changing UI states.

## Accessibility & Reduced Motion
* Screen readers read the complete un-split text string naturally without stuttering.
* When `prefers-reduced-motion` is enabled, the staggered translation is bypassed in favor of an instant opacity transition.

## Performance
Uses GPU-accelerated `transform: translateY(...)` and `opacity`. Zero browser layout thrashing.

---

## Implementation Options

### Option A: Framer Motion (React / Next.js)

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

interface StaggeredHeadlineProps {
  text: string;
  className?: string;
}

export function StaggeredHeadline({ text, className = "" }: StaggeredHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Emphasized decelerate
      },
    },
  };

  return (
    <motion.h1
      className={`flex flex-wrap gap-x-[0.25em] gap-y-1 overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
```

### Option B: Vanilla CSS Keyframes + Tailwind

```html
<h1 class="flex flex-wrap gap-x-2 text-4xl font-bold tracking-tight text-zinc-100">
  <span class="inline-block overflow-hidden">
    <span class="inline-block animate-slide-up [animation-delay:0ms]">Transforming</span>
  </span>
  <span class="inline-block overflow-hidden">
    <span class="inline-block animate-slide-up [animation-delay:80ms]">Complex</span>
  </span>
  <span class="inline-block overflow-hidden">
    <span class="inline-block animate-slide-up [animation-delay:160ms]">Systems.</span>
  </span>
</h1>
```

```css
/* tailwind.config.js or globals.css */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-up {
    animation: fadeIn 0.2s ease forwards !important;
  }
}
```
