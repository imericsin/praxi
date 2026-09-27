import {
  Bold,
  ChevronDown,
  Download,
  Italic,
  MessageSquare,
  Minus,
  Pencil,
  Plus,
  Redo2,
  RotateCcw,
  Settings2,
  Sparkles,
  Type,
  Underline,
  Undo2,
} from "lucide-react";
import { LogoMarkIcon } from "./icons";

// The "Non-Standard MSLA Memo" document editor -- a real, normally-flowing
// component (flexbox + proportional Tailwind sizing, Lucide icons), not
// an absolutely positioned illustration. Figma source: node 145:11062
// (see HeroBottomComposition/index.tsx for the full node reference list).
// Toolbar controls hide progressively on narrower widths rather than
// shrinking illegibly -- not Figma-spec'd (Figma has one fixed size), a
// best-practice responsive fallback per the translation framework.

function Toolbar() {
  return (
    <div className="flex h-6 w-full items-center justify-between gap-2 rounded-lg border border-neutral-600 bg-neutral-700/40 px-2 shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
      <div className="flex min-w-0 items-center gap-2 overflow-hidden">
        <div className="flex shrink-0 items-center gap-1">
          <Pencil className="size-2.5 text-white" strokeWidth={1.75} />
          <span className="hidden font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white sm:inline">
            Editing
          </span>
        </div>
        <div className="hidden h-3 w-px shrink-0 bg-white/20 sm:block" />
        <Undo2
          className="hidden size-2.5 shrink-0 text-white sm:block"
          strokeWidth={1.75}
        />
        <Redo2
          className="hidden size-2.5 shrink-0 text-white sm:block"
          strokeWidth={1.75}
        />
        <div className="hidden h-3 w-px shrink-0 bg-white/20 md:block" />
        <div className="hidden shrink-0 items-center gap-1 md:flex">
          <span className="font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white">
            Normal text
          </span>
          <ChevronDown className="size-2.5 text-white/50" strokeWidth={1.75} />
        </div>
        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          <span className="font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white">
            Arial
          </span>
          <ChevronDown className="size-2.5 text-white/50" strokeWidth={1.75} />
        </div>
        <div className="hidden shrink-0 items-center gap-1 rounded border border-neutral-500 px-1.5 py-0.5 lg:flex">
          <Minus className="size-2.5 text-white/40" strokeWidth={1.75} />
          <span className="font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white">
            12
          </span>
          <Plus className="size-2.5 text-white/40" strokeWidth={1.75} />
        </div>
        <Bold
          className="hidden size-2.5 shrink-0 text-white sm:block"
          strokeWidth={1.75}
        />
        <Italic
          className="hidden size-2.5 shrink-0 text-white sm:block"
          strokeWidth={1.75}
        />
        <Underline
          className="hidden size-2.5 shrink-0 text-white sm:block"
          strokeWidth={1.75}
        />
        <div className="hidden shrink-0 items-center gap-0.5 md:flex">
          <Type className="size-2.5 text-white" strokeWidth={1.75} />
          <ChevronDown className="size-2.5 text-white/50" strokeWidth={1.75} />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <RotateCcw
          className="hidden size-2.5 text-white sm:block"
          strokeWidth={1.75}
        />
        <Settings2 className="size-2.5 text-white" strokeWidth={1.75} />
        <Download className="size-2.5 text-white" strokeWidth={1.75} />
      </div>
    </div>
  );
}

