import type { Metadata } from "next";
import { HeadlineSingleColumn } from "@/components/modules/HeadlineSingleColumn";

// page_terms-of-service — linked from the Footer's legal row. No
// corresponding page was provided among the reference URLs for this
// build pass, so this is a minimal placeholder (not sourced from the live
// site) rather than a 404 -- flagged as a follow-up: replace with real
// legal copy once it's available.

export const metadata: Metadata = {
  title: "Terms of Service — Praxi",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex-1">
      <HeadlineSingleColumn
        headline="Terms of Service"
        subhead="Coming soon"
        paragraph="Praxi's full terms of service are being finalized. In the meantime, reach out to support@praxi.io with any questions."
      />
    </main>
  );
}
