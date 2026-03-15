import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Home, User, GraduationCap, Briefcase, Code2, Wrench, Trophy, Mail, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumePdf from '../../assets/Sai_Krishnan S Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={13} /> },
    { name: 'About', href: '#about', icon: <User size={13} /> },
    { name: 'Skills', href: '#skills', icon: <Code2 size={13} /> },
    { name: 'Projects', href: '#projects', icon: <Wrench size={13} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={13} /> },
    {name:'Achievements',href:'#achievements',icon:<Trophy size={13}/>},
    { name: 'Education', href: '#education', icon: <GraduationCap size={13} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={13} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-xl md:rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-xl border-slate-200/50' : 'shadow-sm border-transparent'}`}>
          <div className="flex-1 flex items-center justify-start gap-4 select-none">
            <div className="relative h-10 w-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg shadow-2xl">
              <span className="font-display font-black text-sm text-white tracking-widest leading-none">SK</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white" />
            </div>
            <div className="hidden xl:flex flex-col border-l border-slate-200 pl-4 py-0.5">
              <span className="text-base font-bold font-display tracking-tight text-slate-900 leading-none">
                Sai Krishnan <span className="text-accent">S</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-extrabold mt-1">
                Engineering
              </span>
            </div>
          </div>

          {/* Desktop Nav - Absolute Center for perfect alignment */}
          <div className="hidden lg:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-extrabold text-slate-500 hover:text-primary transition-colors py-1 group uppercase tracking-[0.2em] flex items-center gap-1.5"
              >
                <span className="text-slate-400 group-hover:text-accent transition-colors">
                  {link.icon}
                </span>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Action Button */}
          <div className="flex-1 hidden lg:flex items-center justify-end">
             <a 
              href={resumePdf} 
              download="Sai_Krishnan_S_Resume.pdf"
              className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.25em] px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2.5 group shadow-lg shadow-accent/20 hover:bg-slate-900 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 active:scale-95"
            >
              Resume
              <FileDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xl z-[60] md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] p-8 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xs">SK</div>
                  <span className="font-black text-slate-900 tracking-tight uppercase">Navigation</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 border border-slate-100 active:scale-95 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto pr-4 custom-scrollbar">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {link.icon}
                      </div>
                      <span className="text-lg font-black text-slate-900 tracking-tight uppercase group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-accent transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <a href="https://github.com/saikriz898" target="_blank" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-accent transition-all"><Github size={20} /></a>
                  <a href="https://linkedin.com/in/saikriz898" target="_blank" className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600 hover:border-accent hover:text-accent transition-all"><Linkedin size={20} /></a>
                  <a href="mailto:saikrishnan2116@gmail.com" className="flex-1 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600 font-black text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition-all">Connect</a>
                </div>
                
                <div className="flex items-center justify-center py-4 text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] border-t border-slate-50">
                  © 2026 Sai Krishnan S
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
