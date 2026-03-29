import type { TypeGuideArticle } from "./types";

export const contractorTypeArticles: Record<string, TypeGuideArticle> = {
  "general-contractors": {
    slug: "general-contractors",
    title: "General contractors on Inchaa",
    summary:
      "A general contractor is your single point of responsibility for delivering the full project — structure, coordination of trades, finishes, and handover.",
    heroImage: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "General contractors (main contractors) take overall responsibility for executing your build. They sequence work, coordinate MEP and finishing trades, manage site logistics, and aim to deliver a completed project that matches your drawings and specifications.",
          "For new villas, extensions, or major refurbishments, a general contractor is often the right choice when you want one contract and one accountable party instead of hiring each trade yourself.",
        ],
      },
      {
        heading: "When to hire one",
        paragraphs: [
          "Consider a general contractor when the scope spans multiple trades, has critical dependencies (structure before services, services before finishes), or when you do not want to run daily site coordination yourself.",
          "On Inchaa you can post your full scope, receive proposals from verified general contractors, and compare methodology, timeline, and pricing side by side.",
        ],
      },
      {
        heading: "How Inchaa helps",
        paragraphs: [
          "Every contractor is reviewed for a valid UAE trade licence and relevant experience before they can respond to projects. You keep quotes, documents, and messages in one place — so decisions are based on clear information, not scattered chats.",
        ],
      },
    ],
  },
  "mep-contractors": {
    slug: "mep-contractors",
    title: "MEP contractors on Inchaa",
    summary:
      "MEP covers the systems that make a building work: electrical, plumbing, drainage, air conditioning, fire protection, and low-current services.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "What MEP includes",
        paragraphs: [
          "Mechanical, electrical, and plumbing (MEP) contractors design, install, test, and commission the systems inside and around your property. That typically includes power distribution, lighting, water supply and drainage, HVAC or split systems, fire detection and suppression where applicable, and structured cabling or smart-home pre-wiring.",
          "Quality MEP work affects safety, energy use, and long-term maintenance — it is not an area to leave vague in your tender.",
        ],
      },
      {
        heading: "Standalone vs with a main contractor",
        paragraphs: [
          "You might hire an MEP specialist directly for a targeted upgrade (full AC replacement, tank and pump work, panel upgrades) or engage them under a general contractor on a larger project. Inchaa supports both patterns: specify your scope clearly when you post.",
        ],
      },
      {
        heading: "Posting a project",
        paragraphs: [
          "Include drawings or photos if you have them, list emirate and property type, and describe what must be handed over (e.g. DEWA / authority requirements if known). Better inputs lead to comparable, serious proposals.",
        ],
      },
    ],
  },
  "renovation-fit-out": {
    slug: "renovation-fit-out",
    title: "Renovation & fit-out contractors on Inchaa",
    summary:
      "Renovation and fit-out specialists focus on upgrading existing villas and apartments — kitchens, bathrooms, finishes, and remodelling without you coordinating every crew.",
    heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Fit for lived-in properties",
        paragraphs: [
          "Renovation projects differ from greenfield builds: access, noise, building rules, and protecting existing finishes all matter. Experienced renovation contractors plan phasing, protection, and handover so you can stay living on site when needed — or they compress the programme if the unit is empty.",
        ],
      },
      {
        heading: "Typical scopes",
        paragraphs: [
          "Kitchen and bathroom remodelling, flooring and ceiling upgrades, joinery, painting, and combining MEP touchpoints (new layouts often need electrical and plumbing moves). A clear scope of work and inspiration references helps contractors price accurately.",
        ],
      },
      {
        heading: "Compare with confidence",
        paragraphs: [
          "On Inchaa, post once and receive multiple quotations from verified contractors who match your trade and location. Compare inclusions, timelines, and credentials before you commit.",
        ],
      },
    ],
  },
};

