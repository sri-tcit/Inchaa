import Link from "next/link";
import { FileText, Users, LayoutDashboard, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    title: "Post Your Project",
    description: "Describe what you need – property type, emirate, scope, budget. Takes 2 minutes.",
  },
  {
    icon: Users,
    title: "Receive Quotes",
    description: "Verified professionals respond with detailed proposals. Every one is licensed and reviewed.",
  },
  {
    icon: LayoutDashboard,
    title: "Compare Side by Side",
    description: "Review pricing, scope, credentials, and past work in one dashboard. No more WhatsApp chaos.",
  },
  {
    icon: BadgeCheck,
    title: "Hire with Confidence",
    description: "Choose the best match. Manage communication, documents, and tracking from one place.",
  },
];

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
        <circle cx="40" cy="16" r="4" fill="#5555ff"/>
        <rect x="36" y="56" width="8" height="10" rx="1" fill="white" fillOpacity="0.5"/>
        <path d="M32 56 h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/consultants/",
    label: "Consultants",
    description: "Project management, quantity surveyors, and design consultants across the UAE.",
    bg: "bg-black",
    svg: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="16" y="14" width="48" height="58" rx="4" fill="white" fillOpacity="0.08"/>
        <rect x="16" y="14" width="48" height="58" rx="4" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
        <path d="M26 30 h28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 40 h28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 50 h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="28" y="8" width="24" height="12" rx="3" fill="#5555ff"/>
        <circle cx="40" cy="14" r="2.5" fill="white"/>
        <circle cx="56" cy="58" r="10" fill="#5555ff"/>
        <path d="M52 58 l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <>
      {/* How Inchaa Works */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]" id="how-it-works">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

          {/* Badge */}
          {/* <span className="inline-block border border-[#E5E7EB] text-mid-grey text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            How It Works
          </span> */}

          <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
            How Inchaa Works
          </h2>
          <p className="mt-4 text-mid-grey text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From posting your project to hiring the right professional – in 4 simple steps.
          </p>

          {/* Steps */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-[30px] left-[12%] right-[12%] h-px bg-[#E5E7EB] hidden md:block" />

            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="flex flex-col items-center text-center relative">
                <div className="w-[60px] h-[60px] rounded-2xl bg-yellow flex items-center justify-center mb-5 z-10">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-[11px] font-bold text-yellow uppercase tracking-widest mb-2">
                  Step {i + 1}
                </p>
                <h3 className="text-navy text-base font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-mid-grey text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find the Right Professional */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

          {/* <span className="inline-block border border-[#E5E7EB] text-mid-grey text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            For Everyone
          </span> */}

          <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
            Find the Right Professional
          </h2>
          <p className="mt-4 text-mid-grey text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Connect with verified professionals across every construction discipline in the UAE.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROFESSIONALS.map(({ href, label, description, bg, svg }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-200"
              >
                <div className={`w-full aspect-[4/3] rounded-2xl ${bg} flex items-center justify-center p-8 mb-5`}>
                  <div className="w-28 h-28">{svg}</div>
                </div>
                <h3 className="text-navy text-lg font-bold">{label}</h3>
                <p className="mt-2 text-mid-grey text-sm leading-relaxed">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
