# Fundamental Domain: Procedural Canvas & Shader Rendering

Procedural rendering draws visual elements directly to pixel buffers. It runs on HTML5 Canvas 2D or WebGL.

---

## Principle 1: Direct Frame Drawing vs DOM Rendering

* **Why**: DOM animations create thousands of tree nodes. Canvas uses a single HTML element.
* **Canvas 2D**: Best for 1,000 to 10,000 particles, line networks, parametric ribbons, and custom text geometry.
* **WebGL / Shaders**: Best for millions of points, raymarching, Signed Distance Functions (SDFs), and pixel-level math.
* **Selection Rule**: Use DOM for interactive UI text and forms. Use Canvas 2D for generative backgrounds and micro-data art. Use WebGL for volumetric fluid and 3D scenes.

---

## Principle 2: Zero Allocation in Render Loops

* **Why**: Memory allocation inside a 60 FPS loop triggers Garbage Collection (GC) pauses. GC pauses cause stuttering and dropped frames.
* **Rule**: Never create objects (`new Vector()`, `{ x, y }`, `new Array()`) inside the draw loop.
* **Appropriate Implementation**:
  1. Allocate all particle and geometry arrays during setup.
  2. Use flat typed arrays (`Float32Array`) for coordinates, velocities, and colors.
  3. Mutate existing properties in place during each update step.

```javascript
// BAD: Allocates memory every frame
function draw() {
  const mousePos = { x: e.clientX, y: e.clientY }; // GC hazard
  particles.push(new Particle(mousePos));           // GC hazard
}

// GOOD: Pre-allocated pool mutated in place
const MAX_PARTICLES = 1000;
const positions = new Float32Array(MAX_PARTICLES * 2);
const velocities = new Float32Array(MAX_PARTICLES * 2);

function update(deltaTime) {
  for (let i = 0; i < MAX_PARTICLES; i++) {
    const idx = i * 2;
    positions[idx] += velocities[idx] * deltaTime;
    positions[idx + 1] += velocities[idx + 1] * deltaTime;
  }
}
```

---

## Principle 3: Device Pixel Ratio (DPR) Scaling

* **Why**: High-DPI screens (Retina displays) blur standard canvas pixels without explicit scaling.
* **Calculation**:
  - `canvas.width = clientWidth * window.devicePixelRatio`
  - `canvas.height = clientHeight * window.devicePixelRatio`
  - `context.scale(devicePixelRatio, devicePixelRatio)`
* **CSS Alignment**: Set `canvas.style.width` and `canvas.style.height` to CSS pixel dimensions.

---

## Principle 4: Delta Time ($\Delta t$) Synchronization

* **Why**: Monitor refresh rates vary between 60 Hz, 120 Hz, and 144 Hz. Uncalibrated updates run at double speed on 120 Hz screens.
* **Appropriate Implementation**: Calculate elapsed time between frames. Scale all velocities by delta time in seconds.

```javascript
let lastTime = 0;

function render(currentTime) {
  if (!lastTime) lastTime = currentTime;
  const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // Clamp max step
  lastTime = currentTime;

  updatePhysics(deltaTime);
  drawCanvas();

  requestAnimationFrame(render);
}
```

---

## Principle 5: Mathematical Primitives for Generative Motion

Procedural motion relies on standard mathematical functions:

| Primitive | Mathematical Formula | Visual Behavior |
|---|---|---|
| **Harmonic Oscillation** | $y = A \cdot \sin(\omega t + \phi)$ | Smooth breathing, floating, or cyclical waves |
| **Polar to Cartesian** | $x = r \cdot \cos(\theta), y = r \cdot \sin(\theta)$ | Circular orbits, spiral trails, and flower geometry |
| **Spring Damping** | $a = -k \cdot (x - x_0) - c \cdot v$ | Natural organic return and elastic follow-through |
| **Linear Interpolation** | $v = v_0 + (v_1 - v_0) \cdot t$ | Smooth pointer following and target easing |
| **Angle Difference** | $\theta = \operatorname{atan2}(y_2 - y_1, x_2 - x_1)$ | Aiming particles toward pointer or target |

---

## Principle 6: Lifecycle and Power Conservation

* **Intersection Observer**: Stop the render loop when the canvas scrolls out of view.
* **Page Visibility API**: Pause animations when the user changes tabs (`document.hidden`).
* **Reduced Motion**: Render a single static background frame when `prefers-reduced-motion` is active.

---

## Provenance & Standards References

* W3C HTML5 2D Context Level 2 Specification
* Khronos Group WebGL 2.0 Specification
* MDN Web Docs - Optimizing Canvas Performance
