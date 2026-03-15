import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { codingProfilesData } from '../../data';

const CodingProfiles = () => {
    return (
        <section id="coding-profiles" className="py-24 bg-[#fcfcfd] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[9px] font-black text-accent uppercase tracking-[0.6em] mb-3 block">Algorithm Mastery</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">CODING <span className="text-slate-200 uppercase">Profiles.</span></motion.h2>
                    <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {codingProfilesData.map((profile, idx) => (
                        <motion.a key={idx} href={profile.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 overflow-hidden text-center flex flex-col items-center">
                            <div className={`absolute -top-12 -right-12 w-32 h-32 ${profile.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-[22px] bg-slate-50 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-all duration-500 shadow-sm">{profile.icon}</div>
                                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1">{profile.platform}</h3>
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-6 opacity-60">@{profile.username}</p>
                                <div className="flex flex-col gap-2 mb-8">
                                    <div className="flex items-center justify-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100/50"><TrendingUp size={12} className="text-emerald-500" /><span className="text-[10px] font-bold text-slate-600 tracking-tight">{profile.stats}</span></div>
                                    <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{profile.rating}</div>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors"><span>View Profile</span><ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" /></div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
