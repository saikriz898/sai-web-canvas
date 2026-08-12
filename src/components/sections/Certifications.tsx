import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-16 lg:py-20 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-8 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400">
            VERIFIED CREDENTIALS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Certifications &amp; Specializations
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-neutral-200/90 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-300 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-neutral-900 font-display tracking-tight">
                    {cert.title}
                  </h4>
                  <span className="font-mono text-[10px] text-neutral-400 shrink-0 ml-2">
                    {cert.date}
                  </span>
                </div>

                <p className="font-mono text-xs text-neutral-700 font-semibold mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-3">
                  {cert.desc}
                </p>

                {cert.score && (
                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-3">
                    <ShieldCheck size={13} />
                    <span>{cert.score}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-neutral-100">
                {cert.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono font-medium text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded"
                  >
                    #{tag}
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

export default Certifications;
