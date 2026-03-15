import React from 'react';

const SocialLink = ({ href, icon, hoverClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${hoverClass}`}>{icon}</a>
);

export default SocialLink;
