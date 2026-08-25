import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ShieldCheck, Calendar, Cpu, Layout, Globe, Terminal, Briefcase, Code2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import ProjectModal from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'featured' | 'fullstack' | 'ai'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck size={18} className="text-neutral-800" />,
    Calendar: <Calendar size={18} className="text-neutral-800" />,
    Cpu: <Cpu size={18} className="text-neutral-800" />,
    Layout: <Layout size={18} className="text-neutral-800" />,
    Globe: <Globe size={18} className="text-neutral-800" />,
    Terminal: <Terminal size={18} className="text-neutral-800" />,
    Briefcase: <Briefcase size={18} className="text-neutral-800" />,
    Code2: <Code2 size={18} className="text-neutral-800" />
  };

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'featured') return project.featured;
    if (selectedCategory === 'fullstack') return project.tech.includes('React') || project.tech.includes('Node.js');
    if (selectedCategory === 'ai') return project.tech.includes('Python') || project.tech.includes('Machine Learning');
    return true;
  });

  const featuredProjects = projectsData.filter((p) => p.featured);
  const remainingProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="w-full py-20 lg:py-28 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          badge="SELECTED WORK"
          title="Featured Engineering Projects &"
          highlightTitle="Case Studies."
          description="A curated selection of full-stack web platforms, security tools, and AI recommendation engines built for production and hackathons."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-left">
          {(
            [
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: 'Featured Case Studies' },
              { id: 'fullstack', label: 'Full-Stack Web' },
              { id: 'ai', label: 'AI & Machine Learning' }
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Primary Featured Case Studies Grid */}
        {(selectedCategory === 'all' || selectedCategory === 'featured') && (
          <div className="mb-14 text-left">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-neutral-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                        {iconMap[project.iconName] || <Code2 size={18} className="text-neutral-800" />}
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant="accent">{project.category}</Badge>
                        <span className="font-mono text-xs text-neutral-400">
                          {project.date}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 font-display tracking-tight mb-1.5 group-hover:text-neutral-800 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-neutral-500 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-5">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 font-mono text-xs font-medium rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions Grouped Together */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors group/btn"
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>

                        <div className="flex items-center gap-2 border-l border-neutral-200 pl-3">
                          {project.github && project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                              aria-label="GitHub Repository"
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
                              className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink size={14} />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Projects Registry */}
        <div className="text-left">
          <h3 className="font-mono text-sm font-semibold text-neutral-700 mb-4">
            {selectedCategory === 'all' ? 'Additional Software Projects' : 'Filtered Projects'}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'all' ? remainingProjects : filteredProjects).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-neutral-200/80 p-5 rounded-xl shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2.5">
                    <span className="font-mono text-xs font-medium text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {project.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 font-display tracking-tight mb-1.5">
                    {project.title}
                  </h4>

                  <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="font-mono text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      Case Study
                    </button>
                    <div className="flex items-center gap-3">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                          aria-label="GitHub Repo"
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
                          className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
