import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data';
import TimelineItem from '../ui/TimelineItem';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[9px] font-black text-accent uppercase tracking-[0.6em] mb-3 block">Evolutionary Path</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">ACADEMIC <span className="text-slate-200 uppercase">Milestones.</span></motion.h2>
                    <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="relative min-h-[420px] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full relative z-10">
                        {educationData.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} total={educationData.length} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
