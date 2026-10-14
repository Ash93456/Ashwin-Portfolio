import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ashwin K | QA Automation Engineer & Full-Stack Developer',
  description:
    'Portfolio of Ashwin K - QA Automation Engineer, SDET, and Full-Stack Developer specializing in Playwright, Selenium, API Testing, Spring Boot, and Flutter.',
  keywords: [
    'Ashwin K',
    'QA Automation Engineer',
    'SDET',
    'Playwright',
    'Selenium',
    'TypeScript',
    'API Testing',
    'Postman',
    'Spring Boot',
    'Flutter',
    'Portfolio',
  ],
  authors: [{ name: 'Ashwin K' }],
  openGraph: {
    title: 'Ashwin K | QA Automation Engineer & Full-Stack Developer',
    description:
      'QA Automation Engineer & SDET with hands-on experience in Playwright, Selenium, REST API testing, and Full-Stack development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {/* Ambient Glowing Orbs and Grid Background */}
        <div className="bg-grid"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        {children}
      </body>
    </html>
  );
}
