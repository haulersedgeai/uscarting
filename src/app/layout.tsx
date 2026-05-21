import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "U.S. Carting — Dumpster Rentals & Junk Removal in CT & Westchester",
    template: "%s | U.S. Carting",
  },
  description:
    "Same-day roll-off dumpster rentals and full-service junk removal across Fairfield County, Westchester County and beyond. Family owned. Licensed & insured. Since 2014.",
  openGraph: {
    title: "U.S. Carting — Dumpster Rentals & Junk Removal",
    description:
      "Same-day roll-off dumpsters and full-service junk removal across CT & NY.",
    url: SITE.url,
    siteName: SITE.legalName,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
