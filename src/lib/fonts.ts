import { Archivo, Geist, Geist_Mono } from "next/font/google";

/**
 * The site's three type families, loaded once in the root layout:
 * Archivo (condensed) for headlines, Geist for reading text, Geist Mono for small labels.
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
