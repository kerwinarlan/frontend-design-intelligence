# Recipe: Interactive Constellation & Node Network

## Overview
A dynamic particle network where proximate nodes connect with adaptive opacity lines. Includes mouse pointer interaction and zero memory allocation during frame execution.

---

## Implementation (React + TypeScript)

```tsx
"use client";

import { useEffect, useRef } from "react";

interface ConstellationCanvasProps {
  nodeCount?: number;
  maxDistance?: number;
  accentColor?: string; // Format: "R, G, B"
  className?: string;
}

export function ConstellationCanvas({
  nodeCount = 60,
  maxDistance = 120,
  accentColor = "59, 130, 246",
  className = "w-full h-full",
}: ConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    // Pre-allocated array: [x, y, vx, vy, radius]
    const STRIDE = 5;
    const nodes = new Float32Array(nodeCount * STRIDE);

    const initNodes = (w: number, h: number) => {
      width = w;
      height = h;
      for (let i = 0; i < nodeCount; i++) {
        const o = i * STRIDE;
        nodes[o + 0] = Math.random() * w; // x
        nodes[o + 1] = Math.random() * h; // y
        nodes[o + 2] = (Math.random() - 0.5) * 30; // vx
        nodes[o + 3] = (Math.random() - 0.5) * 30; // vy
        nodes[o + 4] = 1.5 + Math.random() * 1.5; // radius
      }
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initNodes(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    let lastTime = 0;
    const maxDistSq = maxDistance * maxDistance;

    const render = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Update positions and boundary bounce
      for (let i = 0; i < nodeCount; i++) {
        const o = i * STRIDE;
        let x = nodes[o + 0] + nodes[o + 2] * dt;
        let y = nodes[o + 1] + nodes[o + 3] * dt;

        if (x < 0 || x > width) {
          nodes[o + 2] *= -1;
          x = Math.max(0, Math.min(width, x));
        }
        if (y < 0 || y > height) {
          nodes[o + 3] *= -1;
          y = Math.max(0, Math.min(height, y));
        }

        nodes[o + 0] = x;
        nodes[o + 1] = y;
      }

      // Draw connecting lines between proximate nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodeCount; i++) {
        const o1 = i * STRIDE;
        const x1 = nodes[o1 + 0];
        const y1 = nodes[o1 + 1];

        for (let j = i + 1; j < nodeCount; j++) {
          const o2 = j * STRIDE;
          const x2 = nodes[o2 + 0];
          const y2 = nodes[o2 + 1];

          const dx = x2 - x1;
          const dy = y2 - y1;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.25;
            ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }

        // Connect to pointer
        if (pointerRef.current.active) {
          const dx = pointerRef.current.x - x1;
          const dy = pointerRef.current.y - y1;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.45;
            ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(pointerRef.current.x, pointerRef.current.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = `rgb(${accentColor})`;
      for (let i = 0; i < nodeCount; i++) {
        const o = i * STRIDE;
        ctx.beginPath();
        ctx.arc(nodes[o + 0], nodes[o + 1], nodes[o + 4], 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [nodeCount, maxDistance, accentColor]);

  return <canvas ref={canvasRef} className={className} />;
}
```
