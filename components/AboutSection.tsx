import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-navy text-2xl md:text-3xl font-bold">
              The Construction Ecosystem
            </h2>
            <p className="mt-4 text-charcoal text-sm leading-relaxed">
              Inchaa brings together property owners, constructors, consultants, and engineers
              in one platform. Whether you are planning a residential build or a large-scale
              commercial project, we connect you with the right professionals to get it done.
            </p>
            <p className="mt-3 text-charcoal text-sm leading-relaxed">
              Every professional on Inchaa is verified, reviewed, and accountable. We handle
              the matchmaking so you can focus on what matters — building with confidence.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm font-semibold text-yellow hover:underline"
            >
              Learn More
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
              alt="Team collaborating on construction project"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
