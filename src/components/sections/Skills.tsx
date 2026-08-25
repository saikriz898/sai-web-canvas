import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsDomainData } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa';
import {
  SiMongodb,
  SiDart,
  SiCplusplus,
  SiC,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiFlutter,
  SiPostgresql,
  SiJsonwebtokens,
  SiOpencv
} from 'react-icons/si';
import { Globe, Terminal, Database, Code2, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconComponentMap: Record<string, React.ReactNode> = {
    SiC: <SiC className="text-neutral-700" size={24} />,
    SiCplusplus: <SiCplusplus className="text-neutral-800" size={24} />,
    FaJava: <FaJava className="text-neutral-800" size={24} />,
    FaPython: <FaPython className="text-neutral-800" size={24} />,
    FaJs: <FaJs className="text-neutral-800" size={24} />,
    SiDart: <SiDart className="text-neutral-800" size={24} />,
    FaReact: <FaReact className="text-neutral-800" size={24} />,
    FaNodeJs: <FaNodeJs className="text-neutral-800" size={24} />,
    SiExpress: <SiExpress className="text-neutral-900" size={24} />,
    SiTailwindcss: <SiTailwindcss className="text-neutral-800" size={24} />,
    FaHtml5: <FaHtml5 className="text-neutral-800" size={24} />,
    SiFlutter: <SiFlutter className="text-neutral-800" size={24} />,
    SiPostgresql: <SiPostgresql className="text-neutral-800" size={24} />,
    SiMongodb: <SiMongodb className="text-neutral-800" size={24} />,
    SiMysql: <SiMysql className="text-neutral-800" size={24} />,
    SiDocker: <SiDocker className="text-neutral-800" size={24} />,
    Globe: <Globe className="text-neutral-800" size={24} />,
    SiJsonwebtokens: <SiJsonwebtokens className="text-neutral-800" size={24} />,
    Cpu: <Cpu className="text-neutral-800" size={24} />,
    SiOpencv: <SiOpencv className="text-neutral-800" size={24} />,
    Database: <Database className="text-neutral-800" size={24} />,
    Code2: <Code2 className="text-neutral-800" size={24} />,
    FaGitAlt: <FaGitAlt className="text-neutral-800" size={24} />,
    SiPostman: <SiPostman className="text-neutral-800" size={24} />,
    Terminal: <Terminal className="text-neutral-800" size={24} />,
    FaFigma: <FaFigma className="text-neutral-800" size={24} />
  };

  const activeDomain = skillsDomainData[activeCategoryIndex];

  return (
    <section id="skills" className="w-full py-20 lg:py-28 bg-white border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          badge="TECHNICAL SKILLS"
          title="Engineering Stack &"
          highlightTitle="Capabilities."
          description="A structured overview of core programming languages, web frameworks, databases, and AI tooling."
        />

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 text-left">
          {skillsDomainData.map((domain, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={domain.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'bg-[#fafaf8] text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
                }`}
              >
                {domain.category}
              </button>
            );
          })}
        </div>

        {/* Description */}
        <p className="text-xs font-mono text-neutral-500 mb-8 text-left">
          {activeDomain.description}
        </p>

        {/* Active Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left"
          >
            {activeDomain.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#fafaf8] border border-neutral-200/80 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:border-neutral-300 hover:bg-white transition-all group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  {iconComponentMap[skill.iconName] || <Code2 size={24} className="text-neutral-800" />}
                </div>

                <h3 className="text-xs font-bold text-neutral-900 tracking-tight mb-0.5">
                  {skill.name}
                </h3>

                {skill.level && (
                  <span className="text-xs font-mono text-neutral-500 font-normal">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
