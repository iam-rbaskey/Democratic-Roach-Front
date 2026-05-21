"use strict";

"use client";

import { MessageSquareDot } from "lucide-react";

export default function YouthVoices() {
  const row1 = [
    {
      location: "Delhi",
      issue: "IIT graduate, coding for food delivery algorithms while the local politician's nephew gets the state tech contract.",
      age: "24",
    },
    {
      location: "Chennai",
      issue: "Our state college charges ₹2.5L per semester but has outdated computers and zero lab equipment. Where does the fund disappear?",
      age: "21",
    },
    {
      location: "Mumbai",
      issue: "Paying a ₹12,000 bribe to get a standard passport verification done. It is treated as the 'mandatory tax' of existence.",
      age: "25",
    },
    {
      location: "Bengaluru",
      issue: "Flooded roads for 3 weeks. The municipality blames rainfall while everyone knows they pocketed the storm-drainage budget.",
      age: "28",
    },
  ];

  const row2 = [
    {
      location: "Patna",
      issue: "My father worked 30 years in public service. He had to pay a ₹50k bribe to get his own hard-earned pension approved.",
      age: "29",
    },
    {
      location: "Jaipur",
      issue: "Government exams leaked three times consecutively. Years of hard work and coaching fees gone down the drain.",
      age: "23",
    },
    {
      location: "Lucknow",
      issue: "We are told to debate religious divisions daily, while our local secondary schools don't even have working toilets.",
      age: "20",
    },
    {
      location: "Kolkata",
      issue: "No venture funding or startup incubation infrastructure outside major tech hubs. Tier-2 youth are locked out.",
      age: "26",
    },
  ];

  const scrollRow1 = [...row1, ...row1, ...row1];
  const scrollRow2 = [...row2, ...row2, ...row2];

  return (
    <section 
      id="voices" 
      className="relative py-24 bg-drf-bg-primary overflow-hidden border-t border-drf-border"
    >
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] red-radial-glow pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
            THE SUBMISSIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-drf-text mb-4">
            Voices The System Ignored.
          </h2>
          <p className="text-sm sm:text-base text-drf-text/60 leading-relaxed font-normal max-w-xl">
            Real complaints submitted anonymously by college students and young professionals across Indian cities.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full select-none">
          <div className="w-full overflow-hidden flex relative py-2">
            <div className="flex gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] pr-6">
              {scrollRow1.map((card, idx) => (
                <div
                  key={idx}
                  className="inline-block w-[300px] sm:w-[380px] h-[180px] whitespace-normal glass-card bg-white border border-drf-border hover:border-drf-red/40 rounded-xl p-6 relative group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(139,0,0,0.08)] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-drf-border/60 pb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquareDot className="w-4 h-4 text-drf-red" />
                      <span className="font-geist-mono text-[10px] font-bold text-drf-text">
                        ANONYMOUS
                      </span>
                    </div>
                    <span className="font-geist-mono text-[9px] text-drf-text/45">
                      {card.location} | Age {card.age}
                    </span>
                  </div>
                  <p className="font-geist text-[11px] sm:text-xs text-drf-text/80 leading-relaxed italic">
                    &ldquo;{card.issue}&rdquo;
                  </p>
                  <div className="absolute bottom-4 right-6 font-geist-mono text-[8px] text-drf-red/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    VERIFIED CLAIM
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-drf-bg-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-drf-bg-primary to-transparent z-10 pointer-events-none" />
          </div>

          <div className="w-full overflow-hidden flex relative py-2">
            <div className="flex gap-6 whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused] pr-6">
              {scrollRow2.map((card, idx) => (
                <div
                  key={idx}
                  className="inline-block w-[300px] sm:w-[380px] h-[180px] whitespace-normal glass-card bg-white border border-drf-border hover:border-drf-red/40 rounded-xl p-6 relative group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(139,0,0,0.08)] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-drf-border/60 pb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquareDot className="w-4 h-4 text-drf-red" />
                      <span className="font-geist-mono text-[10px] font-bold text-drf-text">
                        ANONYMOUS
                      </span>
                    </div>
                    <span className="font-geist-mono text-[9px] text-drf-text/45">
                      {card.location} | Age {card.age}
                    </span>
                  </div>
                  <p className="font-geist text-[11px] sm:text-xs text-drf-text/80 leading-relaxed italic">
                    &ldquo;{card.issue}&rdquo;
                  </p>
                  <div className="absolute bottom-4 right-6 font-geist-mono text-[8px] text-drf-red/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    VERIFIED CLAIM
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-drf-bg-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-drf-bg-primary to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-drf-border/60 bg-white/50 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs text-drf-text/60 font-geist-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span>ALL SUBMISSIONS ARE SANITIZED TO PROTECT USER CONFIDENTIALITY AND SAFETY.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
