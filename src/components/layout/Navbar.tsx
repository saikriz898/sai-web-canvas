import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinksData } from '../../data/portfolioData';
import resumePdf from '../../assets/Sai_Krishnan_S_Resume.pdf';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinksData.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#fafaf8]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-2xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none select-none"
          aria-label="Sai Krishnan S Home"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white font-display font-bold text-xs flex items-center justify-center transition-colors group-hover:bg-neutral-800">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm text-neutral-900 tracking-tight leading-none">
              Sai Krishnan
            </span>
            <span className="font-mono text-[10px] text-neutral-400 font-medium mt-1 leading-none">
              Builder · Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          {navLinksData.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors font-mono ${
                  isActive
                    ? 'text-neutral-900 font-bold bg-neutral-200/60'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={resumePdf}
            download="Sai_Krishnan_S_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-xs font-semibold font-mono rounded-xl hover:bg-neutral-800 transition-all shadow-2xs hover:shadow-xs"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-neutral-400" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white z-50 shadow-xl p-6 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-neutral-900 text-white font-display font-bold text-[10px] flex items-center justify-center">
                      SK
                    </div>
                    <span className="font-display font-bold text-neutral-900 text-sm">
                      Navigation
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg"
                    aria-label="Close Menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col space-y-1">
                  {navLinksData.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 font-mono transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <a
                  href={resumePdf}
                  download="Sai_Krishnan_S_Resume.pdf"
                  className="w-full py-2.5 bg-neutral-900 text-white font-mono text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight size={14} />
                </a>
                <p className="text-center font-mono text-[10px] text-neutral-400">
                  © 2026 Sai Krishnan S
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
