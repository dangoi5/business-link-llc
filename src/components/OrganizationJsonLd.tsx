import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { freshElementsBrand } from "@/lib/brands";
import { company } from "@/lib/content";
import { activeMarkets } from "@/lib/markets";
import { siteUrl } from "@/lib/site";

const orgId = `${siteUrl}/#organization`;

/**
 * Organization + WebSite structured data, rendered once per page from the
 * locale layout. Tells Google and AI search which company this site belongs
 * to, so mentions and links elsewhere are attributed to it.
 *
 * When the company has public profiles (LinkedIn, trade directories), add
 * their URLs to `sameAs` below.
 */
const sameAs: string[] = [];

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: company.name,
        alternateName: "Business Link",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/branding/square-logo-only-gears.png`,
          width: 937,
          height: 647,
        },
        image: `${siteUrl}/branding/gears-and-business-link-text-full.png`,
        description: t(locale, company.description),
        slogan: t(locale, company.tagline),
        email: company.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.email,
          url: `${siteUrl}/${locale}/contact`,
          availableLanguage: ["English", "Spanish", "Italian"],
        },
        areaServed: activeMarkets.map((market) => ({
          "@type": "Country",
          name: t("en", market.name),
        })),
        knowsAbout: [
          "Food export",
          "Master distribution",
          "International food distribution",
          "Market entry",
          "Food sourcing",
        ],
        brand: {
          "@type": "Brand",
          name: freshElementsBrand.name,
          url: `${siteUrl}/${locale}${freshElementsBrand.ctaHref}`,
          logo: freshElementsBrand.logo ? `${siteUrl}${freshElementsBrand.logo}` : undefined,
        },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        publisher: { "@id": orgId },
        inLanguage: ["en", "es", "it"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
