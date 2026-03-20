import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { professionalCta } = homeEn;

export function ProfessionalCTA() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              {professionalCta.heading}
            </h2>
            <p className="mt-4 text-mid-grey text-base leading-relaxed max-w-lg">
              {professionalCta.subtext}
            </p>
          </div>
          <div className="lg:text-right">
            <Link
              href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-7 py-4 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
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
