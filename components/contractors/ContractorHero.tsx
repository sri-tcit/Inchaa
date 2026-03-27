import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ContractorHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/videos/constructor/constructor_01.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-white font-bold leading-[1.08] tracking-tight
                       text-[28px] md:text-[40px] lg:text-[48px]">
          Find Trusted Contractors
          <br className="hidden md:block" />
          {" "}in the UAE
        </h1>
        <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          A great contractor builds trust. A poor one builds problems. Inchaa connects
          you with reliable contractors across the UAE — whether you're renovating a villa
          or building from the ground up.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="contractors_hero" size="md" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }}
      />
    </section>
  );
}
