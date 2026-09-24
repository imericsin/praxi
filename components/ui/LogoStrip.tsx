import Image, { type StaticImageData } from "next/image";
import logo1 from "@/public/hero/logos/logo-1.png";
import logo2 from "@/public/hero/logos/logo-2.png";
import logo3 from "@/public/hero/logos/logo-3.png";
import logo4 from "@/public/hero/logos/logo-4.png";

// "Trusted by" logo strip -- dark-background variant (Hero desktop/tablet,
// node 92:7981 / 92:7993). Logos are dark-colored marks lightened via
// mix-blend-screen against the dark backdrop, per the Figma source
// (which exported this as duplicate stacked <img> layers per blend
// mode -- consolidated here to one image + CSS blend mode each).
// Figma repeats the same 4 logos twice to fill 8 grid slots (14, 15, 18,
// 16, 19, 23, 21, 22 -- the latter four reuse the first four's assets as
// placeholders, confirmed with the user) -- kept as 8 slots, not
// collapsed down to 4 unique logos.

// Per-logo height matches each layer's actual size in Figma (node 92:7981:
// image14=42.77px, image15=40px, image18=28.51px, image16=25.95px),
// capped at 32px max -- not stretched up to a uniform 32px. image18/16
// were already under 32px and keep their smaller natural size. Heights
// are expressed as a fraction of the 32px cap (via --logo-h) rather than
// a fixed pixel height, so every logo scales down together -- and stays
// proportional to each other -- as the row runs out of horizontal room,
// instead of overflowing/getting clipped at narrower viewports.
const logos: {
  image: StaticImageData;
  alt: string;
  heightRatio: number;
  aspect: string;
}[] = [
  { image: logo1, alt: "", heightRatio: 1, aspect: "aspect-[1000/377]" },
  { image: logo2, alt: "", heightRatio: 1, aspect: "aspect-[91.629/40]" },
  {
    image: logo3,
    alt: "",
    heightRatio: 28.51 / 32,
    aspect: "aspect-[800/201]",
  },
  {
    image: logo4,
    alt: "",
    heightRatio: 25.95 / 32,
    aspect: "aspect-[717/164]",
  },
  { image: logo1, alt: "", heightRatio: 1, aspect: "aspect-[1000/377]" },
  { image: logo2, alt: "", heightRatio: 1, aspect: "aspect-[91.629/40]" },
  {
    image: logo3,
    alt: "",
    heightRatio: 28.51 / 32,
    aspect: "aspect-[800/201]",
  },
  {
    image: logo4,
    alt: "",
    heightRatio: 25.95 / 32,
    aspect: "aspect-[717/164]",
  },
];

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-5 ${className}`}>
      <p className="w-full font-sans text-xs leading-none font-medium text-[#9ca3af]">
        Trusted by 100+ Leading Businesses
      </p>
      <div className="desktop:gap-12 flex w-full min-w-0 items-center justify-between gap-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{
              height: `calc(min(32px, 4vw) * ${logo.heightRatio})`,
            }}
            className={`relative min-w-0 shrink ${logo.aspect}`}
          >
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
    </div>
  );
}
