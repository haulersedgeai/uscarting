import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SITE } from "@/lib/site";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GSC_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

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
  verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
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
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
