import React, { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [overrideIndex, setOverrideIndex] = useState(null);

  const faqs = [
    {
      question: 'What does GenLab do?',
      answer:
        'GenLab is a software development and AI company based in Nagercoil and Bengaluru, India. We build custom web and mobile apps, AI and agentic solutions, cloud infrastructure and product designs for startups and enterprises.',
    },
    {
      question: 'Why work with a Gen Z-led team?',
      answer:
        "We're native to the tools and habits shaping modern products: AI-assisted development, fast iteration and mobile-first design. Combined with disciplined engineering practices, that means shorter timelines without cutting corners.",
    },
    {
      question: 'How long does it take to build an MVP?',
      answer:
        "MVP timelines depend on scope. After a short discovery call, we'll provide a clear plan and timeline.",
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes. We work across time zones, with overlap hours, async updates and weekly demos as standard.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        "React, Next.js, Node.js, Python, Flutter, React Native, AWS, GCP, Azure and modern LLM platforms. We pick the stack that fits your product, not the one we prefer.",
    },
    {
      question: 'Can you take over an existing codebase?',
      answer:
        'Yes. We start with a code and architecture review, then stabilize, document and extend what you have.',
    },
  ];

  const totalCards = faqs.length;

  useEffect(() => {
    let animFrame;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable > 0) {
        const currentScroll = -rect.top;
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
        setProgress(rawProgress);
        setOverrideIndex(null);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const scrollIndex = Math.min(
    totalCards - 1,
    Math.max(0, Math.floor(progress * totalCards * 0.999))
  );

  const activeIndex = overrideIndex !== null ? overrideIndex : scrollIndex;

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setOverrideIndex((prev) => {
      const curr = prev !== null ? prev : scrollIndex;
      return (curr + 1) % totalCards;
    });
  };

  return (
    <section className="testimonials-section" ref={sectionRef} id="testimonials">
      <div className="testimonials-sticky-wrap">
        <div className="testimonials-inner">
          <div className="testimonials-left">
            <h2 className="testimonials-heading">Frequently asked questions</h2>

            <p className="testimonials-desc">
              Answers to common questions about working with GenLab.
            </p>

            <div className="testimonials-plus-wrap">
              <button
                type="button"
                className="testimonials-plus-btn"
                onClick={handleNext}
                aria-label="Next frequently asked question"
              >
                <span className="plus-symbol">+</span>
              </button>
            </div>
          </div>

          <div
            className="testimonials-deck"
            onClick={handleNext}
            role="region"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, idx) => {
              const isCurrent = idx === activeIndex;
              const isPast = idx < activeIndex;
              const depth = activeIndex - idx;

              let cardStyle = {};
              let cardClass = 'testimonial-card';

              if (isCurrent) {
                cardClass += ' is-active';
                cardStyle = {
                  transform: 'translate3d(0, 0, 0)',
                  opacity: 1,
                  zIndex: 20,
                  pointerEvents: 'auto',
                };
              } else if (isPast) {
                // Tiered stacked deck: 16px right, 16px up per level
                cardClass += ' is-stacked';
                const offsetX = depth * 16;
                const offsetY = -depth * 16;
                cardStyle = {
                  transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
                  opacity: 1,
                  zIndex: 20 - depth,
                  pointerEvents: 'none',
                };
              } else {
                // Future card waiting to slide in
                cardClass += ' is-upcoming';
                cardStyle = {
                  transform: 'translate3d(0, 70px, 0)',
                  opacity: 0,
                  zIndex: 5,
                  pointerEvents: 'none',
                };
              }

              return (
                <article
                  key={idx}
                  className={cardClass}
                  style={cardStyle}
                  aria-hidden={!isCurrent}
                >
                  <h3 className="testimonial-quote">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
