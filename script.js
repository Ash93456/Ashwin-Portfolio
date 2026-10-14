/* ==========================================================================
   Ashwin K - Portfolio Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Typing Effect in Hero
  const typingElement = document.getElementById('typing-text');
  const words = [
    'QA Automation Engineer',
    'SDET & Test Architect',
    'Playwright & API Specialist',
    'Full-Stack Developer',
    'Hackathon Winner'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400; // Pause before starting new word
    }

    setTimeout(type, typingSpeed);
  }
  type();

  // 2. Interactive Terminal Test Runner Simulation
  const runTestBtn = document.getElementById('run-test-suite-btn');
  const terminalOutput = document.getElementById('terminal-output');

  const testSteps = [
    { text: '$ npx playwright test --project=chromium --headed', class: 'text-muted' },
    { text: '⚡ Initializing Playwright test runner v1.42.0...', class: 'text-cyan' },
    { text: '⚡ Spawning 5 parallel test worker nodes...', class: 'text-cyan' },
    { text: '<span class="badge-pass">PASS</span> tests/auth/login-jwt-validation.spec.ts <span class="test-time">(312ms)</span>', isHtml: true },
    { text: '<span class="badge-pass">PASS</span> tests/api/property-leasing-endpoints.spec.ts <span class="test-time">(540ms)</span>', isHtml: true },
    { text: '<span class="badge-pass">PASS</span> tests/e2e/airbnb-core-booking-workflow.spec.ts <span class="test-time">(1.18s)</span>', isHtml: true },
    { text: '<span class="badge-pass">PASS</span> tests/regression/ats-candidate-pipeline.spec.ts <span class="test-time">(720ms)</span>', isHtml: true },
    { text: '<span class="badge-pass">PASS</span> tests/mobile/flutter-admission-bot-intent.spec.ts <span class="test-time">(410ms)</span>', isHtml: true },
    { text: '<span class="badge-pass">PASS</span> tests/security/sql-injection-and-rate-limit.spec.ts <span class="test-time">(290ms)</span>', isHtml: true },
    { text: '✔ 52 passed (100%) | 0 flaky | 0 failed in 3.46s', class: 'text-green font-bold' },
    { text: '⚡ AI Test Optimizer: Coverage 99.4% | Zero regressions detected', class: 'text-gold' }
  ];

  let isRunningTests = false;

  function runTerminalSimulation() {
    if (isRunningTests) return;
    isRunningTests = true;
    terminalOutput.innerHTML = '';

    testSteps.forEach((step, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'terminal-line ' + (step.class || '');
        if (step.isHtml) {
          line.innerHTML = step.text;
        } else {
          line.textContent = step.text;
        }
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (index === testSteps.length - 1) {
          isRunningTests = false;
        }
      }, index * 260);
    });
  }

  if (runTestBtn) {
    runTestBtn.addEventListener('click', runTerminalSimulation);
  }

  // 3. Counter Animation for Impact Metrics
  const counters = document.querySelectorAll('.metric-number');
  let animated = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = Math.ceil(target / 45);

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = count.toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    });
  }

  const metricsSection = document.getElementById('metrics');
  if (metricsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
        }
      });
    }, { threshold: 0.3 });
    observer.observe(metricsSection);
  }

  // 4. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close mobile nav when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fas fa-bars';
      });
    });
  }

  // 5. Active Navbar Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 6. Copy to Clipboard Functionality
  const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check" style="color: #10b981;"></i>';
        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 2000);
      });
    });
  });

  // 7. Interactive Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formToast = document.getElementById('form-toast');

  if (contactForm && formToast) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formToast.style.display = 'flex';
      contactForm.reset();
      setTimeout(() => {
        formToast.style.display = 'none';
      }, 5000);
    });
  }
});
