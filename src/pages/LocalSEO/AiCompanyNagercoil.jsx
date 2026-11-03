import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import './AiCompanyNagercoil.css';

const SERVICES = [
  {
    badge: 'Core Specialty',
    title: 'Agentic AI & Autonomous Systems',
    desc: 'Custom multi-agent workflows, autonomous agent loops, and intelligent reasoning engines built to handle complex enterprise processes end-to-end.',
  },
  {
    badge: 'Intelligence',
    title: 'AI Product Research & Market Discovery',
    desc: 'Deep data extraction, competitive market synthesis, and automated semantic research platforms providing actionable business intelligence.',
  },
  {
    badge: 'Engineering',
    title: 'Full-Stack Web & Mobile App Engineering',
    desc: 'Production-ready cloud platforms, reactive web applications, and cross-platform mobile apps engineered with React, Node.js, Python, and Flutter.',
  },
  {
    badge: 'Enterprise AI',
    title: 'Custom LLM & Private RAG Pipelines',
    desc: 'Fine-tuned Large Language Models, contextual retrieval-augmented generation (RAG), and secure local embeddings tailored to proprietary datasets.',
  },
  {
    badge: 'Speed to Market',
    title: 'Rapid AI MVP Development',
    desc: 'Turn ideas into deployable AI products in weeks. We deliver tested, scalable MVPs for regional founders and global startups without agency bloat.',
  },
  {
    badge: 'Design & Identity',
    title: 'Digital Branding & UI/UX Design',
    desc: 'High-converting design systems, intuitive digital user interfaces, and complete brand identity packages built to command market attention.',
  },
];

const LOCAL_AREAS = [
  'Nagercoil (Chetti Kulam, Simon Nagar, Kottar, Vadasery, Parvathipuram, Asaripallam)',
  'Marthandam & Kuzhithurai',
  'Thuckalay & Padmanabhapuram',
  'Colachel & Coastal Belt',
  'Kanyakumari Town & Agasteeswaram',
  'Karungal & Eraniel',
  'Tirunelveli & Southern Tamil Nadu',
  'Bengaluru Hub (Karnataka)',
];

const FAQS = [
  {
    question: 'Why choose GenLab as your AI company in Nagercoil and Kanyakumari?',
    answer:
      'GenLab is an AI-first software company established directly in Nagercoil, combining Silicon-caliber technical expertise with deep local roots. Our Gen Z engineering team is native to modern AI tools, agentic architectures, and rapid deployment frameworks, ensuring world-class results without agency overhead.',
  },
  {
    question: 'What types of AI and software solutions does GenLab build?',
    answer:
      'We engineer autonomous AI agents, enterprise LLM integrations, custom RAG search pipelines, full-stack web platforms (React, Next.js, Node, Python), mobile applications (Flutter, React Native), and comprehensive digital branding systems.',
  },
  {
    question: 'Where is GenLab’s Nagercoil office located?',
    answer:
      'Our physical office is located at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India. You are welcome to schedule a visit or reach out directly at +91 9994535120.',
  },
  {
    question: 'Do you work with local businesses as well as international clients?',
    answer:
      'Yes. We actively empower local enterprises, retail brands, healthcare providers, and educational institutions in Kanyakumari district and Tamil Nadu, while also serving high-growth startups and enterprises in Bengaluru, the US, Europe, and the Middle East.',
  },
  {
    question: 'How fast can GenLab develop and deploy an AI solution or MVP?',
    answer:
      'Depending on the scope, we develop functional proof-of-concept AI agents and production-ready MVPs in as little as 2 to 4 weeks. Following a discovery call, we outline clear milestone deliverables and delivery timelines.',
  },
];

