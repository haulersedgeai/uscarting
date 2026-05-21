import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";

export const metadata: Metadata = {
  title: "Pricing — Roll-Off Dumpsters & Junk Removal",
  description:
    "How we price dumpsters and junk removal — what's included, how weight allowances work, and why you'll never see a hidden fee.",
};

const FAQS = [
  {
    q: "Why don't you list a flat dollar amount per size?",
    a: "Pricing varies by zip code, project type, and disposal site fees, which change. Quoting per project means we can give you the right number for your job instead of a price that doesn't match reality.",
  },
  {
    q: "How does the weight allowance work?",
    a: "Each can comes with a weight allowance included in the rental price (1,000 to 6,000 lbs depending on size). If you go over, you'll see the actual scale ticket and pay a per-ton overage. No mystery math.",
  },
  {
    q: "Are there fuel surcharges or extra fees?",
    a: "No. We don't add fuel surcharges. We don't charge for the second truck on a swap-out. We don't charge for the boards on your driveway. The number you get is the number you pay.",
  },
  {
    q: "Do you offer net-30 billing?",
    a: "Yes — for established contractors and property managers. The first few jobs are paid on completion; after that we set you up with net-30.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Upfront. All-in. No surprises."
        description="We quote per project, not per pound of guesswork. Here's how our pricing works and what's included."
      />

      <Section>
        <SectionHeader eyebrow="Roll-off rentals" title="What's included in every dumpster rental." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Delivery to your driveway or job site",
            "Pickup when you're done",
            "Disposal up to the included weight allowance",
            "Seven-day rental period",
            "Walk-in door for easy loading",
            "No fuel surcharges, no hidden fees",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-white p-5">
              <Check size={18} className="text-[var(--color-orange)] mt-0.5 shrink-0" />
              <span className="text-[var(--color-ink)]">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DUMPSTER_SIZES.map((d) => (
            <Link
              key={d.slug}
              href={`/dumpster-sizes/${d.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
                {d.cubicYards} cubic yards
              </div>
              <h3 className="font-bold text-xl text-[var(--color-ink)] mb-3">{d.title}</h3>
              <div className="space-y-1.5 text-sm text-[var(--color-steel)] mb-4">
                <div>{d.weightLimit}</div>
                <div>{d.rentalPeriod}</div>
                <div>{d.dimensions}</div>
              </div>
              <div className="text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Get a quote <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Junk removal" title="How junk removal pricing works." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-[var(--color-line)] p-6">
            <h3 className="font-bold text-xl text-[var(--color-ink)] mb-3">By the volume.</h3>
            <p className="text-[var(--color-steel)] leading-relaxed">
              We price junk removal based on how much space your items take up in our truck —
              measured in cubic yards. You get an all-in number before we start, including
              labor, disposal, and any recycling or donation drop-offs.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-[var(--color-line)] p-6">
            <h3 className="font-bold text-xl text-[var(--color-ink)] mb-3">No fine print.</h3>
            <p className="text-[var(--color-steel)] leading-relaxed">
              No stair fees. No truck minimums after the first item. No "we noticed something
              extra" calls during the haul. What we quote is what you pay.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title="Pricing questions, answered." />
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
