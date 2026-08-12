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
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-center mb-8 last:mb-0 text-left"
    >
      {/* Date badge on left for desktop */}
      <div className={`hidden md:block text-right ${isEven ? 'md:col-span-2 md:order-1' : 'md:col-span-2 md:order-3 md:text-left'}`}>
        <span className="font-mono text-xs font-semibold text-neutral-900 bg-white border border-neutral-200 px-3 py-1 rounded-md inline-block shadow-2xs">
          {item.year}
        </span>
      </div>

      {/* Center node */}
      <div className="absolute left-0 md:relative md:left-auto md:order-2 md:col-span-1 flex justify-center items-center">
        <div className="w-8 h-8 rounded-full bg-white border border-neutral-300 flex items-center justify-center z-10 shadow-xs">
          {getIcon(item.school)}
        </div>
      </div>

      {/* Card */}
      <div className={`md:col-span-2 ${isEven ? 'md:order-3' : 'md:order-1'}`}>
        <div className="bg-white border border-neutral-200/80 p-5 rounded-xl hover:border-neutral-300 transition-all">
          <div className="flex justify-between items-start mb-1.5 md:hidden">
            <span className="font-mono text-[10px] font-semibold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">
              {item.year}
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display tracking-tight">
            {item.degree}
          </h3>
          <p className="text-xs font-mono font-medium text-neutral-500 mt-0.5 mb-2">
            {item.school}
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed mb-3">
            {item.desc}
          </p>
          <div className="inline-flex items-center font-mono text-[11px] font-semibold text-neutral-800 bg-neutral-100 px-2.5 py-0.5 rounded">
            {item.highlights}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
