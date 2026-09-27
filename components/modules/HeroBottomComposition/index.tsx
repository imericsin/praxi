import {
  BoldIcon,
  ChevronDownIcon,
  DocIcon,
  DownloadIcon,
  ExpandIcon,
  ItalicIcon,
  LogoMarkIcon,
  MinusIcon,
  PencilIcon,
  PlusIcon,
  RedoIcon,
  ResetIcon,
  SearchIcon,
  SettingsIcon,
  SparkleIcon,
  TextColorIcon,
  UnderlineIcon,
  UndoIcon,
} from "./icons";

// HeroBottomComposition -- a fully coded (no raster image) reproduction of
// the four-panel product mockup used at the bottom of the Hero, referencing
// Figma node 69:4360 (root) and its four labelled child consoles:
//   - Non-Standard MSLA Memo document editor: node 145:10371
//   - Your Documents panel:                   node 145:10475
//   - Contract Review Terms panel:             node 145:10463
//   - Decision Tree & Memo panel:               node 145:10490
//
// There is no design system backing this composition (confirmed with the
// user) -- every value below is read directly off the Figma layer geometry
// rather than mapped to a token, per this module's one-off/illustrative
// nature. All colors used ARE token-layer matches (see get_variable_defs
// pull: color/blue-600, color/neutral-700, color/neutral-600, color/zinc-300,
// color/zinc-400, color/neutral-500, color/neutral-800, spacing/2-5,
// spacing/3) -- those are used as Tailwind classes; only the bespoke
// panel/card layout geometry itself (widths, absolute offsets, the decision
// tree diagram) is unmapped and hand-read from the Figma frame.
//
// Structure: a fixed-size canvas (2335x1160, the Figma frame's natural size)
// scaled down responsively with a CSS transform, so every child's absolute
// px position/size stays geometrically exact at any viewport width instead
// of being re-flowed per breakpoint. Figma provides no tablet/mobile variant
// for this composition (confirmed with the user for the parent Hero image),
// so uniform scaling is the faithful behavior here, not a compromise.

const CANVAS_WIDTH = 2335;
const CANVAS_HEIGHT = 1160;

function Toolbar() {
  return (
    <div className="absolute top-[73px] left-[21px] flex h-[47px] w-[1268px] items-center justify-between rounded-[16px] border border-neutral-600/100 bg-neutral-700/40 px-[21px] shadow-[16px_16px_31px_0_rgba(0,0,0,0.05)]">
      <div className="flex w-[668px] items-center gap-[18px]">
        <div className="flex items-center gap-2 rounded-xl">
          <PencilIcon className="size-[18px] text-white" />
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            Editing
          </span>
        </div>
        <div className="h-5 w-px shrink-0 bg-white/20" />
        <UndoIcon className="size-[18px] text-white" />
        <RedoIcon className="size-[18px] rotate-180 text-white" />
        <div className="h-5 w-px shrink-0 bg-white/20" />
        <div className="flex items-center gap-2">
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            Normal text
          </span>
          <ChevronDownIcon className="size-[18px] text-white/50" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            Arial
          </span>
          <ChevronDownIcon className="size-[18px] text-white/50" />
        </div>
        <div className="flex items-center gap-[10px] rounded-md border border-neutral-500 px-[10px] py-2">
          <MinusIcon className="size-[18px] text-white/40" />
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            12
          </span>
          <PlusIcon className="size-[18px] text-white/40" />
        </div>
        <BoldIcon className="size-[18px] text-white" />
        <ItalicIcon className="size-[18px] text-white" />
        <UnderlineIcon className="size-[18px] text-white" />
        <div className="flex items-center gap-1">
          <TextColorIcon className="size-[18px] text-white" />
          <ChevronDownIcon className="size-[18px] text-white/50" />
        </div>
      </div>
      <div className="flex items-center gap-[13px]">
        <ResetIcon className="size-[18px] text-white" />
        <SettingsIcon className="size-[18px] text-white" />
        <DownloadIcon className="size-[18px] text-white" />
      </div>
    </div>
  );
}

