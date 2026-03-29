import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TypeGuideArticleView } from "@/components/type-guides/TypeGuideArticleView";
import {
  getAllContractorTypeSlugs,
  getContractorArticle,
} from "@/content/type-guides/contractors";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllContractorTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getContractorArticle(slug);
  if (!article) return { title: "Not found | Inchaa" };
  return {
    title: `${article.title} | Inchaa`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://inchaa.com/contractors/types/${slug}/`,
      type: "article",
    },
  };
}

export default async function ContractorTypeGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getContractorArticle(slug);
  if (!article) notFound();

  return (
    <TypeGuideArticleView
      article={article}
      backHref="/contractors/"
      backLabel="Back to contractors"
      postCampaign={`contractors_type_${slug}`}
    />
  );
}
