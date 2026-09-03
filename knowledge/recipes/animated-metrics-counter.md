# Recipe: Animated Metrics Counter Roll

## Overview
A smooth numerical counter that animates from 0 to a target value using Framer Motion springs when scrolled into view.

---

## Implementation (React + Framer Motion)

```tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface MetricCounterProps {
  value: number;
  direction?: "up" | "down";
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export function MetricCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
}: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return (
    <div className="flex flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center shadow-lg">
      <span
        ref={ref}
        className="font-mono text-4xl font-bold tracking-tight text-zinc-100 tabular-nums sm:text-5xl"
      >
        {prefix}0{suffix}
      </span>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
        {label}
      </span>
    </div>
  );
}
```
