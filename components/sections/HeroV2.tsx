import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { RevealOverlay } from "@/components/ui/RevealOverlay";
import { HeroBottomComposition } from "@/components/modules/HeroBottomComposition";
import { TrustedByLogos } from "@/components/modules/HeroBottomComposition/TrustedByLogos";
import { SCHEDULE_DEMO_URL } from "@/lib/links";
import glowBlob from "@/public/hero-v2/glow-blob.png";
import mobileImage from "@/public/hero/mobile-image.png";

// section_hero (v2) — Figma node 146:11630 "Hero (New)", breakpoints
// 146:11709 (Desktop) / 146:12005 (Desktop@1024/Tablet) / 146:11679 +
// 146:11691 (Mobile — the mobile frame itself is empty; logos live in a
// separate "Section Logos (Only Mobile)" frame, matching this project's
// existing LogoStripMobile pattern of a dedicated mobile-only section
// rather than a responsive variant of this one).
//
// Structure mirrors Figma almost exactly: section -> Copy (headline/
// subhead/CTA) -> content (Illustration + logos), a plain vertical flex
// with gap, not the absolute-overlap layout the old (v1) hero used.
//
// HeroBottomComposition and TrustedByLogos are real, normally-flowing
// components (flexbox, proportional sizing) that scale down naturally at
// any width -- not a fixed-canvas illustration scaled with a CSS
// transform (an earlier pass at this got that wrong; see
// HeroBottomComposition/index.tsx for why).
//
// No max-w-section-max-w (1200px) on the illustration+logos wrapper --
// per Figma, the illustration bleeds wider than the 1200px copy column,
// up to its own natural width, constrained only by the section's own
// margin-x, not the content column.
export function HeroV2() {
  return (
    <section
      data-figma-node="146:11709"
      className="px-margin-x tablet:gap-6 tablet:pt-28 tablet:pb-12 desktop:gap-6 desktop:py-28 relative flex w-full flex-col items-center gap-6 overflow-hidden bg-[#020202] pt-20 pb-0"
    >
      {/* Blurred color-glow backdrop -- no background color on this or
          any ancestor between it and the section: it needs to show
          through, not be painted over. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex scale-125 items-center justify-center overflow-hidden mix-blend-screen"
      >
        <Image
          src={glowBlob}
          alt=""
          priority
          className="rotate-[-12deg] blur-[60px]"
        />
      </div>

      {/* Masks the glow image's blur and the HeroBottomComposition
          panels' backdrop-blur settling in behind an opaque black
          frame, instead of letting that settle-in read as an abrupt
          "pop" once the browser finishes promoting those elements to
          their own compositing layers. Sits above the glow (z-10, same
          layer as the content) but below the actual copy/illustration,
          which each stack on top of it via their own FadeIn's z-index
          context -- not literally behind the content, just faded out
          by the time anything is meant to be legible (delayMs=150 is
          shorter than FadeIn's own reveal timing). */}
      <RevealOverlay className="z-10" />

      <div className="max-w-section-max-w relative z-10 flex w-full flex-col items-center">
        <div className="flex w-full max-w-[590px] flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center gap-5">
            {/* Headline splits into per-line FadeIn reveals (each line
                its own staggered fade-up), matching linear.app's
                homepage title treatment -- their markup wraps each
                title line in its own span with an independent reveal,
                rather than animating the whole headline as one block.
                No overflow-hidden on these wrappers: it was clipping
                the "g" descender in "reimagined" against the tight
                leading-none line-height. */}
            <h1 className="font-display-large tablet:text-[40px] desktop:text-[48px] flex w-full flex-col items-center text-center text-[32px] leading-none font-medium text-balance text-white">
              <FadeIn immediate index={0}>
                Technical accounting,
              </FadeIn>
              <FadeIn immediate index={1}>
                reimagined.
              </FadeIn>
            </h1>
            <FadeIn immediate index={2} className="w-full">
              <p className="w-full text-center text-lg leading-7 font-normal text-white/60">
                Research, contract analysis, audit-ready checklists, and
                memos — all in one platform.
              </p>
            </FadeIn>
          </div>
          <FadeIn immediate index={3}>
            <Button href={SCHEDULE_DEMO_URL} target="_blank" rel="noopener noreferrer">
              Schedule Demo →
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Illustration + logos. Desktop/tablet only -- mobile uses a
          static product shot below and the separate LogoStripMobile
          section, same split as the rest of this file's breakpoint
          handling. */}
      <div className="tablet:flex desktop:flex relative z-10 hidden w-full flex-col items-center gap-8">
        {/* No -mx-margin-x breakout here (tried it, then reverted) --
            HeroBottomComposition's own panels sit ~75px inset from its
            fixed-size box's own left edge (Figma's real geometry), so
            breaking the box out past the section's 20px margin-x just
            pushed the whole composition further right of the copy above
            it than intended, reading as extra left padding. Keeping it
            inside the section's normal padding lines its content up with
            the headline/button above -- the composition still centers
            or clamps-left and overflows/fades on the right exactly as
            before, just measured from the padded edge instead of the
            true viewport edge.

            index=4 (not 2): the illustration now enters distinctly
            after the full headline/subhead/button stagger finishes
            (0-3), matching linear.app's product screenshot coming in
            after its own copy stagger completes, not interleaved with
            it. */}
        <FadeIn immediate index={4} className="relative w-full shrink-0">
          <HeroBottomComposition />
        </FadeIn>

        <FadeIn
          immediate
          index={5}
          className="max-w-section-max-w relative z-10 flex w-full flex-col items-center gap-8"
        >
          <p className="w-full text-center font-sans text-xs leading-none font-medium text-[#9ca3af]">
            Trusted by 100+ Leading Businesses
          </p>
          <TrustedByLogos className="max-w-[1200px]" />
        </FadeIn>
      </div>

      {/* Mobile: static product shot, no tilt. */}
      <FadeIn
        immediate
        index={4}
        className="-mx-margin-x tablet:hidden relative z-10 mt-4 aspect-[375/291.7] w-[calc(100%+2*20px)] shrink-0"
      >
        <Image
          src={mobileImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </FadeIn>
    </section>
  );
}
