import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ContractorHero() {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] overflow-hidden flex items-end">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&h=1000&fit=crop&q=85"
        alt="Construction site in the UAE"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/70" />

      {/* Bottom gradient for text legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(28,33,54,0.95))" }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32">
        <div className="max-w-[680px]">
          <h1 className="text-white text-[36px] md:text-[52px] md:leading-[1.08] font-bold tracking-tight">
            Find Trusted Contractors in the UAE
          </h1>
          <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
            A great contractor builds trust. A poor one builds problems. Inchaa connects you
            with reliable contractors across the UAE — whether you're renovating a villa or
            building from the ground up.
          </p>
          <PostProjectButton
            campaign="contractors_lp"
            className="mt-8 inline-flex items-center bg-yellow text-white text-sm font-bold px-7 py-3.5 rounded-lg hover:brightness-95 transition-all duration-150"
          />
        </div>
      </div>
    </section>
  );
}
