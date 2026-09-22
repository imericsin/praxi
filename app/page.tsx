import { Hero } from "@/components/sections/Hero";
import { HeadlineThreeColumn } from "@/components/modules/HeadlineThreeColumn";
import { HeadlineThreeRows } from "@/components/modules/HeadlineThreeRows";
import card1 from "@/public/headline-3col/card-1.png";
import card2 from "@/public/headline-3col/card-2.png";
import card3 from "@/public/headline-3col/card-3.png";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HeadlineThreeColumn
        headline="The technical accounting tool of the future."
        subheadline="Designed for modern teams, powered by AI workflows built by industry experts."
        cards={[
          {
            image: card1,
            title: "Expert-Curated Contextual Layer",
            description:
              "Purpose-built Linear is shaped by the practices and principles of world-class product teams.",
          },
          {
            image: card2,
            title: "Agentic Optimized Workflows",
            description:
              "Linear is shaped by the practices and principles of world-class product teams.",
          },
          {
            image: card3,
            title: "Comprehensive Source of Truth",
            description:
              "Linear is shaped by the practices and principles of world-class product teams.",
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
              "Purpose-built Linear is shaped by the practices and principles of world-class product teams.",
          },
          {
            title: "Scribe",
            description:
              "Purpose-built Linear is shaped by the practices and principles of world-class product teams.",
          },
          {
            title: "Curator",
            description:
              "Purpose-built Linear is shaped by the practices and principles of world-class product teams.",
          },
        ]}
      />
    </main>
  );
}
