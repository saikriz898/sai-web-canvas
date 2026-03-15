import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Let's Connect</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none uppercase">CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">ME</span></h2>
                    <p className="text-sm text-slate-400 font-medium max-w-lg mx-auto mb-10">Feel free to reach out for collaborations or just a friendly hello.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a href="mailto:saikrishnan2116@gmail.com" className="group relative bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-accent hover:scale-105 shadow-xl shadow-slate-900/10 flex items-center gap-3"><Mail size={18} /><span>Contact Me</span></a>
                        <div className="flex gap-3">
                            <a href="https://linkedin.com/in/saikriz898" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-11 h-11 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all"><Linkedin size={18} /></a>
                            <a href="https://github.com/saikriz898" target="_blank" rel="noopener noreferrer" title="GitHub" className="w-11 h-11 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-black hover:border-black transition-all"><Github size={18} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
