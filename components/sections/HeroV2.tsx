import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBottomComposition } from "@/components/modules/HeroBottomComposition";
import glowBlob from "@/public/hero-v2/glow-blob.png";
import logo1 from "@/public/hero/logos/logo-1.png";
import logo2 from "@/public/hero/logos/logo-2.png";
import logo3 from "@/public/hero/logos/logo-3.png";
import logo4 from "@/public/hero/logos/logo-4.png";
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
// Three things below are NOT in the Figma file -- confirmed with the user
// these are code-only additions Figma can't express or that Figma layout
// export can't do a scale transform for:
//   1. The illustration fades to the section background at its own
//      bottom edge (a mask-image gradient on the illustration itself,
//      not a separate overlay div spanning the full section).
//   2. The logos row is pulled up with a negative margin so it sits over
//      the illustration's faded-out bottom rather than below it.
//   3. On tablet, the logo grid doesn't fit at content/max-width (984px)
//      without wrapping/clipping awkwardly -- it scrolls horizontally
//      instead, with an edge mask-fade, matching this project's existing
//      horizontal-scroll pattern (CaseStudies.tsx's mobile card row).
//
// The illustration (HeroBottomComposition) fills to its container's width
// and scales its content down to fit, but never scales UP past its own
// natural 1356x674 size -- also a code-only behavior (Figma has one fixed
// frame per breakpoint, not a fluid scale-to-fit-then-cap rule).
const logos = [
  { image: logo1, alt: "", aspect: "aspect-[1000/377]" },
  { image: logo2, alt: "", aspect: "aspect-[91.629/40]" },
  { image: logo3, alt: "", aspect: "aspect-[800/201]" },
  { image: logo4, alt: "", aspect: "aspect-[717/164]" },
  { image: logo1, alt: "", aspect: "aspect-[1000/377]" },
  { image: logo2, alt: "", aspect: "aspect-[91.629/40]" },
  { image: logo3, alt: "", aspect: "aspect-[800/201]" },
  { image: logo4, alt: "", aspect: "aspect-[717/164]" },
];

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
      <div className="max-w-section-max-w tablet:flex desktop:flex relative z-10 hidden w-full flex-col items-center">
        <FadeIn
          immediate
          index={2}
          className="relative w-full shrink-0"
        >
          <HeroBottomComposition
            className="pointer-events-none"
            fadeBottom
          />
        </FadeIn>

        <FadeIn
          immediate
          index={3}
          className="max-w-section-max-w tablet:-mt-6 desktop:-mt-8 relative z-10 flex w-full flex-col items-center gap-8"
        >
          <p className="w-full text-center font-sans text-xs leading-none font-medium text-[#9ca3af]">
            Trusted by 100+ Leading Businesses
          </p>

          {/* Tablet's own scroll+edge-fade treatment for this row is
              deferred -- reverted to the same evenly-distributed layout
              as desktop for now (clips at 984px until revisited). */}
          <div className="flex w-full items-center justify-between gap-6">
            {logos.map((logo, i) => (
              <div key={i} className={`relative h-6 w-auto shrink-0 ${logo.aspect}`}>
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  fill
                  className="object-contain mix-blend-screen"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
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
