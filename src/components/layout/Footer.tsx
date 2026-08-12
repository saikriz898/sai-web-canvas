import React from 'react';
import { ArrowUp } from 'lucide-react';
import { navLinksData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-neutral-950 text-white py-12 border-t border-neutral-800 text-left">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white text-neutral-900 font-display font-extrabold text-xs flex items-center justify-center">
                SK
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">
                Sai Krishnan S
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Builder · Engineer &nbsp;·&nbsp; B.Tech CSE (2024 — 2028)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {navLinksData.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <p>© 2026 Sai Krishnan S · Crafted with purpose &amp; engineering clarity.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
