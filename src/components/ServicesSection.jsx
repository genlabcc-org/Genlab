import React, { useState, useRef } from 'react';

const SunIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2.5" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <line
          key={i}
          x1="20"
          y1="8.5"
          x2="20"
          y2="3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 20 20)`}
        />
      );
    })}
  </svg>
);

const FlowerIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5 C20 12 13 19 5 20 C13 21 20 28 20 35 C20 28 27 21 35 20 C27 19 20 12 20 5 Z" />
    <circle cx="10" cy="10" r="3.5" />
    <circle cx="30" cy="10" r="3.5" />
    <circle cx="10" cy="30" r="3.5" />
    <circle cx="30" cy="30" r="3.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2 C20 12.5 13 18.5 2 20 C13 21.5 20 27.5 20 38 C20 27.5 27 21.5 38 20 C27 18.5 20 12.5 20 2 Z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 44 40" className="cap-glyph-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 20 C10 8 34 8 42 20 C34 32 10 32 2 20 Z"
      fill="currentColor"
    />
    <circle cx="22" cy="20" r="5" fill="#121212" />
  </svg>
);

const AsteriskIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {[0, 45, 90, 135].map((angle) => (
      <rect
        key={angle}
        x="17"
        y="4"
        width="6"
        height="32"
        rx="3"
        transform={`rotate(${angle} 20 20)`}
      />
    ))}
  </svg>
);

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(null);
  const rowsRef = useRef([]);

  const capabilities = [
    {
      left: 'Software',
      title: 'CUSTOM SOFTWARE',
      description:
        'We build SaaS platforms, internal tools, dashboards and APIs with clean architecture and tested code. You own everything we write.',
      details: [
        'Discovery, architecture and technical roadmaps',
        'Full-stack development (React, Next.js, Node.js, Python)',
        'API design and third-party integrations',
        'QA automation and code reviews',
      ],
      icon: <SunIcon />,
      right: 'Engineering'
    },
    {
      left: 'AI',
      title: 'AI & AGENTIC',
      description:
        'We design and ship LLM-powered features and AI agents that plug into your existing systems, not demos that die in a slide deck.',
      details: [
        'AI assistants and copilots for customers and teams',
        'Workflow automation and agentic pipelines',
        'RAG systems on your own data',
        'Model evaluation, guardrails and cost control',
      ],
      icon: <FlowerIcon />,
      right: 'Automation'
    },
    {
      left: 'Apps',
      title: 'WEB & MOBILE',
      description:
        'Responsive websites, progressive web apps and native-quality mobile apps with technical SEO, Core Web Vitals and accessibility baked in.',
      details: [
        'Next.js and React web apps',
        'iOS and Android with Flutter or React Native',
        'E-commerce and CMS builds',
        'Performance, SEO and analytics setup',
      ],
      icon: <StarIcon />,
      right: 'Development'
    },
    {
      left: 'Product',
      title: 'UI/UX & PRODUCT',
      description:
        'We test with real users before we build, so you spend money on features people want.',
      details: [
        'User research and journey mapping',
        'Wireframes, prototypes and design systems',
        'Usability testing and iteration',
      ],
      icon: <EyeIcon />,
      right: 'Design'
    },
    {
      left: 'Cloud',
      title: 'CLOUD & DEVOPS',
      description:
        'Move faster without breaking things. We modernize legacy systems and automate everything between commit and production.',
      details: [
        'AWS, GCP and Azure migration and architecture',
        'CI/CD pipelines and infrastructure as code',
        'Monitoring, security hardening and cost optimization',
      ],
      icon: <AsteriskIcon />,
      right: 'Modernization'
    },
    {
      left: 'Research',
      title: 'RESEARCH & BRANDING',
      description:
        'Before you build, validate. We help founders test the market, sharpen positioning and create a brand that looks like it belongs.',
      details: [
        'Market and competitor research',
        'Product strategy and go-to-market planning',
        'Naming, visual identity and brand guidelines',
      ],
      icon: <AsteriskIcon />,
      right: 'Positioning'
    }
  ];

  const handleContainerMouseMove = (e) => {
    const mouseY = e.clientY;
    let closestIndex = null;
    let minDistance = 75; // proximity threshold in pixels

    rowsRef.current.forEach((el, index) => {
      if (!el) return;
      const rect = (el.querySelector('.cap-center-wrap') || el).getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distance = Math.abs(mouseY - centerY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIdx(closestIndex);
  };

  const handleContainerMouseLeave = () => {
    setActiveIdx(null);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="services-title">
          <em>What</em> we build
        </h2>
        <p className="services-desc">
          Six disciplines, one team accountable for the outcome.
        </p>
      </div>

      <div
        className="services-list"
        onMouseMove={handleContainerMouseMove}
        onMouseLeave={handleContainerMouseLeave}
      >
        {capabilities.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              ref={(el) => (rowsRef.current[idx] = el)}
              className={`services-row ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              {/* Left Label */}
              <span
                className="cap-side-label cap-left"
                style={{ color: isActive ? 'var(--text-headline)' : undefined }}
              >
                {item.left}
              </span>

              {/* Center Typography & Rotating Glyph */}
              <div className="cap-center-wrap">
                <span
                  className="cap-icon-glyph"
                  style={{
                    color: isActive ? 'var(--text-headline)' : undefined,
                    transform: isActive ? 'rotate(180deg) scale(1.08)' : undefined,
                  }}
                >
                  {item.icon}
                </span>
                <span
                  className="cap-name-bold"
                  style={{
                    color: isActive ? 'var(--text-headline)' : undefined,
                    fontWeight: isActive ? 700 : undefined,
                    fontVariationSettings: isActive ? "'wght' 700" : undefined,
                    transform: isActive ? 'scale(1.025)' : undefined,
                  }}
                >
                  {item.title}
                </span>
              </div>

              {/* Right Label */}
              <span
                className="cap-side-label cap-right"
                style={{ color: isActive ? 'var(--text-headline)' : undefined }}
              >
                {item.right}
              </span>

              <div
                className="service-details"
                aria-hidden={!isActive}
                style={isActive ? {
                  maxHeight: '18rem',
                  marginTop: '1.25rem',
                  padding: '1.25rem',
                  borderColor: 'color-mix(in srgb, var(--text-headline) 12%, transparent)',
                  backgroundColor: 'color-mix(in srgb, var(--text-headline) 4%, transparent)',
                  opacity: 1,
                  transform: 'translateY(0)',
                } : undefined}
              >
                <p className="service-details-description">{item.description}</p>
                <ul className="service-details-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
