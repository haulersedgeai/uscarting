import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Residential Hauling — Dumpsters & Junk Removal for Homeowners",
  description:
    "Same-day junk removal, basement-to-attic clean-outs, and roll-off dumpsters for homeowners across CT and Westchester.",
};

const RESIDENTIAL_SLUGS = [
  "roll-off-dumpster-rental",
  "junk-removal",
  "residential-cleanouts",
  "estate-cleanouts",
  "appliance-removal",
  "mattress-removal",
  "furniture-removal",
  "garage-cleanout",
  "basement-cleanout",
  "attic-cleanout",
  "yard-waste-removal",
  "hot-tub-removal",
  "shed-demolition",
  "e-waste-recycling",
  "grizzly-bags",
];

export default function ResidentialPage() {
  const services = SERVICES.filter((s) => RESIDENTIAL_SLUGS.includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="For homeowners, renters, and the in-between."
        description="Moving, downsizing, renovating, or just clearing out — we run the truck and the crew so you don't lift a thing."
      />

      <Section>
        <SectionHeader eyebrow="What we do at home" title="Same-day service across CT & NY." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--color-steel)] line-clamp-3">{s.intro}</p>
              <div className="mt-4 text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
