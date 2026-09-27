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
// Decision Tree & Memo) are positioned with percentage-based inset/
// transform offsets relative to the document editor underneath them --
// not fixed pixel coordinates -- so they scale naturally with the
// container's real rendered width at every breakpoint instead of relying
// on a JS/canvas scale hack. Below the `sm` breakpoint the overlap layout
// gets cramped (four panels is a lot to overlap meaningfully under
// ~400px), so panels stack in normal document flow instead -- not
// Figma-spec'd (Figma has no tablet/mobile variant for this composition,
// confirmed with the user), a best-practice responsive fallback.
export function HeroBottomComposition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* Below sm: plain stacked flow, no overlap. */}
      <div className="flex w-full flex-col gap-4 sm:hidden">
        <YourDocuments />
        <ContractReviewTerms />
        <DocumentEditor />
        <DecisionTreeMemo />
      </div>

      {/* sm and up: the Figma-spec'd overlap, using percentage offsets
          (not fixed px) so it scales with the container at every width. */}
      <div className="relative hidden w-full sm:block">
        <div className="w-[60%] min-w-[280px]">
          <DocumentEditor />
        </div>

        <div className="absolute top-[12%] left-0 w-[45%] min-w-[220px]">
          <YourDocuments />
        </div>

        <div className="absolute top-[48%] left-[3%] w-[45%] min-w-[220px]">
          <ContractReviewTerms />
        </div>

        <div className="absolute top-[20%] right-0 w-[42%] min-w-[260px]">
          <DecisionTreeMemo />
        </div>
      </div>
    </div>
  );
}