function slugifyTrade(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const tradeBlurbs: Record<string, { title: string; summary: string; sections: TypeGuideArticle["sections"] }> = {
  electrical: {
    title: "Electrical contractors",
    summary: "Power, lighting, distribution boards, and safety — electrical work must be done by licensed professionals in the UAE.",
    sections: [
      {
        paragraphs: [
          "Electrical contractors handle new circuits, panel upgrades, lighting design and installation, surge and earthing provisions, and coordination with DEWA or authority requirements where applicable.",
          "Post your scope on Inchaa — whether it is a full villa fit-out or a targeted upgrade — and compare licensed contractors who cover your emirate.",
        ],
      },
    ],
  },
  plumbing: {
    title: "Plumbing contractors",
    summary: "Water supply, drainage, fixtures, and pressure systems for homes and light commercial units.",
    sections: [
      {
        paragraphs: [
          "Plumbing scope can include rough-in and finish, pump and tank sets, leak remediation, and coordination with civil or MEP packages on larger jobs.",
          "Clear photos of existing installations and a description of symptoms or goals help contractors respond with realistic proposals.",
        ],
      },
    ],
  },
  hvac: {
    title: "HVAC & AC contractors",
    summary: "Cooling and ventilation systems sized for UAE climate — splits, ducted, or packaged solutions.",
    sections: [
      {
        paragraphs: [
          "HVAC contractors select equipment, run refrigerant and drainage lines, commission systems, and often support warranty and service plans.",
          "Mention room counts, ceiling types, and any authority or developer constraints when you post for faster, comparable quotes.",
        ],
      },
    ],
  },
  painting: {
    title: "Painting contractors",
    summary: "Interior and exterior finishes, preparation, and protective coatings for durable results in heat and humidity.",
    sections: [
      {
        paragraphs: [
          "Professional painting is as much about preparation — filling, priming, moisture management — as about top coats.",
          "Specify areas, heights, and whether furniture must be protected or the unit is vacant to align expectations on programme and price.",
        ],
      },
    ],
  },
  tiling: {
    title: "Tiling contractors",
    summary: "Floors, walls, wet areas, and waterproofing interfaces for ceramic, porcelain, and stone finishes.",
    sections: [
      {
        paragraphs: [
          "Tiling contractors often work closely with waterproofing and MEP for bathrooms, kitchens, and outdoor areas.",
          "Share tile sizes, patterns, and substrate conditions (screed, existing tiles to remove) for accurate pricing.",
        ],
      },
    ],
  },
  waterproofing: {
    title: "Waterproofing specialists",
    summary: "Tankings, membranes, and details that protect structures and wet areas from water ingress.",
    sections: [
      {
        paragraphs: [
          "Waterproofing failures are expensive to fix. Specialists select systems compatible with your build-up and follow manufacturer details.",
          "Describe the area (roof, basement, bathroom, planter) and any known leaks when posting on Inchaa.",
        ],
      },
    ],
  },
  "false-ceiling": {
    title: "False ceiling & drywall",
    summary: "Suspended ceilings, bulkheads, and partitions for services, acoustics, and interior architecture.",
    sections: [
      {
        paragraphs: [
          "False ceiling contractors integrate lighting, diffusers, and access panels while meeting fire and acoustic requirements where specified.",
          "Ceiling heights, services above the slab, and finish level (Level 5 paint, feature bulkheads) should appear in your project brief.",
        ],
      },
    ],
  },
  "aluminium-and-glass": {
    title: "Aluminium & glass contractors",
    summary: "Windows, doors, curtain wall elements, and glazing systems for villas and low-rise projects.",
    sections: [
      {
        paragraphs: [
          "These contractors engineer profiles, glass specs, and hardware for wind loads, safety, and developer guidelines.",
          "Include opening schedules or photos of existing frames when requesting replacements or extensions.",
        ],
      },
    ],
  },
  flooring: {
    title: "Flooring contractors",
    summary: "Timber, engineered wood, vinyl, carpet, and stone installation over prepared substrates.",
    sections: [
      {
        paragraphs: [
          "Flooring performance depends on flatness, moisture readings, and expansion details — especially over large villa footprints.",
          "State approximate areas, floor type desired, and whether the screed is new or existing.",
        ],
      },
    ],
  },
  carpentry: {
    title: "Carpentry & joinery",
    summary: "Built-in wardrobes, doors, kitchens carcasses, and custom woodwork.",
    sections: [
      {
        paragraphs: [
          "Joinery contractors translate designs into shop drawings, materials lists, and site installation with fine tolerances.",
          "Attach sketches or references to your Inchaa post to align on style, material grade, and hardware.",
        ],
      },
    ],
  },
  masonry: {
    title: "Masonry contractors",
    summary: "Blockwork, brick, stone features, and structural infill coordinated with the engineer of record.",
    sections: [
      {
        paragraphs: [
          "Masonry scope ranges from boundary walls to feature cladding. Coordination with structural openings and movement joints is critical.",
        ],
      },
    ],
  },
  landscaping: {
    title: "Landscaping contractors",
    summary: "Softscape, irrigation, paving, and outdoor amenities for villas and compounds.",
    sections: [
      {
        paragraphs: [
          "Landscapers balance drainage, planting suitable for the climate, and hardscape durability under sun and salt where coastal.",
          "Share plot boundaries, existing levels, and any community guidelines when you post.",
        ],
      },
    ],
  },
  "swimming-pool": {
    title: "Swimming pool contractors",
    summary: "Design-build or specified pools with structure, finishes, and MEP for circulation and treatment.",
    sections: [
      {
        paragraphs: [
          "Pool projects involve waterproofing, filtration, and often authority submissions. Experienced contractors integrate structure and equipment rooms cleanly.",
        ],
      },
    ],
  },
  "fire-safety": {
    title: "Fire safety contractors",
    summary: "Detection, alarms, extinguishers, and passive or active systems per project requirements.",
    sections: [
      {
        paragraphs: [
          "Fire safety scope depends on building type, occupancy, and local rules. Specialists align with approved drawings and testing requirements.",
        ],
      },
    ],
  },
  "smart-home": {
    title: "Smart home & low-current",
    summary: "Structured cabling, access control, AV, and automation integrated with your build programme.",
    sections: [
      {
        paragraphs: [
          "Early coordination avoids chasing slabs after pours. Define which systems you want now vs future-ready conduit only.",
        ],
      },
    ],
  },
  demolition: {
    title: "Demolition contractors",
    summary: "Safe strip-out, partial demolition, and disposal with permits and protection of retained structure.",
    sections: [
      {
        paragraphs: [
          "Demolition must protect neighbours, structure to remain, and utilities. Licensed teams plan sequencing and waste streams.",
          "Describe what stays, what goes, and access constraints in your Inchaa project.",
        ],
      },
    ],
  },
};

const specialistLabels = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Painting",
  "Tiling",
  "Waterproofing",
  "False ceiling",
  "Aluminium & glass",
  "Flooring",
  "Carpentry",
  "Masonry",
  "Landscaping",
  "Swimming pool",
  "Fire safety",
  "Smart home",
  "Demolition",
] as const;

