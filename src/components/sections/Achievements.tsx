import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ShieldCheck, Database, Globe } from 'lucide-react';
import { achievementsData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="text-neutral-800" size={20} />,
    Trophy: <Trophy className="text-amber-600" size={20} />,
    ShieldCheck: <ShieldCheck className="text-neutral-800" size={20} />,
    Database: <Database className="text-neutral-800" size={20} />,
    Globe: <Globe className="text-neutral-800" size={20} />
  };

  return (
    <section id="achievements" className="w-full py-16 lg:py-20 bg-white border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-8 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600">
            RECOGNITIONS &amp; AWARDS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Hackathons &amp; Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {achievementsData.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#fafaf8] border border-neutral-200/80 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-300 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-200/60 flex items-center justify-center">
                    {iconMap[award.iconName] || <Award size={18} className="text-neutral-800" />}
                  </div>
                  <span className="font-mono text-xs text-neutral-500">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-neutral-900 font-display tracking-tight mb-1">
                  {award.title}
                </h3>

                <p className="font-mono text-xs text-neutral-500 mb-2">
                  {award.event}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-4">
                  {award.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">Result</span>
                <span className="font-semibold text-neutral-900">{award.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
