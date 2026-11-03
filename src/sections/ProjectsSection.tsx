import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  url: string;
  col1: [string, string];
  col2: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Web Platform',
    name: 'RideCompare',
    url: 'https://github.com/Varunreddy1207/Ridecompare',
    col1: [
      './images/projects/ridecompare-ui.png',
      './images/projects/ridecompare-chip.jpg',
    ],
    col2: './images/projects/ridecompare.png',
  },
  {
    num: '02',
    category: 'Product Platform',
    name: 'PrintFlow',
    url: 'https://github.com/Varunreddy1207',
    col1: [
      './images/projects/printflow-ui.svg',
      './images/projects/printflow.svg',
    ],
    col2: './images/projects/printflow.svg',
  },
  {
    num: '03',
    category: 'Innovation Concept',
    name: 'VOZX Vision',
    url: 'https://github.com/Varunreddy1207',
    col1: [
      './images/projects/vozx-logo.png',
      './images/projects/vozx-car.png',
    ],
    col2: './images/projects/vozx-concept.png',
  },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

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
    <div className="h-[85vh]">
      <motion.div
        className={`sticky top-[calc(6rem+var(--o))] md:top-[calc(8rem+var(--o))] ${RADIUS} border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8`}
        style={
          {
            '--o': `${index * 28}px`,
            scale,
            background: '#0C0C0C',
            transformOrigin: 'top center',
          } as unknown as React.CSSProperties
        }
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} label="Live Project" />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
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

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-[1400px]">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.num}
            project={p}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
