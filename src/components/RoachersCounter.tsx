"use strict";

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  label: string;
  target: number;
  suffix?: string;
}

function StatCounter({ label, target, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const duration = 2000; // 2 seconds
    const end = target;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center select-none">
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-geist font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)] block mb-2"
      >
        {formatNumber(count)}
        {suffix}
      </motion.span>
      <span className="font-geist-mono text-[10px] tracking-[0.25em] font-semibold text-drf-border/60 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function RoachersCounter() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0002] border-t border-drf-red/20">
      {/* Dark Red Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40" 
        style={{
          background: "radial-gradient(circle at 50% 50%, #5E0B15 0%, #0A0002 80%)"
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-[0.04] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-drf-red to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
            REAL-TIME METRICS
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white mb-2">
            The Roach Counter.
          </h2>
          <p className="text-xs sm:text-sm text-drf-border/60 font-normal leading-relaxed">
            Our growing decentralized presence across Indian collegiate systems, workspaces, and digital nodes.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-drf-border/10">
          <StatCounter label="Roachers Joined" target={142854} />
          <StatCounter label="Cities Reached" target={182} />
          <StatCounter label="Concerns Submitted" target={94312} />
          <StatCounter label="Youth Volunteers" target={16400} />
        </div>
      </div>
    </section>
  );
}
