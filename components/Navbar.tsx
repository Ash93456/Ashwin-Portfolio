'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>Ashwin
          <span className="logo-accent">.QA</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#metrics"
              className={`nav-link ${activeSection === 'metrics' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Impact & Stats
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#hackathons"
              className={`nav-link ${activeSection === 'hackathons' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Hackathons
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-btn" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>

        <button
          className="mobile-toggle"
          id="mobile-toggle"
          aria-label="Toggle Navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </nav>
  );
}
