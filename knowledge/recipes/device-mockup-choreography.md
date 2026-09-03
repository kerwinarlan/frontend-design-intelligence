# Recipe: High-Fidelity Browser Frame & Scroll Tilt

## Overview
A browser mockup component that simulates a live web application window with traffic light controls and subtle 3D perspective scroll tilt.

---

## Implementation (React + Tailwind CSS + Framer Motion)

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface DeviceMockupProps {
  url?: string;
  children: React.ReactNode;
}

export function DeviceMockup({ url = "https://app.portfolio.dev", children }: DeviceMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth perspective rotation from angled (12deg) to flat (0deg) as it scrolls into view
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.94, 1]);

  return (
    <div ref={containerRef} className="perspective-1000 w-full py-8">
      <motion.div
        style={{ rotateX, scale }}
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow"
      >
        {/* Title Bar Header */}
        <div className="flex h-10 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-4 backdrop-blur-md">
          {/* Traffic Light Window Controls */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* URL Pill Bar */}
          <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400">
            <svg className="h-3 w-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>{url}</span>
          </div>

          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Mockup Body Content */}
        <div className="relative min-h-[400px] w-full bg-zinc-950 p-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
```
