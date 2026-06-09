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
import { SERVICES } from "@/content/services";
import { EXTRA_SERVICE_FAQS } from "@/content/faqs";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = (svc.relatedSlugs ?? [])
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((x): x is (typeof SERVICES)[number] => Boolean(x));

  const mergedFaqs = [
    ...(svc.faq ?? []),
    ...(EXTRA_SERVICE_FAQS[svc.slug] ?? []),
  ];

  const formKind =
    svc.category === "rental" ? "dumpster" : svc.category === "junk" || svc.category === "cleanout" ? "junk" : "contact";

  return (
    <>
      <PageHero eyebrow="Service" title={svc.h1} description={svc.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
              What you get
            </h2>
            <ul className="space-y-3">
              {svc.whatsIncluded.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="size-6 rounded-md bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-[var(--color-steel)]">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
              What we handle
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {svc.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)]"
                >
                  {item}
                </div>
              ))}
            </div>

            {mergedFaqs.length ? (
              <>
                <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-6">
                  Common questions
                </h2>
                <FaqAccordion items={mergedFaqs} />
              </>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[var(--color-surface)] p-6">
              <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-2">
                Ready to start?
              </h3>
              <p className="text-sm text-[var(--color-steel)] mb-5">
                Get an all-in quote in two minutes — by phone or form.
              </p>
              <Link href={`/get-a-quote?kind=${formKind}`} className="btn-primary w-full">
                Get A Free Quote <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="btn-secondary w-full mt-3">
                <Phone size={16} /> {SITE.phone}
              </a>
              <div className="hairline my-6" />
              <div className="text-sm">
                <div className="font-bold text-[var(--color-ink)] mb-2">Why us</div>
                <ul className="space-y-2 text-[var(--color-steel)]">
                  <li>· Same-day service most days</li>
                  <li>· Family owned, licensed, insured</li>
                  <li>· All-in pricing — no surprises</li>
                  <li>· Recycle and donate first</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Get started" title="Quote in two minutes." description="Pick the form, give us the details, we'll send you a number same-day." />
        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-2 max-w-3xl mx-auto">
          <QuoteFormEmbed kind={formKind} />
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeader eyebrow="Related" title="Other things we do" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
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
      ) : null}

      <ServiceJsonLd
        name={svc.title}
        description={svc.metaDescription}
        url={`/services/${svc.slug}`}
        serviceType={svc.title}
      />
      {mergedFaqs.length ? <FaqJsonLd items={mergedFaqs} /> : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: svc.title, path: `/services/${svc.slug}` },
        ]}
      />
      <CtaBanner />
    </>
  );
}
