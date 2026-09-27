import { HeroBottomComposition } from "@/components/modules/HeroBottomComposition";

// Standalone review page for the coded (no raster image) hero product
// composition -- lets it be reviewed full-size, isolated from the Hero
// section's own cropping/overlap/fade treatment, before it's judged ready
// to sit in HeroV2. Not linked from nav; visit directly at
// /hero-illustration-preview. Delete once the composition is approved and
// merged into the real Hero, or keep as a living reference -- either is
// fine, this route has no production purpose of its own.
export default function HeroIllustrationPreviewPage() {
  return (
    <main className="flex-1 bg-[#0c0a09] px-6 pt-32 pb-24">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-display-large text-2xl font-medium text-white">
            Hero illustration review
          </h1>
          <p className="max-w-prose text-sm text-white/60">
            Full-size render of the coded hero product composition (see{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5">
              components/modules/HeroBottomComposition
            </code>
            ), shown here uncropped and without the Hero section&apos;s
            overlap/fade treatment so it can be reviewed on its own before
            going back into the Hero.
          </p>
        </div>
        <HeroBottomComposition />
      </div>
    </main>
  );
}
