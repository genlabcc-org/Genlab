import React, { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [overrideIndex, setOverrideIndex] = useState(null);

  const testimonials = [
    {
      quote:
        'He treated a cancer-support product with the care it deserved: clearer journeys, less friction, and a system our whole team could finally build on.',
      author: 'Richard Dood',
      role: 'Digital Director @Macmillan',
    },
    {
      quote:
        'He turned a developer-first product into something anyone could navigate. Sharp, fast, and grounded in how our users actually work.',
      author: 'Alex Vanev',
      role: 'VP Product @Constructor',
    },
    {
      quote:
        'Strategic clarity paired with world-class craft. Krasimir took our initial MVP and turned it into an award-winning digital experience.',
      author: 'Elena Rostova',
      role: 'Founder & CEO @Simplebet',
    },
    {
      quote:
        'We handed Krasi a rough idea and got back a fundable product. Fast, opinionated, and genuinely invested in whether we won.',
      author: 'Carlos Strazzer',
      role: 'CEO @Ventures Lab',
    },
    {
      quote:
        'Nothing is beyond possibility when working with Krasi. He’s able to rise to any challenge by bringing a deep curiosity, investment and expertise to every project. Not only is he reliable but he’s great to work with. He’s genuinely dedicated to his craft.',
      author: 'Gaidar Magdanurov',
      role: 'COO @Acronis',
    },
  ];

  const totalCards = testimonials.length;

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
          {/* Left Column: Heading, Subtitle, and Green + Button directly below */}
          <div className="testimonials-left">
            <h2 className="testimonials-heading">
              What <em>people</em>
              <br />
              have to say
            </h2>

            <p className="testimonials-desc">
              Curious what it’s really like to work with me?
              <br />
              Don’t take my word for it. Here’s what my clients say.
            </p>

            {/* Circular Green Plus Button below description */}
            <div className="testimonials-plus-wrap">
              <button
                type="button"
                className="testimonials-plus-btn"
                onClick={handleNext}
                aria-label="Next review"
                title="Click to view next review"
              >
                <span className="plus-symbol">+</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Cards Deck */}
          <div
            className="testimonials-deck"
            onClick={handleNext}
            title="Click to view next card"
            role="region"
            aria-label="Client review cards deck"
          >
            {testimonials.map((t, idx) => {
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
                  <p className="testimonial-quote">{t.quote}</p>
                  <p className="testimonial-author">
                    <strong>{t.author}</strong> -{' '}
                    <span className="author-role">{t.role}</span>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
