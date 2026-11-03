import { Cpu } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ARTIST_DATA } from '../data/artistData';

export default function AboutSection() {
  const { hardwareSpecs, softwareTools, processPipeline } = ARTIST_DATA;

  return (
    <section id="about" className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 bg-[#06080B] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* Top Bio & Artist Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Artist Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.1} y={30}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-sky-500 to-blue-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] border border-sky-400/30 bg-slate-950 p-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                    alt="Varun Reddy 3D Artist"
                    className="h-[440px] w-[340px] rounded-[26px] object-cover filter contrast-105"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/75 p-3 backdrop-blur-md text-center">
                    <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block">
                      {ARTIST_DATA.name}
                    </span>
                    <span className="text-[11px] text-slate-300 font-light">
                      Senior 3D Generalist &amp; Lookdev Artist
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Artist Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.2} y={30}>
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                About The Artist
              </span>
              <h2
                className="hero-heading font-black uppercase leading-tight tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 64px)' }}
              >
                CRAFTING DIGITALLY REAL WORLDS.
              </h2>
              <p className="text-sm sm:text-base font-light leading-relaxed text-slate-300">
                {ARTIST_DATA.bio}
              </p>
              <p className="text-sm sm:text-base font-light leading-relaxed text-slate-400">
                With a rigorous focus on anatomical structure, clean quad topology, and physically based rendering (PBR), I construct high-fidelity assets for real-time video game cinematics, commercial product visualization, and high-end automotive launch reels.
              </p>

              {/* Status & Availability Badges */}
              <div className="pt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-2 text-xs font-semibold uppercase text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Freelance Available</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/20 px-4 py-2 text-xs font-semibold uppercase text-sky-300">
                  <span>Full-time / Direct Contract</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-2 text-xs font-semibold uppercase text-purple-300">
                  <span>Collaborations Welcome</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Software Proficiency Grid */}
        <div className="space-y-8">
          <FadeIn delay={0.1} y={20}>
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                Ecosystem &amp; Tech Stack
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Software Proficiency
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {softwareTools.map((tool, idx) => (
              <FadeIn key={tool.name} delay={idx * 0.04} y={20}>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-all hover:border-sky-500/40 hover:bg-slate-900/70">
                  <span className="text-[10px] uppercase font-mono text-sky-400 block mb-1">
                    {tool.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    {tool.level}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Hardware Rig Specifications (Essential for 3D Artists) */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl space-y-6">
          <FadeIn delay={0.1} y={20}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                  Production Studio Rig
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white flex items-center gap-2.5">
                  <Cpu className="h-6 w-6 text-sky-400" />
                  <span>Hardware &amp; Rendering Specifications</span>
                </h3>
              </div>
              <span className="rounded-full border border-sky-400/40 bg-sky-950/40 px-3 py-1 text-xs font-mono text-sky-300 w-fit">
                Dedicated GPU Render Node
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {hardwareSpecs.map((spec, i) => (
              <FadeIn key={spec.component} delay={i * 0.05} y={20}>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                    {spec.component}
                  </span>
                  <div className="text-base font-bold text-white">
                    {spec.spec}
                  </div>
                  <div className="text-xs text-sky-400/80 font-mono mt-1">
                    {spec.detail}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Creative Process Pipeline */}
        <div id="pipeline" className="space-y-8">
          <FadeIn delay={0.1} y={20}>
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                Standard Operating Procedure
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Creative Pipeline &amp; Workflow
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processPipeline.map((proc, index) => (
              <FadeIn key={proc.step} delay={index * 0.06} y={20}>
                <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/30 p-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-black text-sky-400/50 block mb-2">
                      {proc.step}
                    </span>
                    <h4 className="text-base font-bold uppercase text-white mb-2">
                      {proc.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
