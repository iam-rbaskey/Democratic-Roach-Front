"use strict";

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Manifesto() {
  const proposals = [
    {
      num: "01",
      title: "Decentralized Auditing",
      body: "Empower citizens to request independent public audits of local municipal projects via secure online portals.",
    },
    {
      num: "02",
      title: "The Merit Benchmark",
      body: "Incentivize qualified administrators with verified professional credentials to enter public governance positions.",
    },
    {
      num: "03",
      title: "Decoupled Broadcast Trust",
      body: "Prohibit corporate conglomeration and state ad expenditure in private broadcast media to ensure objective reporting.",
    },
  ];

  return (
    <section 
      id="manifesto" 
      className="relative py-24 bg-white overflow-hidden border-t border-drf-border"
    >
      {/* Subtle layout grid lines */}
      <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none z-0" />
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] red-radial-glow opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-5">
            <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
              THE VISION
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-drf-text mb-8 leading-[1.05] select-none">
              A Vision Beyond <br />
              Political Theatre.
            </h2>
            
            <p className="text-sm text-drf-text/60 leading-relaxed font-normal mb-8 max-w-md">
              We do not seek to win office; we seek to upgrade the system. Our manifesto outlines a modular reform strategy designed to replace outdated administrative practices with digital-age checks and balances.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-drf-text hover:bg-drf-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-[0_10px_30px_rgba(15,15,15,0.08)] hover:shadow-[0_10px_30px_rgba(139,0,0,0.25)] cursor-pointer"
            >
              Read Full Manifesto
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Right Column: Editorial Proposals List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-drf-border">
            {proposals.map((prop, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group"
              >
                {/* Large numbering */}
                <div className="md:col-span-2 font-geist-mono text-3xl font-black text-drf-text/20 group-hover:text-drf-red transition-colors duration-300">
                  {prop.num}
                </div>
                
                {/* Proposal content */}
                <div className="md:col-span-10">
                  <h3 className="font-geist font-black text-lg text-drf-text mb-2 tracking-tight">
                    {prop.title}
                  </h3>
                  <p className="font-geist text-xs sm:text-sm text-drf-text/60 leading-relaxed font-normal">
                    {prop.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
