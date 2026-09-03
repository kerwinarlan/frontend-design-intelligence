# Recipe: Kinetic Underline & Highlight Sweep

## Overview
A typographic micro-interaction that animates an accent underline highlight smoothly across key headline terms.

---

## Implementation (React + Framer Motion + Tailwind CSS)

```tsx
"use client";

import { motion } from "framer-motion";

interface KineticHeadlineProps {
  prefixText: string;
  highlightText: string;
  suffixText?: string;
}

export function KineticHeadline({
  prefixText,
  highlightText,
  suffixText = "",
}: KineticHeadlineProps) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
      {prefixText}{" "}
      <span className="relative inline-block whitespace-nowrap text-blue-400">
        <span className="relative z-10">{highlightText}</span>
        <motion.span
          className="absolute bottom-1 left-0 h-3 w-full bg-blue-500/20 rounded-sm -z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
        />
      </span>{" "}
      {suffixText}
    </h1>
  );
}
```
