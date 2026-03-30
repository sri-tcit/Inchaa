import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TypeGuideArticleView } from "@/components/type-guides/TypeGuideArticleView";
import {
  getAllConsultantTypeSlugs,
  getConsultantArticle,
} from "@/content/type-guides/consultants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllConsultantTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getConsultantArticle(slug);
  if (!article) return { title: "Not found | Inchaa" };
  return {
    title: `${article.title} | Inchaa`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://inchaa.com/consultants/types/${slug}/`,
      type: "article",
    },
  };
}

export default async function ConsultantTypeGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getConsultantArticle(slug);
  if (!article) notFound();

  return (
    <TypeGuideArticleView
      article={article}
      backHref="/consultants/"
      backLabel="Back to consultants"
      postCampaign={`consultants_type_${slug}`}
    />
  );
}
