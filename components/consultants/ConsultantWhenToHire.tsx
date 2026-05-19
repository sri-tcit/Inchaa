import Link from "next/link";

const scenarios = [
  {
    badge: "AED 500K+",
    badgeClass: "bg-amber-500/15 text-amber-400",
    title: "High-value projects",
    description: "Get independent cost verification before signing any contract.",
  },
  {
    badge: "New build",
    badgeClass: "bg-blue-500/15 text-blue-400",
    title: "Villa construction",
    description: "You need architectural and structural design before approaching contractors.",
  },
  {
    badge: "Multi-trade",
    badgeClass: "bg-purple-500/15 text-purple-400",
    title: "Complex coordination",
    description: "Managing multiple contractors across different trades needs professional oversight.",
  },
  {
    badge: "Quality",
    badgeClass: "bg-green-500/15 text-green-400",
    title: "Site supervision",
    description: "Independent eyes on-site to ensure work quality matches what you're paying for.",
  },
];

export function ConsultantWhenToHire() {
  return (
    <section className="bg-bg-section-2 py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
          When do you need a consultant?
        </h2>
        <p className="mt-3 text-text-muted text-base leading-relaxed max-w-2xl">
          Many homeowners skip consulting and go straight to hiring a contractor. This often leads to budget
          overruns, scope disputes, and disappointing results.
        </p>

        {/* 2x2 grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((s) => (
            <div key={s.title} className="bg-bg-card rounded-2xl p-6 border border-ui-border">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${s.badgeClass}`}>
                {s.badge}
              </span>
              <h3 className="mt-4 text-text-heading text-lg font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA card */}
        <div className="mt-4 bg-bg-card rounded-2xl p-6 border border-ui-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-text-heading text-lg font-bold">Sound like your project?</p>
            <p className="mt-1 text-text-muted text-sm leading-relaxed">
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
