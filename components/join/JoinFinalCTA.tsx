import { JoinButton } from "./JoinButton";

export function JoinFinalCTA() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight max-w-xl mx-auto">
          Ready to grow your business?
        </h2>
        <p className="mt-4 text-white/60 text-base max-w-md mx-auto leading-relaxed">
          Create your professional profile today and start receiving project inquiries from
          homeowners and developers across the UAE.
        </p>
        <JoinButton className="mt-8" />
      </div>
    </section>
  );
}
