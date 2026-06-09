import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { COMMERCIAL } from "@/content/commercial";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return COMMERCIAL.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = COMMERCIAL.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.metaTitle, description: c.metaDescription };
}

export default async function CommercialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = COMMERCIAL.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow="Commercial" title={c.h1} description={c.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
              What you get
            </h2>
            <ul className="space-y-3">
              {c.whatsIncluded.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="size-6 rounded-md bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-[var(--color-steel)]">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
              Best for
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.bestFor.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)]"
                >
                  {item}
                </div>
              ))}
            </div>

            {c.faq?.length ? (
              <>
                <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
                  FAQ
                </h2>
                <FaqAccordion items={c.faq} />
              </>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[var(--color-ink)] text-white p-6">
              <h3 className="font-extrabold text-xl mb-2">Commercial quote</h3>
              <p className="text-sm text-white/75 mb-5">
                Tell us about your portfolio or project — we'll send a quote same-day.
              </p>
              <Link href="/get-a-quote?kind=contact" className="btn-primary w-full">
                Get A Quote <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="mt-3 flex items-center justify-center gap-2 w-full text-white font-bold border border-white/20 rounded-lg py-3.5 hover:bg-white/10">
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Other commercial verticals" title="More we serve" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMMERCIAL.filter((x) => x.slug !== c.slug).map((r) => (
            <Link
              key={r.slug}
              href={`/commercial/${r.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{r.title}</h3>
              <p className="text-sm text-[var(--color-steel)] line-clamp-3">{r.intro}</p>
              <div className="mt-4 text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <ServiceJsonLd
        name={c.title}
        description={c.metaDescription}
        url={`/commercial/${c.slug}`}
        serviceType={c.title}
      />
      {c.faq?.length ? <FaqJsonLd items={c.faq} /> : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Commercial", path: "/commercial" },
          { name: c.title, path: `/commercial/${c.slug}` },
        ]}
      />
      <CtaBanner />
    </>
  );
}
