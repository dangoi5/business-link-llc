/** Production origin. Used for metadataBase, the sitemap, robots.txt and JSON-LD. */
export const siteUrl = "https://www.businesslinkgroup.com";

/**
 * Pages that exist in every locale (without the locale prefix).
 * Dynamic routes (portfolio categories, Star Grocery families) are added in
 * app/sitemap.ts from their data files. Add a path here when you add a page.
 */
export const staticPaths = [
  "/",
  "/about",
  "/capabilities",
  "/portfolio",
  "/portfolio/fresh-elements",
  "/portfolio/star-grocery",
  "/portfolio/lasco",
  "/portfolio/akhan",
  "/portfolio/chupa-chups",
  "/portfolio/starkist",
  "/portfolio/ameriqual-military",
  "/products",
  "/markets",
  "/contact",
  "/privacy",
  "/terms",
] as const;

/**
 * Catalog PDFs → the page that presents the same products.
 * Sent as a `Link: rel="canonical"` header (next.config.ts) so links people
 * make to a PDF count toward the page instead of the file.
 */
export const catalogCanonicals: Record<string, string> = {
  "star-grocery-2026.pdf": "/en/portfolio/star-grocery",
  "star-grocery-snacks-flint-hroom.pdf": "/en/portfolio/star-grocery/flint-hroom-snacks",
  "quinoa-club-portfolio-en.pdf": "/en/portfolio",
  "quinoa-club-portfolio-es.pdf": "/es/portfolio",
  "food-life-balanced-2026.pdf": "/en/portfolio",
  "tronix-product-catalog-2026.pdf": "/en/portfolio",
};
