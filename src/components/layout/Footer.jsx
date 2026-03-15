import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, User, Briefcase, Terminal, Code2, TrendingUp, Award, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#fcfcfd] pt-24 pb-16 relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 relative z-10">
                {/* Navigation Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-24 border-b border-slate-100">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xs">SK</div>
                            <span className="font-black text-slate-900 tracking-tight uppercase">Sai Krishnan S</span>
                        </div>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xs transition-colors hover:text-slate-600">
                            Multidisciplinary developer focused on building functional, high-performance architecture for the web.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Experience</h4>
                        <nav className="flex flex-col gap-5">
                            <a href="#about" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <User size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Biography</span>
                            </a>
                            <a href="#projects" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <Briefcase size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Selected Works</span>
                            </a>
                            <a href="#experience" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <Terminal size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Registry</span>
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Expertise</h4>
                        <nav className="flex flex-col gap-5">
                            <a href="#skills" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <Code2 size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Tech Stack</span>
                            </a>
                            <a href="#coding-profiles" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <TrendingUp size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Profiles</span>
                            </a>
                            <a href="#certifications" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <Award size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Milestones</span>
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Connect</h4>
                        <nav className="flex flex-col gap-5">
                            <a href="https://linkedin.com/in/saikriz898" target="_blank" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-[#0077b5] transition-colors group">
                                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/saikriz898" target="_blank" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-black transition-colors group">
                                <Github size={16} className="group-hover:scale-110 transition-transform" />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:saikrishnan2116@gmail.com" className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-accent transition-colors group">
                                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                                <span>Contact Me</span>
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Final Bottom Bar */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">© 2026 SAI KRISHNAN S</span>
                        <div className="flex gap-6">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Architectural Engineering</span>
                            <div className="w-1 h-1 rounded-full bg-slate-200 mt-1 md:block hidden"></div>
                            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Built in Tamil Nadu</span>
                        </div>
                    </div>
                    
                    <motion.button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 group"
                    >
                        Back to Height
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                            <ArrowUp size={14} />
                        </div>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
