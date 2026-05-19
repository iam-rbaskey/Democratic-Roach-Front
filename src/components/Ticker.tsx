"use strict";

interface TickerProps {
  reverse?: boolean;
  speedClass?: string;
  items?: string[];
}

export default function Ticker({ 
  reverse = false, 
  items = [
    "NOT LEFT.", "NOT RIGHT.", "FORWARD.", 
    "ACCOUNTABILITY NOW.", "MERITOCRACY.", "TRANSPARENCY.", 
    "IGNORED NO MORE.", "INDIA WEARS THE SHIELD.", "BECOME A ROACH.", 
    "ZERO CORRUPTION.", "TECHNOLOGY & OPPORTUNITY."
  ] 
}: TickerProps) {
  // Duplicate items array to make the looping seamless
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-drf-border bg-white py-4 select-none relative z-10 flex">
      <div 
        className={`flex whitespace-nowrap gap-8 text-xs font-geist-mono font-black uppercase tracking-wider ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className={item === "FORWARD." || item === "BECOME A ROACH." ? "text-drf-red" : "text-drf-text"}>
              {item}
            </span>
            <span className="text-drf-border">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
