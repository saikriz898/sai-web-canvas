import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Preloader from './components/layout/Preloader';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CodingProfiles from './components/sections/CodingProfiles';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollReveal from './components/ui/ScrollReveal';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial load timer (fast & responsive)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900"
        >
          <Navbar />
          <ScrollToTop />
          <main id="main-content">
            <Hero />
            <ScrollReveal direction="up">
              <About />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Projects />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Skills />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <CodingProfiles />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Experience />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Certifications />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Achievements />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Education />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <Contact />
            </ScrollReveal>
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
