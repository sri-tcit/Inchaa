import Link from "next/link";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import type { TypeGuideArticle } from "@/content/type-guides/types";
import { ArrowLeft } from "lucide-react";

export function TypeGuideArticleView({
  article,
  backHref,
  backLabel,
  postCampaign,
}: {
  article: TypeGuideArticle;
  backHref: string;
  backLabel: string;
  postCampaign: string;
}) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-24 md:pt-28">
        <div className="mx-auto max-w-[720px] px-4 pb-12 md:px-6 md:pb-16">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-mid-grey transition-colors hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {backLabel}
          </Link>
          <header className="mt-8">
            <h1 className="text-navy text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-mid-grey md:text-xl">{article.summary}</p>
          </header>
        </div>

        {article.heroImage ? (
          <div className="mx-auto max-w-[960px] px-4 md:px-6">
            <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-light-grey/30 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.heroImage}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        ) : null}

        <div className="mx-auto max-w-[720px] px-4 py-12 md:px-6 md:py-16">
          <div className="text-lg leading-relaxed text-charcoal">
            {article.sections.map((section, i) => (
              <section key={i} className={i > 0 ? "mt-12" : ""}>
                {section.heading ? (
                  <h2 className="text-navy text-xl font-bold md:text-2xl">{section.heading}</h2>
                ) : null}
                <div className={section.heading ? "mt-4 space-y-4" : i > 0 ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#E5E7EB] bg-light-grey/40 p-8 text-center md:p-10">
            <p className="text-navy text-lg font-bold md:text-xl">Ready to get quotes?</p>
            <p className="mx-auto mt-2 max-w-md text-mid-grey text-sm leading-relaxed md:text-base">
              Post your project on Inchaa and compare proposals from verified professionals.
            </p>
            <div className="mt-6 flex justify-center">
              <PostProjectButton campaign={postCampaign} size="lg" />
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
