'use client';

import { useState, useEffect, useRef } from 'react';

interface MetricItem {
  icon: string;
  target: number;
  suffix: string;
  label: string;
  desc: string;
}

const metrics: MetricItem[] = [
  {
    icon: 'fa-vial-circle-check',
    target: 4250,
    suffix: '+',
    label: 'Automated & Manual Tests Executed',
    desc: 'Cross-platform validation across Web, Mobile (Flutter), and REST APIs with zero missed regression.',
  },
  {
    icon: 'fa-bug-slash',
    target: 184,
    suffix: '+',
    label: 'Critical & Edge Defects Caught',
    desc: 'Identified pre-production in JIRA/TestRail for Airbnb features & enterprise Property Management.',
  },
  {
    icon: 'fa-chart-line',
    target: 99,
    suffix: '.4%',
    label: 'Sprint Automation Pass Rate',
    desc: 'Maintained in agile CI/CD pipelines with self-healing selectors and optimized Playwright suites.',
  },
  {
    icon: 'fa-trophy',
    target: 3,
    suffix: 'x',
    label: 'Hackathons Won / Finalist',
    desc: 'Podium finishes in automated testing, AI chatbot development, and cloud-native solutions.',
  },
];

export default function Metrics() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          metrics.forEach((m, idx) => {
            let start = 0;
            const step = Math.max(1, Math.ceil(m.target / 45));
            const timer = setInterval(() => {
              start += step;
              if (start >= m.target) {
                start = m.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = start;
                return next;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section metrics-section" id="metrics" ref={sectionRef}>
      <div className="container">
        <div className="section-badge">Quality Analytics</div>
        <h2 className="section-title">Tested, Scaled & Proven at Numbers</h2>
        <p className="section-subtitle">
          Real-world impact across automated test coverage, hackathons, and
          mission-critical production pipelines.
        </p>

        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-icon">
                <i className={`fas ${m.icon}`}></i>
              </div>
              <div className="metric-number">
                {counts[idx].toLocaleString()}
              </div>
              <div className="metric-suffix">{m.suffix}</div>
              <div className="metric-label">{m.label}</div>
              <p className="metric-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
