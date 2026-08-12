import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll to top"
            className="relative w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg shadow-slate-900/10 border border-slate-200 focus:outline-none"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
              <circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="rgba(226, 232, 240, 0.6)"
                strokeWidth="2"
              />
              <motion.circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
                strokeDasharray="0 1"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>

            <ArrowUp size={18} className="text-slate-700 hover:text-indigo-600 transition-colors" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
