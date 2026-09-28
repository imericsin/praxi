import { FileText, Search } from "lucide-react";

// "Your Documents" panel -- real flexbox rows, not absolute-positioned
// illustration. Figma source: node 145:11166.

const rows = [
  { label: "Business Combinations Goodwill Intangibles", opacity: 1 },
  { label: "Contract Costs", opacity: 0.8 },
  { label: "Credit Losses", opacity: 0.6 },
  { label: "Income Statement Expense Disaggregation", opacity: 0.4 },
  { label: "Leases", opacity: 0.2 },
];

export function YourDocuments({ className = "" }: { className?: string }) {
  return (
    <div
      className={`will-change-[backdrop-filter] flex flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-neutral-500/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-[40px] ${className}`}
    >
      <div className="flex w-full items-center justify-between">
        <p className="font-sans text-xs leading-none font-medium whitespace-nowrap text-white">
          Your Documents
        </p>
        <Search className="size-3 text-white" strokeWidth={1.75} />
      </div>
      <div className="flex w-full flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex w-full items-center gap-2 border-t border-white/15 py-2.5"
            style={{ opacity: row.opacity }}
          >
            <FileText className="size-2.5 shrink-0 text-white" strokeWidth={1.75} />
            <p className="min-w-0 flex-1 truncate font-sans text-[9px] leading-none font-semibold whitespace-nowrap text-white">
              {row.label}
            </p>
            <p className="shrink-0 font-sans text-[9px] leading-none font-medium whitespace-nowrap text-white/60">
              Q4 2025
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
