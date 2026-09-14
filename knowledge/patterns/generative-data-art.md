# Pattern: Generative Data Art & Micro-Visualizations

## Overview
Renders live metric streams and time-series telemetry into direct Canvas waveforms, harmonic ribbons, or particle flows without loading heavy visualization frameworks.

---

## Design Principles

1. **High Visual Density**:
   - Pack high-frequency data into a single hardware-accelerated Canvas buffer.
   - Avoid creating separate DOM SVG nodes for thousands of points.
2. **Smooth Interpolation**:
   - Lerp between incoming data points to prevent stepped or jarring jumps.
   - Use spring physics for smoothing erratic real-time telemetry.
3. **Typography Synergy**:
   - Pair generative canvas sparklines with monospace metrics (`font-mono tabular-nums`).

---

## Provenance & Standards
* W3C High Resolution Time API
* HTML5 Canvas 2D Context Specification
