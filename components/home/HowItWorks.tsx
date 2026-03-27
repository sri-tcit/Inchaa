const STEPS = [
  {
    num: "1",
    title: "Post Your Project",
    description: "Describe what you need – property type, emirate, scope, budget. Takes 2 minutes.",
  },
  {
    num: "2",
    title: "Receive Quotes",
    description: "Verified professionals respond with detailed proposals. Every one is licensed and reviewed.",
  },
  {
    num: "3",
    title: "Compare Side by Side",
    description: "Review pricing, scope, credentials, and past work in one dashboard.",
  },
  {
    num: "4",
    title: "Hire with Confidence",
    description: "Choose the best match. Manage communication, documents, and tracking in one place.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-bg-section py-20 md:py-28 border-t border-ui-border" id="how-it-works">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
        Hire Professionals in 4 Simple Steps
        </h2>
        <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Post your project free and let verified professionals come to you.
        </p>

        {/* ── Desktop ── */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-4 gap-6 relative">

            {/* Curved arrows between steps */}
            <svg
              className="absolute pointer-events-none"
              style={{ top: "52px", left: "12.5%", width: "75%", height: "48px" }}
              viewBox="0 0 300 48"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.15)" />
                </marker>
              </defs>
              {/* Arrow 1→2 */}
              <path
                d="M 0 38 Q 50 4 100 38"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
              />
              {/* Arrow 2→3 */}
              <path
                d="M 100 38 Q 150 4 200 38"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
              />
              {/* Arrow 3→4 */}
              <path
                d="M 200 38 Q 250 4 300 38"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
              />
            </svg>

            {STEPS.map(({ num, title, description }) => (
              <div key={num} className="flex flex-col items-center text-center px-3">
                {/* Large number */}
                <span
                  className="font-bold leading-none mb-5 select-none"
                  style={{
                    fontSize: "88px",
                    color: "transparent",
                    WebkitTextStroke: "2px var(--yellow)",
                    opacity: 0.75,
                  }}
                >
                  {num}
                </span>
                <h3 className="text-text-heading text-base font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="mt-12 md:hidden flex flex-col gap-8">
          {STEPS.map(({ num, title, description }) => (
            <div key={num} className="flex items-start gap-5 text-left">
              <span
                className="font-bold leading-none flex-shrink-0 select-none"
                style={{
                  fontSize: "52px",
                  color: "transparent",
                  WebkitTextStroke: "2px var(--yellow)",
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <div className="pt-2">
                <h3 className="text-text-heading text-base font-bold leading-snug">{title}</h3>
                <p className="mt-1 text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
