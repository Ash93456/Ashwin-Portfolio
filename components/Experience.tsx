export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer & Test Automation',
      company: 'U2 Breakthrough Technology',
      period: 'Nov 2025 – Present',
      summary:
        'Sole owner of end-to-end test automation and API validation while actively engineering front-end and back-end modules for an enterprise Property Management product.',
      bullets: [
        'Engineered a robust test suite covering 120+ critical user flows with parallel test execution using Playwright & TypeScript, cutting regression cycle time by 65%.',
        'Automated complex REST API test suites using Postman, validating JSON request/response payloads, authentication tokens, and edge case error handling.',
        'Developed back-end micro-services with Spring Boot, SQL, and Node.js and cross-platform mobile screens with Flutter, personally debugging and fixing reported defects across DB and UI layers.',
        'Drove test-first standards in bi-weekly sprints, collaborating with product managers to deliver zero blocker releases.',
      ],
      skills: [
        'Playwright',
        'TypeScript',
        'Postman',
        'Spring Boot',
        'SQL',
        'Node.js',
        'Flutter',
      ],
    },
    {
      role: 'Quality Assurance Intern',
      company: 'ATMECS GLOBE — Project (Airbnb)',
      period: 'Feb 2025 – Jul 2025',
      summary:
        "Spearheaded manual and exploratory quality verification for Airbnb's core booking, listing, and payment search flows across web and mobile platforms.",
      bullets: [
        'Conducted functional, regression, boundary value, and cross-browser exploratory tests, catching 85+ subtle UI/UX inconsistencies and payment flow edge cases.',
        'Designed 450+ structured test cases in TestRail with clear acceptance criteria; tracked defects from discovery to resolution in JIRA.',
        'Collaborated with senior developers to analyze console logs, network payloads, and device-specific anomalies to pinpoint reproduction steps.',
        'Actively presented bug triage reports in daily stand-ups and contributed to sprint retrospective quality improvement actions.',
      ],
      skills: [
        'Airbnb Core Testing',
        'TestRail',
        'JIRA',
        'Cross-Platform QA',
        'Exploratory Testing',
        'Scrum',
      ],
    },
    {
      role: 'QA Automation Intern',
      company: 'CrescoWorks',
      period: 'Sep 2025 – Oct 2025',
      summary:
        'Contributed to QA automation and feature development for an enterprise Applicant Tracking System (ATS) platform.',
      bullets: [
        'Authored automated test scripts utilizing Java, Selenium, and TestNG assertions to automate applicant pipeline transitions and resume parsing tests.',
        'Monitored test run reports, analyzed test failure stack traces, and updated flaky locators to ensure 98%+ automated suite reliability.',
        'Quickly mastered complex ATS domain workflows within the first week to write high-yield test cases.',
      ],
      skills: ['Java', 'Selenium WebDriver', 'TestNG', 'ATS Platform', 'Debugging'],
    },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-badge">Career Journey</div>
        <h2 className="section-title">Hands-On Industry Experience</h2>
        <p className="section-subtitle">
          Delivering high-reliability software testing and development across live
          commercial products.
        </p>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="company-name">
                      <i className="fas fa-building"></i> {exp.company}
                    </span>
                  </div>
                  <span className="timeline-date">
                    <i className="far fa-calendar-alt"></i> {exp.period}
                  </span>
                </div>
                <p className="role-summary">{exp.summary}</p>
                <ul className="bullet-list">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
                <div className="tech-pill-list">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
