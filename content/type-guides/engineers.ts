import type { TypeGuideArticle } from "./types";

export const engineerTypeArticles: Record<string, TypeGuideArticle> = {
  "structural-engineers": {
    slug: "structural-engineers",
    title: "Structural engineers on Inchaa",
    summary:
      "Structural engineers design and verify the skeleton of your building — foundations, columns, slabs, beams, and modifications — so it is safe and compliant.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "Every load path from roof to foundation passes through structural design. For new builds, extensions, or removing walls, a structural engineer produces calculations and drawings the contractor builds from and authorities may review.",
          "Skipping or guessing structural work creates safety and legal risk. In the UAE, competent structural input is standard for meaningful construction.",
        ],
      },
      {
        heading: "What to include in your post",
        paragraphs: [
          "Describe the project type (villa, apartment, commercial), emirate, and whether you have existing drawings. For modifications, photos and a sketch of what you want to change help engineers scope site visits and analysis.",
        ],
      },
      {
        heading: "On Inchaa",
        paragraphs: [
          "Compare proposals from verified structural engineers — scope of services, timeline, and fees — in one place before you appoint.",
        ],
      },
    ],
  },
  "mep-engineers": {
    slug: "mep-engineers",
    title: "MEP engineers on Inchaa",
    summary:
      "MEP engineers size and document mechanical, electrical, plumbing, fire, and controls systems so your build performs and can be approved.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Scope of work",
        paragraphs: [
          "MEP design covers load calculations, routing, risers, panel schedules, HVAC selection or zoning, fire strategy inputs, and coordination with architecture and structure. Deliverables feed tender and installation.",
        ],
      },
      {
        heading: "Residential vs commercial",
        paragraphs: [
          "Villa and apartment jobs may focus on split systems, lighting levels, and water pressure; commercial or mixed-use may add stricter code interfaces. State occupancy and approximate GFA when posting.",
        ],
      },
      {
        heading: "Finding the right engineer",
        paragraphs: [
          "Inchaa matches you with engineers who hold relevant credentials and experience. Request proposals and compare methodology and deliverables side by side.",
        ],
      },
    ],
  },
  "civil-engineers": {
    slug: "civil-engineers",
    title: "Civil engineers on Inchaa",
    summary:
      "Civil engineers handle what happens outside and around the building — grading, roads, drainage, and external works tied to your plot.",
    heroImage: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Typical packages",
        paragraphs: [
          "Site cut and fill, stormwater management, external paving, retaining walls, and coordination with utility providers. Civil design often precedes or runs parallel to structural packages on greenfield villas.",
        ],
      },
      {
        heading: "When you need one",
        paragraphs: [
          "If your project changes outdoor levels, adds built-up area that affects runoff, or needs new connections to public networks, civil engineering input is usually required.",
        ],
      },
      {
        heading: "Post on Inchaa",
        paragraphs: [
          "Upload a site plan if available and describe boundary conditions, neighbour sensitivities, and authority comments you already have.",
        ],
      },
    ],
  },
  "supervision-engineers": {
    slug: "supervision-engineers",
    title: "Supervision engineers on Inchaa",
    summary:
      "Supervision engineers represent your technical interests on site — checking that work matches approved drawings and standards.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Role on site",
        paragraphs: [
          "They review method statements, witness critical activities, log non-conformities, and report to you. They do not replace your contractor’s site team but add independent verification.",
        ],
      },
      {
        heading: "Value for owners",
        paragraphs: [
          "For owners who are not full-time on site, supervision reduces the risk of silent deviations that become expensive to correct later.",
        ],
      },
      {
        heading: "Start on Inchaa",
        paragraphs: [
          "Post project stage, location, and frequency of visits you expect. Compare supervision proposals and engineer profiles before engaging.",
        ],
      },
    ],
  },
  "geotechnical-engineers": {
    slug: "geotechnical-engineers",
    title: "Geotechnical engineers on Inchaa",
    summary:
      "Geotechnical engineers investigate soil and groundwater so foundations are designed for real ground conditions — often a gate before structural design in the UAE.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "What they deliver",
        paragraphs: [
          "Boreholes or trial pits, lab testing, and a factual or interpretive report with bearing recommendations and settlement considerations. Structural engineers use this to size footings and rafts.",
        ],
      },
      {
        heading: "Regulatory context",
        paragraphs: [
          "Many new builds in Dubai and Abu Dhabi require geotechnical input as part of the approval pathway. Your consultant or architect can confirm local expectations for your plot.",
        ],
      },
      {
        heading: "Hire via Inchaa",
        paragraphs: [
          "Post plot location, proposed built form, and any prior reports. Receive proposals from verified geotechnical practices.",
        ],
      },
    ],
  },
};

export function getEngineerArticle(slug: string): TypeGuideArticle | undefined {
  return engineerTypeArticles[slug];
}

export function getAllEngineerTypeSlugs(): string[] {
  return Object.keys(engineerTypeArticles);
}
