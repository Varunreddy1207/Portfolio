import { ExternalLink, Github } from 'lucide-react';

interface LiveProjectButtonProps {
  githubUrl?: string;
  liveUrl?: string;
  isConcept?: boolean;
}

export default function LiveProjectButton({
  githubUrl,
  liveUrl,
  isConcept,
}: LiveProjectButtonProps) {
  if (isConcept) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-950/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-sky-300 backdrop-blur-sm sm:px-6 sm:py-3 sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
        Innovation Concept
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-200 transition-all duration-200 hover:border-sky-400 hover:bg-slate-800 hover:text-white sm:px-6 sm:py-3 sm:text-sm no-underline"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          <Github className="h-4 w-4 text-sky-400" />
          <span>Code</span>
        </a>
      )}

      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-600/20 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-sky-200 transition-all duration-200 hover:bg-sky-500/30 hover:text-white sm:px-6 sm:py-3 sm:text-sm no-underline"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          <span>Live Demo</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      ) : (
        <a
          href={githubUrl || '#projects'}
          target={githubUrl ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-transparent px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300 sm:px-6 sm:py-3 sm:text-sm no-underline"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          <span>Explore</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
