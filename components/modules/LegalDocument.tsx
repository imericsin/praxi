import { FadeIn } from "@/components/ui/FadeIn";

// module_legal-document — long-form legal copy (Privacy Policy, Terms of
// Service): an intro paragraph followed by numbered sections, each with
// its own heading and body text. Not sourced from a Figma module -- no
// legal-document layout exists in the file -- styled to match this
// project's existing light-section convention (bg-background-1,
// foreground-1/2 text colors, same type scale as HeadlineSingleColumn/
// HeadlineTwoColumn) rather than a one-off treatment.

export interface LegalSection {
  heading: string;
  body: string;
}

interface LegalDocumentProps {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <section className="bg-background-1 px-margin-x tablet:pb-36 tablet:pt-28 desktop:pb-36 desktop:pt-28 flex w-full flex-col items-center pt-16 pb-16">
      <div className="max-w-section-max-w flex w-full flex-col items-start gap-10">
        <FadeIn index={0} className="flex w-full max-w-[792px] flex-col gap-4">
          <p className="text-foreground-2 w-full text-sm leading-5 font-medium">
            Praxi Software, Inc. — Last Updated: {lastUpdated}
          </p>
          <p className="text-foreground-2 w-full text-base leading-6 font-normal whitespace-pre-line">
            {intro}
          </p>
        </FadeIn>

        <div className="flex w-full max-w-[792px] flex-col items-start gap-8">
          {sections.map((section, i) => (
            <FadeIn
              key={section.heading}
              index={i + 1}
              className="flex w-full flex-col items-start gap-3"
            >
              <p className="text-foreground-1 w-full text-lg leading-6 font-semibold">
                {section.heading}
              </p>
              <p className="text-foreground-2 w-full text-base leading-6 font-normal whitespace-pre-line">
                {section.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
