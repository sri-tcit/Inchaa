const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Professionals" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Cities" },
];

export function StatsStrip() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 md:py-0 ${
                i < stats.length - 1 ? "md:border-r md:border-[#E5E7EB]" : ""
              }`}
            >
              <p className="text-navy text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-mid-grey text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
