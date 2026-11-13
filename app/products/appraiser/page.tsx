import type { Metadata } from "next";
import { ExploreSuite } from "@/components/modules/ExploreSuite";
import { FeatureShowcase } from "@/components/modules/FeatureShowcase";
import { HeadlineThreeCards } from "@/components/modules/HeadlineThreeCards";
import { ProductHero } from "@/components/modules/ProductHero";
import { PRODUCTS } from "@/lib/products";
import featureChecklist from "@/public/products/appraiser/feature-checklist-completion.jpg";
import featureContracts from "@/public/products/appraiser/feature-contract-processing.jpg";
import featureDashboards from "@/public/products/appraiser/feature-dashboards.jpg";

// page_appraiser -- Figma: "Appraiser" frame 2046:364 in the "Version 2"
// section (node 2050:900). Desktop frame only. The frame's own navbar and
// footer are not built here: the global <Nav /> and <Footer /> in the root
// layout render on every route. (The Figma footer also shows a newer link
// structure -- Platform / Integrations / Why Praxi / About Us -- than the
// site-wide Footer currently has.)

const product = PRODUCTS.appraiser;

export const metadata: Metadata = {
  title: `${product.name} — Praxi`,
  description: product.description,
};

export default function AppraiserPage() {
  return (
    <main className="bg-background-3 flex-1">
      <ProductHero
        headline={product.headline}
        description={product.description}
        image={product.heroImage}
        imageAlt={product.heroAlt}
      />
      <HeadlineThreeCards
        headline="Efficient contract processing, powered by trusted AI."
        subheadline="The accuracy of a technical accountant, at the speed and volume of a machine. One Appraiser does the work of a whole team."
        cards={[
          {
            icon: "file-text",
            title: "Identify non-standard terms",
            description:
              "Spot the unusual terms that affect revenue recognition, and sort contracts for review by risk.",
          },
          {
            icon: "git-branch",
            title: "Complete the ASC 606 checklist",
            description:
              "Appraiser fills in the ASC 606 checklist automatically and sends it straight to review.",
          },
          {
            icon: "folder",
            title: "Document your review",
            description:
              "Gated review workflows let reviewers comment and sign off, supporting SOX compliance.",
          },
        ]}
      />
      <FeatureShowcase
        headline="Appraiser creates one workflow from first upload to audit-ready reporting."
        features={[
          {
            title: "Every contract read. Only the exceptions flagged.",
            highlights: [
              {
                icon: "zap",
                title: "High-volume parsing",
                description:
                  "Ingest hundreds of contracts in minutes and surface non-standard terms like custom bundling or uncapped liabilities.",
              },
              {
                icon: "file-search",
                title: "Exception-only escalation",
                description:
                  "Contracts without unique terms are auto-verified on arrival. Anything non-standard goes straight to your team for review.",
              },
              {
                icon: "layers",
                title: "Grouped by deal",
                description:
                  "MSAs, SOWs and change orders are grouped by customer, and you’re flagged whenever a new agreement modifies an earlier one.",
              },
            ],
            image: featureContracts,
            imageAlt:
              "Order Form termination clause with two terms highlighted and a notification offering to add the 3 flagged non-standard terms to a checklist.",
          },
          {
            title: "From blank checklist to audit-ready review.",
            highlights: [
              {
                icon: "sparkles-19",
                title: "Filled automatically",
                description:
                  "Signature, payment and collectability questions are answered straight from the contract, before you open the deal.",
              },
              {
                icon: "flag-19",
                title: "Flagged for your judgment",
                description:
                  "Ambiguous terms, like early cancellation rights, come to you with the agent’s analysis and the documents behind it.",
              },
              {
                icon: "link-19",
                title: "Every answer links to source",
                description:
                  "Each answer cites the exact page and line it came from, so reviewers and auditors can verify it in one click.",
              },
            ],
            image: featureChecklist,
            imageAlt:
              "Revenue checklist with answered, flagged and in-review questions, and a popover showing the flagged contract language.",
          },
          {
            title: "Prioritize reviews based on risk",
            highlights: [
              {
                icon: "grid-3x3",
                title: "Impact × TCV matrix",
                description:
                  "Map special terms (timing, pricing, bundling) against total contract value to see which ones drive the most exposure.",
              },
              {
                icon: "chart-pie",
                title: "Coverage at a glance",
                description:
                  "See how many contracts with special terms are covered in the review checklist, and which still need attention.",
              },
              {
                icon: "users",
                title: "Ready for stakeholders",
                description:
                  "Share live progress and accounting impact with controllers and auditors, without status decks or spreadsheet roll-ups.",
              },
            ],
            image: featureDashboards,
            imageAlt:
              "Dashboard with an impact and total contract value matrix, a special terms coverage bar chart showing 75% covered, and an impact donut showing 6 of 24 contracts.",
          },
        ]}
      />
      <ExploreSuite products={[PRODUCTS.curator, PRODUCTS.scribe]} />
    </main>
  );
}
