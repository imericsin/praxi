import { HeroV2 as Hero } from "@/components/sections/HeroV2";
import { LogoStripMobile } from "@/components/sections/LogoStripMobile";
import { HeadlineThreeColumn } from "@/components/modules/HeadlineThreeColumn";
import { HeadlineThreeRows } from "@/components/modules/HeadlineThreeRows";
import { CaseStudies } from "@/components/sections/CaseStudies";
import card1 from "@/public/headline-3col/card-1.png";
import card2 from "@/public/headline-3col/card-2.png";
import card3 from "@/public/headline-3col/card-3.png";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <LogoStripMobile />
      <HeadlineThreeColumn
        headline="The technical accounting tool of the future."
        subheadline="Designed for modern teams, powered by AI workflows built by industry experts."
        cards={[
          {
            image: card1,
            title: "Contract Review",
            description:
              "Scan contracts against a library of relevant accounting terms to extract summaries and trace every conclusion back to the exact contract line.",
          },
          {
            image: card2,
            title: "Decision Tree & Memo",
            description:
              "Pre-built decision trees guide you through complex accounting judgments, so every conclusion lands in an auditable, easily explainable memo.",
          },
          {
            image: card3,
            title: "Document Hub",
            description:
              "One system of record for accounting policies, memos, and checklists — scanned against new accounting updates so you always know what's impacted.",
          },
        ]}
      />
      <HeadlineThreeRows
        headline="Workflows designed for your team's use cases"
        subheadline="Whether you're a Big Four engagement team or a boutique advisory practice, Praxi's tools adapt to how you already work."
        rows={[
          {
            title: "Appraiser",
            description:
              "For revenue teams processing high volumes of contracts — find the non-standard agreements, document accounting in a checklist, and automate standalone selling price and revenue recognition reporting.",
          },
          {
            title: "Scribe",
            description:
              "For technical accounting and SEC reporting teams — analyze contracts, draft memos to reach accounting conclusions, and draft footnotes ready to export into your financial statements.",
          },
          {
            title: "Curator",
            description:
              "For technical accounting and SEC reporting teams — research judgmental accounting topics, benchmark disclosures against peers, and maintain your company's policies and memos in one place.",
          },
        ]}
      />
      <CaseStudies />
    </main>
  );
}
