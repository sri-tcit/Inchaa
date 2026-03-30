import Link from "next/link";

const scenarios = [
  {
    badge: "AED 500K+",
    badgeClass: "bg-[#EDE8D8] text-[#8A6E3A]",
    title: "High-value projects",
    description: "Get independent cost verification before signing any contract.",
  },
  {
    badge: "New build",
    badgeClass: "bg-blue-100 text-blue-600",
    title: "Villa construction",
    description: "You need architectural and structural design before approaching contractors.",
  },
  {
    badge: "Multi-trade",
    badgeClass: "bg-purple-100 text-purple-600",
    title: "Complex coordination",
    description: "Managing multiple contractors across different trades needs professional oversight.",
  },
  {
    badge: "Quality",
    badgeClass: "bg-green-100 text-green-700",
    title: "Site supervision",
    description: "Independent eyes on-site to ensure work quality matches what you're paying for.",
  },
];

export function ConsultantWhenToHire() {
  return (
    <section className="bg-[#F4F4F2] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
          When do you need a consultant?
        </h2>
        <p className="mt-3 text-mid-grey text-base leading-relaxed max-w-2xl">
          Many homeowners skip consulting and go straight to hiring a contractor. This often leads to budget
          overruns, scope disputes, and disappointing results.
        </p>

        {/* 2x2 grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${s.badgeClass}`}>
                {s.badge}
              </span>
              <h3 className="mt-4 text-navy text-lg font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-mid-grey text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA card */}
        <div className="mt-4 bg-white rounded-2xl p-6 border border-[#E5E7EB] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-navy text-lg font-bold">Sound like your project?</p>
            <p className="mt-1 text-mid-grey text-sm leading-relaxed">
              A consultant doesn't replace your contractor — they ensure delivery matches what was agreed.
            </p>
          </div>
          <Link
            href="/consultants/"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy text-white text-sm font-semibold hover:brightness-110 transition-all duration-150"
          >
            Find consultants →
          </Link>
        </div>

      </div>
    </section>
  );
}
