import React, { useRef, useEffect } from 'react';

export default function ShowreelSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ticking = false;

    const updateScrollExpand = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Expand smoothly as the section scrolls into the viewport
      // Starts expanding at 90% viewport height and reaches full expansion around 28%
      const start = windowHeight * 0.90;
      const end = windowHeight * 0.28;
      const total = start - end;
      const current = start - rect.top;

      const progress = Math.min(1, Math.max(0, current / total));
      el.style.setProperty('--expand-p', progress.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollExpand);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollExpand();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="showreel-section" ref={sectionRef} style={{ '--expand-p': '0' }}>
      <div className="showreel-stage" role="region" aria-label="GenLab Video Showreel">
        <video
          ref={videoRef}
          src="/assets/scene.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="showreel-billboard-img showreel-billboard-video"
        />
        <div className="showreel-overlay" />

        <div className="showreel-marquee">
          <div className="showreel-track">
            <div className="showreel-group">
              <span className="marquee-sans">GenLab Reel</span>
              <span className="marquee-display">AI Powerhouse</span>
              <span className="marquee-sans">GenLab Reel</span>
              <span className="marquee-display">AI Powerhouse</span>
            </div>
            <div className="showreel-group" aria-hidden="true">
              <span className="marquee-sans">GenLab Reel</span>
              <span className="marquee-display">AI Powerhouse</span>
              <span className="marquee-sans">GenLab Reel</span>
              <span className="marquee-display">AI Powerhouse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
