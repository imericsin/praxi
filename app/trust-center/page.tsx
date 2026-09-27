import type { Metadata } from "next";
import { HeadlineSingleColumn } from "@/components/modules/HeadlineSingleColumn";

// page_trust-center — linked from the Footer's "Trust Center" menu item.
// No corresponding page was provided among the reference URLs for this
// build pass, so this is a minimal placeholder (not sourced from the live
// site) rather than a 404 -- flagged as a follow-up: replace with real
// content once it's available.

export const metadata: Metadata = {
  title: "Trust Center — Praxi",
};

export default function TrustCenterPage() {
  return (
    <main className="flex-1">
      <HeadlineSingleColumn
        headline="Trust Center"
        subhead="Security and compliance"
        paragraph="Details on Praxi's security practices and compliance certifications are coming soon. In the meantime, reach out to support@praxi.io with any questions."
      />
    </main>
  );
}
