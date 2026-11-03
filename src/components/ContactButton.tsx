interface ContactButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function ContactButton({
  label = 'Contact Me',
  href = '#contact',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 no-underline cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #00C6FF 100%)',
        boxShadow: '0px 4px 16px rgba(0, 198, 255, 0.35), inset 0px 2px 4px rgba(255, 255, 255, 0.3)',
        outline: '2px solid rgba(255, 255, 255, 0.85)',
        outlineOffset: '-3px',
        fontFamily: "'Kanit', sans-serif",
      }}
    >
      {label}
    </a>
  );
}
