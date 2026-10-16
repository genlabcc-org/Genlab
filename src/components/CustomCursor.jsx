import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const scalerRef = useRef(null);
  const crossRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const scaler = scalerRef.current;
    const cross = crossRef.current;
    if (!cursor || !scaler) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // Smooth cursor interpolation loop
    const updateCursor = () => {
      // Fast responsive lag (0.2)
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(updateCursor);
    };
    rafId = requestAnimationFrame(updateCursor);

    // Hover interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, select, .hero-logo-wrap, .hero-cta';

    const handleMouseOver = (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        scaler.style.transform = 'scale(0.72)';
        rotationRef.current += 180;
        if (cross) {
          cross.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        scaler.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor-wrap" aria-hidden="true">
      <div ref={scalerRef} className="custom-cursor-scaler">
        <div className="custom-cursor-disc">
          <img src="/assets/cursor-ring-green.svg" alt="" />
        </div>
        <div ref={crossRef} className="custom-cursor-cross" />
      </div>
    </div>
  );
}
