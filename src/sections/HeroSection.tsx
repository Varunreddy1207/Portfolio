import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowDownRight, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { PORTFOLIO_CONFIG } from '../config/portfolioData';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, navLinks } = PORTFOLIO_CONFIG;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-x-clip"
      style={{ background: 'radial-gradient(circle at 50% 15%, #101626 0%, #07090E 75%)' }}
    >
      {/* Subtle Background Glow Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-[40%] h-[280px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Header Navigation */}
      <header className="relative z-30">
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between px-6 pt-6 sm:px-8 md:px-12 md:pt-8">
            {/* Monogram Brand */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 text-lg font-bold tracking-wider text-white no-underline"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-950/40 text-xs font-black text-sky-300 transition-all group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                VR
              </span>
              <span className="hidden sm:inline font-semibold tracking-widest text-slate-200">
                {personal.displayName}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors duration-200 hover:text-sky-400 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA in Navbar */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white no-underline"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sky-300 transition-all hover:border-sky-400 hover:bg-sky-500/20 no-underline"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 lg:hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </FadeIn>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-slate-800 bg-slate-950/95 p-6 backdrop-blur-xl lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold uppercase tracking-widest text-slate-200 hover:text-sky-400 no-underline"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-4 border-t border-slate-800 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-full bg-sky-500 py-2.5 text-sm font-semibold uppercase tracking-widest text-white no-underline"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Massive Title & Badge */}
      <div className="relative z-10 my-auto flex flex-col items-center px-4 text-center">
        {/* Title Badge */}
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300 backdrop-blur-md mb-4 sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span>{personal.heroTitle}</span>
          </div>
        </FadeIn>

        {/* Big Name Heading */}
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.2} y={40}>
            <h1 className="hero-heading w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:text-[13vw] md:text-[14vw] lg:text-[15.5vw]">
              {personal.heroGreeting}
            </h1>
          </FadeIn>
        </div>

        {/* Subtitle */}
        <FadeIn delay={0.3} y={20}>
          <p className="mt-3 max-w-xl text-center text-sm font-light uppercase tracking-widest text-slate-300 sm:text-base md:text-lg">
            {personal.heroSubtitle}
          </p>
        </FadeIn>
      </div>

      {/* Floating Center Profile Container */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 opacity-75 sm:w-[320px] md:w-[390px] lg:w-[440px] sm:opacity-90">
        <FadeIn delay={0.4} y={30}>
          <Magnet
            padding={120}
            strength={2.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            style={{ display: 'block' }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-auto relative overflow-hidden rounded-[32px] border border-sky-400/30 bg-slate-950/70 p-2 backdrop-blur-md shadow-[0_0_50px_rgba(0,198,255,0.15)] transition-all hover:border-sky-400/60"
            >
              <img
                src={personal.avatarUrl}
                alt={`${personal.displayName} Avatar`}
                className="block h-auto w-full rounded-[26px] object-cover"
                draggable={false}
              />
              {/* Subtle Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 px-3 py-1.5 text-center backdrop-blur-md">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-sky-300 sm:text-xs">
                  {personal.fullName}
                </span>
              </div>
            </motion.div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-6 px-6 pb-8 sm:px-8 md:px-12 md:pb-12">
        {/* Short Bio */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex items-center gap-3 text-left">
            <div className="h-8 w-1 rounded-full bg-sky-500 hidden sm:block" />
            <p className="max-w-[280px] text-xs font-light uppercase tracking-wider text-slate-300 sm:text-sm md:max-w-[340px]">
              {personal.education.degree} • {personal.education.university}
            </p>
          </div>
        </FadeIn>

        {/* Hero Dual Action Buttons */}
        <FadeIn delay={0.6} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-200 transition-all duration-300 hover:scale-105 hover:bg-sky-500/25 no-underline"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="h-4 w-4 text-sky-400" />
            </a>
            <ContactButton label="Contact Me" href="#contact" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
