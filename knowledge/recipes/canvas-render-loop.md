# Recipe: High-Performance Canvas Render Loop

## Overview
A production-ready Canvas 2D render loop in React. Handles Retina DPI scaling, resize observation, IntersectionObserver viewport culling, and delta-time animation.

---

## Implementation (React + TypeScript)

```tsx
"use client";

import { useEffect, useRef } from "react";

interface CanvasRenderLoopProps {
  className?: string;
  onDraw?: (ctx: CanvasRenderingContext2D, width: number, height: number, deltaTime: number, time: number) => void;
}

export function CanvasRenderLoop({
  className = "w-full h-full",
  onDraw,
}: CanvasRenderLoopProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let lastTime = 0;
    let totalTime = 0;
    let isVisible = true;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Handle high DPI resize
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Render static frame if motion is reduced
      if (prefersReducedMotion && onDraw) {
        onDraw(ctx, rect.width, rect.height, 0, 0);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);
    resizeCanvas();

    // Pause when off-screen
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    // Main animation loop
    const render = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (isVisible && !prefersReducedMotion) {
        totalTime += deltaTime;
        const rect = canvas.getBoundingClientRect();
        
        ctx.clearRect(0, 0, rect.width, rect.height);
        
        if (onDraw) {
          onDraw(ctx, rect.width, rect.height, deltaTime, totalTime);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [onDraw]);

  return <canvas ref={canvasRef} className={className} />;
}
```
