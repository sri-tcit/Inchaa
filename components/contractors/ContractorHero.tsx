import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ContractorHero() {
  return (
    <section className="relative pt-[56px]">
      <div className="relative min-h-[520px] md:min-h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-[1320px] mx-auto px-4 md:px-6 h-full flex items-center py-16 md:py-24">
          <div className="bg-white rounded-lg p-8 md:p-10 max-w-lg w-full shadow-[0_2px_12px_rgba(0,0,0,0.60)]">
            <h1 className="text-navy text-2xl md:text-[32px] md:leading-[1.2] font-bold">
              Find Trusted Contractors in the UAE
            </h1>
            <p className="mt-4 text-charcoal text-sm leading-relaxed">
              A great contractor builds trust. A poor one builds problems.
            </p>
            <p className="mt-2 text-mid-grey text-sm leading-relaxed">
              Inchaa connects you with reliable contractors across the UAE. Whether you are
              renovating a villa or building from the ground up, Inchaa gives you a smarter
              way to find and hire the right contractor.
            </p>
            <PostProjectButton
              campaign="contractors_lp"
              className="mt-6 inline-flex items-center bg-yellow text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
