export default function Hackathons() {
  const hackathons = [
    {
      badgeClass: 'badge-winner',
      badgeIcon: 'fa-award',
      badgeText: '1st Place Winner',
      icon: 'fa-laptop-code',
      title: 'Infosys Springboard HackAutomate 2025',
      org: 'National Level • 48-Hour Hackathon',
      desc: (
        <>
          Built <strong>&quot;TestPulse AI&quot;</strong>: An intelligent test orchestration
          engine that analyzes Git diffs and automatically triggers only the impacted
          Playwright &amp; Postman test scripts, slashing CI pipeline execution time by 58%.
        </>
      ),
      stats: [
        { num: '58%', label: 'CI Speedup' },
        { num: '120+', label: 'Teams Competed' },
        { num: 'Top 1', label: 'Rank' },
      ],
      skills: ['Playwright', 'TypeScript', 'Git Webhooks', 'Node.js'],
    },
    {
      badgeClass: 'badge-finalist',
      badgeIcon: 'fa-medal',
      badgeText: 'Top 5 Finalist',
      icon: 'fa-network-wired',
      title: 'Smart India Innovation Hackathon (State Edition)',
      org: 'Inter-College Tech Summit • 36 Hours',
      desc: (
        <>
          Developed <strong>&quot;EduBot Smart Admission&quot;</strong>: A conversational assistant
          powered by Google Dialogflow and Flutter that guided over 1,500+ student applicants
          through automated admission eligibility verification and instant inquiry handling.
        </>
      ),
      stats: [
        { num: '1,500+', label: 'Queries Handled' },
        { num: '96%', label: 'Intent Accuracy' },
        { num: 'Finals', label: 'Podium Finish' },
      ],
      skills: ['Dialogflow', 'Flutter', 'Dart', 'GCP'],
    },
    {
      badgeClass: 'badge-award',
      badgeIcon: 'fa-star',
      badgeText: 'Best QA Innovation Award',
      icon: 'fa-shield-virus',
      title: 'U2 Breakthrough Sprint Innovation Week',
      org: 'Internal Engineering Challenge • Nov 2025',
      desc: (
        <>
          Designed an automated API Mock Server and synthetic test data generator using
          Spring Boot and Postman collections, enabling isolated front-end testing even when
          third-party banking APIs were in maintenance mode.
        </>
      ),
      stats: [
        { num: '100%', label: 'Uptime in Mocks' },
        { num: '0', label: 'Blocked Sprints' },
        { num: 'Award', label: 'Spotlight' },
      ],
      skills: ['Spring Boot', 'Postman', 'Mocking', 'MySQL'],
    },
  ];

  return (
    <section className="section hackathons-section" id="hackathons">
      <div className="container">
        <div className="section-badge">
          <i className="fas fa-trophy"></i> Competitive Highlights
        </div>
        <h2 className="section-title">Hackathons &amp; Innovation Challenges</h2>
        <p className="section-subtitle">
          Demonstrated leadership, speed, and technical ingenuity in national and regional
          hackathons.
        </p>

        <div className="hackathon-grid">
          {hackathons.map((h, idx) => (
            <div key={idx} className="hackathon-card glass-card">
              <div className={`hackathon-badge ${h.badgeClass}`}>
                <i className={`fas ${h.badgeIcon}`}></i> {h.badgeText}
              </div>
              <div className="hackathon-icon">
                <i className={`fas ${h.icon}`}></i>
              </div>
              <h3 className="hackathon-title">{h.title}</h3>
              <span className="hackathon-org">{h.org}</span>
              <p className="hackathon-desc">{h.desc}</p>

              <div className="hackathon-stats">
                {h.stats.map((s, sIdx) => (
                  <div key={sIdx}>
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="tech-pill-list">
                {h.skills.map((sk, skIdx) => (
                  <span key={skIdx}>{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
