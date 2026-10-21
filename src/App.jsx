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
const AiCompanyNagercoil = React.lazy(() => import('./pages/LocalSEO/AiCompanyNagercoil'));

function resolveCurrentView() {
  if (typeof window === 'undefined') return 'portfolio';
  const path = window.location.pathname.replace(/\/$/, '');
  const hash = window.location.hash;

  if (path === '/ai-company-nagercoil' || hash === '#ai-company-nagercoil') return 'local-nagercoil';
  if (path === '/team' || hash === '#team') return 'team';
  if (path === '/work' || hash === '#work') return 'work';
  if (path === '/launchpad' || hash === '#launchpad') return 'launchpad';
  if (path === '/upskilling' || hash === '#upskilling') return 'upskilling';
  return 'portfolio';
}

export default function App() {
  const [currentView, setCurrentView] = useState(resolveCurrentView);

  useEffect(() => {
    const handleLocationChange = () => {
      const nextView = resolveCurrentView();
      setCurrentView(nextView);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    const path = view === 'portfolio' ? '/' : `/${view}`;
    const hash = view === 'portfolio' ? '' : `#${view}`;

    if (window.location.pathname !== path && window.location.hash !== hash) {
      window.history.pushState(null, '', path);
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
      ) : currentView === 'local-nagercoil' ? (
        <React.Suspense
          fallback={
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
            </div>
          }
        >
          <AiCompanyNagercoil onNavigate={navigateTo} />
        </React.Suspense>
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
                <WorksSection showIntro={false} showFilterNav={false} />
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
