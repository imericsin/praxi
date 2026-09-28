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
// size, don't make it responsive anymore." Horizontal position: CENTERED
// whenever the fixed size fits inside its container without clipping;
// only once the container is narrower than the fixed width does it clamp
// to the container's left edge (so it never goes negative / off-screen
// to the left) -- exactly linear.app's homepage behavior. This is a
// single CSS expression, not a breakpoint class, since "fits vs. doesn't
// fit" is a real container-width threshold, not a fixed viewport
// breakpoint: left: max(0px, calc(50% - half the fixed width)). When the
// container is wide, the max() picks the (positive) centering offset;
// once the container narrows past the fixed width, that offset goes
// negative and max() clamps it to 0 (flush left) instead. "Flush left"
// here means the section's own padded left edge (HeroV2.tsx does NOT
// break this out of the section's px-margin-x with a negative margin --
// tried that, then reverted: the panels sit ~75px inset from this
// component's own fixed-size box regardless, so breaking the box out to
// the true viewport edge just pushed the composition further right of
// the copy above it than intended, reading as extra left padding).
// Only the right side ever overflows/fades once clamped, since
// centering only stops once the content is wider than the container.
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
// Fades to the section's own background color (#020202, from
// HeroV2.tsx): bottom edge always (so the logo row below blends in),
// and the right edge always (since the composition is always
// left-aligned now, only the right edge is ever the one that overflows
// past the section).
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
    <div className={`relative w-full ${className}`} style={{ height: FIXED_HEIGHT }}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0"
          style={{
            width: FIXED_WIDTH,
            height: FIXED_HEIGHT,
            left: `max(0px, calc(50% - ${FIXED_WIDTH / 2}px))`,
          }}
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

        {/* Right-edge fade -- always on, since the composition is always
            left-aligned and only ever overflows the section on the
            right. Clipped to this inner box (not the parent bottom
            fade below) since it only needs to cover the composition's
            own width, not the gap beneath it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{
            background: `linear-gradient(to right, transparent, ${SECTION_BG})`,
          }}
        />
      </div>

      {/* Bottom fade -- deliberately NOT clipped by the overflow-hidden
          box above: it needs to extend past this component's own fixed
          height into the gap the parent (HeroV2's flex gap-8) leaves
          before the logo row, otherwise the fade stops dead at this
          component's bottom edge and the unfaded gap behind it reads as
          a visible seam/line at the true section background color.

          h-64 (256px) starting ~200px above the box's bottom edge --
          per explicit request to pull the fade's start point up so it
          fades out more of the illustration, not just the last sliver
          near the edge -- while keeping the same bottom anchor
          (translateY(50%) of the fixed 64px overflow) so it still
          blends into the gap before the logo row exactly as before.

          The gradient itself reaches full opacity at 75% (not 100%) of
          this div's height, per a follow-up request: the illustration's
          own bottom edge needs to already be fully covered by solid
          background color, not just approaching it right at the box's
          own boundary -- the last 25% is flat SECTION_BG, not still
          fading. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
        style={{
          transform: "translateY(50%)",
          background: `linear-gradient(to bottom, transparent, ${SECTION_BG} 75%)`,
        }}
      />
    </div>
  );
}
