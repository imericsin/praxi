"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

interface FadeInProps {
  children: ReactNode;
  /** Stagger position -- delay = index * 100ms. */
  index?: number;
  /** Skip the scroll-trigger and animate as soon as mounted (e.g. Hero,
   * which is already in view on first paint). */
  immediate?: boolean;
  className?: string;
}

// Fades content up + in, staggered by `index`, once on scroll into view
// (or immediately on mount for above-the-fold content). Respects
// prefers-reduced-motion via the motion-reduce: variant -- reduced-motion
// users get the end state with no transition, no delay.
export function FadeIn({
  children,
  index = 0,
  immediate = false,
  className = "",
}: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  // `immediate` still needs to start hidden and flip to shown after mount --
  // otherwise the very first paint is already at its end state and there's
  // nothing for the CSS transition to animate from.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const shown = (immediate && mounted) || isInView;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${index * 100}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
