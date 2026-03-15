import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Languages');

    return (
        <section id="skills" className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[9px] font-black text-accent uppercase tracking-[0.6em] mb-3 block">Technical Architecture</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">TECH <span className="text-slate-200">STACK.</span></motion.h2>
                    <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-slate-50/80 p-1.5 rounded-[22px] border border-slate-100 max-w-fit mx-auto">
                    {Object.keys(skillsData).map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`relative px-6 py-2.5 rounded-[16px] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}>
                            {activeTab === tab && <motion.div layoutId="skillTabHighlight" className="absolute inset-0 bg-slate-900 rounded-[16px] shadow-lg shadow-slate-200" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <AnimatePresence mode="wait">
                        {skillsData[activeTab].map((skill, idx) => (
                            <motion.div key={`${activeTab}-${skill.name}`} initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -15 }} transition={{ duration: 0.3, delay: idx * 0.04 }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="group">
                                <div className="bg-white border border-slate-100 p-8 rounded-[30px] flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 h-full min-h-[170px] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rotate-12 scale-150">{skill.icon}</div>
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] group-hover:text-slate-900 transition-colors">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
