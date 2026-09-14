# Recipe: Zero-Dependency WebGL Shader Quad

## Overview
A lightweight raw WebGL 2.0 full-screen canvas quad with zero external dependencies. Passes elapsed time, resolution, and pointer coordinates to custom GLSL fragment shaders.

---

## Implementation (React + TypeScript)

```tsx
"use client";

import { useEffect, useRef } from "react";

interface WebGLShaderProps {
  fragmentShaderSource?: string;
  className?: string;
}

const DEFAULT_FRAGMENT_SHADER = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Cosine based palette generators by Inigo Quilez
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 3.0; i++) {
        uv = fract(uv * 1.5) - 0.5;
        float d = length(uv) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + i*0.4 + u_time*0.2, 
                           vec3(0.1, 0.2, 0.3), 
                           vec3(0.2, 0.4, 0.6), 
                           vec3(1.0, 1.0, 1.0), 
                           vec3(0.0, 0.33, 0.67));
        d = sin(d * 8.0 + u_time) / 8.0;
        d = abs(d);
        d = pow(0.01 / d, 1.2);
        finalColor += col * d;
    }

    fragColor = vec4(finalColor * 0.4, 1.0);
}
`;

const VERTEX_SHADER_SOURCE = `#version 300 es
in vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export function WebGLShaderQuad({
  fragmentShaderSource = DEFAULT_FRAGMENT_SHADER,
  className = "w-full h-full",
}: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    // Compile helper
    const createShader = (glCtx: WebGL2RenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    // Quad geometry (2 triangles covering clip space)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const timeLoc = gl.getUniformLocation(program, "u_time");

    let animId = 0;
    let startTime = performance.now();

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for GPU performance
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      gl.useProgram(program);

      const currentTime = (performance.now() - startTime) / 1000;
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, currentTime);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [fragmentShaderSource]);

  return <canvas ref={canvasRef} className={className} />;
}
```
