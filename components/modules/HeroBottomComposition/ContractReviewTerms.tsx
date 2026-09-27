import { GripVertical, MessageCircle, Search, Sparkles } from "lucide-react";

// "Contract Review Terms" panel -- real flexbox rows, not
// absolute-positioned illustration. Figma source: node 145:11154.

const rows = [
  { label: "Contract Composition and Entire Agreement", opacity: 1 },
  { label: "Character License Scope", opacity: 0.8 },
  { label: "Implementation, Processing and Program Services", opacity: 0.6 },
  { label: "Implementation Plan", opacity: 0.4 },
  { label: "Event Tickets", opacity: 0.2 },
];

export function ContractReviewTerms({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-hidden rounded-xl border border-white/[0.07] bg-neutral-500/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-[40px] ${className}`}
    >
      <div className="flex w-full items-center justify-between">
        <p className="font-sans text-xs leading-none font-medium whitespace-nowrap text-white">
          Contract Review Terms
        </p>
        <Search className="size-3 text-white" strokeWidth={1.75} />
      </div>
      <div className="flex w-full flex-col gap-1.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex w-full items-center justify-between gap-2 rounded-lg bg-white/10 p-2"
            style={{ opacity: row.opacity }}
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <GripVertical
                className="size-2.5 shrink-0 text-white"
                strokeWidth={1.75}
              />
              <p className="min-w-0 truncate font-sans text-[9px] leading-none font-medium whitespace-nowrap text-white">
                {row.label}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 opacity-50">
              <Sparkles className="size-2.5 text-white" strokeWidth={1.75} />
              <MessageCircle
                className="size-2.5 text-white"
                strokeWidth={1.75}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
