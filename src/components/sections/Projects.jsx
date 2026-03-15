import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data';

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-[#fcfcfd] relative overflow-hidden border-t border-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[9px] font-black text-accent uppercase tracking-[0.6em] mb-3 block">Creative Portfolio</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">SELECTED <span className="text-slate-200">WORKS.</span></motion.h2>
                    <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
                    {projectsData.map((project, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} whileHover={{ y: -5 }} className="group relative bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:border-accent/10 transition-all duration-500 flex flex-col h-full overflow-hidden">
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#fcfcfd] border border-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">{project.icon && React.isValidElement(project.icon) ? React.cloneElement(project.icon, { size: 20 }) : null}</div>
                                <div className="flex gap-2"><a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#fcfcfd] border border-slate-50 text-slate-300 hover:text-slate-900 hover:border-slate-900 transition-all"><Github size={14} /></a><a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#fcfcfd] border border-slate-50 text-slate-300 hover:text-accent hover:border-accent transition-all"><ExternalLink size={14} /></a></div>
                            </div>
                            <div className="flex-grow relative z-10">
                                <div className="flex justify-between items-center mb-2"><span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-accent transition-colors">{project.category}</span><span className="text-[8px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded-md uppercase tracking-widest">{project.date}</span></div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-[11px] text-slate-500 font-medium leading-[1.6] mb-6 line-clamp-3">{project.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-50 relative z-10">
                                {project.tech.map((t, i) => (<span key={i} className="px-2 py-1.5 bg-[#fcfcfd] border border-slate-100 text-slate-400 text-[8px] font-black uppercase tracking-widest rounded-lg group-hover:border-accent/20 group-hover:text-accent transition-colors">{t}</span>))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
