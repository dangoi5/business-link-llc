import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/ui";
import {
  activeMarkets,
  buyerServices,
  company,
  heroHighlights,
  images,
  manufacturerServices,
  portfolioCategories,
  processSteps,
  regionCards,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-ink">
        <Image
          src={images.hero}
          alt="Container ship at sea representing international trade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 md:justify-center md:px-8 md:pb-36">
          <SectionLabel light>Global food trade</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
            Developing Businesses.
            <br />
            Building Markets.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Your partner for international food & beverage market development—connecting
            manufacturers, brands and distributors across the Americas, Caribbean, Africa, Europe and
            Asia-Pacific.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/portfolio">Request portfolio</PrimaryButton>
            <SecondaryButton href="/contact" light>
              Let&apos;s work together
            </SecondaryButton>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">{activeMarkets.length}+</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                Active markets
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">{portfolioCategories.length}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                Product categories
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">5</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/70 uppercase">
                World regions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 px-5 md:-mt-16 md:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/10 md:grid-cols-3">
          {heroHighlights.map((item) => (
            <div key={item.title} className="border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8">
              <h3 className="text-base font-bold text-teal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              A commercial platform for international food supply.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">{company.description}</p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              We work with manufacturers, brands, distributors, importers and strategic partners that
              need reliable routes to market—coordinating products, commercial relationships and
              execution to turn opportunities into lasting business.
            </p>
            <div className="mt-8">
              <TextLink href="/capabilities">Learn more about our capabilities →</TextLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.about}
                alt="Warehouse logistics for food distribution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                label="Product portfolio"
                title="Categories prepared for retail, foodservice and trade."
                description="Our growing international food portfolio combines established manufacturers, selected brands and sourcing capabilities."
              />
              <TextLink href="/portfolio">Explore full portfolio →</TextLink>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 60}>
                <Link
                  href={`/portfolio#${category.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lg hover:shadow-ink/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-ink group-hover:text-teal">{category.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                      {category.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <Image src={images.markets} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              light
              label="Markets"
              title="Commercial connectivity across international markets."
              description="Business Link has developed a network of commercial relationships and strategic partners that can be activated according to each opportunity."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {regionCards.map((card) => (
              <Reveal key={card.region}>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <h3 className="font-bold text-white">{card.region}</h3>
                  <p className="mt-2 text-sm text-white/65">{card.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/markets" className="text-sm font-semibold text-orange hover:underline">
              View our market footprint →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            label="Your gateway to global growth"
            title="Services for manufacturers and buyers."
            description="From market entry to sourcing and logistics coordination, we support both exporters and importers with comprehensive trade services."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-8">
              <p className="text-sm font-bold text-orange">For manufacturers & brands</p>
              <h3 className="mt-2 text-2xl font-bold text-ink">Expand into new markets</h3>
              <ul className="mt-6 space-y-5">
                {manufacturerServices.map((service) => (
                  <li key={service.title}>
                    <p className="font-semibold text-ink">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{service.description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton href="/contact?audience=manufacturer">I am a manufacturer</PrimaryButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-line bg-teal p-8 text-white">
              <p className="text-sm font-bold text-orange">For buyers & distributors</p>
              <h3 className="mt-2 text-2xl font-bold">Source reliable supply</h3>
              <ul className="mt-6 space-y-5">
                {buyerServices.map((service) => (
                  <li key={service.title}>
                    <p className="font-semibold">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">{service.description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact?audience=buyer"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal transition hover:bg-white/90"
                >
                  I am a buyer
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              label="How we work"
              title="From opportunity to market"
              description="Business Link approaches each opportunity as a business to be developed—not simply a transaction."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div className="rounded-2xl bg-white p-5 border border-line">
                  <p className="text-xs font-bold text-orange">{step.step}</p>
                  <h3 className="mt-2 text-lg font-bold text-ink">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <SectionLabel light>Let&apos;s work together</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to develop the next opportunity?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Tell us about your product, market or sourcing requirement. We evaluate opportunities
              where our network and execution can create sustainable business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Get in touch</PrimaryButton>
            <SecondaryButton href="/partners" light>
              Our partners
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
