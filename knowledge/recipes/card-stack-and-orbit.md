# Recipe: Interactive Card Stack & Fan Out

## Overview
A portfolio showcase pattern where multiple stacked cards fan out horizontally into a multi-column row on hover or scroll.

## Why Use This Pattern
It optimizes screen real estate by presenting multiple project views in a single compact footprint until interacted with.

---

## Implementation (React + Framer Motion)

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Desktop Application", tag: "Next.js 15", bg: "bg-zinc-900" },
  { id: 2, title: "Mobile View", tag: "React Native", bg: "bg-zinc-800" },
  { id: 3, title: "API Analytics", tag: "Rust / WASM", bg: "bg-zinc-950" },
];

export function CardStackFanOut() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex h-80 w-full items-center justify-center py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex w-full max-w-2xl items-center justify-center">
        {cards.map((card, index) => {
          // Offsets for hover fan out
          const xOffset = isHovered ? (index - 1) * 220 : (index - 1) * 20;
          const rotateOffset = isHovered ? (index - 1) * 6 : (index - 1) * 4;
          const yOffset = isHovered ? 0 : index * 8;

          return (
            <motion.div
              key={card.id}
              className={`absolute h-56 w-64 rounded-xl border border-zinc-700/60 ${card.bg} p-6 shadow-xl backdrop-blur-md`}
              animate={{
                x: xOffset,
                y: yOffset,
                rotate: rotateOffset,
                zIndex: isHovered ? 10 - index : cards.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <span className="w-fit rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                  {card.tag}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
                  <p className="mt-1 text-xs text-zinc-400">Hover to expand view</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
```
