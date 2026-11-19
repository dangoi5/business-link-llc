import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { portfolioCategories } from "@/lib/content";
import { siteUrl, staticPaths } from "@/lib/site";
import { starGroceryFamilies } from "@/lib/star-grocery-catalog";

function localizedUrl(locale: string, path: string) {
  return `${siteUrl}/${locale}${path === "/" ? "" : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: string[] = [
    ...staticPaths,
    ...portfolioCategories.map((category) => `/portfolio/${category.slug}`),
    ...starGroceryFamilies.map((family) => `/portfolio/star-grocery/${family.slug}`),
  ];

  return paths.flatMap((path) => {
    const languages = {
      ...Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, path)])),
      "x-default": localizedUrl("en", path),
    };
    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
      alternates: { languages },
    }));
  });
}
