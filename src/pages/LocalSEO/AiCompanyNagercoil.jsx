import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import './AiCompanyNagercoil.css';

const SERVICES = [
  {
    badge: 'Retail & Business',
    title: 'Custom Billing & POS Software',
    desc: 'GST-compliant billing systems, barcode scanning, thermal printing, real-time inventory tracking, and multi-counter POS software for retail stores, supermarkets, restaurants, and wholesalers in Nagercoil and Kanyakumari.',
  },
  {
    badge: 'Enterprise Software',
    title: 'Custom ERP, CRM & Business Applications',
    desc: 'Tailored enterprise platforms, school & hospital management systems, appointment booking engines, automated operational dashboards, and database architectures engineered to scale business operations.',
  },
  {
    badge: 'AI & Autonomous',
    title: 'Agentic AI & Multi-Agent Workflows',
    desc: 'Custom autonomous agent systems, intelligent reasoning loops, tool-calling pipelines, and process automation bots built to automate complex business workflows end-to-end.',
  },
  {
    badge: 'Web & Mobile Engineering',
    title: 'Full-Stack Web & Mobile App Development',
    desc: 'Production-ready web portals, SaaS platforms, and high-performance iOS & Android mobile apps engineered using React, Next.js, Node.js, Python, Flutter, and React Native.',
  },
  {
    badge: 'Enterprise Intelligence',
    title: 'Custom LLM & Private RAG Pipelines',
    desc: 'Fine-tuned Large Language Models, contextual retrieval-augmented generation (RAG), and secure local embeddings tailored to proprietary enterprise datasets.',
  },
  {
    badge: 'Product Strategy & Design',
    title: 'Digital Branding & UI/UX Product Design',
    desc: 'High-converting design systems, intuitive digital user interfaces, and complete brand identity packages built to command regional and global market attention.',
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
    question: 'Does GenLab develop billing software and POS systems in Nagercoil?',
    answer:
      'Yes. GenLab builds custom, modern GST billing software and Point-of-Sale (POS) systems tailored for supermarkets, retail clothing stores, hardware shops, electronics stores, pharmacies, restaurants, and wholesale distributors in Nagercoil and Kanyakumari district. Our billing software includes barcode scanning, thermal receipt printing, stock alerts, GST reporting, and cloud or offline support.',
  },
  {
    question: 'What types of custom software development does GenLab provide?',
    answer:
      'We provide complete software engineering including custom enterprise ERP & CRM systems, hospital & school management platforms, custom booking engines, cloud dashboards, web applications, and iOS/Android mobile apps, along with cutting-edge agentic AI solutions.',
  },
  {
    question: 'Why choose GenLab over traditional software agencies in Nagercoil?',
    answer:
      'GenLab combines modern engineering speed with disciplined software craft. Unlike outdated legacy software setups, we build fast, cloud-connected, secure systems using modern stacks (React, Python, Node, Flutter) and AI-assisted workflows, providing superior user experiences with local support right here in Nagercoil.',
  },
  {
    question: 'Where is GenLab’s Nagercoil office located?',
    answer:
      'Our physical office is located at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India. You are welcome to visit our office or reach out directly via call or WhatsApp at +91 9994535120.',
  },
  {
    question: 'Do you work with local businesses as well as international clients?',
    answer:
      'Yes. We actively serve local businesses, retail brands, healthcare providers, and colleges across Kanyakumari district and Tamil Nadu, while also delivering high-growth software and AI platforms for clients in Bengaluru, the US, Europe, and the Middle East.',
  },
  {
    question: 'How fast can GenLab deliver custom software or an MVP?',
    answer:
      'Depending on the scope, we deliver functional software prototypes, custom billing setups, and production-ready MVPs within 2 to 4 weeks. Following a discovery discussion, we provide a clear roadmap, milestone deliverables, and transparent pricing.',
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
            <span aria-current="page">AI &amp; Software Development in Nagercoil</span>
          </nav>

          {/* Intro Header Section */}
          <header className="works-intro" style={{ minHeight: 'auto', paddingTop: '1.5rem', paddingBottom: '3rem' }}>
            <img
              className="works-intro-mark"
              src="/genlab/Genlab.webp"
              alt="GenLab Software & AI Company Logo"
              width="120"
              height="120"
            />
            <div className="works-intro-content">
              <span className="service-badge">Southern Tamil Nadu · Software &amp; AI Engineering Hub</span>
              <h1 className="works-intro-title">
                Software &amp; AI Company in <em>Nagercoil</em>
                <br />
                <em>&amp; Kanyakumari</em> <span aria-hidden="true">→</span>
              </h1>
              <p className="works-intro-description" style={{ maxWidth: '48rem', marginTop: '1.25rem' }}>
                GenLab is a full-cycle software development company and agentic AI platform based in Nagercoil, Kanyakumari district, Tamil Nadu and Bengaluru, Karnataka. We engineer custom enterprise software, GST billing &amp; POS systems, mobile apps, web applications, and autonomous AI agents for ambitious businesses and startups.
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
                <p className="metric-desc">Of experience delivering business software, billing systems &amp; AI</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">100+</span>
                  <span className="metric-unit">Projects</span>
                </div>
                <p className="metric-desc">Shipped for regional businesses, retail shops, and global startups</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">Full</span>
                  <span className="metric-unit">Stack</span>
                </div>
                <p className="metric-desc">Custom software, billing/POS, mobile apps, and agentic AI</p>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-value">Dual</span>
                  <span className="metric-unit">Hubs</span>
                </div>
                <p className="metric-desc">Rooted in Nagercoil, scaling across Bengaluru &amp; India</p>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section aria-labelledby="services-heading" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
            <span className="works-tag">Complete Development Services</span>
            <h2 id="services-heading" className="works-title" style={{ marginTop: '0.5rem' }}>
              Custom Software Development, Billing Systems &amp; AI in Nagercoil
            </h2>
            <p className="works-subtitle" style={{ marginTop: '0.5rem', maxWidth: '44rem' }}>
              From retail billing software and enterprise ERPs to high-speed web apps and autonomous AI agents, we build tailored software solutions that drive real business growth.
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
              We build software for businesses across Nagercoil and Kanyakumari district, while also partnering with companies across Tamil Nadu, Bengaluru, and internationally.
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
              Frequently Asked Questions About Software Development in Nagercoil
            </h2>
            <p className="works-subtitle" style={{ marginTop: '0.5rem', maxWidth: '44rem' }}>
              Everything you need to know about partnering with GenLab for custom software development, billing solutions, and AI systems.
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
                    href="https://wa.me/919994535120?text=Hi%20GenLab%2C%20I%20am%20looking%20for%20software%20development%20and%20billing%20solutions%20in%20Nagercoil."
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Need software or a billing system for your business?</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.8 }}>
                  Whether you need custom GST billing software, an enterprise ERP, mobile apps, or autonomous AI systems, our Nagercoil engineering team is ready to build it.
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
                  <span>Request a Free Consultation</span>
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
