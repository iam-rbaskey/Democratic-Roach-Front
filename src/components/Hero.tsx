"use strict";

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const symbolY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const symbolRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mainLine1 = "NOT LEFT.";
  const mainLine2 = "NOT RIGHT.";
  
  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-drf-bg-primary pt-24 pb-12 select-none"
    >
      <div className="absolute inset-0 grid-overlay z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-drf-red/10 z-10 pointer-events-none animate-scanline" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-drf-red/5 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] rounded-full bg-drf-red/7 blur-[100px]"
        />
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 500 + 200,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, -150],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute left-1/2 w-1.5 h-1.5 bg-drf-red rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-drf-border rounded-full shadow-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-drf-red animate-pulse" />
            <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-text/60 font-semibold">
              INDIAN YOUTH RENAISSANCE
            </span>
          </motion.div>

          <div className="overflow-hidden flex flex-col font-geist font-black text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[0.9] text-drf-text mb-6">
            <div className="overflow-hidden h-[1.1em] flex items-center justify-center lg:justify-start">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                {mainLine1}
              </motion.span>
            </div>
            
            <div className="overflow-hidden h-[1.1em] flex items-center justify-center lg:justify-start">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                {mainLine2}
              </motion.span>
            </div>
            
            <div className="overflow-hidden h-[1.2em] flex items-center justify-center lg:justify-start">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="text-drf-red flex items-center gap-2 select-none"
              >
                FORWARD<span className="text-drf-text font-black">.</span>
              </motion.span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-drf-text/70 max-w-lg mb-8 font-normal leading-relaxed"
          >
            A youth-driven movement for accountability, merit, transparency, and a stronger India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#join"
              className="w-full sm:w-auto text-center px-8 py-4 bg-drf-red hover:bg-drf-dark-red text-white font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(139,0,0,0.25)] hover:shadow-[0_4px_30px_rgba(139,0,0,0.5)] transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Join The Front</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/manifesto"
              className="w-full sm:w-auto text-center px-8 py-4 bg-transparent hover:bg-black/[0.03] text-drf-text font-bold text-sm border border-drf-border hover:border-drf-text rounded-lg transition-all duration-300"
            >
              Read Manifesto
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: symbolY, rotate: symbolRotate, opacity }}
          className="flex-1 flex justify-center items-center relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center animate-float cursor-pointer z-10"
          >
            <div className="absolute inset-0 rounded-full bg-drf-red/5 blur-[50px] animate-pulse-slow" />
            <div className="absolute inset-6 border border-drf-red/20 rounded-full scale-105 pointer-events-none" />
            <div className="absolute inset-12 border border-drf-border/60 rounded-full pointer-events-none" />

            <div className="w-[85%] h-[85%] glass-card rounded-2xl flex flex-col items-center justify-center p-8 border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group">
              <div className="absolute inset-0 w-full h-[2px] bg-drf-red/20 animate-scanline" />
              
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-32 h-32 text-drf-text group-hover:text-drf-red transition-colors duration-500 mb-4"
              >
                <motion.path 
                  d="M 46.5 37.5 C 38.5 25.5 24.5 16.5 6 13.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />
                <motion.path 
                  d="M 53.5 37.5 C 61.5 25.5 75.5 16.5 94 13.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />

                <motion.path 
                  d="M 44.5 43.5 C 44.5 38.5 55.5 38.5 55.5 43.5 Z" 
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />

                <motion.path 
                  d="M 41.5 45.5 L 32.5 35.5 L 35.5 42" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.path 
                  d="M 38.5 53.5 L 29.5 53.5 L 26.5 61.5" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path 
                  d="M 39.5 64.5 L 34.5 67.5 L 32.5 78.5" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                <motion.path 
                  d="M 58.5 45.5 L 67.5 35.5 L 64.5 42" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.path 
                  d="M 61.5 53.5 L 70.5 53.5 L 73.5 61.5" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path 
                  d="M 60.5 64.5 L 65.5 67.5 L 67.5 78.5" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                <motion.path 
                  d="M 45.5 45.5 C 39.5 47 38.5 54 38.5 62 C 38.5 70 39.5 76 45.5 79.5 Z M 42.5 52 C 40 54 39.5 58 39.5 62 C 39.5 66 40 69 42.5 71 Z" 
                  fill="currentColor"
                  fillRule="evenodd"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />

                <motion.path 
                  d="M 47.5 45.5 L 47.5 81.5 L 49.5 81.5 L 49.5 63.5 H 50.5 L 52 81.5 H 54 L 52 61.5 C 52.8 59.5 53.2 57 53.2 54.5 C 53.2 49 51 45.5 47.5 45.5 Z M 49.5 50.5 H 51 C 51.8 50.5 52.2 51.5 52.2 54 C 52.2 56.5 51.8 57.5 51 57.5 H 49.5 Z" 
                  fill="currentColor"
                  fillRule="evenodd"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />

                <motion.path 
                  d="M 54.5 45.5 C 60.5 47 61.5 54 61.5 62 C 61.5 70 60.5 76 54.5 79.5 Z M 56.5 52 H 60.5 V 57.5 H 56.5 Z M 56.5 62.5 H 60.5 V 74.5 C 58.5 72.5 56.5 67.5 56.5 62.5 Z" 
                  fill="currentColor"
                  fillRule="evenodd"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </svg>
              
              <div className="text-center">
                <span className="font-geist-mono text-[10px] tracking-[0.2em] font-black uppercase text-drf-text/50 block mb-1">
                  SYSTEM CORE
                </span>
                <span className="font-geist font-bold text-xs text-drf-red/80 tracking-tight">
                  DEMOCRATIC ROACH FRONT
                </span>
              </div>

              <div className="absolute top-4 left-4 font-geist-mono text-[9px] text-drf-text/30">[00]</div>
              <div className="absolute bottom-4 right-4 font-geist-mono text-[9px] text-drf-text/30">[FWD]</div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <a 
          href="#why-drf" 
          className="flex flex-col items-center gap-2 group hover:text-drf-red transition-colors duration-300 text-drf-text/45 font-geist-mono text-[10px] tracking-[0.25em]"
        >
          <span>SCROLL TO MOVE FORWARD</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-drf-border group-hover:border-drf-red flex items-center justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
