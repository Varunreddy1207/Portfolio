import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, GraduationCap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_CONFIG } from '../config/portfolioData';

export default function ContactSection() {
  const { personal } = PORTFOLIO_CONFIG;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    // Honest handling: trigger mailto link with prefilled subject & body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setStatusMessage('Opening your email client to send this message to Varun Reddy...');
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 md:px-12 md:py-36 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 90%, #0E1628 0%, #07090E 80%)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3 inline-block">
              Start A Conversation
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              LET&apos;S BUILD SOMETHING GREAT.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base font-light text-slate-300">
              Interested in collaborating, discussing AI projects, or have a question? Reach out through the form or direct channels below.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1} y={20}>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                  Personal Details
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold uppercase text-white">
                  {personal.displayName}
                </h3>
                <p className="text-xs font-light text-slate-400 mb-6">
                  {personal.fullName}
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <div className="flex-1 overflow-hidden">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-medium text-slate-200 hover:text-sky-300 truncate block no-underline"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Education
                      </span>
                      <span className="text-sm text-slate-200 block font-medium">
                        {personal.education.degree}
                      </span>
                      <span className="text-xs text-slate-400 block">
                        {personal.education.university} (Class of {personal.education.graduationYear})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Copy Email Button */}
                <button
                  onClick={copyEmail}
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/80 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all hover:border-sky-400 hover:text-sky-300 cursor-pointer"
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
              </div>
            </FadeIn>

            {/* Social Channels */}
            <FadeIn delay={0.2} y={20}>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-4 block">
                  Find Me Online
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-sm text-slate-200 transition-all hover:border-sky-400 hover:text-white no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-sky-400" />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <span className="text-xs text-slate-400">@Varunreddy1207</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-sm text-slate-200 transition-all hover:border-sky-400 hover:text-white no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-sky-400" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <span className="text-xs text-slate-400">Profile</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.3} y={30}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md space-y-5"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Varun, I'd like to talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {statusMessage && (
                  <p className="text-xs font-medium text-sky-400 bg-sky-950/50 p-3 rounded-lg border border-sky-400/30">
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-full py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0"
                  style={{
                    background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #00C6FF 100%)',
                    boxShadow: '0px 4px 16px rgba(0, 198, 255, 0.35)',
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} {personal.fullName}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-sky-400 transition-colors no-underline text-slate-400">Back to Top ↑</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors no-underline text-slate-400">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
