import type { Metadata } from "next";
import { HeadlineSingleColumn } from "@/components/modules/HeadlineSingleColumn";

// page_privacy-policy — linked from the Footer's legal row. No
// corresponding page was provided among the reference URLs for this
// build pass, so this is a minimal placeholder (not sourced from the live
// site) rather than a 404 -- flagged as a follow-up: replace with real
// legal copy once it's available.

export const metadata: Metadata = {
  title: "Privacy Policy — Praxi",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <HeadlineSingleColumn
        headline="Privacy Policy"
        subhead="Coming soon"
        paragraph="Praxi's full privacy policy is being finalized. In the meantime, reach out to support@praxi.io with any questions about how your data is handled."
      />
    </main>
  );
}
