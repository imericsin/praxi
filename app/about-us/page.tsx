import type { Metadata } from "next";
import { HeadlineTwoColumn } from "@/components/modules/HeadlineTwoColumn";
import { FadeIn } from "@/components/ui/FadeIn";
import investorMucker from "@/public/about-us/investor-mucker.png";
import investorTechstars from "@/public/about-us/investor-techstars.png";
import investorUsc from "@/public/about-us/investor-usc.png";

// page_about-us — content/copy sourced from the live production site
// (https://www.praxi.io/about-us), restyled to match this project's dark
// design system. The section below the hero is now HeadlineTwoColumn,
// built for the "Two Column Blog Style" Figma module (node 151:12463) --
// this replaces the earlier HeadlineSingleColumn treatment for this
// page per explicit request, matching Figma's real two-column layout
// (heading/paragraph/CTA + investor logos on the left, a small
// location block on the right) instead of a single stacked column.
// No dedicated Figma page frame exists for /about-us itself -- structure
// here is: a short intro band + the two-column module, mirroring the
// live page's own content order.

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

      <HeadlineTwoColumn
        headline={
          <>
            Built by technical accountants,
            <br />
            for technical accountants
          </>
        }
        paragraph="Our team has faced the complexities of technical accounting firsthand. We're solving the problems we know best because we've lived them. That's why we built Praxi to free technical accounting teams to focus on what matters most: high-impact judgments."
        ctaHref="/#schedule-demo"
        ctaLabel="Schedule Demo →"
        investorsLabel="Our Investors"
        logos={[
          {
            image: investorMucker,
            alt: "Mucker Capital",
            aspect: "aspect-[800/251]",
          },
          {
            image: investorTechstars,
            alt: "Techstars",
            aspect: "aspect-[895/358]",
          },
          {
            image: investorUsc,
            alt: "USC University of Southern California",
            aspect: "aspect-[800/480]",
          },
        ]}
        asideSubhead="Located in Los Angeles"
        asideParagraph={"1631 Electric Avenue\nVenice, California 90291"}
      />
    </main>
  );
}
