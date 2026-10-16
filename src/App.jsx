import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ShowreelSection from './components/ShowreelSection';
import MetricsSection from './components/MetricsSection';
import ServicesSection from './components/ServicesSection';
import WorksSection from './components/WorksSection';
import WorksCtaSection from './components/WorksCtaSection';
import TestimonialsSection from './components/TestimonialsSection';
import QuoteSection from './components/QuoteSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import TeamPage from './components/TeamPage';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#team' ? 'team' : 'portfolio';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#team') {
        setCurrentView('team');
      } else if (window.location.hash === '' || window.location.hash === '#work') {
        setCurrentView('portfolio');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'team') {
      window.location.hash = '#team';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Interactive Glowing Cursor */}
      <CustomCursor />

      {currentView === 'team' ? (
        <TeamPage onBackToPortfolio={() => navigateTo('portfolio')} />
      ) : (
        <>
          {/* iPhone Liquid Glass Morphism Navigation Bar */}
          <Navigation currentView={currentView} onNavigate={navigateTo} />

          {/* Main Full-Experience Sections */}
          <main>
            <Hero />
            <AboutSection />
            <ShowreelSection />
            <MetricsSection />
            <ServicesSection />
            <WorksSection />
            <WorksCtaSection />
            <TestimonialsSection />
            <QuoteSection />
            <PartnersSection />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
