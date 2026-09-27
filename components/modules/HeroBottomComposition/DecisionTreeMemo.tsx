import { FileSearch } from "lucide-react";

// "Decision Tree & Memo" panel -- real flexbox/grid layout, not
// absolute-positioned illustration. Figma source: node 145:11181. The
// decision-tree diagram's connector lines are plain CSS borders on
// flex-positioned wrapper divs rather than hand-coordinate SVG paths --
// visually equivalent for this simple branch-and-merge shape, and it
// reflows naturally instead of breaking at arbitrary widths.

function DecisionNode({
  label,
  body,
  variant,
  className = "",
}: {
  label: string;
  body: React.ReactNode;
  variant: "blue" | "gray";
  className?: string;
}) {
  const isBlue = variant === "blue";
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-md border ${isBlue ? "border-[#9cbcff]" : "border-[#888]"} ${className}`}
    >
      <div
        className={`flex h-4 shrink-0 items-center px-1.5 ${isBlue ? "bg-[#9cbcff]" : "bg-[#888]"}`}
      >
        <p
          className={`font-sans text-[9px] leading-none font-semibold whitespace-nowrap ${isBlue ? "text-black" : "text-white"}`}
        >
          {label}
        </p>
      </div>
      <div
        className={`p-1.5 font-sans text-[8px] leading-snug font-medium ${isBlue ? "text-[#9cbcff]" : "text-[#888]"}`}
      >
        {body}
      </div>
    </div>
  );
}

export function DecisionTreeMemo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-hidden rounded-xl border border-white/[0.07] bg-neutral-500/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-[40px] ${className}`}
    >
      <div className="flex w-full items-center justify-between">
        <p className="font-sans text-xs leading-none font-medium whitespace-nowrap text-white">
          Decision Tree &amp; Memo
        </p>
        <FileSearch className="size-3 text-white" strokeWidth={1.75} />
      </div>

      <div className="flex flex-col gap-2 rounded-md border border-dashed border-[#9cbcff] bg-[#9cbcff]/10 p-2">
        <p className="font-sans text-[8px] leading-none font-medium whitespace-nowrap text-[#9cbcff]">
          Primary Scope Assessment
        </p>

        {/* Row 1: the "acquiror control" question, right-aligned to line
            up above Transaction Type below it. */}
        <div className="flex w-full justify-end">
          <DecisionNode
            variant="blue"
            label="Control"
            className="w-1/2"
            body="Has the Acquiror  acquired control of another entity or set of assets?"
          />
        </div>

        {/* Branch connector: one shared horizontal line spanning both
            columns, with "No" and "Yes" pills sitting on top of it at
            each column's center -- both branches now visibly connect
            the top node to the row below, instead of "No" floating
            disconnected (the previous bug: only the right/Yes side had
            a border-top at all). */}
        <div className="relative flex w-full border-t border-[#9cbcff]">
          <div className="flex w-1/2 justify-center">
            <span className="absolute top-[-8px] rounded-full border border-[#888] bg-[#40434a] px-1.5 py-0.5 font-sans text-[7px] leading-none font-medium whitespace-nowrap text-zinc-400">
              No
            </span>
          </div>
          <div className="flex w-1/2 justify-center">
            <span className="absolute top-[-8px] rounded-full bg-[#9cbcff] px-1.5 py-0.5 font-sans text-[7px] leading-none font-medium whitespace-nowrap text-neutral-800">
              Yes
            </span>
          </div>
        </div>

        {/* Row 2: Control (gray, "No" branch) + Transaction Type (blue,
            "Yes" branch), side by side directly under their respective
            pill -- Transaction Type is taller to hold its numbered
            list. */}
        <div className="flex w-full items-start gap-2 pt-2">
          <DecisionNode
            variant="gray"
            label="Control"
            className="w-1/2"
            body="Has the Acquiror  acquired control of another entity or set of assets?"
          />
          <DecisionNode
            variant="blue"
            label="Transaction Type"
            className="w-1/2"
            body={
              <>
                <p className="mb-1">
                  Do any of the following apply for BuyerCo–SellerCo Asset
                  Acquisition?
                </p>
                <ol className="list-decimal pl-3">
                  {[
                    "The transaction is a formation of a joint venture.",
                    "The transaction is between entities under common control?",
                    "The Acquiree is a not-for-profit entity with special circumstances?",
                    "The transaction is solely the acquisition of financial assets/liabilities of a collateralized financing entity (CFE)?",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
