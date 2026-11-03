import { Download } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ARTIST_DATA } from '../data/artistData';

export default function ResourcesSection() {
  const { resources } = ARTIST_DATA;

  return (
    <section id="resources" className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 bg-[#08090C] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3 inline-block">
              Community &amp; Open Source
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              FREE 3D ASSETS &amp; GUIDES
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xs sm:text-base font-light text-slate-400">
              Free production-grade base meshes, HDRI studio rigs, and in-depth breakdown guides for 3D artists.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} y={30}>
              <div className="h-full flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 transition-all hover:border-sky-500/40 hover:bg-slate-900/60 shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-md border border-sky-400/30 bg-sky-950/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.size}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <span className="text-xs font-mono text-slate-400 block mb-3">
                    Format: {item.format}
                  </span>

                  <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href={item.downloadUrl}
                    onClick={(e) => {
                      if (item.downloadUrl === '#') {
                        e.preventDefault();
                        alert(`Starting download of ${item.title} (${item.format})`);
                      }
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/80 py-3 text-xs font-semibold uppercase tracking-wider text-sky-300 hover:border-sky-400 hover:bg-sky-500/10 transition-colors no-underline cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Package</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
