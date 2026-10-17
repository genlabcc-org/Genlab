import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight * 0.4)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-text-wrap">
          <p className="about-flow-text">
            <span className="about-word" style={{ opacity: scrollProgress > 0.05 ? 1 : 0.25 }}>We </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.08 ? 1 : 0.25 }}>transform </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.11 ? 1 : 0.25 }}>and </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.14 ? 1 : 0.25 }}>create </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.17 ? 1 : 0.25 }}>impactful </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.20 ? 1 : 0.25 }}>brands </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.23 ? 1 : 0.25 }}>and </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-diamond" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.27 ? 1 : 0.25 }}>AI </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.30 ? 1 : 0.25 }}>solutions. </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.33 ? 1 : 0.25 }}>With </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.36 ? 1 : 0.25 }}>over </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.39 ? 1 : 0.25 }}>10+ </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.42 ? 1 : 0.25 }}>companies</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.44 ? 1 : 0})` }} />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.46 ? 1 : 0.25 }}> having </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.48 ? 1 : 0.25 }}>partnered </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.50 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.52 ? 1 : 0.25 }}>us </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.54 ? 1 : 0.25 }}>to </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.56 ? 1 : 0.25 }}>achieve </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.58 ? 1 : 0.25 }}>exponential </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.60 ? 1 : 0.25 }}>growth, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.62 ? 1 : 0.25 }}>we </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.64 ? 1 : 0.25 }}>build </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.66 ? 1 : 0.25 }}>autonomous </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.68 ? 1 : 0.25 }}>intelligent </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.70 ? 1 : 0.25 }}>solutions</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.72 ? 1 : 0})` }} />
            </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.70 ? 1 : 0.25 }}>, </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-clover" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.73 ? 1 : 0.25 }}>from </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.75 ? 1 : 0.25 }}>India </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.77 ? 1 : 0.25 }}>to </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.79 ? 1 : 0.25 }}>the </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.81 ? 1 : 0.25 }}>world </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.83 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.85 ? 1 : 0.25 }}>deep </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.87 ? 1 : 0.25 }}>craft </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.89 ? 1 : 0.25 }}>and </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.90 ? 1 : 0.25 }}>love. </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.91 ? 1 : 0.25 }}>Through </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.92 ? 1 : 0.25 }}>Launchpad, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.93 ? 1 : 0.25 }}>AI </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.94 ? 1 : 0.25 }}>Forge, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.95 ? 1 : 0.25 }}>and </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.96 ? 1 : 0.25 }}>Brand </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.97 ? 1 : 0.25 }}>Studio, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.98 ? 1 : 0.25 }}>we </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.98 ? 1 : 0.25 }}>empower </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>next-gen </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>builders </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>everywhere</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.99 ? 1 : 0})` }} />
            </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-flower" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}> ,scaling </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>enterprise </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>operations </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>speed, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>accuracy, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>and </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>measurable </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>impact </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>at </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>every </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>touchpoint.</span>
          </p>
        </div>

        {/* Right side tick rail */}
        <div className="about-rail" aria-hidden="true">
          <div className="about-rail-ticks">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="about-rail-tick"
                style={{
                  height: i % 7 === 0 ? '2px' : '1px',
                  width: i % 7 === 0 ? '10px' : '4px',
                  backgroundColor: Math.abs(scrollProgress * 28 - i) < 2 ? '#6fff54' : (i % 7 === 0 ? '#929292' : '#555555')
                }}
              />
            ))}
          </div>
          <div
            className="about-rail-indicator"
            style={{ top: `${Math.min(95, Math.max(0, scrollProgress * 100))}%` }}
          />
        </div>
      </div>
    </section>
  );
}
