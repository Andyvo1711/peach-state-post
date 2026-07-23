import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short blurb used in the footer and category headers */
  tagline: string;
  /** Tailwind utility classes used for the category's accent badge */
  badgeClass: string;
}

/**
 * Order here is intentional and drives the homepage section order and nav:
 * Education, Healthcare, Business Leaders, Finance & Economy, Beauty & Wellness.
 * Each section gets a distinct hue drawn from the Peach State palette
 * (Savannah crimson, pine forest, peach gold) plus two complementary accents
 * for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "Emory, Georgia Tech, UGA, and the schools shaping Georgia's next generation.",
    badgeClass: "bg-[#1e4d3a]/10 text-[#1e4d3a]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Hospitals, health systems, and the science keeping the Peach State well.",
    badgeClass: "bg-[#a3242c]/10 text-[#a3242c]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline: "The entrepreneurs and executives driving Georgia forward.",
    badgeClass: "bg-[#e0954f]/15 text-[#8a5321]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "Markets, real estate, and the economic pulse of Metro Atlanta, Savannah, and Augusta.",
    badgeClass: "bg-teal-600/10 text-teal-700",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from Atlanta to Savannah.",
    badgeClass: "bg-rose-500/10 text-rose-700",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return (
    CATEGORIES.find((c) => c.slug === slug)?.badgeClass ??
    "bg-slate-500/10 text-slate-700"
  );
}
