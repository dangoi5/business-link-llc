import { Archivo, Fraunces, Geist, Geist_Mono } from "next/font/google";

/**
 * The site's type families, loaded once in the root layout:
 * Archivo (condensed) for headlines, Geist for reading text, Geist Mono for small labels,
 * and Fraunces (serif) for product names on catalog cards and in product details.
 */

export const archivo = Archivo({
  variable: "--font-archivo",
  axes: ["wdth"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
