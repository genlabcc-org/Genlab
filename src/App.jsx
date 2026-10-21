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

const TeamPage = React.lazy(() => import('./components/TeamPage'));
const LaunchpadPage = React.lazy(() => import('./pages/LaunchPad/launch'));
const UpskillingPage = React.lazy(() => import('./pages/Upskilling/Upskilling'));

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (window.location.hash === '#team') return 'team';
    if (window.location.hash === '#work') return 'work';
    if (window.location.hash === '#launchpad') return 'launchpad';
    if (window.location.hash === '#upskilling') return 'upskilling';
    return 'portfolio';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#team') {
        setCurrentView('team');
      } else if (window.location.hash === '#work') {
        setCurrentView('work');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (window.location.hash === '#launchpad') {
        setCurrentView('launchpad');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (window.location.hash === '#upskilling') {
        setCurrentView('upskilling');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('portfolio');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    const hash = view === 'portfolio' ? '' : `#${view}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="portfolio-app">
      {/* Interactive Glowing Cursor */}
      <CustomCursor />

      {currentView === 'team' ? (
        <>
          <React.Suspense
            fallback={
              <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
              </div>
            }
          >
            <TeamPage onBackToPortfolio={() => navigateTo('portfolio')} />
          </React.Suspense>
          <Navigation currentView={currentView} onNavigate={navigateTo} />
        </>
      ) : currentView === 'launchpad' ? (
        <>
          <Navigation currentView={currentView} onNavigate={navigateTo} />
          <main className="launchpad-view-page" style={{ minHeight: '100vh', background: '#010101', paddingTop: '1.5rem' }}>
            <React.Suspense
              fallback={
                <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
                </div>
              }
            >
              <LaunchpadPage onNavigate={navigateTo} />
            </React.Suspense>
          </main>
          <Footer />
        </>
      ) : currentView === 'upskilling' ? (
        <>
          <Navigation currentView={currentView} onNavigate={navigateTo} />
          <main className="upskilling-view-page" style={{ minHeight: '100vh', background: '#0b0b0b', paddingTop: '1.5rem' }}>
            <React.Suspense
              fallback={
                <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
                </div>
              }
            >
              <UpskillingPage onNavigate={navigateTo} />
            </React.Suspense>
          </main>
          <Footer />
        </>
      ) : (
        <>
          {/* Main Navigation Bar */}
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
