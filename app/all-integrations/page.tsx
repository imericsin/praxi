import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// page_all-integrations — content/copy sourced from the live production
// site (https://www.praxi.io/all-integrations). No dedicated Figma frame
// or logo assets exist for this page's integration grid, so each
// integration renders as a plain text card (name only, no logo mark) --
// flagged as unmapped per the translation framework rather than
// substituting placeholder logo images.

export const metadata: Metadata = {
  title: "All Integrations — Praxi",
  description: "Seamlessly plugs into your tech stack.",
};

const integrations = [
  "OneDrive",
  "Outlook",
  "SharePoint",
  "Ironclad",
  "Docusign",
  "CobbleStone",
  "Salesforce",
  "HubSpot",
  "Workiva",
  "NetSuite",
  "SAP",
  "Workday",
  "Coupa",
  "Snowflake",
  "Google Drive",
  "Gmail",
  "Claude",
  "Copilot",
  "ChatGPT",
];

export default function AllIntegrationsPage() {
  return (
    <main className="flex-1">
      <section className="px-margin-x tablet:pt-40 desktop:pt-48 relative flex w-full flex-col items-center bg-[#0c0a09] pt-32 pb-24">
        <div className="max-w-section-max-w flex w-full flex-col items-start gap-16">
          <FadeIn
            index={0}
            className="flex w-full max-w-[600px] flex-col items-start gap-4"
          >
            <p className="font-sans text-sm leading-none font-medium text-white/60">
              All Integrations
            </p>
            <h1 className="font-display-large tablet:text-[44px] desktop:text-[52px] w-full text-[32px] leading-[1.15] font-semibold text-balance text-white">
              Seamlessly plugs into your tech stack
            </h1>
          </FadeIn>

          <div className="tablet:grid-cols-3 desktop:grid-cols-4 grid w-full grid-cols-2 gap-4">
            {integrations.map((name, i) => (
              <FadeIn key={name} index={i + 1}>
                <div className="flex h-20 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-center font-sans text-sm font-medium text-white">
                  {name}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn
            index={integrations.length + 1}
            className="flex w-full flex-col items-start gap-4"
          >
            <p className="font-sans text-lg leading-6 font-semibold text-white">
              See how Praxi works with your existing tools
            </p>
            <Button href="/#schedule-demo">Schedule Demo →</Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
