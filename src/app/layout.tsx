import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
    title: {
    default: "Business Link LLC | Master Distributor & Exporter",
    template: "%s | Business Link LLC",
  },
  description:
    "Business Link LLC is a master distributor and exporter of food and beverage products, with our own Fresh Elements line, serving manufacturers, brands and buyers worldwide.",
  openGraph: {
    title: "Business Link LLC",
    description:
      "Master distributor and exporter of food & beverage products. Own brand: Fresh Elements.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
