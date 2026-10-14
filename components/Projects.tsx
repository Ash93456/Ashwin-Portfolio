export default function Projects() {
  const projects = [
    {
      type: 'AI & Mobile',
      typeIcon: 'fa-robot',
      title: 'College Admission Assistant (Chat Bot)',
      desc: 'An AI-based conversational chatbot designed to streamline the college admission workflow for incoming students. Provides multi-turn step-by-step guidance on course eligibility, fees, deadlines, and documentation.',
      highlights: [
        'Tested all conversation flows, intents, responses, and fallback handling for 100% functional accuracy.',
        'Cross-device responsive UI built with Flutter & Dart for seamless mobile performance.',
        'Integrated Google Dialogflow natural language understanding engine.',
      ],
      skills: [
        'Dialogflow',
        'Flutter',
        'Dart',
        'QA Usability Testing',
        'API Integration',
      ],
      link: 'https://github.com/ashwin-k',
      linkIcon: 'fab fa-github',
    },
    {
      type: 'QA Automation Framework',
      typeIcon: 'fa-vial',
      title: 'Property Management E2E Automation Suite',
      desc: 'A production-grade Playwright (TypeScript) test automation framework built for high-throughput property leasing and tenant portal platforms.',
      highlights: [
        'Implemented Page Object Model (POM) with self-healing locator strategies.',
        'Comprehensive Postman collection runner with 300+ assertions for tenant auth, payment, and lease contracts.',
        'Automated HTML report generation with trace viewer and video recordings on failure.',
      ],
      skills: [
        'Playwright',
        'TypeScript',
        'Postman',
        'HTML Reporter',
        'Spring Boot',
      ],
      link: '#terminal-demo',
      linkIcon: 'fas fa-play-circle',
    },
    {
      type: 'Core QA Testing',
      typeIcon: 'fa-search',
      title: 'Airbnb Quality Verification & Defect Suite',
      desc: 'Enterprise QA suite developed during the ATMECS GLOBE engagement for Airbnb core services, encompassing booking engine validation, host listing verification, and cross-browser stress testing.',
      highlights: [
        '450+ Test Cases documented and mapped to user stories in TestRail.',
        'Detailed bug reproduction logs with DevTools HAR files, network payload inspection, and root-cause breakdowns in JIRA.',
        'High-volume regression runs with zero missed P1 escapees.',
      ],
      skills: [
        'TestRail',
        'JIRA',
        'REST API',
        'Cross-Browser QA',
        'Network Inspector',
      ],
      link: '#experience',
      linkIcon: 'fas fa-external-link-alt',
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-badge">Key Projects</div>
        <h2 className="section-title">Featured Work &amp; Test Frameworks</h2>
        <p className="section-subtitle">
          Real-world applications and testing architectures engineered for rock-solid
          stability.
        </p>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-header">
                <span className="project-type">
                  <i className={`fas ${p.typeIcon}`}></i> {p.type}
                </span>
                <div className="project-links">
                  <a href={p.link} target={p.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" title="View Project">
                    <i className={p.linkIcon}></i>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-highlights">
                {p.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="ph-item">
                    <i className="fas fa-check text-green"></i> {h}
                  </div>
                ))}
              </div>
              <div className="tech-pill-list">
                {p.skills.map((s, sIdx) => (
                  <span key={sIdx}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
