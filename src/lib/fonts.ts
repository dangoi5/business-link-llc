import { Archivo } from "next/font/google";

/** Condensed display face for the home hero and the footer email; apply `archivo.variable` where used. */
export const archivo = Archivo({
  variable: "--font-archivo",
  axes: ["wdth"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
