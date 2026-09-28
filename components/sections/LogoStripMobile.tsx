import Image, { type StaticImageData } from "next/image";
import logoPlanetFitness from "@/public/hero-v2/logos/logo14-planetfitness.png";
import logoCpi from "@/public/hero-v2/logos/logo15-cpi.png";
import logoDoximity from "@/public/hero-v2/logos/logo18-doximity.png";
import logoTyler from "@/public/hero-v2/logos/logo21-tyler.png";
import logoOptro from "@/public/hero-v2/logos/logo19-optro.png";
import logoAlumis from "@/public/hero-v2/logos/logo16-alumis.png";
import logoColchis from "@/public/hero-v2/logos/logo22-colchis.png";
import logoBuilders from "@/public/hero-v2/logos/logo23-builders.png";
import logoJenavalve from "@/public/hero-v2/logos/logo24-jenavalve.png";

// section_logo-strip-mobile — "Trusted by" logo block, now shown below
// the Hero on BOTH mobile and tablet. Figma: node 146:11691 ("Section
// Logos (Only Mobile)") + 158:13191 ("Section Logos (Only Tablet)") --
// previously tablet packed its own logo row inside the Hero section
// itself (same as desktop still does), but the user broke tablet out
// into this same separate white-background module mobile already used,
// just with a side-by-side (headline left, logo grid right) layout
// instead of mobile's stacked one. Desktop is unaffected -- it still
// renders its "Trusted by 100+ Leading Businesses" row inside the Hero
// via TrustedByLogos.tsx.
//
// desktop:hidden -- this section only ever shows below the desktop
// breakpoint; Hero's own TrustedByLogos row covers desktop.
//
// Logo set matches TrustedByLogos.tsx's nine real logos (the same
// Figma image14-24 nodes), not the old four placeholder logos this
// component used before.

const logos: {
  image: StaticImageData;
  aspect: string;
  heightRatio: number;
}[] = [
  { image: logoPlanetFitness, aspect: "aspect-[63.66/24]", heightRatio: 1 },
  { image: logoCpi, aspect: "aspect-[54.978/24]", heightRatio: 1 },
  { image: logoDoximity, aspect: "aspect-[79.602/20]", heightRatio: 20 / 24 },
  { image: logoTyler, aspect: "aspect-[78.695/18]", heightRatio: 18 / 24 },
  { image: logoOptro, aspect: "aspect-[70.726/24]", heightRatio: 1 },
  {
    image: logoAlumis,
    aspect: "aspect-[79.602/21.012]",
    heightRatio: 21.012 / 24,
  },
  { image: logoColchis, aspect: "aspect-[68.442/24]", heightRatio: 1 },
  { image: logoBuilders, aspect: "aspect-[63.66/24]", heightRatio: 1 },
  {
    image: logoJenavalve,
    aspect: "aspect-[89.299/15.142]",
    heightRatio: 15.142 / 24,
  },
];

export function LogoStripMobile() {
  return (
    <section
      data-figma-node="146:11691"
      className="desktop:hidden tablet:flex-row tablet:items-center tablet:gap-6 px-margin-x flex w-full flex-col items-start gap-7 bg-white pt-10 pb-11"
    >
      <p className="font-display-small tablet:max-w-[480px] tablet:text-[28px] tablet:flex-1 w-full max-w-[480px] text-[20px] leading-[1.2] font-semibold text-foreground-1">
        Praxi is trusted by 100+ leading businesses
      </p>
      <div className="tablet:max-w-[420px] tablet:flex-1 flex w-full max-w-[420px] flex-wrap items-center gap-x-12 gap-y-6 mix-blend-difference">
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{ height: `calc(24px * ${logo.heightRatio})` }}
            className={`relative shrink-0 ${logo.aspect}`}
          >
            <Image
              src={logo.image}
              alt=""
              fill
              className="object-contain"
              sizes="100px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
