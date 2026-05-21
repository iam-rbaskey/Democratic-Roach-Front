"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Landmark, ShieldAlert, Award, Scale, Cpu, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const CORE_PRINCIPLES = [
  {
    icon: ShieldAlert,
    title: "1. Accountability",
    subtitle: "Power without accountability becomes exploitation.",
    desc: "No politician, institution, corporation, or public authority should be above the people.",
    points: ["Transparent governance", "Public responsibility", "Independent investigations", "Citizen oversight"]
  },
  {
    icon: Award,
    title: "2. Merit & Equal Opportunity",
    subtitle: "A nation grows when talent grows.",
    desc: "Opportunities should be based on ability, effort, and skill, not corruption, influence, money, or nepotism.",
    points: ["Quality education", "Fair competition", "Equal access to growth"]
  },
  {
    icon: Landmark,
    title: "3. Integrity",
    subtitle: "Corruption destroys nations silently.",
    desc: "We support zero tolerance for bribery, strict anti-corruption laws, and digital transparency in public spending.",
    points: ["Bribery ban", "Digital expense tracking", "Lifetime office disqualifications"]
  },
  {
    icon: Scale,
    title: "4. Justice",
    subtitle: "Justice delayed is justice denied.",
    desc: "We demand faster courts, police accountability, protection for victims, and equal legal protection for all citizens.",
    points: ["Fast-track judicial processes", "Police performance reviews", "Equal standing before the law"]
  },
  {
    icon: Cpu,
    title: "5. Innovation & Technology",
    subtitle: "India cannot lead the future with outdated systems.",
    desc: "Technology must serve citizens, not surveillance or political manipulation.",
    points: ["AI development & safeguards", "Scientific research funding", "Robust cybersecurity standards"]
  },
  {
    icon: Heart,
    title: "6. Compassion",
    subtitle: "Growth without humanity is failure.",
    desc: "A nation is judged by how it treats the poor, the weak, the elderly, and the struggling.",
    points: ["Dignity in economic struggle", "Support for vulnerable groups", "Decentralized welfare networks"]
  }
];

const AGENDA_ITEMS = [
  {
    num: "01",
    title: "Qualified & Accountable Leadership",
    summary: "India deserves competent leadership.",
    desc: "Mandatory public disclosure of educational qualifications, criminal records, financial assets, and governance performance. We support governance competency training for ministers and public performance audits."
  },
  {
    num: "02",
    title: "Electoral & Voting Reform",
    summary: "The people should control democracy — not money power.",
    desc: "Transparent election funding, stricter action against vote buying, digital transparency in campaign finances, secure voting systems, and public performance tracking for elected representatives."
  },
  {
    num: "03",
    title: "Zero Corruption Policy",
    summary: "Corruption steals jobs, opportunities, healthcare, and the future.",
    desc: "Establishment of fast-track corruption courts, independent anti-corruption bodies, whistleblower protection, public expenditure tracking, and strict punishment for bribery and fraud."
  },
  {
    num: "04",
    title: "Independent & Responsible Media",
    summary: "A democracy cannot survive without free journalism.",
    desc: "Protection of journalists, transparency in media ownership, freedom of investigation, and strong legal action against political intimidation of media houses."
  },
  {
    num: "05",
    title: "Education Reform",
    summary: "Education should create thinkers, innovators, and leaders — not unemployed graduates.",
    desc: "Practical skill-based education, critical thinking, technology-driven learning, reduced commercialization of education, student mental health support, and strict protection against exam corruption."
  },
  {
    num: "06",
    title: "Healthcare for All",
    summary: "Healthcare is a necessity, not a luxury.",
    desc: "Affordable hospitals, stronger public healthcare systems, rural healthcare expansion, mental health awareness, affordable medicines, and emergency healthcare modernization."
  },
  {
    num: "07",
    title: "Jobs, Livelihoods & Entrepreneurship",
    summary: "India’s youth need opportunities, not motivational speeches.",
    desc: "Startup incentives, manufacturing growth, local business support, simplified business registration, and tech skill programs. We believe in the dignity of labour and fair wages for freelancers and gig workers."
  },
  {
    num: "08",
    title: "Economic Transparency",
    summary: "Citizens deserve honesty about the economy.",
    desc: "Transparent public spending, simplified taxation, anti-black money reforms, stronger auditing systems, and responsible use of taxpayer money."
  },
  {
    num: "09",
    title: "Women’s Safety & Empowerment",
    summary: "A safer India is a stronger India.",
    desc: "Fast-track courts for crimes against women, safer public transport, workplace protection, equal opportunities, and stronger support systems for women entrepreneurs and students."
  },
  {
    num: "10",
    title: "Stronger Rural India",
    summary: "India cannot grow if villages are ignored.",
    desc: "Better roads, internet access, irrigation systems, farmer protection, fair crop pricing, storage infrastructure, and rural employment generation."
  },
  {
    num: "11",
    title: "Youth Power",
    summary: "India’s youth are not future voters. They are present builders.",
    desc: "Youth participation in policy discussions, innovation programs, sports and creative development, and national leadership opportunities for young Indians."
  },
  {
    num: "12",
    title: "Environment & Sustainability",
    summary: "Development without sustainability is destruction.",
    desc: "Clean air and water initiatives, river restoration, renewable energy, waste management modernization, and environmentally responsible urban planning."
  }
];

