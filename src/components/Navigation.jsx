import React, { useState, useEffect, useRef } from 'react';
import GenLabLogo from './GenLabLogo';

const SECTION_LABELS = {
  home: 'Home',
  work: 'Product',
  shabdam: 'Shabdam AI',
  launchpad: 'Launchpad',
  upskilling: 'Upskilling',
  team: 'Team',
  event: 'Event',
  footer: 'Let’s talk',
};

export default function Navigation({ currentView = 'portfolio', onNavigate }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [launchpadDropdownOpen, setLaunchpadDropdownOpen] = useState(false);
  const [isDropdownPinned, setIsDropdownPinned] = useState(false);
  const [mobileLaunchpadOpen, setMobileLaunchpadOpen] = useState(false);

  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const [isEventDropdownPinned, setIsEventDropdownPinned] = useState(false);
  const [mobileEventOpen, setMobileEventOpen] = useState(false);

  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const eventDropdownRef = useRef(null);
  const eventHoverTimeoutRef = useRef(null);

  const [activeSection, setActiveSection] = useState(() => {
    if (currentView === 'team') return 'team';
    if (currentView === 'work') return 'work';
    if (currentView === 'launchpad') return 'launchpad';
    if (currentView === 'upskilling' || currentView === 'tracks') return 'upskilling';
    return 'home';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  // Sync active section based on current view & scroll position
  useEffect(() => {
    if (currentView === 'team') {
      setActiveSection('team');
      return;
    }
    if (currentView === 'work') {
      setActiveSection('work');
      return;
    }
    if (currentView === 'launchpad') {
      setActiveSection('launchpad');
      return;
    }
    if (currentView === 'upskilling' || currentView === 'tracks') {
      setActiveSection('upskilling');
      return;
    }

    const sectionIds = ['footer', 'work', 'home'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.38;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentView]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLaunchpadDropdownOpen(false);
        setIsDropdownPinned(false);
      }
      if (eventDropdownRef.current && !eventDropdownRef.current.contains(e.target)) {
        setEventDropdownOpen(false);
        setIsEventDropdownPinned(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu & dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setLaunchpadDropdownOpen(false);
        setIsDropdownPinned(false);
        setEventDropdownOpen(false);
        setIsEventDropdownPinned(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleDropdownTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const nextState = !launchpadDropdownOpen;
    setLaunchpadDropdownOpen(nextState);
    setIsDropdownPinned(nextState);
    if (nextState) {
      setEventDropdownOpen(false);
      setIsEventDropdownPinned(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setLaunchpadDropdownOpen(true);
    setEventDropdownOpen(false);
    setIsEventDropdownPinned(false);
  };

  const handleDropdownMouseLeave = () => {
    // If pinned open by explicit click, DO NOT close on mouse leave!
    if (isDropdownPinned) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setLaunchpadDropdownOpen(false);
    }, 350);
  };

  const handleEventDropdownTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (eventHoverTimeoutRef.current) clearTimeout(eventHoverTimeoutRef.current);
    const nextState = !eventDropdownOpen;
    setEventDropdownOpen(nextState);
    setIsEventDropdownPinned(nextState);
    if (nextState) {
      setLaunchpadDropdownOpen(false);
      setIsDropdownPinned(false);
    }
  };

  const handleEventDropdownMouseEnter = () => {
    if (eventHoverTimeoutRef.current) clearTimeout(eventHoverTimeoutRef.current);
    setEventDropdownOpen(true);
    setLaunchpadDropdownOpen(false);
    setIsDropdownPinned(false);
  };

  const handleEventDropdownMouseLeave = () => {
    if (isEventDropdownPinned) return;
    eventHoverTimeoutRef.current = setTimeout(() => {
      setEventDropdownOpen(false);
    }, 350);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setLaunchpadDropdownOpen(false);
    setIsDropdownPinned(false);
    setEventDropdownOpen(false);
    setIsEventDropdownPinned(false);

    if (targetId === 'shabdam') {
      window.open('https://fot-shabdham.vercel.app/', '_blank', 'noopener,noreferrer');
      return;
    }

    if (targetId === 'launchpad') {
      setActiveSection('launchpad');
      onNavigate?.('launchpad');
      return;
    }

    if (targetId === 'upskilling') {
      setActiveSection('upskilling');
      onNavigate?.('upskilling');
      return;
    }

    if (targetId === 'team') {
      setActiveSection('team');
      onNavigate?.('team');
      return;
    }

    if (targetId === 'work') {
      setActiveSection('work');
      if (onNavigate) {
        onNavigate('work');
      } else {
        const el = document.getElementById('work');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (targetId === 'footer') {
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        setActiveSection('footer');
        if (window.location.hash !== '#footer') {
          window.history.pushState(null, '', '#footer');
        }
        footerEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setActiveSection(targetId);

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        if (window.location.hash !== `#${targetId}`) {
          window.history.pushState(null, '', `#${targetId}`);
        }
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (currentView !== 'portfolio' && onNavigate) {
      onNavigate('portfolio');
      setTimeout(scrollToTarget, 100);
      return;
    }

    scrollToTarget();
  };

  const isLaunchpadActive = currentView === 'launchpad' || currentView === 'upskilling';

  return (
    <>
      {/* =========================================
          1. DESKTOP NAVIGATION (Hidden on <= 768px)
          ========================================= */}
      <nav
        className={`liquid-navbar desktop-only-navbar ${isScrolled || currentView !== 'portfolio' ? 'is-dock' : 'is-hero'
          }`}
        aria-label="Desktop Navigation"
      >
        <div className="liquid-gloss" aria-hidden="true" />

        {/* Theme Toggle Button */}
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

        {/* Home */}
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

        {/* Product */}
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

        {/* Shabdam AI */}
        <a
          href="https://shabdam.genlab.cc/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item-link"
        >
          <span>Shabdam AI</span>
        </a>

        {/* Launchpad Dropdown (Launchpad + Upskilling) */}
        <div
          className="nav-dropdown-wrap"
          ref={dropdownRef}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button
            type="button"
            onClick={handleDropdownTriggerClick}
            className={`nav-item-link nav-dropdown-btn ${isLaunchpadActive ? 'is-active' : ''}`}
            aria-expanded={launchpadDropdownOpen}
            aria-haspopup="true"
          >
            <span>Launchpad</span>
            <svg
              viewBox="0 0 10 6"
              width="9"
              height="6"
              className={`nav-dropdown-chevron ${launchpadDropdownOpen ? 'is-open' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 1L5 5L9 1" />
            </svg>
            {isLaunchpadActive && (
              <span className="nav-active-dot" aria-hidden="true" />
            )}
          </button>

          {/* Dropdown Menu Panel */}
          <div className={`nav-dropdown-panel ${launchpadDropdownOpen ? 'is-visible' : ''}`}>
            <div className="dropdown-panel-gloss" aria-hidden="true" />

            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'launchpad')}
              className={`nav-dropdown-item ${currentView === 'launchpad' ? 'is-active-item' : ''}`}
            >
              <div className="dropdown-item-meta">
                <span className="dropdown-item-name">Launchpad</span>
                <span className="dropdown-item-tagline">Hackathons, Bootcamps & Incubation</span>
              </div>
              {currentView === 'launchpad' && <span className="dropdown-item-dot" />}
            </button>

            <div className="nav-dropdown-sep" />

            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'upskilling')}
              className={`nav-dropdown-item ${currentView === 'upskilling' ? 'is-active-item' : ''}`}
            >
              <div className="dropdown-item-meta">
                <span className="dropdown-item-name">Upskilling</span>
                <span className="dropdown-item-tagline">Industry-ready 3 to 6-month programs</span>
              </div>
              {currentView === 'upskilling' && <span className="dropdown-item-dot" />}
            </button>
          </div>
        </div>

        {/* Team */}
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('team')}
          className={`nav-item-link nav-btn-link ${currentView === 'team' ? 'is-active' : ''}`}
        >
          <span>Team</span>
          {currentView === 'team' && <span className="nav-active-dot" aria-hidden="true" />}
        </button>

        {/* Event Dropdown */}
        <div
          className="nav-dropdown-wrap"
          ref={eventDropdownRef}
          onMouseEnter={handleEventDropdownMouseEnter}
          onMouseLeave={handleEventDropdownMouseLeave}
        >
          <button
            type="button"
            onClick={handleEventDropdownTriggerClick}
            className="nav-item-link nav-dropdown-btn"
            aria-expanded={eventDropdownOpen}
            aria-haspopup="true"
          >
            <span>Event</span>
            <svg
              viewBox="0 0 10 6"
              width="9"
              height="6"
              className={`nav-dropdown-chevron ${eventDropdownOpen ? 'is-open' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 1L5 5L9 1" />
            </svg>
          </button>

          {/* Event Dropdown Menu Panel */}
          <div className={`nav-dropdown-panel ${eventDropdownOpen ? 'is-visible' : ''}`}>
            <div className="dropdown-panel-gloss" aria-hidden="true" />

            <a
              href="https://fot.genlab.cc/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setEventDropdownOpen(false);
                setIsEventDropdownPinned(false);
              }}
              className="nav-dropdown-item"
              style={{ textDecoration: 'none' }}
            >
              <div className="dropdown-item-meta">
                <span className="dropdown-item-name">FOT</span>
                <span className="dropdown-item-tagline">Friends of Tech Event</span>
              </div>
            </a>
          </div>
        </div>

        {/* Let's talk */}
        <a
          href="#footer"
          onClick={(e) => handleNavClick(e, 'footer')}
          className="nav-item-link nav-talk-link"
        >
          <span>Let’s talk</span>
          <img src="/assets/icon-arrow-outward.svg" alt="" className="nav-arrow-icon" />
        </a>
      </nav>

      {/* =========================================
          2. MOBILE COLLAPSED BOTTOM PILL (Visible <= 768px)
          [ ☼   Home   = ]
          ========================================= */}
      <div className={`mobile-bottom-dock ${isMenuOpen ? 'is-hidden-by-overlay' : ''}`}>
        <div className="mobile-pill-bar">
          {/* Sun / Moon Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="mobile-pill-btn mobile-theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <img src="/assets/icon-sun.svg" alt="" className="mobile-icon-img" />
            ) : (
              <img src="/assets/icon-moon.svg" alt="" className="mobile-icon-img" />
            )}
          </button>

          {/* Current Active Section Label */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="mobile-pill-btn mobile-section-label"
            aria-label={`Current section: ${SECTION_LABELS[activeSection] || 'Home'}. Tap to open menu.`}
          >
            <span>{SECTION_LABELS[activeSection] || 'Home'}</span>
          </button>

          {/* Clean 2-Bar Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-pill-btn mobile-hamburger-btn"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </div>

      {/* =========================================
          3. MOBILE FULLSCREEN MENU OVERLAY
          - Pure black background
          - Geometric GenLab brand logo at top center
          - Active item in white bar with serif font & eye icon
          - Launchpad dropdown with Launchpad & Upskilling
          ========================================= */}
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Brand Logo & Close Action */}
          <div className="mobile-overlay-top">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="mobile-overlay-logo-link"
              aria-label="GenLab Home"
            >
              <GenLabLogo size={40} color="#ffffff" className="mobile-overlay-brand-logo" />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-overlay-close-btn"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links Stacking */}
          <nav className="mobile-overlay-nav" aria-label="Mobile Menu Links">
            {/* Home */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`mobile-overlay-link ${activeSection === 'home' && currentView === 'portfolio' ? 'is-active-row' : ''}`}
            >
              <span className="mobile-overlay-text">Home</span>
              {activeSection === 'home' && currentView === 'portfolio' && (
                <span className="mobile-overlay-eye-wrap" aria-hidden="true">
                  <img src="/assets/cta-eye.svg" alt="" className="mobile-overlay-eye-icon" />
                </span>
              )}
            </a>

            {/* Product */}
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className={`mobile-overlay-link ${currentView === 'work' ? 'is-active-row' : ''}`}
            >
              <span className="mobile-overlay-text">Product</span>
              {currentView === 'work' && (
                <span className="mobile-overlay-eye-wrap" aria-hidden="true">
                  <img src="/assets/cta-eye.svg" alt="" className="mobile-overlay-eye-icon" />
                </span>
              )}
            </a>

            {/* Shabdham AI */}
            <a
              href="https://fot-shabdham.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleNavClick(e, 'shabdham')}
              className="mobile-overlay-link"
            >
              <span className="mobile-overlay-text">Shabdham AI</span>
              <span className="mobile-overlay-arrow" aria-hidden="true">↗</span>
            </a>

            {/* Launchpad Expandable Dropdown Accordion */}
            <div className="mobile-accordion-group">
              <button
                type="button"
                onClick={() => setMobileLaunchpadOpen((prev) => !prev)}
                className={`mobile-overlay-link mobile-accordion-trigger ${isLaunchpadActive && !mobileLaunchpadOpen ? 'is-active-row' : ''
                  }`}
              >
                <span className="mobile-overlay-text">Launchpad</span>
                <span className={`mobile-accordion-chevron ${mobileLaunchpadOpen ? 'is-open' : ''}`}>
                  <svg viewBox="0 0 10 6" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </span>
              </button>

              {/* Sub-items: Launchpad & Upskilling */}
              <div className={`mobile-subnav-panel ${mobileLaunchpadOpen ? 'is-expanded' : ''}`}>
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'launchpad')}
                  className={`mobile-subnav-item ${currentView === 'launchpad' ? 'is-selected' : ''}`}
                >
                  <span className="mobile-sub-bullet">•</span>
                  <div className="mobile-sub-texts">
                    <span className="mobile-sub-title">Launchpad</span>
                    <span className="mobile-sub-desc">Hackathons, Bootcamps & Incubation</span>
                  </div>
                  {currentView === 'launchpad' && <span className="mobile-sub-check">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'upskilling')}
                  className={`mobile-subnav-item ${currentView === 'upskilling' ? 'is-selected' : ''}`}
                >
                  <span className="mobile-sub-bullet">•</span>
                  <div className="mobile-sub-texts">
                    <span className="mobile-sub-title">Upskilling Program</span>
                    <span className="mobile-sub-desc">Industry-ready 3 to 6-month programs</span>
                  </div>
                  {currentView === 'upskilling' && <span className="mobile-sub-check">✓</span>}
                </button>
              </div>
            </div>

            {/* Team */}
            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'team')}
              className={`mobile-overlay-link mobile-btn-link ${currentView === 'team' ? 'is-active-row' : ''}`}
            >
              <span className="mobile-overlay-text">Team</span>
              {currentView === 'team' && (
                <span className="mobile-overlay-eye-wrap" aria-hidden="true">
                  <img src="/assets/cta-eye.svg" alt="" className="mobile-overlay-eye-icon" />
                </span>
              )}
            </button>

            {/* Event Expandable Dropdown Accordion */}
            <div className="mobile-accordion-group">
              <button
                type="button"
                onClick={() => setMobileEventOpen((prev) => !prev)}
                className="mobile-overlay-link mobile-accordion-trigger"
              >
                <span className="mobile-overlay-text">Event</span>
                <span className={`mobile-accordion-chevron ${mobileEventOpen ? 'is-open' : ''}`}>
                  <svg viewBox="0 0 10 6" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </span>
              </button>

              {/* Sub-item: FOT */}
              <div className={`mobile-subnav-panel ${mobileEventOpen ? 'is-expanded' : ''}`}>
                <a
                  href="https://fot.genlab.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-subnav-item"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="mobile-sub-bullet">•</span>
                  <div className="mobile-sub-texts">
                    <span className="mobile-sub-title">FOT</span>
                    <span className="mobile-sub-desc">Friends of Tech Event</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Let's talk */}
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, 'footer')}
              className="mobile-overlay-link"
            >
              <span className="mobile-overlay-text">Let’s talk</span>
              <span className="mobile-overlay-arrow" aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
