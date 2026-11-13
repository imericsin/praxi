"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { SCHEDULE_DEMO_URL } from "@/lib/links";
import { PRODUCT_LIST } from "@/lib/products";
import logo from "@/public/nav/logo.svg";

// section_nav -- GLOBAL NAV. Fixed to the top of the viewport at the highest
// stacking context in the app so page content scrolls underneath it; mount
// once in the root layout, not per-page.
//
// Figma: "New Nav" section (node 2187:24468) -- NavV2 (2187:24448) has the
// Desktop (2187:24447) and Mobile (2187:19883) variants, ProductsMenu
// (2187:24449) is the dropdown.
//
// Structure: the <header> is only a transparent, click-through wrapper that
// supplies the page margin + max-width behaviour (same as before); the nav
// bar itself is the solid #0c0a09 pill inside it, so there is no scrolled/
// transparent state any more.
//
// The 1px border is drawn as an inset ring so the bar stays 52px tall, as in
// Figma (stroke inside the frame).
//
// Below `tablet` (the Figma "Mobile" variant) the About link is dropped.
// Dropdown: opens on click (not hover), closes on outside click, Escape, or
// route change. Its position (a few px below the trigger, nudged left of the
// label) follows the reference screenshot the design owner supplied, not
// Figma's flat ProductsMenu frame.



function Caret() {
  return (
    <svg
      aria-hidden
      width="9"
      height="5"
      viewBox="0 0 7.6381 4.41949"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M0.136801 0.842585C-0.163387 0.523465 0.0628698 0 0.500992 0H7.1371C7.58255 0 7.80563 0.538571 7.49065 0.853553L4.07116 4.27304C3.87167 4.47254 3.54672 4.46757 3.35342 4.26207L0.136801 0.842585Z"
        fill="white"
      />
    </svg>
  );
}

function ProductsMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Route change closes the menu (set during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 font-sans text-sm leading-5 font-medium whitespace-nowrap text-white"
      >
        Products
        <Caret />
      </button>
      {open && (
        <ul
          id={menuId}
          className="absolute top-[calc(100%+7px)] left-[-17px] flex w-[123px] flex-col gap-0.5 rounded-2xl bg-[rgba(68,68,68,0.5)] p-2 backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)]"
        >
          {PRODUCT_LIST.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-lg px-2 py-1.5 text-left font-sans text-xs leading-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Nav() {
  return (
    <header
      data-figma-node="2187:24448"
      className="px-margin-x pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center pt-4"
    >
      <nav
        aria-label="Primary"
        className="max-w-section-max-w tablet:ring-white/5 pointer-events-auto flex w-full items-center justify-between rounded-lg bg-foreground-1 px-3 py-2 ring-1 ring-white/10 ring-inset"
      >
        <Link href="/" className="relative mx-1 h-4 w-[74px] shrink-0">
          <Image
            src={logo}
            alt="Praxi"
            fill
            className="object-contain object-left"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="tablet:gap-6 flex items-center gap-5">
            <ProductsMenu />
            <Link
              href="/about-us"
              className="tablet:block hidden text-right font-sans text-sm leading-5 font-medium whitespace-nowrap text-white"
            >
              About
            </Link>
          </div>
          <Link
            href={SCHEDULE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-1 tablet:h-9 tablet:rounded-lg tablet:px-5 tablet:py-2 tablet:text-sm tablet:leading-5 flex items-center justify-center rounded-[6px] bg-white px-4 py-3 font-sans text-xs leading-none font-medium whitespace-nowrap transition-colors hover:bg-[#2563eb] hover:text-white"
          >
            Get a Demo →
          </Link>
        </div>
      </nav>
    </header>
  );
}
