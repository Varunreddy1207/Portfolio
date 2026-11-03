import { Cpu, Code2, Server, Database, Brain, Wrench } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_CONFIG, SkillItem } from '../config/portfolioData';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  PROGRAMMING: Code2,
  FRONTEND: Cpu,
  BACKEND: Server,
  DATABASE: Database,
  'AI & TECHNOLOGY': Brain,
  TOOLS: Wrench,
};

function getLevelBadge(level?: SkillItem['level']) {
  if (!level) return null;
  switch (level) {
    case 'Beginner':
      return (
        <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
          Beginner
        </span>
      );
    case 'Fundamentals':
      return (
        <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
          Fundamentals
        </span>
      );
    case 'Learning':
      return (
        <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
          Learning
        </span>
      );
    case 'Core':
      return (
        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
          Core
        </span>
      );
  }
}

export default function SkillsSection() {
  const { skillCategories } = PORTFOLIO_CONFIG;

  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36"
      style={{
        background: 'linear-gradient(180deg, #07090E 0%, #0A0D15 50%, #07090E 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3 inline-block">
              Capabilities &amp; Learning
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              MY TECH STACK
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base font-light text-slate-400">
              Structured into transparent proficiency tiers reflecting my current academic journey and ongoing projects.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6 sm:space-y-8">
          {skillCategories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.category] || Code2;
            return (
              <FadeIn key={cat.num} delay={i * 0.08}>
                <div className="group rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Header: Number & Category Title */}
                    <div className="flex items-start sm:items-center gap-5">
                      <span
                        className="font-black leading-none text-slate-700 transition-colors group-hover:text-sky-500/40"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 64px)' }}
                      >
                        {cat.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-950/40 text-sky-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3
                            className="font-bold uppercase tracking-wider text-white"
                            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                          >
                            {cat.category}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-md">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 md:max-w-lg md:justify-end">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-950/70 px-3.5 py-2 transition-all hover:border-sky-400/60"
                        >
                          <span className="text-xs sm:text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                          {getLevelBadge(skill.level)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
