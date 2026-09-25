import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
