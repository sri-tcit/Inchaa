import Link from "next/link";
import { HardHat, Package } from "lucide-react";

export function ConsultantCrossLinks() {
  return (
    <section className="bg-[#F4F4F2] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left */}
            <div className="p-8 md:p-10 md:border-r border-[#E5E7EB]">
              <h2 className="text-navy text-xl md:text-2xl font-bold leading-snug">
                Looking for contractors or engineers?
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                Inchaa connects you with general contractors, MEP contractors, structural, civil, and MEP engineers across the UAE.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-blue-600 hover:underline"
              >
                How Inchaa works →
              </Link>
            </div>

            {/* Right */}
            <div className="p-8 md:p-10 flex flex-col gap-3 justify-center">
              <Link
                href="/contractors/"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl bg-navy text-white text-sm font-semibold hover:brightness-110 transition-all duration-150"
              >
                <HardHat className="w-4 h-4" />
                Find contractors
              </Link>
              <Link
                href="/engineers/"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl border border-[#E5E7EB] text-navy text-sm font-semibold hover:bg-[#F4F4F2] transition-all duration-150"
              >
                <Package className="w-4 h-4" />
                Find engineers
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
