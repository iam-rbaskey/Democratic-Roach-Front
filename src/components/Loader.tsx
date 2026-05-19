"use strict";

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const logs = [
  "INITIALIZING CORE SYSTEM...",
  "BYPASSING MEDIOCRE STRUCTURES...",
  "ESTABLISHING TRANSPARENCY SHIELD...",
  "COMPILING YOUTH ASPIRATIONS...",
  "LAUNCHING DEMOCRATIC ROACH FRONT...",
];

export default function Loader({ onComplete }: LoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentStep < logs.length) {
      const timeout = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 500); // 500ms per step
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsDone(true);
        setTimeout(onComplete, 800); // Wait for fadeout animation to complete
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-drf-bg-primary p-6"
        >
          {/* Futuristic grid overlay inside the loader */}
          <div className="absolute inset-0 grid-overlay pointer-events-none" />
          <div className="absolute inset-0 red-radial-glow pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
            {/* DRF Stylized Icon Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 flex items-center justify-center"
            >
              <div className="relative w-20 h-20 flex items-center justify-center border border-drf-red rounded-lg overflow-hidden bg-white/50 backdrop-blur-md shadow-[0_0_30px_rgba(139,0,0,0.15)]">
                <span className="font-geist-mono font-black text-2xl tracking-tighter text-drf-red select-none">
                  DRF
                </span>
                {/* Scanner line in the loader icon */}
                <div className="absolute inset-0 w-full h-[2px] bg-drf-red opacity-40 animate-scanline" />
              </div>
            </motion.div>

            {/* Kinetic Text / Slogan Display */}
            <div className="h-20 flex items-center justify-center text-center overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.h1
                    key="left"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-drf-text"
                  >
                    NOT LEFT.
                  </motion.h1>
                )}
                {currentStep === 2 && (
                  <motion.h1
                    key="right"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-drf-text"
                  >
                    NOT RIGHT.
                  </motion.h1>
                )}
                {currentStep >= 4 && (
                  <motion.h1
                    key="forward"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    className="text-5xl md:text-6xl font-black tracking-tighter text-drf-red flex items-center gap-2"
                  >
                    FORWARD<span className="text-drf-text">.</span>
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* Simulated Cyber-Political Terminal Logs */}
            <div className="w-full h-24 border border-drf-border/60 bg-white/40 backdrop-blur-sm rounded p-4 font-geist-mono text-xs text-drf-text/75 select-none flex flex-col justify-end gap-1.5 shadow-sm">
              {logs.slice(0, Math.min(currentStep + 1, logs.length)).map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className={index === logs.length - 1 ? "text-drf-red" : "text-drf-text/60"}>
                    {index === currentStep && currentStep < logs.length ? "❯" : "✔"}
                  </span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-drf-border/50 h-[2px] mt-6 overflow-hidden rounded">
              <motion.div
                className="bg-drf-red h-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(((currentStep + 1) / logs.length) * 100, 100)}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
