import Image from "next/image";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FadeIn } from "@/components/ui/FadeIn";
import bg from "@/public/case-studies/bg.png";
import logoTyler from "@/public/case-studies/logo-tyler.png";
import logoSoaprojects from "@/public/case-studies/logo-soaprojects.png";
import clientSean from "@/public/case-studies/client-sean.png";
import clientJoe from "@/public/case-studies/client-joe.png";

// section_case-studies — contained section, background photo + two-card
// row that switches to horizontal scroll (fixed-width, reversed order) on
// mobile. Figma: node 78:6737 (Case Studies Block), breakpoints
// 78:6798/81:7133/81:7162.

const tylerCard = {
  logo: logoTyler,
  logoAlt: "Tyler Technologies",
  headline:
    "How Tyler Technologies is setting a new standard for speed and accuracy in technical accounting",
  clientPhoto: clientSean,
  clientName: "Sean Arends",
  clientRole: "Director, Technical Accounting",
};

const soaprojectsCard = {
  logo: logoSoaprojects,
  logoAlt: "SOAProjects",
  headline:
    "SOAProjects is combining deep technical accounting expertise with AI to deliver a new level of insight and efficiency",
  clientPhoto: clientJoe,
  clientName: "Joe Talley",
  clientRole: "Partner, SOAProjects",
};

export function CaseStudies() {
  return (
    <section
      data-figma-node="78:6737"
      className="px-margin-x tablet:pt-80 tablet:pb-24 desktop:pt-96 desktop:pb-36 relative flex w-full flex-col items-center overflow-hidden bg-[#020203] pt-40 pb-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={bg}
          alt=""
          fill
          className="tablet:opacity-80 desktop:opacity-80 object-cover opacity-50"
          sizes="100vw"
        />
      </div>

      <div className="max-w-section-max-w relative flex w-full flex-col items-start gap-10">
        <FadeIn
          index={0}
          className="flex w-full max-w-[382px] flex-col items-start gap-4"
        >
          <p className="font-display-large tablet:text-[32px] desktop:text-[36px] w-full text-[28px] leading-[1.2] font-semibold text-white">
            Case Studies
          </p>
          <p className="text-muted-foreground w-full text-base leading-[1.33] font-normal">
            See how leading firms are using Praxi to move faster without cutting
            corners.
          </p>
        </FadeIn>

        {/* Desktop/Tablet: equal-width cards side by side */}
        <div className="tablet:flex hidden w-full gap-6">
          <FadeIn index={1} className="flex-1">
            <CaseStudyCard {...tylerCard} />
          </FadeIn>
          <FadeIn index={2} className="flex-1">
            <CaseStudyCard {...soaprojectsCard} />
          </FadeIn>
        </div>

        {/* Mobile: fixed-width cards, horizontal scroll, reversed order */}
        <div className="-mx-margin-x px-margin-x tablet:hidden flex w-[calc(100%+2*20px)] gap-4 overflow-x-auto">
          <FadeIn index={1}>
            <CaseStudyCard {...soaprojectsCard} fixedWidth />
          </FadeIn>
          <FadeIn index={2}>
            <CaseStudyCard {...tylerCard} fixedWidth />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
