const reasons = [
  "Your project budget exceeds AED 500,000 and you want independent cost verification before signing a contract.",
  "You are building a new villa and need architectural and structural design before approaching contractors.",
  "You are managing multiple contractors across different trades and need professional coordination.",
  "You want independent site supervision to ensure work quality matches what you are paying for.",
];

export function ConsultantWhenToHire() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              When Do You Need a Consultant?
            </h2>
          </div>
          <div>
            <p className="text-mid-grey text-sm leading-relaxed">
              Many homeowners in the UAE skip consulting services and go straight to hiring a
              contractor. This often leads to budget overruns, scope disputes, and work that
              does not match expectations.
            </p>
            <p className="mt-3 text-mid-grey text-sm leading-relaxed">
              Consider engaging a consultant if:
            </p>
            <ul className="mt-4 space-y-3">
              {reasons.map((reason, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-mid-grey text-sm leading-relaxed border-l-2 border-yellow pl-4">
              A consultant does not replace your contractor. A consultant ensures your
              contractor delivers what was agreed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
