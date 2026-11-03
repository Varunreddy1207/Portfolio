import { useState } from 'react';
import { Copy, Check, Send, Download } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ARTIST_DATA } from '../data/artistData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Character Design',
    budget: '$3,000 - $7,000',
    message: '',
  });
  const [feedback, setFeedback] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(ARTIST_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback('Please fill out all required fields.');
      return;
    }

    const subject = encodeURIComponent(`3D Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
    );

    window.location.href = `mailto:${ARTIST_DATA.email}?subject=${subject}&body=${body}`;
    setFeedback('Opening your email client to send your project brief to Varun Reddy...');
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 bg-[#06080B] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 text-xs font-semibold uppercase text-emerald-400 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Commission Status: Open for Q1/Q2 2026</span>
            </div>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              COMMISSIONS &amp; INQUIRIES
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xs sm:text-base font-light text-slate-400">
              Have a cinematic project, commercial 3D render, or studio opening? Send a brief below or connect directly.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Details & Rate Sheet */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1} y={20}>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-xl">
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
                    {ARTIST_DATA.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {ARTIST_DATA.title}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Email:</span>
                    <a
                      href={`mailto:${ARTIST_DATA.email}`}
                      className="font-medium text-sky-300 hover:underline no-underline"
                    >
                      {ARTIST_DATA.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Discord Community:</span>
                    <span className="font-mono text-slate-200">{ARTIST_DATA.socials.discord}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Timezone:</span>
                    <span className="text-slate-200">IST / UTC+5:30 (Flexible Overlap)</span>
                  </div>
                </div>

                {/* Copy Email Button */}
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/80 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                {/* Rate Sheet Download Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading Varun Reddy 2026 Commercial Rate Card & Terms (PDF)');
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-sky-400/40 bg-sky-950/30 py-3 text-xs font-semibold uppercase tracking-wider text-sky-300 hover:bg-sky-500/20 transition-colors no-underline cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download 2026 Rate Sheet (PDF)</span>
                </a>
              </div>
            </FadeIn>

            {/* Social Art Platforms */}
            <FadeIn delay={0.2} y={20}>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-3">
                  Art Communities &amp; Networks
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={ARTIST_DATA.socials.artstation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white no-underline transition-colors"
                  >
                    <span>ArtStation</span>
                    <span className="text-sky-400">↗</span>
                  </a>
                  <a
                    href={ARTIST_DATA.socials.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white no-underline transition-colors"
                  >
                    <span>Behance</span>
                    <span className="text-sky-400">↗</span>
                  </a>
                  <a
                    href={ARTIST_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white no-underline transition-colors"
                  >
                    <span>Instagram</span>
                    <span className="text-sky-400">↗</span>
                  </a>
                  <a
                    href={ARTIST_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-white no-underline transition-colors"
                  >
                    <span>GitHub</span>
                    <span className="text-sky-400">↗</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.3} y={30}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-md space-y-6 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name / Studio
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe (Lead Producer)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="producer@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                    >
                      <option value="Character Design">Character Design / High-Poly</option>
                      <option value="Environment Art">Environment Art &amp; Unreal 5</option>
                      <option value="Product Visualization">Product Visualization / Commercial</option>
                      <option value="Motion Graphics">Motion Graphics &amp; Particle FX</option>
                      <option value="Full-Time Studio Role">Full-Time Studio Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                    >
                      <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                      <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                      <option value="$7,000 - $15,000+">$7,000 - $15,000+</option>
                      <option value="Contract / Monthly Retainer">Contract / Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Scope &amp; Deliverables
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide a brief overview of assets needed, target engine (Unreal/Cycles/Redshift), timeline, and reference links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {feedback && (
                  <p className="text-xs font-medium text-sky-400 bg-sky-950/50 p-3 rounded-lg border border-sky-400/30">
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-full py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0"
                  style={{
                    background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #00C6FF 100%)',
                    boxShadow: '0 0 25px rgba(0, 198, 255, 0.4)',
                  }}
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Project Inquiry</span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} {ARTIST_DATA.name}. 3D Artist, CGI Animator &amp; Lookdev Specialist.</span>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-sky-400 transition-colors no-underline text-slate-400">Back to Top ↑</a>
            <a href={ARTIST_DATA.socials.artstation} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors no-underline text-slate-400">ArtStation</a>
            <a href={ARTIST_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors no-underline text-slate-400">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
