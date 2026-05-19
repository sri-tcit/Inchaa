import Link from "next/link";
import { HardHat, Home } from "lucide-react";

export function EngineerCrossLinks() {
  return (
    <section className="bg-bg-section-2 py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="bg-bg-card rounded-2xl border border-ui-border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left */}
            <div className="p-8 md:p-10 md:border-r border-ui-border">
              <h2 className="text-text-heading text-xl md:text-2xl font-bold leading-snug">
                Looking for contractors or consultants?
              </h2>
              <p className="mt-3 text-text-muted text-sm leading-relaxed">
                Inchaa connects you with general contractors, MEP contractors, quantity surveyors, and design consultants across the UAE.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-blue-400 hover:underline"
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
                href="/consultants/"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl border border-ui-border text-text-heading text-sm font-semibold hover:bg-bg-section transition-all duration-150"
              >
                <Home className="w-4 h-4" />
                Find consultants
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
