import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-4 py-5 sm:py-6 xl:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 justify-self-center text-center sm:gap-3 xl:col-start-2"
          >
            <span className="font-display text-4xl font-black leading-none tracking-tight text-accent sm:text-5xl lg:text-6xl">
              Peach State Post
            </span>
            <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs">
              <span className="hidden h-px w-6 shrink-0 bg-peach sm:block" aria-hidden="true" />
              Georgia News · From Atlanta to Savannah
              <span className="hidden h-px w-6 shrink-0 bg-peach sm:block" aria-hidden="true" />
            </span>
          </Link>

          <form
            action="/search"
            method="GET"
            className="flex w-full max-w-xs items-center gap-2 justify-self-center xl:justify-self-end"
          >
            <input
              type="search"
              name="q"
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Search
            </button>
          </form>
        </div>

        <nav className="flex items-center gap-5 overflow-x-auto border-t border-border py-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
