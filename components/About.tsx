export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <div className="section-badge">Engineering Mindset</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Full-Stack Precision Meets Relentless QA
            </h2>
            <p className="about-text">
              I am a <strong>QA Automation Engineer</strong> with a strong software engineering
              foundation. Unlike traditional testers, I write test frameworks with the eyes of a
              developer and test applications with the scrutiny of an end-user.
            </p>
            <p className="about-text">
              My experience spans building full-stack applications with{' '}
              <strong>Spring Boot, Node.js, SQL, and Flutter</strong>, which arms me with deep
              root-cause analysis skills. I don&apos;t just log defects—I dive into network calls,
              database queries, and stack traces to isolate why they broke.
            </p>
            <div className="highlight-boxes">
              <div className="highlight-box">
                <i className="fas fa-code-branch"></i>
                <div>
                  <h4>Shift-Left Automation</h4>
                  <p>
                    Integrating Playwright & Postman API tests early into sprint cycles to squash
                    bugs before staging.
                  </p>
                </div>
              </div>
              <div className="highlight-box">
                <i className="fas fa-brain"></i>
                <div>
                  <h4>AI-Powered Productivity</h4>
                  <p>
                    Leveraging Conversational AI (Dialogflow) and LLM test-generation to
                    accelerate script creation by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info-panel">
            <div className="info-card">
              <h3>Quick Profile</h3>
              <ul className="info-list">
                <li>
                  <span>Name:</span> <strong>Ashwin K</strong>
                </li>
                <li>
                  <span>Primary Role:</span>{' '}
                  <strong>QA Automation Engineer / SDET</strong>
                </li>
                <li>
                  <span>Core Stack:</span>{' '}
                  <strong>Playwright, TypeScript, Selenium, Java</strong>
                </li>
                <li>
                  <span>API Tooling:</span>{' '}
                  <strong>Postman, REST Assured, Newman</strong>
                </li>
                <li>
                  <span>Location:</span> <strong>Tamil Nadu, India</strong>
                </li>
                <li>
                  <span>Education:</span>{' '}
                  <strong>BCA (75%) — Dr. N.G.P Arts & Science</strong>
                </li>
                <li>
                  <span>Higher Secondary:</span>{' '}
                  <strong>HSC (85%) — Kongu Vellalar MHSS</strong>
                </li>
                <li>
                  <span>Status:</span>{' '}
                  <span className="badge-success">Ready for Immediate Onboarding</span>
                </li>
              </ul>
              <div className="info-cta">
                <a href="#contact" className="btn btn-primary btn-block">
                  <i className="fas fa-handshake"></i> Let&apos;s Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
