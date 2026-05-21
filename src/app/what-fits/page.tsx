import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";

export const metadata: Metadata = {
  title: "What Fits — Dumpster Size Comparison",
  description:
    "Visual comparison of our 10, 15, 20, and 30/40-yard dumpsters. See what fits in each — pickup-truck loads, trash bags, and the projects each handles.",
};

export default function WhatFitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Size comparison"
        title="What fits in each can?"
        description="Visual side-by-side of our four roll-off sizes — so you can pick without guessing."
      />

      <Section>
        <div className="grid gap-6">
          {DUMPSTER_SIZES.map((d) => (
            <div
              key={d.slug}
              className="grid gap-6 lg:grid-cols-[280px_1fr] items-start rounded-2xl border border-[var(--color-line)] bg-white p-6"
            >
              <div className="rounded-xl bg-[var(--color-surface-2)] aspect-[4/3] overflow-hidden flex items-center justify-center">
                <Image
                  src={d.image}
                  alt={`${d.size} dumpster`}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-1">
                  {d.cubicYards} cubic yards
                </div>
                <h2 className="text-2xl font-extrabold text-[var(--color-ink)] mb-3">{d.title}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-bold text-[var(--color-ink)] mb-2">What fits</div>
                    <ul className="text-sm text-[var(--color-steel)] space-y-1.5">
                      {d.whatFits.map((w, i) => (
                        <li key={i}>· {w}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--color-ink)] mb-2">Best for</div>
                    <ul className="text-sm text-[var(--color-steel)] space-y-1.5">
                      {d.bestFor.slice(0, 4).map((b, i) => (
                        <li key={i}>· {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 grid gap-1 text-sm text-[var(--color-steel)]">
                  <div><strong className="text-[var(--color-ink)]">Dimensions:</strong> {d.dimensions}</div>
                  <div><strong className="text-[var(--color-ink)]">Weight:</strong> {d.weightLimit}</div>
                  <div><strong className="text-[var(--color-ink)]">Rental:</strong> {d.rentalPeriod}</div>
                </div>
                <Link
                  href={`/dumpster-sizes/${d.slug}`}
                  className="mt-5 btn-secondary inline-flex w-fit"
                >
                  See {d.size} details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Still not sure?" title="Call us — we size cans every day." align="center" />
        <div className="mt-6 text-center">
          <Link href="/get-a-quote" className="btn-primary">
            Get A Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
