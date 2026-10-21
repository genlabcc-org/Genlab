import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Content structure with embedded animated glyphs and underline-accented keywords
  const paragraphsData = useMemo(() => [
    [
      {
        type: 'text',
        value: 'We grew up on the internet, so we build like it. GenLab is a team of young engineers, designers and AI specialists',
      },
      {
        type: 'glyph',
        name: 'diamond',
        className: 'glyph-diamond',
      },
      {
        type: 'text',
        value: 'who pair modern tooling with serious',
      },
      {
        type: 'underline',
        value: 'engineering discipline.',
      },
    ],
    [
      {
        type: 'text',
        value: 'Whether you need a custom',
      },
      {
        type: 'underline',
        value: 'web platform,',
      },
      {
        type: 'text',
        value: 'a mobile app, a cloud migration',
      },
      {
        type: 'glyph',
        name: 'clover',
        className: 'glyph-clover',
      },
      {
        type: 'text',
        value: 'or an',
      },
      {
        type: 'underline',
        value: 'AI agent',
      },
      {
        type: 'text',
        value: "that automates real work, you'll talk to the people who actually build it.",
      },
      {
        type: 'glyph',
        name: 'flower',
        className: 'glyph-flower',
      },
    ],
  ], []);

  // Compute reveal steps across all tokens for scrubbed scroll animation
  const { processedParagraphs, totalSteps } = useMemo(() => {
    let stepCounter = 0;
    const processed = paragraphsData.map((paragraph) => {
      return paragraph.map((block) => {
        if (block.type === 'text') {
          const words = block.value.trim().split(/\s+/);
          const items = words.map((w) => ({
            word: w,
            step: stepCounter++,
          }));
          return { type: 'text', items };
        }
        if (block.type === 'underline') {
          const words = block.value.trim().split(/\s+/);
          const startStep = stepCounter;
          const items = words.map((w) => ({
            word: w,
            step: stepCounter++,
          }));
          return {
            type: 'underline',
            items,
            startStep,
            endStep: stepCounter - 1,
          };
        }
        if (block.type === 'glyph') {
          const step = stepCounter++;
          return { ...block, step };
        }
        return block;
      });
    });

    return { processedParagraphs: processed, totalSteps: stepCounter };
  }, [paragraphsData]);

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
                  backgroundColor: Math.abs(scrollProgress * 28 - i) < 2 ? '#c2e600' : (i % 7 === 0 ? '#929292' : '#555555')
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
