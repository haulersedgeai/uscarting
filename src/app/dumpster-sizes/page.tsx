import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";

export const metadata: Metadata = {
  title: "Dumpster Sizes — 10, 15, 20, 30 & 40 Yard Roll-Offs",
  description:
    "Our full lineup of roll-off dumpsters. Pick the right size for the project — every can includes weight allowance and a 7-day rental.",
};

export default function DumpsterSizesPage() {
  return (
    <>
      <PageHero
        eyebrow="Roll-off rentals"
        title="Pick the size. We deliver today."
        description="Four can sizes, each with weight included and a 7-day rental period. Bigger jobs? Bigger can. Tight driveways? Smaller can. We'll match the size to the job."
      />

      <Section>
        <div className="grid gap-10">
          {DUMPSTER_SIZES.map((d, i) => (
            <div
              key={d.slug}
              className={`grid gap-8 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="rounded-2xl bg-[var(--color-surface-2)] p-6 aspect-[4/3] flex items-center justify-center">
                <Image
                  src={d.image}
                  alt={`${d.size} dumpster`}
                  width={600}
                  height={450}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="uppercase tracking-[0.18em] text-xs font-bold mb-3 text-[var(--color-orange)]">
                  {d.cubicYards} cubic yards
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-ink)] tracking-tight mb-3">
                  {d.title}
                </h2>
                <p className="text-[var(--color-steel)] leading-relaxed">{d.intro}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Spec label="Weight included" value={d.weightLimit} />
                  <Spec label="Rental period" value={d.rentalPeriod} />
                  <Spec label="Dimensions" value={d.dimensions} />
                  <Spec label="Holds" value={d.whatFits[0]} />
                </div>
                <ul className="mt-6 space-y-2">
                  {d.bestFor.slice(0, 4).map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                      <Check size={16} className="text-[var(--color-orange)] mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href={`/dumpster-sizes/${d.slug}`} className="btn-secondary">
                    See {d.size} details <ArrowRight size={16} />
                  </Link>
                  <Link href="/get-a-quote?kind=dumpster" className="btn-primary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Not sure?"
          title="Tools to help you pick."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
          <Link href="/what-fits" className="rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all">
            <h3 className="font-bold text-lg mb-2 text-[var(--color-ink)]">What fits?</h3>
            <p className="text-sm text-[var(--color-steel)]">Visual comparison of all four can sizes.</p>
          </Link>
          <Link href="/accepted-materials" className="rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all">
            <h3 className="font-bold text-lg mb-2 text-[var(--color-ink)]">Accepted materials</h3>
            <p className="text-sm text-[var(--color-steel)]">What goes in the can.</p>
          </Link>
          <Link href="/prohibited-materials" className="rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all">
            <h3 className="font-bold text-lg mb-2 text-[var(--color-ink)]">Prohibited items</h3>
            <p className="text-sm text-[var(--color-steel)]">What can't go in (and why).</p>
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-[var(--color-steel-soft)] font-bold mb-1">{label}</div>
      <div className="text-sm font-semibold text-[var(--color-ink)]">{value}</div>
    </div>
  );
}