export default function ManifestoPage() {
  const [activeSection, setActiveSection] = useState("vision");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["vision", "principles", "agenda", "commitment"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-drf-bg-primary flex flex-col text-drf-text font-geist">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white border-b border-drf-border overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] red-radial-glow opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-geist-mono uppercase tracking-wider text-drf-text/50 hover:text-drf-red transition-colors duration-300 mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home Node
          </Link>
          
          <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
            OFFICIAL NATIONAL DOCUMENT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-drf-text mb-4">
            Democratic Roach Front<span className="text-drf-red">.</span>
          </h1>
          <p className="font-geist-mono text-xs sm:text-sm tracking-wider text-drf-text/55 uppercase font-bold">
            National Manifesto v1.0 — "NOT LEFT. NOT RIGHT. FORWARD."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 z-20 select-none">
            <div className="flex flex-col gap-6 border-l border-drf-border pl-6 py-2">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-text/40 font-black">
                TABLE OF CONTENTS
              </span>
              
              <nav className="flex flex-col gap-3">
                {[
                  { id: "vision", label: "00. Vision Summary" },
                  { id: "principles", label: "01. Core Principles" },
                  { id: "agenda", label: "02. Reform Agenda" },
                  { id: "commitment", label: "03. Our Commitment" }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`text-left text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeSection === sec.id
                        ? "text-drf-red pl-2 border-l-2 border-drf-red -ml-[26px]"
                        : "text-drf-text/45 hover:text-drf-text/85"
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="col-span-12 lg:col-span-9 flex flex-col gap-24">
            
            <section id="vision" className="scroll-mt-24">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
                SECTION 00
              </span>
              <h2 className="text-3xl font-black tracking-tight text-drf-text mb-6">
                Our Vision
              </h2>
              
              <div className="border-l-4 border-drf-red pl-6 py-4 my-8 bg-white/50 border-y border-r border-drf-border/30 rounded-r-lg">
                <p className="text-xl sm:text-2xl font-black text-drf-text tracking-tight leading-normal max-w-2xl font-geist-mono select-none">
                  “India is not poor in talent.<br />
                  India is not poor in resources.<br />
                  <span className="text-drf-red">India is poor in systems.</span>”
                </p>
              </div>

              <div className="font-geist text-sm sm:text-base text-drf-text/75 leading-relaxed flex flex-col gap-6">
                <p>
                  The Democratic Roach Front (DRF) believes in building an India where opportunity is equalized, merit is rewarded, and governance is fully accountable to the people who build it. The future belongs to the citizen, not political dynasties or privileged networks.
                </p>
                
                <h3 className="font-black text-drf-text tracking-tight text-md mt-4">
                  We stand for an India where:
                </h3>
                <ul className="flex flex-col gap-3 text-xs sm:text-sm pl-4 border-l border-drf-border">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-drf-red shrink-0 mt-0.5" />
                    <span>Every citizen lives with dignity and systemic security.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-drf-red shrink-0 mt-0.5" />
                    <span>Public opportunity is strictly equal and meritocratic.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-drf-red shrink-0 mt-0.5" />
                    <span>Corruption is transparently exposed and strictly punished.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-drf-red shrink-0 mt-0.5" />
                    <span>Governance operations are digitised, open, and audit-ready.</span>
                  </li>
                </ul>

                <p className="font-semibold text-drf-text mt-4">
                  We are not here to create noise. We are here to rebuild systemic frameworks.
                </p>
                <p className="text-xs text-drf-text/50">
                  This movement belongs to students, workers, farmers, entrepreneurs, creators, professionals, and every ordinary Indian who feels ignored by broken systems.
                </p>
              </div>
            </section>

            <section id="principles" className="scroll-mt-24">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
                SECTION 01
              </span>
              <h2 className="text-3xl font-black tracking-tight text-drf-text mb-2">
                Our Core Principles
              </h2>
              <p className="text-xs sm:text-sm text-drf-text/60 mb-10 max-w-xl">
                Our foundational values dictate every policy proposal we stand behind. We believe in decentralized accountability over centralized power.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CORE_PRINCIPLES.map((principle, idx) => {
                  const Icon = principle.icon;
                  return (
                    <div 
                      key={idx}
                      className="glass-card bg-white border border-drf-border/60 p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-drf-red/35 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-drf-red/5 flex items-center justify-center text-drf-red mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <h3 className="font-geist font-black text-base text-drf-text mb-1 tracking-tight">
                        {principle.title}
                      </h3>
                      <p className="font-geist-mono text-[10px] text-drf-red font-bold uppercase tracking-wider mb-2">
                        {principle.subtitle}
                      </p>
                      <p className="font-geist text-xs text-drf-text/60 leading-relaxed mb-4">
                        {principle.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto border-t border-drf-border/40 pt-4">
                        {principle.points.map((pt, pIdx) => (
                          <span 
                            key={pIdx} 
                            className="px-2 py-0.5 bg-drf-bg-primary text-drf-text/75 text-[9px] font-geist-mono uppercase tracking-wider rounded border border-drf-border/50"
                          >
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="agenda" className="scroll-mt-24">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
                SECTION 02
              </span>
              <h2 className="text-3xl font-black tracking-tight text-drf-text mb-2">
                National Reform Agenda
              </h2>
              <p className="text-xs sm:text-sm text-drf-text/60 mb-10 max-w-xl">
                We have compiled a modular, 12-point reform manifesto aimed directly at resolving the structural bottlenecks in India's governance.
              </p>

              <div className="flex flex-col border border-drf-border bg-white rounded-xl divide-y divide-drf-border overflow-hidden">
                {AGENDA_ITEMS.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-drf-bg-primary/20 transition-all duration-300 group"
                  >
                    <div className="md:col-span-2 font-geist-mono text-2xl font-black text-drf-text/15 group-hover:text-drf-red transition-colors duration-300">
                      {item.num}
                    </div>
                    
                    <div className="md:col-span-10">
                      <h3 className="font-geist font-black text-lg text-drf-text mb-1 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-geist-mono text-[10px] text-drf-red font-bold uppercase tracking-wider mb-2">
                        {item.summary}
                      </p>
                      <p className="font-geist text-xs sm:text-sm text-drf-text/60 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="commitment" className="scroll-mt-24 border-t border-drf-border pt-16 mb-12">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
                SECTION 03
              </span>
              
              <h2 className="text-3xl font-black tracking-tight text-drf-text mb-6">
                Our Commitment to the People
              </h2>
              
              <div className="font-geist text-sm sm:text-base text-drf-text/75 leading-relaxed flex flex-col gap-6">
                <p>
                  We commit to listening to citizens, raising unheard voices, questioning systemic power structures, exposing institutional corruption, and fighting for absolute transparency. 
                </p>
                <p className="font-bold text-drf-text">
                  This movement is not built for politicians. It is built for ordinary Indians who are tired of corruption, empty promises, broken services, and political theatre.
                </p>

                <div className="my-6 p-6 bg-white border border-drf-border rounded-xl">
                  <h3 className="font-geist font-black text-lg text-drf-text mb-4 tracking-tight">
                    Our Message
                  </h3>
                  <p className="text-xs sm:text-sm text-drf-text/60 mb-4">
                    India does not need louder slogans or taller campaign banners. India needs stronger systems, better leadership, fair opportunities, and accountable governance. The future belongs to hardworking citizens, skilled youth, honest professionals, and courageous voices.
                  </p>
                  <div className="flex flex-wrap gap-3 font-geist-mono text-[10px] font-bold text-drf-red uppercase tracking-wider">
                    <span>• No Corruption</span>
                    <span>• No Fear</span>
                    <span>• No Propaganda</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-drf-text text-white rounded-xl shadow-[0_15px_40px_rgba(15,15,15,0.08)]">
                <div>
                  <h4 className="text-lg font-black tracking-tight mb-1">
                    Ready to take a stand?
                  </h4>
                  <p className="text-xs text-white/60">
                    Activate your decentralized member node and join the front.
                  </p>
                </div>
                <Link 
                  href="/#join"
                  className="px-6 py-3 bg-drf-red hover:bg-drf-dark-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shrink-0"
                >
                  Register Node Now
                </Link>
              </div>

            </section>

          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}
