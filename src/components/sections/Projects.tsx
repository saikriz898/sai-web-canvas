import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Search,
  X,
  ChevronRight,
  FolderCode,
  CheckCircle2,
  LayoutGrid,
  ListFilter,
  Layers,
  Cpu,
  Terminal
} from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import ProjectModal from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bento' | 'list'>('bento');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Category Filter Tabs
  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'featured', label: 'Featured Case Studies', count: projectsData.filter((p) => p.featured).length },
    { id: 'ai', label: 'AI & Healthcare', count: projectsData.filter((p) => p.category.includes('AI') || p.category.includes('Privacy') || p.category.includes('Healthcare') || p.tech.includes('Python')).length },
    { id: 'fullstack', label: 'Full-Stack Web', count: projectsData.filter((p) => p.tech.includes('React') || p.tech.includes('Node.js') || p.tech.includes('React 19') || p.tech.includes('Next.js') || p.tech.includes('Express.js')).length },
    { id: 'systems', label: 'Java & Systems', count: projectsData.filter((p) => p.tech.includes('Java 11+') || p.tech.includes('C++') || p.tech.includes('Django') || p.category.includes('Systems')).length }
  ];

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      let matchesCat = true;
      if (selectedCategory === 'featured') matchesCat = project.featured;
      else if (selectedCategory === 'ai')
        matchesCat =
          project.category.includes('AI') ||
          project.category.includes('Privacy') ||
          project.category.includes('Healthcare') ||
          project.category.includes('Academic AI') ||
          project.tech.includes('Python') ||
          project.tech.includes('Explainable AI');
      else if (selectedCategory === 'fullstack')
        matchesCat =
          project.tech.includes('React') ||
          project.tech.includes('Node.js') ||
          project.tech.includes('React 19') ||
          project.tech.includes('React 18') ||
          project.tech.includes('Next.js') ||
          project.tech.includes('Express.js');
      else if (selectedCategory === 'systems')
        matchesCat =
          project.tech.includes('Java 11+') ||
          project.tech.includes('C++') ||
          project.tech.includes('Django') ||
          project.category.includes('Systems') ||
          project.category.includes('Enterprise Java');

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Spotlight Flagship Project (RuralDR-XAI) & Featured Partitioning
  const spotlightProject = useMemo(() => projectsData.find((p) => p.id === 'ruraldr-xai') || projectsData[0], []);
  const bentoGridProjects = useMemo(() => filteredProjects.filter((p) => p.id !== spotlightProject.id || selectedCategory !== 'all' || searchQuery !== ''), [filteredProjects, spotlightProject, selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="w-full py-12 sm:py-16 lg:py-20 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Header & Quick Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6 sm:gap-8 text-left">
          <SectionHeader
            badge="PORTFOLIO & CASE STUDIES"
            title="Featured Engineering Projects & "
            highlightTitle="Case Studies."
            description="An evidence-grounded engineering portfolio showcasing explainable AI systems, multi-agent ecosystems, academic evaluation platforms, DPDPA privacy guardians, and enterprise Java architectures."
            className="mb-0 max-w-3xl"
          />

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-neutral-200/90 shadow-xs shrink-0 w-full lg:w-auto">
            <div className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-center flex-1 lg:flex-none">
              <div className="text-lg sm:text-xl font-extrabold font-display leading-tight">{projectsData.length}</div>
              <div className="text-[9px] font-mono font-medium text-neutral-300 uppercase tracking-wider">
                Total Repos
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-center flex-1 lg:flex-none">
              <div className="text-lg sm:text-xl font-extrabold text-neutral-900 font-display leading-tight">
                {projectsData.filter((p) => p.featured).length}
              </div>
              <div className="text-[9px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
                Case Studies
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-center flex-1 lg:flex-none">
              <div className="text-xs font-bold text-emerald-800 font-mono leading-tight">SIH26038</div>
              <div className="text-[9px] font-mono font-medium text-emerald-700 uppercase tracking-wider">
                MathWorks SIH
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar: View Switcher, Category Pills & Live Search */}
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-3 mb-8 sm:mb-12 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-left">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none touch-pan-x">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Utilities: View Mode Toggle & Search */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* View Switcher Toggle */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-xl border border-neutral-200/60">
              <button
                onClick={() => setViewMode('bento')}
                title="Bento Grid Showcase"
                className={`p-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1 cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <LayoutGrid size={15} />
                <span className="hidden sm:inline">Bento</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                title="Dense List Ledger"
                className={`p-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1 cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <ListFilter size={15} />
                <span className="hidden sm:inline">Ledger</span>
              </button>
            </div>

            {/* Live Search Bar */}
            <div className="relative w-full md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search PyTorch, React, Groq, Java..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-10 sm:p-14 text-center my-8 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto mb-3">
              <Search size={22} />
            </div>
            <h3 className="text-base font-bold text-neutral-900 font-display">No projects found</h3>
            <p className="text-xs text-neutral-500 mt-1">
              No builds match your search parameters. Try searching for "React", "Python", "FastAPI", or "PostgreSQL".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10 text-left">
            {/* HERO SPOTLIGHT SHOWCASE (Shown in Bento View when unfiltered) */}
            {viewMode === 'bento' && selectedCategory === 'all' && !searchQuery && spotlightProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-neutral-300/90 rounded-3xl p-6 sm:p-9 lg:p-11 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-neutral-900 text-white text-[11px] font-mono font-bold rounded-md uppercase tracking-wider">
                        Flagship Case Study
                      </span>

                      <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-200/80 text-neutral-800 font-mono text-xs font-semibold rounded-md">
                        {spotlightProject.category}
                      </span>

                      {spotlightProject.metrics && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-semibold rounded-md">
                          <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                          <span>{spotlightProject.metrics}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 font-display tracking-tight leading-tight">
                      {spotlightProject.title}
                    </h3>

                    <p className="font-mono text-xs text-neutral-500 font-semibold">
                      {spotlightProject.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {spotlightProject.desc}
                    </p>

                    {/* Problem vs Solution Split Cards */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/70 text-xs">
                        <span className="font-mono font-bold text-neutral-900 uppercase block mb-1 text-[10px] tracking-wider">
                          Target Challenge
                        </span>
                        <p className="text-neutral-600 line-clamp-2">{spotlightProject.problem}</p>
                      </div>

                      <div className="bg-neutral-900 text-white p-3.5 rounded-xl border border-neutral-800 text-xs">
                        <span className="font-mono font-bold text-neutral-300 uppercase block mb-1 text-[10px] tracking-wider">
                          Engineering Solution
                        </span>
                        <p className="text-neutral-300 line-clamp-2">{spotlightProject.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {spotlightProject.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-neutral-100 text-neutral-800 font-mono text-xs font-medium rounded-md border border-neutral-200/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(spotlightProject)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-mono font-semibold transition-all shadow-xs cursor-pointer group/btn w-full sm:w-auto"
                      >
                        <span>Explore Deep-Dive Case Study</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {spotlightProject.github && spotlightProject.github !== '#' && (
                        <a
                          href={spotlightProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4.5 py-3 bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-800 rounded-xl text-xs font-mono font-semibold transition-colors w-full sm:w-auto text-center"
                        >
                          <Github size={15} />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side System Architecture Block */}
                  <div className="lg:col-span-5 bg-neutral-50/90 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 space-y-4 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3 font-mono text-xs text-neutral-700 font-semibold">
                      <span className="flex items-center gap-2">
                        <FolderCode size={16} className="text-neutral-500 shrink-0" />
                        <span>System Architecture</span>
                      </span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold border border-emerald-200/60">
                        MathWorks Project
                      </span>
                    </div>

                    <div className="space-y-2">
                      {spotlightProject.keyFeatures.slice(0, 4).map((feat, i) => (
                        <div
                          key={i}
                          className="p-3 bg-white rounded-xl border border-neutral-200/70 flex items-center gap-2.5 text-xs font-sans font-medium text-neutral-800 shadow-2xs"
                        >
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-neutral-500 text-center">
                      SIH26038 · Sponsored by MathWorks
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* MODE 1: BENTO MATRIX GRID */}
            {viewMode === 'bento' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                    <FolderCode size={14} />
                    <span>
                      {selectedCategory !== 'all' || searchQuery
                        ? `Filtered Case Studies (${filteredProjects.length})`
                        : 'Featured Engineering Case Studies'}
                    </span>
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {bentoGridProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xs hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-center justify-between gap-2 mb-3.5">
                          <span className="font-mono text-[11px] font-semibold text-neutral-800 bg-neutral-100 px-2.5 py-0.5 rounded-md border border-neutral-200/60">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs text-neutral-400 font-medium">
                            {project.date}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h4 className="text-lg font-bold text-neutral-900 font-display tracking-tight mb-1 group-hover:text-neutral-700 transition-colors">
                          {project.title}
                        </h4>

                        <p className="text-xs font-mono text-neutral-500 mb-3 font-medium leading-relaxed">
                          {project.tagline}
                        </p>

                        {/* Metrics Badge */}
                        {project.metrics && (
                          <div className="mb-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-mono font-semibold rounded-md">
                            <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
                            <span>{project.metrics}</span>
                          </div>
                        )}

                        <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-4 line-clamp-3">
                          {project.desc}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-neutral-100 mb-4">
                          {project.tech.slice(0, 4).map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-neutral-100 text-neutral-700 font-mono text-[11px] font-medium rounded-md border border-neutral-200/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer group/btn"
                          >
                            <span>Case Study</span>
                            <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>

                          <div className="flex items-center gap-2">
                            {project.github && project.github !== '#' && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100"
                                title="GitHub Repository"
                              >
                                <Github size={15} />
                              </a>
                            )}
                            {project.link && project.link !== '#' && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-100"
                                title="Live Preview"
                              >
                                <ExternalLink size={15} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* MODE 2: DENSE ARCHITECTURE LIST LEDGER */}
            {viewMode === 'list' && (
              <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs">
                <div className="p-4 bg-neutral-100/70 border-b border-neutral-200/80 font-mono text-xs font-bold text-neutral-600 grid grid-cols-12 gap-4 items-center uppercase tracking-wider">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-4 sm:col-span-3">Project Title</div>
                  <div className="hidden sm:block col-span-2">Category</div>
                  <div className="col-span-5 sm:col-span-4">Technology Stack</div>
                  <div className="col-span-2 sm:col-span-2 text-right pr-2">Action</div>
                </div>

                <div className="divide-y divide-neutral-100">
                  {filteredProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className="p-4 grid grid-cols-12 gap-4 items-center text-xs hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="col-span-1 font-mono text-neutral-400 font-bold text-center">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div className="col-span-4 sm:col-span-3">
                        <h4 className="font-bold text-neutral-900 font-display group-hover:text-neutral-700 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-[11px] font-mono text-neutral-500 truncate">{project.tagline}</p>
                      </div>

                      <div className="hidden sm:block col-span-2 font-mono text-neutral-600 font-medium">
                        <span className="px-2 py-0.5 bg-neutral-100 rounded-md border border-neutral-200/60 text-[11px]">
                          {project.category}
                        </span>
                      </div>

                      <div className="col-span-5 sm:col-span-4 flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 bg-neutral-100 text-neutral-700 font-mono text-[10px] rounded-md border border-neutral-200/50"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] font-mono text-neutral-400 font-semibold self-center">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="col-span-2 sm:col-span-2 flex items-center justify-end gap-2 pr-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3 py-1 bg-neutral-900 text-white hover:bg-neutral-800 rounded-lg font-mono text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>View</span>
                          <ChevronRight size={12} />
                        </button>
                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-neutral-500 hover:text-neutral-900 transition-colors"
                            title="GitHub"
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Case Study Deep-Dive Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
