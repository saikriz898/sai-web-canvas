import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building2,
  ChevronRight,
  X,
  ShieldCheck,
  Github,
  Layers,
  Cpu
} from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { Experience as ExperienceType } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<ExperienceType | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveExp(null);
    };
    if (activeExp) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeExp]);

  return (
    <section id="experience" className="w-full py-12 sm:py-16 bg-white border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <SectionHeader
            badge="EXPERIENCE"
            title="Industry Experience &"
            highlightTitle="Internships."
            description="Professional internship experience, production engineering deliverables, and technical opportunities."
          />
        </div>

        {/* Compact Neat Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 text-left">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#fafaf8] border border-neutral-200/90 rounded-2xl p-5 hover:border-neutral-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 font-mono text-[10px] font-semibold rounded-md border ${
                      exp.upcoming
                        ? 'bg-neutral-900 text-white border-neutral-900 uppercase tracking-wider'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    {exp.type}
                  </span>

                  <span className="font-mono text-xs text-neutral-500 bg-white border border-neutral-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Calendar size={12} className="text-neutral-400 shrink-0" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                {/* Role title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display tracking-tight leading-snug group-hover:text-neutral-600 transition-colors">
                  {exp.role}
                </h3>

                {/* Company • Location line */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-600 mt-1 mb-3">
                  <span className="font-bold text-neutral-900 flex items-center gap-1">
                    <Building2 size={13} className="text-neutral-500 shrink-0" />
                    <span>{exp.company}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-neutral-500">
                    <MapPin size={12} className="text-neutral-400 shrink-0" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-3.5 line-clamp-2">
                  {exp.desc}
                </p>

                {/* Details list preview */}
                <div className="space-y-1.5 mb-4">
                  {exp.details.slice(0, 2).map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2 bg-white border border-neutral-200/60 rounded-lg text-xs text-neutral-800 font-medium leading-snug"
                    >
                      <CheckCircle2 size={13} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech tags & Case Study Action */}
                <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {exp.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white border border-neutral-200 text-neutral-700 font-mono text-[10px] font-medium rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveExp(exp)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-sans font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    <span>Case Study</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Case Study Modal */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence mode="wait">
            {activeExp && (
              <div className="fixed inset-0 z-[999999] flex items-center justify-center pt-16 sm:pt-20 pb-6 px-3 sm:px-5 text-left overflow-hidden">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveExp(null)}
                  className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md cursor-pointer"
                />

                {/* Dialog Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="relative bg-white border border-neutral-300 rounded-3xl max-w-xl w-full shadow-2xl z-10 text-left overflow-hidden my-auto max-h-[78vh] sm:max-h-[80vh] flex flex-col"
                >
                  {/* Fixed Header */}
                  <div className="p-4 sm:p-6 border-b border-neutral-200/80 bg-[#fafaf8] shrink-0 relative z-10 shadow-2xs">
                    <button
                      onClick={() => setActiveExp(null)}
                      className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-xl bg-neutral-100 hover:bg-neutral-900 hover:text-white border border-neutral-200/90 text-neutral-600 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                      aria-label="Close modal"
                    >
                      <X size={16} />
                    </button>

                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 pr-8 sm:pr-0">
                      <span className="px-2.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono text-[11px] font-semibold rounded-md">
                        {activeExp.type}
                      </span>

                      <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-500 font-mono text-[11px] rounded-md flex items-center gap-1">
                        <Calendar size={12} className="text-neutral-400" />
                        <span>{activeExp.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight leading-snug">
                      {activeExp.role}
                    </h3>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-600 mt-1">
                      <span className="font-bold text-neutral-900 flex items-center gap-1">
                        <Building2 size={13} className="text-neutral-500 shrink-0" />
                        <span>{activeExp.company}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-neutral-500">
                        <MapPin size={12} className="text-neutral-400 shrink-0" />
                        <span>{activeExp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Modal Scrollable Body */}
                  <div
                    data-lenis-prevent="true"
                    data-lenis-prevent-wheel="true"
                    data-lenis-prevent-touch="true"
                    className="p-4 sm:p-6 overflow-y-auto custom-scrollbar overscroll-contain space-y-4 sm:space-y-5 flex-1 min-h-0 bg-white"
                  >
                    {/* Executive Overview */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-1.5">
                        Role Overview &amp; Impact
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans font-normal">
                        {activeExp.desc}
                      </p>
                    </div>

                    {/* Impact callout if present */}
                    {activeExp.impact && (
                      <div className="p-3 bg-emerald-50 border border-emerald-200/70 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
                        <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                        <span>{activeExp.impact}</span>
                      </div>
                    )}

                    {/* Key Deliverables */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-2">
                        Key Engineering Deliverables
                      </h4>
                      <div className="space-y-2">
                        {activeExp.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-2.5 bg-neutral-50 border border-neutral-200/60 rounded-xl text-xs font-sans text-neutral-800 leading-relaxed"
                          >
                            <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-2">
                        Technologies &amp; Tools Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pb-2">
                        {activeExp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-md border border-neutral-200/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-3.5 sm:px-6 bg-[#fafaf8] border-t border-neutral-200/90 shrink-0 flex items-center justify-between gap-2.5 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
                    <button
                      onClick={() => setActiveExp(null)}
                      className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-xs font-mono font-semibold hover:bg-neutral-100 transition-colors cursor-pointer text-center"
                    >
                      Close Window
                    </button>

                    <div className="flex items-center gap-2">
                      {activeExp.github && (
                        <a
                          href={activeExp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-xs font-mono font-semibold hover:bg-neutral-100 flex items-center gap-1.5 transition-colors"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}

                      {activeExp.link && activeExp.link !== '#' && (
                        <a
                          href={activeExp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-semibold transition-colors text-center inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>View Portal</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Experience;
