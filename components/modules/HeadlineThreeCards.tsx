import { FadeIn } from "@/components/ui/FadeIn";
import { FigmaIcon, type FigmaIconName } from "@/components/ui/FigmaIcon";

// module_headline-3-cards -- headline + supporting copy on one row, then
// three bordered cards (icon tile, title, body). Figma: "Value props"
// (Appraiser 2046:720, Scribe 2047:4364, Curator 2047:3408) in the "Version 2"
// section, desktop frame only.
//
// Desktop spec: 1200 content width; head row = 44px display headline (640px
// column) left, 400px copy right, bottoms aligned, 48px gap to the cards;
// cards 3-up with a 16px gap, each p-24 / gap-16 / radius 16 / white with a
// 10% black border, 40px icon tile (radius 10, 12% black border) holding a
// 20px icon. Stacks to one column below desktop (best-practice).

export interface ValueCard {
  icon: FigmaIconName;
  title: string;
  description: string;
}

interface HeadlineThreeCardsProps {
  headline: string;
  subheadline: string;
  cards: [ValueCard, ValueCard, ValueCard];
}

export function HeadlineThreeCards({
  headline,
  subheadline,
  cards,
}: HeadlineThreeCardsProps) {
  return (
    <section
      data-figma-node="2046:720"
      className="bg-background-3 px-margin-x tablet:py-14 desktop:py-[72px] flex w-full flex-col items-center py-10"
    >
      <div className="max-w-section-max-w tablet:gap-10 desktop:gap-12 flex w-full flex-col gap-8">
        <FadeIn
          index={0}
          className="desktop:flex-row desktop:items-end desktop:justify-between flex w-full flex-col gap-4"
        >
          <h2 className="font-display-large tablet:text-[36px] desktop:text-[44px] desktop:max-w-[640px] text-foreground-1 w-full text-[28px] leading-[1.02] font-semibold text-balance">
            {headline}
          </h2>
          <p className="text-foreground-2 desktop:max-w-[400px] w-full text-base leading-6 font-normal">
            {subheadline}
          </p>
        </FadeIn>
        <div className="desktop:grid-cols-3 grid w-full grid-cols-1 gap-4">
          {cards.map(({ icon, title, description }, i) => (
            <FadeIn key={title} index={i + 1} className="flex">
              <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-black/10 ring-inset">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-solid border-black/12">
                  <FigmaIcon name={icon} className="text-foreground-1" />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <p className="text-foreground-1 w-full text-lg leading-7 font-medium">
                    {title}
                  </p>
                  <p className="text-foreground-2 w-full text-base leading-6 font-normal">
                    {description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
