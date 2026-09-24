import Image from "next/image";
import logo1 from "@/public/hero/logos/logo-1.png";
import logo2 from "@/public/hero/logos/logo-2.png";
import logo3 from "@/public/hero/logos/logo-3.png";
import logo4 from "@/public/hero/logos/logo-4.png";

// section_logo-strip-mobile — mobile-only "Trusted by" logo block.
// Figma: node 92:8003 ("Section Logos (Only Mobile)"), a child of the
// Hero group but explicitly called out as its own module on mobile, not
// a responsive collapse of the desktop/tablet LogoStrip: white
// background (vs. Hero's dark bg), mix-blend-difference (inverts the
// logos instead of screen-lightening them), and a 3-row wrapped layout
// instead of one row. Rendered as a sibling section after <Hero /> in
// the page, not inside it.
//
// tablet:hidden / desktop:hidden -- this section only ever shows below
// the tablet breakpoint; Hero's own LogoStrip covers tablet/desktop.

const rows: {
  image: typeof logo1;
  alt: string;
  height: number;
  width: number;
}[][] = [
  [
    { image: logo1, alt: "", height: 28, width: 74.271 },
    { image: logo2, alt: "", height: 40, width: 91.629 },
    { image: logo3, alt: "", height: 18.415, width: 73.294 },
  ],
  [
    { image: logo4, alt: "", height: 17.717, width: 77.457 },
    { image: logo1, alt: "", height: 28, width: 74.271 },
    { image: logo2, alt: "", height: 40, width: 91.629 },
  ],
  [
    { image: logo3, alt: "", height: 18.415, width: 73.294 },
    { image: logo4, alt: "", height: 17.717, width: 77.457 },
  ],
];

export function LogoStripMobile() {
  return (
    <section
      data-figma-node="92:8003"
      className="tablet:hidden desktop:hidden px-margin-x flex w-full flex-col items-start bg-white pt-10 pb-11"
    >
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <p className="text-foreground-3 w-full text-center font-sans text-xs leading-none font-medium">
          Trusted by 100+ Leading Businesses
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-6 mix-blend-difference">
          {rows.map((row, i) => (
            <div key={i} className="flex items-center gap-[34px]">
              {row.map((logo, j) => (
                <div
                  key={j}
                  className="relative shrink-0"
                  style={{ height: logo.height, width: logo.width }}
                >
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
