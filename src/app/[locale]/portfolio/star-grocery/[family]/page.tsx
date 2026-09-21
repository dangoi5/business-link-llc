import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { TextLink } from "@/components/ui";
import { isLocale, localeAlternates, localizedHref, locales, type Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import { getStarGroceryFamily, starGroceryFamilies } from "@/lib/star-grocery-catalog";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    starGroceryFamilies.map((family) => ({ locale, family: family.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/star-grocery/[family]">): Promise<Metadata> {
  const { family: slug, locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const family = getStarGroceryFamily(slug);
  if (!family) return { title: t(locale, ui.starGrocery.metaTitle) };
  return {
    title: t(locale, family.name),
    description: t(locale, family.description),
    alternates: localeAlternates(`/portfolio/star-grocery/${family.slug}`),
  };
}

export default async function StarGroceryFamilyPage({
  params,
}: PageProps<"/[locale]/portfolio/star-grocery/[family]">) {
  const { family: slug, locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const family = getStarGroceryFamily(slug);
  if (!family) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28">
        <div className="absolute inset-0">
          <Image
            src={family.cover}
            alt={t(locale, family.name)}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
          <p className="eyebrow text-orange">
            <span>{family.brand}</span>
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t(locale, family.name)}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {t(locale, family.description)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <TextLink href={localizedHref(locale, "/portfolio/star-grocery")}>
          {t(locale, ui.starGrocery.backToFamilies)}
        </TextLink>

        {family.groups.map((group) => (
          <div key={group.id} className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              {family.groups.length > 1 ? t(locale, group.label) : t(locale, ui.starGrocery.flavors)}
            </h2>
            <ProductGrid products={group.products} locale={locale} />
          </div>
        ))}
      </section>
    </>
  );
}
