import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
    const variants = {
        up: { opacity: 0, y: 40 },
        down: { opacity: 0, y: -40 },
        left: { opacity: 0, x: 40 },
        right: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, y: 0 }
    };
    return (
        <motion.div
            initial={variants[direction]}
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
