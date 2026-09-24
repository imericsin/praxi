import Image, { type StaticImageData } from "next/image";

// Figma component instance "CaseStudyCard" (e.g. node 79:6991) — a true
// reusable UI primitive per the figma-translation-framework skill.
export interface CaseStudyCardProps {
  logo: StaticImageData;
  logoAlt: string;
  headline: string;
  clientPhoto: StaticImageData;
  clientName: string;
  clientRole: string;
  /** Fixed width on mobile for the horizontal-scroll card row. */
  fixedWidth?: boolean;
}

export function CaseStudyCard({
  logo,
  logoAlt,
  headline,
  clientPhoto,
  clientName,
  clientRole,
  fixedWidth = false,
}: CaseStudyCardProps) {
  return (
    <div
      className={`flex h-[320px] flex-col items-start justify-between bg-white/5 px-4 pt-4 pb-6 backdrop-blur-xl ${
        fixedWidth ? "w-[300px] shrink-0" : "w-full flex-1"
      }`}
    >
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start gap-8">
          <div className="relative h-8 w-32 shrink-0 opacity-50">
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </div>
          <p className="font-display-small w-full text-xl leading-[1.2] font-semibold text-white">
            {headline}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center gap-4">
        <div className="relative size-12 shrink-0 rounded-full">
          <Image
            src={clientPhoto}
            alt=""
            fill
            className="rounded-full object-cover"
            sizes="48px"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 whitespace-nowrap">
          <p className="font-sans text-base leading-none font-medium text-white">
            {clientName}
          </p>
          <p className="font-sans text-sm leading-5 font-medium text-stone-400">
            {clientRole}
          </p>
        </div>
      </div>
    </div>
  );
}
