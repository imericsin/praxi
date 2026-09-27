import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import bg from "@/public/footer/bg.png";
import logo from "@/public/footer/logo.svg";

// section_footer — GLOBAL FOOTER. This is the site-wide footer: render it
// once at the bottom of the root layout (or every page that doesn't share
// a common layout), not per-page. Figma: node 83:7651 (Footer), breakpoints
// 83:7739 (Desktop) / 83:7782 (Tablet) / 83:7824 (Mobile).
//
// Note: unlike other sections built so far, the headline here stays fixed
// at 36px (custom/display-large) across all three breakpoints rather than
// scaling down — confirmed via the Figma variable data, not an oversight.

const menuLinks = [
  { label: "About", href: "/about-us" },
  { label: "Schedule Demo", href: "/#schedule-demo" },
  { label: "FAQs", href: "/faq" },
  { label: "Trust Center", href: "/trust-center" },
];
const connectLinks = [
  { label: "Partnerships", href: "/alliances" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/praxi" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer
      data-figma-node="83:7651"
      className="px-margin-x tablet:gap-44 tablet:pt-28 desktop:gap-44 desktop:pt-28 relative flex w-full flex-col items-center gap-28 overflow-hidden bg-[#020202] pt-16 pb-6"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src={bg} alt="" fill className="object-cover" sizes="100vw" />
      </div>

      {/* CTA */}
      <div className="max-w-section-max-w relative flex w-full items-center justify-center gap-6">
        <FadeIn
          index={0}
          className="tablet:items-center desktop:items-center flex w-full flex-1 flex-col items-start gap-6"
        >
          <p className="font-display-large tablet:text-center desktop:text-center w-full text-[36px] leading-[1.2] font-semibold text-white">
            Work smarter.
            <br />
            Account with confidence.
          </p>
          <Button>Schedule Demo →</Button>
        </FadeIn>
      </div>

      {/* Link columns */}
      <div className="max-w-section-max-w tablet:flex-row desktop:flex-row relative flex w-full flex-col items-start gap-6">
        <FadeIn
          index={1}
          className="flex w-full flex-1 flex-col items-start gap-5"
        >
          <div className="relative h-5 w-[91.579px] shrink-0">
            <Image
              src={logo}
              alt="Praxi"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="w-full font-sans text-sm leading-5 font-medium text-slate-300">
            Modernize your technical
            <br />
            accounting workflow
          </p>
        </FadeIn>

        <FadeIn
          index={2}
          className="flex w-full flex-1 flex-col items-center gap-6"
        >
          <div className="flex w-full items-start gap-6 font-sans font-medium">
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="w-full text-xs leading-none text-slate-300">Menu</p>
              <div className="flex w-full flex-col items-start gap-2.5">
                {menuLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-full text-sm leading-none text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4">
              <p className="w-full text-xs leading-none text-slate-300">
                Connect
              </p>
              <div className="flex w-full flex-col items-start gap-2.5">
                {connectLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-full text-sm leading-none text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Legal row */}
      <div className="max-w-section-max-w tablet:flex-row tablet:items-start tablet:gap-6 desktop:flex-row desktop:items-start desktop:gap-6 relative flex w-full flex-col items-start gap-1">
        <div className="tablet:justify-start desktop:justify-start flex w-full flex-1 items-center justify-between gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-xs leading-4 font-normal whitespace-nowrap text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-1 items-start justify-end">
          <p className="text-right font-sans text-xs leading-4 font-normal whitespace-nowrap text-white">
            © 2026 Praxi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
