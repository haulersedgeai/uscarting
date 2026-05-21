import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES, SERVICE_CATEGORIES } from "@/content/services";

export const metadata: Metadata = {
  title: "All Services — Dumpsters, Junk Removal, Clean-Outs & Demo",
  description:
    "Roll-off dumpster rentals, full-service junk removal, residential clean-outs, light demolition, e-waste recycling and more. The full U.S. Carting service list.",
};

export default function ServicesPage() {
  const categories = Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every service. One phone call."
        description="From a single mattress to a whole-house clean-out, from a 10-yard can to a 40-yard contractor pull — we run all of it under one roof."
      />

      {categories.map((cat) => {
        const items = SERVICES.filter((s) => s.category === cat);
        if (items.length === 0) return null;
        return (
          <Section key={cat} bg={cat === "junk" || cat === "demolition" ? "soft" : "default"}>
            <SectionHeader eyebrow={cat.replace("_", " ")} title={SERVICE_CATEGORIES[cat]} />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--color-steel)] leading-relaxed line-clamp-3">{s.intro}</p>
                  <div className="mt-4 text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <CtaBanner />
    </>
  );
}
