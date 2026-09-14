# Recipe: Parametric Particles & Vector Physics

## Overview
A high-performance particle system using Canvas 2D and pre-allocated typed arrays. Features pointer gravitational interaction, velocity damping, and zero memory allocations during rendering.

---

## Implementation (React + TypeScript)

```tsx
"use client";

import { useEffect, useRef } from "react";

interface ParticleSystemProps {
  particleCount?: number;
  particleColor?: string;
  className?: string;
}

export function ParametricParticleCanvas({
  particleCount = 200,
  particleColor = "rgba(59, 130, 246, 0.6)",
  className = "w-full h-full pointer-events-auto",
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
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

    // Pre-allocated flat typed arrays (zero GC allocations per frame)
    // Layout: [x, y, vx, vy, originX, originY, size, alpha]
    const STRIDE = 8;
    const data = new Float32Array(particleCount * STRIDE);

    const initParticles = (w: number, h: number) => {
      width = w;
      height = h;
      for (let i = 0; i < particleCount; i++) {
        const offset = i * STRIDE;
        const x = Math.random() * w;
        const y = Math.random() * h;
        data[offset + 0] = x; // current x
        data[offset + 1] = y; // current y
        data[offset + 2] = (Math.random() - 0.5) * 20; // vx
        data[offset + 3] = (Math.random() - 0.5) * 20; // vy
        data[offset + 4] = x; // origin x
        data[offset + 5] = y; // origin y
        data[offset + 6] = 1.5 + Math.random() * 2.5; // size
        data[offset + 7] = 0.2 + Math.random() * 0.6; // opacity
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
      initParticles(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    let lastTime = 0;

    const render = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const mouseDistSqMax = 120 * 120;

      for (let i = 0; i < particleCount; i++) {
        const o = i * STRIDE;
        let px = data[o + 0];
        let py = data[o + 1];
        let vx = data[o + 2];
        let vy = data[o + 3];
        const ox = data[o + 4];
        const oy = data[o + 5];
        const size = data[o + 6];

        // Spring return to origin
        const springK = 2.0;
        const damping = 0.92;
        const fx = (ox - px) * springK;
        const fy = (oy - py) * springK;

        vx += fx * dt;
        vy += fy * dt;

        // Pointer repulsion
        if (mouse.active) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseDistSqMax && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / 120) * 400;
            vx += (dx / dist) * force * dt;
            vy += (dy / dist) * force * dt;
          }
        }

        // Apply damping and integrate position
        vx *= damping;
        vy *= damping;
        px += vx * dt;
        py += vy * dt;

        data[o + 0] = px;
        data[o + 1] = py;
        data[o + 2] = vx;
        data[o + 3] = vy;

        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
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
  }, [particleCount, particleColor]);

  return <canvas ref={canvasRef} className={className} />;
}
```
