"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SCHEDULE_DEMO_URL } from "@/lib/links";
import logo from "@/public/nav/logo.svg";

// section_nav — GLOBAL NAV. Fixed to the top of the viewport at the
// highest stacking context in the app so page content scrolls underneath
// it; mount once in the root layout, not per-page. Figma: node 83:7866
// (Nav), breakpoints 81:7443 (Desktop) / 83:7867 (Desktop@1024) /
// 83:7868 (Desktop@375) — content and layout are identical across all
// three; only the item gap changes (28px at 1440, 24px at narrower
// widths). No hamburger/mobile menu variant exists in the file.
//
// Transparent at the top of the page; fills to #020202 at 80% opacity
// with a 12px backdrop blur once the user scrolls, then reverts to
// transparent back at the top. No scrolled state exists in the Figma
// file — this behavior isn't spec'd there, only here.
//
// Only the homepage hero is designed to sit directly under a transparent
// nav -- every other route (light-background pages included) always
// renders the filled/scrolled treatment, otherwise the white logo/link
// text is invisible against a light section at the top of the page. Not
// spec'd in Figma (no other page frame shows the Nav at rest) -- a
// best-practice fallback per the translation framework.
export function Nav() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFilled = isScrolled || !isHomepage;

  return (
    <header
      data-figma-node="83:7866"
      className={`px-margin-x fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center justify-center py-2 transition-colors ${
        isFilled ? "bg-[#020202]/80 backdrop-blur-[12px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-section-max-w flex w-full items-center justify-between">
        <Link href="/" className="relative h-4 w-[73.263px] shrink-0">
          <Image
            src={logo}
            alt="Praxi"
            fill
            className="object-contain object-left"
          />
        </Link>
        <div className="desktop:gap-7 flex items-center gap-6">
          <Link
            href="/about-us"
            className="text-right font-sans text-xs leading-4 font-medium whitespace-nowrap text-white"
          >
            About
          </Link>
          <Button href={SCHEDULE_DEMO_URL} target="_blank" rel="noopener noreferrer">
            Schedule Demo →
          </Button>
        </div>
      </div>
    </header>
  );
}
