export default function Certifications() {
  return (
    <section className="section edu-cert-section" id="certifications">
      <div className="container">
        <div className="section-badge">Credentials</div>
        <h2 className="section-title">Education &amp; Professional Certifications</h2>
        <p className="section-subtitle">
          Verified qualifications reflecting formal computer science fundamentals and
          continuous learning.
        </p>

        <div className="edu-cert-grid">
          {/* Education Column */}
          <div className="column-card glass-card">
            <div className="column-header">
              <div className="col-icon icon-cyan">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
            </div>

            <div className="edu-item">
              <div className="edu-year">2022 – 2025</div>
              <h4 className="edu-degree">Bachelor of Computer Applications (BCA)</h4>
              <div className="edu-school">Dr. N.G.P Arts and Science College</div>
              <div className="edu-score">
                <span className="badge-accent">75.0% Aggregate</span>
              </div>
              <p className="edu-details">
                Core coursework: Software Engineering, Database Management Systems (SQL),
                Object-Oriented Programming (Java), Data Structures, Computer Networks.
              </p>
            </div>

            <div className="edu-divider"></div>

            <div className="edu-item">
              <div className="edu-year">2021 – 2022</div>
              <h4 className="edu-degree">Higher Secondary Certificate (HSC)</h4>
              <div className="edu-school">
                Kongu Vellalar Matriculation Higher Secondary School
              </div>
              <div className="edu-score">
                <span className="badge-accent">85.0% Aggregate</span>
              </div>
              <p className="edu-details">
                Mathematics, Computer Science, and Physical Sciences.
              </p>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="column-card glass-card">
            <div className="column-header">
              <div className="col-icon icon-purple">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Certifications</h3>
            </div>

            <div className="cert-item">
              <div className="cert-icon-badge">
                <i className="fas fa-check-double"></i>
              </div>
              <div className="cert-details">
                <h4>Manual Testing + Agile and Jira Tool</h4>
                <span className="cert-issuer">Udemy • Issued Feb 2025</span>
                <p>
                  Mastered end-to-end SDLC, STLC, defect logging in Jira, agile sprint
                  ceremonies, boundary value analysis, and equivalence partitioning.
                </p>
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-icon-badge">
                <i className="fab fa-java"></i>
              </div>
              <div className="cert-details">
                <h4>Java Intermediator Certification Program</h4>
                <span className="cert-issuer">Infosys Springboard • Issued Jun 2024</span>
                <p>
                  Advanced Java programming, collections framework, exception handling,
                  multi-threading, and object-oriented test design patterns.
                </p>
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-icon-badge">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="cert-details">
                <h4>Cloud Computing Certification Program</h4>
                <span className="cert-issuer">NPTEL • Issued Apr 2024</span>
                <p>
                  Cloud infrastructure, distributed systems, virtualization, microservices
                  architecture, and cloud reliability concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
