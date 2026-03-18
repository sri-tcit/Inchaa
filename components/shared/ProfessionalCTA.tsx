import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { professionalCta } = homeEn;

export function ProfessionalCTA() {
  return (
    <section className="bg-light-grey py-14 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-[#E5E7EB] bg-white rounded-lg px-8 py-8">
          <div>
            <h2 className="text-navy text-xl font-bold">{professionalCta.heading}</h2>
            <p className="mt-2 text-mid-grey text-sm leading-relaxed max-w-xl">
              {professionalCta.subtext}
            </p>
          </div>
          <Link
            href="/join"
            className="shrink-0 inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
          >
            {professionalCta.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
