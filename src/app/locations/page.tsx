import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { LOCATIONS, COUNTIES } from "@/content/locations";

export const metadata: Metadata = {
  title: "Service Areas — CT & Westchester | U.S. Carting",
  description:
    "Roll-off dumpsters and full-service junk removal across Fairfield, New Haven, Hartford, Middlesex, Litchfield, New London (CT) and Westchester (NY) Counties.",
};

export default function LocationsPage() {
  const byCounty = COUNTIES.map((c) => ({
    ...c,
    cities: LOCATIONS.filter((l) => l.county === c.name && l.state === c.state),
  })).filter((c) => c.cities.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={`Serving ${LOCATIONS.length}+ cities across CT & Westchester.`}
        description="Headquartered in Greenwich, CT. We run roll-offs and full-service crews across seven counties — including same-day service to most of Fairfield and Westchester."
      />

      {byCounty.map((c) => (
        <Section key={`${c.name}-${c.state}`} bg={c.state === "NY" ? "soft" : "default"}>
          <SectionHeader eyebrow={c.state} title={`${c.name}, ${c.state}`} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.cities.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-white p-5 hover:border-[var(--color-orange)] hover:shadow-sm transition-all"
              >
                <MapPin size={18} className="text-[var(--color-orange)] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <div className="font-bold text-[var(--color-ink)]">
                    {l.name}, {l.state}
                  </div>
                  <div className="text-xs text-[var(--color-steel)] mt-0.5 line-clamp-2">
                    {l.neighborhoods.slice(0, 3).join(" · ")}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[var(--color-steel-soft)] group-hover:text-[var(--color-orange)] mt-0.5"
                />
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <CtaBanner />
    </>
  );
}
