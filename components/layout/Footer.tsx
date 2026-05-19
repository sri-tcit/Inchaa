import Link from "next/link";
import Image from "next/image";

const homeownerLinks = [
  { label: "Find Contractors", href: "/contractors/" },
  { label: "Find Engineers", href: "/engineers/" },
  { label: "Find Consultants", href: "/consultants/" },
  { label: "Post Your Project", href: "#" },
];

const professionalLinks = [
  { label: "Sign Up as a Professional", href: "/join" },
  { label: "Sign In to Portal", href: "https://portal.inchaa.com/login" },
  { label: "How Professionals Get Leads", href: "/how-it-works" },
];

const companyLinks = [
  { label: "About Inchaa", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "mailto:support@inchaa.com" },
];

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M3.18 23.77A2.5 2.5 0 0 1 2 21.54V2.46A2.5 2.5 0 0 1 3.18.23L14.6 12 3.18 23.77zm17.63-11.16-3.07-1.77-3.46 3.46 3.46 3.45 3.08-1.78a2.1 2.1 0 0 0 0-3.36zM4.44 1.07l10.2 10.2-3.07-1.78L4.44 1.07zm0 21.86 7.13-8.42 3.07-1.78-10.2 10.2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest">
        {children}
      </h4>
      <div className="mt-2 w-8 h-[2px] bg-indigo-500/60" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.4fr_1fr] gap-10 mb-12">

          {/* Brand col */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/incha-logo.svg"
                alt="Inchaa"
                width={120}
                height={24}
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-[260px]">
              Connecting homeowners with trusted contractors, engineers, and consultants across the UAE.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-white/15 text-white/50 hover:text-white hover:border-white/35 transition-colors duration-150"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-white/15 text-white/50 hover:text-white hover:border-white/35 transition-colors duration-150"
              >
                <InstagramIcon />
              </a>
            </div>

            {/* App download buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:border-white/40 transition-colors duration-150"
              >
                <AppleIcon />
                <span className="leading-tight">
                  <span className="block text-white/40 text-[10px] uppercase tracking-wide">Download on the</span>
                  <span className="font-bold text-sm">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:border-white/40 transition-colors duration-150"
              >
                <PlayIcon />
                <span className="leading-tight">
                  <span className="block text-white/40 text-[10px] uppercase tracking-wide">Get it on</span>
                  <span className="font-bold text-sm">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          {/* For Homeowners */}
          <div>
            <ColHeading>For Homeowners</ColHeading>
            <ul className="flex flex-col gap-3">
              {homeownerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <ColHeading>For Professionals</ColHeading>
            <ul className="flex flex-col gap-3">
              {professionalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Menast Inchaa Service Broker. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-white/30 text-xs">
            <Link href="#" className="hover:text-white/60 transition-colors duration-150">Terms of Use</Link>
            <Link href="#" className="hover:text-white/60 transition-colors duration-150">Privacy Policy</Link>
            <a href="mailto:support@inchaa.com" className="hover:text-white/60 transition-colors duration-150">support@inchaa.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
