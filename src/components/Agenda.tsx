"use strict";

"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Vote, 
  ShieldCheck, 
  Mic, 
  Users, 
  Cpu 
} from "lucide-react";

export default function Agenda() {
  const agendaItems = [
    {
      title: "Qualified Leadership",
      icon: <GraduationCap className="w-6 h-6 transition-colors duration-300" />,
      desc: "Mandatory qualification benchmarks and public performance tracking for candidates running for office.",
    },
    {
      title: "Improved Vote System",
      icon: <Vote className="w-6 h-6 transition-colors duration-300" />,
      desc: "Introducing ranked-choice voting models to eliminate candidate pooling and ensure the true majority choice wins.",
    },
    {
      title: "Zero Corruption",
      icon: <ShieldCheck className="w-6 h-6 transition-colors duration-300" />,
      desc: "Blockchain-monitored allocation of public contracts, making every single rupee trackable by any citizen.",
    },
    {
      title: "Independent Media",
      icon: <Mic className="w-6 h-6 transition-colors duration-300" />,
      desc: "Establishing decentralized public-trust models to fund investigations free from corporate or state censorship.",
    },
    {
      title: "Equal Opportunity",
      icon: <Users className="w-6 h-6 transition-colors duration-300" />,
      desc: "A level playing field in education, jobs, and entrepreneurship by dismantling nepotism and patronage systems.",
    },
    {
      title: "Technology & Innovation",
      icon: <Cpu className="w-6 h-6 transition-colors duration-300" />,
      desc: "Modernizing government services through digital architecture, artificial intelligence auditing, and open API nodes.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section 
      id="agenda" 
      className="relative py-24 bg-white overflow-hidden border-t border-drf-border"
    >
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] red-radial-glow opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
            OUR FRAMEWORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-drf-text mb-4">
            The DRF Policy Agenda.
          </h2>
          <p className="text-sm sm:text-base text-drf-text/60 leading-relaxed font-normal">
            We reject vague promises. Here are the six architectural upgrades we are building to secure India&apos;s democratic efficiency.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {agendaItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                borderColor: "#8B0000",
                boxShadow: "0 10px 40px rgba(139, 0, 0, 0.12)",
              }}
              className="glass-card bg-drf-bg-primary/30 border border-drf-border hover:border-drf-red/60 rounded-xl p-8 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-drf-red/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 rounded-lg border border-drf-border group-hover:border-drf-red/50 bg-white group-hover:bg-drf-red/5 flex items-center justify-center text-drf-text group-hover:text-drf-red transition-all duration-300 mb-6 shadow-sm">
                {item.icon}
              </div>

              <h3 className="font-geist font-black text-lg text-drf-text mb-3 tracking-tight group-hover:text-drf-red transition-colors duration-300">
                {item.title}
              </h3>

              <p className="font-geist text-xs text-drf-text/60 leading-relaxed font-normal">
                {item.desc}
              </p>
              
              <span className="absolute bottom-4 right-6 font-geist-mono text-[9px] text-drf-text/10 select-none">
                [0{idx + 1}]
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
