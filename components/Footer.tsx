export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="logo-bracket">&lt;</span>Ashwin
          <span className="logo-accent">.QA</span>
          <span className="logo-bracket">/&gt;</span>
          <p>
            Built with Next.js, React, high-performance code, and test-driven precision.
          </p>
        </div>
        <div className="footer-right">
          <p>© 2026 Ashwin K. All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/ashwin-k-221ca009"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:kashwin454@yahoo.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+916383799815" aria-label="Phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
