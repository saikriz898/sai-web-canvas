import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, MapPin, Download, Github, Linkedin } from 'lucide-react';
import profilePng from '../../assets/Profile.png';
import resumePdf from '../../assets/Sai_Krishnan S Resume.pdf';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="lg:col-span-4 relative">
                        <div className="absolute inset-x-6 inset-y-6 bg-accent/5 rounded-[30px] blur-[40px] opacity-40"></div>
                        <div className="relative bg-white border border-slate-100 p-6 rounded-[24px] shadow-xl overflow-hidden group">
                            <div className="flex justify-between items-start mb-6"><Code2 size={24} className="text-slate-300" /><div className="text-right"><span className="block text-[8px] font-mono text-accent tracking-[0.2em] uppercase font-bold">ID: SK-2026</span><div className="flex gap-1 mt-1 justify-end"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div></div></div></div>
                            <div className="text-center mb-6">
                                <div className="relative w-20 h-20 mx-auto mb-4 p-1 rounded-full border border-slate-100"><img src={profilePng} alt="Sai Krishnan S" className="w-full h-full rounded-full object-cover transition-all duration-500" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-0.5 tracking-tight">Sai Krishnan S</h3>
                                <p className="text-[9px] font-mono text-accent uppercase tracking-widest font-bold">Computer Science Student</p>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div><div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1.5"><span>Academic Level</span><span className="text-slate-900">Year 2</span></div><div className="h-1 bg-slate-50 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-accent"></motion.div></div></div>
                                <div><div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1.5"><span>Semester Progress</span><span className="text-slate-900">Sem 4</span></div><div className="h-1 bg-slate-50 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} className="h-full bg-primary"></motion.div></div></div>
                            </div>
                            <div className="grid grid-cols-2 gap-0 border-t border-slate-50 pt-6"><div className="text-center border-r border-slate-50"><div className="text-xl font-black text-slate-900">6+</div><div className="text-[9px] font-bold uppercase text-slate-400 tracking-widest mt-0.5">Projects</div></div><div className="text-center"><div className="text-xl font-black text-slate-900">10+</div><div className="text-[9px] font-bold uppercase text-slate-400 tracking-widest mt-0.5">Skills</div></div></div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="lg:col-span-8">
                        <div className="mb-6"><span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-3 block">About The Developer</span><h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-[1.2] tracking-tighter">Decoding Complex Problems into <br /><span className="text-accent underline decoration-accent/10 underline-offset-8">Elegant Solutions</span>.</h3></div>
                        <div className="space-y-4 text-base text-slate-500 font-medium leading-[1.6]"><p>I am a <span className="text-slate-900 font-bold">Computer Science student</span> passionate about learning software development and problem solving. I am currently focused on building a strong foundation in programming, data structures, and web development.</p><p>I actively practice coding, work on hands-on projects, and explore new technologies to improve my understanding of how real-world applications are built. My goal is to grow as a skilled software engineer and contribute meaningfully to a development team in the future.</p></div>
                        <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-10">
                            <div className="group flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-[18px] shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300"><div className="w-10 h-10 rounded-[12px] bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300"><Terminal size={18} /></div><div><p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Current Focus</p><p className="text-sm font-bold text-slate-900 mt-0.5">Full Stack, Gen AI, DSA</p></div></div>
                            <div className="group flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-[18px] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"><div className="w-10 h-10 rounded-[12px] bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"><MapPin size={18} /></div><div><p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Location</p><p className="text-sm font-bold text-slate-900 mt-0.5">Pollachi, India</p></div></div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a href={resumePdf} download="Sai_Krishnan_S_Resume.pdf">
                                <button className="btn-premium btn-premium-solid accent group !px-10">
                                    <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                                    Grab My CV
                                </button>
                            </a>
                            <div className="flex items-center gap-4 border-l border-slate-100 pl-6"><span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Connect:</span><div className="flex gap-3"><a href="https://github.com/saikriz898" target="_blank" className="text-slate-400 hover:text-black transition-colors"><Github size={16} /></a><a href="https://linkedin.com/in/saikriz898" target="_blank" className="text-slate-400 hover:text-[#0077b5] transition-colors"><Linkedin size={16} /></a></div></div></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
