import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Code2 } from 'lucide-react';
import { codingProfilesData } from '../../data/portfolioData';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';

export const CodingProfiles: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    SiLeetcode: <SiLeetcode className="text-[#FFA116]" size={26} />,
    SiHackerrank: <SiHackerrank className="text-[#2EC866]" size={26} />,
    SiCodechef: <SiCodechef className="text-[#5B4638]" size={26} />
  };

  return (
    <section id="coding-profiles" className="w-full py-16 lg:py-20 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-8 text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 border border-neutral-200/90 px-2.5 py-1 rounded-md">
            PROBLEM SOLVING PROOF
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Competitive Coding Platforms
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {codingProfilesData.map((profile, idx) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-neutral-200/90 p-5 rounded-xl hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                    {iconMap[profile.iconName] || <Code2 size={24} />}
                  </div>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 font-display tracking-tight">
                  {profile.platform}
                </h3>
                <p className="font-mono text-xs text-neutral-600 font-medium mb-3">
                  @{profile.username}
                </p>

                <div className="space-y-1 font-mono text-xs text-neutral-600">
                  <div className="flex items-center gap-1.5 font-medium">
                    <TrendingUp size={13} className="text-emerald-600" />
                    <span>{profile.stats}</span>
                  </div>
                  <div className="text-xs text-neutral-500">
                    {profile.rating}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