export function DocumentEditor() {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-xl bg-neutral-800/50 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <LogoMarkIcon className="size-6 shrink-0" />
          <div className="flex min-w-0 items-center gap-1 font-sans text-[11px] leading-tight font-medium whitespace-nowrap text-white">
            <span className="hidden opacity-40 sm:inline">
              Technical Accounting
            </span>
            <span className="hidden opacity-40 sm:inline">/</span>
            <span className="truncate font-semibold">
              Non-Standard MSLA Memo
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <div className="flex h-6 items-center gap-1 rounded-lg bg-neutral-700 px-2">
            <Sparkles className="size-2.5 text-white" strokeWidth={1.75} />
            <span className="hidden font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white xs:inline">
              Advisor
            </span>
          </div>
          <div className="hidden h-6 items-center gap-1 rounded-lg border border-neutral-600 px-2 opacity-50 sm:flex">
            <MessageSquare
              className="size-2.5 text-white"
              strokeWidth={1.75}
            />
            <span className="font-sans text-[8px] leading-none font-medium whitespace-nowrap text-white">
              Comments
            </span>
          </div>
        </div>
      </div>

      <Toolbar />

      {/* Body copy sits inset from the card's own edges by more than the
          header/toolbar above it (Figma: body block at left-82px/width-608px
          inside a 772px-wide card -- a ~10.6% inset each side -- vs. the
          toolbar's ~2.3% inset). The extra px-[10.5%] approximates that
          ratio responsively; it's also what pushes the card's rendered
          height up to match Figma's taller proportions, since the body
          text now wraps across more lines at a narrower measure.

          mt-[4.5%] adds the extra breathing room Figma has between the
          toolbar and this block (~45px in a 905px-tall card, ~5% -- more
          than the shared gap-2 the rest of the header stack uses). */}
      <div className="mt-[4.5%] flex w-full flex-col gap-3 px-[10.5%] text-zinc-300 sm:gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="font-sans text-[10px] leading-none font-semibold sm:text-xs">
            Exhibit 10.20
          </p>
          <div className="font-sans text-[9px] leading-snug font-medium text-zinc-400/40 sm:text-[10px]">
            <p className="mb-0">
              CERTAIN CONFIDENTIAL INFORMATION, MARKED BY [***], HAS BEEN
              EXCLUDED FROM THIS EXHIBIT BECAUSE (I) IT IS NOT MATERIAL AND
              (II) THE REGISTRANT CUSTOMARILY AND ACTUALLY TREATS THE
              INFORMATION AS PRIVATE AND CONFIDENTIAL.
            </p>
            <p className="mb-0">MASTER SERVICES AND LICENSE AGREEMENT</p>
            <p>
              {
                'THIS MASTER SERVICES AND LICENSE AGREEMENT (the "Agreement") is entered into between Customer, a Delaware corporation, whose principal address is San Francisco, CA ("Client"), and Company, a Delaware corporation, whose principal address is San Francisco, CA ("Company" and together with Client, each a "Party" and together the "Parties").'
              }
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="font-sans text-xs leading-none font-semibold sm:text-sm">
            MASTER SERVICES AND LICENSE AGREEMENT
          </p>
          <p className="font-sans text-[9px] leading-snug font-medium text-zinc-400/40 sm:text-[10px]">
            {
              'THIS MASTER SERVICES AND LICENSE AGREEMENT (the "Agreement") is entered into between Customer, a Delaware corporation, whose principal address is San Francisco, CA ("Client"), and Company, a Delaware corporation, whose principal address is San Francisco, CA ("Company" and together with Client, each a "Party" and together the "Parties").'
            }
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="font-sans text-[10px] leading-none font-semibold sm:text-xs">
            Background
          </p>
          <div className="font-sans text-[9px] leading-snug font-medium text-zinc-400/40 sm:text-[10px]">
            <p className="mb-0">
              A. Company is in the business of providing Entertainment
              Services, each as further described herein; and
            </p>
            <p className="mb-0">
              B. Client wishes to engage Company to provide such Services on
              the terms and conditions set forth in this Agreement.
            </p>
            <p>
              NOW, THEREFORE, for good and valuable consideration, the
              receipt and adequacy of which are hereby acknowledged, the
              Parties agree as follows:
            </p>
          </div>
          <p className="font-sans text-[9px] leading-snug font-medium whitespace-pre-line text-zinc-400/40 sm:text-[10px]">
            Agreement. This Agreement consists of this cover page and the
            following:
            {"\n\n"}
            {"      a.       Schedule A - Program Terms\n"}
            {"      b.       Schedule B - General Terms and Conditions\n"}
            {"      c.       Schedule C - Definitions\n"}
            {"      d.       Schedule D - IP License Fees\n"}
            {"      e.       Schedule E - Advertising Services\n"}
            {"      f.        Schedule F - Company Characters\n"}
            {"      g.       Schedule G - Client Products"}
          </p>
          <p className="font-sans text-[9px] leading-snug font-medium text-zinc-400/40 sm:text-[10px]">
            {
              'IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the last date signed below (the "Effective Date"):'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
