import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, LucideIcon } from 'lucide-react';

interface TactileButton3DProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const TactileButton3D: React.FC<TactileButton3DProps> = ({
  href,
  label,
  icon: Icon = ArrowDown,
  className = ''
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.12;
    const y = (clientY - (top + height / 2)) * 0.12;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold font-mono text-xs rounded-xl shadow-[0_4px_0_#000,0_8px_16px_-4px_rgba(0,0,0,0.25)] hover:bg-neutral-800 transition-colors select-none ${className}`}
    >
      <span>{label}</span>
      <motion.div
        animate={{ y: isHovered ? 3 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon size={14} className="text-neutral-300" />
      </motion.div>
    </motion.a>
  );
};

export default TactileButton3D;
