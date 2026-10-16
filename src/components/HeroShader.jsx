import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 p;
void main() {
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 field(vec2 uv) {
  float t = uTime * 0.3;
  vec2 m = (uMouse - 0.5);
  float yr = sin(uv.y * 2.3 - t * 0.6) + 0.6 * sin(uv.y * 1.1 + t * 0.35 + 1.7);
  float phase = t * 0.7 + m.x * 2.0;
  float w = sin(uv.x * 8.5 + yr * 1.4 + phase) * 0.6
          + sin(uv.x * 4.5 - yr * 0.8 + phase * 0.55) * 0.45
          + sin(uv.x * 15.0 + yr * 0.5 - phase * 0.3) * 0.2;
  float f = w * 0.5 + 0.5;
  f = pow(clamp(f, 0.0, 1.0), 2.0);
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  float d = distance(uv * asp, uMouse * asp);
  f += smoothstep(0.5, 0.0, d) * 0.5;
  
  vec3 c0 = vec3(0.0314, 0.1765, 0.0235);
  vec3 c1 = vec3(0.07, 0.5, 0.11);
  vec3 c2 = vec3(0.45, 1.0, 0.34);
  vec3 col = mix(c0, c1, smoothstep(0.15, 0.6, f));
  col = mix(col, c2, smoothstep(0.72, 1.02, f));
  
  vec3 A = vec3(0.0353, 0.2667, 0.0353);
  vec3 B = vec3(0.2824, 0.6863, 0.3059);
  vec3 C = vec3(0.0902, 0.4039, 0.1725);
  col = mix(col, A, 0.20 * smoothstep(0.55, 0.05, f));
  col = mix(col, C, 0.05 * smoothstep(0.25, 0.75, f));
  col = mix(col, B, 0.07 * smoothstep(0.65, 1.0, f));
  col = mix(col, vec3(0.0), smoothstep(0.10, 0.0, f) * 0.2);
  return col;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float rods = 30.0;
  float x = uv.x * rods;
  float id = floor(x);
  float lens = fract(x) - 0.5;
  float center = (id + 0.5) / rods;
  float mag = 1.7;
  float bend = lens - (lens * lens * lens) * 0.6;
  float sx = center + bend * (mag / rods);
  float disp = lens * (2.0 / rods);
  
  vec3 col = vec3(
    field(vec2(sx + disp, uv.y)).r,
    field(vec2(sx, uv.y)).g,
    field(vec2(sx - disp, uv.y)).b
  );
  
  col += pow(max(0.0, 1.0 - abs(lens) * 2.35), 10.0) * 0.18;
  col *= 1.0 - smoothstep(0.37, 0.5, abs(lens)) * 0.28;
  col += (hash(gl_FragCoord.xy * 1.3) - 0.5) * 0.02;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function HeroShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      canvas.style.background = '#082D06';
      return;
    }

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // Fullscreen triangle
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uResLoc = gl.getUniformLocation(program, 'uRes');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Current mouse [x, y] in normalized (0..1) coordinates
    const m = [0.72, 0.5];
    const targetMouse = [0.72, 0.5];

    const render = (timeSec) => {
      gl.uniform1f(uTimeLoc, timeSec);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, m[0], m[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    let prevWidth = 0;
    let prevHeight = 0;

    const handleResize = () => {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      const width = Math.max(2, Math.round(canvas.clientWidth * dpr));
      const height = Math.max(2, Math.round(canvas.clientHeight * dpr));

      if (width === prevWidth && Math.abs(height - prevHeight) < 10) return;

      prevWidth = width;
      prevHeight = height;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, canvas.width, canvas.height);

      if (reducedMotion) render(0);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
    handleResize();

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse[0] = (e.clientX - rect.left) / rect.width;
      targetMouse[1] = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    let animationId = 0;
    let isRunning = false;
    let lastRenderTime = 0;
    const startTime = performance.now();

    const loop = (now) => {
      if (!isRunning) return;
      animationId = requestAnimationFrame(loop);

      // Throttling to ~60fps
      if (now - lastRenderTime < 16) return;
      lastRenderTime = now;

      // Easing / inertia interpolation
      m[0] += (targetMouse[0] - m[0]) * 0.06;
      m[1] += (targetMouse[1] - m[1]) * 0.06;

      render((now - startTime) / 1000);
    };

    const startAnimation = () => {
      if (!isRunning && !reducedMotion && !document.hidden) {
        isRunning = true;
        lastRenderTime = 0;
        animationId = requestAnimationFrame(loop);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
    };

    if (reducedMotion) {
      render(0);
    } else {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      startAnimation();
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pointermove', handlePointerMove);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      data-hero-shader="true"
      aria-hidden="true"
    />
  );
}
