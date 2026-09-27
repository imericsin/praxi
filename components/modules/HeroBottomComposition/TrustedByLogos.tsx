import Image, { type StaticImageData } from "next/image";
import logo1 from "@/public/hero/logos/logo-1.png";
import logo2 from "@/public/hero/logos/logo-2.png";
import logo3 from "@/public/hero/logos/logo-3.png";
import logo4 from "@/public/hero/logos/logo-4.png";

// TrustedByLogos -- the "logos" row from Figma node 146:11722 (Desktop) /
// 146:12018 (Tablet). A real flexbox row (matching the same
// shrink-to-fit-together pattern already used by LogoStrip.tsx in the
// old Hero), not a fixed-canvas illustration -- each logo's height is
// capped at 24px (its natural desktop size) but scales down together with
// the others via `min()` once the row runs out of horizontal room,
// instead of overflowing/clipping at narrower widths.

const logos: {
  image: StaticImageData;
  aspect: string;
  heightRatio: number;
}[] = [
  { image: logo1, aspect: "aspect-[1000/377]", heightRatio: 1 },
  { image: logo2, aspect: "aspect-[91.629/40]", heightRatio: 1 },
  { image: logo3, aspect: "aspect-[800/201]", heightRatio: 20 / 24 },
  { image: logo4, aspect: "aspect-[717/164]", heightRatio: 18 / 24 },
  { image: logo1, aspect: "aspect-[1000/377]", heightRatio: 1 },
  { image: logo2, aspect: "aspect-[91.629/40]", heightRatio: 1 },
  { image: logo3, aspect: "aspect-[800/201]", heightRatio: 20 / 24 },
  { image: logo4, aspect: "aspect-[717/164]", heightRatio: 18 / 24 },
  { image: logo1, aspect: "aspect-[1000/377]", heightRatio: 1 },
  { image: logo2, aspect: "aspect-[91.629/40]", heightRatio: 1 },
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
