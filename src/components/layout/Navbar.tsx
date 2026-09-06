import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  FolderGit2,
  User,
  Briefcase,
  Code2,
  Mail,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinksData } from '../../data/portfolioData';
import resumePdf from '../../assets/Sai_Krishnan_S_Resume.pdf';

const iconMap: Record<string, React.ElementType> = {
  FolderGit2,
  User,
  Briefcase,
  Code2,
  Mail,
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinksData.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 260 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pointer-events-none py-2.5 sm:py-3.5 transition-all duration-300">
      <div className="container-custom">
        {/* Ultimate Premium Glass Floating Island */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-500 rounded-2xl px-3.5 sm:px-5 py-2 ${
            scrolled
              ? 'bg-[#fafaf8]/95 backdrop-blur-2xl border border-neutral-300/80 shadow-[0_12px_36px_rgba(0,0,0,0.08)]'
              : 'bg-[#fafaf8]/85 backdrop-blur-xl border border-neutral-200/80 shadow-[0_6px_24px_rgba(0,0,0,0.04)]'
          }`}
        >
          {/* Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none select-none relative"
            aria-label="Sai Krishnan S Home"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.94 }}
              className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white font-display font-extrabold text-xs flex items-center justify-center shadow-md border border-neutral-700/60 group-hover:border-neutral-500 transition-colors"
            >
              SK
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white"></span>
              </span>
            </motion.div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm text-neutral-900 tracking-tight leading-none group-hover:text-black transition-colors">
                  Sai Krishnan
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-mono text-[9px] font-semibold border border-emerald-500/20">
                  Available
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 font-medium mt-1 leading-none">
                Builder · Engineer
              </span>
            </div>
          </a>

          {/* Desktop Real Icons Navigation */}
          <nav
            className="hidden md:flex items-center bg-neutral-200/60 p-1.5 rounded-xl border border-neutral-300/50 backdrop-blur-lg relative"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {navLinksData.map((link) => {
              const IconComponent = iconMap[link.iconName || 'Code2'] || Code2;
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              const isHovered = hoveredSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredSection(sectionId)}
                  className={`relative flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200 font-mono z-10 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {/* Active Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-neutral-900 rounded-lg shadow-md border border-neutral-800 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Hover Soft Highlight */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavBackground"
                      className="absolute inset-0 bg-neutral-300/60 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <IconComponent
                    size={14}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : isHovered
                        ? 'text-neutral-900'
                        : 'text-neutral-500'
                    }`}
                  />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Real Resume Document CTA */}
          <div className="flex items-center gap-2.5">
            <motion.a
              href={resumePdf}
              download="Sai_Krishnan_S_Resume.pdf"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-mono text-white bg-neutral-900 hover:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-200 border border-neutral-800 group"
              aria-label="Download Resume PDF"
            >
              <FileText size={14} className="text-neutral-300 group-hover:text-white transition-colors" />
              <span>Resume</span>
              <ArrowUpRight
                size={13}
                className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl transition-colors focus:outline-none border border-neutral-200/60"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-md z-40 md:hidden pointer-events-auto"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="fixed top-4 inset-x-4 max-w-sm mx-auto bg-[#fafaf8] z-50 rounded-3xl shadow-2xl border border-neutral-200/90 p-5 flex flex-col justify-between md:hidden pointer-events-auto max-h-[85vh] overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-neutral-200/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-neutral-950 text-white font-display font-bold text-[11px] flex items-center justify-center shadow-xs">
                      SK
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-neutral-900 text-xs">
                        Sai Krishnan S
                      </span>
                      <span className="font-mono text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                        Available for Work
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                    aria-label="Close Menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Real Icons Mobile Nav Links */}
                <div className="flex flex-col space-y-1.5">
                  {navLinksData.map((link) => {
                    const IconComponent = iconMap[link.iconName || 'Code2'] || Code2;
                    const sectionId = link.href.substring(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-semibold font-mono transition-all duration-200 ${
                          isActive
                            ? 'bg-neutral-900 text-white shadow-md'
                            : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl ${
                              isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-200/70 text-neutral-600'
                            }`}
                          >
                            <IconComponent size={15} />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className={isActive ? 'text-neutral-300' : 'text-neutral-400'}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-200/60 space-y-3">
                <a
                  href={resumePdf}
                  download="Sai_Krishnan_S_Resume.pdf"
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <FileText size={15} className="text-white" />
                  <span>Download Resume</span>
                  <ArrowUpRight size={14} className="text-neutral-400" />
                </a>
                <p className="text-center font-mono text-[10px] text-neutral-400 font-medium">
                  © 2026 Sai Krishnan S · CS & Systems Engineer
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
