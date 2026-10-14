import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Hackathons from '@/components/Hackathons';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <Experience />
      <Hackathons />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
