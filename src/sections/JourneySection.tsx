import FadeIn from '../components/FadeIn';
import { PORTFOLIO_CONFIG } from '../config/portfolioData';

export default function JourneySection() {
  const { journeyMilestones } = PORTFOLIO_CONFIG;

  return (
    <section
      id="journey"
      className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #07090E 0%, #0C101A 50%, #07090E 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3 inline-block">
              Progression &amp; Growth
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              MY JOURNEY
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base font-light text-slate-400">
              A genuine, milestone-by-milestone development timeline of my path in software and artificial intelligence.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12 sm:space-y-16">
          {journeyMilestones.map((milestone, i) => (
            <FadeIn key={milestone.num} delay={i * 0.1} y={30}>
              <div className="relative group">
                {/* Milestone Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-sky-400 bg-slate-950 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform">
                  <span className="text-[10px] sm:text-xs font-black">{milestone.num}</span>
                </div>

                {/* Milestone Card */}
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/70 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="rounded-md border border-sky-400/30 bg-sky-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
                      {milestone.focus}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Phase {milestone.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-slate-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
