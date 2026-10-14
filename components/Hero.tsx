'use client';

import { useState, useEffect } from 'react';
import TerminalDemo from './TerminalDemo';

const roles = [
  'QA Automation Engineer',
  'SDET & Test Architect',
  'Playwright & API Specialist',
  'Full-Stack Developer',
  'Hackathon Winner',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timeout = setTimeout(() => {}, 300);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedText = roles[roleIndex].substring(0, charIndex);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Open to QA Automation & SDET Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Ashwin K</span>
            <br />
            <span className="typing-text">{displayedText}</span>
            <span className="cursor">|</span>
          </h1>

          <p className="hero-description">
            QA Automation Engineer & Full-Stack Developer bridging bulletproof quality
            assurance with engineering excellence. Specialized in building end-to-end
            test automation suites with <strong>Playwright (TypeScript)</strong>,{' '}
            <strong>Selenium</strong>, and robust <strong>REST API validations</strong>{' '}
            backed by a full-stack engineering foundation.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Get in Touch
            </a>
            <a href="#terminal-demo" className="btn btn-outline">
              <i className="fas fa-play"></i> Run Live Test Suite
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-glass"
              title="Download PDF Resume"
            >
              <i className="fas fa-file-download"></i> Resume PDF
            </a>
          </div>

          <div className="hero-contact-quick">
            <a href="mailto:kashwin454@yahoo.com" className="quick-link">
              <i className="fas fa-envelope"></i> kashwin454@yahoo.com
            </a>
            <a href="tel:+916383799815" className="quick-link">
              <i className="fas fa-phone"></i> +91 6383799815
            </a>
            <a
              href="https://linkedin.com/in/ashwin-k-221ca009"
              target="_blank"
              rel="noreferrer"
              className="quick-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn Profile
            </a>
          </div>
        </div>

        <TerminalDemo />
      </div>
    </section>
  );
}
