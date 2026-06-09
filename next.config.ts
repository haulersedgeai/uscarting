import type { NextConfig } from "next";

// 301 redirect map from legacy Wix uscarting.com URLs to new site equivalents.
// Source: old site nav (Wayback snapshot 2025-04-10) — flat 10-page Wix structure.
// /locations and / are unchanged on the new site so no redirect entry is needed.
const LEGACY_REDIRECTS = [
  { source: "/about-2", destination: "/about" },
  { source: "/contact-7", destination: "/contact" },
  { source: "/services-1", destination: "/services" },
  { source: "/dumpster-rental", destination: "/dumpster-sizes" },
  { source: "/junk-removal", destination: "/services/junk-removal" },
  { source: "/grizzly-bags", destination: "/carting-bag" },
  { source: "/services/grizzly-bags", destination: "/carting-bag" },
  { source: "/services/carting-bag", destination: "/carting-bag" },
  { source: "/instant-dumpster-quote", destination: "/get-a-quote?kind=dumpster" },
  { source: "/junk-quote", destination: "/get-a-quote?kind=junk" },
] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "irp.cdn-website.com" },
      { protocol: "https", hostname: "lirp.cdn-website.com" },
    ],
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
