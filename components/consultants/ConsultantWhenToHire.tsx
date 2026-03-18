const reasons = [
  "Your project budget exceeds AED 500,000 and you want independent cost verification before signing a contract.",
  "You are building a new villa and need architectural and structural design before approaching contractors.",
  "You are managing multiple contractors across different trades and need professional coordination.",
  "You want independent site supervision to ensure work quality matches what you are paying for.",
];

export function ConsultantWhenToHire() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">When to hire</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              When Do You Need a Consultant?
            </h2>
          </div>
          <div>
            <p className="text-mid-grey text-base leading-relaxed">
              Many homeowners in the UAE skip consulting services and go straight to hiring a
              contractor. This often leads to budget overruns, scope disputes, and work that
              does not match expectations.
            </p>
            <p className="mt-3 text-mid-grey text-base leading-relaxed">
              Consider engaging a consultant if:
            </p>
            <ul className="mt-4 space-y-3">
              {reasons.map((reason, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow shrink-0" />
                  <span className="text-mid-grey text-base leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-mid-grey text-base leading-relaxed border-l-2 border-yellow pl-4">
              A consultant does not replace your contractor. A consultant ensures your
              contractor delivers what was agreed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
