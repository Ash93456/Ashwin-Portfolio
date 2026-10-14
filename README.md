# Ashwin K — QA Automation Engineer & Full-Stack Developer Portfolio

A modern, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **React**. Designed with a sleek Dark Cyber / SDET aesthetic featuring glassmorphism, glowing ambient lighting, and interactive widgets.

---

## ⚡ Quick Start

Follow these steps in your terminal inside the `Ashwin-Portfolio` directory:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🚀 Build for Production or GitHub Pages

To create an optimized production build or static export:

```bash
npm run build
```

The static output will be generated in the `/out` directory, ready to deploy to GitHub Pages, Vercel, or AWS S3.

---

## 📁 Project Structure

```
Ashwin-Portfolio/
├── app/
│   ├── globals.css          # Core CSS variables, animations & responsive styling
│   ├── layout.tsx           # Root layout with SEO metadata & Google Fonts
│   └── page.tsx             # Main page assembling all modular components
├── components/
│   ├── Navbar.tsx           # Responsive navigation with scroll spy
│   ├── Hero.tsx             # Dynamic typing effect & quick action CTAs
│   ├── TerminalDemo.tsx     # Interactive Playwright test runner simulation
│   ├── Metrics.tsx          # Real-time animated impact counters
│   ├── About.tsx            # Engineering & QA philosophy overview
│   ├── Skills.tsx           # Categorized technical competencies
│   ├── Experience.tsx       # Timeline of professional experience
│   ├── Hackathons.tsx       # Competitive hackathons & awards showcase
│   ├── Projects.tsx         # Featured QA frameworks & full-stack apps
│   ├── Certifications.tsx   # Verified degrees & credentials
│   ├── Contact.tsx          # Interactive message form & copy utilities
│   └── Footer.tsx           # Social links & copyright
├── package.json             # Next.js & React dependencies
├── tsconfig.json            # TypeScript configuration
└── next.config.mjs          # Next.js settings & static export support
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Tailored Design System, Custom Tokens, Glassmorphism)
- **Icons**: FontAwesome 6
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)
