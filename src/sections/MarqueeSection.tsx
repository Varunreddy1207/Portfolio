import { useEffect, useRef, useState } from 'react';
import { Cpu, Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioData';

export default function MarqueeSection() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const { tickerItems } = PORTFOLIO_CONFIG;
  const row1 = tickerItems;
  const row2 = [...tickerItems].reverse();

  useEffect(() => {
    const SPEED_ROW1 = 45; // pixels per second
    const SPEED_ROW2 = 35;

    const animate = (time: number) => {
      if (lastTimeRef.current !== 0) {
        const delta = (time - lastTimeRef.current) / 1000;
        setOffset1((prev) => (prev + delta * SPEED_ROW1) % 2400);
        setOffset2((prev) => (prev - delta * SPEED_ROW2) % 2400);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const tripled = (arr: string[]) => [...arr, ...arr, ...arr, ...arr];

  return (
    <section
      className="relative z-10 border-y border-slate-800/80 py-8 md:py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #07090E 0%, #0C101A 50%, #07090E 100%)',
      }}
    >
      {/* Decorative gradient masks at edge */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-r from-[#07090E] to-transparent sm:w-36" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-l from-[#07090E] to-transparent sm:w-36" />

      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1 - Left to Right */}
        <div
          className="flex gap-4 sm:gap-6"
          style={{
            transform: `translateX(-${offset1}px)`,
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {tripled(row1).map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full border border-sky-500/20 bg-slate-900/60 px-5 py-2.5 sm:px-7 sm:py-3 backdrop-blur-sm transition-all hover:border-sky-400"
            >
              <Cpu className="h-3.5 w-3.5 text-sky-400" />
              <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-slate-200 whitespace-nowrap">
                {item}
              </span>
              <span className="text-sky-500 text-xs font-bold">•</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div
          className="flex gap-4 sm:gap-6"
          style={{
            transform: `translateX(${offset2}px)`,
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {tripled(row2).map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full border border-slate-700/40 bg-slate-950/70 px-5 py-2.5 sm:px-7 sm:py-3 backdrop-blur-sm transition-all hover:border-sky-400/50"
            >
              <Terminal className="h-3.5 w-3.5 text-sky-400" />
              <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-slate-300 whitespace-nowrap">
                {item}
              </span>
              <span className="text-sky-400/50 text-xs font-bold">//</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
