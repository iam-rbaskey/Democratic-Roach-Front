"use strict";

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { label: "Home", href: "/#home" },
    { label: "Agenda", href: "/#agenda" },
    { label: "Manifesto", href: "/#manifesto" },
    { label: "Movement", href: "/#why-drf" },
    { label: "Voices", href: "/#voices" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-5xl rounded-full ${
          isScrolled
            ? "top-3 py-2 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-white/70 backdrop-blur-xl border border-drf-border/80"
            : "top-6 py-4 px-6 bg-white/40 backdrop-blur-md border border-drf-border/40"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/#home" className="flex items-center gap-2 group select-none">
            <span className="font-geist font-black text-xl tracking-tighter text-drf-text group-hover:text-drf-red transition-colors duration-300">
              DRF<span className="text-drf-red">.</span>
            </span>
            <div className="hidden sm:block border-l border-drf-border h-4 pl-2">
              <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-text/45">
                Youth Movement
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1.5 relative">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1.5 font-geist font-medium text-xs text-drf-text/75 hover:text-drf-text transition-colors duration-300 rounded-full"
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {hoveredLink === link.label && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-black/[0.04] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#join"
              className="group flex items-center gap-1 px-4 py-1.5 bg-drf-red hover:bg-drf-dark-red text-white text-xs font-semibold rounded-full shadow-[0_4px_12px_rgba(139,0,0,0.2)] hover:shadow-[0_4px_20px_rgba(139,0,0,0.4)] transition-all duration-300"
            >
              Join The Front
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-1.5 text-drf-text hover:text-drf-red rounded-full hover:bg-black/[0.04] transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[99]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-drf-bg-primary z-[100] p-6 shadow-2xl flex flex-col border-l border-drf-border"
            >
              <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 z-10">
                <span className="font-geist font-black text-xl tracking-tighter text-drf-text">
                  DRF<span className="text-drf-red">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-drf-text hover:text-drf-red rounded-full hover:bg-black/[0.04] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 z-10 flex-grow justify-center">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-geist font-black text-3xl tracking-tight text-drf-text hover:text-drf-red transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="z-10 mt-auto">
                <Link
                  href="/#join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-drf-red hover:bg-drf-dark-red text-white text-center font-bold rounded-lg shadow-lg"
                >
                  Join The Front
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-[10px] text-center text-drf-text/35 font-geist-mono uppercase tracking-widest mt-6">
                  Not Left. Not Right. Forward.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
