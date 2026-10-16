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
      
      // Calculate how far through the section the viewport has scrolled
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
            <span className="about-word" style={{ opacity: scrollProgress > 0.05 ? 1 : 0.25 }}>With </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.08 ? 1 : 0.25 }}>a </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.11 ? 1 : 0.25 }}>holistic </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.14 ? 1 : 0.25 }}>approach </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.17 ? 1 : 0.25 }}>that </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.20 ? 1 : 0.25 }}>balances </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.23 ? 1 : 0.25 }}>aesthetics </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-diamond" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.27 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.30 ? 1 : 0.25 }}>usability, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.33 ? 1 : 0.25 }}>I </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.36 ? 1 : 0.25 }}>craft </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.39 ? 1 : 0.25 }}>digital </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.42 ? 1 : 0.25 }}>products</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.44 ? 1 : 0})` }} />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.46 ? 1 : 0.25 }}> that </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.48 ? 1 : 0.25 }}>deliver </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.50 ? 1 : 0.25 }}>exceptional </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.52 ? 1 : 0.25 }}>user </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.54 ? 1 : 0.25 }}>experiences. </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.56 ? 1 : 0.25 }}>Specialising </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.58 ? 1 : 0.25 }}>in </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.60 ? 1 : 0.25 }}>turning </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.62 ? 1 : 0.25 }}>complex </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.64 ? 1 : 0.25 }}>challenges </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.66 ? 1 : 0.25 }}>into </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.68 ? 1 : 0.25 }}>intuitive </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.70 ? 1 : 0.25 }}>solutions</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.72 ? 1 : 0})` }} />
            </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.70 ? 1 : 0.25 }}>, </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-clover" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.73 ? 1 : 0.25 }}>I </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.75 ? 1 : 0.25 }}>offer </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.77 ? 1 : 0.25 }}>a </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.79 ? 1 : 0.25 }}>suite </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.81 ? 1 : 0.25 }}>of </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.83 ? 1 : 0.25 }}>design </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.85 ? 1 : 0.25 }}>services </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.87 ? 1 : 0.25 }}>that </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.89 ? 1 : 0.25 }}>breathe </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.90 ? 1 : 0.25 }}>life </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.91 ? 1 : 0.25 }}>into </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.92 ? 1 : 0.25 }}>your </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.93 ? 1 : 0.25 }}>vision. </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.94 ? 1 : 0.25 }}>Through </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.95 ? 1 : 0.25 }}>collaborative </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.96 ? 1 : 0.25 }}>ideation, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.97 ? 1 : 0.25 }}>rigorous </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.98 ? 1 : 0.25 }}>research, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.98 ? 1 : 0.25 }}>and </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>iterative </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>design </span>
            
            <span className="about-u-wrap">
              <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>processes</span>
              <span className="about-u-bar" style={{ transform: `scaleX(${scrollProgress > 0.99 ? 1 : 0})` }} />
            </span>
            
            <span className="about-glyph-container">
              <span className="about-glyph glyph-flower" />
            </span>
            
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}> ,I </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>ensure </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>that </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>every </span>
            <span className="about-word" style={{ opacity: scrollProgress > 0.99 ? 1 : 0.25 }}>detail </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>aligns </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>your </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>goals, </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>enriching </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>the </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>lives </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>of </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>your </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>users </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>with </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>every </span>
            <span className="about-word" style={{ opacity: scrollProgress > 1.0 ? 1 : 0.25 }}>interaction.</span>
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