function DocumentEditor() {
  return (
    <div
      className="absolute top-[56px] left-[609px] w-[1310px] overflow-hidden rounded-[13px] bg-neutral-800/50 shadow-[2px_20px_41px_0_rgba(0,0,0,0.1),10px_76px_76px_0_rgba(0,0,0,0.09),22px_170px_104px_0_rgba(0,0,0,0.05)]"
      style={{ height: 1533 }}
    >
      <div className="flex items-center gap-4 px-[13px] py-2">
        <LogoMarkIcon className="size-[52px] shrink-0" />
        <div className="flex items-center gap-1 font-sans text-[18px] leading-[26px] font-medium whitespace-nowrap text-white">
          <span className="opacity-40">Technical Accounting</span>
          <span className="opacity-40">/</span>
          <span className="font-semibold">Non-Standard MSLA Memo</span>
        </div>
      </div>

      <div className="absolute top-[13px] left-[1033px] flex items-center gap-[5px]">
        <div className="flex h-[42px] items-center gap-2 rounded-[13px] bg-neutral-700 px-[13px] py-2">
          <SparkleIcon className="size-[18px] text-white" />
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            Advisor
          </span>
        </div>
        <div className="flex h-[42px] items-center gap-2 rounded-[13px] border border-neutral-600 px-[13px] py-2 opacity-50">
          <svg
            viewBox="0 0 18.2958 18.2958"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.30684"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[18px] text-white"
          >
            <path d="M16.7701 12.959C16.7701 13.3634 16.6095 13.7512 16.3236 14.0371C16.0376 14.323 15.6498 14.4837 15.2455 14.4837H5.20412C4.79979 14.4837 4.41205 14.6444 4.12619 14.9304L2.44755 16.609C2.37185 16.6847 2.27542 16.7362 2.17043 16.7571C2.06545 16.778 1.95663 16.7673 1.85774 16.7263C1.75885 16.6854 1.67432 16.616 1.61485 16.527C1.55537 16.438 1.52362 16.3334 1.52361 16.2263L1.52361 3.8111C1.52361 3.40674 1.68424 3.01894 1.97017 2.73301C2.2561 2.44708 2.6439 2.28645 3.04826 2.28645L15.2455 2.28645C15.6498 2.28645 16.0376 2.44708 16.3236 2.73301C16.6095 3.01894 16.7701 3.40674 16.7701 3.8111V12.959Z" />
          </svg>
          <span className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
            Comments
          </span>
        </div>
      </div>

      <Toolbar />

      <div className="absolute top-[197px] left-[131px] flex w-[1047px] flex-col gap-[91px] text-zinc-300">
        <div className="flex flex-col gap-[34px]">
          <p className="font-sans text-[21px] leading-none font-semibold">
            Exhibit 10.20
          </p>
          <div className="font-sans text-[18px] leading-[26px] font-medium text-zinc-400/40">
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

        <div className="flex flex-col gap-[34px]">
          <p className="font-sans text-[27px] leading-none font-semibold">
            MASTER SERVICES AND LICENSE AGREEMENT
          </p>
          <p className="font-sans text-[18px] leading-[26px] font-medium text-zinc-400/40">
            {
              'THIS MASTER SERVICES AND LICENSE AGREEMENT (the "Agreement") is entered into between Customer, a Delaware corporation, whose principal address is San Francisco, CA ("Client"), and Company, a Delaware corporation, whose principal address is San Francisco, CA ("Company" and together with Client, each a "Party" and together the "Parties").'
            }
          </p>
        </div>

        <div className="flex flex-col gap-[34px]">
          <p className="font-sans text-[21px] leading-none font-semibold">
            Background
          </p>
          <div className="font-sans text-[18px] leading-[26px] font-medium text-zinc-400/40">
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
          <p className="font-sans text-[18px] leading-[26px] font-medium whitespace-pre-wrap text-zinc-400/40">
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
          <p className="font-sans text-[18px] leading-[26px] font-medium text-zinc-400/40">
            {
              'IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the last date signed below (the "Effective Date"):'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

function ConsolePanel({
  title,
  top,
  left,
  width,
  height,
  children,
}: {
  title: string;
  top: number;
  left: number;
  width: number;
  height?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute flex flex-col gap-[26px] overflow-hidden rounded-[16px] border border-white/100 bg-neutral-500/20 px-[26px] py-[37px] shadow-[2px_20px_41px_0_rgba(0,0,0,0.1),10px_76px_76px_0_rgba(0,0,0,0.09),22px_170px_104px_0_rgba(0,0,0,0.05)] backdrop-blur-[22px]"
      style={{ top, left, width, height }}
    >
      <div className="flex w-full items-center justify-between px-[10px]">
        <p className="font-sans text-[20px] leading-none font-medium whitespace-nowrap text-white">
          {title}
        </p>
        <DocIcon className="size-[21px] text-white" />
      </div>
      {children}
    </div>
  );
}

function ContractReviewTerms() {
  const rows = [
    { label: "Contract Composition and Entire Agreement", opacity: 1 },
    { label: "Character License Scope", opacity: 0.8 },
    { label: "Implementation, Processing and Program Services", opacity: 0.6 },
    { label: "Implementation Plan", opacity: 0.4 },
    { label: "Event Tickets", opacity: 0.2 },
  ];

  return (
    <ConsolePanel
      title="Contract Review Terms"
      top={629}
      left={129}
      width={652}
    >
      <div className="flex w-full flex-col gap-[10px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex w-[600px] items-center justify-between rounded-lg bg-white/10 p-[13px]"
            style={{ opacity: row.opacity }}
          >
            <div className="flex items-center gap-[10px]">
              <ExpandIcon className="size-[21px] text-white" />
              <p className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white">
                {row.label}
              </p>
            </div>
            <div className="flex items-center gap-[10px] opacity-50">
              <SparkleIcon className="size-[21px] text-white" />
              <ExpandIcon className="size-[21px] text-white" />
              <svg
                viewBox="0 0 20.9095 20.9095"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.96027"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[21px] text-white"
              >
                <path d="M11.0114 18.9681C11.1678 18.8382 11.2738 18.6577 11.3112 18.4579C11.6116 16.6715 12.4614 15.0232 13.7423 13.7423C15.0232 12.4614 16.6715 11.6116 18.4579 11.3112C18.6577 11.2738 18.8382 11.1678 18.9681 11.0114C19.098 10.855 19.1691 10.6581 19.1691 10.4548C19.1691 10.2514 19.098 10.0545 18.9681 9.89812C18.8382 9.74172 18.6577 9.63567 18.4579 9.59834C16.6715 9.2979 15.0232 8.44812 13.7423 7.16722C12.4614 5.88632 11.6116 4.23802 11.3112 2.45164C11.2738 2.25178 11.1678 2.07127 11.0114 1.94138C10.855 1.81148 10.6581 1.74037 10.4548 1.74037C10.2514 1.74037 10.0545 1.81148 9.89812 1.94138C9.74172 2.07127 9.63567 2.25178 9.59834 2.45164C9.2979 4.23802 8.44812 5.88632 7.16722 7.16722C5.88632 8.44812 4.23802 9.2979 2.45164 9.59834C2.25178 9.63567 2.07127 9.74172 1.94138 9.89812C1.81148 10.0545 1.74037 10.2514 1.74037 10.4548C1.74037 10.6581 1.81148 10.855 1.94138 11.0114C2.07127 11.1678 2.25178 11.2738 2.45164 11.3112C4.23802 11.6116 5.88632 12.4614 7.16722 13.7423C8.44812 15.0232 9.2979 16.6715 9.59834 18.4579C9.63567 18.6577 9.74172 18.8382 9.89812 18.9681C10.0545 19.098 10.2514 19.1691 10.4548 19.1691C10.6581 19.1691 10.855 19.098 11.0114 18.9681Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </ConsolePanel>
  );
}

function YourDocuments() {
  const rows = [
    { label: "Business Combinations Goodwill Intangibles", opacity: 1 },
    { label: "Contract Costs", opacity: 0.8 },
    { label: "Credit Losses", opacity: 0.6 },
    { label: "Income Statement Expense Disaggregation", opacity: 0.4 },
    { label: "Leases", opacity: 0.2 },
  ];

  return (
    <ConsolePanel
      title="Your Documents"
      top={190}
      left={130}
      width={652}
      height={378}
    >
      <div className="flex w-full flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex w-[600px] items-center gap-[13px] border-t border-white/15 py-[16px]"
            style={{ opacity: row.opacity }}
          >
            <SearchIcon className="size-[18px] shrink-0 text-white" />
            <p className="flex-1 font-sans text-[16px] leading-none font-semibold whitespace-nowrap text-white">
              {row.label}
            </p>
            <p className="font-sans text-[16px] leading-none font-medium whitespace-nowrap text-white/60">
              Q4 2025
            </p>
          </div>
        ))}
      </div>
    </ConsolePanel>
  );
}

