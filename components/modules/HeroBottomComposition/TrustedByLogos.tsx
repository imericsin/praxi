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

// TrustedByLogos -- the "logos" row from Figma node 146:11722 (Desktop).
// A real flexbox row (matching the same shrink-to-fit-together pattern
// already used by LogoStrip.tsx in the old Hero), not a fixed-canvas
// illustration -- each logo's height is capped at its natural desktop
// size but scales down together with the others via `min()` once the row
// runs out of horizontal room, instead of overflowing/clipping at
// narrower widths.
//
// Logo set + aspect ratios/heights match Figma's image14-24 nodes exactly
// (63.66x24, 54.978x24, 79.602x20, 78.695x18, 70.726x24, 79.602x21.012,
// 68.442x24, 63.66x24, 89.299x15.142) -- user replaced the placeholder
// logo set with these nine real investor/customer logos.

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

export function TrustedByLogos({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-full min-w-0 items-center justify-between gap-4 ${className}`}
    >
      {logos.map((logo, i) => (
        <div
          key={i}
          style={{ height: `calc(min(24px, 4vw) * ${logo.heightRatio})` }}
          className={`relative min-w-0 shrink ${logo.aspect}`}
        >
          <Image
            src={logo.image}
            alt=""
            fill
            className="object-contain mix-blend-screen"
            sizes="150px"
          />
        </div>
      ))}
    </div>
  );
}
