import type { Metadata } from "next";
import { ExploreSuite } from "@/components/modules/ExploreSuite";
import { FeatureShowcase } from "@/components/modules/FeatureShowcase";
import { HeadlineThreeCards } from "@/components/modules/HeadlineThreeCards";
import { ProductHero } from "@/components/modules/ProductHero";
import { PRODUCTS } from "@/lib/products";
import featureBenchmark from "@/public/products/curator/feature-benchmark.jpg";
import featureResearch from "@/public/products/curator/feature-research.jpg";

// page_curator -- Figma: "Curator" frame 2047:714 in the "Version 2" section
// (node 2050:900). Desktop frame only; global Nav/Footer from the root layout.
// Two feature rows (the other two product pages have three).

const product = PRODUCTS.curator;

export const metadata: Metadata = {
  title: `${product.name} — Praxi`,
  description: product.description,
};

export default function CuratorPage() {
  return (
    <main className="bg-background-3 flex-1">
      <ProductHero
        headline={product.headline}
        description={product.description}
        image={product.heroImage}
        imageAlt={product.heroAlt}
      />
      <HeadlineThreeCards
        headline="Cited technical research, powered by trusted AI."
        subheadline="Built with technical accountants, so the work Curator hands back already looks like yours."
        cards={[
          {
            icon: "file-text",
            title: "Search guidance and filings, with more accurate results.",
            description:
              "Curator searches terabytes of data in seconds and returns only the results you’d expect.",
          },
          {
            icon: "git-branch",
            title: "Create AI-enriched benchmark reports instantly.",
            description:
              "Curator pulls the right data from hundreds of filings and turns it into an executive-ready benchmark report.",
          },
          {
            icon: "folder",
            title: "Model proposed transactions and plan ahead",
            description:
              "See how a proposed deal should be accounted for, plus the alternatives if the facts change.",
          },
        ]}
      />
      <FeatureShowcase
        headline="Curator searches like a machine and thinks like a technical accountant."
        features={[
          {
            title: "Technical accounting research tool",
            highlights: [
              {
                icon: "link",
                title: "Answers with citations",
                description:
                  "Every conclusion links back to the exact paragraph of guidance it came from, so you can verify it in one click.",
              },
              {
                icon: "layers",
                title: "The full guidance hierarchy",
                description:
                  "Agents search authoritative, interpretive and illustrative guidance across the Praxi Data Warehouse at once.",
              },
              {
                icon: "file-search",
                title: "Read it in context",
                description:
                  "Matched passages are highlighted inside the filing, so you can judge a disclosure without opening EDGAR.",
              },
            ],
            image: featureResearch,
            imageAlt:
              "Principal versus agent benchmark workflow with a created benchmark report and a table of filers and their treatment.",
          },
          {
            title: "Name your peers. Get the full table.",
            highlights: [
              {
                icon: "grid-3x3",
                title: "One request, full table",
                description:
                  "The agent finds the right filings, adds a column for the disclosure and fills it with cited excerpts.",
              },
              {
                icon: "circle-check",
                title: "You stay in control",
                description:
                  "Approve each edit before it lands, or let the agent work through the benchmark on its own.",
              },
              {
                icon: "users",
                title: "Reuse your peer group",
                description:
                  "Save the benchmark as a template and rerun it each period for recurring peer group analysis.",
              },
            ],
            image: featureBenchmark,
            imageAlt:
              "AI column classifying each filer as gross, net or mixed, with a notification that the result was added to the benchmark sheet.",
          },
        ]}
      />
      <ExploreSuite products={[PRODUCTS.appraiser, PRODUCTS.scribe]} />
    </main>
  );
}
