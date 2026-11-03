import React, { useState, useEffect } from 'react';
import TargetCursor from './components/TargetCursor';
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
const TrackSection = React.lazy(() => import('./components/Courses/Tracksection'));
const AiCompanyNagercoil = React.lazy(() => import('./pages/LocalSEO/AiCompanyNagercoil'));

const ROUTE_META = {
  portfolio: {
    title: 'GenLab – AI & Software Development Company in Nagercoil, Kanyakumari',
    description: 'GenLab is a premier software development and agentic AI platform in Nagercoil, Kanyakumari and Bengaluru. We build custom software, billing & POS systems, web & mobile apps, and autonomous AI agents.',
    canonical: 'https://genlab.cc/',
  },
  'local-nagercoil': {
    title: 'Software Development & AI Company in Nagercoil, Kanyakumari | GenLab',
    description: 'Looking for a software development company or billing software in Nagercoil, Kanyakumari? GenLab delivers custom enterprise software, GST billing & POS systems, web & mobile apps, and agentic AI.',
    canonical: 'https://genlab.cc/ai-company-nagercoil',
  },
  work: {
    title: 'Our Work & Case Studies | GenLab – AI & Software Agency',
    description: 'Explore client projects, case studies, and digital products engineered by GenLab. From autonomous agentic workflows to enterprise platforms and creative branding.',
    canonical: 'https://genlab.cc/work',
  },
  launchpad: {
    title: 'GenLab Launchpad – AI Career Accelerator & Student Incubation',
    description: 'GenLab Launchpad connects ambitious learners with hands-on AI training, industry mentorship, hackathons, and career placement across premier colleges in India.',
    canonical: 'https://genlab.cc/launchpad',
  },
  upskilling: {
    title: 'GenLab Upskilling – Industry-Grade AI & Developer Programs',
    description: 'Learn modern engineering, machine learning, and AI agent architectures through practical, project-first courses designed by industry practitioners.',
    canonical: 'https://genlab.cc/upskilling',
  },
  team: {
    title: 'Meet the Team | GenLab – Gen Z AI Builders & Engineers',
    description: 'Meet the team behind GenLab. Gen Z software engineers, AI developers, and designers building the future of autonomous agentic platforms from India.',
    canonical: 'https://genlab.cc/team',
  },
  tracks: {
    title: 'Engineering Tracks & Programs | GenLab Upskilling',
    description: 'Explore hands-on curriculum tracks in Agentic AI, Full-Stack Development, Cloud Systems, and DevOps at GenLab.',
    canonical: 'https://genlab.cc/tracks',
  },
};

function resolveCurrentView() {
  if (typeof window === 'undefined') return 'portfolio';
  const path = window.location.pathname.replace(/\/$/, '');
  const hash = window.location.hash;

  if (path === '/ai-company-nagercoil' || hash === '#ai-company-nagercoil') return 'local-nagercoil';
  if (path === '/team' || hash === '#team') return 'team';
  if (path === '/work' || hash === '#work') return 'work';
  if (path === '/launchpad' || hash === '#launchpad') return 'launchpad';
  if (path === '/upskilling' || hash === '#upskilling') return 'upskilling';
  if (path === '/tracks' || hash === '#tracks') return 'tracks';
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

  useEffect(() => {
    const meta = ROUTE_META[currentView] || ROUTE_META.portfolio;
    if (meta) {
      document.title = meta.title;

      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', meta.description);

      const canonEl = document.querySelector('link[rel="canonical"]');
      if (canonEl) canonEl.setAttribute('href', meta.canonical);

      const ogUrlEl = document.querySelector('meta[property="og:url"]');
      if (ogUrlEl) ogUrlEl.setAttribute('content', meta.canonical);

      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);

      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', meta.description);

      const twUrlEl = document.querySelector('meta[name="twitter:url"]');
      if (twUrlEl) twUrlEl.setAttribute('content', meta.canonical);

      const twTitleEl = document.querySelector('meta[name="twitter:title"]');
      if (twTitleEl) twTitleEl.setAttribute('content', meta.title);

      const twDescEl = document.querySelector('meta[name="twitter:description"]');
      if (twDescEl) twDescEl.setAttribute('content', meta.description);
    }
  }, [currentView]);

  const navigateTo = (view, state) => {
    setCurrentView(view);
    const path = view === 'portfolio' ? '/' : `/${view}`;
    const hash = view === 'portfolio' ? '' : `#${view}`;

    if (window.location.pathname !== path && window.location.hash !== hash) {
      window.history.pushState(state ?? null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="portfolio-app">
      {/* Target Cursor with #c2e600 theme */}
      <TargetCursor
        cursorColor="#c2e600"
        cursorColorOnTarget="#c2e600"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
      />

      {currentView === 'team' ? (
        <>
          <Navigation currentView={currentView} onNavigate={navigateTo} />
          <main className="team-view-page" style={{ minHeight: '100vh' }}>
            <React.Suspense
              fallback={
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
                </div>
              }
            >
              <TeamPage onBackToPortfolio={() => navigateTo('portfolio')} />
            </React.Suspense>
          </main>
          <Footer onNavigate={navigateTo} />
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
          <Footer onNavigate={navigateTo} />
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
          <Footer onNavigate={navigateTo} />
        </>
      ) : currentView === 'tracks' ? (
        <>
          <Navigation currentView={currentView} onNavigate={navigateTo} />
          <main className="tracks-view-page" style={{ minHeight: '100vh', background: '#000000', paddingTop: '1.5rem' }}>
            <React.Suspense
              fallback={
                <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="nav-active-dot" style={{ width: '1.25rem', height: '1.25rem', background: '#c2e600' }} />
                </div>
              }
            >
              <TrackSection onNavigate={navigateTo} />
            </React.Suspense>
          </main>
          <Footer onNavigate={navigateTo} />
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
              <WorksSection onNavigate={navigateTo} />
            </main>
          ) : (
            <main>
              <Hero />
              <AboutSection />
              <ShowreelSection />
              <MetricsSection />
              <ServicesSection />
              <WorksSection showIntro={false} showFilterNav={false} limit={3} onNavigate={navigateTo} />
              <WorksCtaSection />
              <TestimonialsSection />
              <QuoteSection />
              <PartnersSection />
            </main>
          )}

          {/* Footer */}
          <Footer onNavigate={navigateTo} />
        </>
      )}
    </div>
  );
}
