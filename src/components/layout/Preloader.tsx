import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  'SYSTEMS ARCHITECTURE',
  'MULTI-AGENT AI',
  'FULL-STACK ENGINEERING',
  'DESIGN & PURPOSE'
];

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Smooth counter animation from 0% to 100%
    const startTime = Date.now();
    const duration = 1100; // 1.1s total

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProg = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProg);

      // Swap words based on progress
      if (currentProg < 25) setWordIndex(0);
      else if (currentProg < 50) setWordIndex(1);
      else if (currentProg < 75) setWordIndex(2);
      else setWordIndex(3);

      if (currentProg >= 100) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[200] bg-[#fafaf8] text-neutral-900 flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200/40 via-transparent to-transparent -z-10" />

      {/* Top Header Strip */}
      <div className="flex items-center justify-between w-full font-mono text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-neutral-900 tracking-wider">SAI KRISHNAN S</span>
        </div>
        <span className="text-neutral-500 font-medium">PORTFOLIO © 2026</span>
      </div>

      {/* Center Brand & Words */}
      <div className="flex flex-col items-center justify-center my-auto space-y-6">
        {/* Monogram Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-16 h-16 rounded-2xl bg-neutral-900 text-white font-display font-extrabold text-lg flex items-center justify-center shadow-xl border border-neutral-800 relative"
        >
          <span className="text-white font-black tracking-tight font-display">
            SK
          </span>
          <div className="absolute inset-0 rounded-2xl border border-neutral-900/30 animate-ping opacity-25" />
        </motion.div>

        {/* Word Swapper */}
        <div className="h-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="font-mono text-xs font-bold text-neutral-900 tracking-[0.25em] uppercase"
            >
              {WORDS[wordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Fine Loading Bar */}
        <div className="w-48 sm:w-64 h-1 bg-neutral-200 rounded-full overflow-hidden border border-neutral-300/80">
          <motion.div
            className="h-full bg-neutral-900 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex items-end justify-between w-full font-mono text-xs text-neutral-500">
        <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-semibold">
          INITIALIZING EXPERIENCE
        </span>
        <div className="font-display font-black text-4xl sm:text-5xl text-neutral-900 tracking-tighter">
          {progress < 10 ? `0${progress}` : progress}
          <span className="text-neutral-400 text-sm font-mono font-normal">%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
