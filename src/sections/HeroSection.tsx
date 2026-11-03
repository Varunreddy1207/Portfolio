import { useState } from 'react';
import { Play, ArrowDownRight, Menu, X } from 'lucide-react';
import HeroBackground3D from '../components/HeroBackground3D';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ARTIST_DATA } from '../data/artistData';

interface HeroSectionProps {
  onOpenShowreel: () => void;
}

const NAV_LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PIPELINE', href: '#pipeline' },
  { label: 'RESOURCES', href: '#resources' },
  { label: 'CONTACT', href: '#contact' },
];

export default function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#08090C] text-slate-100"
    >
      {/* Interactive 3D Ambient WebGL Background */}
      <HeroBackground3D />

      {/* Header Navigation */}
      <header className="relative z-30">
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between px-6 pt-6 sm:px-8 md:px-12 md:pt-8">
            {/* Monogram Brand */}
            <a
              href="#hero"
              className="group flex items-center gap-3 text-lg font-bold tracking-wider text-white no-underline"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-950/40 text-sm font-black text-sky-300 transition-all group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                VR
              </span>
              <div className="flex flex-col">
                <span className="font-extrabold uppercase tracking-widest text-slate-100 text-sm sm:text-base">
                  {ARTIST_DATA.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-sky-400 font-medium">
                  3D &amp; CGI Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors duration-200 hover:text-sky-400 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Quick Reel Button in Navbar */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenShowreel}
                className="group flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sky-300 transition-all hover:bg-sky-500/20 hover:border-sky-400 cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 text-sky-400 fill-sky-400 group-hover:scale-110 transition-transform" />
                <span>Showreel 2026</span>
              </button>

              <a
                href="#contact"
                className="rounded-full bg-slate-800/80 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200 hover:text-white transition-colors no-underline"
              >
                Inquire
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 lg:hidden cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </FadeIn>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-slate-800 bg-slate-950/95 p-6 backdrop-blur-xl lg:hidden shadow-2xl">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold uppercase tracking-widest text-slate-200 hover:text-sky-400 no-underline"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShowreel();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-sky-500 py-3 text-xs font-bold uppercase tracking-widest text-white cursor-pointer"
                >
                  <Play className="h-4 w-4 fill-white" />
                  <span>Watch Showreel [02:14]</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Center Content */}
      <div className="relative z-10 my-auto flex flex-col items-center px-6 text-center py-12">
        {/* Availability Badge */}
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{ARTIST_DATA.status}</span>
          </div>
        </FadeIn>

        {/* Headline Name */}
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.2} y={40}>
            <h1
              className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
            >
              {ARTIST_DATA.name}
            </h1>
          </FadeIn>
        </div>

        {/* Professional Title Overlay */}
        <FadeIn delay={0.3} y={20}>
          <h2 className="mt-4 text-sm sm:text-lg md:text-xl font-bold uppercase tracking-[0.3em] text-sky-400">
            {ARTIST_DATA.title}
          </h2>
        </FadeIn>

        {/* Subtitle Description */}
        <FadeIn delay={0.4} y={20}>
          <p className="mt-4 max-w-2xl text-center text-xs sm:text-base font-light text-slate-300 leading-relaxed">
            {ARTIST_DATA.tagline}
          </p>
        </FadeIn>

        {/* Dual Hero CTA Buttons */}
        <FadeIn delay={0.5} y={30}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Explore Work CTA */}
            <Magnet padding={80} strength={2}>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 no-underline cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #00C6FF 100%)',
                  boxShadow: '0 0 25px rgba(0, 198, 255, 0.4)',
                }}
              >
                <span>Explore 3D Work</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </Magnet>

            {/* Reel Play Button */}
            <Magnet padding={80} strength={2}>
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-white">
                  <Play className="h-3 w-3 fill-white ml-0.5" />
                </div>
                <span>Play Showreel [02:14]</span>
              </button>
            </Magnet>
          </div>
        </FadeIn>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 pb-8 sm:px-8 md:px-12 md:pb-10 border-t border-slate-800/60 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>PIPELINE: BLENDER • UNREAL 5 • ZBRUSH • SUBSTANCE 3D</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#work" className="hover:text-sky-400 transition-colors no-underline text-slate-400">
            Scroll to Discover ↓
          </a>
        </div>
      </div>
    </section>
  );
}
