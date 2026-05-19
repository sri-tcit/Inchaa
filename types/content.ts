export interface Step {
  num: string;
  title: string;
  description: string;
  img: string;
  alt: string;
}

export interface ServiceItem {
  title: string;
  href: string;
  description: string;
  img: string;
}

export interface Benefit {
  num: string;
  title: string;
  description: string;
}

export interface HomeContent {
  hero: {
    heading: string;
    subtext: string;
    cta: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    steps: Step[];
  };
  services: {
    heading: string;
    items: ServiceItem[];
  };
  whyInchaa: {
    heading: string;
    benefits: Benefit[];
  };
  video: {
    heading: string;
    subtext: string;
    cta: string;
  };
  professionalCta: {
    heading: string;
    subtext: string;
    cta: string;
  };
  finalCta: {
    heading: string;
    subtext: string;
    cta: string;
  };
}

export interface ContractorsContent {
  hero: {
    heading: string;
    subtext: string;
    cta: string;
  };
}
