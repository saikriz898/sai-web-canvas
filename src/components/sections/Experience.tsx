import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-20 lg:py-28 bg-white border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          badge="EXPERIENCE"
          title="Industry Experience &"
          highlightTitle="Internships."
          description="Real-world engineering contributions and full-stack software development."
        />

        <div className="space-y-6 text-left">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#fafaf8] border border-neutral-200/90 rounded-2xl p-6 sm:p-8 hover:border-neutral-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-200/80 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-600 mt-1 font-medium">
                    <span className="text-neutral-900 font-bold">@{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={13} className="text-neutral-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 px-3 py-1 rounded-md">
                    {exp.duration}
                  </span>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
                      aria-label="Company Website"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                {exp.desc}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Deliverables &amp; Architecture
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 bg-white border border-neutral-200/60 rounded-xl text-xs text-neutral-700 font-medium"
                    >
                      <CheckCircle2 size={15} className="text-neutral-800 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/80">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white border border-neutral-200 text-neutral-700 font-mono text-[10px] font-medium rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
