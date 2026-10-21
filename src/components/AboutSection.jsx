import React, { useEffect, useRef, useState, useMemo } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Content structure with embedded animated glyphs and underline-accented keywords
  const paragraphsData = useMemo(() => [
    [
      {
        type: 'text',
        value: 'GenLab is a team of young engineers, designers and AI specialists',
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

      // Start revealing as section enters the viewport, completing as it reaches top
      const startOffset = windowHeight * 0.85;
      const endOffset = windowHeight * 0.15;
      const totalDistance = rect.height + (startOffset - endOffset);
      const currentDistance = startOffset - rect.top;
      const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
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
          {processedParagraphs.map((paragraph, pIdx) => (
            <p className="about-flow-text" key={pIdx}>
              {paragraph.map((block, bIdx) => {
                if (block.type === 'text') {
                  return (
                    <React.Fragment key={bIdx}>
                      {block.items.map((item, iIdx) => {
                        const threshold = (item.step + 1) / (totalSteps + 1);
                        const isRevealed = scrollProgress >= threshold;
                        return (
                          <React.Fragment key={iIdx}>
                            <span
                              className="about-word"
                              style={{ opacity: isRevealed ? 1 : 0.22 }}
                            >
                              {item.word}
                            </span>
                            {' '}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                }

                if (block.type === 'underline') {
                  const endThreshold = (block.endStep + 1) / (totalSteps + 1);
                  const isUnderlineRevealed = scrollProgress >= endThreshold;
                  return (
                    <React.Fragment key={bIdx}>
                      <span className="about-u-wrap">
                        {block.items.map((item, iIdx) => {
                          const threshold = (item.step + 1) / (totalSteps + 1);
                          const isRevealed = scrollProgress >= threshold;
                          return (
                            <React.Fragment key={iIdx}>
                              <span
                                className="about-word"
                                style={{ opacity: isRevealed ? 1 : 0.22 }}
                              >
                                {item.word}
                              </span>
                              {iIdx < block.items.length - 1 ? ' ' : ''}
                            </React.Fragment>
                          );
                        })}
                        <span
                          className="about-u-bar"
                          style={{
                            transform: isUnderlineRevealed ? 'scaleX(1)' : 'scaleX(0)',
                          }}
                        />
                      </span>
                      {' '}
                    </React.Fragment>
                  );
                }

                if (block.type === 'glyph') {
                  const threshold = (block.step + 1) / (totalSteps + 1);
                  const isRevealed = scrollProgress >= threshold;
                  return (
                    <span
                      key={bIdx}
                      className="about-glyph-container"
                      style={{
                        opacity: isRevealed ? 1 : 0.25,
                        transform: isRevealed ? 'scale(1)' : 'scale(0.85)',
                      }}
                      aria-hidden="true"
                    >
                      <span className={`about-glyph ${block.className}`} />
                    </span>
                  );
                }

                return null;
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
                  backgroundColor:
                    Math.abs(scrollProgress * 28 - i) < 2
                      ? 'var(--green)'
                      : i % 7 === 0
                      ? '#929292'
                      : '#555555',
                }}
              />
            ))}
          </div>
          <div
            className="about-rail-indicator"
            style={{
              top: `${Math.min(95, Math.max(0, scrollProgress * 100))}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
