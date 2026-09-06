import React from 'react';
import { educationData } from '../../data/portfolioData';
import TimelineItem from '../ui/TimelineItem';
import { SectionHeader } from '../ui/SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full py-20 lg:py-28 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          align="center"
          badge="ACADEMIC FOUNDATION"
          title="Education &"
          highlightTitle="Qualifications"
          description="Formal computer science engineering coursework, AI/ML specialization, and core academic credentials."
        />

        <div className="relative max-w-3xl mx-auto text-left border-l-2 border-neutral-300 ml-4 sm:mx-auto pl-6 sm:pl-10 space-y-10 py-2">
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
