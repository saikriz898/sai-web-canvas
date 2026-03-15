import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data';

const Achievements = () => {
    return (
        <section id="achievements" className="py-12 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[9px] font-black text-accent uppercase tracking-[0.5em] mb-2 block">Hall of Fame</motion.span>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter mb-4">KEY <span className="text-slate-200 uppercase">Achievements.</span></motion.h2>
                    <div className="w-8 h-0.5 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {achievementsData.map((award, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative bg-[#fcfcfd] border border-slate-100 rounded-[24px] p-6 flex flex-col h-full hover:bg-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:border-accent/10">
                            <div className="flex justify-between items-start mb-4"><div className="w-10 h-10 rounded-xl bg-white border border-slate-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">{award.icon && React.isValidElement(award.icon) ? React.cloneElement(award.icon, { size: 20 }) : null}</div><span className="text-[8px] font-black bg-slate-100 text-slate-400 px-2 py-1 rounded-full uppercase tracking-widest">{award.year}</span></div>
                            <div className="flex-grow"><h3 className="text-[15px] font-black text-slate-900 tracking-tight leading-tight mb-1 group-hover:text-accent transition-colors">{award.title}</h3><p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">{award.event}</p><p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">{award.desc}</p></div>
                            <div className="mt-auto pt-4 border-t border-slate-50"><div className="flex items-center justify-between"><span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Impact Score</span><span className="text-[10px] font-black text-accent uppercase tracking-widest">{award.stat}</span></div><div className="h-1 bg-slate-50 rounded-full mt-2 overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: idx * 0.1 }} className="h-full bg-accent opacity-20" /></div></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
