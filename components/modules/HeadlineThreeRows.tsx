import { Button } from "@/components/ui/Button";

// module_headline-3-rows — headline/subcopy beside a divided 3-row list,
// stacks vertically on mobile. Figma: node 65:3578, breakpoints
// 65:3579/66:3737/66:3757 (all three are named "Desktop" in the file —
// distinguished here by frame width: 1440/1024/367).
//
// Row is local to this module for now (no dedicated Figma Components
// section was linked for it) — flagged as a candidate to extract into
// /components/ui if it turns out to repeat elsewhere.

export interface ThreeRowItem {
  title: string;
  description: string;
}

interface HeadlineThreeRowsProps {
  headline: string;
  subheadline: string;
  rows: [ThreeRowItem, ThreeRowItem, ThreeRowItem];
}

function Row({ title, description }: ThreeRowItem) {
  return (
    <div className="flex w-full flex-col items-start gap-4 border-t border-solid border-stone-200 py-4">
      <div className="flex w-full items-start gap-6">
        <p className="text-foreground-1 flex-1 text-2xl leading-[32px] font-semibold tracking-[-0.48px]">
          {title}
        </p>
        <p className="text-foreground-2 flex-1 text-sm leading-5 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HeadlineThreeRows({
  headline,
  subheadline,
  rows,
}: HeadlineThreeRowsProps) {
  return (
    <section
      data-figma-node="65:3578"
      className="bg-background-2 px-margin-x tablet:pb-24 tablet:pt-20 desktop:pb-36 desktop:pt-28 flex w-full flex-col items-center pt-10 pb-12"
    >
      <div className="max-w-section-max-w tablet:flex-row tablet:gap-6 desktop:flex-row desktop:gap-6 flex w-full flex-col items-start gap-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6">
          <p className="text-foreground-1 font-display-large w-full text-[36px] leading-[1.2] font-semibold text-balance">
            {headline}
          </p>
          <p className="text-foreground-2 w-full max-w-[480px] text-base leading-6 font-normal">
            {subheadline}
          </p>
          <Button variant="secondary">Schedule Demo →</Button>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-6">
          {rows.map((row) => (
            <Row key={row.title} {...row} />
          ))}
        </div>
      </div>
    </section>
  );
}
