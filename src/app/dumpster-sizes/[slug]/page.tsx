import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { FaqAccordion } from "@/components/Accordion";
import { FaqJsonLd, BreadcrumbJsonLd, ProductJsonLd } from "@/components/JsonLd";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";
import { SIZE_FAQS } from "@/content/faqs";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return DUMPSTER_SIZES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = DUMPSTER_SIZES.find((x) => x.slug === slug);
  if (!d) return {};
  return { title: d.metaTitle, description: d.metaDescription };
}

export default async function DumpsterSizePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = DUMPSTER_SIZES.find((x) => x.slug === slug);
  if (!d) notFound();

  const related = (d.relatedSlugs ?? [])
    .map((s) => DUMPSTER_SIZES.find((x) => x.slug === s))
    .filter((x): x is (typeof DUMPSTER_SIZES)[number] => Boolean(x));

  const faqs = SIZE_FAQS[d.slug] ?? [];

  return (
    <>
      <PageHero eyebrow={`${d.cubicYards} cubic yards · $${d.price} flat`} title={d.h1} description={d.intro} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="rounded-2xl bg-[var(--color-surface-2)] p-6 aspect-[4/3] flex items-center justify-center">
              <Image
                src={d.image}
                alt={`${d.size} dumpster`}
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 flex items-center justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-steel-soft)] font-bold mb-1">
                  Flat rental rate
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-ink)]">
                  ${d.price}
                  <span className="text-base font-bold text-[var(--color-steel)]"> / rental</span>
                </div>
                <div className="text-sm text-[var(--color-steel)] mt-1">
                  Includes drop-off, pickup, dumping, {d.weightLimit.toLowerCase()}, and a {d.rentalPeriod.toLowerCase().replace(" included", "")} window.
                </div>
              </div>
              <Link href="/get-a-quote?kind=dumpster" className="btn-primary">
                Reserve this size <ArrowRight size={16} />
              </Link>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              Specs
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <Spec label="Flat price" value={`$${d.price}`} />
              <Spec label="Capacity" value={`${d.cubicYards} cubic yards`} />
              <Spec label="Dimensions" value={d.dimensions} />
              <Spec label="Weight included" value={d.weightLimit} />
              <Spec label="Rental period" value={d.rentalPeriod} />
              <Spec label="Overage" value="$0.10 per pound over included weight" />
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              Best for
            </h2>
            <ul className="space-y-3">
              {d.bestFor.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="size-6 rounded-md bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-[var(--color-steel)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-4">What fits</h3>
                <ul className="space-y-2">
                  {d.whatFits.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-[var(--color-ink)]">
                      <Check size={14} className="text-[var(--color-green)] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-4">What doesn&apos;t fit</h3>
                <ul className="space-y-2">
                  {d.whatDoesntFit.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-[var(--color-ink)]">
                      <X size={14} className="text-[var(--color-orange)] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              Common use cases
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {d.commonUseCases.map((u, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)]"
                >
                  {u}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[var(--color-ink)] text-white p-6">
              <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
                Reserve now
              </div>
              <h3 className="font-extrabold text-2xl mb-1">{d.size} Dumpster</h3>
              <div className="text-3xl font-extrabold text-[var(--color-orange)] mb-3">${d.price}</div>
              <p className="text-sm text-white/75 mb-5">
                Flat rate. {d.weightLimit} · {d.rentalPeriod} · Greenwich-based, same-day in most of Fairfield County and Westchester.
              </p>
              <Link href="/get-a-quote?kind=dumpster" className="btn-primary w-full">
                Book this can <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="mt-3 flex items-center justify-center gap-2 w-full text-white font-bold border border-white/20 rounded-lg py-3.5 hover:bg-white/10">
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
            <div className="mt-4 rounded-2xl bg-[var(--color-surface)] p-6">
              <h4 className="font-bold mb-3 text-[var(--color-ink)]">Notes on this size</h4>
              <ul className="text-sm text-[var(--color-steel)] space-y-2">
                <li>· Driveway drops are free. Street placement may need a town permit — ask us where to apply.</li>
                <li>· Overage runs $0.10 per pound past the included weight. You see the scale ticket.</li>
                <li>· Extra days run $15 each beyond the 7-day window.</li>
                <li>· Delivered out of our Greenwich depot at 37 S Water St.</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Get started" title={`Quote your ${d.size} rental`} />
        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-2 max-w-3xl mx-auto">
          <QuoteFormEmbed kind="dumpster" />
        </div>
      </Section>

      {faqs.length > 0 ? (
        <Section>
          <SectionHeader
            eyebrow="Common questions"
            title={`About the ${d.size} dumpster`}
          />
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section bg="soft">
          <SectionHeader eyebrow="Other sizes" title="Need bigger or smaller?" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/dumpster-sizes/${r.slug}`}
                className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{r.title}</h3>
                <p className="text-sm text-[var(--color-steel)] line-clamp-3">{r.intro}</p>
                <div className="mt-4 text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View {r.size} <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {faqs.length > 0 ? <FaqJsonLd items={faqs} /> : null}
      <ProductJsonLd
        name={`${d.size} Roll-Off Dumpster Rental`}
        description={d.metaDescription}
        url={`/dumpster-sizes/${d.slug}`}
        price={d.price}
        image={d.image}
        sku={`USC-${d.slug.toUpperCase()}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Dumpster Sizes", path: "/dumpster-sizes" },
          { name: d.title, path: `/dumpster-sizes/${d.slug}` },
        ]}
      />
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
