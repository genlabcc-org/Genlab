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
      question: 'What we believe',
      items: [
        { lead: 'Ship, then polish.', text: 'Working software beats perfect slide decks.' },
        { lead: 'Be honest early.', text: 'Bad news is cheaper on day one than on launch day.' },
        { lead: 'Stay curious.', text: 'We learn new tools fast and use AI where it truly helps.' },
        { lead: 'Own the outcome.', text: 'Every project has a named person accountable for it.' },
        { lead: 'Build for people.', text: 'Accessibility, performance and clarity come before cleverness.' },
      ],
    },
    {
      question: 'How we work',
      ordered: true,
      items: [
        { lead: 'Discover.', text: 'We learn your users, goals and constraints in a short, focused kickoff.' },
        { lead: 'Design.', text: 'Wireframes and prototypes you can click before we write production code.' },
        { lead: 'Build.', text: 'Weekly sprints, weekly demos, full access to the repo and the board.' },
        { lead: 'Launch.', text: 'QA, performance tuning and a smooth release.' },
        { lead: 'Grow.', text: 'Monitoring, iteration and support as your product evolves.' },
      ],
    },
    {
      question: 'Who we build for',
      items: [
        { lead: 'Startups and founders:', text: 'MVPs, prototypes and first-version products.' },
        { lead: 'Scale-ups:', text: 'Feature velocity, platform rebuilds and extra engineering capacity.' },
        { lead: 'Enterprises:', text: 'AI pilots, modernization and dedicated product squads.' },
        { lead: 'Agencies and consultancies:', text: 'White-label development and overflow delivery.' },
      ],
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
              Our values, process and the people we work with.
            </p>

            <div className="testimonials-plus-wrap">
              <button
                type="button"
                className="testimonials-plus-btn"
                onClick={handleNext}
                aria-label="Next GenLab information card"
              >
                <span className="plus-symbol">+</span>
              </button>
            </div>
          </div>

          <div
            className="testimonials-deck"
            onClick={handleNext}
            role="region"
            aria-label="GenLab values, process and audience"
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
                  {faq.answer && <p className="faq-answer">{faq.answer}</p>}
                  {faq.items && (
                    <ul className={`faq-points${faq.ordered ? ' is-ordered' : ''}`}>
                      {faq.items.map((item) => (
                        <li key={item.lead}>
                          <strong>{item.lead}</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
