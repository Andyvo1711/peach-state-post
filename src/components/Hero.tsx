import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import type { ArticleMeta } from "@/types/article";
import { getCategoryBadgeClass, getCategoryName } from "@/lib/categories";

/** The single lead story at the top of the homepage. No date shown. */
export default function Hero({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-hover"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[21/9]">
        <CoverImage
          src={article.coverImage}
          alt={article.title}
          category={article.category}
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-8 md:p-10">
        <div className="flex items-center gap-3">
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${getCategoryBadgeClass(
              article.category,
            )}`}
          >
            {getCategoryName(article.category)}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Lead Story
          </span>
        </div>

        <h1 className="font-display max-w-3xl text-2xl font-black leading-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl md:text-5xl">
          {article.title}
        </h1>

        <p className="max-w-3xl text-sm text-muted sm:text-base">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
