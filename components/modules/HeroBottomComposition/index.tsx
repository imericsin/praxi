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
// size, don't make it responsive anymore." Horizontal alignment is
// breakpoint-specific, per the user's follow-up clarification: desktop
// stays CENTERED within its container (it fits comfortably there,
// centered via left-1/2 + -translate-x-1/2); tablet instead behaves like
// linear.app's homepage -- LEFT-aligned, with its left edge anchored to
// the section's own left edge, so only the right side overflows/fades
// as the composition doesn't shrink to fit.
//
// No edge mask-image here (tried a linear.app-style fade -- mask-image:
// linear-gradient(...) -- but a mask-image on this wrapper breaks the
// panels' backdrop-blur: mask-image establishes its own compositing
// layer, which cuts the panels off from the real page backdrop (the
// glow gradient in HeroV2) that backdrop-filter needs to sample, so the
// frosted-glass effect silently disappeared. Replaced per explicit user
// instruction ("don't add a mask then... use a gradient fade instead")
// with a plain background-color gradient overlay drawn on TOP of the
// content instead of masking it -- an ordinary painted layer, not a
// compositing boundary, so it doesn't touch backdrop-filter at all.
//
// Per the user: fade to the section's own background color (#020202,
// from HeroV2.tsx) only at the bottom on desktop (so the logo row
// below blends in), and additionally at the right edge on tablet
// (where this fixed-size composition overflows the section on the
// right, per the "keep the size, don't make it responsive" behavior
// above).
//
// FIXED_WIDTH/FIXED_HEIGHT are always applied (no responsive
// breakpoints, no percentage-based reflow). The three overlay panels
// (Your Documents, Contract Review Terms, Decision Tree & Memo) are
// positioned with fixed pixel offsets read directly off Figma's own
// layer geometry (node 145:11060, at its natural 1356x674 size) -- not
// percentages, since nothing here scales anymore.
const FIXED_WIDTH = 1356;
const FIXED_HEIGHT = 674;
const SECTION_BG = "#020202";

export function HeroBottomComposition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: FIXED_HEIGHT }}
    >
      <div
        className="tablet:left-0 tablet:translate-x-0 desktop:left-1/2 desktop:-translate-x-1/2 absolute top-0"
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

      {/* Bottom fade -- both breakpoints -- so the logo row below blends
          in instead of cutting off hard. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: `linear-gradient(to bottom, transparent, ${SECTION_BG})`,
        }}
      />

      {/* Right-edge fade -- tablet only -- where the fixed-size
          composition overflows the section on the right. Desktop has
          enough room that this edge isn't reached in practice. */}
      <div
        aria-hidden
        className="tablet:block desktop:hidden pointer-events-none absolute inset-y-0 right-0 hidden w-24"
        style={{
          background: `linear-gradient(to right, transparent, ${SECTION_BG})`,
        }}
      />
    </div>
  );
}
