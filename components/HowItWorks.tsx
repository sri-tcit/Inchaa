const steps = [
  {
    num: "1",
    title: "Post Your Project",
    description: "Describe your needs, set your budget, and share project details.",
  },
  {
    num: "2",
    title: "Get Matched",
    description: "Receive proposals from verified professionals in your area.",
  },
  {
    num: "3",
    title: "Start Building",
    description: "Choose your team, finalize terms, and begin work with confidence.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-charcoal text-2xl md:text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-t-2 border-yellow pt-6"
            >
              <span className="text-yellow text-3xl font-bold">{step.num}</span>
              <h3 className="mt-3 text-charcoal text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-mid-grey text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
