import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { archivo, geist, geistMono } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a1630",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${archivo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
