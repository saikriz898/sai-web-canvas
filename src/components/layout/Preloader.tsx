import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[200] bg-[#fafaf8] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center select-none">
        {/* Clean Brand Mark */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-xl bg-neutral-900 text-white font-display font-bold text-sm flex items-center justify-center shadow-2xs mb-3.5"
        >
          SK
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-center"
        >
          <h1 className="text-base font-display font-bold text-neutral-900 tracking-tight">
            Sai Krishnan
          </h1>
          <p className="text-[10px] font-mono font-medium text-neutral-400 mt-0.5 tracking-wider uppercase">
            Builder · Engineer
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
