import { GraduationCap, Code2, BrainCircuit, Rocket, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { PORTFOLIO_CONFIG } from '../config/portfolioData';

export default function AboutSection() {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section
      id="about"
      className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0E1422 0%, #07090E 80%)',
      }}
    >
      {/* Futuristic Floating Tech Visual Accents */}
      <FadeIn
        delay={0.1}
        x={-50}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[3%] top-[12%] hidden lg:block"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-950/20 backdrop-blur-md">
          <BrainCircuit className="h-14 w-14 text-sky-400/70" />
        </div>
      </FadeIn>

      <FadeIn
        delay={0.2}
        x={50}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[3%] top-[14%] hidden lg:block"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-950/20 backdrop-blur-md">
          <Code2 className="h-14 w-14 text-sky-400/70" />
        </div>
      </FadeIn>

      <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center gap-14 sm:gap-20 md:gap-24">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>Get To Know Me</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              ABOUT ME
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h3 className="hero-subheading text-base sm:text-xl md:text-2xl font-bold uppercase tracking-widest">
              {personal.secondaryHeading}
            </h3>
          </FadeIn>

          <div className="max-w-3xl">
            <AnimatedText
              text={personal.aboutMe}
              className="text-center font-normal leading-relaxed text-slate-300"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
            />
          </div>
        </div>

        {/* Education & Ambition Spotlight Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Education Card */}
          <FadeIn delay={0.3} y={30}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                    Academic Background
                  </span>
                  <h4 className="text-lg font-bold text-white uppercase">
                    {personal.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">University:</span>
                  <span className="font-medium text-slate-200">
                    {personal.education.university}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Academic Year:</span>
                  <span className="font-medium text-sky-300">
                    {personal.education.academicYear}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Expected Graduation:</span>
                  <span className="font-medium text-slate-200">
                    {personal.education.graduationYear}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Long-Term Ambition Card */}
          <FadeIn delay={0.4} y={30}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                    Career Ambition
                  </span>
                  <h4 className="text-lg font-bold text-white uppercase">
                    AI & Technology Ventures
                  </h4>
                </div>
              </div>

              <p className="text-sm font-light leading-relaxed text-slate-300 pt-3 border-t border-slate-800/80">
                &ldquo;{personal.introduction}&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Section Action */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactButton label="Let's Connect" href="#contact" />
            <a
              href="#skills"
              className="rounded-full border border-slate-700 bg-transparent px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-300 transition-all hover:border-sky-400 hover:text-white no-underline"
            >
              View My Tech Stack
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
