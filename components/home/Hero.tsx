import Link from "next/link";
import { homeEn } from "@/content/home/en";

const { hero } = homeEn;

export function Hero() {
  return (
    <section className="relative bg-navy pt-[56px] overflow-hidden">
      <img
        src="/assets/blueprint.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.35] mix-blend-lighten pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, #1C2136 75%)" }}
      />

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-white text-3xl md:text-[46px] md:leading-[1.12] font-bold tracking-tight">
            {hero.heading}
          </h1>
          <p className="mt-5 text-mid-grey text-base leading-relaxed max-w-xl">
            {hero.subtext}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/post-project"
              className="inline-flex items-center bg-yellow text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
            >
              {hero.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
