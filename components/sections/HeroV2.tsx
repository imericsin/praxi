import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBottomComposition } from "@/components/modules/HeroBottomComposition";
import glowBlob from "@/public/hero-v2/glow-blob.png";
import logosFlat from "@/public/hero-v2/logos-strip.png";
import mobileImage from "@/public/hero/mobile-image.png";

// section_hero (v2 test) — visual redesign referencing Figma node 92:8455,
// a desktop-only presentation mockup (no tablet/mobile variant exists in
// the file, confirmed with the user). That node is a hand-placed static
// composition -- individual tilted "console" cards with bespoke mini-app
// content baked in as one-off absolute-positioned markup, not a reusable
// component. Rather than hand-porting every micro-element pixel-for-pixel,
// this reproduces the essential visual language: a rotated/skewed product
// shot for depth, a blurred color-glow backdrop, a pill-shaped CTA, and a
// flattened real-logo strip -- reusing this project's existing hero-image
// asset instead of recreating the reference's bespoke inner card UI.
//
// This is a parallel component (not a replacement for Hero.tsx) so the
// current Hero stays easy to roll back to -- swap which one app/page.tsx
// imports to switch.
//
// Font: reference uses "Inter Display Medium" at 40px. Inter Display
// isn't loaded in this project (only Inter + Inter Tight) -- falls back
// to font-display-large (Inter Tight) rather than silently approximating
// with a different loaded font; flagged for a follow-up if this direction
// is kept.
export function HeroV2() {
  return (
    <section
      data-figma-node="92:8455"
      className="px-margin-x tablet:pt-24 desktop:h-[900px] desktop:pt-28 relative flex w-full flex-col items-center overflow-hidden bg-[#0c0a09] pt-20"
    >
      {/* Blurred color-glow backdrop, rotated and screen-blended --
          same technique as the current Hero's background, reusing that
          asset would be flatter/dimmer than the reference; this uses the
          brighter multi-color glow asset from the new design instead. */}
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

      <div className="max-w-section-max-w relative z-10 flex w-full flex-col items-center gap-16">
        <div className="flex w-full max-w-[391px] flex-col items-center gap-10">
          <FadeIn
            immediate
            index={0}
            className="flex w-full flex-col items-center gap-6"
          >
            <h1 className="font-display-large tablet:text-[36px] desktop:text-[40px] w-full text-center text-[28px] leading-none font-medium text-balance text-white">
              Technical accounting,
              <br />
              reimagined.
            </h1>
            <p className="w-full text-center text-base leading-[1.33] font-normal text-white/60">
              Research, contract analysis, audit-ready checklists, and memos —
              all in one platform.
            </p>
          </FadeIn>
          <FadeIn immediate index={1}>
            <button className="flex items-center justify-center rounded-full bg-white px-[18px] py-3 font-sans text-[13px] leading-[1.33] font-medium text-black">
              Schedule Demo →
            </button>
          </FadeIn>
        </div>
      </div>

      {/* Product shot -- fully coded (no raster image), see
          components/modules/HeroBottomComposition for the per-panel Figma
          source mapping. */}
      <FadeIn
        immediate
        index={2}
        className="tablet:block desktop:mt-[-40px] desktop:w-[calc(100%+400px)] relative mt-10 hidden w-[calc(100%+240px)] max-w-[1440px] shrink-0"
      >
        <HeroBottomComposition className="pointer-events-none" />
      </FadeIn>

      {/* Mobile: same static shot as the current Hero, no tilt (a 3D
          transform on a narrow viewport just clips awkwardly). */}
      <FadeIn
        immediate
        index={2}
        className="-mx-margin-x tablet:hidden relative mt-10 aspect-[375/291.7] w-[calc(100%+2*20px)] shrink-0"
      >
        <Image
          src={mobileImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </FadeIn>

      {/* Fade to the section's own background at the bottom. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a09] from-10% to-transparent to-100%"
      />

      {/* Flattened "Trusted by" logo strip -- a single composited image
          from the reference (real client logos, not this project's
          placeholder set), screen-blended against the dark background. */}
      <FadeIn
        immediate
        index={3}
        className="max-w-section-max-w tablet:block desktop:bottom-16 absolute bottom-10 hidden w-full"
      >
        <div className="relative h-8 w-full">
          <Image
            src={logosFlat}
            alt="Trusted by Bird & Bird, Cleary Gottlieb, White & Case, Linklaters, Deloitte, Palo Alto Networks, Goodwin, Allen & Overy"
            fill
            className="object-contain object-left mix-blend-screen"
            sizes="1200px"
          />
        </div>
      </FadeIn>
    </section>
  );
}
