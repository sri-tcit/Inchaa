"use client";

import Link from "next/link";
import { Package, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContractorCrossLinks() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#F4F4F2] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left */}
            <div className="p-8 md:p-10 md:border-r border-[#E5E7EB]">
              <h2 className="text-navy text-xl md:text-2xl font-bold leading-snug">
                {t.crossLinks.contractorsH2}
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                {t.crossLinks.contractorsBody}
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-blue-600 hover:underline"
              >
                {t.crossLinks.howItWorks}
              </Link>
            </div>

            {/* Right */}
            <div className="p-8 md:p-10 flex flex-col gap-3 justify-center">
              <Link
                href="/engineers/"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl bg-navy text-white text-sm font-semibold hover:brightness-110 transition-all duration-150"
              >
                <Package className="w-4 h-4" />
                {t.crossLinks.findEngineers}
              </Link>
              <Link
                href="/consultants/"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl border border-[#E5E7EB] text-navy text-sm font-semibold hover:bg-[#F4F4F2] transition-all duration-150"
              >
                <Home className="w-4 h-4" />
                {t.crossLinks.findConsultants}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