export function getSpecialistSlug(label: string): string {
  return slugifyTrade(label);
}

export const contractorSpecialtyArticles: Record<string, TypeGuideArticle> = Object.fromEntries(
  specialistLabels.map((label) => {
    const slug = slugifyTrade(label);
    const key = slug.replace(/^-+|-+$/g, "");
    const blurb =
      tradeBlurbs[key as keyof typeof tradeBlurbs] ||
      ({
        title: `${label} contractors`,
        summary: `Find verified ${label.toLowerCase()} contractors for your project on Inchaa.`,
        sections: [
          {
            paragraphs: [
              `Post your ${label.toLowerCase()} scope, location, and timeline on Inchaa. Verified contractors who cover your emirate and trade can respond with detailed proposals.`,
              "Compare credentials, scope, and pricing in one dashboard before you hire.",
            ],
          },
        ],
      } as const);

    const article: TypeGuideArticle = {
      slug,
      title: `${blurb.title} on Inchaa`,
      summary: blurb.summary,
      sections: blurb.sections,
    };
    return [slug, article] as const;
  })
);

export function getContractorArticle(slug: string): TypeGuideArticle | undefined {
  return contractorTypeArticles[slug] || contractorSpecialtyArticles[slug];
}

export function getAllContractorTypeSlugs(): string[] {
  return [
    ...Object.keys(contractorTypeArticles),
    ...Object.keys(contractorSpecialtyArticles),
  ];
}
