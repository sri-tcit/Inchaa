import { JoinButton } from "./JoinButton";

export function JoinHero() {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] overflow-hidden flex items-end">
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1800&h=1000&fit=crop&q=85"
        alt="Construction professionals reviewing plans on site"
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
            Grow Your Business with Inchaa
          </h1>
          <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
            Turn your expertise into a steady stream of projects. Create your professional
            profile on Inchaa as a contractor, engineer, or consultant and connect with
            homeowners, developers and main contractors actively looking to hire construction
            professionals across the UAE.
          </p>
          <JoinButton className="mt-8" />
        </div>
      </div>
    </section>
  );
}
