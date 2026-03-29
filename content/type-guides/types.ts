export interface TypeGuideArticle {
  slug: string;
  title: string;
  summary: string;
  heroImage?: string;
  sections: { heading?: string; paragraphs: string[] }[];
}
