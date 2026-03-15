import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data';

const Certifications = () => {
    return (
        <section id="certifications" className="py-12 bg-[#fcfcfd] relative overflow-hidden border-t border-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[9px] font-black text-accent uppercase tracking-[0.5em] mb-2 block">Verified Credentials</motion.span>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter mb-4">TECHNICAL <span className="text-slate-200 uppercase">Certifications.</span></motion.h2>
                    <div className="w-8 h-0.5 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificationsData.map((cert, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative bg-white border border-slate-100 rounded-[20px] p-5 flex items-start gap-4 hover:border-accent/10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500 shadow-lg">{cert.icon}</div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1"><h3 className="text-[13px] font-black text-slate-900 tracking-tight leading-tight group-hover:text-accent transition-colors">{cert.title}</h3><a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-accent transition-colors"><ExternalLink size={12} /></a></div>
                                <p className="text-[9px] font-black text-accent uppercase tracking-widest mb-2 opacity-80">{cert.issuer} • {cert.date}</p>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-3 line-clamp-2">{cert.desc}</p>
                                <div className="flex flex-wrap gap-1">{cert.tags.map((tag, i) => (<span key={i} className="text-[8px] font-black uppercase tracking-tighter text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded">#{tag}</span>))}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
