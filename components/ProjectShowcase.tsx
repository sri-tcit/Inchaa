"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = ["All", "Residential", "Commercial", "Industrial"];

const projects = [
  {
    title: "Marina Heights Tower",
    location: "Dubai, UAE",
    type: "Commercial",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=375&fit=crop",
  },
  {
    title: "Palm View Villas",
    location: "Riyadh, KSA",
    type: "Residential",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=375&fit=crop",
  },
  {
    title: "Central Warehouse Complex",
    location: "Cairo, Egypt",
    type: "Industrial",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=375&fit=crop",
  },
  {
    title: "Skyline Office Park",
    location: "Jeddah, KSA",
    type: "Commercial",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=375&fit=crop",
  },
  {
    title: "Al Noor Residence",
    location: "Abu Dhabi, UAE",
    type: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=375&fit=crop",
  },
  {
    title: "Eastport Factory",
    location: "Alexandria, Egypt",
    type: "Industrial",
    img: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&h=375&fit=crop",
  },
];

export function ProjectShowcase() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="bg-light-grey py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-charcoal text-2xl md:text-3xl font-bold text-center mb-8">
          Recent Projects
        </h2>

        <div className="flex justify-center gap-6 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "text-sm font-medium pb-1 border-b-2 transition-colors duration-150",
                active === f
                  ? "text-charcoal border-yellow"
                  : "text-mid-grey border-transparent hover:text-charcoal"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-charcoal text-sm font-semibold">{project.title}</h3>
                <p className="text-mid-grey text-xs mt-1">{project.location}</p>
                <p className="text-mid-grey text-xs mt-0.5">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
