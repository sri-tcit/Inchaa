import type { TypeGuideArticle } from "./types";

export const consultantTypeArticles: Record<string, TypeGuideArticle> = {
  "quantity-surveyors": {
    slug: "quantity-surveyors",
    title: "Quantity surveyors on Inchaa",
    summary:
      "Quantity surveyors (QS) keep cost predictable — from first budget to tender, award, and variations through construction.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Core services",
        paragraphs: [
          "Cost plans, bills of quantities, tender analysis, recommendation reports, and monthly valuations. A good QS translates design decisions into money and flags scope creep early.",
        ],
      },
      {
        heading: "When owners hire a QS",
        paragraphs: [
          "Large renovations, villa builds, and any project where you receive multiple trade packages benefit from independent cost discipline — especially if you are not using a cost-inclusive design-build contract.",
        ],
      },
      {
        heading: "On Inchaa",
        paragraphs: [
          "Post your stage (concept, tender, or live site) and drawings if available. Compare QS proposals and relevant sector experience in one dashboard.",
        ],
      },
    ],
  },
  "project-management-consultants": {
    slug: "project-management-consultants",
    title: "Project management consultants on Inchaa",
    summary:
      "PMC acts as your agent — coordinating design, contractors, approvals, and handover so the programme and budget stay visible.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "What changes when you appoint PMC",
        paragraphs: [
          "You still make decisions, but someone else runs the meeting rhythm, tracks risks, chases deliverables, and keeps a single integrated programme. That is valuable when multiple consultants and contractors are in play.",
        ],
      },
      {
        heading: "Fit for UAE projects",
        paragraphs: [
          "Authority submissions, consultant interfaces, and fast-track fit-outs are common in Dubai and Abu Dhabi. PMC firms used to local stakeholders add pace and fewer surprises.",
        ],
      },
      {
        heading: "Find a match",
        paragraphs: [
          "Describe project scale, your current team, and what you want the PMC to own day to day. Inchaa helps you compare credentials and proposals.",
        ],
      },
    ],
  },
  "design-consultants": {
    slug: "design-consultants",
    title: "Design consultants on Inchaa",
    summary:
      "Architectural, interior, and landscape consultants turn your brief into coordinated drawings and specifications the site can execute.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Deliverables",
        paragraphs: [
          "Concept design, developed design, tender and construction issue packages, site queries, and snagging support. Interiors and landscape often run as parallel workstreams to architecture.",
        ],
      },
      {
        heading: "Choosing a consultant",
        paragraphs: [
          "Look for relevant typology (villa vs retail), authority familiarity, and how they coordinate MEP and structure. Inchaa lets you compare portfolios and proposals transparently.",
        ],
      },
      {
        heading: "Post your brief",
        paragraphs: [
          "Share inspiration images, room list, budget band, and timeline. Clear briefs attract consultants who can commit to your programme.",
        ],
      },
    ],
  },
  "supervision-consultants": {
    slug: "supervision-consultants",
    title: "Supervision consultants on Inchaa",
    summary:
      "Independent supervision consultants verify quality and compliance on your behalf — reporting to you, not the contractor.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop&q=85",
    sections: [
      {
        heading: "Difference from contractor QC",
        paragraphs: [
          "Your contractor manages execution; supervision consultants audit against drawings, specs, and regulations. That independence is useful on high-spec or high-risk projects.",
        ],
      },
      {
        heading: "Typical outputs",
        paragraphs: [
          "Site reports, non-conformance logs, witness records for critical tests, and recommendations for release of payments when tied to milestones.",
        ],
      },
      {
        heading: "Hire through Inchaa",
        paragraphs: [
          "Define visit frequency, project stage, and whether you need resident or periodic coverage. Compare supervision consultants side by side.",
        ],
      },
    ],
  },
};

export function getConsultantArticle(slug: string): TypeGuideArticle | undefined {
  return consultantTypeArticles[slug];
}

export function getAllConsultantTypeSlugs(): string[] {
  return Object.keys(consultantTypeArticles);
}
