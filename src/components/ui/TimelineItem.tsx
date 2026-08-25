import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../../types';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface TimelineItemProps {
  item: EducationItem;
  index: number;
  total: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  const getIcon = (school: string) => {
    if (school.includes('College') || school.includes('Engineering')) {
      return <GraduationCap size={16} className="text-neutral-800" />;
    }
    if (school.includes('Higher Secondary')) {
      return <School size={16} className="text-neutral-800" />;
    }
    return <BookOpen size={16} className="text-neutral-800" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative text-left"
    >
      {/* Node icon on line */}
      <div className="absolute -left-[41px] sm:-left-[49px] top-1 w-8 h-8 rounded-full bg-white border border-neutral-300 flex items-center justify-center z-10 shadow-xs">
        {getIcon(item.school)}
      </div>

      {/* Content card */}
      <div className="bg-white border border-neutral-200/80 p-5 sm:p-6 rounded-2xl hover:border-neutral-300 transition-all shadow-xs">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display tracking-tight">
            {item.degree}
          </h3>
          <span className="font-mono text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-md">
            {item.year}
          </span>
        </div>

        <p className="text-xs font-mono font-semibold text-neutral-500 mb-2">
          {item.school}
        </p>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
          {item.desc}
        </p>

        <div className="inline-flex items-center font-mono text-xs font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-md">
          {item.highlights}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
