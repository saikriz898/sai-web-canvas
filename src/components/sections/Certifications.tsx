import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-16 lg:py-20 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-8 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Certifications &amp; Specializations
          </h2>
        </div>

        <div className="divide-y divide-neutral-200/90 bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs text-left">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-base font-bold text-neutral-900 font-display tracking-tight">
                    {cert.title}
                  </h4>
                  {cert.score && (
                    <div className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      <ShieldCheck size={13} />
                      <span>{cert.score}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-neutral-600">
                  <span className="font-semibold text-neutral-800">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.desc}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {cert.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-medium text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
                <span className="font-mono text-xs text-neutral-400 ml-2">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
