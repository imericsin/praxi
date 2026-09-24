import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// module_headline-3-column — headline + 3-up card grid (stacks to 1 column
// on mobile). Figma: node 65:3514, breakpoints 65:3149/65:3515/65:3536.
//
// ImageCard below is local to this module for now (no dedicated Figma
// Components section was linked for it) — flagged as a candidate to
// extract into /components/ui if it turns out to repeat elsewhere.

export interface ThreeColumnCard {
  image: StaticImageData;
  title: string;
  description: string;
}

interface HeadlineThreeColumnProps {
  headline: string;
  subheadline: string;
  cards: [ThreeColumnCard, ThreeColumnCard, ThreeColumnCard];
}

function ImageCard({ image, title, description }: ThreeColumnCard) {
  return (
    <div className="flex w-full flex-1 flex-col items-start gap-4">
      <div className="relative aspect-[384/280] w-full shrink-0 rounded">
        <Image
          src={image}
          alt=""
          fill
          className="pointer-events-none rounded object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 100vw"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <p className="text-foreground-1 w-full text-base leading-6 font-semibold">
          {title}
        </p>
        <p className="text-foreground-2 w-full text-sm leading-5 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HeadlineThreeColumn({
  headline,
  subheadline,
  cards,
}: HeadlineThreeColumnProps) {
  return (
    <section
      data-figma-node="65:3514"
      className="bg-background-1 px-margin-x tablet:pb-24 tablet:pt-20 desktop:pb-36 desktop:pt-28 flex w-full flex-col items-center pt-10 pb-12"
    >
      <div className="max-w-section-max-w flex w-full flex-col items-start gap-16">
        <FadeIn
          index={0}
          className="flex w-full max-w-[792px] flex-col items-start gap-7"
        >
          <p className="tablet:text-[32px] desktop:text-[36px] font-display-large w-full text-[28px] leading-[1.2] text-balance">
            <span className="text-foreground-1 font-semibold">{headline}</span>{" "}
            <span className="text-foreground-3 font-semibold">
              {subheadline}
            </span>
          </p>
          <Button variant="secondary">Schedule Demo →</Button>
        </FadeIn>
        <div className="tablet:flex-row tablet:gap-6 desktop:gap-6 flex w-full flex-col items-start gap-10">
          {cards.map((card, i) => (
            <FadeIn key={card.title} index={i + 1} className="w-full flex-1">
              <ImageCard {...card} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
