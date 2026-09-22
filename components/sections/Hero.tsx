import Image from "next/image";
import bg from "@/public/hero/bg.png";
import heroImage from "@/public/hero/hero-image.png";
import dimmerTop from "@/public/hero/dimmer-top.png";
import mobileImage from "@/public/hero/mobile-image.png";

// section_hero — full-bleed background, contained copy block.
// Figma: node 70:5683 (Hero), breakpoints 70:5747/70:5760/70:5772.
export function Hero() {
  return (
    <section
      data-figma-node="70:5683"
      className="tablet:pt-24 desktop:pt-28 desktop:h-[900px] relative flex w-full flex-col items-center overflow-hidden bg-[#020202] pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <Image src={bg} alt="" priority className="h-full w-auto max-w-none" />
      </div>

      <div className="max-w-section-max-w px-margin-x tablet:px-margin-x desktop:px-margin-x relative flex w-full flex-col items-start gap-16">
        <div className="flex w-full max-w-[383px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start justify-center gap-5">
            <h1 className="tablet:text-[32px] desktop:text-[36px] font-display-large w-full text-left text-[28px] leading-[1.2] font-semibold text-balance text-white">
              Technical accounting,
              <br />
              reimagined.
            </h1>
          </div>
          <p className="w-full text-left text-base leading-[1.33] font-normal text-white/60">
            Research, contract analysis, audit-ready checklists, and memos — all
            in one platform.
          </p>
        </div>
      </div>

      {/* Mobile: static product shot, no bleed illustration */}
      <div className="tablet:hidden relative mt-16 aspect-[375/291.7] w-full shrink-0">
        <Image
          src={mobileImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Tablet/Desktop: bleeding hero illustration + dimmer overlay */}
      <div className="tablet:block desktop:mt-[-40px] desktop:h-[calc(900px*0.76)] desktop:w-auto relative mt-16 hidden w-[calc(100%+191.36px)] shrink-0">
        <div className="desktop:h-full desktop:w-auto relative aspect-[1800/640] w-full">
          <Image
            src={heroImage}
            alt=""
            fill
            className="pointer-events-none object-cover"
            sizes="100vw"
          />
        </div>
        <div className="desktop:right-auto desktop:h-[calc(100%*478/640)] desktop:w-auto absolute right-0 bottom-0 left-0 aspect-[1800/478] w-full">
          <Image
            src={dimmerTop}
            alt=""
            fill
            className="pointer-events-none object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
