"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import logo from "@/public/nav/logo.svg";

// section_nav — GLOBAL NAV. Fixed to the top of the viewport at the
// highest stacking context in the app so page content scrolls underneath
// it; mount once in the root layout, not per-page. Figma: node 83:7866
// (Nav), breakpoints 81:7443 (Desktop) / 83:7867 (Desktop@1024) /
// 83:7868 (Desktop@375) — content and layout are identical across all
// three; only the item gap changes (28px at 1440, 24px at narrower
// widths). No hamburger/mobile menu variant exists in the file.
//
// Transparent at the top of the page; fills to #020202 (the same dark
// tone used by Hero/Footer/CaseStudies) once the user scrolls, then
// reverts to transparent back at the top. No scrolled state exists in
// the Figma file — this behavior isn't spec'd there, only here.
export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-figma-node="83:7866"
      className={`px-margin-x fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center justify-center py-2 transition-colors ${
        isScrolled ? "bg-[#020202]" : "bg-transparent"
      }`}
    >
      <div className="max-w-section-max-w flex w-full items-center justify-between">
        <div className="relative h-4 w-[73.263px] shrink-0">
          <Image
            src={logo}
            alt="Praxi"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="desktop:gap-7 flex items-center gap-6">
          <p className="text-right font-sans text-xs leading-4 font-medium whitespace-nowrap text-white">
            About
          </p>
          <Button>Schedule Demo →</Button>
        </div>
      </div>
    </header>
  );
}
