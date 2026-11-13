import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SCHEDULE_DEMO_URL } from "@/lib/links";

// module_product-hero -- hero band for a product page: headline on the left,
// supporting copy + CTA on the right (stacks below desktop), then a
// full-width product image. Figma: "Hero body" (Appraiser 2046:380, Scribe
// 2047:1636) in the "Version 2" section, desktop frame only -- tablet/mobile
// stacking is best-practice, not spec'd.
//
// Desktop spec: 1200 content width, 60px display H1 in a 620px column,
// 440px copy column, bottoms aligned, 48px to the 20px-radius visual, 72px
// below it. The page-local navbar in the Figma frame is intentionally not
// built -- the global <Nav /> renders on every route (hence the large top
// padding: 68px of fixed nav + the design's 72px).

interface ProductHeroProps {
  headline: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

export function ProductHero({
  headline,
  description,
  image,
  imageAlt,
}: ProductHeroProps) {
  return (
    <section
      data-figma-node="2046:365"
      className="bg-background-3 px-margin-x tablet:pt-36 tablet:pb-14 desktop:pt-36 desktop:pb-[72px] relative flex w-full flex-col items-center pt-28 pb-10"
    >
      <div className="max-w-section-max-w tablet:gap-10 desktop:gap-12 flex w-full flex-col gap-8">
        <div className="desktop:flex-row desktop:items-end desktop:justify-between flex w-full flex-col gap-8">
          <FadeIn
            immediate
            index={0}
            className="desktop:max-w-[620px] flex w-full flex-col items-start"
          >
            <h1 className="font-display-large tablet:text-[48px] desktop:text-[60px] text-foreground-1 w-full text-[36px] leading-[1.05] font-semibold text-balance">
              {headline}
            </h1>
          </FadeIn>
          <FadeIn
            immediate
            index={1}
            className="desktop:w-[440px] desktop:shrink-0 flex w-full flex-col items-start gap-5"
          >
            <p className="text-foreground-2 w-full text-base leading-6 font-normal">
              {description}
            </p>
            <Button
              variant="secondary"
              href={SCHEDULE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Demo →
            </Button>
          </FadeIn>
        </div>

        <FadeIn immediate index={2} className="w-full">
          <div
            className="relative w-full overflow-hidden rounded-[20px]"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              quality={95}
              className="object-cover"
              sizes="(min-width: 1240px) 1200px, calc(100vw - 40px)"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
