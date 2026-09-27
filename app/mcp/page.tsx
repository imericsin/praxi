import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// page_mcp — content/copy sourced from the live production site
// (https://www.praxi.io/mcp, "Platform: MCP"). No dedicated Figma frame
// exists for this page; structure below (hero band + 3 alternating
// headline/detail blocks) is read from the live page's own content
// grouping (each block pairs one bold claim with 2 supporting lines),
// rendered with this project's existing FadeIn stagger + row-divider
// convention from HeadlineThreeRows rather than a new one-off pattern.

export const metadata: Metadata = {
  title: "Praxi MCP — Praxi",
  description:
    "Your AI model just became a technical accounting expert. Plug your AI model into a curated database of accounting literature.",
};

const blocks: {
  title: string;
  intro: string;
  points: { title: string; description: string }[];
}[] = [
  {
    title: "The accounting knowledge your AI was missing",
    intro:
      "Plug your AI model into a curated database of accounting literature",
    points: [
      {
        title: "A direct line to the guidance",
        description:
          "Your AI queries Praxi's library of GAAP, IFRS, SEC filings, and Big 4 interpretations in real time.",
      },
      {
        title: "Curated and continuously updated",
        description: "Standards, interpretations, and SEC filings stay up to date.",
      },
    ],
  },
  {
    title: "One-click verification",
    intro: "Every citation is a link, click it, land on the source",
    points: [
      {
        title: "Direct links to source",
        description:
          "Jump from your AI's answer into the Praxi app at the exact paragraph, example, question, figure, or filing.",
      },
      {
        title: "Transparent reasoning",
        description: "Review the sources your AI drew on to reach the conclusion.",
      },
    ],
  },
  {
    title: "Built to work with the tools you already have",
    intro: "Your data and the guidance, in the same conversation",
    points: [
      {
        title: "Connects to your stack",
        description:
          "Praxi sits next to the connectors you already use, so you can ask questions about your own company, not hypothetical ones.",
      },
      {
        title: "One conversation",
        description: "No switching tools, no copy-pasting, no rebuilding context.",
      },
    ],
  },
];

export default function McpPage() {
  return (
    <main className="flex-1">
      <section className="px-margin-x tablet:pt-40 desktop:pt-48 relative flex w-full flex-col items-center bg-[#0c0a09] pt-32 pb-16">
        <FadeIn
          index={0}
          className="max-w-section-max-w flex w-full flex-col items-start gap-6"
        >
          <h1 className="font-display-large tablet:text-[44px] desktop:text-[52px] w-full max-w-[792px] text-[32px] leading-[1.15] font-semibold text-balance text-white">
            Your AI model just became a technical accounting expert
          </h1>
          <Button href="/#schedule-demo">Request Access</Button>
        </FadeIn>
      </section>

      {blocks.map((block, blockIndex) => (
        <section
          key={block.title}
          className={`px-margin-x tablet:py-24 desktop:py-28 flex w-full flex-col items-center py-16 ${
            blockIndex % 2 === 1 ? "bg-[#111]" : "bg-[#0c0a09]"
          }`}
        >
          <div className="max-w-section-max-w tablet:flex-row desktop:flex-row flex w-full flex-col items-start gap-16">
            <FadeIn
              index={0}
              className="flex w-full flex-1 flex-col items-start gap-4"
            >
              <p className="font-display-large w-full text-[28px] leading-[1.2] font-semibold text-balance text-white">
                {block.title}
              </p>
              <p className="w-full max-w-[420px] text-base leading-6 font-normal text-white/60">
                {block.intro}
              </p>
            </FadeIn>
            <div className="flex w-full flex-1 flex-col items-start gap-6">
              {block.points.map((point, i) => (
                <FadeIn
                  key={point.title}
                  index={i + 1}
                  className="flex w-full flex-col items-start gap-2 border-t border-white/15 pt-6"
                >
                  <p className="w-full font-sans text-lg leading-6 font-semibold text-white">
                    {point.title}
                  </p>
                  <p className="w-full font-sans text-sm leading-5 font-normal text-white/60">
                    {point.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-margin-x tablet:py-24 desktop:py-28 flex w-full flex-col items-center bg-[#0c0a09] py-16">
        <FadeIn
          index={0}
          className="max-w-section-max-w flex w-full flex-col items-start gap-6"
        >
          <p className="font-display-large w-full text-[28px] leading-[1.2] font-semibold text-balance text-white">
            A five-minute setup for a smarter AI
          </p>
          <Button href="/#schedule-demo">Request Access</Button>
        </FadeIn>
      </section>
    </main>
  );
}
