import React, { useState, useEffect } from 'react';

export default function Navigation({ currentView = 'portfolio', onNavigate }) {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (!el) {
        if (targetId === 'launchpad') {
          window.open('https://genlab.cc/#launchpad', '_blank');
        }
        return;
      }
      if (window.location.hash !== `#${targetId}`) {
        window.history.pushState(null, '', `#${targetId}`);
      }
      el.scrollIntoView({ behavior: 'smooth' });
    };

    if (currentView !== 'portfolio' && onNavigate) {
      onNavigate('portfolio');
      setTimeout(scrollToTarget, 100);
      return;
    }

    scrollToTarget();
  };

  return (
    <nav
      className={`liquid-navbar ${isScrolled || currentView === 'team' ? 'is-dock' : 'is-hero'}`}
      aria-label="Main Navigation"
    >
      {/* Specular Liquid Gloss Reflection */}
      <div className="liquid-gloss" aria-hidden="true" />

      {/* 1. Theme Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="nav-theme-btn"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? (
          <img src="/assets/icon-sun.svg" alt="" className="nav-theme-icon" />
        ) : (
          <img src="/assets/icon-moon.svg" alt="" className="nav-theme-icon" />
        )}
      </button>

      {/* 2. Home */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className={`nav-item-link ${currentView === 'portfolio' && !isScrolled ? 'is-active' : ''}`}
      >
        <span>Home</span>
        {currentView === 'portfolio' && !isScrolled && (
          <span className="nav-active-dot" aria-hidden="true" />
        )}
      </a>

      {/* 3. Product */}
      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          onNavigate?.('work');
        }}
        className={`nav-item-link ${currentView === 'work' ? 'is-active' : ''}`}
      >
        <span>Product</span>
        {currentView === 'work' && (
          <span className="nav-active-dot" aria-hidden="true" />
        )}
      </a>

      {/* 4. Shabdham AI */}
      <a
        href="https://fot-shabdham.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item-link"
      >
        <span>Shabdham AI</span>
      </a>

      {/* 5. Launchpad */}
      <a
        href="https://genlab.cc/#launchpad"
        onClick={(e) => handleNavClick(e, 'launchpad')}
        className="nav-item-link"
      >
        <span>Launchpad</span>
      </a>

      {/* 5. Team */}
      <button
        type="button"
        onClick={() => onNavigate && onNavigate('team')}
        className={`nav-item-link nav-btn-link ${currentView === 'team' ? 'is-active' : ''}`}
      >
        <span>Team</span>
        {currentView === 'team' && <span className="nav-active-dot" aria-hidden="true" />}
      </button>

      {/* 6. Let's talk */}
      <a
        href="#footer"
        onClick={(e) => handleNavClick(e, 'footer')}
        className="nav-item-link nav-talk-link"
      >
        <span>Let’s talk</span>
        <img src="/assets/icon-arrow-outward.svg" alt="" className="nav-arrow-icon" />
      </a>
    </nav>
  );
}
