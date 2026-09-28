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
              "Scan contracts against a library of accounting terms and trace every conclusion to its source line.",
          },
          {
            image: card2,
            title: "Decision Tree & Memo",
            description:
              "Pre-built decision trees guide complex judgments into an auditable, easily explainable memo.",
          },
          {
            image: card3,
            title: "Document Hub",
            description:
              "One system of record for policies, memos, and checklists—scanned against new updates for impact.",
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
              "Find non-standard agreements and automate revenue recognition reporting. Great for revenue teams processing high volumes of contracts.",
          },
          {
            title: "Scribe",
            description:
              "Analyze contracts and draft memos and footnotes ready for your financials. Ideal for technical accounting and SEC reporting teams.",
          },
          {
            title: "Curator",
            description:
              "Research judgmental topics and maintain your company's policies and memos. For technical accounting and SEC reporting teams.",
          },
        ]}
      />
      <CaseStudies />
    </main>
  );
}
