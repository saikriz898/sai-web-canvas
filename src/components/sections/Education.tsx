import React from 'react';
import { educationData } from '../../data/portfolioData';
import TimelineItem from '../ui/TimelineItem';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full py-16 lg:py-24 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400">
            ACADEMIC FOUNDATION
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight mt-1">
            Education &amp; Qualifications
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto pt-4">
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-neutral-200 -translate-x-1/2" />
          <div className="md:hidden absolute left-4 top-4 bottom-4 w-px bg-neutral-200" />

          <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default Education;
