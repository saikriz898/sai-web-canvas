import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, total }) => {
    const isEven = index % 2 === 0;
    const nodeY = isEven ? 70 : 30;
    const nextNodeY = isEven ? 30 : 70;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative flex flex-col items-center flex-1 h-[420px]"
        >
            <div className="relative w-full h-full flex flex-col items-center px-4">
                <motion.div
                    whileHover={{ y: isEven ? -8 : 8 }}
                    className={`relative z-20 w-full max-w-[260px] bg-white border border-slate-100 p-5 rounded-[24px] shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ${isEven ? 'mt-6' : 'mt-auto mb-6'}`}
                >
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.year}</span>
                        <div className={`w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent scale-90`}>
                            {item.icon && React.isValidElement(item.icon) ? React.cloneElement(item.icon, { size: 14 }) : null}
                        </div>
                    </div>
                    <h3 className="text-sm font-black text-slate-900 tracking-tight mb-0.5 leading-tight">{item.degree}</h3>
                    <p className="text-[9px] font-black text-accent uppercase tracking-widest mb-3 leading-none opacity-80">{item.school}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-[1.5] line-clamp-2 mb-4">{item.desc}</p>
                    <div className="flex">
                        <span className="text-[8px] px-2 py-1 bg-slate-900 text-white font-black rounded-lg uppercase tracking-wider">{item.highlights}</span>
                    </div>
                </motion.div>
                <div className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none" style={{ top: `${nodeY}%` }}>
                    <div className="relative w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-lg">
                        <div className={`w-2 h-2 rounded-full ${item.accent} animate-pulse`}></div>
                    </div>
                </div>
            </div>
            {index < total - 1 && (
                <div className="absolute top-0 left-1/2 h-full w-full pointer-events-none hidden md:block overflow-visible z-10">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                            d={`M 0 ${nodeY} C 40 ${nodeY}, 60 ${nextNodeY}, 100 ${nextNodeY}`}
                            stroke="#e2e8f0"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d={`M 0 ${nodeY} C 40 ${nodeY}, 60 ${nextNodeY}, 100 ${nextNodeY}`}
                            stroke="#6366f1"
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
            )}
        </motion.div>
    );
};

export default TimelineItem;
