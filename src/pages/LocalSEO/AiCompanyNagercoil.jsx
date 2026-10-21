import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function AiCompanyNagercoil({ onNavigate }) {
  return (
    <div className="portfolio-app">
      <Navigation currentView="local-nagercoil" onNavigate={onNavigate} />

      <main className="local-seo-page" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
        {/* Intro Header Section */}
        <section className="works-section has-intro" style={{ minHeight: 'auto', paddingBottom: '3rem' }}>
          <div className="works-intro" style={{ minHeight: 'auto', paddingTop: '4rem', paddingBottom: '3rem' }}>
            <img
              className="works-intro-mark"
              src="/genlab/Genlab.png"
              alt="GenLab Logo"
            />
            <div className="works-intro-content">
              <h1 className="works-intro-title">
                AI Company in <em>Nagercoil</em>
                <br />
                <em>&amp; Kanyakumari</em> <span aria-hidden="true">→</span>
              </h1>
              <p className="works-intro-description">
                GenLab is an agentic AI platform built by Gen Z that helps businesses with AI-powered product research and branding.
              </p>
            </div>
          </div>
        </section>

        {/* Local Highlights & Core Metrics */}
        <section className="metrics-section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-value">6+</span>
                <span className="metric-unit">Years</span>
              </div>
              <p className="metric-desc">Of experience in AI &amp; digital solutions</p>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-value">100+</span>
                <span className="metric-unit">Projects</span>
              </div>
              <p className="metric-desc">Delivered for startups and global brands</p>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-value">AI</span>
                <span className="metric-unit">Native</span>
              </div>
              <p className="metric-desc">Agentic workflows &amp; autonomous systems</p>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-value">Dual</span>
                <span className="metric-unit">Hubs</span>
              </div>
              <p className="metric-desc">Rooted in Nagercoil, scaling across Bengaluru</p>
            </div>
          </div>
        </section>

        {/* Local Services & Regional Presence */}
        <section className="works-section" style={{ minHeight: 'auto', paddingTop: '0', paddingBottom: '4rem' }}>
          <div className="works-inner" style={{ maxWidth: '86rem', margin: '0 auto', padding: '0 2rem' }}>
            <div className="works-header">
              <span className="works-tag">Local Presence · Nagercoil &amp; Bengaluru</span>
              <div className="works-title-row">
                <h2 className="works-title">Engineering Intelligence from Kanyakumari</h2>
              </div>
              <p className="works-subtitle">Autonomous AI Platforms, Modern Web Applications &amp; Brand Systems</p>
              <p className="works-description-text" style={{ maxWidth: '48rem', marginTop: '1rem', lineHeight: '1.7' }}>
                GenLab was founded to bring top-tier software and agentic artificial intelligence engineering to southern Tamil Nadu. With engineering hubs in Nagercoil (Kanyakumari district, Tamil Nadu) and Bengaluru (Karnataka), our Gen Z team combines deep AI capabilities with disciplined software craft.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div className="metric-card" style={{ minHeight: 'auto', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '500', marginBottom: '0.75rem', color: 'inherit' }}>Agentic AI &amp; Research</h3>
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Custom autonomous AI agents, research synthesis engines, and LLM integrations that automate real commercial workflows.
                </p>
              </div>

              <div className="metric-card" style={{ minHeight: 'auto', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '500', marginBottom: '0.75rem', color: 'inherit' }}>Product Engineering</h3>
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Full-stack web applications, mobile platforms, and scalable cloud systems built with modern, battle-tested technologies.
                </p>
              </div>

              <div className="metric-card" style={{ minHeight: 'auto', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '500', marginBottom: '0.75rem', color: 'inherit' }}>Digital Branding</h3>
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.6' }}>
                  High-conversion digital storefronts, design systems, and identity design built for brands competing regionally and globally.
                </p>
              </div>
            </div>

            {/* Direct Contact Callout */}
            <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '400', color: 'inherit' }}>Ready to build in Nagercoil?</h3>
              <p style={{ opacity: 0.75, fontSize: '1rem', maxWidth: '42rem' }}>
                Visit our office at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001 or contact our engineering team directly to discuss custom AI systems, web development, or product research.
              </p>
              <div className="cta-actions" style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://wa.me/919994535120?text=Hi%20GenLab%2C%20I%20am%20looking%20for%20an%20AI%20and%20software%20company%20in%20Nagercoil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-pill"
                >
                  <span>Connect with Nagercoil Team (+91 9994535120)</span>
                </a>
                <a
                  href="https://wa.me/919994535120?text=Hi%20GenLab%2C%20I%20am%20looking%20for%20an%20AI%20and%20software%20company%20in%20Nagercoil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-circle"
                  aria-label="Connect with GenLab on WhatsApp"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cta-arrow-icon"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
