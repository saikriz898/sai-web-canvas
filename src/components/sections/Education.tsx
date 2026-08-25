import React from 'react';
import { educationData } from '../../data/portfolioData';
import TimelineItem from '../ui/TimelineItem';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full py-16 lg:py-24 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Education &amp; Qualifications
          </h2>
        </div>

        <div className="relative max-w-3xl text-left border-l-2 border-neutral-200/90 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 py-2">
          {educationData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              total={educationData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
