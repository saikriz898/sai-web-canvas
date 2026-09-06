import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../../types';
import { GraduationCap, School, BookOpen, Calendar, Award, CheckCircle2 } from 'lucide-react';

interface TimelineItemProps {
  item: EducationItem;
  index: number;
  total: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isDegree = item.id === 'btech-cs';

  const getIcon = (school: string) => {
    if (school.includes('College') || school.includes('Engineering')) {
      return <GraduationCap size={17} className="text-white" />;
    }
    if (school.includes('Higher Secondary')) {
      return <School size={17} className="text-neutral-300" />;
    }
    return <BookOpen size={17} className="text-neutral-300" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative text-left group"
    >
      {/* Node icon on line */}
      <div
        className={`absolute -left-[43px] sm:-left-[59px] top-1.5 w-9 h-9 rounded-xl flex items-center justify-center z-10 shadow-sm border transition-all duration-300 ${
          isDegree
            ? 'bg-neutral-900 border-neutral-800 text-white shadow-md group-hover:scale-105'
            : 'bg-neutral-800 border-neutral-700 text-white'
        }`}
      >
        {getIcon(item.school)}
      </div>

      {/* Content card */}
      <div className="bg-white border border-neutral-200/90 p-6 rounded-2xl hover:border-neutral-900/30 hover:shadow-md transition-all">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display tracking-tight flex items-center gap-2">
              {item.degree}
            </h3>
            <p className="text-xs font-mono font-semibold text-neutral-500 mt-1">
              {item.school}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-200/80 flex items-center gap-1.5">
              <Calendar size={12} className="text-neutral-400" />
              {item.year}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed my-3 font-normal">
          {item.desc}
        </p>

        {/* Highlights Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
            <Award size={13} className="text-emerald-600" />
            <span>{item.highlights}</span>
          </div>
        </div>

        {/* Coursework Tags */}
        {item.courses && item.courses.length > 0 && (
          <div className="pt-3 border-t border-neutral-100">
            <p className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
              Core Coursework &amp; Competencies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.courses.map((course) => (
                <span
                  key={course}
                  className="font-mono text-[11px] font-medium text-neutral-700 bg-neutral-100/80 border border-neutral-200/70 px-2.5 py-0.5 rounded-md flex items-center gap-1"
                >
                  <CheckCircle2 size={10} className="text-neutral-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
