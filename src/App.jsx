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
    if (window.location.hash === '#team') return 'team';
    if (window.location.hash === '#work') return 'work';
    return 'portfolio';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#team') {
        setCurrentView('team');
      } else if (window.location.hash === '#work') {
        setCurrentView('work');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (window.location.hash === '') {
        setCurrentView('portfolio');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    const hash = view === 'team' || view === 'work' ? `#${view}` : '';
    if (window.location.hash !== hash) window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="portfolio-app">
      {/* Interactive Glowing Cursor */}
      <CustomCursor />

      {currentView === 'team' ? (
        <>
          <TeamPage onBackToPortfolio={() => navigateTo('portfolio')} />
          {/* Bottom Floating Navigation Bar */}
          <Navigation currentView={currentView} onNavigate={navigateTo} />
        </>
      ) : (
        <>
          {/* iPhone Liquid Glass Morphism Navigation Bar */}
          <Navigation currentView={currentView} onNavigate={navigateTo} />

          {/* Main Full-Experience Sections */}
          {currentView === 'work' ? (
            <main className="work-page">
              <WorksSection />
            </main>
          ) : (
            <>
              <main>
                <Hero />
                <AboutSection />
                <ShowreelSection />
                <MetricsSection />
                <ServicesSection />
                <WorksSection showIntro={false} />
                <WorksCtaSection />
                <TestimonialsSection />
                <QuoteSection />
                <PartnersSection />
              </main>

              {/* Footer */}
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}
