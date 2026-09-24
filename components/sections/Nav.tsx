import Image from "next/image";
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
// Transparent background — the nav overlays page content rather than
// sitting on its own solid bar.
export function Nav() {
  return (
    <header
      data-figma-node="83:7866"
      className="px-margin-x fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-transparent py-2"
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
