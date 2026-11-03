import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Artificial Intelligence & ML',
    desc: 'Developing intelligent systems, machine learning models, and exploring generative AI and prompt engineering to solve practical problems.',
  },
  {
    num: '02',
    name: 'Frontend Development',
    desc: 'Designing clean, responsive, and high-performance user interfaces using React, JavaScript, HTML, CSS, and modern web architectures.',
  },
  {
    num: '03',
    name: 'Backend & APIs',
    desc: 'Building scalable server backends, microservices, and robust RESTful APIs with Node.js and Express.',
  },
  {
    num: '04',
    name: 'Database Integration',
    desc: 'Structuring efficient data pipelines, SQL queries, and cloud databases using PostgreSQL, Supabase, and MongoDB.',
  },
  {
    num: '05',
    name: 'Software Engineering',
    desc: 'Applying clean coding principles, version control with Git and GitHub, and turning innovative concepts into functional products.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-16 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              <span
                className="font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-3" style={{ color: '#0C0C0C' }}>
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
