import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Cpu,
  Code2,
  GraduationCap,
  BookOpen,
  Search,
  Grid,
  List,
  ExternalLink,
  X,
  CheckCircle2,
  Clock,
  ChevronRight,
  FileCheck
} from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import { Certification } from '../../types';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Icon Mapping Helper
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Award':
        return <Award size={18} className="text-neutral-800" />;
      case 'Cpu':
        return <Cpu size={18} className="text-neutral-800" />;
      case 'GraduationCap':
        return <GraduationCap size={18} className="text-neutral-800" />;
      case 'Code2':
        return <Code2 size={18} className="text-neutral-800" />;
      case 'BookOpen':
        return <BookOpen size={18} className="text-neutral-800" />;
      default:
        return <ShieldCheck size={18} className="text-neutral-800" />;
    }
  };

  // Issuer Brand Style Helper
  const getIssuerBadge = (issuer: string) => {
    if (issuer.includes('IIT Bombay')) {
      return {
        label: 'IIT Bombay Verified'
      };
    }
    if (issuer.includes('Udemy')) {
      return {
        label: 'Udemy Specialization'
      };
    }
    return {
      label: 'NSDC Certified'
    };
  };

  // Categories list & counts
  const categories = useMemo(() => {
    const cats = ['All'];
    certificationsData.forEach((cert) => {
      if (cert.category && !cats.includes(cert.category)) {
        cats.push(cert.category);
      }
    });
    return cats;
  }, []);

  // Filtered Certifications
  const filteredCertifications = useMemo(() => {
    return certificationsData.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.desc.toLowerCase().includes(query) ||
        cert.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="certifications"
      className="w-full py-14 sm:py-20 lg:py-24 bg-[#fafaf8] border-t border-neutral-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-800 mb-3">
              <ShieldCheck size={14} className="text-neutral-700 shrink-0" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                VERIFIED CREDENTIALS &amp; ACADEMICS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 font-display tracking-tight">
              Certifications &amp; Specializations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed font-normal">
              Rigorous credentials validating core algorithmic mastery, national level coding examinations, and specialized software engineering training.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-neutral-200/90 shadow-xs shrink-0 w-full md:w-auto">
            <div className="px-2.5 sm:px-3.5 py-2 rounded-xl bg-neutral-50/90 border border-neutral-100 text-center">
              <div className="text-base sm:text-lg font-extrabold text-neutral-900 font-display">6</div>
              <div className="text-[9px] sm:text-[10px] font-mono font-medium text-neutral-500 uppercase tracking-tight">
                Credentials
              </div>
            </div>
            <div className="px-2.5 sm:px-3.5 py-2 rounded-xl bg-neutral-100/70 border border-neutral-200/80 text-center">
              <div className="text-base sm:text-lg font-extrabold text-neutral-900 font-display">87.5%</div>
              <div className="text-[9px] sm:text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-tight">
                IIT Distinction
              </div>
            </div>
            <div className="px-2.5 sm:px-3.5 py-2 rounded-xl bg-neutral-100/70 border border-neutral-200/80 text-center">
              <div className="text-base sm:text-lg font-extrabold text-neutral-900 font-display">58.5h</div>
              <div className="text-[9px] sm:text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-tight">
                DSA Training
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar: Categories, Search Bar, View Toggles */}
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-2.5 sm:p-3 mb-6 sm:mb-8 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 text-left">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none touch-pan-x">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? certificationsData.length
                  : certificationsData.filter((c) => c.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-neutral-700 text-white'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Layout Toggle Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Search certification or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-0.5"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-neutral-100 border border-neutral-200/80 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <Grid size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                title="List View"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Display: Empty State vs Grid vs List */}
        {filteredCertifications.length === 0 ? (
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 text-center my-6 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto mb-3">
              <Search size={22} />
            </div>
            <h3 className="text-base font-bold text-neutral-900 font-display">
              No matching credentials found
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Try adjusting your filter category or search keyword.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
            <AnimatePresence mode="popLayout">
              {filteredCertifications.map((cert, idx) => {
                const issuerInfo = getIssuerBadge(cert.issuer);

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-white border border-neutral-200/90 hover:border-neutral-300 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 group relative"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-semibold bg-neutral-100 border border-neutral-200 text-neutral-800">
                          {issuerInfo.label}
                        </span>

                        {cert.featured && (
                          <span className="bg-neutral-900 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                          {getIcon(cert.iconName)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-neutral-900 font-display leading-snug tracking-tight group-hover:text-neutral-600 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="font-mono text-xs text-neutral-500 mt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {/* Score / Hours Callout */}
                      {(cert.score || cert.hours) && (
                        <div className="my-3 py-1.5 sm:py-2 px-3 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center justify-between font-mono text-xs">
                          {cert.score && (
                            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                              <ShieldCheck size={14} className="shrink-0" />
                              <span>{cert.score}</span>
                            </div>
                          )}
                          {cert.hours && (
                            <div className="flex items-center gap-1 text-neutral-600 font-medium ml-auto">
                              <Clock size={13} className="text-neutral-400 shrink-0" />
                              <span>{cert.hours}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-4 line-clamp-3">
                        {cert.desc}
                      </p>
                    </div>

                    <div>
                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                        {cert.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md border border-neutral-200/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Actions Footer */}
                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-xs">
                        <span className="text-neutral-400">{cert.date}</span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveCert(cert)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-sans font-semibold transition-colors cursor-pointer"
                          >
                            <span>Details</span>
                            <ChevronRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* LIST VIEW */
          <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs text-left divide-y divide-neutral-200/80">
            <AnimatePresence mode="popLayout">
              {filteredCertifications.map((cert, idx) => {
                const issuerInfo = getIssuerBadge(cert.issuer);

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 hover:bg-neutral-50/80 transition-all duration-200 group"
                  >
                    {/* Left Details */}
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
                        {getIcon(cert.iconName)}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-bold text-neutral-900 font-display tracking-tight group-hover:text-neutral-600 transition-colors">
                            {cert.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-neutral-100 border border-neutral-200 text-neutral-800">
                            {cert.category || 'Certification'}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs text-neutral-500">
                          <span className="font-semibold text-neutral-800">
                            {cert.issuer}
                          </span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          {cert.score && (
                            <>
                              <span>•</span>
                              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                                {cert.score}
                              </span>
                            </>
                          )}
                        </div>

                        <p className="text-xs text-neutral-600 line-clamp-2 sm:line-clamp-1 font-sans">
                          {cert.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Tags & Actions */}
                    <div className="flex flex-wrap items-center justify-between md:justify-end gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100">
                      <div className="hidden sm:flex flex-wrap gap-1">
                        {cert.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveCert(cert)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-900 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ml-auto md:ml-0"
                      >
                        <span>View Details</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Credential Detail Modal */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence mode="wait">
            {activeCert && (
              <div className="fixed inset-0 z-[999999] flex items-center justify-center pt-16 sm:pt-20 pb-6 px-3 sm:px-5 text-left overflow-hidden">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveCert(null)}
                  className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md cursor-pointer"
                />

                {/* Dialog Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="relative bg-white border border-neutral-300 rounded-3xl max-w-xl w-full shadow-2xl z-10 text-left overflow-hidden my-auto max-h-[78vh] sm:max-h-[80vh] flex flex-col"
                >
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-neutral-200/80 bg-[#fafaf8] shrink-0 relative z-10 shadow-2xs">
                    <div className="flex items-start justify-between gap-3 pr-6 sm:pr-0">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 flex items-center justify-center shrink-0">
                          {getIcon(activeCert.iconName)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
                              VERIFIED CREDENTIAL
                            </span>
                            {activeCert.certificateId && (
                              <span className="font-mono text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200/60">
                                ID: {activeCert.certificateId}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display tracking-tight mt-0.5">
                            {activeCert.title}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveCert(null)}
                        className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-xl bg-neutral-100 hover:bg-neutral-900 hover:text-white border border-neutral-200/90 text-neutral-600 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                        aria-label="Close modal"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Modal Scrollable Body */}
                  <div
                    data-lenis-prevent="true"
                    data-lenis-prevent-wheel="true"
                    data-lenis-prevent-touch="true"
                    className="p-4 sm:p-6 overflow-y-auto custom-scrollbar overscroll-contain space-y-4 sm:space-y-5 flex-1 min-h-0 bg-white"
                  >
                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 bg-neutral-50 p-3 sm:p-3.5 rounded-xl border border-neutral-200/60 font-mono text-xs">
                      <div>
                        <div className="text-neutral-400 text-[9px] sm:text-[10px] uppercase">Issuer</div>
                        <div className="font-semibold text-neutral-800 mt-0.5 truncate">
                          {activeCert.issuer}
                        </div>
                      </div>
                      <div>
                        <div className="text-neutral-400 text-[9px] sm:text-[10px] uppercase">Issue Date</div>
                        <div className="font-semibold text-neutral-800 mt-0.5">
                          {activeCert.date}
                        </div>
                      </div>
                      {activeCert.score && (
                        <div>
                          <div className="text-neutral-400 text-[9px] sm:text-[10px] uppercase">Grade / Result</div>
                          <div className="font-semibold text-emerald-700 mt-0.5 truncate">
                            {activeCert.score}
                          </div>
                        </div>
                      )}
                      {activeCert.hours && (
                        <div>
                          <div className="text-neutral-400 text-[9px] sm:text-[10px] uppercase">Duration</div>
                          <div className="font-semibold text-neutral-800 mt-0.5">
                            {activeCert.hours}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Summary */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-1.5">
                        Overview &amp; Scope
                      </h4>
                      <p className="text-xs text-neutral-700 leading-relaxed font-sans font-normal">
                        {activeCert.desc}
                      </p>
                    </div>

                    {/* Skills Validated */}
                    {activeCert.skillsLearned && activeCert.skillsLearned.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-2">
                          Key Competencies Validated
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {activeCert.skillsLearned.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 border border-neutral-200/50 text-xs font-sans text-neutral-800"
                            >
                              <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase text-neutral-400 tracking-wider mb-2">
                        Topic Tags
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pb-2">
                        {activeCert.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md border border-neutral-200/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-3.5 sm:px-6 bg-[#fafaf8] border-t border-neutral-200/90 shrink-0 flex items-center justify-between gap-2.5 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-semibold">
                      <FileCheck size={15} />
                      <span>Verified Authenticity</span>
                    </div>

                    {activeCert.link && activeCert.link !== '#' ? (
                      <a
                        href={activeCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-mono font-semibold transition-colors text-center shadow-xs"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveCert(null)}
                        className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-xs font-mono font-semibold hover:bg-neutral-100 transition-colors cursor-pointer text-center"
                      >
                        Close Window
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Certifications;
