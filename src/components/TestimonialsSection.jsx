import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "He treated a cancer-support product with the care it deserved: clearer journeys, less friction, and a system our whole team could finally build on.",
      author: "Richard Dood",
      role: "Digital Director @Macmillan"
    },
    {
      quote: "He turned a developer-first product into something anyone could navigate. Sharp, fast, and grounded in how our users actually work.",
      author: "Alex Vanev",
      role: "VP Product @Constructor"
    },
    {
      quote: "Strategic clarity paired with world-class craft. Krasimir took our initial MVP and turned it into an award-winning digital experience.",
      author: "Elena Rostova",
      role: "Founder & CEO @Simplebet"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-left">
          <h2 className="testimonials-heading">
            What <em>people</em><br />have to say
          </h2>
          <p className="testimonials-desc">
            Curious what it’s really like to work with me?<br />
            Don’t take my word for it. Here’s what my clients say.
          </p>
        </div>

        <div className="testimonials-deck">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <p className="testimonial-author">
                <strong>{t.author} </strong>— <span className="author-role">{t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
