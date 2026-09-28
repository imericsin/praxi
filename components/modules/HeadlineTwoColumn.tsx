import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// module_headline-two-column — "Two Column Blog Style" from Figma node
// 151:12463, breakpoints 151:12464 (Desktop) / 151:12502 (Tablet) /
// 151:12516 (Mobile). Left column: heading + paragraph + CTA, then a
// "Subhead" label (e.g. "Our Investors") with a row of investor logos.
// Right column: a second, smaller subhead+paragraph block (e.g. a
// location address) -- stacks below the left column on mobile (Figma:
// right CopyBlock moves from x=818/y=0 on desktop to x=0/y=853 on
// mobile, well below the investor logos).

export interface TwoColumnLogo {
  image: StaticImageData;
  alt: string;
  aspect: string;
}

interface HeadlineTwoColumnProps {
  headline: React.ReactNode;
  paragraph: string;
  ctaHref?: string;
  ctaLabel?: string;
  investorsLabel: string;
  logos: TwoColumnLogo[];
  asideSubhead: string;
  asideParagraph: string;
}

export function HeadlineTwoColumn({
  headline,
  paragraph,
  ctaHref,
  ctaLabel = "Schedule Demo →",
  investorsLabel,
  logos,
  asideSubhead,
  asideParagraph,
}: HeadlineTwoColumnProps) {
  return (
    <section
      data-figma-node="151:12463"
      className="bg-background-1 px-margin-x tablet:pb-36 tablet:pt-28 desktop:pb-36 desktop:pt-28 flex w-full flex-col items-center pt-16 pb-16"
    >
      <div className="max-w-section-max-w tablet:flex-row desktop:flex-row flex w-full flex-col items-start gap-16">
        <div className="flex w-full flex-1 flex-col items-start gap-16">
          <FadeIn
            index={0}
            className="flex w-full max-w-[792px] flex-col items-start gap-7"
          >
            <p className="font-display-large text-foreground-1 w-full text-[28px] leading-[1.2] font-semibold text-balance">
              {headline}
            </p>
            <p className="text-foreground-2 w-full text-base leading-6 font-normal">
              {paragraph}
            </p>
            {ctaHref ? (
              <Button variant="secondary" href={ctaHref}>
                {ctaLabel}
              </Button>
            ) : null}
          </FadeIn>

          <FadeIn index={1} className="flex w-full flex-col items-start gap-4">
            <p className="text-foreground-1 w-full text-base leading-6 font-semibold">
              {investorsLabel}
            </p>
            <div className="flex w-full flex-wrap items-center gap-14">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className={`relative h-16 w-auto shrink-0 ${logo.aspect}`}
                >
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    fill
                    className="object-contain object-left"
                    sizes="200px"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn
          index={2}
          className="flex w-full max-w-[382px] flex-1 flex-col items-start gap-3"
        >
          <p className="text-foreground-1 w-full text-sm leading-5 font-semibold">
            {asideSubhead}
          </p>
          <p className="text-foreground-2 w-full text-xs leading-4 font-normal whitespace-pre-line">
            {asideParagraph}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
