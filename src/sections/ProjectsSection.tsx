import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PORTFOLIO_CONFIG, Project } from '../config/portfolioData';

const RADIUS = 'rounded-[28px] sm:rounded-[36px] md:rounded-[44px]';

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const rangeStart = index / total;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] py-6">
      <motion.div
        className={`sticky top-[calc(5rem+var(--o))] md:top-[calc(6.5rem+var(--o))] ${RADIUS} border border-slate-700/70 p-5 sm:p-7 md:p-9 shadow-2xl`}
        style={
          {
            '--o': `${index * 24}px`,
            scale,
            background: 'linear-gradient(145deg, #0D111A 0%, #07090E 100%)',
            transformOrigin: 'top center',
          } as unknown as React.CSSProperties
        }
      >
        {/* Card Header Bar */}
        <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-7">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                {project.category}
              </span>
              <h3
                className="font-bold uppercase text-white tracking-wide"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.3rem)' }}
              >
                {project.name}
              </h3>
              <span className="text-xs sm:text-sm text-slate-400 font-light hidden sm:inline">
                {project.tagline}
              </span>
            </div>
          </div>

          <LiveProjectButton
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            isConcept={project.isConcept}
          />
        </div>

        {/* Project Description & Tech Stack */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center justify-between gap-3 border-y border-slate-800/80 py-3.5">
          <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Imagery Layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex w-full sm:w-[42%] flex-col gap-3 sm:gap-4">
            <div className={`overflow-hidden ${RADIUS} border border-slate-800 bg-slate-950/80`}>
              <img
                src={project.col1[0]}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ height: 'clamp(140px, 16vw, 220px)' }}
              />
            </div>
            <div className={`overflow-hidden ${RADIUS} border border-slate-800 bg-slate-950/80`}>
              <img
                src={project.col1[1]}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ height: 'clamp(140px, 18vw, 260px)' }}
              />
            </div>
          </div>
          <div className={`w-full sm:w-[58%] overflow-hidden ${RADIUS} border border-slate-800 bg-slate-950/80`}>
            <img
              src={project.col2}
              alt={`${project.name} main visual`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ minHeight: 'clamp(200px, 28vw, 490px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { projects } = PORTFOLIO_CONFIG;

  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36"
      style={{
        background: 'radial-gradient(circle at 50% 10%, #0E1422 0%, #07090E 80%)',
      }}
    >
      <FadeIn>
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3 inline-block">
            Portfolio Showcase
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
          >
            PROJECTS
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base font-light text-slate-400">
            Real software systems, platforms and technology concepts built and conceptualized by Varun Reddy.
          </p>
        </div>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-[1300px]">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.num}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
