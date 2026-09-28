import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// module_headline-single-column — headline + CTA, subhead, and a body
// paragraph, all in one column (no image/card grid). Figma: node 145:10663
// "Single Column Blog Style", breakpoints 145:10663 (Desktop) /
// 145:10744 (Tablet) / 145:10755 (Mobile) -- content/copy is identical
// across all three, only spacing/margin-x changes per breakpoint, same as
// every other section in this project.

interface HeadlineSingleColumnProps {
  headline: string;
  subhead: string;
  paragraph: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** Opens ctaHref in a new tab (e.g. an external booking link). */
  ctaExternal?: boolean;
}

export function HeadlineSingleColumn({
  headline,
  subhead,
  paragraph,
  ctaHref,
  ctaLabel = "Schedule Demo →",
  ctaExternal = false,
}: HeadlineSingleColumnProps) {
  return (
    <section
      data-figma-node="145:10663"
      className="bg-background-1 px-margin-x tablet:pb-36 tablet:pt-28 desktop:pb-36 desktop:pt-28 flex w-full flex-col items-center pt-16 pb-16"
    >
      <div className="max-w-section-max-w flex w-full flex-col items-center gap-16">
        <FadeIn
          index={0}
          className="flex w-full max-w-[792px] flex-col items-start gap-7"
        >
          <p className="font-display-large tablet:text-[36px] desktop:text-[36px] text-foreground-1 w-full text-[28px] leading-[1.2] font-semibold text-balance">
            {headline}
          </p>
          {ctaHref ? (
            <Button
              variant="secondary"
              href={ctaHref}
              {...(ctaExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {ctaLabel}
            </Button>
          ) : null}
        </FadeIn>
        <FadeIn
          index={1}
          className="flex w-full max-w-[792px] flex-col items-start gap-4 text-base leading-6"
        >
          <p className="text-foreground-1 w-full font-semibold">{subhead}</p>
          <p className="text-foreground-2 w-full font-normal whitespace-pre-line">
            {paragraph}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
