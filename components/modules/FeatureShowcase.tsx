import Image, { type StaticImageData } from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { FigmaIcon, type FigmaIconName } from "@/components/ui/FigmaIcon";

// module_feature-showcase -- centered intro statement followed by a stack of
// "evidence" rows. Figma: Appraiser "Features intro" (2046:755) + "Features"
// (2046:757) in the "Version 2" section; Scribe and Curator use the same
// structure.
//
// Row (desktop, per Figma): 1200 content width, two equal 568px columns with
// a 64px gap, vertically centered. Copy = display title, 36px gap, three
// highlights (20px icon + 18px medium title + 16px body, 24px apart). Visual =
// 568x505 rounded-20 image (a 2x export, 1136x1010). Rows alternate:
// copy-left/visual-right, then visual-left/copy-right, and so on. Below
// desktop every row stacks, copy first -- Figma only specs the desktop frame,
// so that is best-practice.

export interface FeatureHighlight {
  icon: FigmaIconName;
  title: string;
  description: string;
}

export interface FeatureRowItem {
  title: string;
  highlights: [FeatureHighlight, FeatureHighlight, FeatureHighlight];
  image: StaticImageData;
  imageAlt: string;
}

interface FeatureShowcaseProps {
  headline: string;
  features: FeatureRowItem[];
}

function FeatureRow({
  title,
  highlights,
  image,
  imageAlt,
  imageLeft,
}: FeatureRowItem & { imageLeft: boolean }) {
  return (
    <div className="desktop:grid-cols-2 desktop:items-center desktop:gap-16 grid w-full grid-cols-1 items-start gap-10">
      <FadeIn
        index={0}
        className={`desktop:row-start-1 flex w-full flex-col items-start gap-9 ${
          imageLeft ? "desktop:col-start-2" : "desktop:col-start-1"
        }`}
      >
        <h3 className="font-display-large tablet:text-[32px] desktop:text-[36px] text-foreground-1 w-full text-[28px] leading-[1.2] font-semibold text-balance">
          {title}
        </h3>
        <div className="flex w-full flex-col items-start gap-6">
          {highlights.map(({ icon, title: highlightTitle, description }) => (
            <div key={highlightTitle} className="flex w-full items-start gap-4">
              <div className="flex h-[26px] w-5 shrink-0 items-center justify-center">
                <FigmaIcon name={icon} className="text-foreground-1 shrink-0" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
                <p className="text-foreground-1 w-full text-lg leading-7 font-medium">
                  {highlightTitle}
                </p>
                <p className="text-foreground-2 w-full text-base leading-6 font-normal">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn
        index={1}
        className={`desktop:row-start-1 w-full ${
          imageLeft ? "desktop:col-start-1" : "desktop:col-start-2"
        }`}
      >
        <div className="relative aspect-[1136/1010] w-full overflow-hidden rounded-[20px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            quality={95}
            className="object-cover"
            sizes="(min-width: 1240px) 568px, (min-width: 1024px) 46vw, calc(100vw - 40px)"
          />
        </div>
      </FadeIn>
    </div>
  );
}

export function FeatureShowcase({ headline, features }: FeatureShowcaseProps) {
  return (
    <section
      data-figma-node="2046:757"
      className="bg-background-3 px-margin-x tablet:pt-20 tablet:pb-14 desktop:pt-[112px] desktop:pb-[52px] flex w-full flex-col items-center pt-16 pb-10"
    >
      <div className="max-w-section-max-w tablet:gap-[72px] desktop:gap-[124px] flex w-full flex-col gap-14">
        <FadeIn index={0} className="flex w-full justify-center">
          <h2 className="font-display-large tablet:text-[36px] desktop:text-[44px] text-foreground-1 w-full max-w-[800px] text-center text-[28px] leading-[1.02] font-semibold text-balance">
            {headline}
          </h2>
        </FadeIn>
        <div className="desktop:gap-[72px] tablet:gap-16 flex w-full flex-col gap-14">
          {features.map((feature, i) => (
            <FeatureRow
              key={feature.title}
              imageLeft={i % 2 === 1}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
