const services = [
  {
    title: "Constructors",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    title: "Consultants",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    title: "Engineers",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-light-grey py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-charcoal text-2xl md:text-3xl font-bold text-center mb-10">
          Find The Right Professional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E5E7EB] group cursor-pointer"
            >
              <img
                src={service.src}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-150"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
