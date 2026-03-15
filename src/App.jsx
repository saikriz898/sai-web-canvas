import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Preloader from './components/layout/Preloader';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import CodingProfiles from './components/sections/CodingProfiles';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollReveal from './components/ui/ScrollReveal';


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHover: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

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
                    transition={{ duration: 0.8 }} 
                    className="min-h-screen bg-[#fcfcfd] selection:bg-accent/30 selection:text-slate-900"
                >
                    <Navbar />
                    <ScrollToTop />
                    <main>
                        <Hero />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <About />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <Skills />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <CodingProfiles />
                        </motion.div>
                        <ScrollReveal>
                            <Projects />
                        </ScrollReveal>
                        <ScrollReveal>
                            <Experience />
                        </ScrollReveal>
                        <ScrollReveal>
                            <Certifications />
                        </ScrollReveal>
                        <ScrollReveal>
                            <Achievements />
                        </ScrollReveal>
                        <ScrollReveal>
                            <Education />
                        </ScrollReveal>
                        <ScrollReveal>
                            <Contact />
                        </ScrollReveal>
                    </main>
                    <Footer />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
