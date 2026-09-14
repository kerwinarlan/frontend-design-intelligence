# Recipe: Generative Geometry & Parametric Curves

## Overview
Procedural mathematical ribbon and wave animation using harmonic wave superposition and Canvas 2D Bézier paths. Ideal for dynamic hero backgrounds and subtle motion accents.

---

## Implementation (React + TypeScript)

```tsx
"use client";

import { useEffect, useRef } from "react";

interface GenerativeRibbonsProps {
  ribbonCount?: number;
  baseColor?: string;
  className?: string;
}

export function GenerativeRibbonCanvas({
  ribbonCount = 5,
  baseColor = "59, 130, 246", // RGB values
  className = "w-full h-full",
}: GenerativeRibbonsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let lastTime = 0;
    let elapsed = 0;

    const render = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      elapsed += dt;

      ctx.clearRect(0, 0, width, height);

      // Draw layered harmonic ribbons
      const points = 8;
      const stepX = width / (points - 1);

      for (let r = 0; r < ribbonCount; r++) {
        const offset = r * 0.4;
        const opacity = 0.15 + (r / ribbonCount) * 0.25;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${baseColor}, ${opacity})`;
        ctx.lineWidth = 1.5;

        const centerY = height * 0.5 + (r - ribbonCount / 2) * 20;

        for (let i = 0; i < points; i++) {
          const x = i * stepX;
          // Harmonic wave interference
          const wave1 = Math.sin(elapsed * 0.8 + i * 0.5 + offset) * 35;
          const wave2 = Math.cos(elapsed * 0.5 + i * 0.3 + offset * 1.5) * 20;
          const y = centerY + wave1 + wave2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            // Cubic bezier smoothing through points
            const prevX = (i - 1) * stepX;
            const prevWave1 = Math.sin(elapsed * 0.8 + (i - 1) * 0.5 + offset) * 35;
            const prevWave2 = Math.cos(elapsed * 0.5 + (i - 1) * 0.3 + offset * 1.5) * 20;
            const prevY = centerY + prevWave1 + prevWave2;
            const cpX1 = prevX + stepX * 0.5;
            const cpX2 = prevX + stepX * 0.5;
            ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
          }
        }

        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [ribbonCount, baseColor]);

  return <canvas ref={canvasRef} className={className} />;
}
```
