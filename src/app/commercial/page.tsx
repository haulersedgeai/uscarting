import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Truck, Briefcase, Building2, Home } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { COMMERCIAL } from "@/content/commercial";

export const metadata: Metadata = {
  title: "Commercial Hauling — Contractors, Property Managers & More",
  description:
    "Net-30 billing, COIs on file, pre-scheduled service windows. We work with contractors, property managers, real estate agents, and businesses across CT & NY.",
};

const ICONS: Record<string, React.ReactNode> = {
  "contractor-job-sites": <Truck size={28} />,
  "property-management": <Building size={28} />,
  "office-suites": <Briefcase size={28} />,
  "retail-and-restaurant": <Building2 size={28} />,
  "real-estate-agents": <Home size={28} />,
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Built for the people who need it to just work."
        description="Property managers, contractors, brokers, retailers, and restaurants — we operate on your timeline. COIs on file, net-30 billing for repeat clients, early-morning and Saturday windows when the building requires it."
      />

      <Section>
        <SectionHeader eyebrow="Who we work with" title="Five commercial verticals. One operator." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMMERCIAL.map((c) => (
            <Link
              key={c.slug}
              href={`/commercial/${c.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <div className="size-12 rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center mb-4">
                {ICONS[c.slug] ?? <Building size={28} />}
              </div>
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed line-clamp-3">{c.intro}</p>
              <div className="mt-4 text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="What you get" title="The commercial difference." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "COI on file", body: "We email a Certificate of Insurance directly to your property manager." },
            { title: "Net-30 billing", body: "Repeat contractors and PMs get net-30 terms once we know each other." },
            { title: "Flexible windows", body: "Early-morning and Saturday scheduling when buildings require it." },
            { title: "Bulk pricing", body: "Volume discounts across portfolios and multi-can projects." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 border border-[var(--color-line)]">
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Need a commercial quote?"
        description="Call us or send the details. We respond same-day on weekdays."
      />
          <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Commercial", path: "/commercial" },
        ]}
      />
    </>
  );
}
