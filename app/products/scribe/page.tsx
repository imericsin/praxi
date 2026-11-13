import type { Metadata } from "next";
import { ExploreSuite } from "@/components/modules/ExploreSuite";
import { FeatureShowcase } from "@/components/modules/FeatureShowcase";
import { HeadlineThreeCards } from "@/components/modules/HeadlineThreeCards";
import { ProductHero } from "@/components/modules/ProductHero";
import { PRODUCTS } from "@/lib/products";
import featureGuidance from "@/public/products/scribe/feature-guidance-memo.jpg";
import featureKeyTerms from "@/public/products/scribe/feature-key-terms.jpg";
import featureSourceOfTruth from "@/public/products/scribe/feature-source-of-truth.jpg";

// page_scribe -- Figma: "Scribe" frame 2047:1620 in the "Version 2" section
// (node 2050:900). Desktop frame only; global Nav/Footer from the root layout.
// Note the Figma row names ("Contract processing" / "Checklist completion" /
// "Dashboards and reporting") are copy-pasted from Appraiser -- the content
// is Scribe's.

const product = PRODUCTS.scribe;

export const metadata: Metadata = {
  title: `${product.name} — Praxi`,
  description: product.description,
};

export default function ScribePage() {
  return (
    <main className="bg-background-3 flex-1">
      <ProductHero
        headline={product.headline}
        description={product.description}
        image={product.heroImage}
        imageAlt={product.heroAlt}
      />
      <HeadlineThreeCards
        headline="Review-ready documentation, powered by trusted AI."
        subheadline="Built with technical accountants, so the work Scribe hands back already looks like yours."
        cards={[
          {
            icon: "file-text",
            title: "Extract the key terms",
            description:
              "Pull the terms that matter from the agreement, each linked back to its page.",
          },
          {
            icon: "git-branch",
            title: "Work the guidance",
            description:
              "Step through the Codification one question at a time, from scope to conclusion.",
          },
          {
            icon: "folder",
            title: "Keep one record",
            description:
              "Every memo, checklist and policy in one place, rolled forward each period.",
          },
        ]}
      />
      <FeatureShowcase
        headline="Scribe creates one workflow from first upload to audit-ready reporting."
        features={[
          {
            title: "Every key term, linked to its page.",
            highlights: [
              {
                icon: "file-text",
                title: "Key terms, extracted",
                description:
                  "Excluded assets, assumed liabilities and consideration flow straight into your workpapers and checklists.",
              },
              {
                icon: "link",
                title: "Traced to the source",
                description:
                  "Every summary links to its highlighted passage, so reviewers land on the exact spot in the contract.",
              },
              {
                icon: "sparkles",
                title: "Fill in the gaps",
                description:
                  "Ask Scribe to find details the summary missed and insert the exact contract language.",
              },
            ],
            image: featureKeyTerms,
            imageAlt:
              "Acquisition agreement with the purchase price clause highlighted and a popover linking the extracted $4.2M closing price back to its source.",
          },
          {
            title: "Work the guidance. Get the memo.",
            highlights: [
              {
                icon: "git-branch",
                title: "Every step of the guidance",
                description:
                  "Trees follow the Codification from scope to conclusion, and your team can comment on or override any step.",
              },
              {
                icon: "file-text",
                title: "Memos that cite their sources",
                description:
                  "Each section is drafted from your answers, in your house style, and cites the paragraphs it relies on.",
              },
              {
                icon: "layers",
                title: "Built for complex deals",
                description:
                  "Business combinations, leases and debt modifications each get their own tree.",
              },
            ],
            image: featureGuidance,
            imageAlt:
              "Guidance decision tree for a business combination, with a popover explaining the reasoning behind the screen test step.",
          },
          {
            title: "Your accounting source of truth",
            highlights: [
              {
                icon: "search",
                title: "Every change on record",
                description:
                  "Every edit, review and approval is tracked, so Scribe shows what changed, when and why.",
              },
              {
                icon: "refresh-cw",
                title: "Roll forward each period",
                description:
                  "Carry policies and memos into the next period and update only what changed.",
              },
              {
                icon: "tag",
                title: "Anchored to the ASC",
                description:
                  "Every policy maps to its ASC topic, so when guidance changes you can see every position it affects.",
              },
            ],
            image: featureSourceOfTruth,
            imageAlt:
              "Policy library with each policy mapped to an ASC topic, and a roll-forward workflow for Q4 2026 policies.",
          },
        ]}
      />
      <ExploreSuite products={[PRODUCTS.appraiser, PRODUCTS.curator]} />
    </main>
  );
}
