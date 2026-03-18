import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Find Engineers in the UAE", href: "/engineers/" },
  { label: "Find Construction Consultants in the UAE", href: "/consultants/" },
  { label: "Learn How Inchaa Works", href: "/#how-it-works" },
];

export function ContractorCrossLinks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-navy text-lg md:text-xl font-bold">
          Looking for engineers or consultants instead?
        </h2>
        <p className="mt-2 text-mid-grey text-sm leading-relaxed max-w-2xl">
          Inchaa also connects you with structural engineers, MEP engineers, civil engineers,
          project management consultants, quantity surveyors, and design consultants across the UAE.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-yellow transition-colors duration-150"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