export default function AiCompanyNagercoil({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? -1 : idx));
  };

  const handleHomeClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('portfolio');
    }
  };

  return (
    <div className="portfolio-app">
      <Navigation currentView="local-nagercoil" onNavigate={onNavigate} />

      <main className="local-seo-page" style={{ minHeight: '100vh', paddingTop: '2.5rem' }}>
        <div className="local-seo-container">
          {/* Breadcrumb Navigation for SEO */}
          <nav aria-label="Breadcrumb" className="local-breadcrumb">
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
            <span className="local-breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">AI Company in Nagercoil</span>
          </nav>

          {/* Intro Header Section */}
          <header className="works-intro" style={{ minHeight: 'auto', paddingTop: '1.5rem', paddingBottom: '3rem' }}>
            <img
              className="works-intro-mark"
              src="/genlab/Genlab.webp"
              alt="GenLab AI Company Logo"
              width="120"
              height="120"
            />
            <div className="works-intro-content">
              <span className="service-badge">Southern Tamil Nadu · Premier AI Hub</span>
              <h1 className="works-intro-title">
                AI Company in <em>Nagercoil</em>
                <br />
                <em>&amp; Kanyakumari</em> <span aria-hidden="true">→</span>
              </h1>
              <p className="works-intro-description" style={{ maxWidth: '48rem', marginTop: '1.25rem' }}>
                GenLab is an agentic AI platform and full-stack software company built by Gen Z. Operating from Nagercoil, Kanyakumari district, Tamil Nadu and Bengaluru, Karnataka, we engineer autonomous AI agents, enterprise software, and high-impact digital brands for ambitious startups and regional enterprises.
              </p>
            </div>
          </header>

          {/* Local Highlights & Core Metrics */}
          <section className="metrics-section" style={{ paddingTop: '1rem', paddingBottom: '3.5rem' }} aria-label="Key Metrics">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">6+</span>
                  <span className="metric-unit">Years</span>
                </div>
                <p className="metric-desc">Of experience delivering AI systems &amp; modern software</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">100+</span>
                  <span className="metric-unit">Projects</span>
                </div>
                <p className="metric-desc">Shipped for startups, scale-ups, and global companies</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">AI</span>
                  <span className="metric-unit">Native</span>
                </div>
                <p className="metric-desc">Autonomous multi-agent workflows &amp; private LLM systems</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">Dual</span>
                  <span className="metric-unit">Hubs</span>
                </div>
                <p className="metric-desc">Engineering power in Nagercoil, scaling across Bengaluru</p>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section aria-labelledby="services-heading" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
            <span className="works-tag">Full-Lifecycle Engineering</span>
            <h2 id="services-heading" className="works-title" style={{ marginTop: '0.5rem' }}>
              Comprehensive AI &amp; Software Solutions in Nagercoil
            </h2>
            <p className="works-subtitle" style={{ marginTop: '0.5rem', maxWidth: '44rem' }}>
              From autonomous decision-making agents to enterprise full-stack web and mobile platforms, we bridge deep AI research with production-grade engineering.
            </p>

            <div className="local-services-grid">
              {SERVICES.map((s, idx) => (
                <article key={idx} className="local-service-card">
                  <div>
                    <span className="service-badge">{s.badge}</span>
                    <h3 className="local-service-title">{s.title}</h3>
                    <p className="local-service-desc">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Local Geographic Coverage Section */}
          <section aria-labelledby="areas-heading" style={{ paddingTop: '2rem', paddingBottom: '3.5rem' }}>
            <span className="works-tag">Regional Footprint</span>
            <h2 id="areas-heading" className="works-title" style={{ marginTop: '0.5rem' }}>
              Serving Nagercoil, Kanyakumari District &amp; Beyond
            </h2>
            <p className="works-subtitle" style={{ marginTop: '0.5rem', maxWidth: '44rem' }}>
              While we serve international clients globally, we are deeply committed to driving digital transformation and tech opportunities throughout southern Tamil Nadu.
            </p>

            <div className="local-areas-grid">
              {LOCAL_AREAS.map((area, idx) => (
                <div key={idx} className="local-area-pill">
                  <span style={{ color: '#c2e600' }}>✓</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Frequently Asked Questions (FAQ) Section */}
          <section className="local-faq-section" aria-labelledby="faq-heading" style={{ paddingBottom: '4rem' }}>
            <span className="works-tag">Got Questions?</span>
            <h2 id="faq-heading" className="works-title" style={{ marginTop: '0.5rem' }}>
              Frequently Asked Questions About AI in Nagercoil
            </h2>
            <p className="works-subtitle" style={{ marginTop: '0.5rem', maxWidth: '44rem' }}>
              Everything you need to know about partnering with GenLab for AI systems, web development, and digital branding.
            </p>

            <div className="local-faq-list">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="local-faq-item">
                    <button
                      type="button"
                      className="local-faq-question"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="local-faq-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="local-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Physical Office Card & Contact CTA */}
          <section aria-labelledby="office-heading" style={{ paddingBottom: '5rem' }}>
            <div className="local-office-card">
              <div>
                <span className="service-badge">Physical Office</span>
                <h2 id="office-heading" className="local-office-title">
                  Visit GenLab Nagercoil
                </h2>
                <address className="local-office-address">
                  121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road,
                  <br />
                  Nagercoil, Kanyakumari District,
                  <br />
                  Tamil Nadu 629001, India.
                </address>

                <div className="local-office-meta">
                  <div>
                    <strong>Phone / WhatsApp: </strong>
                    <a href="tel:+919994535120">+91 9994535120</a>
                  </div>
                  <div>
                    <strong>Email: </strong>
                    <a href="mailto:info@genlab.cc">info@genlab.cc</a>
                  </div>
                  <div>
                    <strong>Hours: </strong>
                    <span>Monday – Saturday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>

                <div className="cta-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a
                    href="https://wa.me/919994535120?text=Hi%20GenLab%2C%20I%20am%20looking%20for%20an%20AI%20and%20software%20company%20in%20Nagercoil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-pill"
                  >
                    <span>Chat on WhatsApp (+91 9994535120)</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=8.1833,77.4119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-pill"
                    style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                  >
                    <span>View on Google Maps ↗</span>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Ready to launch your AI project?</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.8 }}>
                  Whether you need custom agentic automation, a high-speed web application, or full product branding, our Nagercoil engineering team is ready to collaborate.
                </p>
                <a
                  href="#footer"
                  onClick={(e) => {
                    const el = document.getElementById('footer');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="cta-btn-pill"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>Request a Discovery Call</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
