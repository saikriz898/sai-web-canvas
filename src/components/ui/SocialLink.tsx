import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverClass?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  hoverClass = 'hover:text-indigo-600 hover:border-indigo-600'
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className={`w-11 h-11 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:scale-95 ${hoverClass}`}
  >
    {icon}
  </a>
);

export default SocialLink;
