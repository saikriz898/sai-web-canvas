import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, MapPin } from 'lucide-react';
import { experienceData } from '../../data';

const Experience = () => {
    return (
        <section id="experience" className="py-12 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 relative">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[9px] font-black text-accent uppercase tracking-[0.5em] mb-2 block">Professional History</motion.span>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4">INTERNSHIP <span className="text-slate-200 uppercase">Registry.</span></motion.h2>
                    <div className="w-8 h-0.5 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {experienceData.map((exp, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative bg-[#fcfcfd] border border-slate-100 rounded-[24px] p-5 flex flex-col h-full hover:bg-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:border-accent/10">
                            <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-300 hover:text-slate-900 transition-all"><Github size={12} /></a>
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-300 hover:text-accent transition-all"><Globe size={12} /></a>
                            </div>
                            <div className="mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center mb-4 shadow-lg group-hover:bg-accent transition-all duration-500">{exp.icon && React.isValidElement(exp.icon) ? React.cloneElement(exp.icon, { size: 18 }) : null}</div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-accent transition-colors">{exp.role}</h3>
                                <div className="flex items-center gap-2.5 mt-1.5"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">@{exp.company}</span><div className="w-1 h-1 rounded-full bg-slate-100"></div><span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">{exp.duration}</span></div>
                            </div>
                            <div className="flex-grow space-y-4">
                                <p className="text-[12px] text-slate-500 font-medium leading-[1.6] border-l-2 border-slate-50 pl-4">{exp.desc}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {exp.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white border border-slate-50 rounded-lg p-2.5"><div className="w-1 h-1 rounded-full bg-accent/30 shrink-0"></div><span className="text-[8px] font-black text-slate-400 uppercase tracking-tight leading-none">{detail}</span></div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-50 flex flex-wrap justify-between items-center gap-3"><div className="flex flex-wrap gap-1">{exp.tech.map((t, i) => (<span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-400 text-[8px] font-black uppercase tracking-tighter rounded group-hover:text-accent group-hover:bg-accent/5 transition-all">{t}</span>))}</div><div className="flex items-center gap-1 text-[9px] font-black text-slate-200 uppercase tracking-[0.2em]"><MapPin size={9} /> {exp.location}</div></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
