import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ConsultantHero() {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] overflow-hidden flex items-end">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&h=1000&fit=crop&q=85"
        alt="Consultant team reviewing construction plans"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(28,33,54,0.95))" }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32">
        <div className="max-w-[680px]">
          <h1 className="text-white text-[36px] md:text-[52px] md:leading-[1.08] font-bold tracking-tight">
            Find Trusted Construction Consultants in the UAE
          </h1>
          <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
            Your project is only as good as the people advising it. Inchaa connects you with
            quantity surveyors, project management consultants, design consultants, and
            supervision consultants across the UAE.
          </p>
          <PostProjectButton
            campaign="consultants_lp"
            className="mt-8 inline-flex items-center bg-yellow text-white text-sm font-bold px-7 py-3.5 rounded-lg hover:brightness-95 transition-all duration-150"
          />
        </div>
      </div>
    </section>
  );
}
