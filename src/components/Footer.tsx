"use strict";

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] text-white py-16 overflow-hidden border-t border-drf-red/10">
      <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-drf-red/5 blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="w-full text-center mb-12 select-none">
          <span className="font-geist font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white/5 uppercase block leading-none">
            IGNORED NO MORE.
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 mb-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-geist font-black text-lg tracking-tighter text-white">
              DRF<span className="text-drf-red">.</span>
            </span>
            <span className="font-geist-mono text-[9px] uppercase tracking-widest text-white/45 mt-1 select-none">
              Not Left. Not Right. Forward.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DRF Instagram"
              className="p-2.5 rounded-full border border-white/5 hover:border-drf-red/60 text-white/60 hover:text-drf-red transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DRF X Account"
              className="p-2.5 rounded-full border border-white/5 hover:border-drf-red/60 text-white/60 hover:text-drf-red transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DRF YouTube Channel"
              className="p-2.5 rounded-full border border-white/5 hover:border-drf-red/60 text-white/60 hover:text-drf-red transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                <polygon points="10 15 15 12 10 9" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left select-none text-[10px] font-geist-mono text-white/35 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} DEMOCRATIC ROACH FRONT.
          </div>
          <div className="flex gap-4">
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto v1.0</Link>
            <span>{"//"}</span>
            <Link href="/#join" className="hover:text-white transition-colors">Join Movement</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
