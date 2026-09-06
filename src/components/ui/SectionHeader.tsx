import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightTitle,
  description,
  align = 'left',
  className
}) => {
  const isCenter = align === 'center';
  const marginClass = className !== undefined ? className : 'mb-12 md:mb-16';

  return (
    <div className={`${marginClass} ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'mx-auto' : ''}`}
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {badge}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-[1.12]"
      >
        {title}{' '}
        {highlightTitle && (
          <span className="text-indigo-600 font-black">
            {highlightTitle}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-neutral-600 font-normal leading-relaxed mt-4 max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
