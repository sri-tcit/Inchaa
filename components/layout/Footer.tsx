import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Contractors", href: "/contractors/" },
  { label: "Engineers", href: "/engineers/" },
  { label: "Consultants", href: "/consultants/" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-navy pt-12 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/">
              <Image
                src="/assets/incha-logo.svg"
                alt="Inchaa"
                width={100}
                height={20}
                className="h-5 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-mid-grey text-xs leading-relaxed">
              Built for Builders.<br />Trusted by Professionals.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Services</h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mid-grey text-xs hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mid-grey text-xs hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Contact</h4>
            <ul className="flex flex-col gap-2 text-mid-grey text-xs">
              <li>info@inchaa.com</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-mid-grey text-xs text-center">
            &copy; {new Date().getFullYear()} Inchaa Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
