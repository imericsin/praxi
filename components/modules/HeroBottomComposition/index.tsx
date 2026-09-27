import { ContractReviewTerms } from "./ContractReviewTerms";
import { DecisionTreeMemo } from "./DecisionTreeMemo";
import { DocumentEditor } from "./DocumentEditor";
import { YourDocuments } from "./YourDocuments";

// HeroBottomComposition -- the four-panel product mockup used at the
// bottom of the Hero, built as real UI components (flexbox, proportional
// Tailwind sizing, Lucide icons), not a fixed-size illustration scaled
// with a CSS transform.
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
// Sizing behavior -- explicitly NOT responsive, per the user: "keep the
// size, don't make it responsive anymore... behave like linear.app's
// homepage -- fade out the edges when the size gets smaller." Confirmed
// by inspecting linear.app directly: its screenshot sits in a container
// with mask-image: linear-gradient(to right, transparent, black 80px,
// black calc(100% - 80px), transparent) -- it does not shrink to fit, it
// just overflows past the visible edge with a soft fade.
//
// Per explicit follow-up, this stays CENTERED within its container (not
// left-aligned to the browser edge) until the fixed size exceeds the
// container's width, at which point it bleeds/fades symmetrically on
// both sides -- centered via left-1/2 + -translate-x-1/2 on the fixed-
// size inner box, rather than flush against the container's own left
// edge.
//
// FIXED_WIDTH/FIXED_HEIGHT are always applied (no responsive
// breakpoints, no percentage-based reflow) and a horizontal mask-image
// fade handles the edges when the container is narrower than the fixed
// size. The three overlay panels (Your Documents, Contract Review
// Terms, Decision Tree & Memo) are positioned with fixed pixel offsets
// read directly off Figma's own layer geometry (node 145:11060, at its
// natural 1356x674 size) -- not percentages, since nothing here scales
// anymore.
const FIXED_WIDTH = 1356;
const FIXED_HEIGHT = 674;

export function HeroBottomComposition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: FIXED_HEIGHT,
        maskImage:
          "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: FIXED_WIDTH, height: FIXED_HEIGHT }}
      >
        <div className="absolute top-[25px] left-[348px] w-[772px]">
          <DocumentEditor />
        </div>

        <div className="absolute top-[110px] left-[75px] w-[379px]">
          <YourDocuments />
        </div>

        <div className="absolute top-[365px] left-[75px] w-[379px]">
          <ContractReviewTerms />
        </div>

        <div className="absolute top-[151px] left-[788px] w-[493px]">
          <DecisionTreeMemo />
        </div>
      </div>
    </div>
  );
}
