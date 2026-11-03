import { useState } from 'react';
import { Box, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ARTIST_DATA, ProjectDetail } from '../data/artistData';

interface WorkSectionProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All Work'
      ? ARTIST_DATA.projects
      : ARTIST_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 bg-[#08090C]">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3 inline-block">
              Selected Works &amp; Case Studies
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              FEATURED 3D WORK
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xs sm:text-base font-light text-slate-400">
              Interactive 3D models, cinematic lookdev, hard-surface modeling, and real-time engine environments.
            </p>
          </div>
        </FadeIn>

        {/* Work Categories Filter Bar */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {ARTIST_DATA.categories.map((category) => {
              const count =
                category === 'All Work'
                  ? ARTIST_DATA.projects.length
                  : ARTIST_DATA.projects.filter((p) => p.category === category).length;

              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'border-sky-400 bg-sky-500/20 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${
                      isActive ? 'bg-sky-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <FadeIn key={project.id} delay={index * 0.08} y={30}>
                <div
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/30 p-4 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] cursor-pointer"
                >
                  {/* Thumbnail / Hero Render Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
                    {/* Render Image with hover switch to GIF / video preview simulation */}
                    <img
                      src={isHovered ? project.previewGif : project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md border border-slate-700/80 bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* 3D Badge if available */}
                    {project.has3DViewer && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md border border-sky-400/40 bg-sky-950/60 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                        <Box className="h-3 w-3" />
                        <span>3D WebGL</span>
                      </div>
                    )}
                  </div>

                  {/* Project Details Bottom Card */}
                  <div className="p-3 pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-mono text-slate-400">{project.year}</span>
                        <span className="text-[11px] font-mono text-sky-400/80">{project.num}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold uppercase text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400 line-clamp-2 font-light">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Software Tags & Action Arrow */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.software.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-[10px] text-slate-400 font-mono"
                          >
                            {tool.split(' ')[0]}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-sky-400 group-hover:translate-x-1 transition-transform">
                        <span>View</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
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
