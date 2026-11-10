import { Archivo, Geist_Mono } from "next/font/google";

// Loaded per section rather than in the root layout, so the rest of the site keeps its own type.
// Apply `.variable` on the element that uses `.hero-display` / `.hero-tag`.

/** Condensed display face for the home hero and the footer. */
export const archivo = Archivo({
  variable: "--font-archivo",
  axes: ["wdth"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Small uppercase labels in the home hero and the footer. */
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
