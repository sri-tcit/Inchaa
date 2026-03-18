import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { professionalCta } = homeEn;

export function ProfessionalCTA() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight">
              {professionalCta.heading}
            </h2>
            <p className="mt-4 text-mid-grey text-sm md:text-base leading-relaxed max-w-lg">
              {professionalCta.subtext}
            </p>
          </div>
          <div className="lg:text-right">
            <Link
              href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
            >
              {professionalCta.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
