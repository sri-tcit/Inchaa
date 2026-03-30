import type { HomePageTranslations } from "./homePageTranslations";
import { homePageEn, homePageAr } from "./homePageTranslations";

export type { HomePageTranslations };

export interface FeatureItem {
  title: string;
  body: string;
}

export interface FeatureShowcaseData {
  eyebrow: string;
  headline: string;
  body: string;
  features: FeatureItem[];
}

export interface StepItem {
  num: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TypeCard {
  title: string;
  desc: string;
}

export interface Translations {
  nav: {
    contractors: string;
    engineers: string;
    consultants: string;
    signIn: string;
    joinAsPro: string;
    suppliers: string;
  };
  common: {
    postProjectFree: string;
    joinAsPro: string;
    watchDemo: string;
    walkthrough: string;
    explore: string;
    learnMore: string;
    seePlatform: string;
    thePlatform: string;
    theProcess: string;
    howItWorks: string;
    support: string;
    faqTitle: string;
    clientStory: string;
    disciplines: string;
    doneRight: string;
    inchaa: string;
    postProjectAppModalTitle: string;
    postProjectAppModalSubtitle: string;
  };
  contractorHero: {
    h1: string;
    h1Line2: string;
    body: string;
  };
  engineerHero: {
    h1: string;
    h1Line2: string;
    body: string;
  };
  consultantHero: {
    h1: string;
    h1Line2: string;
    body: string;
  };
  joinHero: {
    h1: string;
    body: string;
  };
  consultants: {
    feature1: FeatureShowcaseData;
    feature2: FeatureShowcaseData;
    videoDesc: string;
    story: { quote: string; body: string; name: string; detail: string };
    hiwIntro: string;
    steps: StepItem[];
    typesHeadline: string;
    types: TypeCard[];
    faqs: FaqItem[];
  };
  engineers: {
    feature1: FeatureShowcaseData;
    feature2: FeatureShowcaseData;
    videoDesc: string;
    story: { quote: string; body: string; name: string; detail: string };
    hiwIntro: string;
    steps: StepItem[];
    typesHeadline: string;
    types: TypeCard[];
    faqs: FaqItem[];
  };
  contractors: {
    feature1: FeatureShowcaseData;
    feature2: FeatureShowcaseData;
    videoDesc: string;
    story: { quote: string; body: string; name: string; detail: string };
    hiwIntro: string;
    steps: StepItem[];
    whoCanHire: string;
    typesHeadline: string;
    types: TypeCard[];
    specialistTitle: string;
    specialistBody: string;
    specialistCount: string;
    specialistTrades: string[];
    faqs: FaqItem[];
  };
  join: {
    stats: { value: string; label: string }[];
    feature1: FeatureShowcaseData;
    feature2: FeatureShowcaseData;
    videoDesc: string;
    gettingStarted: string;
    howToJoin: string;
    hiwIntro: string;
    steps: StepItem[];
    openTo: string;
    whoCanJoin: string;
    categories: TypeCard[];
    faqTitle: string;
    faqBody: string;
    faqs: FaqItem[];
    ctaEyebrow: string;
    ctaHeadline: string;
    ctaBody: string;
  };
  hero: {
    h1Part1: string;
    h1Brand: string;
    body: string;
    postProject: string;
    watchOverview: string;
  };
  journeySteps: {
    eyebrow: string;
    h2: string;
    body: string;
    steps: { num: string; title: string; description: string }[];
  };
  footer: {
    tagline: string;
    homeownersCol: string;
    professionalsCol: string;
    companyCol: string;
    findContractors: string;
    findEngineers: string;
    findConsultants: string;
    postYourProject: string;
    signUpPro: string;
    signInPortal: string;
    howProGetLeads: string;
    aboutInchaa: string;
    howItWorks: string;
    faqs: string;
    contactUs: string;
    downloadOn: string;
    getItOn: string;
    appStore: string;
    googlePlay: string;
    allRightsReserved: string;
    terms: string;
    privacy: string;
  };
  faqsPage: {
    heroH1: string;
    heroBody: string;
    homeownersTitle: string;
    homeownersBody: string;
    developersTitle: string;
    developersBody: string;
    professionalsTitle: string;
    professionalsBody: string;
    homeownerFaqs: FaqItem[];
    developerFaqs: FaqItem[];
    professionalFaqs: FaqItem[];
  };
  howItWorksPage: {
    heroH1: string;
    heroBody: string;
    homeownersTitle: string;
    professionalsTitle: string;
    homeownerSteps: { num: string; title: string; subtitle: string; description: string }[];
    professionalSteps: StepItem[];
    postFirstProject: string;
    differenceTitle: string;
    withoutLabel: string;
    withLabel: string;
    withoutItems: string[];
    withItems: string[];
    faqTitle: string;
    seeAllFaqs: string;
    faqs: FaqItem[];
  };
  aboutPage: {
    heroH1: string;
    problemTitle: string;
    problemParagraphs: string[];
    problemBold: string;
    whatTitle: string;
    whatParagraphs: string[];
    whoTitle: string;
    whoWeServe: { audience: string; description: string; cta: string; ctaType: "post" | "join" }[];
    differenceTitle: string;
    differentiators: { title: string; description: string }[];
  };
  crossLinks: {
    howItWorks: string;
    findContractors: string;
    findEngineers: string;
    findConsultants: string;
    contractorsH2: string;
    contractorsBody: string;
    engineersH2: string;
    engineersBody: string;
    consultantsH2: string;
    consultantsBody: string;
  };
  homePage: HomePageTranslations;
}

export const en: Translations = {
  nav: {
    contractors: "Contractors",
    engineers: "Engineers",
    consultants: "Consultants",
    signIn: "Sign In",
    joinAsPro: "Join as a Professional",
    suppliers: "Suppliers",
  },
  common: {
    postProjectFree: "Post Your Project Free",
    joinAsPro: "Join as a Professional",
    watchDemo: "Watch the Demo",
    walkthrough: "2 min walkthrough",
    explore: "Explore",
    learnMore: "Learn more",
    seePlatform: "See Inchaa in Action",
    thePlatform: "The Platform",
    theProcess: "The Process",
    howItWorks: "How It Works",
    support: "Support",
    faqTitle: "Frequently Asked Questions",
    clientStory: "Client Story",
    disciplines: "Disciplines",
    doneRight: "Done Right",
    inchaa: "Inchaa",
    postProjectAppModalTitle: "Post your project on the Inchaa app",
    postProjectAppModalSubtitle:
      "Scan this QR code with your phone to download the app and post your project.",
  },
  contractorHero: {
    h1: "Find Trusted Contractors",
    h1Line2: "in the UAE",
    body: "A great contractor builds trust. A poor one builds problems. Inchaa connects you with reliable contractors across the UAE — whether you're renovating a villa or building from the ground up.",
  },
  engineerHero: {
    h1: "Find Trusted Engineers",
    h1Line2: "in the UAE",
    body: "The right engineer can save your project. The wrong one can cost you everything. Inchaa connects you with reliable structural, MEP, civil, and supervision engineers across the UAE.",
  },
  consultantHero: {
    h1: "Find Trusted Consultants",
    h1Line2: "in the UAE",
    body: "Your project is only as good as the people advising it. Inchaa connects you with quantity surveyors, project management consultants, design consultants, and supervision consultants across the UAE.",
  },
  joinHero: {
    h1: "Grow Your Business with Inchaa",
    body: "Turn your expertise into a steady stream of projects. Create your professional profile on Inchaa as a contractor, engineer, or consultant and connect with homeowners, developers and main contractors actively looking to hire construction professionals across the UAE.",
  },
  consultants: {
    feature1: {
      eyebrow: "COST & QUANTITY",
      headline: "Control Your Project Budget",
      body: "Know exactly what you're paying for — before you sign anything. Our quantity surveyors and cost consultants keep your finances transparent from day one.",
      features: [
        {
          title: "Transparent Cost Estimates",
          body: "Receive itemised cost plans so you can compare contractor quotes with confidence and challenge any inflated figures.",
        },
        {
          title: "Bill of Quantities",
          body: "Consultants prepare a full BQ so every trade and material is accounted for — no surprises mid-build.",
        },
        {
          title: "Tender Analysis",
          body: "Get expert review of contractor bids to identify discrepancies, gaps, and value-engineering opportunities.",
        },
        {
          title: "Ongoing Cost Control",
          body: "Monthly cost reports track variations and keep your budget on track throughout construction.",
        },
      ],
    },
    feature2: {
      eyebrow: "DESIGN & DELIVERY",
      headline: "From Concept to Construction",
      body: "Architecture, interiors, project coordination, and independent supervision — bring all the expertise you need onto your project through one platform.",
      features: [
        {
          title: "Architecture & Interior Design",
          body: "Design consultants translate your brief into coordinated drawings ready for contractor tender.",
        },
        {
          title: "Project Management",
          body: "A PMC manages programme, budget, and contractor interfaces on your behalf — so you don't have to.",
        },
        {
          title: "Independent Supervision",
          body: "Supervision consultants inspect work on-site and report directly to you — not to the contractor.",
        },
        {
          title: "Handover & Snagging",
          body: "Consultants produce snagging lists and verify defect rectification before you accept the finished work.",
        },
      ],
    },
    videoDesc:
      "Watch how easy it is to post your project, receive consultant proposals, and compare them — all in one dashboard.",
    story: {
      quote: '"The QS saved us AED 180,000 before we broke ground."',
      body: "A villa owner in Abu Dhabi posted their project on Inchaa, received three proposals from quantity surveyors within 48 hours, and chose the right consultant for their AED 2.4M build. The cost plan identified overpriced items in the contractor quote — saving nearly 8% of the total project value.",
      name: "Abu Dhabi Villa Owner",
      detail: "4-bedroom villa, completed 2026",
    },
    hiwIntro:
      "From posting your scope to engaging the right consultant — four simple steps.",
    steps: [
      {
        num: "01",
        title: "Post your requirements",
        body: "Describe your project scope, property type, and what consulting support you need. No sign-up fees, no commitment.",
      },
      {
        num: "02",
        title: "Receive proposals",
        body: "Consultants respond with detailed proposals covering scope, methodology, timeline, and fees.",
      },
      {
        num: "03",
        title: "Compare side by side",
        body: "Review qualifications, relevant experience, methodology, and pricing — all in one dashboard.",
      },
      {
        num: "04",
        title: "Engage with confidence",
        body: "Choose the best fit and manage everything from Inchaa.",
      },
    ],
    typesHeadline: "Find the Right Consultant for Your Project",
    types: [
      {
        title: "Quantity Surveyors",
        desc: "Cost plans, bills of quantities, tender analysis, and cost control.",
      },
      {
        title: "Project Management",
        desc: "Programme, budget, and interface coordination on your behalf.",
      },
      {
        title: "Design Consultants",
        desc: "Architecture, interiors, and landscape — concept to drawings.",
      },
      {
        title: "Supervision",
        desc: "Independent site inspection and quality assurance.",
      },
    ],
    faqs: [
      {
        q: "What does a quantity surveyor do and do I need one?",
        a: "A quantity surveyor estimates costs, prepares bills of quantities, evaluates contractor tenders, and controls costs throughout construction. If your budget exceeds AED 500,000 a QS can save you significantly more than their fee.",
      },
      {
        q: "How much does a project management consultant cost in the UAE?",
        a: "PMC fees typically range from 3%–8% of total project cost depending on scope and complexity. Post your project on Inchaa to compare proposals and find the right fit.",
      },
      {
        q: "Can I find an interior design consultant on Inchaa?",
        a: "Yes. Post your design requirements — property type, style, layout, area — and receive structured proposals from design consultants across the UAE.",
      },
      {
        q: "Is it free to find a consultant on Inchaa?",
        a: "Yes. Posting your project, receiving proposals, and comparing consultants costs nothing for homeowners.",
      },
    ],
  },
  engineers: {
    feature1: {
      eyebrow: "STRUCTURE & CIVIL",
      headline: "Build on a Solid Foundation",
      body: "Municipality approvals in Abu Dhabi, Dubai, and Sharjah require stamped engineering drawings before any permit is issued. Get the right engineer involved before a single brick is laid.",
      features: [
        {
          title: "Structural Design",
          body: "Foundations, columns, beams, and slabs designed and stamped by a licensed structural engineer — required for any construction permit.",
        },
        {
          title: "Civil & Site Works",
          body: "Site grading, drainage, earthworks, and external infrastructure handled by civil engineers before construction begins.",
        },
        {
          title: "Geotechnical Reports",
          body: "Soil investigation and foundation recommendations — often required in the UAE before structural design can proceed.",
        },
        {
          title: "Permit-Ready Drawings",
          body: "Coordinated drawings submitted in the format required by Abu Dhabi, Dubai, or Sharjah municipalities.",
        },
      ],
    },
    feature2: {
      eyebrow: "MEP & SUPERVISION",
      headline: "Every System, Every Stage",
      body: "From HVAC and electrical distribution to on-site quality control — Inchaa connects you with the specialist you need at every phase of your project.",
      features: [
        {
          title: "MEP Engineering",
          body: "HVAC, electrical, plumbing, fire systems, and low-current works designed and coordinated to spec.",
        },
        {
          title: "Independent Supervision",
          body: "Supervision engineers inspect on-site work against approved drawings and report directly to you — not the contractor.",
        },
        {
          title: "BMS & Smart Systems",
          body: "Building management systems and smart-home integration designed alongside the main MEP package.",
        },
        {
          title: "Commissioning & Handover",
          body: "Engineers verify that all systems are tested, commissioned, and performing as designed before you take possession.",
        },
      ],
    },
    videoDesc:
      "Watch how easy it is to post your project, receive engineer proposals, and compare them — all in one dashboard.",
    story: {
      quote:
        '"We had three structural proposals within 48 hours — something we couldn\'t do on our own."',
      body: "A developer in Dubai posted their villa project on Inchaa, received competing proposals from three structural engineers, and selected one with experience on similar municipality approvals. The drawings were permit-ready and submitted within three weeks.",
      name: "Dubai Villa Developer",
      detail: "5-bedroom villa, completed 2026",
    },
    hiwIntro:
      "From posting your project to engaging the right engineer — four straightforward steps.",
    steps: [
      {
        num: "01",
        title: "Post your project",
        body: "Describe your engineering requirements — project type, location, scope, and technical needs. No sign-up fees, no commitment.",
      },
      {
        num: "02",
        title: "Receive proposals",
        body: "Engineers with valid credentials and relevant experience respond with detailed proposals.",
      },
      {
        num: "03",
        title: "Compare qualifications",
        body: "Review qualifications, experience, scope of services, and fees — all in one dashboard.",
      },
      {
        num: "04",
        title: "Engage with confidence",
        body: "Choose the engineer that best matches your technical requirements and budget.",
      },
    ],
    typesHeadline: "Find the Right Engineer for Your Project",
    types: [
      {
        title: "Structural Engineers",
        desc: "Foundations, columns, beams, slabs, and permit-ready drawings.",
      },
      {
        title: "MEP Engineers",
        desc: "HVAC, electrical, plumbing, fire systems, and BMS.",
      },
      {
        title: "Civil Engineers",
        desc: "Site works, grading, drainage, and external infrastructure.",
      },
      {
        title: "Supervision Engineers",
        desc: "On-site quality control against approved drawings.",
      },
      {
        title: "Geotechnical Engineers",
        desc: "Soil investigation and foundation recommendations.",
      },
    ],
    faqs: [
      {
        q: "Do I need a structural engineer to build or renovate a villa in the UAE?",
        a: "Yes. In Abu Dhabi, Dubai, and Sharjah, municipality regulations require approved structural drawings signed by a licensed engineer before any construction permit is issued. Even for renovation projects involving structural modifications, a structural engineer's assessment and approval are required.",
      },
      {
        q: "What is the difference between a structural engineer and a civil engineer?",
        a: "A structural engineer designs the building's load-bearing framework — foundations, columns, beams, and slabs. A civil engineer handles site works, earthworks, drainage, roads, and external infrastructure. For a new villa build, you may need both.",
      },
      {
        q: "How much does a structural engineer cost in the UAE?",
        a: "Structural design for a standard villa typically ranges from AED 15,000 to AED 50,000 depending on size and floors. Post your project on Inchaa to receive multiple proposals and compare pricing.",
      },
      {
        q: "Can I find MEP engineers on Inchaa for commercial projects?",
        a: "Yes. Inchaa connects you with MEP engineers for both residential and commercial projects, including HVAC design, electrical distribution, plumbing, fire systems, and low-current works.",
      },
      {
        q: "Is it free to find an engineer on Inchaa?",
        a: "Yes. Posting your project, receiving proposals, and comparing engineers is completely free for homeowners and developers.",
      },
    ],
  },
  contractors: {
    feature1: {
      eyebrow: "FULL BUILD & RENOVATION",
      headline: "One Contract, Zero Headaches",
      body: "Whether you're building a villa from scratch or renovating a kitchen, Inchaa connects you with verified contractors who deliver — not just quote.",
      features: [
        {
          title: "Competing Quotes",
          body: "Get 3–5 detailed proposals per project. Compare pricing, scope, and credentials side by side — not one at a time.",
        },
        {
          title: "Verified Before They Bid",
          body: "Trade licence, credentials, and past work reviewed before any contractor can receive an inquiry on Inchaa.",
        },
        {
          title: "One Dashboard",
          body: "Quotes, documents, messages, and project tracking — all in one place. No more WhatsApp chains.",
        },
        {
          title: "Purpose-Built for UAE Construction",
          body: "Designed for villas, MEP, renovation, fit-outs, and 30+ specialist trades across Abu Dhabi, Dubai, and Sharjah.",
        },
      ],
    },
    feature2: {
      eyebrow: "MEP & SPECIALIST TRADES",
      headline: "Every Trade, One Platform",
      body: "From electrical and plumbing to waterproofing and smart home — post your specialist scope once and receive proposals from the right trade contractors.",
      features: [
        {
          title: "MEP Contractors",
          body: "Electrical, plumbing, HVAC, fire systems, and low-current works installed and commissioned to spec.",
        },
        {
          title: "Renovation & Fit-Out",
          body: "Kitchens, bathrooms, full remodelling, and apartment upgrades — without coordinating ten separate crews.",
        },
        {
          title: "Specialist Trades",
          body: "Tiling, painting, waterproofing, flooring, carpentry, landscaping, and 20+ more specialist categories.",
        },
        {
          title: "New Villa Construction",
          body: "Shell-and-core builds through to full fit-out — post the full scope or break it into phases.",
        },
      ],
    },
    videoDesc:
      "Watch how easy it is to post your project, receive contractor quotes, and compare them — all in one dashboard.",
    story: {
      quote:
        '"We received four proposals in two days — we\'d spent weeks trying to find one contractor before."',
      body: "A homeowner in Abu Dhabi posted a full villa renovation on Inchaa and received four competing proposals within 48 hours. They compared credentials, scope breakdowns, and pricing side by side, and selected a contractor with direct experience on similar Abu Dhabi municipality projects.",
      name: "Abu Dhabi Homeowner",
      detail: "Full villa renovation, completed 2026",
    },
    hiwIntro:
      "From posting your project to hiring with confidence — four straightforward steps.",
    steps: [
      {
        num: "01",
        title: "Post your project",
        body: "Describe your scope, location, and budget in minutes. Add photos or drawings — no sign-up fees, no commitment.",
      },
      {
        num: "02",
        title: "Receive verified quotes",
        body: "Licensed, credential-checked contractors respond with detailed proposals tailored to your project.",
      },
      {
        num: "03",
        title: "Compare side by side",
        body: "Review pricing, credentials, and past work in one dashboard. No more chasing contractors on WhatsApp.",
      },
      {
        num: "04",
        title: "Hire with confidence",
        body: "Pick the best fit for your budget and timeline. Manage the whole engagement from Inchaa.",
      },
    ],
    whoCanHire: "Who You Can Hire",
    typesHeadline: "Contractor Types on Inchaa",
    types: [
      {
        title: "General Contractors",
        desc: "Single contract for structure, MEP coordination, finishes, and handover.",
      },
      {
        title: "MEP Contractors",
        desc: "Electrical, plumbing, HVAC, fire, and low-current installed to spec.",
      },
      {
        title: "Renovation & Fit-Out",
        desc: "Villas and apartments — kitchens, bathrooms, upgrades, and full remodelling.",
      },
    ],
    specialistTitle: "Specialist trades",
    specialistBody:
      "Inchaa also covers dozens of licensed trades — post your specialist scope and we'll surface the right contractors.",
    specialistCount: "30+ categories",
    specialistTrades: [
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
    ],
    faqs: [
      {
        q: "How much does it cost to use Inchaa to find a contractor?",
        a: "Nothing. Inchaa is completely free for homeowners. You post your project, receive quotes, and compare contractors at no cost. Financial agreements are made directly between you and the contractor you hire.",
      },
      {
        q: "How does Inchaa review contractors before listing them?",
        a: "Every contractor on Inchaa is reviewed for a valid UAE trade license, business credentials, and past project experience. Only contractors who pass this review can receive project inquiries on the platform.",
      },
      {
        q: "Can I post a project for a specific trade, like electrical or plumbing?",
        a: "Yes. You can post a project for any of our 30+ trade categories. Specify the exact scope and only contractors who specialise in that trade will respond.",
      },
      {
        q: "What is the difference between hiring a main contractor and a sub-contractor on Inchaa?",
        a: "A main contractor manages your entire project end-to-end. A sub-contractor handles a specific scope like electrical, plumbing, or tiling. Inchaa supports both — choose based on your project needs.",
      },
      {
        q: "Which areas does Inchaa cover?",
        a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah. We are expanding across the UAE.",
      },
      {
        q: "How long does it take to receive quotes after posting a project?",
        a: "For most projects, you can expect to start receiving quotes within 1–2 days of posting.",
      },
    ],
  },
  join: {
    stats: [
      { value: "Free", label: "To join during launch" },
      { value: "48h", label: "Average review time" },
      { value: "3+", label: "Emirates covered" },
    ],
    feature1: {
      eyebrow: "YOUR PROFILE & LEADS",
      headline: "Inbound Projects, No Cold Calls",
      body: "Homeowners post detailed project briefs — scope, location, budget, and timeline. You get notified for projects that match your services and choose which ones to quote on.",
      features: [
        {
          title: "Inbound Project Leads",
          body: "Receive notifications for projects that match your trade, services, and service area. No more cold calling or chasing referrals.",
        },
        {
          title: "Professional Profile",
          body: "Your Inchaa profile showcases your trade license, credentials, past projects, and client ratings — your digital storefront visible to every homeowner searching for your services.",
        },
        {
          title: "You Choose What to Quote",
          body: "Review project details and submit a quotation only when the project matches your capacity and expertise. No obligation on every lead.",
        },
        {
          title: "One Dashboard",
          body: "Manage inquiries, submitted quotes, and client communication from one place. No more scattered WhatsApp threads.",
        },
      ],
    },
    feature2: {
      eyebrow: "VERIFICATION & TRUST",
      headline: "Clients Who Are Ready to Hire",
      body: "Every homeowner on Inchaa has posted a real project with a real scope. And every professional is verified before they can receive a single lead — so you're competing on quality, not price alone.",
      features: [
        {
          title: "Verified Professionals Only",
          body: "Our team reviews your trade license, business credentials, and past project experience. Only professionals who pass are activated on the platform.",
        },
        {
          title: "Serious Project Briefs",
          body: "Homeowners post structured briefs with scope, property type, location, and budget — not vague WhatsApp messages.",
        },
        {
          title: "Complimentary During Launch",
          body: "Creating your profile, completing verification, and receiving project inquiries is currently free. Early professionals benefit from full access as the platform grows.",
        },
        {
          title: "Expanding Across the UAE",
          body: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah, with more emirates coming soon.",
        },
      ],
    },
    videoDesc:
      "Watch how the Inchaa dashboard works — from receiving project leads to submitting proposals and winning work.",
    gettingStarted: "Getting Started",
    howToJoin: "How to Join",
    hiwIntro:
      "From creating your profile to receiving your first lead — four straightforward steps.",
    steps: [
      {
        num: "01",
        title: "Create your profile",
        body: "Tell us about your business: services offered, areas covered, and years of experience.",
      },
      {
        num: "02",
        title: "Submit your credentials",
        body: "Upload your valid UAE trade license, business registration, and examples of past project work.",
      },
      {
        num: "03",
        title: "Get reviewed",
        body: "Our team reviews your credentials. Only professionals who pass the review are activated on the platform.",
      },
      {
        num: "04",
        title: "Start receiving leads",
        body: "Once activated, you receive project inquiries from homeowners and developers in your service area. Review, quote, and win.",
      },
    ],
    openTo: "Open To",
    whoCanJoin: "Who Can Join Inchaa?",
    categories: [
      {
        title: "Contractors",
        desc: "General contractors, MEP contractors, renovation specialists, fit-out contractors, and 30+ specialist trades.",
      },
      {
        title: "Engineers",
        desc: "Structural, MEP, civil, supervision, and geotechnical engineers.",
      },
      {
        title: "Consultants",
        desc: "Quantity surveyors, project managers, design consultants, and supervision consultants.",
      },
    ],
    faqTitle: "Common Questions",
    faqBody: "Everything you need to know about joining Inchaa as a professional.",
    faqs: [
      {
        q: "Is it free to join Inchaa?",
        a: "Yes. Professionals can create a profile, complete verification, and receive project inquiries at no cost during our launch period. Any future subscription plans will be clearly communicated in advance.",
      },
      {
        q: "What documents do I need to join?",
        a: "You will need a valid UAE trade license, business registration or commercial license, and information about your past project experience. Our team reviews these before activating your profile.",
      },
      {
        q: "Can I choose which projects to quote on?",
        a: "Yes. You receive project notifications based on your services and location. You review the details and decide whether to submit a quotation. There is no obligation to quote on every project.",
      },
      {
        q: "Which areas can I receive leads from?",
        a: "You can set your service area to Abu Dhabi, Dubai, Sharjah, or any combination. You only receive inquiries from the areas you select.",
      },
      {
        q: "How quickly will I start receiving project leads?",
        a: "Once your credentials are reviewed and your profile is activated, you begin receiving project inquiries immediately based on your services and location.",
      },
    ],
    ctaEyebrow: "Get Started",
    ctaHeadline: "Ready to grow your business?",
    ctaBody:
      "Create your professional profile today and start receiving project inquiries from homeowners and developers across the UAE.",
  },
  hero: {
    h1Part1: "Build smarter with",
    h1Brand: "Inchaa",
    body: "Inchaa is a digital platform that connects customers with verified contractors, engineers, and consultants. Find trusted professionals, request quotations, and manage projects in one place.",
    postProject: "Post your project free",
    watchOverview: "Watch overview",
  },
  journeySteps: {
    eyebrow: "How It Works",
    h2: "Your project journey, made simple",
    body: "From posting your project to hiring with confidence — four straightforward steps.",
    steps: [
      { num: "01", title: "Post Your Request", description: "Describe your project scope, location, and budget in minutes. Add photos or drawings — no sign-up fees, no commitment." },
      { num: "02", title: "Get Multiple Quotes", description: "Verified contractors, engineers, and consultants respond with detailed proposals tailored to your project." },
      { num: "03", title: "Compare & Choose", description: "Review pricing, credentials, scope, and past work side by side in one dashboard — no more chasing anyone on WhatsApp." },
      { num: "04", title: "Manage & Track", description: "Hire with confidence and manage the full engagement — documents, updates, and communication — from Inchaa." },
    ],
  },
  footer: {
    tagline: "Connecting homeowners with trusted contractors, engineers, and consultants across the UAE.",
    homeownersCol: "For Homeowners",
    professionalsCol: "For Professionals",
    companyCol: "Company",
    findContractors: "Find Contractors",
    findEngineers: "Find Engineers",
    findConsultants: "Find Consultants",
    postYourProject: "Post Your Project",
    signUpPro: "Sign Up as a Professional",
    signInPortal: "Sign In to Portal",
    howProGetLeads: "How Professionals Get Leads",
    aboutInchaa: "About Inchaa",
    howItWorks: "How It Works",
    faqs: "FAQs",
    contactUs: "Contact Us",
    downloadOn: "Download on the",
    getItOn: "Get it on",
    appStore: "App Store",
    googlePlay: "Google Play",
    allRightsReserved: "All rights reserved.",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
  },
  faqsPage: {
    heroH1: "Frequently Asked Questions",
    heroBody: "Everything you need to know about finding and hiring construction professionals on Inchaa — whether you are a homeowner, developer, or construction professional.",
    homeownersTitle: "For Homeowners",
    homeownersBody: "Building, renovating, or maintaining a property in the UAE.",
    developersTitle: "For Developers & Main Contractors",
    developersBody: "Sourcing subcontractors and managing procurement across multiple trades.",
    professionalsTitle: "For Contractors, Engineers & Consultants",
    professionalsBody: "Growing your business and receiving qualified project leads.",
    homeownerFaqs: [
      { q: "What is Inchaa?", a: "Inchaa is the UAE's trusted construction marketplace. We connect homeowners with licensed contractors, engineers, and consultants across Abu Dhabi, Dubai, and Sharjah. Post your project, receive multiple quotes, compare side by side, and hire with confidence – all from one platform." },
      { q: "Is Inchaa free for homeowners?", a: "Yes. Posting a project, receiving quotes, and comparing professionals is completely free. You pay nothing to use Inchaa – financial agreements are made directly between you and the professional you choose to hire." },
      { q: "How does Inchaa work?", a: "Post your project with details like property type, location, area, and budget. Licensed professionals in your area receive your request and respond with detailed quotes or proposals. You compare them side by side – pricing, credentials, past work – and choose the best match. Everything is managed from one dashboard." },
      { q: "What types of projects can I post on Inchaa?", a: "Villa construction, apartment fit-out, renovation, MEP works (electrical, plumbing, AC, fire fighting), structural and concrete works, false ceilings, flooring, tiling, painting, waterproofing, aluminium and glass, doors and joinery, landscaping, demolition, and 30+ other specialist trade categories." },
      { q: "Which areas in the UAE does Inchaa cover?", a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah. We are expanding across the UAE." },
      { q: "How does Inchaa review contractors before listing them?", a: "Every professional on Inchaa is reviewed for a valid UAE trade license, business credentials, and past project experience before being listed. Only professionals who pass this review can receive project inquiries on the platform." },
      { q: "How many quotes will I receive?", a: "The number depends on your project type and availability of professionals in your area. Our goal is to provide multiple competing proposals so you can make an informed decision based on facts, not guesswork." },
      { q: "Can I compare quotes side by side?", a: "Yes. The Inchaa dashboard lets you view and compare multiple quotations in one place – pricing, scope of work, credentials, and ratings." },
      { q: "Does Inchaa handle payments?", a: "No. Financial agreements are made directly between you and the professional. Inchaa focuses on connecting you with the right people, helping you compare options, and giving you a dashboard to manage the process." },
      { q: "How is Inchaa different from finding contractors on WhatsApp?", a: "With word of mouth, you rely on a single recommendation and hope for the best. With Inchaa, every professional is reviewed before listing. You receive multiple competing quotes instead of depending on one referral. And everything is documented in one place – no scattered WhatsApp messages, no lost paperwork, no guesswork." },
      { q: "Can I post a project for engineering or consulting work?", a: "Yes. Inchaa connects you with structural engineers, MEP engineers, civil engineers, project management consultants, quantity surveyors, and design consultants." },
      { q: "What if I am not satisfied with any of the quotes?", a: "You are under no obligation to accept any quote. If none of the proposals meet your expectations, you can decline them all. Inchaa is free – you only move forward when you find the right match." },
      { q: "Is my personal information shared with all contractors?", a: "No. Your project details are shared with relevant professionals who match your requirements. Your personal contact information is only shared when you choose to engage with a specific professional." },
      { q: "How long does it take to receive quotes?", a: "Response times vary by project type and location. For most projects, you can expect to start receiving quotes within a few days of posting." },
      { q: "Does Inchaa cover villa construction and new builds, not just renovation?", a: "Yes. Inchaa covers the full spectrum – from new villa construction and full fit-outs to renovation, remodelling, and specialist trade work." },
    ],
    developerFaqs: [
      { q: "How can developers and main contractors use Inchaa to find subcontractors?", a: "Developers and main contractors can post project requirements on Inchaa and receive quotes from specialist subcontractors across 30+ trade categories. Whether you need MEP, structural, finishing, or external works subcontractors, Inchaa gives you access to licensed professionals who respond with detailed quotations." },
      { q: "Can I post multiple projects simultaneously?", a: "Yes. You can post and manage multiple projects from one account. Each project receives its own set of quotes, and you can track all of them through the Inchaa dashboard." },
      { q: "What types of subcontractors are available?", a: "Inchaa covers all major construction trades – concrete, block works, electrical, plumbing, AC/HVAC, fire fighting, plastering, painting, flooring, false ceilings, gypsum, aluminium and glass, doors and joinery, waterproofing, thermal insulation, external stone works, earth works, demolition, and more." },
      { q: "Does Inchaa cover commercial and industrial projects?", a: "Yes. Inchaa supports residential, commercial, industrial, and mixed-use projects. You can specify your property type when posting a project." },
      { q: "Can I use Inchaa for large-scale villa developments?", a: "Yes. Developers building multiple units can use Inchaa to source subcontractors for each trade package. Post separate requirements for each scope of work and receive competing quotes from specialists." },
      { q: "How does the quotation process work for subcontractor procurement?", a: "Post your project with the scope of work, location, area, and specific requirements. Relevant subcontractors receive your request and submit detailed quotations. You compare proposals, review credentials and past work, and select the best fit." },
      { q: "Can I compare subcontractor quotes across multiple trades?", a: "Yes. Post separate requirements for each trade (electrical, plumbing, painting, flooring, etc.) and compare quotes within each trade independently. Full visibility across your project's subcontractor costs." },
      { q: "Is Inchaa suitable for MEP, structural, and finishing subcontractor sourcing?", a: "Yes. Inchaa has professionals across MEP trades (electrical, plumbing, AC, fire fighting), structural trades (concrete, block works), and finishing trades (flooring, painting, gypsum, joinery, aluminium). Each category is listed separately so you can target exactly the trade you need." },
      { q: "Can my project team manage multiple requests from one account?", a: "Yes. All project postings and received quotations are accessible from one dashboard. Your team can manage, compare, and track quotations across all active projects in one place." },
    ],
    professionalFaqs: [
      { q: "How do I join Inchaa as a contractor, engineer, or consultant?", a: "Visit our join page, create your profile, and submit your business credentials for review. Once approved, you start receiving project inquiries from homeowners and developers in your selected service areas." },
      { q: "Is it free to join?", a: "Yes. During our launch phase, professionals receive full access to the Inchaa platform at no charge. As the platform scales, a monthly subscription will apply for continued access to project inquiries. Early adopters will benefit from preferential pricing. Any changes will be communicated well in advance." },
      { q: "Does Inchaa take a commission on projects?", a: "No. Inchaa does not charge commission on awarded projects. Professionals keep 100% of the contract value agreed with their client." },
      { q: "How and when do I get paid?", a: "Payments are agreed directly between you and the client. Inchaa does not hold or process project funds." },
      { q: "What documents do I need?", a: "A valid UAE trade license, company credentials, and details of your past project experience. Our team reviews all submissions to ensure quality and compliance before activating your profile." },
      { q: "How does Inchaa send me project leads?", a: "When a homeowner or developer posts a project that matches your services and selected locations, you'll receive a notification with the project details. You can then review the scope and decide whether to submit a quotation." },
      { q: "Can I choose which projects to quote on?", a: "Absolutely. You are under no obligation to quote on every inquiry. Submit quotations only for projects that align with your expertise, availability, and business priorities." },
      { q: "How does the review and rating system work?", a: "Once a project is completed, homeowners and engineers involved in the project can leave ratings and written reviews based on their experience. All reviews are linked to verified projects and displayed on your profile, helping you build credibility, strengthen your reputation, and win more work." },
      { q: "Is Inchaa only for licensed professionals?", a: "Yes. Only licensed and verified professionals are approved on the Inchaa platform to maintain quality standards." },
      { q: "What areas can I receive leads from?", a: "You can set your service area to Abu Dhabi, Dubai, Sharjah, or a combination. You only receive inquiries from the areas you select." },
      { q: "Can I list multiple services on my profile?", a: "Yes. If your business covers multiple trades or services, you can list all of them. This increases the range of project inquiries you are eligible to receive." },
    ],
  },
  howItWorksPage: {
    heroH1: "How Inchaa Works",
    heroBody: "Finding and hiring construction professionals in the UAE should not require luck. Inchaa replaces the WhatsApp referral chain with a structured, transparent process.",
    homeownersTitle: "For Homeowners, Main Contractors & Developers",
    professionalsTitle: "For Contractors, Engineers & Consultants",
    homeownerSteps: [
      { num: "01", title: "Post Your Project", subtitle: "2 minutes", description: "Tell us what you need. Select your property type – villa, apartment, commercial, industrial, majlis, or mosque. Choose your emirate. Describe the scope of work, set your budget, and add photos or drawings if available. Your project is live in minutes." },
      { num: "02", title: "Receive Quotes from Professionals", subtitle: "", description: "Contractors, engineers, or consultants who match your project requirements and location receive your request and respond with detailed quotations or proposals. Every professional on Inchaa has been reviewed for a valid UAE trade license, business credentials, and past project experience." },
      { num: "03", title: "Compare Side by Side", subtitle: "", description: "Review multiple proposals in one dashboard. Compare pricing, scope of work, credentials, past projects, and ratings. No more calling five contractors and tracking responses in a spreadsheet or WhatsApp group." },
      { num: "04", title: "Hire with Confidence", subtitle: "", description: "Choose the professional that best fits your project requirements and budget. Manage communication, documents, and project tracking from the Inchaa dashboard. Everything in one place." },
    ],
    professionalSteps: [
      { num: "01", title: "Create Your Profile", body: "Sign up and tell us about your business – services offered, areas covered, credentials, and past projects." },
      { num: "02", title: "Get Reviewed", body: "Submit your UAE trade license and business credentials. Our team reviews your documentation before activating your profile on the platform." },
      { num: "03", title: "Receive Project Leads", body: "When a homeowner or developer posts a project that matches your services and location, you receive a notification with full project details." },
      { num: "04", title: "Quote and Win", body: "Review the project requirements, decide if it is a fit, and submit your quotation or proposal. The client reviews your submission alongside other professionals and selects the best match." },
    ],
    postFirstProject: "Post Your First Project Free",
    differenceTitle: "What Makes Inchaa Different?",
    withoutLabel: "Without Inchaa",
    withLabel: "With Inchaa",
    withoutItems: [
      "One WhatsApp referral, no way to compare",
      "No transparency in pricing or credentials",
      "Scattered messages, lost paperwork",
      "If it doesn't work out, start from scratch",
    ],
    withItems: [
      "Multiple competing proposals from verified professionals",
      "Compare pricing, credentials, and past work side by side",
      "Quotes, documents, and communication in one dashboard",
      "Every professional reviewed before they can receive inquiries",
    ],
    faqTitle: "Frequently Asked Questions",
    seeAllFaqs: "See all FAQs →",
    faqs: [
      { q: "Is Inchaa free for homeowners?", a: "Yes. Inchaa is absolutely free for homeowners." },
      { q: "Is Inchaa free for developers and main contractors?", a: "Yes. There is no fee to post projects, receive quotes, and compare professionals." },
      { q: "How does Inchaa review professionals before listing them?", a: "Every contractor, engineer, and consultant is reviewed for a valid UAE trade license, business credentials, and past project experience before being listed. Only professionals who pass this review can receive project inquiries." },
      { q: "Does Inchaa handle payments?", a: "No. Financial agreements are made directly between you and the professional you hire. Inchaa focuses on helping you find, compare, and connect with the right professionals." },
      { q: "Which areas in the UAE does Inchaa cover?", a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah, with plans to expand across the UAE and wider GCC region in the future." },
    ],
  },
  aboutPage: {
    heroH1: "About Inchaa",
    problemTitle: "The Problem We Set Out to Solve",
    problemParagraphs: [
      "Construction in the UAE is an AED 189 billion industry growing at over 6% annually. Roads, towers, villas, and communities are being built at a pace that few countries in the world can match.",
      "Yet finding a reliable contractor, engineer, or consultant still depends on WhatsApp referrals, word of mouth, and hope.",
      "A homeowner building a villa in Abu Dhabi calls a friend, gets one name, negotiates blind, and hopes the job gets done right. A developer sourcing subcontractors for a residential project in Dubai chases quotes through phone calls, spreadsheets, and scattered messages. There is no transparency in pricing, no easy way to compare credentials, and no single place to manage the process.",
      "In a country that builds world-class infrastructure, the way people hire construction professionals has not kept up.",
    ],
    problemBold: "Inchaa was built to change that.",
    whatTitle: "What Inchaa Is",
    whatParagraphs: [
      "Inchaa is the UAE's leading construction marketplace. We connect homeowners with trusted contractors, engineers, and consultants across all emirates.",
      "Post your project and receive multiple competitive quotes from verified professionals. Compare proposals side by side — pricing, scope, and qualifications — then hire with confidence. Track and manage everything from one centralised dashboard.",
      "Whether you are renovating a kitchen, building a villa from the ground up, or sourcing subcontractors for a 50-unit development, Inchaa gives you a smarter, more transparent way to find and hire construction professionals.",
    ],
    whoTitle: "Who We Serve",
    whoWeServe: [
      { audience: "Homeowners", description: "Building, renovating, or maintaining residential properties. Post your project and receive competing quotes from licensed professionals without relying on a single referral.", cta: "Post your project free", ctaType: "post" },
      { audience: "Developers & Main Contractors", description: "Sourcing subcontractors across MEP, structural, finishing, and external trades. Post requirements for each trade package, compare quotes, and manage procurement from one platform.", cta: "Post your project free", ctaType: "post" },
      { audience: "Contractors, Engineers & Consultants", description: "Looking to grow your business, receive qualified project leads, and build your professional reputation. Join Inchaa, get reviewed, and start receiving inquiries.", cta: "Join as a professional", ctaType: "join" },
    ],
    differenceTitle: "What Makes Inchaa Different",
    differentiators: [
      { title: "Trusted professionals", description: "Every contractor, engineer, and consultant is reviewed for valid trade licenses, credentials, and past project experience before being listed." },
      { title: "Multiple competing quotes", description: "Stop relying on one recommendation. Receive multiple proposals and choose based on facts." },
      { title: "One dashboard", description: "Quotations, documents, communication, and project tracking in one place." },
      { title: "Built for construction", description: "Not a home services app. Purpose-built for villa builds, fit-outs, MEP works, structural engineering, and 30+ specialist trades." },
      { title: "Free for homeowners and developers", description: "Posting projects, receiving quotes, and comparing professionals costs nothing." },
    ],
  },
  crossLinks: {
    howItWorks: "How Inchaa works →",
    findContractors: "Find contractors",
    findEngineers: "Find engineers",
    findConsultants: "Find consultants",
    contractorsH2: "Looking for engineers or consultants?",
    contractorsBody: "Inchaa connects you with structural, MEP, civil engineers, quantity surveyors, and design consultants across the UAE.",
    engineersH2: "Looking for contractors or consultants?",
    engineersBody: "Inchaa connects you with general contractors, MEP contractors, quantity surveyors, and design consultants across the UAE.",
    consultantsH2: "Looking for contractors or engineers?",
    consultantsBody: "Inchaa connects you with general contractors, MEP contractors, structural, civil, and MEP engineers across the UAE.",
  },
  homePage: homePageEn,
};

export const ar: Translations = {
  nav: {
    contractors: "المقاولون",
    engineers: "المهندسون",
    consultants: "الاستشاريون",
    signIn: "تسجيل الدخول",
    joinAsPro: "انضم كمحترف",
    suppliers: "الموردون",
  },
  common: {
    postProjectFree: "انشر مشروعك مجاناً",
    joinAsPro: "انضم كمحترف",
    watchDemo: "شاهد العرض التوضيحي",
    walkthrough: "جولة توضيحية من دقيقتين",
    explore: "استكشاف",
    learnMore: "اعرف المزيد",
    seePlatform: "شاهد إنشاء في العمل",
    thePlatform: "المنصة",
    theProcess: "العملية",
    howItWorks: "كيف يعمل",
    support: "الدعم",
    faqTitle: "الأسئلة الشائعة",
    clientStory: "قصة عميل",
    disciplines: "التخصصات",
    doneRight: "تم باحترافية",
    inchaa: "إنشاء",
    postProjectAppModalTitle: "انشر مشروعك من تطبيق إنشاء",
    postProjectAppModalSubtitle:
      "امسح رمز الاستجابة السريعة بهاتفك لتنزيل التطبيق ونشر مشروعك.",
  },
  contractorHero: {
    h1: "ابحث عن مقاولين موثوقين",
    h1Line2: "في الإمارات",
    body: "المقاول الجيد يبني الثقة، والمقاول السيئ يبني المشاكل. إنشاء يربطك بمقاولين موثوقين في جميع أنحاء الإمارات — سواء كنت تجدد فيلا أو تبني من الصفر.",
  },
  engineerHero: {
    h1: "ابحث عن مهندسين موثوقين",
    h1Line2: "في الإمارات",
    body: "المهندس المناسب يُنقذ مشروعك، والمهندس الخطأ قد يكلفك كل شيء. إنشاء يربطك بمهندسين إنشائيين وميكانيكيين وكهربائيين وصحيين وإشرافيين موثوقين في جميع أنحاء الإمارات.",
  },
  consultantHero: {
    h1: "ابحث عن استشاريين موثوقين",
    h1Line2: "في الإمارات",
    body: "مشروعك لا يرقى إلى ما هو عليه إلا بجودة من يقدّم لك المشورة. إنشاء يربطك بمساحي الكميات واستشاريي إدارة المشاريع والاستشاريين التصميميين واستشاريي الإشراف في جميع أنحاء الإمارات.",
  },
  joinHero: {
    h1: "نمّ أعمالك مع إنشاء",
    body: "حوّل خبرتك إلى تدفق مستمر من المشاريع. أنشئ ملفك المهني على إنشاء كمقاول أو مهندس أو استشاري، وتواصل مع أصحاب المنازل والمطورين والمقاولين الرئيسيين الذين يبحثون بنشاط عن متخصصين في قطاع البناء في الإمارات.",
  },
  consultants: {
    feature1: {
      eyebrow: "التكلفة والكميات",
      headline: "تحكّم في ميزانية مشروعك",
      body: "اعرف بالضبط ما تدفعه — قبل أن توقّع على أي شيء. يحرص مساحو الكميات واستشاريو التكلفة لدينا على إبقاء أموالك شفافة منذ اليوم الأول.",
      features: [
        {
          title: "تقديرات تكلفة شفافة",
          body: "استلم جداول تكلفة مفصّلة تُمكّنك من مقارنة عروض المقاولين بثقة وتحدي أي أرقام مبالغ فيها.",
        },
        {
          title: "جدول الكميات",
          body: "يُعدّ الاستشاريون جدول كميات شاملاً يشمل جميع التخصصات والمواد — دون أي مفاجآت خلال التنفيذ.",
        },
        {
          title: "تحليل العطاءات",
          body: "احصل على مراجعة متخصصة لعروض المقاولين للكشف عن التناقضات والثغرات وفرص هندسة القيمة.",
        },
        {
          title: "متابعة التكلفة المستمرة",
          body: "تتبع تقارير التكلفة الشهرية المتغيرات وتُبقي ميزانيتك على المسار الصحيح طوال فترة البناء.",
        },
      ],
    },
    feature2: {
      eyebrow: "التصميم والتسليم",
      headline: "من الفكرة إلى التنفيذ",
      body: "العمارة والتصميم الداخلي وتنسيق المشاريع والإشراف المستقل — اجمع كل الخبرات التي تحتاجها في مشروعك عبر منصة واحدة.",
      features: [
        {
          title: "العمارة والتصميم الداخلي",
          body: "يترجم الاستشاريون التصميميون متطلباتك إلى مخططات منسّقة جاهزة لمناقصة المقاولين.",
        },
        {
          title: "إدارة المشاريع",
          body: "يتولى مستشار إدارة المشروع إدارة البرنامج الزمني والميزانية وواجهات المقاولين نيابةً عنك — لتتفرغ لما يهمك.",
        },
        {
          title: "الإشراف المستقل",
          body: "يتفقد استشاريو الإشراف الأعمال في الموقع ويرفعون تقاريرهم مباشرةً إليك — لا إلى المقاول.",
        },
        {
          title: "التسليم ورصد العيوب",
          body: "يُعدّ الاستشاريون قوائم العيوب ويتحققون من إصلاحها قبل قبول الأعمال المنجزة.",
        },
      ],
    },
    videoDesc:
      "شاهد كم هو سهل نشر مشروعك واستقبال عروض الاستشاريين ومقارنتها — كل ذلك في لوحة تحكم واحدة.",
    story: {
      quote: '"وفّر لنا مساح الكميات 180,000 درهم قبل أن تبدأ الأعمال."',
      body: "نشر صاحب فيلا في أبوظبي مشروعه على إنشاء، وتلقى ثلاثة عروض من مساحي الكميات خلال 48 ساعة، واختار الاستشاري المناسب لمشروعه البالغة تكلفته 2.4 مليون درهم. كشفت خطة التكلفة عن بنود مبالغ في تسعيرها ضمن عرض المقاول — مما أسفر عن توفير ما يقارب 8% من إجمالي قيمة المشروع.",
      name: "صاحب فيلا في أبوظبي",
      detail: "فيلا بأربع غرف نوم، اكتملت عام 2026",
    },
    hiwIntro:
      "من نشر نطاق عملك إلى التعاقد مع الاستشاري المناسب — أربع خطوات بسيطة.",
    steps: [
      {
        num: "01",
        title: "انشر متطلباتك",
        body: "صِف نطاق مشروعك ونوع العقار ونوع الدعم الاستشاري الذي تحتاجه. بدون رسوم تسجيل أو أي التزام.",
      },
      {
        num: "02",
        title: "استقبل العروض",
        body: "يُقدّم الاستشاريون عروضاً تفصيلية تشمل النطاق والمنهجية والجدول الزمني والأتعاب.",
      },
      {
        num: "03",
        title: "قارن جنباً إلى جنب",
        body: "راجع المؤهلات والخبرات ذات الصلة والمنهجية والأسعار — كل ذلك في لوحة تحكم واحدة.",
      },
      {
        num: "04",
        title: "تعاقد بثقة",
        body: "اختر الأنسب وأدر كل شيء من إنشاء.",
      },
    ],
    typesHeadline: "ابحث عن الاستشاري المناسب لمشروعك",
    types: [
      {
        title: "مساحو الكميات",
        desc: "خطط التكلفة وجداول الكميات وتحليل العطاءات ومتابعة التكلفة.",
      },
      {
        title: "إدارة المشاريع",
        desc: "البرنامج الزمني والميزانية وتنسيق الواجهات نيابةً عنك.",
      },
      {
        title: "الاستشاريون التصميميون",
        desc: "العمارة والتصميم الداخلي والتنسيق الخارجي — من الفكرة إلى المخططات.",
      },
      {
        title: "الإشراف",
        desc: "التفتيش المستقل على الموقع وضمان الجودة.",
      },
    ],
    faqs: [
      {
        q: "ما الذي يقوم به مساح الكميات وهل أحتاج إليه؟",
        a: "يُقدّر مساح الكميات التكاليف ويُعدّ جداول الكميات ويُقيّم عروض المقاولين ويتابع التكاليف طوال فترة البناء. إذا تجاوزت ميزانيتك 500,000 درهم، يمكن لمساح الكميات أن يوفّر لك ما يفوق أتعابه بكثير.",
      },
      {
        q: "كم تبلغ تكلفة مستشار إدارة المشاريع في الإمارات؟",
        a: "تتراوح أتعاب مستشار إدارة المشاريع عادةً بين 3% و8% من إجمالي تكلفة المشروع بحسب النطاق والتعقيد. انشر مشروعك على إنشاء لمقارنة العروض واختيار الأنسب.",
      },
      {
        q: "هل يمكنني العثور على استشاري تصميم داخلي على إنشاء؟",
        a: "نعم. انشر متطلبات التصميم — نوع العقار والأسلوب والتصميم والمساحة — واستقبل عروضاً منظّمة من الاستشاريين التصميميين في جميع أنحاء الإمارات.",
      },
      {
        q: "هل البحث عن استشاري على إنشاء مجاني؟",
        a: "نعم. نشر مشروعك واستقبال العروض ومقارنة الاستشاريين لا يكلف أصحاب المنازل شيئاً.",
      },
    ],
  },
  engineers: {
    feature1: {
      eyebrow: "الإنشاء والأعمال المدنية",
      headline: "ابنِ على أساس متين",
      body: "تشترط موافقات البلديات في أبوظبي ودبي والشارقة مخططات هندسية مختومة قبل إصدار أي تصريح بناء. احرص على إشراك المهندس المناسب قبل وضع أي لبنة.",
      features: [
        {
          title: "التصميم الإنشائي",
          body: "الأساسات والأعمدة والعوارض والبلاطات مُصمَّمة ومختومة من مهندس إنشائي مرخّص — شرط أساسي للحصول على أي تصريح بناء.",
        },
        {
          title: "الأعمال المدنية وأعمال الموقع",
          body: "تسوية الموقع وأعمال الصرف والحفريات والبنية التحتية الخارجية يتولاها المهندسون المدنيون قبل بدء البناء.",
        },
        {
          title: "التقارير الجيوتقنية",
          body: "التحقيق في التربة وتوصيات الأساسات — غالباً ما تُشترط في الإمارات قبل الشروع في التصميم الإنشائي.",
        },
        {
          title: "مخططات جاهزة للتصريح",
          body: "مخططات منسّقة مُقدَّمة وفق الصيغة المطلوبة من بلديات أبوظبي ودبي والشارقة.",
        },
      ],
    },
    feature2: {
      eyebrow: "الميكانيكا والكهرباء والسباكة والإشراف",
      headline: "كل منظومة في كل مرحلة",
      body: "من أنظمة التكييف والتوزيع الكهربائي إلى ضبط الجودة في الموقع — إنشاء يربطك بالمتخصص الذي تحتاجه في كل مرحلة من مراحل مشروعك.",
      features: [
        {
          title: "هندسة الميكانيكا والكهرباء والسباكة",
          body: "تصميم وتنسيق أنظمة التكييف والكهرباء والسباكة والحريق والأنظمة الضعيفة التيار وفق المواصفات.",
        },
        {
          title: "الإشراف المستقل",
          body: "يتفقد مهندسو الإشراف الأعمال في الموقع مقارنةً بالمخططات المعتمدة ويرفعون تقاريرهم مباشرةً إليك — لا إلى المقاول.",
        },
        {
          title: "أنظمة BMS والمنازل الذكية",
          body: "تصميم أنظمة إدارة المباني وتكامل المنزل الذكي بالتوازي مع حزمة الميكانيكا والكهرباء الرئيسية.",
        },
        {
          title: "التشغيل والتسليم",
          body: "يتحقق المهندسون من اختبار جميع الأنظمة وتشغيلها وأدائها وفق التصميم قبل استلامك للمشروع.",
        },
      ],
    },
    videoDesc:
      "شاهد كم هو سهل نشر مشروعك واستقبال عروض المهندسين ومقارنتها — كل ذلك في لوحة تحكم واحدة.",
    story: {
      quote:
        '"حصلنا على ثلاثة عروض إنشائية في غضون 48 ساعة — وهو ما لم يكن بمقدورنا تحقيقه بمفردنا."',
      body: "نشر مطور في دبي مشروع فيلاه على إنشاء، وتلقى عروضاً متنافسة من ثلاثة مهندسين إنشائيين، واختار أحدهم لامتلاكه خبرة في موافقات بلدية مماثلة. كانت المخططات جاهزةً للتصريح وجرى تقديمها في غضون ثلاثة أسابيع.",
      name: "مطور فيلا في دبي",
      detail: "فيلا بخمس غرف نوم، اكتملت عام 2026",
    },
    hiwIntro:
      "من نشر مشروعك إلى التعاقد مع المهندس المناسب — أربع خطوات واضحة.",
    steps: [
      {
        num: "01",
        title: "انشر مشروعك",
        body: "صِف متطلباتك الهندسية — نوع المشروع والموقع والنطاق والاحتياجات التقنية. بدون رسوم تسجيل أو أي التزام.",
      },
      {
        num: "02",
        title: "استقبل العروض",
        body: "يرد المهندسون المؤهَّلون وذوو الخبرة ذات الصلة بعروض تفصيلية.",
      },
      {
        num: "03",
        title: "قارن المؤهلات",
        body: "راجع المؤهلات والخبرات ونطاق الخدمات والأتعاب — كل ذلك في لوحة تحكم واحدة.",
      },
      {
        num: "04",
        title: "تعاقد بثقة",
        body: "اختر المهندس الذي يتوافق مع متطلباتك التقنية وميزانيتك.",
      },
    ],
    typesHeadline: "ابحث عن المهندس المناسب لمشروعك",
    types: [
      {
        title: "المهندسون الإنشائيون",
        desc: "الأساسات والأعمدة والعوارض والبلاطات والمخططات الجاهزة للتصريح.",
      },
      {
        title: "مهندسو الميكانيكا والكهرباء والسباكة",
        desc: "التكييف والكهرباء والسباكة وأنظمة الحريق وأنظمة BMS.",
      },
      {
        title: "المهندسون المدنيون",
        desc: "أعمال الموقع والتسوية والصرف والبنية التحتية الخارجية.",
      },
      {
        title: "مهندسو الإشراف",
        desc: "ضبط الجودة في الموقع وفق المخططات المعتمدة.",
      },
      {
        title: "المهندسون الجيوتقنيون",
        desc: "التحقيق في التربة وتوصيات الأساسات.",
      },
    ],
    faqs: [
      {
        q: "هل أحتاج إلى مهندس إنشائي لبناء أو تجديد فيلا في الإمارات؟",
        a: "نعم. في أبوظبي ودبي والشارقة، تشترط لوائح البلديات وجود مخططات إنشائية معتمدة موقَّعة من مهندس مرخّص قبل إصدار أي تصريح بناء. حتى لمشاريع التجديد التي تشمل تعديلات إنشائية، يُشترط تقييم المهندس الإنشائي وموافقته.",
      },
      {
        q: "ما الفرق بين المهندس الإنشائي والمهندس المدني؟",
        a: "يصمم المهندس الإنشائي الهيكل الحامل للمبنى — الأساسات والأعمدة والعوارض والبلاطات. أما المهندس المدني فيتولى أعمال الموقع والحفريات والصرف والطرق والبنية التحتية الخارجية. لبناء فيلا جديدة قد تحتاج إلى كليهما.",
      },
      {
        q: "كم تبلغ تكلفة المهندس الإنشائي في الإمارات؟",
        a: "يتراوح التصميم الإنشائي لفيلا قياسية عادةً بين 15,000 و50,000 درهم بحسب المساحة وعدد الطوابق. انشر مشروعك على إنشاء لاستقبال عروض متعددة ومقارنة الأسعار.",
      },
      {
        q: "هل يمكنني العثور على مهندسي ميكانيكا وكهرباء وسباكة على إنشاء للمشاريع التجارية؟",
        a: "نعم. تربطك إنشاء بمهندسي الميكانيكا والكهرباء والسباكة للمشاريع السكنية والتجارية على حدٍّ سواء، بما يشمل تصميم التكييف وتوزيع الكهرباء والسباكة وأنظمة الحريق والأنظمة الضعيفة التيار.",
      },
      {
        q: "هل البحث عن مهندس على إنشاء مجاني؟",
        a: "نعم. نشر مشروعك واستقبال العروض ومقارنة المهندسين مجاني تماماً لأصحاب المنازل والمطورين.",
      },
    ],
  },
  contractors: {
    feature1: {
      eyebrow: "البناء الكامل والتجديد",
      headline: "عقد واحد، صفر متاعب",
      body: "سواء كنت تبني فيلا من الصفر أو تجدد مطبخاً، تربطك إنشاء بمقاولين موثَّقين يُنجزون — لا يكتفون بتقديم العروض فحسب.",
      features: [
        {
          title: "عروض أسعار متنافسة",
          body: "احصل على 3 إلى 5 عروض تفصيلية لكل مشروع. قارن الأسعار والنطاق والمؤهلات جنباً إلى جنب — لا مقاولاً واحداً في كل مرة.",
        },
        {
          title: "موثَّق قبل تقديم العرض",
          body: "تُراجع الرخصة التجارية والمؤهلات وسجل الأعمال قبل أن يتمكن أي مقاول من استقبال استفسار على إنشاء.",
        },
        {
          title: "لوحة تحكم واحدة",
          body: "العروض والوثائق والرسائل ومتابعة المشروع — كل شيء في مكان واحد. لا مزيد من سلاسل الواتساب.",
        },
        {
          title: "مُصمَّم لقطاع البناء في الإمارات",
          body: "مُصمَّم للفلل وأعمال الميكانيكا والكهرباء والتجديد والتشطيبات وأكثر من 30 تخصصاً في أبوظبي ودبي والشارقة.",
        },
      ],
    },
    feature2: {
      eyebrow: "الميكانيكا والكهرباء والتخصصات",
      headline: "كل تخصص، منصة واحدة",
      body: "من الكهرباء والسباكة إلى العزل المائي والمنزل الذكي — انشر نطاق تخصصك مرةً واحدة واستقبل عروضاً من مقاولي التخصص المناسب.",
      features: [
        {
          title: "مقاولو الميكانيكا والكهرباء والسباكة",
          body: "أعمال الكهرباء والسباكة والتكييف وأنظمة الحريق والأنظمة الضعيفة التيار تُنفَّذ وتُشغَّل وفق المواصفات.",
        },
        {
          title: "التجديد والتشطيب",
          body: "المطابخ والحمامات والتجديد الكامل وترقيات الشقق — دون الحاجة لتنسيق عشرة طواقم منفصلة.",
        },
        {
          title: "التخصصات الدقيقة",
          body: "البلاط والدهانات والعزل المائي والأرضيات والنجارة وتنسيق الحدائق وأكثر من 20 فئة متخصصة أخرى.",
        },
        {
          title: "بناء فيلا جديدة",
          body: "من هيكل الأعمال الخشنة حتى التشطيب الكامل — انشر النطاق الكامل أو قسّمه إلى مراحل.",
        },
      ],
    },
    videoDesc:
      "شاهد كم هو سهل نشر مشروعك واستقبال عروض المقاولين ومقارنتها — كل ذلك في لوحة تحكم واحدة.",
    story: {
      quote:
        '"تلقينا أربعة عروض في يومين — وقد أمضينا أسابيع نحاول إيجاد مقاول واحد قبل ذلك."',
      body: "نشر صاحب منزل في أبوظبي مشروع تجديد فيلا كامل على إنشاء وتلقى أربعة عروض متنافسة خلال 48 ساعة. قارنوا المؤهلات وتفاصيل النطاق والأسعار جنباً إلى جنب، واختاروا مقاولاً يمتلك خبرة مباشرة في مشاريع مماثلة لدى بلدية أبوظبي.",
      name: "صاحب منزل في أبوظبي",
      detail: "تجديد فيلا كامل، اكتمل عام 2026",
    },
    hiwIntro:
      "من نشر مشروعك إلى التوظيف بثقة — أربع خطوات واضحة.",
    steps: [
      {
        num: "01",
        title: "انشر مشروعك",
        body: "صِف نطاق عملك وموقعك وميزانيتك في دقائق. أضف صوراً أو مخططات — بدون رسوم تسجيل أو أي التزام.",
      },
      {
        num: "02",
        title: "استقبل عروضاً موثَّقة",
        body: "يرد المقاولون المرخَّصون والمُتحقَّق من مؤهلاتهم بعروض تفصيلية مُصمَّمة خصيصاً لمشروعك.",
      },
      {
        num: "03",
        title: "قارن جنباً إلى جنب",
        body: "راجع الأسعار والمؤهلات وسجل الأعمال في لوحة تحكم واحدة. لا مزيد من مطاردة المقاولين على الواتساب.",
      },
      {
        num: "04",
        title: "وظّف بثقة",
        body: "اختر الأنسب لميزانيتك وجدولك الزمني. أدر التعاقد كله من إنشاء.",
      },
    ],
    whoCanHire: "من يمكنك توظيفه",
    typesHeadline: "أنواع المقاولين على إنشاء",
    types: [
      {
        title: "المقاولون العامون",
        desc: "عقد واحد يشمل الهيكل وتنسيق أعمال الميكانيكا والكهرباء والتشطيبات والتسليم.",
      },
      {
        title: "مقاولو الميكانيكا والكهرباء والسباكة",
        desc: "الكهرباء والسباكة والتكييف والحريق والأنظمة الضعيفة التيار تُنفَّذ وفق المواصفات.",
      },
      {
        title: "التجديد والتشطيب",
        desc: "الفلل والشقق — المطابخ والحمامات والترقيات والتجديد الكامل.",
      },
    ],
    specialistTitle: "التخصصات الدقيقة",
    specialistBody:
      "تغطي إنشاء أيضاً عشرات التخصصات المرخَّصة — انشر نطاق تخصصك وسنُبرز لك المقاولين المناسبين.",
    specialistCount: "أكثر من 30 فئة",
    specialistTrades: [
      "الكهرباء",
      "السباكة",
      "التكييف",
      "الدهانات",
      "البلاط",
      "العزل المائي",
      "الأسقف المستعارة",
      "الألمنيوم والزجاج",
      "الأرضيات",
      "النجارة",
      "البناء والتشييد",
      "تنسيق الحدائق",
      "المسابح",
      "السلامة من الحريق",
      "المنزل الذكي",
      "الهدم",
    ],
    faqs: [
      {
        q: "كم يكلف استخدام إنشاء للعثور على مقاول؟",
        a: "لا شيء. إنشاء مجاني تماماً لأصحاب المنازل. تنشر مشروعك وتستقبل العروض وتقارن المقاولين دون أي تكلفة. تُبرم الاتفاقيات المالية مباشرةً بينك وبين المقاول الذي تختاره.",
      },
      {
        q: "كيف تُراجع إنشاء المقاولين قبل إدراجهم؟",
        a: "يخضع كل مقاول على إنشاء لمراجعة تشمل الرخصة التجارية الإماراتية السارية ومؤهلات العمل وسجل المشاريع السابقة. المقاولون الذين يجتازون هذه المراجعة فقط يمكنهم استقبال استفسارات المشاريع على المنصة.",
      },
      {
        q: "هل يمكنني نشر مشروع لتخصص محدد كالكهرباء أو السباكة؟",
        a: "نعم. يمكنك نشر مشروع لأي من فئات التخصص الـ 30 أو أكثر. حدِّد النطاق بدقة وسيرد فقط المقاولون المتخصصون في ذلك التخصص.",
      },
      {
        q: "ما الفرق بين توظيف مقاول رئيسي ومقاول فرعي على إنشاء؟",
        a: "يدير المقاول الرئيسي مشروعك بالكامل من البداية إلى النهاية. أما المقاول الفرعي فيتولى نطاقاً محدداً كالكهرباء أو السباكة أو البلاط. تدعم إنشاء كلا النوعين — اختر بناءً على احتياجات مشروعك.",
      },
      {
        q: "ما المناطق التي تخدمها إنشاء؟",
        a: "تخدم إنشاء حالياً أبوظبي ودبي والشارقة، ونعمل على التوسع في جميع أنحاء الإمارات.",
      },
      {
        q: "كم يستغرق استقبال العروض بعد نشر المشروع؟",
        a: "بالنسبة لمعظم المشاريع، يمكنك توقع بدء استقبال العروض خلال يوم إلى يومين من النشر.",
      },
    ],
  },
  join: {
    stats: [
      { value: "مجاني", label: "للانضمام خلال فترة الإطلاق" },
      { value: "48 ساعة", label: "متوسط وقت المراجعة" },
      { value: "3+", label: "إمارات مشمولة" },
    ],
    feature1: {
      eyebrow: "ملفك الشخصي والفرص",
      headline: "مشاريع تصلك، دون بحث",
      body: "ينشر أصحاب المنازل موجزات مشاريع تفصيلية — النطاق والموقع والميزانية والجدول الزمني. تتلقى إشعاراً بالمشاريع التي تتوافق مع خدماتك وتختار ما تودّ تقديم عرض عليه.",
      features: [
        {
          title: "فرص مشاريع واردة",
          body: "استقبل إشعارات بالمشاريع التي تتوافق مع تخصصك وخدماتك ومنطقة خدمتك. لا مزيد من الاتصال البارد أو مطاردة الإحالات.",
        },
        {
          title: "ملف شخصي احترافي",
          body: "يعرض ملفك على إنشاء رخصتك التجارية ومؤهلاتك ومشاريعك السابقة وتقييمات العملاء — واجهتك الرقمية أمام كل صاحب منزل يبحث عن خدماتك.",
        },
        {
          title: "أنت تختار ما تعرض عليه",
          body: "راجع تفاصيل المشروع وقدّم عرض أسعار فقط عندما يتوافق المشروع مع طاقتك وخبرتك. لا إلزام بالعرض على كل فرصة.",
        },
        {
          title: "لوحة تحكم واحدة",
          body: "أدر الاستفسارات والعروض المقدَّمة والتواصل مع العملاء من مكان واحد. لا مزيد من خيوط الواتساب المتشعبة.",
        },
      ],
    },
    feature2: {
      eyebrow: "التحقق والثقة",
      headline: "عملاء جاهزون للتوظيف",
      body: "كل صاحب منزل على إنشاء نشر مشروعاً حقيقياً بنطاق حقيقي. وكل محترف يخضع للتحقق قبل أن يتلقى أي فرصة — لتتنافس على الجودة لا على السعر وحده.",
      features: [
        {
          title: "محترفون موثَّقون فقط",
          body: "يراجع فريقنا رخصتك التجارية ومؤهلات عملك وخبرتك في المشاريع السابقة. المحترفون الذين يجتازون المراجعة فقط يُفعَّلون على المنصة.",
        },
        {
          title: "موجزات مشاريع جدية",
          body: "ينشر أصحاب المنازل موجزات منظّمة تشمل النطاق ونوع العقار والموقع والميزانية — لا رسائل واتساب مبهمة.",
        },
        {
          title: "مجاني خلال فترة الإطلاق",
          body: "إنشاء ملفك الشخصي وإتمام التحقق واستقبال استفسارات المشاريع مجاني حالياً. يستفيد المحترفون المبكرون من وصول كامل مع نمو المنصة.",
        },
        {
          title: "التوسع في جميع أنحاء الإمارات",
          body: "تخدم إنشاء حالياً أبوظبي ودبي والشارقة، مع إضافة إمارات أخرى قريباً.",
        },
      ],
    },
    videoDesc:
      "شاهد كيف تعمل لوحة تحكم إنشاء — من استقبال فرص المشاريع إلى تقديم العروض والفوز بالعمل.",
    gettingStarted: "ابدأ الآن",
    howToJoin: "كيفية الانضمام",
    hiwIntro:
      "من إنشاء ملفك الشخصي إلى استقبال أول فرصة — أربع خطوات واضحة.",
    steps: [
      {
        num: "01",
        title: "أنشئ ملفك الشخصي",
        body: "أخبرنا عن نشاطك التجاري: الخدمات المقدَّمة والمناطق المشمولة وسنوات الخبرة.",
      },
      {
        num: "02",
        title: "قدّم وثائقك",
        body: "ارفع رخصتك التجارية الإماراتية السارية وسجل الأعمال ونماذج من مشاريعك السابقة.",
      },
      {
        num: "03",
        title: "اخضع للمراجعة",
        body: "يراجع فريقنا وثائقك. المحترفون الذين يجتازون المراجعة فقط يُفعَّلون على المنصة.",
      },
      {
        num: "04",
        title: "ابدأ استقبال الفرص",
        body: "بمجرد التفعيل، تبدأ استقبال استفسارات المشاريع من أصحاب المنازل والمطورين في منطقة خدمتك. راجع وعرض واكسب.",
      },
    ],
    openTo: "مفتوح لـ",
    whoCanJoin: "من يمكنه الانضمام إلى إنشاء؟",
    categories: [
      {
        title: "المقاولون",
        desc: "المقاولون العامون ومقاولو الميكانيكا والكهرباء ومتخصصو التجديد ومقاولو التشطيب وأكثر من 30 تخصصاً.",
      },
      {
        title: "المهندسون",
        desc: "المهندسون الإنشائيون والميكانيكيون والمدنيون والإشرافيون والجيوتقنيون.",
      },
      {
        title: "الاستشاريون",
        desc: "مساحو الكميات ومديرو المشاريع والاستشاريون التصميميون واستشاريو الإشراف.",
      },
    ],
    faqTitle: "أسئلة شائعة",
    faqBody: "كل ما تحتاج معرفته حول الانضمام إلى إنشاء كمحترف.",
    faqs: [
      {
        q: "هل الانضمام إلى إنشاء مجاني؟",
        a: "نعم. يمكن للمحترفين إنشاء ملف شخصي وإتمام التحقق واستقبال استفسارات المشاريع دون أي تكلفة خلال فترة إطلاق المنصة. سيُعلَن مسبقاً عن أي خطط اشتراك مستقبلية.",
      },
      {
        q: "ما الوثائق التي أحتاجها للانضمام؟",
        a: "ستحتاج إلى رخصة تجارية إماراتية سارية وسجل تجاري أو رخصة تجارية ومعلومات عن خبرتك في المشاريع السابقة. يراجع فريقنا هذه الوثائق قبل تفعيل ملفك.",
      },
      {
        q: "هل يمكنني اختيار المشاريع التي أعرض عليها؟",
        a: "نعم. تتلقى إشعارات بالمشاريع بناءً على خدماتك وموقعك. تراجع التفاصيل وتقرر ما إذا كنت ستقدم عرض أسعار. لا إلزام بالعرض على كل مشروع.",
      },
      {
        q: "من أي مناطق يمكنني استقبال الفرص؟",
        a: "يمكنك تحديد منطقة خدمتك لتشمل أبوظبي أو دبي أو الشارقة أو أي تركيبة منها. تستقبل فقط الاستفسارات من المناطق التي تختارها.",
      },
      {
        q: "متى أبدأ استقبال فرص المشاريع؟",
        a: "بمجرد مراجعة وثائقك وتفعيل ملفك الشخصي، تبدأ استقبال استفسارات المشاريع فوراً بناءً على خدماتك وموقعك.",
      },
    ],
    ctaEyebrow: "ابدأ الآن",
    ctaHeadline: "هل أنت مستعد لتنمية أعمالك؟",
    ctaBody:
      "أنشئ ملفك المهني اليوم وابدأ استقبال استفسارات المشاريع من أصحاب المنازل والمطورين في جميع أنحاء الإمارات.",
  },
  hero: {
    h1Part1: "ابنِ بذكاء مع",
    h1Brand: "إنشاء",
    body: "إنشاء منصة رقمية تربط العملاء بالمقاولين والمهندسين والاستشاريين الموثوقين. ابحث عن محترفين موثوقين، واطلب عروض الأسعار، وأدر مشاريعك في مكان واحد.",
    postProject: "انشر مشروعك مجاناً",
    watchOverview: "شاهد نظرة عامة",
  },
  journeySteps: {
    eyebrow: "كيف يعمل",
    h2: "رحلة مشروعك، بكل بساطة",
    body: "من نشر مشروعك إلى التعاقد بثقة — أربع خطوات واضحة.",
    steps: [
      { num: "01", title: "انشر طلبك", description: "صف نطاق مشروعك وموقعه وميزانيتك في دقائق. أضف صوراً أو مخططات — بدون رسوم تسجيل أو التزامات." },
      { num: "02", title: "احصل على عروض متعددة", description: "يرد المقاولون والمهندسون والاستشاريون الموثوقون بمقترحات مفصلة مصممة لمشروعك." },
      { num: "03", title: "قارن واختر", description: "راجع الأسعار والمؤهلات والنطاق والعمل السابق جنباً إلى جنب في لوحة تحكم واحدة — لا مزيد من الملاحقة على واتساب." },
      { num: "04", title: "أدر وتابع", description: "تعاقد بثقة وأدر الارتباط بالكامل — المستندات والتحديثات والتواصل — من إنشاء." },
    ],
  },
  footer: {
    tagline: "ربط أصحاب المنازل بالمقاولين والمهندسين والاستشاريين الموثوقين في الإمارات.",
    homeownersCol: "لأصحاب المنازل",
    professionalsCol: "للمحترفين",
    companyCol: "الشركة",
    findContractors: "البحث عن مقاولين",
    findEngineers: "البحث عن مهندسين",
    findConsultants: "البحث عن استشاريين",
    postYourProject: "انشر مشروعك",
    signUpPro: "التسجيل كمحترف",
    signInPortal: "تسجيل الدخول للبوابة",
    howProGetLeads: "كيف يحصل المحترفون على فرص",
    aboutInchaa: "عن إنشاء",
    howItWorks: "كيف يعمل",
    faqs: "الأسئلة الشائعة",
    contactUs: "تواصل معنا",
    downloadOn: "تنزيل على",
    getItOn: "متاح على",
    appStore: "App Store",
    googlePlay: "Google Play",
    allRightsReserved: "جميع الحقوق محفوظة.",
    terms: "شروط الاستخدام",
    privacy: "سياسة الخصوصية",
  },
  faqsPage: {
    heroH1: "الأسئلة الشائعة",
    heroBody: "كل ما تحتاج معرفته عن إيجاد وتوظيف محترفي البناء على إنشاء — سواء كنت صاحب منزل أو مطوراً أو محترفاً في البناء.",
    homeownersTitle: "لأصحاب المنازل",
    homeownersBody: "البناء أو التجديد أو صيانة عقار في الإمارات.",
    developersTitle: "للمطورين والمقاولين الرئيسيين",
    developersBody: "البحث عن مقاولين فرعيين وإدارة المشتريات عبر تخصصات متعددة.",
    professionalsTitle: "للمقاولين والمهندسين والاستشاريين",
    professionalsBody: "تنمية أعمالك واستقبال فرص مشاريع مؤهلة.",
    homeownerFaqs: [
      { q: "ما هي إنشاء؟", a: "إنشاء هي سوق البناء الموثوق في الإمارات. نربط أصحاب المنازل بالمقاولين والمهندسين والاستشاريين المرخصين في أبوظبي ودبي والشارقة. انشر مشروعك واحصل على عروض متعددة وقارن جنباً إلى جنب وتعاقد بثقة — كل ذلك من منصة واحدة." },
      { q: "هل إنشاء مجانية لأصحاب المنازل؟", a: "نعم. نشر المشروع واستقبال العروض ومقارنة المحترفين مجاني تماماً. لا تدفع شيئاً لاستخدام إنشاء — الاتفاقيات المالية تتم مباشرة بينك وبين المحترف الذي تختاره." },
      { q: "كيف تعمل إنشاء؟", a: "انشر مشروعك مع تفاصيل كنوع العقار والموقع والمساحة والميزانية. يستقبل المحترفون المرخصون في منطقتك طلبك ويردون بعروض أسعار مفصلة. تقارنها جنباً إلى جنب — الأسعار والمؤهلات والعمل السابق — وتختار الأنسب. كل شيء يُدار من لوحة تحكم واحدة." },
      { q: "ما أنواع المشاريع التي يمكنني نشرها على إنشاء؟", a: "بناء الفلل، تشطيب الشقق، التجديد، أعمال الكهروميكانيكا (كهرباء، سباكة، تكييف، إطفاء حريق)، الأعمال الإنشائية والخرسانية، الأسقف المستعارة، الأرضيات، البلاط، الطلاء، العزل المائي، الألومنيوم والزجاج، الأبواب والنجارة، تنسيق الحدائق، الهدم، وأكثر من 30 تخصصاً آخر." },
      { q: "ما المناطق التي تغطيها إنشاء في الإمارات؟", a: "تخدم إنشاء حالياً أبوظبي ودبي والشارقة. نحن في توسع مستمر عبر الإمارات." },
      { q: "كيف تراجع إنشاء المقاولين قبل إدراجهم؟", a: "كل محترف على إنشاء يُراجَع للتحقق من صحة رخصة التجارة الإماراتية والمؤهلات التجارية وخبرة المشاريع السابقة قبل الإدراج. فقط المحترفون الذين يجتازون هذه المراجعة يمكنهم استقبال استفسارات المشاريع." },
      { q: "كم عرض سعر سأتلقى؟", a: "يعتمد العدد على نوع مشروعك وتوفر المحترفين في منطقتك. هدفنا تقديم مقترحات متنافسة متعددة لتتخذ قراراً مستنيراً بناءً على الحقائق." },
      { q: "هل يمكنني مقارنة عروض الأسعار جنباً إلى جنب؟", a: "نعم. تتيح لك لوحة تحكم إنشاء عرض ومقارنة عروض أسعار متعددة في مكان واحد — الأسعار ونطاق العمل والمؤهلات والتقييمات." },
      { q: "هل تتولى إنشاء المدفوعات؟", a: "لا. تتم الاتفاقيات المالية مباشرة بينك وبين المحترف. تركز إنشاء على ربطك بالأشخاص المناسبين ومساعدتك في المقارنة وتوفير لوحة التحكم لإدارة العملية." },
      { q: "كيف تختلف إنشاء عن البحث عن مقاولين على واتساب؟", a: "مع الكلام الشفهي، تعتمد على توصية واحدة وتأمل الأفضل. مع إنشاء، كل محترف مُراجَع قبل الإدراج. تحصل على عروض أسعار متنافسة متعددة بدلاً من الاعتماد على إحالة واحدة. وكل شيء موثق في مكان واحد." },
      { q: "هل يمكنني نشر مشروع للأعمال الهندسية أو الاستشارية؟", a: "نعم. تربطك إنشاء بالمهندسين الإنشائيين ومهندسي الكهروميكانيكا والمدنيين واستشاريي إدارة المشاريع ومساحي الكميات واستشاريي التصميم." },
      { q: "ماذا لو لم أكن راضياً عن أي من العروض؟", a: "أنت غير ملزم بقبول أي عرض. إذا لم يلبِّ أي من المقترحات توقعاتك، يمكنك رفضها جميعاً. إنشاء مجانية — تمضي قدماً فقط عندما تجد التطابق المناسب." },
      { q: "هل تتم مشاركة معلوماتي الشخصية مع جميع المقاولين؟", a: "لا. تتم مشاركة تفاصيل مشروعك مع المحترفين ذوي الصلة الذين يطابقون متطلباتك. معلومات الاتصال الشخصية تُشارَك فقط عندما تختار التعامل مع محترف محدد." },
      { q: "كم من الوقت يستغرق استقبال العروض؟", a: "تتفاوت أوقات الاستجابة حسب نوع المشروع والموقع. لمعظم المشاريع، يمكنك توقع بدء استقبال العروض في غضون أيام قليلة من النشر." },
      { q: "هل تغطي إنشاء بناء الفلل والمشاريع الجديدة، وليس فقط التجديد؟", a: "نعم. تغطي إنشاء الطيف الكامل — من بناء الفلل الجديدة والتشطيبات الكاملة إلى التجديد وإعادة التصميم وأعمال التخصصات." },
    ],
    developerFaqs: [
      { q: "كيف يمكن للمطورين والمقاولين الرئيسيين استخدام إنشاء لإيجاد مقاولين فرعيين؟", a: "يمكن للمطورين والمقاولين الرئيسيين نشر متطلبات المشروع على إنشاء واستقبال عروض أسعار من مقاولين فرعيين متخصصين عبر أكثر من 30 فئة تجارية." },
      { q: "هل يمكنني نشر مشاريع متعددة في وقت واحد؟", a: "نعم. يمكنك نشر وإدارة مشاريع متعددة من حساب واحد. يحصل كل مشروع على مجموعته من العروض، ويمكنك تتبعها جميعاً من لوحة تحكم إنشاء." },
      { q: "ما أنواع المقاولين الفرعيين المتاحين؟", a: "تغطي إنشاء جميع تخصصات البناء الرئيسية — الخرسانة، أعمال البلوك، الكهرباء، السباكة، التكييف، إطفاء الحريق، اللياسة، الطلاء، الأرضيات، الأسقف المستعارة، الجبس، الألومنيوم والزجاج، الأبواب، العزل المائي، والمزيد." },
      { q: "هل تغطي إنشاء المشاريع التجارية والصناعية؟", a: "نعم. تدعم إنشاء المشاريع السكنية والتجارية والصناعية ومتعددة الاستخدامات. يمكنك تحديد نوع العقار عند نشر المشروع." },
      { q: "هل يمكنني استخدام إنشاء للتطويرات السكنية واسعة النطاق؟", a: "نعم. يمكن للمطورين الذين يبنون وحدات متعددة استخدام إنشاء للبحث عن مقاولين فرعيين لكل حزمة تجارية." },
      { q: "كيف تسير عملية تقديم العروض لمشتريات المقاولين الفرعيين؟", a: "انشر مشروعك مع نطاق العمل والموقع والمساحة والمتطلبات المحددة. يستقبل المقاولون الفرعيون ذوو الصلة طلبك ويقدمون عروض أسعار مفصلة." },
      { q: "هل يمكنني مقارنة عروض أسعار المقاولين الفرعيين عبر تخصصات متعددة؟", a: "نعم. انشر متطلبات منفصلة لكل تخصص وقارن العروض داخل كل تخصص بشكل مستقل لرؤية كاملة لتكاليف المقاولين الفرعيين." },
      { q: "هل إنشاء مناسبة للبحث عن مقاولين فرعيين في الكهروميكانيكا والهيكل والتشطيبات؟", a: "نعم. لدى إنشاء محترفون في تخصصات الكهروميكانيكا والهيكل والتشطيبات. كل فئة مدرجة بشكل منفصل للبحث عن التخصص المطلوب بدقة." },
      { q: "هل يمكن لفريق مشروعي إدارة طلبات متعددة من حساب واحد؟", a: "نعم. جميع منشورات المشاريع وعروض الأسعار المستلمة متاحة من لوحة تحكم واحدة." },
    ],
    professionalFaqs: [
      { q: "كيف أنضم إلى إنشاء كمقاول أو مهندس أو استشاري؟", a: "تفضل بزيارة صفحة الانضمام، أنشئ ملفك الشخصي، وأرسل مؤهلاتك التجارية للمراجعة. بمجرد الموافقة، تبدأ في استقبال استفسارات المشاريع." },
      { q: "هل الانضمام مجاني؟", a: "نعم. خلال مرحلة الإطلاق، يحصل المحترفون على وصول كامل لمنصة إنشاء مجاناً. مع توسع المنصة، سيُطبَّق اشتراك شهري للوصول المستمر. سيستفيد المعتمدون المبكرون من أسعار تفضيلية." },
      { q: "هل تأخذ إنشاء عمولة على المشاريع؟", a: "لا. لا تتقاضى إنشاء عمولة على المشاريع المُحالة. يحتفظ المحترفون بـ100% من قيمة العقد المتفق عليها مع العميل." },
      { q: "كيف ومتى أتقاضى الأجر؟", a: "تُتفق المدفوعات مباشرة بينك وبين العميل. لا تحتجز إنشاء أموال المشاريع ولا تعالجها." },
      { q: "ما الوثائق التي أحتاجها؟", a: "رخصة تجارة إماراتية سارية ومؤهلات الشركة وتفاصيل خبرة مشاريعك السابقة. يراجع فريقنا جميع الطلبات قبل تفعيل ملفك الشخصي." },
      { q: "كيف ترسل إنشاء فرص المشاريع؟", a: "عندما ينشر صاحب منزل أو مطور مشروعاً يطابق خدماتك ومواقعك المحددة، ستتلقى إشعاراً بتفاصيل المشروع." },
      { q: "هل يمكنني اختيار المشاريع التي أقدم عليها؟", a: "بالتأكيد. لست ملزماً بتقديم عرض على كل استفسار. قدم العروض فقط للمشاريع التي تتوافق مع خبرتك وطاقتك وأولوياتك." },
      { q: "كيف يعمل نظام التقييمات والمراجعات؟", a: "بعد اكتمال المشروع، يمكن لأصحاب المنازل والمهندسين المشاركين ترك تقييمات ومراجعات مكتوبة. جميع المراجعات مرتبطة بمشاريع موثقة وتُعرض على ملفك الشخصي." },
      { q: "هل إنشاء للمحترفين المرخصين فقط؟", a: "نعم. فقط المحترفون المرخصون والموثوقون يُوافَق عليهم على منصة إنشاء للحفاظ على معايير الجودة." },
      { q: "ما المناطق التي يمكنني استقبال فرص منها؟", a: "يمكنك تعيين منطقة خدمتك لأبوظبي أو دبي أو الشارقة أو أي مزيج منها. تستقبل الاستفسارات من المناطق التي تحددها فقط." },
      { q: "هل يمكنني إدراج خدمات متعددة على ملفي الشخصي؟", a: "نعم. إذا كان عملك يغطي تخصصات أو خدمات متعددة، يمكنك إدراجها جميعاً لزيادة نطاق استفسارات المشاريع التي تستحق استقبالها." },
    ],
  },
  howItWorksPage: {
    heroH1: "كيف تعمل إنشاء",
    heroBody: "إيجاد وتوظيف محترفي البناء في الإمارات لا يجب أن يعتمد على الحظ. إنشاء تستبدل سلسلة إحالات واتساب بعملية منظمة وشفافة.",
    homeownersTitle: "لأصحاب المنازل والمقاولين الرئيسيين والمطورين",
    professionalsTitle: "للمقاولين والمهندسين والاستشاريين",
    homeownerSteps: [
      { num: "01", title: "انشر مشروعك", subtitle: "دقيقتان", description: "أخبرنا بما تحتاج. حدد نوع العقار — فيلا أو شقة أو تجاري أو صناعي. اختر إمارتك. صف نطاق العمل وحدد الميزانية وأضف الصور أو المخططات إن توفرت. مشروعك منشور في دقائق." },
      { num: "02", title: "استقبل عروضاً من المحترفين", subtitle: "", description: "يستقبل المقاولون والمهندسون والاستشاريون الذين يطابقون متطلبات مشروعك وموقعه طلبك ويردون بعروض أسعار ومقترحات مفصلة. كل محترف على إنشاء مُراجَع للتحقق من رخصة التجارة الإماراتية والمؤهلات وخبرة المشاريع السابقة." },
      { num: "03", title: "قارن جنباً إلى جنب", subtitle: "", description: "راجع مقترحات متعددة في لوحة تحكم واحدة. قارن الأسعار ونطاق العمل والمؤهلات والمشاريع السابقة والتقييمات. لا مزيد من الاتصال بخمسة مقاولين وتتبع الردود في جداول بيانات." },
      { num: "04", title: "تعاقد بثقة", subtitle: "", description: "اختر المحترف الأنسب لمتطلبات مشروعك وميزانيتك. أدر التواصل والمستندات وتتبع المشروع من لوحة تحكم إنشاء. كل شيء في مكان واحد." },
    ],
    professionalSteps: [
      { num: "01", title: "أنشئ ملفك الشخصي", body: "سجل وأخبرنا عن عملك — الخدمات المقدمة والمناطق التي تعمل فيها والمؤهلات والمشاريع السابقة." },
      { num: "02", title: "احصل على المراجعة", body: "أرسل رخصة التجارة الإماراتية ومؤهلات عملك. يراجع فريقنا وثائقك قبل تفعيل ملفك الشخصي على المنصة." },
      { num: "03", title: "استقبل فرص المشاريع", body: "عندما ينشر صاحب منزل أو مطور مشروعاً يطابق خدماتك وموقعك، تتلقى إشعاراً بتفاصيل المشروع كاملة." },
      { num: "04", title: "قدم العروض وانجح", body: "راجع متطلبات المشروع وقرر إن كان مناسباً لك وقدم عرض السعر. يراجع العميل عرضك جنباً إلى جنب مع المحترفين الآخرين ويختار الأنسب." },
    ],
    postFirstProject: "انشر مشروعك الأول مجاناً",
    differenceTitle: "ما الذي يجعل إنشاء مختلفة؟",
    withoutLabel: "بدون إنشاء",
    withLabel: "مع إنشاء",
    withoutItems: [
      "إحالة واتساب واحدة، لا إمكانية للمقارنة",
      "لا شفافية في الأسعار أو المؤهلات",
      "رسائل متفرقة وأوراق مفقودة",
      "إذا لم ينجح الأمر، ابدأ من الصفر",
    ],
    withItems: [
      "مقترحات متعددة من محترفين موثوقين",
      "قارن الأسعار والمؤهلات والعمل السابق جنباً إلى جنب",
      "عروض الأسعار والمستندات والتواصل في لوحة تحكم واحدة",
      "كل محترف مُراجَع قبل أن يتمكن من استقبال الاستفسارات",
    ],
    faqTitle: "الأسئلة الشائعة",
    seeAllFaqs: "عرض جميع الأسئلة ←",
    faqs: [
      { q: "هل إنشاء مجانية لأصحاب المنازل؟", a: "نعم. إنشاء مجانية تماماً لأصحاب المنازل." },
      { q: "هل إنشاء مجانية للمطورين والمقاولين الرئيسيين؟", a: "نعم. لا توجد رسوم لنشر المشاريع واستقبال العروض ومقارنة المحترفين." },
      { q: "كيف تراجع إنشاء المحترفين قبل إدراجهم؟", a: "كل مقاول ومهندس واستشاري يُراجَع للتحقق من صحة رخصة التجارة الإماراتية والمؤهلات وخبرة المشاريع قبل الإدراج." },
      { q: "هل تتولى إنشاء المدفوعات؟", a: "لا. تتم الاتفاقيات المالية مباشرة بينك وبين المحترف الذي توظفه. تركز إنشاء على مساعدتك في الإيجاد والمقارنة والتواصل مع المحترفين المناسبين." },
      { q: "ما المناطق التي تغطيها إنشاء في الإمارات؟", a: "تخدم إنشاء حالياً أبوظبي ودبي والشارقة، مع خطط للتوسع في الإمارات ومنطقة دول الخليج العربي." },
    ],
  },
  aboutPage: {
    heroH1: "عن إنشاء",
    problemTitle: "المشكلة التي نسعى لحلها",
    problemParagraphs: [
      "البناء في الإمارات صناعة بقيمة 189 مليار درهم تنمو بأكثر من 6٪ سنوياً. الطرق والأبراج والفلل والمجتمعات تُبنى بوتيرة لا تضاهيها دول كثيرة في العالم.",
      "ومع ذلك، لا يزال إيجاد مقاول موثوق أو مهندس أو استشاري يعتمد على إحالات واتساب والكلام الشفهي والأمل.",
      "صاحب منزل يبني فيلا في أبوظبي يتصل بصديق ويحصل على اسم واحد ويتفاوض في الظلام ويأمل أن تتم المهمة بشكل صحيح. مطور يبحث عن مقاولين فرعيين لمشروع سكني في دبي يلاحق عروض الأسعار عبر المكالمات وجداول البيانات والرسائل المتفرقة. لا شفافية في التسعير ولا طريقة سهلة لمقارنة المؤهلات ولا مكان واحد لإدارة العملية.",
      "في دولة تبني بنية تحتية بمستوى عالمي، لم تواكب طريقة توظيف محترفي البناء هذا التقدم.",
    ],
    problemBold: "بُنيت إنشاء لتغيير ذلك.",
    whatTitle: "ما هي إنشاء",
    whatParagraphs: [
      "إنشاء هي أبرز سوق للبناء في الإمارات. نربط أصحاب المنازل بالمقاولين والمهندسين والاستشاريين الموثوقين في جميع الإمارات.",
      "انشر مشروعك واحصل على عروض أسعار متعددة تنافسية من محترفين موثوقين. قارن المقترحات جنباً إلى جنب — الأسعار والنطاق والمؤهلات — ثم تعاقد بثقة. تتبع وأدر كل شيء من لوحة تحكم مركزية واحدة.",
      "سواء كنت تجدد مطبخاً أو تبني فيلا من الصفر أو تبحث عن مقاولين فرعيين لمشروع من 50 وحدة، توفر لك إنشاء طريقة أكثر ذكاءً وشفافية لإيجاد محترفي البناء وتوظيفهم.",
    ],
    whoTitle: "من نخدم",
    whoWeServe: [
      { audience: "أصحاب المنازل", description: "البناء أو التجديد أو صيانة العقارات السكنية. انشر مشروعك واحصل على عروض متنافسة من محترفين مرخصين دون الاعتماد على إحالة واحدة.", cta: "انشر مشروعك مجاناً", ctaType: "post" },
      { audience: "المطورون والمقاولون الرئيسيون", description: "البحث عن مقاولين فرعيين في مجالات الكهروميكانيكا والهيكل والتشطيبات والمناطق الخارجية. انشر متطلبات كل حزمة تجارية وقارن العروض وأدر الشراء من منصة واحدة.", cta: "انشر مشروعك مجاناً", ctaType: "post" },
      { audience: "المقاولون والمهندسون والاستشاريون", description: "توسيع أعمالك واستقبال فرص مشاريع مؤهلة وبناء سمعتك المهنية. انضم لإنشاء واحصل على المراجعة وابدأ استقبال الاستفسارات.", cta: "انضم كمحترف", ctaType: "join" },
    ],
    differenceTitle: "ما الذي يجعل إنشاء مختلفة",
    differentiators: [
      { title: "محترفون موثوقون", description: "كل مقاول ومهندس واستشاري يُراجَع للتحقق من صحة رخصة التجارة والمؤهلات وخبرة المشاريع السابقة قبل إدراجه." },
      { title: "عروض أسعار متعددة متنافسة", description: "توقف عن الاعتماد على توصية واحدة. احصل على مقترحات متعددة واختر بناءً على الحقائق." },
      { title: "لوحة تحكم واحدة", description: "عروض الأسعار والمستندات والتواصل وتتبع المشاريع في مكان واحد." },
      { title: "مبني خصيصاً للبناء", description: "ليس تطبيق خدمات منزلية. مبني خصيصاً لبناء الفلل والتشطيبات وأعمال الكهروميكانيكا والهندسة الإنشائية وأكثر من 30 تخصصاً." },
      { title: "مجاني لأصحاب المنازل والمطورين", description: "نشر المشاريع واستقبال العروض ومقارنة المحترفين لا يكلف شيئاً." },
    ],
  },
  crossLinks: {
    howItWorks: "كيف تعمل إنشاء ←",
    findContractors: "ابحث عن مقاولين",
    findEngineers: "ابحث عن مهندسين",
    findConsultants: "ابحث عن استشاريين",
    contractorsH2: "تبحث عن مهندسين أو استشاريين؟",
    contractorsBody: "إنشاء تربطك بالمهندسين الإنشائيين والكهروميكانيكيين والمدنيين ومستشاري الكميات والاستشاريين التصميميين عبر الإمارات.",
    engineersH2: "تبحث عن مقاولين أو استشاريين؟",
    engineersBody: "إنشاء تربطك بالمقاولين العامين ومقاولي الكهروميكانيكا ومستشاري الكميات والاستشاريين التصميميين عبر الإمارات.",
    consultantsH2: "تبحث عن مقاولين أو مهندسين؟",
    consultantsBody: "إنشاء تربطك بالمقاولين العامين ومقاولي الكهروميكانيكا والمهندسين الإنشائيين والمدنيين والكهروميكانيكيين عبر الإمارات.",
  },
  homePage: homePageAr,
};
