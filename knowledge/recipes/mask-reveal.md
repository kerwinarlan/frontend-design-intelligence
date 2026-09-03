# Recipe: CSS Clip-Path Mask Reveal

## Overview
A sleek image or card entrance animation that reveals content using an expanding SVG or CSS `clip-path` mask polygon.

## Why Use This Pattern
It provides a cinematic wipe effect without requiring complex Canvas or WebGL shaders.

## When To Use vs. When NOT To Use
* **USE FOR**: Project screenshot reveals, case study hero images, before/after comparisons.
* **DO NOT USE FOR**: Text content that requires screen reader reading, small buttons, or dense table rows.

## Accessibility & Reduced Motion
* Image maintains standard `alt` text for screen readers regardless of mask position.
* Reduced motion setting instantly completes the clip path (`clip-path: inset(0 0 0 0)`).

---

## Implementation (Framer Motion + Tailwind CSS)

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface MaskRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function MaskRevealImage({ src, alt, width, height }: MaskRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const maskVariants = {
    hidden: shouldReduceMotion
      ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 0 }
      : { clipPath: "inset(0% 100% 0% 0%)", opacity: 0.8 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl"
      variants={maskVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
      />
    </motion.div>
  );
}
```
