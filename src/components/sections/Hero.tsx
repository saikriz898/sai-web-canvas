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

// ─── Phrases for quiet fade-swap ──────────────────────────────────────────────
const PHRASES = [
  'AI products',
  'full-stack systems',
  'product interfaces',
  'automation workflows'
];

// ─── Shared spring transition ─────────────────────────────────────────────────
const editorialSpring: Transition = { type: 'spring', stiffness: 90, damping: 22 };

const fadeUp = (delay: number): Variants => ({
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { ...editorialSpring, delay } }
});

const tagEnter: Variants = {
  hidden:  { opacity: 0, y: 24, rotateX: 3 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { ...editorialSpring, delay: 0.18 } }
};

// ─── BUILDER TAG — personal physical artifact ─────────────────────────────────
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
  const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div className="relative">
      {/* Background depth zone behind tag */}
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

          {/* ─ PHOTO — primary visual anchor ─ */}
          <div className="relative overflow-hidden aspect-[4/4.8] w-full">
            <img
              src={profilePng}
              alt="Sai Krishnan S"
              className="w-full h-full object-cover object-top"
            />
            {/* Name overlay on photo bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pt-12 pb-3.5">
              <p className="text-white font-bold text-base tracking-tight leading-none font-display">
                Sai Krishnan S
              </p>
              <p className="text-white/75 text-xs font-medium mt-1 tracking-wide">
                Builder · Engineer
              </p>
            </div>
          </div>

          {/* ─ Identity details strip ─ */}
          <div className="p-4 space-y-3">

            {/* Focus areas */}
            <div>
              <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.2em] mb-0.5">
                Focus
              </p>
              <p className="text-xs text-neutral-800 font-semibold tracking-wide">
                AI · Full-Stack · Product
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-200/80" />

            {/* Education — secondary, muted */}
            <div>
              <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.2em] mb-0.5">
                Education
              </p>
              <p className="text-xs text-neutral-700 font-medium leading-snug">
                B.Tech CSE &nbsp;·&nbsp; 2024 — 2028
              </p>
              <p className="text-[10px] text-neutral-400 mt-0.5 leading-snug">
                Sri Eshwar College of Engineering
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
  const [phraseIndex,     setPhraseIndex]     = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // ── Scroll-driven parallax (natural scroll — no hijacking) ───────────────
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const rawProg    = useTransform(scrollY, [40, 520], [0, 1]);
  const smoothProg = useSpring(rawProg, { stiffness: 55, damping: 20 });

  // Parallax shifts
  const availY    = useTransform(smoothProg, [0, 1], [0,  -6]);
  const headY     = useTransform(smoothProg, [0, 1], [0, -20]);
  const descY     = useTransform(smoothProg, [0, 1], [0, -14]);
  const proofY    = useTransform(smoothProg, [0, 1], [0, -10]);
  const actionY   = useTransform(smoothProg, [0, 1], [0,  -8]);
  const tagY      = useTransform(smoothProg, [0, 1], [0, -28]);
  const tagRZ     = useTransform(smoothProg, [0, 1], [0,  -1.5]);
  const tagScale  = useTransform(smoothProg, [0, 1], [1,   0.95]);
  const allOp     = useTransform(smoothProg, [0, 0.85], [1, 0]);
  const cueOp     = useTransform(smoothProg, [0, 0.2],  [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;
    const t = setInterval(() => setPhraseIndex(i => (i + 1) % PHRASES.length), 3200);
    return () => clearInterval(t);
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[calc(100vh-76px)] pt-24 lg:pt-28 pb-8 flex flex-col justify-between bg-[#fafaf8] w-full select-none overflow-hidden"
    >
      {/* Clean warm background */}

      {/* ══════════════ MAIN CONTENT CONTAINER ══════════════════════════════ */}
      <div className="flex-1 flex items-center w-full my-auto relative z-10">
        <div className="container-custom w-full grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ═══ LEFT — Pure Editorial Layout (approx 60%) ═══════════════════ */}
          <motion.div
            style={isReducedMotion ? {} : { opacity: allOp }}
            className="md:col-span-7 lg:col-span-7 flex flex-col max-w-xl lg:max-w-2xl"
          >

            {/* BLOCK 1: Availability Status */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: availY }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="text-xs text-neutral-500 font-medium tracking-wide">
                Available for engineering roles &amp; internships
              </span>
            </motion.div>

            {/* BLOCK 2: Greeting & Headline Display Group */}
            <motion.div
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: headY }}
              className="mb-5"
            >
              <p className="text-lg sm:text-xl font-bold text-neutral-800 tracking-tight font-display mb-2">
                Hi, I'm Sai Krishnan.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold text-neutral-900 font-display tracking-tight leading-[1.04]">
                I turn ideas into{' '}
                <br className="hidden sm:inline" />
                <span className="text-indigo-600">working software.</span>
              </h1>
            </motion.div>

            {/* BLOCK 3: Building Focus & Bio Group */}
            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: descY }}
              className="mb-6 space-y-2.5"
            >
              {/* Building line */}
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  BUILDING
                </span>
                <span className="text-neutral-300">·</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    className="font-medium text-neutral-700"
                  >
                    {PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bio paragraph */}
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-relaxed max-w-lg">
                I'm a computer science engineer exploring AI, full-stack development,
                and product design — turning ideas into things people can actually use.
              </p>
            </motion.div>

            {/* BLOCK 4: Proof Line (Compact & Simple Typography) */}
            <motion.div
              variants={fadeUp(0.24)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: proofY }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-neutral-500 mb-8"
            >
              <span>
                <strong className="font-bold text-neutral-900 font-display">09</strong>
                {' '}projects built
              </span>
              <span className="text-neutral-300">·</span>
              <span>
                <strong className="font-bold text-neutral-900 font-display">180+</strong>
                {' '}DSA solved
              </span>
              <span className="text-neutral-300">·</span>
              <span>
                <strong className="font-bold text-neutral-900 font-display">B.Tech</strong>
                {' '}CSE '28
              </span>
            </motion.div>

            {/* BLOCK 5: Actions (Buttons on Row 1, Stylish Social Icon Buttons on Next Row) */}
            <motion.div
              variants={fadeUp(0.30)}
              initial="hidden"
              animate="visible"
              style={isReducedMotion ? {} : { y: actionY }}
              className="flex flex-col gap-4"
            >
              {/* Row 1: Primary & Secondary Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}
                  whileTap={{ y: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.14)] hover:bg-neutral-800 transition-all group"
                >
                  <span>View Work</span>
                  <ArrowDown size={13} className="text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  href={resumePdf}
                  download="Sai_Krishnan_S_Resume.pdf"
                  whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                  whileTap={{ y: 1 }}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white text-neutral-800 text-xs font-semibold rounded-xl border border-neutral-200 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:bg-neutral-50 hover:border-neutral-300 transition-all"
                >
                  <FileDown size={14} />
                  <span>Resume</span>
                </motion.a>
              </div>

              {/* Row 2: Social Icon Buttons on Next Line */}
              <div className="flex items-center gap-2.5">
                <motion.a
                  href="https://github.com/saikriz898"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  aria-label="GitHub"
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200/90 bg-white/90 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:shadow-xs transition-all"
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
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200/90 bg-white/90 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:shadow-xs transition-all"
                >
                  <Linkedin size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT — Personal Builder Tag (approx 40%) ══════════════════ */}
          <motion.div
            variants={tagEnter}
            initial="hidden"
            animate="visible"
            style={isReducedMotion ? {} : {
              y: tagY,
              scale: tagScale,
              rotateZ: tagRZ,
              opacity: allOp
            }}
            className="hidden md:flex md:col-span-5 lg:col-span-5 items-center justify-end w-full relative z-10"
          >
            <BuilderTag />
          </motion.div>
        </div>
      </div>

      {/* ══════════════ SCROLL INDICATOR — tiny, editorial ═════════════════ */}
      <motion.div
        style={isReducedMotion ? {} : { opacity: cueOp }}
        className="pt-4 pb-2 flex justify-center w-full shrink-0 relative z-10"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-1.5 group"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-7 bg-gradient-to-b from-transparent via-neutral-400 to-transparent rounded-full"
          />
          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400 group-hover:text-neutral-600 transition-colors">
            scroll
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
