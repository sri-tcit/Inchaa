const categories = [
  {
    title: "Contractors",
    description:
      "General contractors, fit-out contractors, MEP contractors, renovation contractors, and all specialist trade contractors — electrical, plumbing, painting, flooring, tiling, AC, waterproofing, false ceilings, joinery, aluminium, glass, landscaping, demolition, and more.",
  },
  {
    title: "Engineers",
    description:
      "Structural engineers, MEP engineers, civil engineers, supervision engineers, and geotechnical engineers.",
  },
  {
    title: "Consultants",
    description:
      "Quantity surveyors, project management consultants, design consultants (architectural, interior, landscape), and supervision consultants.",
  },
];

export function JoinWhoCanJoin() {
  return (
    <section className="bg-bg-section py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[40px] font-bold leading-tight mb-4">
          Who Can Join Inchaa?
        </h2>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl mb-12">
          Inchaa is open to contractors, engineers, and consultants operating in the UAE
          construction industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-bg-card border border-ui-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="block w-4 h-[3px] bg-yellow" />
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.14em]">
                  {cat.title}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
