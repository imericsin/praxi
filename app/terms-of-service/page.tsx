import type { Metadata } from "next";
import { LegalDocument } from "@/components/modules/LegalDocument";
import { FadeIn } from "@/components/ui/FadeIn";

// page_terms-of-service — content/copy sourced from the live production
// site (https://www.praxi.io/terms-of-service). Hero band matches the
// About Us page's pattern exactly (eyebrow label + h1 on a black
// section) per explicit request; body copy uses the LegalDocument
// module (see privacy-policy/page.tsx, same pattern).

export const metadata: Metadata = {
  title: "Terms of Service — Praxi",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex-1">
      <section className="px-margin-x tablet:pt-40 desktop:pt-48 relative flex w-full flex-col items-center bg-[#0c0a09] pt-32 pb-16">
        <FadeIn
          index={0}
          className="max-w-section-max-w flex w-full flex-col items-start gap-4"
        >
          <p className="font-sans text-sm leading-none font-medium text-white/60">
            Legal
          </p>
          <h1 className="font-display-large tablet:text-[44px] desktop:text-[52px] w-full max-w-[792px] text-[32px] leading-[1.15] font-semibold text-balance text-white">
            Terms of Service
          </h1>
        </FadeIn>
      </section>

      <LegalDocument
        lastUpdated="April 8, 2026"
        intro={
          'These Terms of Service ("Agreement") governs the relationship between Praxi and the entity identified as the customer in an applicable Order Form ("Customer"). This Agreement is incorporated by reference into, and forms part of, each Order Form entered into between Praxi and Customer that references this Agreement. The "Effective Date" of this Agreement is the effective date specified in the first applicable Order Form, or, if no such date is specified, the date on which the applicable Order Form is executed. In the event of a conflict between this Agreement and an Order Form, the Order Form will control solely with respect to the subject matter of such conflict.'
        }
        sections={[
          {
            heading: "1. Definitions",
            body: '"Affiliate" means any entity that directly or indirectly controls, is controlled by, or is under common control with a party.\n"Customer Data" means any data, content or information submitted to the Services by or on behalf of Customer.',
          },
          {
            heading: "2. Services and Support",
            body: 'Praxi will make the software-as-a-service offerings described in an applicable order form ("Order Form") available to Customer in accordance with this Agreement ("Services"), and each Order Form is incorporated into and governed by this Agreement. Customer\'s right to access and use the Services, including the applicable subscription term, service capacity and fees, is set forth exclusively in the applicable Order Form.\n\nThe Services may Process Customer Data, including documents, recordings, audio, video, screen shares, screenshots, and other materials submitted by or on behalf of Customer, and may generate Outputs such as documentation, summaries, analyses, diagrams, and recommendations derived from such materials.\n\nPraxi may update or modify the Services from time to time, provided such updates do not materially reduce the primary features of the Services described in Praxi\'s then-current documentation for the purchased product, excluding beta features, experimental functionality, or third-party integrations.',
          },
          {
            heading: "3. Fees",
            body: 'Customer will pay Praxi the fees described in the applicable Order Form ("Fees"). The Fees are calculated based on the service capacity specified in the Order Form ("Service Capacity"). Unused Service Capacity will not carry over into subsequent Subscription Terms. Excess usage above capacity will be invoiced at the rates in the Order Form, provided that unlimited subscriptions are not subject to overage charges during the Subscription Term. All Fees are quoted and payable in United States Dollars (USD). Any late payments will accrue interest at the lesser of: (i) 1% per month; or (ii) the maximum rate permitted by law. Praxi may suspend the Services for overdue fees after notice.\n\nFees are exclusive of all taxes, and Customer is responsible for all applicable taxes related to the Services, except for taxes based on Praxi\'s net income.',
          },
          {
            heading: "4. Term and Termination",
            body: "This Agreement remains in effect for the duration of all Subscription Terms under executed Order Forms. Each Order Form will automatically renew unless either party gives at least thirty (30) days' written notice of non-renewal.\n\nEither party may terminate this Agreement or an Order Form upon written notice if the other party: (i) materially breaches this Agreement and fails to cure such breach within thirty (30) days following written notice; or (ii) becomes subject to bankruptcy, insolvency, liquidation, or similar proceedings. If Customer terminates due to Praxi's uncured material breach, Praxi will refund any unused prepaid Fees for the terminated Order Form(s). Provisions that by their nature should survive will survive termination.",
          },
          {
            heading: "5. Confidentiality",
            body: 'Each party may receive non-public information from the other party that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information ("Confidential Information"). The receiving party will use Confidential Information solely to perform under this Agreement, protect it using reasonable care, and not disclose it except to its employees, contractors, and advisors who have a need to know and are bound by confidentiality obligations at least as protective as those herein. Each party retains ownership of its Confidential Information. Confidential Information does not include information that is publicly available, independently developed without use of the other party\'s Confidential Information, or lawfully received from a third party without restriction. A party may disclose Confidential Information to the extent required by law or court order.',
          },
          {
            heading: "6. Rights and Responsibilities",
            body: 'Customer will not: (i) reverse engineer, copy, modify, or create derivative works from the Services; (ii) use the Services except for internal business purposes; (iii) publish any benchmarks or performance tests of the Services; (iv) remove any proprietary notices; or (v) provide access to the Services except to its authorized users ("Users"), which may include Customer\'s and its Affiliates\' employees and contractors acting solely for Customer\'s internal business purposes, provided that Customer remains responsible for all acts and omissions of its Users under the Agreement. Customer and its Users will comply with applicable law and this Agreement and will not use the Services to transmit unlawful or infringing material.\n\nDuring the Subscription Term, Customer may export Customer Data using the Services\' standard functionality.\n\nPraxi retains all right, title, and interest in the Services and all related improvements and technology. Any feedback provided by Customer may be used by Praxi without restriction.',
          },
          {
            heading: "7. Warranty and Disclaimer",
            body: 'Each party represents that it has the power and authority to enter into and perform under this Agreement.\n\nPraxi warrants that the Services will operate substantially in accordance with its documentation during the applicable Subscription Term. The Services may be temporarily unavailable for maintenance or due to causes beyond Praxi\'s reasonable control. Customer\'s sole and exclusive remedy for breach of this warranty is repair, replacement, or termination with a prorated refund as expressly provided in this Agreement. The Services are provided as a configurable software tool and do not provide legal, tax, accounting, or other professional advice. Customer is solely responsible for its use of the Services and for any decisions, actions, or conclusions drawn from Customer Data or outputs generated through the Services. EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, THE SERVICES ARE PROVIDED "AS IS," AND Praxi DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
          },
          {
            heading: "8. Indemnity",
            body: "Praxi will defend and indemnify Customer against any third-party claim alleging that the Services, as provided by Praxi and used in accordance with this Agreement, infringe any U.S. intellectual property rights. Praxi will have no obligation to the extent a claim arises from: (i) Customer Data; (ii) use of the Services in violation of this Agreement or applicable law; (iii) modification of the Services; or (iv) use of the Services in combination with products, services or data not provided by Praxi. If the Services become, or in Praxi's reasonable opinion are likely to become, the subject of an infringement claim, Praxi may modify or replace the Services to make them non-infringing, or terminate the affected Services and refund any unused prepaid Fees.\n\nCustomer will defend and indemnify Praxi against any third-party claim arising from Customer Data or Customer's use of the Services in violation of this Agreement or applicable law.\n\nThe indemnified party will promptly notify the indemnifying party of any claim and reasonably cooperate in the defense. The indemnifying party will control the defense and settlement of the claim, provided that it may not settle any claim in a manner that imposes liability or obligations on the indemnified party without its prior written consent. This section states the parties' exclusive remedies for the indemnified claims.",
          },
          {
            heading: "9. Limitation of Liability",
            body: "EXCEPT FOR FRAUD, GROSS NEGLIGENCE OR WILLFUL MISCONDUCT, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR LOSS OF PROFITS OR DATA DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. EACH PARTY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED THE FEES PAID BY CUSTOMER TO Praxi IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
          },
          {
            heading: "10. Miscellaneous",
            body: "The parties are independent contractors, and nothing in this Agreement creates any agency, partnership, joint venture, employment, or fiduciary relationship between the parties. Neither party has authority to bind the other.\n\nThis Agreement, together with all Order Forms, constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior or contemporaneous agreements, proposals, or communications, whether written or oral. In the event of any conflict, the applicable Order Form will control, followed by this Agreement. Any amendment or waiver must be in a writing signed by both parties. No terms contained in any Customer purchase order or similar document will apply.\n\nIf any provision of this Agreement is held unenforceable, such provision will be enforced to the maximum extent permitted by law, and the remaining provisions will remain in full force and effect. A failure to enforce any provision will not constitute a waiver of future enforcement of that or any other provision.\n\nNeither party may assign this Agreement without the other party's prior written consent, except to an affiliate or in connection with a merger, acquisition, or sale of substantially all of its assets, in which case no consent is required. Praxi may use subcontractors, including outside the United States, to provide the Services and will remain responsible for their performance.\n\nNeither party will be liable for any failure or delay in performance (other than payment obligations) to the extent caused by events beyond its reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, government action, or failures of utilities or networks (\"Force Majeure Events\").\n\nNotices under this Agreement will be provided by email to the addresses specified by the parties and will be deemed given when sent.\n\nPraxi may identify Customer as a customer of Praxi using Customer's name and logo, subject to Customer's trademark usage guidelines.\n\nThis Agreement is governed by the laws of the State of California, without regard to conflict of law principles. Any dispute arising out of or relating to this Agreement will be brought exclusively in the state or federal courts located in California, and each party consents to their jurisdiction. Each party waives the right to a jury trial. The prevailing party may recover its reasonable attorneys' fees and costs.",
          },
        ]}
      />
    </main>
  );
}
