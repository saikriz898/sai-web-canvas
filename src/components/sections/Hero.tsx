import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
  type Variants,
  type Transition
} from 'framer-motion';
import { Github, Linkedin, FileDown, ArrowDown } from 'lucide-react';
import profilePng from '../../assets/Profile.png';
import resumePdf from '../../assets/Sai_Krishnan_S_Resume.pdf';

// ─── PHRASES FOR QUIET FADE-SWAP ────────────────────────────────────────────────
const PHRASES = [
  'AI products',
  'full-stack systems',
  'multi-agent workflows',
  'explainable AI (XAI)',
  'production software'
];

// ─── SHARED SPRING TRANSITION ───────────────────────────────────────────────────
const editorialSpring: Transition = { type: 'spring', stiffness: 90, damping: 22 };

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { ...editorialSpring, delay } }
});

const tagEnter: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 3 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { ...editorialSpring, delay: 0.16 } }
};

// ─── BUILDER TAG — ULTRA-PREMIUM PERSONAL ARTIFACT ──────────────────────────────
const BuilderTag: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle tilt: max 2.5° / 3.5°
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 140, damping: 30 });
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), { stiffness: 140, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - (left + width / 2)) / width);
    mouseY.set((clientY - (top + height / 2)) / height);
  };
  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative">
      {/* Background depth blur zone behind tag */}
      <div className="absolute -inset-4 rounded-3xl bg-neutral-200/40 blur-xl -z-20 pointer-events-none" />

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        whileHover={{ y: -3, transition: { duration: 0.22, ease: 'easeOut' } }}
        className="relative w-[280px] sm:w-[320px] lg:w-[340px] cursor-default"
      >
        {/* Physical depth shadow layer */}
        <div className="absolute inset-0 translate-x-[6px] translate-y-[8px] rounded-2xl bg-neutral-900/[0.08] -z-10 blur-[3px]" />

        {/* Card face — neutral physical material */}
        <div className="rounded-2xl overflow-hidden bg-[#f9f8f6] border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
          {/* PHOTO — primary visual anchor */}
          <div className="relative overflow-hidden aspect-[4/4.8] w-full">
            <img
              src={profilePng}
              alt="Sai Krishnan S"
              className="w-full h-full object-cover object-top"
            />
            {/* Name overlay on photo bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pt-12 pb-3.5 text-left">
              <p className="text-white font-bold text-base tracking-tight leading-none font-display">
                Sai Krishnan S
              </p>
              <p className="text-white/80 text-xs font-medium mt-1 tracking-wide font-mono">
                Builder · Engineer
              </p>
            </div>
          </div>

          {/* Identity details strip */}
          <div className="p-4 space-y-3 text-left bg-white">
            {/* Focus areas */}
            <div>
              <p className="font-mono text-xs text-neutral-400 font-medium tracking-wider mb-0.5 uppercase">
                Focus
              </p>
              <p className="text-xs text-neutral-800 font-semibold tracking-wide">
                AI Systems · Full-Stack · Product Engineering
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-200/80" />

            {/* Education */}
            <div>
              <p className="font-mono text-xs text-neutral-400 font-medium tracking-wider mb-0.5 uppercase">
                Education
              </p>
              <p className="text-xs text-neutral-700 font-medium leading-snug">
                B.Tech CSE &nbsp;·&nbsp; 2024 — 2028
              </p>
              <p className="text-xs text-neutral-500 mt-0.5 leading-snug">
                Sri Eshwar College of Engineering
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── HERO MAIN SECTION (EXACT 100VH) ────────────────────────────────────────────
export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const rawProg = useTransform(scrollY, [40, 520], [0, 1]);
  const smoothProg = useSpring(rawProg, { stiffness: 55, damping: 20 });

  // Parallax Shifts
  const availY = useTransform(smoothProg, [0, 1], [0, -6]);
  const headY = useTransform(smoothProg, [0, 1], [0, -20]);
  const descY = useTransform(smoothProg, [0, 1], [0, -14]);
  const proofY = useTransform(smoothProg, [0, 1], [0, -10]);
  const actionY = useTransform(smoothProg, [0, 1], [0, -8]);
  const tagY = useTransform(smoothProg, [0, 1], [0, -28]);
  const tagRZ = useTransform(smoothProg, [0, 1], [0, -1.5]);
  const tagScale = useTransform(smoothProg, [0, 1], [1, 0.95]);
  const allOp = useTransform(smoothProg, [0, 0.85], [1, 0]);
  const cueOp = useTransform(smoothProg, [0, 0.2], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;
    const t = setInterval(() => setPhraseIndex((i) => (i + 1) % PHRASES.length), 3200);
    return () => clearInterval(t);
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-8 flex flex-col justify-between bg-[#fafaf8] w-full select-none overflow-hidden"
    >
      {/* ══════════════ MAIN CONTENT CONTAINER ══════════════════════════════ */}
      <div className="flex-1 flex items-center w-full my-auto relative z-10">
        <div className="container-custom w-full grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ═══ LEFT COLUMN — ULTRA-PREMIUM EDITORIAL LAYOUT (approx 60%) ════ */}
          <motion.div
            style={isReducedMotion ? {} : { opacity: allOp }}
            className="md:col-span-7 lg:col-span-7 flex flex-col max-w-xl lg:max-w-2xl text-left"
          >
            {/* BLOCK 1: Availability Status Badge */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: availY }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200/90 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-neutral-700 tracking-wide">
                  Available for engineering roles &amp; internships
                </span>
              </div>
            </motion.div>

            {/* BLOCK 2: Greeting & Headline Display Group */}
            <motion.div
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: headY }}
              className="mb-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold text-neutral-900 font-display tracking-tight leading-[1.08]">
                Hi, I'm Sai Krishnan.<br />
                <span className="text-neutral-700 font-semibold">
                  I turn ideas into working software.
                </span>
              </h1>
            </motion.div>

            {/* BLOCK 3: Dynamic Building Rotator & Bio Paragraph */}
            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: descY }}
              className="mb-5 space-y-2.5"
            >
              {/* Building with clarity line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                <span className="font-mono text-xs font-bold text-neutral-900 tracking-wider bg-neutral-900 text-white px-3 py-1 rounded-lg border border-neutral-800 shadow-2xs">
                  BUILDING WITH CLARITY, STRUCTURE &amp; PURPOSE
                </span>
                <span className="text-neutral-300 hidden sm:inline">·</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, y: -3, transition: { duration: 0.2 } }}
                    className="font-mono font-semibold text-neutral-800 text-xs sm:text-sm bg-neutral-100/90 text-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-200/80"
                  >
                    {PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bio paragraph */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg font-normal">
                Computer science engineer exploring AI, full-stack development,
                and product design — turning complex ideas into software people can actually use.
              </p>
            </motion.div>

            {/* BLOCK 4: High-Impact Metric Cards */}
            <motion.div
              variants={fadeUp(0.24)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: proofY }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-neutral-600 mb-6"
            >
              <span className="px-3 py-1.5 bg-white border border-neutral-200/80 rounded-xl shadow-2xs">
                <strong className="font-bold text-neutral-900 font-display text-sm">15</strong> Projects Built
              </span>
              <span className="px-3 py-1.5 bg-white border border-neutral-200/80 rounded-xl shadow-2xs">
                <strong className="font-bold text-neutral-900 font-display text-sm">180+</strong> DSA Solved
              </span>
              <span className="px-3 py-1.5 bg-white border border-neutral-200/80 rounded-xl shadow-2xs">
                <strong className="font-bold text-neutral-900 font-display text-sm">B.Tech</strong> CSE '28
              </span>
            </motion.div>

            {/* BLOCK 5: Unified Action Row */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: actionY }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-mono font-semibold rounded-xl shadow-xs hover:bg-neutral-800 transition-all group"
              >
                <span>View Work</span>
                <ArrowDown
                  size={13}
                  className="text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform"
                />
              </motion.a>

              <motion.a
                href={resumePdf}
                download="Sai_Krishnan_S_Resume.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white text-neutral-800 text-xs font-mono font-semibold rounded-xl border border-neutral-200 shadow-2xs hover:bg-neutral-50 hover:border-neutral-300 transition-all"
              >
                <FileDown size={14} />
                <span>Resume</span>
              </motion.a>

              <div className="h-4 w-px bg-neutral-200/80 hidden sm:block mx-0.5" />

              <div className="flex items-center gap-2">
                <motion.a
                  href="https://github.com/saikriz898"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  aria-label="GitHub"
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200/90 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:shadow-2xs transition-all"
                >
                  <Github size={15} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/saikriz898"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200/90 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:shadow-2xs transition-all"
                >
                  <Linkedin size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT COLUMN — Personal Builder Tag (approx 40%) ═══════════════ */}
          <motion.div
            variants={tagEnter}
            initial="hidden"
            animate="visible"
            style={
              isReducedMotion
                ? {}
                : {
                  y: tagY,
                  scale: tagScale,
                  rotateZ: tagRZ,
                  opacity: allOp
                }
            }
            className="hidden md:flex md:col-span-5 lg:col-span-5 items-center justify-end w-full relative z-10"
          >
            <BuilderTag />
          </motion.div>
        </div>
      </div>

      {/* ══════════════ SCROLL INDICATOR ═════════════════ */}
      <motion.div
        style={isReducedMotion ? {} : { opacity: cueOp }}
        className="pt-2 pb-1 flex justify-center w-full shrink-0 relative z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 group" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-5 bg-gradient-to-b from-transparent via-neutral-400 to-transparent rounded-full"
          />
          <span className="font-mono text-[10px] font-medium tracking-wide text-neutral-400 group-hover:text-neutral-600 transition-colors">
            Scroll to explore
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;


