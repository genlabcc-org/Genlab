import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutParagraphs = [
    'We grew up on the internet, so we build like it. GenLab is a team of young engineers, designers and AI specialists who pair modern tooling with serious engineering discipline.',
    "Whether you need a custom web platform, a mobile app, a cloud migration or an AI agent that automates real work, you'll talk to the people who actually build it.",
  ];
  const aboutWords = aboutParagraphs.map((paragraph) => paragraph.split(' '));
  const totalWords = aboutWords.reduce((total, words) => total + words.length, 0);

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
          {aboutWords.map((words, paragraphIndex) => (
            <p className="about-flow-text" key={paragraphIndex}>
              {words.map((word, wordIndex) => {
                const wordPosition = aboutWords
                  .slice(0, paragraphIndex)
                  .reduce((total, previousWords) => total + previousWords.length, 0) + wordIndex;
                const revealThreshold = (wordPosition + 1) / totalWords;

                return (
                  <React.Fragment key={`${paragraphIndex}-${wordIndex}`}>
                    <span
                      className="about-word"
                      style={{ opacity: scrollProgress >= revealThreshold ? 1 : 0.25 }}
                    >
                      {word}
                    </span>
                    {wordIndex < words.length - 1 ? ' ' : ''}
                  </React.Fragment>
                );
              })}
            </p>
          ))}
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
