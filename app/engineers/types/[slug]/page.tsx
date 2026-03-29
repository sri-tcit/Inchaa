import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TypeGuideArticleView } from "@/components/type-guides/TypeGuideArticleView";
import {
  getAllEngineerTypeSlugs,
  getEngineerArticle,
} from "@/content/type-guides/engineers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllEngineerTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getEngineerArticle(slug);
  if (!article) return { title: "Not found | Inchaa" };
  return {
    title: `${article.title} | Inchaa`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://inchaa.com/engineers/types/${slug}/`,
      type: "article",
    },
  };
}

export default async function EngineerTypeGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getEngineerArticle(slug);
  if (!article) notFound();

  return (
    <TypeGuideArticleView
      article={article}
      backHref="/engineers/"
      backLabel="Back to engineers"
      postCampaign={`engineers_type_${slug}`}
    />
  );
}
