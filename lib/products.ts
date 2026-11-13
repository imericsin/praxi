import type { StaticImageData } from "next/image";
import appraiserHero from "@/public/products/appraiser/hero.jpg";
import curatorHero from "@/public/products/curator/hero.jpg";
import scribeHero from "@/public/products/scribe/hero.jpg";

// Shared product metadata -- the nav dropdown, each product page's hero, and
// the "Explore the suite" tiles on the other two pages all read from here so
// the headline/description only live in one place. Copy: Figma "Version 2"
// section (2050:900), hero + tile text of each product frame.

export type ProductSlug = "appraiser" | "scribe" | "curator";

export interface Product {
  slug: ProductSlug;
  name: string;
  href: string;
  headline: string;
  description: string;
  heroImage: StaticImageData;
  heroAlt: string;
}

export const PRODUCTS: Record<ProductSlug, Product> = {
  appraiser: {
    slug: "appraiser",
    name: "Appraiser",
    href: "/products/appraiser",
    headline: "From incoming files to structured work",
    description:
      "Process dozens of revenue or vendor contracts at once, flag non-standard terms, and document their effects in your checklists automatically.",
    heroImage: appraiserHero,
    heroAlt:
      "Praxi deal list for Revenue Accounting, with contracts moving through inbox, classify and extract, grouping and dispatch stages.",
  },
  scribe: {
    slug: "scribe",
    name: "Scribe",
    href: "/products/scribe",
    headline: "From contracts to review-ready memos",
    description:
      "Summarize contracts, work through accounting guidance with decision trees, and draft accurate, complete technical memos.",
    heroImage: scribeHero,
    heroAlt:
      "Scribe service order memo with a key term table, the linked contract clause beside it, and a guidance decision tree for performance obligations.",
  },
  curator: {
    slug: "curator",
    name: "Curator",
    href: "/products/curator",
    headline: "From filings to peer benchmarks",
    description:
      "AI-powered research across GAAP, IFRS, auditor guides, and SEC filings, with peer benchmarking and scenario analysis for accounting judgments and SEC reporting.",
    heroImage: curatorHero,
    heroAlt:
      "Curator search results for principal versus agent in third-party advertising, with a filing preview and an AI answer citing 12 filings.",
  },
};

export const PRODUCT_LIST: Product[] = [
  PRODUCTS.appraiser,
  PRODUCTS.scribe,
  PRODUCTS.curator,
];
