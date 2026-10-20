import React, { useState, useRef, useEffect } from 'react';

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

const SparkleIcon = () => (
  <svg viewBox="0 0 40 40" className="cap-glyph-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2 C20 12 12 20 2 20 C12 20 20 28 20 38 C20 28 28 20 38 20 C28 20 20 12 20 2 Z" />
    <circle cx="20" cy="20" r="3" fill="#121212" />
  </svg>
);

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(null);
  const rowsRef = useRef([]);
  const cursorCardRef = useRef(null);
  const posRef = useRef({ currX: -999, currY: -999, targetX: -999, targetY: -999 });
  const rafRef = useRef(null);

  const capabilities = [
    {
      id: 'software',
      num: '01',
      left: 'Software',
      title: 'CUSTOM SOFTWARE',
      category: 'Software Engineering',
      badge: 'Core Engine',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'We build SaaS platforms, internal tools, dashboards and APIs with clean architecture and tested code. You own everything we write.',
      pills: ['SaaS Platforms', 'Internal Tools', 'API Architecture', 'React & Node.js'],
      icon: <SunIcon />,
      right: 'Engineering',
    },
    {
      id: 'ai',
      num: '02',
      left: 'AI',
      title: 'AI & AGENTIC',
      category: 'AI & Intelligence',
      badge: 'Agentic Core',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'We design and ship LLM-powered features and AI agents that plug into your existing systems, not demos that die in a slide deck.',
      pills: ['AI Copilots', 'Agentic Pipelines', 'Custom RAG on Data', 'Model Guardrails'],
      icon: <FlowerIcon />,
      right: 'Automation',
    },
    {
      id: 'apps',
      num: '03',
      left: 'Apps',
      title: 'WEB & MOBILE',
      category: 'Digital Products',
      badge: 'Cross-Platform',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'Responsive websites, progressive web apps and native-quality mobile apps with technical SEO, Core Web Vitals and accessibility baked in.',
      pills: ['Next.js / React', 'iOS & Android Native', 'Core Web Vitals 100', 'PWA / Mobile'],
      icon: <StarIcon />,
      right: 'Development',
    },
    {
      id: 'product',
      num: '04',
      left: 'Product',
      title: 'UI/UX & PRODUCT',
      category: 'Interface & Systems',
      badge: 'Human-Centered',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'We test with real users before we build, so you spend money on features people want.',
      pills: ['User Research', 'Design Systems', 'Interactive Prototypes', 'UX Testing'],
      icon: <EyeIcon />,
      right: 'Design',
    },
    {
      id: 'cloud',
      num: '05',
      left: 'Cloud',
      title: 'CLOUD & DEVOPS',
      category: 'Cloud Infrastructure',
      badge: 'Cloud Native',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'Move faster without breaking things. We modernize legacy systems and automate everything between commit and production.',
      pills: ['AWS / GCP / Azure', 'CI/CD Automation', 'Infra as Code', 'Zero-Downtime'],
      icon: <AsteriskIcon />,
      right: 'Modernization',
    },
    {
      id: 'research',
      num: '06',
      left: 'Research',
      title: 'RESEARCH & BRANDING',
      category: 'Strategy & Brand',
      badge: 'Market Traction',
      accent: '#c2e600',
      accentGlow: 'rgba(194, 230, 0, 0.3)',
      description:
        'Before you build, validate. We help founders test the market, sharpen positioning and create a brand that looks like it belongs.',
      pills: ['Market Validation', 'Product Strategy', 'Brand Identity', 'GTM Planning'],
      icon: <SparkleIcon />,
      right: 'Positioning',
    },
  ];

  const [displayItem, setDisplayItem] = useState(capabilities[0]);

  useEffect(() => {
    if (activeIdx !== null && capabilities[activeIdx]) {
      setDisplayItem(capabilities[activeIdx]);
    }
  }, [activeIdx]);

  useEffect(() => {
    let isRunning = true;
    const updateCard = () => {
      if (!isRunning) return;
      const pos = posRef.current;
      pos.currX += (pos.targetX - pos.currX) * 0.22;
      pos.currY += (pos.targetY - pos.currY) * 0.22;

      if (cursorCardRef.current) {
        cursorCardRef.current.style.transform = `translate3d(${pos.currX}px, ${pos.currY}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(updateCard);
    };

    rafRef.current = requestAnimationFrame(updateCard);

    return () => {
      isRunning = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleContainerMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const cardWidth = 320;
    const cardHeight = 220;
    let tx = mouseX + 24;
    let ty = mouseY - 40;

    // Viewport collision bounds
    if (tx + cardWidth > window.innerWidth - 20) {
      tx = mouseX - cardWidth - 24;
    }
    if (tx < 16) tx = 16;

    if (ty + cardHeight > window.innerHeight - 20) {
      ty = window.innerHeight - cardHeight - 20;
    }
    if (ty < 16) ty = 16;

    posRef.current.targetX = tx;
    posRef.current.targetY = ty;

    // First frame initialization if needed
    if (posRef.current.currX < -500) {
      posRef.current.currX = tx;
      posRef.current.currY = ty;
    }

    // Row proximity detection
    let closestIndex = null;
    let minDistance = 85;

    rowsRef.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (mouseY >= rect.top && mouseY <= rect.bottom) {
        closestIndex = index;
        minDistance = 0;
        return;
      }
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
    <section
      className="services-section"
      id="services"
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
    >
      <div className="services-header">
        <h2 className="services-title">
          <em>What</em> we build
        </h2>
        <p className="services-desc">
          Six disciplines, one team accountable for the outcome.
        </p>
      </div>

      <div className="services-list">
        {capabilities.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={item.id}
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
                    color: isActive ? item.accent : undefined,
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
            </div>
          );
        })}
      </div>

      {/* Floating Interactive Cursor Box */}
      <div
        ref={cursorCardRef}
        className={`services-cursor-card ${activeIdx !== null && displayItem ? 'is-visible' : ''}`}
        aria-hidden="true"
        style={
          displayItem
            ? {
                '--accent-color': displayItem.accent,
                '--accent-glow': displayItem.accentGlow,
              }
            : undefined
        }
      >
        {displayItem && (
          <div key={displayItem.id} className="services-cursor-inner">
            <div className="cursor-card-top">
              <div className="cursor-card-badge">
                <span
                  className="cursor-card-dot"
                  style={{ backgroundColor: displayItem.accent, color: displayItem.accent }}
                />
                <span className="cursor-card-category">{displayItem.category}</span>
              </div>
              <span className="cursor-card-num">{displayItem.num}</span>
            </div>

            <div className="cursor-card-title-row">
              <span className="cursor-card-icon" style={{ color: displayItem.accent }}>
                {displayItem.icon}
              </span>
              <h4 className="cursor-card-title">{displayItem.title}</h4>
            </div>

            <p className="cursor-card-desc">{displayItem.description}</p>

            <div className="cursor-card-pills">
              {displayItem.pills.map((pill) => (
                <span key={pill} className="cursor-card-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
