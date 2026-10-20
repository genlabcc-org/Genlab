import React, { useEffect, useRef } from 'react';
import GenLabLogo from './GenLabLogo';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const scalerRef = useRef(null);
  const logoRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const scaler = scalerRef.current;
    const logo = logoRef.current;
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

    // Ultra-smooth cursor interpolation loop
    const updateCursor = () => {
      currentX += (mouseX - currentX) * 0.32;
      currentY += (mouseY - currentY) * 0.32;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(updateCursor);
    };
    rafId = requestAnimationFrame(updateCursor);

    // Hover interactive elements
    const interactiveSelector =
      'a, button, [role="button"], input, select, textarea, .hero-logo-wrap, .team-top-logo-btn, .header-wall-brand, .cell-lanyard-stage, .works-media-card';

    const handleMouseOver = (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        scaler.classList.add('is-hovering');
        rotationRef.current += 180;
        if (logo) {
          logo.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        scaler.classList.remove('is-hovering');
      }
    };

    // Click press tactile effect
    const handleMouseDown = () => {
      scaler.classList.add('is-active');
    };

    const handleMouseUp = () => {
      scaler.classList.remove('is-active');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor-wrap" aria-hidden="true">
      <div ref={scalerRef} className="custom-cursor-scaler">
        <div ref={logoRef} className="custom-cursor-logo">
          <GenLabLogo size={34} color="var(--cursor-color, #c2e600)" />
        </div>
      </div>
    </div>
  );
}
