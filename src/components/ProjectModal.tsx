import { useEffect, useState } from 'react';
import { X, Layers, Image as ImageIcon, Box, Sliders } from 'lucide-react';
import { ProjectDetail } from '../data/artistData';
import ThreeDViewer from './ThreeDViewer';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

type WIPTab = 'wireframe' | 'clay' | 'lighting';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeWIP, setActiveWIP] = useState<WIPTab>('wireframe');
  const [activeTab, setActiveTab] = useState<'case-study' | '3d-viewer'>('case-study');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative flex flex-col h-full max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0A0D15] shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-400/30">
              {project.num}
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-sky-400 font-semibold block">
                {project.category} • {project.year}
              </span>
              <h2 id="project-title" className="text-base sm:text-xl font-bold uppercase text-white truncate max-w-lg">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.has3DViewer && (
              <div className="hidden sm:flex items-center rounded-xl border border-slate-700 bg-slate-900/60 p-1">
                <button
                  onClick={() => setActiveTab('case-study')}
                  className={`rounded-lg px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                    activeTab === 'case-study' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gallery &amp; WIP
                </button>
                <button
                  onClick={() => setActiveTab('3d-viewer')}
                  className={`rounded-lg px-3 py-1 text-xs font-semibold uppercase transition-colors ${
                    activeTab === '3d-viewer' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3D WebGL Viewer
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer"
              aria-label="Close Project Modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-10 custom-scrollbar">
          {/* Real-Time 3D Viewport Tab (if selected) */}
          {activeTab === '3d-viewer' && project.has3DViewer ? (
            <div className="space-y-4">
              <ThreeDViewer
                posterImage={project.heroImage}
                projectTitle={project.title}
                meshType={project.meshType}
              />
            </div>
          ) : (
            <>
              {/* Hero Render Banner */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                      {project.client ? `Client: ${project.client}` : 'Self-Directed Production'}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold uppercase text-white">
                      {project.subtitle}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Specs & Metadata Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Production Role
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="rounded-md border border-slate-700/60 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Software Pipeline
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-sky-500/30 bg-sky-950/30 px-2.5 py-1 text-xs font-medium text-sky-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Interactive 3D Available
                  </span>
                  {project.has3DViewer ? (
                    <button
                      onClick={() => setActiveTab('3d-viewer')}
                      className="inline-flex items-center gap-2 rounded-xl border border-sky-400 bg-sky-500/20 px-4 py-2 text-xs font-semibold text-sky-200 hover:bg-sky-500/30 transition-all cursor-pointer"
                    >
                      <Box className="h-4 w-4" />
                      <span>Launch 3D WebGL Inspector</span>
                    </button>
                  ) : (
                    <span className="text-xs text-slate-500">2D Beauty Passes &amp; Compositing</span>
                  )}
                </div>
              </div>

              {/* Project Overview & Concept */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-widest text-sky-400 font-bold">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base font-light leading-relaxed text-slate-300">
                    {project.overview}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-widest text-sky-400 font-bold">
                    Concept &amp; Art Direction
                  </h4>
                  <p className="text-sm sm:text-base font-light leading-relaxed text-slate-300">
                    {project.conceptNotes}
                  </p>
                </div>
              </div>

              {/* Work In Progress (WIP) Showcase Section */}
              <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                      Work In Progress (WIP) Analysis
                    </h4>
                    <p className="text-xs text-slate-400">
                      Toggle between wireframe topology, clay lighting, and beauty passes.
                    </p>
                  </div>

                  {/* WIP Tabs */}
                  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/80 p-1">
                    <button
                      onClick={() => setActiveWIP('wireframe')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                        activeWIP === 'wireframe' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>Wireframe</span>
                    </button>
                    <button
                      onClick={() => setActiveWIP('clay')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                        activeWIP === 'clay' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Sliders className="h-3.5 w-3.5" />
                      <span>Clay Pass</span>
                    </button>
                    <button
                      onClick={() => setActiveWIP('lighting')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                        activeWIP === 'lighting' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ImageIcon className="h-3.5 w-3.5" />
                      <span>Lighting Test</span>
                    </button>
                  </div>
                </div>

                {/* WIP Display Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
                  <img
                    src={project.wipShots[activeWIP]}
                    alt={`${project.title} - ${activeWIP}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-4 rounded-lg bg-black/75 px-3 py-1 text-xs font-mono uppercase text-sky-300 backdrop-blur-md">
                    Pass: {activeWIP.toUpperCase()} VIEWPORT RENDER
                  </div>
                </div>
              </div>

              {/* Final Renders Gallery */}
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                  Final Renders Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.finalRenders.map((render, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
                    >
                      <img
                        src={render.image}
                        alt={render.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <span className="text-xs font-medium text-slate-200">{render.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