function DecisionNode({
  label,
  body,
  top,
  left,
  width,
  height,
  variant,
}: {
  label: string;
  body: React.ReactNode;
  top: number;
  left: number;
  width: number;
  height: number;
  variant: "blue" | "gray";
}) {
  const isBlue = variant === "blue";
  return (
    <div
      className={`absolute overflow-hidden rounded-[10px] border ${isBlue ? "border-[#9cbcff]" : "border-[#888]"}`}
      style={{ top, left, width, height }}
    >
      <div
        className={`absolute inset-x-0 top-0 flex h-[29px] items-center px-[11px] ${isBlue ? "bg-[#9cbcff]" : "bg-[#888]"}`}
      >
        <p
          className={`font-sans text-[16px] leading-none font-semibold whitespace-nowrap ${isBlue ? "text-black" : "text-white"}`}
        >
          {label}
        </p>
      </div>
      <div
        className={`absolute top-[37px] left-[9px] font-sans text-[13px] leading-[18px] font-medium ${isBlue ? "text-[#9cbcff]" : "text-[#888]"}`}
        style={{ width: width - 26 }}
      >
        {body}
      </div>
    </div>
  );
}

function DecisionTreeMemo() {
  return (
    <ConsolePanel
      title="Decision Tree & Memo"
      top={259}
      left={1357}
      width={849}
      height={633}
    >
      <div className="relative h-[511px] w-[754px] rounded-[10px] border border-dashed border-[#9cbcff] bg-[#9cbcff]/10">
        <p className="absolute top-[20px] left-[20px] font-sans text-[13px] leading-none font-medium whitespace-nowrap text-[#9cbcff]">
          Primary Scope Assessment
        </p>

        <DecisionNode
          variant="blue"
          label="Control"
          top={41}
          left={376}
          width={314}
          height={89}
          body="Has the Acquiror  acquired control of another entity or set of assets?"
        />

        <DecisionNode
          variant="gray"
          label="Control"
          top={216}
          left={30}
          width={289}
          height={89}
          body="Has the Acquiror  acquired control of another entity or set of assets?"
        />

        <DecisionNode
          variant="blue"
          label="Transaction Type"
          top={216}
          left={376}
          width={314}
          height={256}
          body={
            <>
              <p className="mb-0 leading-[18px]">
                Do any of the following apply for BuyerCo–SellerCo Asset
                Acquisition?
              </p>
              <ol className="list-decimal">
                {[
                  "The transaction is a formation of a joint venture.",
                  "The transaction is between entities under common control?",
                  "The Acquiree is a not-for-profit entity with special circumstances?",
                  "The transaction is solely the acquisition of financial assets/liabilities of a collateralized financing entity (CFE)?",
                ].map((item) => (
                  <li key={item} className="mb-0 ms-[20px] leading-[18px]">
                    {item}
                  </li>
                ))}
              </ol>
            </>
          }
        />

        {/* Connector: Control (top) -> No -> Control (bottom-left) */}
        <svg
          className="absolute"
          style={{ top: 130, left: 175, width: 357, height: 47 }}
          viewBox="0 0 357.324 46.984"
          fill="none"
        >
          <path
            d="M356 1H175M175 1L175 46M175 46H2"
            stroke="#888888"
            strokeWidth="1.3"
          />
        </svg>
        <div className="absolute top-[153px] left-[333px] flex items-center rounded-full border border-[#888] bg-[#40434a] px-[10px] py-2">
          <span className="font-sans text-[13px] leading-none font-medium whitespace-nowrap text-zinc-400">
            No
          </span>
        </div>

        {/* Connector: Control (top) -> Yes -> Transaction Type */}
        <svg
          className="absolute"
          style={{ top: 130, left: 533, width: 1, height: 86 }}
          viewBox="0 0 2 86.252"
          fill="none"
        >
          <path d="M1 0V86" stroke="#9cbcff" strokeWidth="1.3" />
        </svg>
        <div className="absolute top-[153px] left-[511px] flex items-center rounded-full bg-[#9cbcff] px-[10px] py-2">
          <span className="font-sans text-[13px] leading-none font-medium whitespace-nowrap text-neutral-800">
            Yes
          </span>
        </div>
      </div>
    </ConsolePanel>
  );
}

export function HeroBottomComposition({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{
        aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`,
        containerType: "inline-size",
      }}
      aria-hidden
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transform: `scale(calc(100cqw / ${CANVAS_WIDTH}))`,
        }}
      >
        <DocumentEditor />
        <YourDocuments />
        <ContractReviewTerms />
        <DecisionTreeMemo />
      </div>
    </div>
  );
}
