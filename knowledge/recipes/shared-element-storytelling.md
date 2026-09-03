# Recipe: Shared-Element Modal Expansion

## Overview
A layout animation where clicking a project card seamlessly expands the card's boundary into a full case study modal overlay using Framer Motion's `layoutId`.

---

## Implementation (React + Framer Motion)

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string;
}

const sampleProject: Project = {
  id: "proj-1",
  title: "Realtime Analytics Engine",
  category: "Rust / Next.js",
  summary: "Sub-millisecond event streaming architecture.",
  details: "Detailed breakdown of the memory safety tradeoffs and WebSocket queue optimizations implemented in this project.",
};

export function SharedElementModal() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="p-8">
      {/* Grid Item Card */}
      <motion.div
        layoutId={sampleProject.id}
        onClick={() => setSelected(sampleProject)}
        className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-colors hover:border-zinc-700"
      >
        <motion.span className="text-xs font-mono text-blue-400">{sampleProject.category}</motion.span>
        <motion.h3 className="mt-2 text-xl font-bold text-zinc-100">{sampleProject.title}</motion.h3>
        <motion.p className="mt-1 text-sm text-zinc-400">{sampleProject.summary}</motion.p>
      </motion.div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              layoutId={selected.id}
              className="w-full max-w-lg rounded-2xl border border-zinc-700 bg-zinc-900 p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-blue-400">{selected.category}</span>
                  <h2 className="text-2xl font-bold text-zinc-100 mt-1">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{selected.details}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
```
