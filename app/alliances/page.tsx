import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

// page_alliances — content/copy sourced from the live production site
// (https://www.praxi.io/alliances, titled "Partner" there), restyled to
// match this project's dark design system. The live page is a contact
// form (name/email/phone/company/message); no dedicated Figma frame
// exists for this page or a form component, so field styling below is
// read directly off this project's existing dark-input conventions
// (bg-white/5, border-white/10) rather than a Figma source -- flagged as
// unmapped/best-practice per the translation framework, since there's no
// token or component to resolve it against.

export const metadata: Metadata = {
  title: "Strategic Alliances — Praxi",
  description: "Praxi helps accounting firms provide maximum value to their clients.",
};

const fields: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}[] = [
  { name: "name", label: "Name", placeholder: "First & Last", type: "text" },
  {
    name: "email",
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "(123) 456 - 7890",
    type: "tel",
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Company Name",
    type: "text",
  },
];

export default function AlliancesPage() {
  return (
    <main className="flex-1">
      <section className="px-margin-x tablet:pt-40 desktop:pt-48 relative flex w-full flex-col items-center bg-[#0c0a09] pt-32 pb-20">
        <div className="max-w-section-max-w flex w-full flex-col items-center gap-16">
          <FadeIn
            index={0}
            className="flex w-full max-w-[600px] flex-col items-center gap-4 text-center"
          >
            <h1 className="font-display-large tablet:text-[44px] desktop:text-[52px] w-full text-[32px] leading-[1.15] font-semibold text-balance text-white">
              Strategic Alliances
            </h1>
            <p className="w-full text-base leading-6 font-medium text-white">
              Praxi helps accounting firms provide maximum value to their
              clients.
            </p>
            <p className="w-full text-base leading-6 font-normal text-white/60">
              Discover how partnership with Praxi can transform your
              practice.
            </p>
          </FadeIn>

          <FadeIn index={1} className="w-full max-w-[600px]">
            <form className="flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="tablet:grid-cols-2 grid w-full grid-cols-1 gap-6">
                {fields.map((field) => (
                  <label
                    key={field.name}
                    className="flex flex-col items-start gap-2"
                  >
                    <span className="font-sans text-sm leading-none font-semibold text-white">
                      {field.label}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full rounded-md border border-white/15 bg-transparent px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    />
                  </label>
                ))}
              </div>
              <label className="flex flex-col items-start gap-2">
                <span className="font-sans text-sm leading-none font-semibold text-white">
                  Leave us a message
                </span>
                <textarea
                  name="message"
                  placeholder="Please type your message here..."
                  rows={5}
                  className="w-full resize-none rounded-md border border-white/15 bg-transparent px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
              </label>
              <Button variant="standard" type="submit" className="w-fit">
                Send Message
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
