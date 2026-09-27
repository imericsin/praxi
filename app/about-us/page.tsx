import type { Metadata } from "next";
import { HeadlineSingleColumn } from "@/components/modules/HeadlineSingleColumn";
import { FadeIn } from "@/components/ui/FadeIn";

// page_about-us — content/copy sourced from the live production site
// (https://www.praxi.io/about-us), restyled to match this project's dark
// design system and built from existing modules (HeadlineSingleColumn is
// the only new one, added for the "Single Column Blog Style" Figma module,
// node 145:10663). No dedicated Figma page frame exists for /about-us
// itself -- structure here is: a short intro band + the single-column
// module for the "Built by technical accountants..." copy + a simple
// location block, in that order, mirroring the live page's own content
// order.

export const metadata: Metadata = {
  title: "About Us — Praxi",
  description: "Our mission is to help simplify technical accounting.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <section className="px-margin-x tablet:pt-40 desktop:pt-48 relative flex w-full flex-col items-center bg-[#0c0a09] pt-32 pb-16">
        <FadeIn
          index={0}
          className="max-w-section-max-w flex w-full flex-col items-start gap-4"
        >
          <p className="font-sans text-sm leading-none font-medium text-white/60">
            About Us
          </p>
          <h1 className="font-display-large tablet:text-[44px] desktop:text-[52px] w-full max-w-[792px] text-[32px] leading-[1.15] font-semibold text-balance text-white">
            Our mission is to help simplify technical accounting
          </h1>
        </FadeIn>
      </section>

      <HeadlineSingleColumn
        headline="Built by technical accountants, for technical accountants"
        subhead="Located in Los Angeles"
        paragraph={
          "Our team has faced the complexities of technical accounting firsthand. We're solving the problems we know best because we've lived them. That's why we built Praxi to free technical accounting teams to focus on what matters most: high-impact judgments.\n\n1631 Electric Avenue\nVenice, California 90291"
        }
        ctaHref="/#schedule-demo"
        ctaLabel="Schedule Demo →"
      />
    </main>
  );
}
