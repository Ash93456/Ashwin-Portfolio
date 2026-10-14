'use client';

import { useState, useEffect, useRef } from 'react';

interface TestStep {
  text: string;
  className?: string;
  isHtml?: boolean;
}

const defaultSteps: TestStep[] = [
  { text: '$ npx playwright test --project=chromium --headed', className: 'text-muted' },
  { text: '⚡ Initializing Playwright test runner v1.42.0...', className: 'text-cyan' },
  { text: '⚡ Spawning 5 parallel test worker nodes...', className: 'text-cyan' },
  {
    text: '<span class="badge-pass">PASS</span> tests/auth/login-jwt-validation.spec.ts <span class="test-time">(312ms)</span>',
    isHtml: true,
  },
  {
    text: '<span class="badge-pass">PASS</span> tests/api/property-leasing-endpoints.spec.ts <span class="test-time">(540ms)</span>',
    isHtml: true,
  },
  {
    text: '<span class="badge-pass">PASS</span> tests/e2e/airbnb-core-booking-workflow.spec.ts <span class="test-time">(1.18s)</span>',
    isHtml: true,
  },
  {
    text: '<span class="badge-pass">PASS</span> tests/regression/ats-candidate-pipeline.spec.ts <span class="test-time">(720ms)</span>',
    isHtml: true,
  },
  {
    text: '<span class="badge-pass">PASS</span> tests/mobile/flutter-admission-bot-intent.spec.ts <span class="test-time">(410ms)</span>',
    isHtml: true,
  },
  {
    text: '<span class="badge-pass">PASS</span> tests/security/sql-injection-and-rate-limit.spec.ts <span class="test-time">(290ms)</span>',
    isHtml: true,
  },
  { text: '✔ 52 passed (100%) | 0 flaky | 0 failed in 3.46s', className: 'text-green font-bold' },
  { text: '⚡ AI Test Optimizer: Coverage 99.4% | Zero regressions detected', className: 'text-gold' },
];

export default function TerminalDemo() {
  const [displayedSteps, setDisplayedSteps] = useState<TestStep[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setDisplayedSteps([]);

    defaultSteps.forEach((step, index) => {
      setTimeout(() => {
        setDisplayedSteps((prev) => [...prev, step]);

        if (index === defaultSteps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 260);
    });
  };

  useEffect(() => {
    // Initial run on mount
    runSimulation();
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [displayedSteps]);

  return (
    <div className="hero-terminal" id="terminal-demo">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">
          <i className="fas fa-terminal"></i> playwright-test-runner.sh — ashwin@sdet-box
        </div>
        <button
          className="run-test-btn"
          id="run-test-suite-btn"
          onClick={runSimulation}
          disabled={isRunning}
          title="Re-run interactive test demo"
        >
          <i className={`fas fa-redo-alt ${isRunning ? 'fa-spin' : ''}`}></i>{' '}
          {isRunning ? 'Running...' : 'Run Suite'}
        </button>
      </div>

      <div className="terminal-body" ref={terminalBodyRef} id="terminal-output">
        {displayedSteps.map((step, idx) => (
          <div key={idx} className={`terminal-line ${step.className || ''}`}>
            {step.isHtml ? (
              <span dangerouslySetInnerHTML={{ __html: step.text }} />
            ) : (
              step.text
            )}
          </div>
        ))}
      </div>

      <div className="terminal-footer">
        <span className="pill-mini">
          <i className="fas fa-shield-alt"></i> Zero Flakiness
        </span>
        <span className="pill-mini">
          <i className="fas fa-bolt"></i> CI/CD Ready
        </span>
        <span className="pill-mini">
          <i className="fas fa-robot"></i> AI-Assisted
        </span>
      </div>
    </div>
  );
}
