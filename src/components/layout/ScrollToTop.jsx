import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative group w-14 h-14 bg-white/90 backdrop-blur-xl text-slate-900 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
                    >
                        {/* Progress Border */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="26"
                                fill="none"
                                stroke="rgba(0, 0, 0, 0.03)"
                                strokeWidth="2"
                            />
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="26"
                                fill="none"
                                stroke="#6366f1"
                                strokeWidth="2"
                                strokeDasharray="0 1"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                        
                        <ArrowUp size={20} className="relative z-10 text-slate-600 group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
