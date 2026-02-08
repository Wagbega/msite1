import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Professional Services & Solutions | Solar, CCTV, Amusement, Automation';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Professional installation and maintenance of solar systems, amusement rides, CCTV security, and industrial automation. Expert solutions for modern businesses.'
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute(
      'content',
      'solar installation, CCTV security, amusement park rides, industrial automation, renewable energy, security systems'
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <ProjectGallery />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
