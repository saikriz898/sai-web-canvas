import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {project && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center pt-16 sm:pt-20 pb-6 px-4 sm:px-6 text-left overflow-hidden">
          {/* Backdrop (Darkened and blurred over entire page including Navbar) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-300 overflow-hidden z-10 my-auto flex flex-col max-h-[82vh] sm:max-h-[80vh]"
          >
            {/* Fixed Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-200/90 bg-[#fafaf8] shrink-0 relative z-10 shadow-2xs">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-xl bg-neutral-100 hover:bg-neutral-900 hover:text-white border border-neutral-200/90 text-neutral-600 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 pr-10">
                <span className="px-2.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono text-[11px] sm:text-xs font-semibold rounded-md">
                  {project.category}
                </span>

                <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-500 font-mono text-[11px] sm:text-xs rounded-md flex items-center gap-1 border border-neutral-200/50">
                  <Calendar size={12} className="text-neutral-400" />
                  <span>{project.date}</span>
                </span>

                {project.featured && (
                  <span className="px-2.5 py-0.5 bg-neutral-900 text-white font-mono text-[10px] sm:text-[11px] font-semibold rounded-md uppercase tracking-wider">
                    Case Study
                  </span>
                )}

                {project.metrics && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200/80 text-emerald-800 rounded-md font-mono text-[11px] font-semibold">
                    <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display tracking-tight leading-snug">
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1 font-medium leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              className="p-5 sm:p-6 overflow-y-auto custom-scrollbar overscroll-contain space-y-5 flex-1 min-h-0 bg-white"
            >
              {/* Overview */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Project Overview
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Problem vs Solution Comparative Grid */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-neutral-50 border border-neutral-200/80 p-3.5 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-neutral-900 font-mono text-xs font-semibold uppercase mb-1.5">
                    <Layers size={14} className="text-neutral-500 shrink-0" />
                    <span>The Engineering Problem</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-neutral-900 text-white border border-neutral-800 p-3.5 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-neutral-100 font-mono text-xs font-semibold uppercase mb-1.5">
                    <Cpu size={14} className="text-neutral-400 shrink-0" />
                    <span>Architectural Solution</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Capabilities */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  System Features &amp; Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-neutral-50 border border-neutral-200/60 rounded-xl text-xs font-medium text-neutral-800"
                    >
                      <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-1.5 pb-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-neutral-100 text-neutral-800 font-mono text-xs rounded-md border border-neutral-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed Modal Footer */}
            <div className="p-4 sm:px-6 bg-[#fafaf8] border-t border-neutral-200/90 shrink-0 flex items-center justify-between gap-3 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-xs font-mono font-semibold hover:bg-neutral-100 transition-colors cursor-pointer text-center"
              >
                Close Window
              </button>

              <div className="flex items-center gap-2">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-xs font-mono font-semibold hover:bg-neutral-100 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                )}

                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-mono font-semibold hover:bg-neutral-800 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Live App</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
