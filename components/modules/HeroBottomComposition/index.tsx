import { ContractReviewTerms } from "./ContractReviewTerms";
import { DecisionTreeMemo } from "./DecisionTreeMemo";
import { DocumentEditor } from "./DocumentEditor";
import { YourDocuments } from "./YourDocuments";

// HeroBottomComposition -- the four-panel product mockup used at the
// bottom of the Hero, built as real, normally-flowing UI components
// (flexbox, proportional Tailwind sizing, Lucide icons), not a fixed-size
// illustration scaled with a CSS transform. That transform-based approach
// (an earlier pass at this component) had a real bug -- scale(min(1,
// calc(...))) is invalid inside scale()'s argument and was silently
// dropped by the browser, so the "illustration" never actually resized at
// all -- and, per explicit user feedback, was the wrong approach anyway:
// this should be built like actual UI components, not an illustration.
//
// Figma source: node 145:11060 ("Illustration") and its four labelled
// child consoles -- Non-Standard MSLA Memo document editor (145:11062),
// Your Documents (145:11166), Contract Review Terms (145:11154),
// Decision Tree & Memo (145:11181). There is no design system backing
// this composition (confirmed with the user) -- panel/card geometry is
// read directly off the Figma layer positions rather than mapped to a
// token, per this module's one-off nature; colors used ARE token-layer
// matches (color/blue-600, color/neutral-700, etc., see the individual
// panel files).
//
// The three overlay panels (Your Documents, Contract Review Terms,
// Decision Tree & Memo) sit inside one shared relative wrapper sized to
// the Figma frame's own aspect ratio (1356x674), positioned with
// percentage-based inset/width offsets read directly off that frame's
// layer geometry -- not fixed pixel coordinates, and not each panel
// positioned relative to a different ancestor -- so every offset is
// measured against the same reference frame and the whole stack scales
// together, in the same proportions as Figma, at any container width.
// Percentages (left/top/width as % of 1356x674):
//   Document Editor:      left 25.7%, top 3.7%,  width 56.9%
//   Your Documents:       left 5.5%,  top 16.3%, width 28.0%
//   Contract Review Terms: left 5.5%,  top 54.2%, width 28.0%
//   Decision Tree & Memo:  left 58.1%, top 22.4%, width 36.4%
// Below the `sm` breakpoint the overlap layout gets cramped (four panels
// is a lot to overlap meaningfully under ~400px), so panels stack in
// normal document flow instead -- not Figma-spec'd (Figma has no tablet/
// mobile variant for this composition, confirmed with the user), a
// best-practice responsive fallback.
export function HeroBottomComposition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full ${className}`} style={{ maxWidth: 1356 }}>
      {/* Below sm: plain stacked flow, no overlap. */}
      <div className="flex w-full flex-col gap-4 sm:hidden">
        <YourDocuments />
        <ContractReviewTerms />
        <DocumentEditor />
        <DecisionTreeMemo />
      </div>

      {/* sm and up: one shared reference frame (aspect-ratio matches the
          Figma canvas) so every panel's percentage offset is measured
          against the same box. Capped at 1356px (max-width on the outer
          wrapper above) -- Figma's own natural illustration width -- so
          it doesn't stretch wider than its source at large viewports. */}
      <div
        className="relative hidden w-full sm:block"
        style={{ aspectRatio: "1356 / 674" }}
      >
        <div className="absolute top-[3.7%] left-[25.7%] w-[56.9%] min-w-[260px]">
          <DocumentEditor />
        </div>

        <div className="absolute top-[16.3%] left-[5.5%] w-[28%] min-w-[220px]">
          <YourDocuments />
        </div>

        <div className="absolute top-[54.2%] left-[5.5%] w-[28%] min-w-[220px]">
          <ContractReviewTerms />
        </div>

        <div className="absolute top-[22.4%] left-[58.1%] w-[36.4%] min-w-[260px]">
          <DecisionTreeMemo />
        </div>
      </div>
    </div>
  );
}
