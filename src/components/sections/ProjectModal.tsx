import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';

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

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto text-left">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-200/80 bg-[#fafaf8] relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Badge variant="accent">{project.category}</Badge>
              <span className="font-mono text-xs text-neutral-400">
                {project.date}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-neutral-900 font-display tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-neutral-600 mt-1 font-medium">
              {project.tagline}
            </p>

            {project.metrics && (
              <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-neutral-800 font-mono text-xs font-semibold">
                <ShieldCheck size={14} className="text-neutral-700" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
            {/* Overview */}
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Overview
              </h3>
              <p className="text-sm text-neutral-700 font-normal leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 border border-neutral-200/80 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-neutral-800 font-mono text-xs font-semibold uppercase mb-1.5">
                  <Layers size={14} className="text-neutral-600" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="bg-neutral-900 text-white border border-neutral-800 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-neutral-200 font-mono text-xs font-semibold uppercase mb-1.5">
                  <Cpu size={14} className="text-neutral-400" />
                  <span>Engineering Solution</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                System Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 bg-neutral-50 border border-neutral-200/60 rounded-lg text-xs font-medium text-neutral-800"
                  >
                    <CheckCircle2 size={15} className="text-neutral-800 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-neutral-100 text-neutral-800 font-mono text-xs rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-[#fafaf8] border-t border-neutral-200/80 flex items-center justify-end gap-3">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs font-mono font-semibold hover:bg-neutral-100 flex items-center gap-2 transition-colors"
              >
                <Github size={14} />
                <span>Repository</span>
              </a>
            )}

            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-mono font-semibold hover:bg-neutral-800 flex items-center gap-2 transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
