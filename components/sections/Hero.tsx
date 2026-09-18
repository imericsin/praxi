import { Button } from "@/components/ui/Button";

// Placeholder hero section. Replace with real content once the Figma
// file is pulled in.
export function Hero() {
  return (
    <section className="w-full">
      <div className="tablet:px-6 desktop:px-8 tablet:py-24 mx-auto max-w-6xl px-4 py-16">
        <h1 className="tablet:text-4xl desktop:text-5xl text-3xl font-semibold">
          Praxi
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600">
          Placeholder hero copy — content coming from Figma.
        </p>
        <div className="mt-8">
          <Button>Get started</Button>
        </div>
      </div>
    </section>
  );
}
