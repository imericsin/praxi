"use client";

import { useEffect, useState } from "react";

// RevealOverlay -- a solid black layer that starts fully opaque and
// fades + slides away shortly after mount, sitting on top of whatever
// needs to be hidden while it settles (e.g. the Hero's blurred glow
// image + the HeroBottomComposition panels' backdrop-blur, which can
// visibly "pop in" once the browser finishes promoting those elements
// to their own compositing layer -- see HeroBottomComposition/index.tsx
// for the will-change: backdrop-filter fix, which addresses the same
// symptom from the other side). This masks that settle-in behind an
// opaque black frame instead, so by the time it's gone the blur is
// already in its final state -- not a FadeIn-style reveal (that starts
// hidden and fades up); this is the reverse, starting opaque and fading
// + sliding OUT.
//
// The slight upward slide (translate-y, same direction/distance as
// FadeIn's own reveal) is there so the overlay's exit reads as part of
// the same motion as the image/content underneath, not a flat
// unrelated cross-fade layered on top of it.
//
// Once the exit transition ends, the element is set to display: none
// (via onTransitionEnd, not just left at opacity-0) so it's fully
// removed from paint/hit-testing rather than sitting there invisibly
// forever.
export function RevealOverlay({
  className = "",
  delayMs = 150,
  durationMs = 500,
}: {
  className?: string;
  /** Wait this long after mount before starting the fade-out, giving
   * the content underneath (glow image decode, backdrop-filter layer
   * promotion) time to settle first. */
  delayMs?: number;
  durationMs?: number;
}) {
  const [phase, setPhase] = useState<"visible" | "exiting" | "removed">(
    "visible",
  );

  useEffect(() => {
    const timer = setTimeout(() => setPhase("exiting"), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  if (phase === "removed") return null;

  return (
    <div
      aria-hidden
      onTransitionEnd={() => setPhase("removed")}
      className={`pointer-events-none absolute inset-x-0 bottom-0 -top-32 transition-all ease-out motion-reduce:hidden ${
        phase === "exiting"
          ? "-translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      } ${className}`}
      style={{
        transitionDuration: `${durationMs}ms`,
        background:
          "linear-gradient(to bottom, transparent, black 8rem)",
      }}
    />
  );
}
