import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, Code2, Database } from 'lucide-react';
import TypeWriter from '../ui/TypeWriter';
import SocialLink from '../ui/SocialLink';
import profilePng from '../../assets/Profile.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-32 lg:pb-20 overflow-hidden" id="home">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.08)_0%,_transparent_70%)]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse"></div>
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                    {/* Mobile-only Profile Image */}
                    <div className="lg:hidden mb-10 flex justify-center">
                        <div className="relative p-2 rounded-full border-2 border-dashed border-slate-200">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                                <img src={profilePng} alt="Sai Krishnan S" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-lg md:text-xl font-medium text-slate-400 mb-1 tracking-tight">Hi, I'm</h2>
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tighter">Sai Krishnan S</h1>
                    <div className="text-xl md:text-2xl font-bold text-slate-300 mb-6 h-10 flex items-center justify-center lg:justify-start font-display">
                        <span className="mr-2 text-slate-900">I AM</span>
                        <TypeWriter words={['A Developer', 'A CS Student', 'A Creative Thinker', 'A Tech Enthusiast']} />
                        <span className="animate-blink ml-0.5 text-accent">|</span>
                    </div>
                    <p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium px-4 lg:px-0">
                        <span className="text-slate-900 font-bold border-b-2 border-accent/10">Engineering student</span> specializing in <span className="text-slate-900 font-bold border-b-2 border-accent/10">Computer Science</span>, passionate about <span className="text-slate-900 font-bold">creating web applications</span> and turning innovative ideas into reality through code.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-14">
                        <a href="#projects" className="w-full sm:w-auto"><button className="btn-premium btn-premium-solid accent group w-full sm:w-auto px-10">View My Work<ChevronDown size={14} className="icon-move-down" /></button></a>
                        <a href="#contact" className="w-full sm:w-auto"><button className="btn-premium btn-premium-outline group w-full sm:w-auto px-10"><Mail size={14} />Contact Me</button></a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-6">
                        <SocialLink href="https://github.com/saikriz898" icon={<Github size={22} />} hoverClass="hover:text-black hover:border-black" />
                        <SocialLink href="https://www.linkedin.com/in/saikriz898" icon={<Linkedin size={22} />} hoverClass="hover:text-[#0077b5] hover:border-[#0077b5]" />
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
                    <div className="relative w-full max-w-md mx-auto aspect-square">
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="relative z-10 p-3 rounded-full border-2 border-dashed border-slate-200 group">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-accent/20 border-t-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl relative bg-slate-100 flex items-center justify-center">
                                <img src={profilePng} alt="Sai Krishnan S" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"><Code2 className="text-accent" size={24} /></motion.div>
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-20 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"><Database className="text-primary" size={24} /></motion.div>
                    </div>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-6 pointer-events-none">
                <span className="text-[7px] font-black text-slate-300 uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180">Explore</span>
                <div className="w-[1.5px] h-16 bg-slate-50 relative overflow-hidden rounded-full">
                    <motion.div animate={{ y: [-80, 80], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
