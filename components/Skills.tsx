export default function Skills() {
  const skillCategories = [
    {
      title: 'Test Automation',
      iconClass: 'icon-purple',
      icon: 'fa-robot',
      tags: [
        { name: 'Playwright (TypeScript)', highlighted: true },
        { name: 'Selenium WebDriver', highlighted: true },
        { name: 'TestNG & JUnit', highlighted: false },
        { name: 'Page Object Model (POM)', highlighted: false },
        { name: 'Cross-Browser Automation', highlighted: false },
        { name: 'Headless & Parallel Execution', highlighted: false },
      ],
    },
    {
      title: 'API Testing & Validation',
      iconClass: 'icon-cyan',
      icon: 'fa-network-wired',
      tags: [
        { name: 'Postman Collections', highlighted: true },
        { name: 'REST API Validation', highlighted: true },
        { name: 'JSON Schema & Payloads', highlighted: false },
        { name: 'Status Code & Auth Tests', highlighted: false },
        { name: 'Error Handling & Edge Cases', highlighted: false },
        { name: 'Environment Scripting', highlighted: false },
      ],
    },
    {
      title: 'QA Strategy & Defect Mgmt',
      iconClass: 'icon-green',
      icon: 'fa-clipboard-check',
      tags: [
        { name: 'Functional & Regression Testing', highlighted: false },
        { name: 'Exploratory & Smoke Testing', highlighted: false },
        { name: 'Test Case Design in TestRail', highlighted: false },
        { name: 'Defect Life Cycle in JIRA', highlighted: false },
        { name: 'Root-Cause Analysis (RCA)', highlighted: false },
        { name: 'Agile / Scrum Ceremonies', highlighted: false },
      ],
    },
    {
      title: 'Languages & Engineering',
      iconClass: 'icon-amber',
      icon: 'fa-code',
      tags: [
        { name: 'TypeScript / JavaScript', highlighted: false },
        { name: 'Java (Intermediate, OOPS)', highlighted: false },
        { name: 'Spring Boot', highlighted: false },
        { name: 'SQL & MySQL', highlighted: false },
        { name: 'Node.js', highlighted: false },
        { name: 'Dart & Flutter (Mobile)', highlighted: false },
      ],
    },
    {
      title: 'AI, Cloud & DevOps Tools',
      iconClass: 'icon-rose',
      icon: 'fa-cloud',
      tags: [
        { name: 'Dialogflow (Conversational AI)', highlighted: true },
        { name: 'AI-Assisted Test Generation', highlighted: false },
        { name: 'Google Cloud Platform (GCP)', highlighted: false },
        { name: 'Git & Version Control', highlighted: false },
        { name: 'JIRA & TestRail', highlighted: false },
        { name: 'CI/CD Pipeline Integration', highlighted: false },
      ],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-badge">Competency Matrix</div>
        <h2 className="section-title">Technical Skills & Tooling</h2>
        <p className="section-subtitle">
          A balanced toolkit encompassing test automation, API validation, cloud
          infrastructure, and full-stack development.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className={`category-icon ${cat.iconClass}`}>
                  <i className={`fas ${cat.icon}`}></i>
                </div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`skill-tag ${tag.highlighted ? 'highlighted' : ''}`}
                  >
                    <i className="fas fa-check-circle"></i> {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
