import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBottomComposition } from "@/components/modules/HeroBottomComposition";
import { TrustedByLogos } from "@/components/modules/HeroBottomComposition/TrustedByLogos";
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
      id="schedule-demo"
      data-figma-node="146:11709"
      className="px-margin-x tablet:gap-6 tablet:py-28 desktop:gap-6 desktop:py-28 relative flex w-full flex-col items-center gap-6 overflow-hidden bg-[#020202] py-20"
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

      <div className="max-w-section-max-w relative z-10 flex w-full flex-col items-center">
        <div className="flex w-full max-w-[590px] flex-col items-center gap-6">
          <FadeIn
            immediate
            index={0}
            className="flex w-full flex-col items-center gap-5"
          >
            <h1 className="font-display-large tablet:text-[40px] desktop:text-[48px] w-full text-center text-[32px] leading-none font-medium text-balance text-white">
              Technical accounting,
              <br />
              reimagined.
            </h1>
            <p className="w-full text-center text-lg leading-7 font-normal text-white/60">
              Research, contract analysis, audit-ready checklists, and memos —
              all in one platform.
            </p>
          </FadeIn>
          <FadeIn immediate index={1}>
            <button className="flex items-center justify-center rounded-md bg-white px-4 py-3 font-sans text-xs leading-none font-medium text-black">
              Schedule Demo →
            </button>
          </FadeIn>
        </div>
      </div>

      {/* Illustration + logos. Desktop/tablet only -- mobile uses a
          static product shot below and the separate LogoStripMobile
          section, same split as the rest of this file's breakpoint
          handling. */}
      <div className="tablet:flex desktop:flex relative z-10 hidden w-full flex-col items-center gap-8">
        <FadeIn immediate index={2} className="relative w-full shrink-0">
          <HeroBottomComposition />
        </FadeIn>

        <FadeIn
          immediate
          index={3}
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
        index={2}
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
