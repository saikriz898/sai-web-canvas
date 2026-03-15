import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[200] bg-[#fcfcfd] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* 3D Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 rounded-[40px] blur-3xl rotate-12"
                />
                <motion.div 
                    animate={{ 
                        rotate: -360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"
                />
            </div>

            <div className="relative flex flex-col items-center">
                {/* 3D Cube/Shape Loader */}
                <div className="relative w-24 h-24 mb-12">
                    <motion.div
                        animate={{
                            rotateX: [0, 90, 180, 270, 360],
                            rotateY: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full border-2 border-accent/20 rounded-2xl relative preserve-3d"
                    >
                        <div className="absolute inset-0 border-2 border-accent rounded-2xl opacity-40 shadow-[0_0_20px_rgba(99,102,241,0.2)]"></div>
                        <div className="absolute inset-4 border-2 border-primary rounded-xl opacity-20"></div>
                    </motion.div>
                </div>

                <div className="text-center relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-[9px] md:text-[10px] font-black text-accent uppercase tracking-[0.4em] md:tracking-[0.8em] mb-3 whitespace-nowrap">Portfolio Architecture</h2>
                        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-2">
                            SAI <span className="text-slate-300">KRISHNAN</span>
                        </h1>
                        
                        {/* Elegant Progress Line */}
                        <div className="w-32 md:w-48 h-[1px] bg-slate-100 mt-6 relative overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] md:tracking-[0.4em] text-center px-4"
            >
                Designing Digital Experiences
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
