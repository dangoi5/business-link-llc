import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Business Link LLC | International Market Development",
    template: "%s | Business Link LLC",
  },
  description:
    "Business Link LLC develops international commercial opportunities for food and beverage manufacturers, brands, distributors and strategic partners worldwide.",
  openGraph: {
    title: "Business Link LLC",
    description:
      "Developing businesses. Building markets. Connecting the world through international food and beverage trade.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
