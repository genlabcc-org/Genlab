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

  return (
    <nav
      className={`liquid-navbar ${isScrolled ? 'is-dock' : 'is-hero'}`}
      aria-label="Main Navigation"
    >
      {/* Specular Liquid Gloss Reflection */}
      <div className="liquid-gloss" aria-hidden="true" />

      {/* Far Left: Sun/Moon Theme Toggle */}
      <div className="nav-col-left">
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
      </div>

      {/* Center Links */}
      <div className="nav-col-center">
        <a href="#work" className="nav-item-link">Work</a>
        <a href="#services" className="nav-item-link">Services+</a>
        <a href="#pricing" className="nav-item-link">Pricing</a>
        <a href="#about" className="nav-item-link">About</a>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('team')}
          className="nav-item-link nav-btn-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
        >
          Team ✦
        </button>
      </div>

      {/* Far Right: Let's talk */}
      <div className="nav-col-right">
        <a href="#talk" className="nav-item-link nav-talk-link">
          <span>Let’s talk</span>
          <img src="/assets/icon-arrow-outward.svg" alt="" className="nav-arrow-icon" />
        </a>
      </div>
    </nav>
  );
}
