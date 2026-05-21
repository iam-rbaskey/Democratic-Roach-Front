"use strict";

"use client";

import { motion } from "framer-motion";
import { UserX, FileWarning, TrendingUp } from "lucide-react";

export default function WhyDRF() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const statCards = [
    {
      icon: <UserX className="w-5 h-5 text-drf-red" />,
      number: "74%",
      label: "Youth Under-representation",
      desc: "College students and young professionals who feel standard political parties ignore their core concerns.",
    },
    {
      icon: <FileWarning className="w-5 h-5 text-drf-red" />,
      number: "₹4.2L Cr+",
      label: "Systemic Leaks & Slush",
      desc: "Estimated public funds lost annually to direct corruption and inefficient bureaucratic middlemen.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-drf-red" />,
      number: "48%",
      label: "Educated Underemployment",
      desc: "Degree holders struggling with stagnant opportunities, out-of-sync curriculum, and lack of meritocratic hiring.",
    },
  ];

  return (
    <section 
      id="why-drf" 
      className="relative py-24 bg-drf-bg-primary overflow-hidden border-t border-drf-border"
    >
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] red-radial-glow pointer-events-none z-0" />
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div variants={itemVariants} className="mb-4">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black">
                THE CRISIS
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-black tracking-tight text-drf-text mb-8 leading-[1.05]"
            >
              India Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-drf-text via-drf-red to-drf-dark-red">
                Stronger Systems.
              </span>
            </motion.h2>

            <div className="flex flex-col gap-6 font-geist text-base text-drf-text/75 leading-relaxed">
              <motion.p variants={itemVariants}>
                For decades, the political landscape has been carved into artificial halves. We are asked to choose Left or Right, traditional or reactionary. Meanwhile, the actual machinery of governance remains sluggish, opaque, and outdated.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Young India—representing the largest cohort of digital-natives on earth—is left out of the equation. We watch our resources leak through systemic loopholes, our merit diluted by nepotism, and our voices siloed into performative debates.
              </motion.p>
              
              <motion.p variants={itemVariants} className="border-l-2 border-drf-red pl-4 py-1.5 italic text-drf-text font-medium bg-black/[0.01]">
                &ldquo;We don&apos;t need ideological theatre. We need an administrative upgrade that guarantees accountability, clean execution, and direct democratic participation.&rdquo;
              </motion.p>

              <motion.p variants={itemVariants}>
                The Democratic Roach Front exists to assemble this counterforce. Like the resilient roach, we are built to survive the harshest political climates, infiltrate closed systems, and rebuild them from the foundation up.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <a 
                href="/manifesto" 
                className="inline-flex items-center gap-2 text-xs font-geist-mono font-bold text-drf-red hover:text-drf-dark-red group transition-colors"
              >
                <span>EXPLORE OUR POLICY ENGINE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 lg:mt-12 w-full">
            {statCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}
                className="glass-card rounded-xl p-6 border border-white/60 relative overflow-hidden transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-[4px] h-full bg-drf-border group-hover:bg-drf-red transition-colors duration-300" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-black/[0.02] border border-drf-border/60">
                    {card.icon}
                  </div>
                  <span className="font-geist font-black text-3xl sm:text-4xl tracking-tighter text-drf-text group-hover:text-drf-red transition-colors duration-300">
                    {card.number}
                  </span>
                </div>

                <h3 className="font-geist font-bold text-sm text-drf-text mb-1.5">
                  {card.label}
                </h3>
                <p className="font-geist text-xs text-drf-text/60 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
