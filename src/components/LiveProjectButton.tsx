interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export default function LiveProjectButton({
  href = 'https://github.com/Varunreddy1207',
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] bg-transparent px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 cursor-pointer no-underline text-center"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      {label}
    </a>
  );
}
