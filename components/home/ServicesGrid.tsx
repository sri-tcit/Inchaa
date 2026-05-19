import Link from "next/link";

const PROFESSIONALS = [
  {
    href: "/contractors/",
    label: "Contractors",
    description: "General, MEP, renovation & 30+ specialist trades for every project type.",
    bg: "bg-yellow",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="10" y="50" width="60" height="22" rx="3" fill="black" fillOpacity="0.15"/>
        <rect x="18" y="34" width="44" height="20" rx="2" fill="white" fillOpacity="0.3"/>
        <rect x="28" y="20" width="24" height="16" rx="2" fill="white" fillOpacity="0.5"/>
        <rect x="34" y="10" width="12" height="12" rx="1" fill="white" fillOpacity="0.7"/>
        <rect x="22" y="55" width="8" height="14" rx="1" fill="white" fillOpacity="0.6"/>
        <rect x="36" y="55" width="8" height="14" rx="1" fill="white" fillOpacity="0.6"/>
        <rect x="50" y="55" width="8" height="14" rx="1" fill="white" fillOpacity="0.6"/>
        <circle cx="58" cy="30" r="10" fill="black" fillOpacity="0.12"/>
        <path d="M53 30h10M58 25v10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/engineers/",
    label: "Engineers",
    description: "Structural, civil, MEP & supervision engineers for residential and commercial projects.",
    bg: "bg-navy",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="28" fill="white" fillOpacity="0.08"/>
        <path d="M20 56 L40 16 L60 56" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M28 42 h24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="40" cy="16" r="4" fill="var(--yellow)"/>
        <rect x="36" y="56" width="8" height="10" rx="1" fill="white" fillOpacity="0.5"/>
        <path d="M32 56 h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/consultants/",
    label: "Consultants",
    description: "Project management, quantity surveyors, and design consultants across the UAE.",
    bg: "bg-[#323232]",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="16" y="14" width="48" height="58" rx="4" fill="white" fillOpacity="0.08"/>
        <rect x="16" y="14" width="48" height="58" rx="4" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
        <path d="M26 30 h28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 40 h28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 50 h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="28" y="8" width="24" height="12" rx="3" fill="var(--yellow)"/>
        <circle cx="40" cy="14" r="2.5" fill="white"/>
        <circle cx="56" cy="58" r="10" fill="var(--yellow)"/>
        <path d="M52 58 l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
      <section className="bg-bg-base py-16 md:py-24 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

        <h2 className="text-text-heading text-3xl md:text-[40px] font-bold leading-tight">
          Find the Right Professional
        </h2>
        <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Connect with verified professionals across every construction discipline in the UAE.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROFESSIONALS.map(({ href, label, description, bg, svg }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center text-center"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl ${bg} flex items-center justify-center p-8 mb-5`}>
                <div className="w-28 h-28">{svg}</div>
              </div>
              <h3 className="text-text-heading text-lg font-bold">{label}</h3>
              <p className="mt-2 text-text-muted text-sm leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
