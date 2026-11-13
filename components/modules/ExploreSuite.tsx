import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Product } from "@/lib/products";

// module_explore-suite -- "Explore the suite" cross-link tiles to the other
// products. Figma: "Explore the suite" (Appraiser 2046:858, Scribe 2047:2114,
// Curator 2047:1207) in the "Version 2" section, desktop frame only.
//
// Desktop spec: 44px display heading, 48px gap, then tiles stacked 72px
// apart. Each tile hugs 1088px of the 1200 content width: 560x299 visual
// (radius 16) + 48px gap + 480px text column whose copy sits at the top and
// the "Explore X →" link at the bottom. The tile visual is the product's hero
// image cropped to the tile (the Figma tile is a scaled re-render of the same
// composition). Below desktop each tile stacks, visual first.

interface ExploreSuiteProps {
  products: Product[];
}

export function ExploreSuite({ products }: ExploreSuiteProps) {
  return (
    <section
      data-figma-node="2046:858"
      className="bg-background-3 px-margin-x tablet:py-14 desktop:py-[72px] flex w-full flex-col items-center py-10"
    >
      <div className="max-w-section-max-w tablet:gap-10 desktop:gap-12 flex w-full flex-col gap-8">
        <FadeIn index={0}>
          <h2 className="font-display-large tablet:text-[36px] desktop:text-[44px] text-foreground-1 text-[28px] leading-[1.02] font-semibold">
            Explore the suite
          </h2>
        </FadeIn>
        <div className="tablet:gap-14 desktop:gap-[72px] flex w-full flex-col gap-10">
          {products.map((product, i) => (
            <FadeIn key={product.slug} index={i + 1} className="w-full">
              <div className="desktop:max-w-[1088px] desktop:flex-row desktop:gap-12 flex w-full flex-col gap-6">
                <Link
                  href={product.href}
                  tabIndex={-1}
                  aria-hidden
                  className="desktop:w-[560px] desktop:shrink-0 relative block aspect-[560/299] w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={product.heroImage}
                    alt=""
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 1240px) 560px, (min-width: 1024px) 46vw, calc(100vw - 40px)"
                  />
                </Link>
                <div className="desktop:min-h-[299px] desktop:justify-between flex min-w-0 flex-1 flex-col items-start gap-9">
                  <div className="flex w-full flex-col items-start gap-4">
                    <h3 className="font-display-large text-foreground-1 w-full text-[28px] leading-[1.2] font-semibold text-balance">
                      {product.headline}
                    </h3>
                    <p className="text-foreground-2 w-full text-base leading-6 font-normal">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={product.href}
                    className="text-foreground-1 text-base leading-6 font-medium"
                  >
                    Explore {product.name} →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
