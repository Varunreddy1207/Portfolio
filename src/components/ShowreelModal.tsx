import { useEffect } from 'react';
import { X, Clock, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const { showreel } = ARTIST_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-showreel-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0C0F17] shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
            <h3 id="modal-showreel-title" className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
              CGI &amp; 3D Animation Showreel ({showreel.duration})
            </h3>
            <span className="hidden sm:inline-block rounded-md border border-sky-400/30 bg-sky-950/40 px-2 py-0.5 text-[10px] font-semibold text-sky-300">
              {showreel.resolution}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer"
            aria-label="Close Showreel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body / Video Player */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* 16:9 Video Embed Player */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-lg">
            {/* High quality visual loop representation or embedded video */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&rel=0"
              title="3D Animation & VFX Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>

          {/* Featured Projects in Showreel breakdown list */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-sky-400 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>Timestamps &amp; Featured Productions</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {showreel.projectsFeatured.map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3 hover:border-sky-500/40 transition-colors"
                >
                  <div className="flex items-center gap-1 text-xs font-mono font-bold text-sky-300 bg-sky-950/50 px-2 py-1 rounded">
                    <Clock className="h-3 w-3" />
                    <span>{item.time}</span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-slate-200">
                      {item.title}
                    </h5>
                    <span className="text-[11px] text-slate-400 block font-light">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
