import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building, Phone, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { LOCATIONS } from "@/content/locations";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return { title: loc.metaTitle, description: loc.metaDescription };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const others = LOCATIONS.filter(
    (l) => l.county === loc.county && l.state === loc.state && l.slug !== loc.slug
  ).slice(0, 8);

  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`${loc.county}, ${loc.state}`}
        title={`Dumpsters & Junk Removal in ${loc.name}`}
        description={loc.intro}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              Services in {loc.name}
            </h2>
            <p className="text-[var(--color-steel)] leading-relaxed mb-6">
              We serve all of {loc.name} with same- or next-day dumpster delivery and
              full-service junk removal. Pick a roll-off size, schedule a clean-out, or
              call us for a contractor pull — same crew on every call.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 hover:border-[var(--color-orange)] hover:shadow-sm transition-all"
                >
                  <Check size={14} className="text-[var(--color-orange)] shrink-0" />
                  <span className="text-sm font-semibold text-[var(--color-ink)] flex-1">
                    {s.title}
                  </span>
                  <ArrowRight size={14} className="text-[var(--color-steel-soft)]" />
                </Link>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-extrabold text-[var(--color-ink)] mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-[var(--color-orange)]" />
              {loc.name} neighborhoods we cover
            </h3>
            <div className="flex flex-wrap gap-2">
              {loc.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full bg-[var(--color-surface)] px-3.5 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  {n}
                </span>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-extrabold text-[var(--color-ink)] mb-4 flex items-center gap-2">
              <Building size={20} className="text-[var(--color-orange)]" />
              Landmarks near you
            </h3>
            <div className="flex flex-wrap gap-2">
              {loc.landmarks.map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-[var(--color-surface)] px-3.5 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  {l}
                </span>
              ))}
            </div>

            {loc.zipCodes?.length ? (
              <div className="mt-8">
                <div className="text-sm font-bold text-[var(--color-ink)] mb-2">
                  ZIP codes served
                </div>
                <div className="text-sm text-[var(--color-steel)]">
                  {loc.zipCodes.join(" · ")}
                </div>
              </div>
            ) : null}

            <h3 className="mt-10 text-xl font-extrabold text-[var(--color-ink)] mb-4">
              Roll-off sizes available in {loc.name}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {DUMPSTER_SIZES.map((d) => (
                <Link
                  key={d.slug}
                  href={`/dumpster-sizes/${d.slug}`}
                  className="rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 hover:border-[var(--color-orange)] hover:shadow-sm transition-all"
                >
                  <div className="font-bold text-[var(--color-ink)]">{d.size}</div>
                  <div className="text-xs text-[var(--color-steel)] mt-0.5">
                    {d.weightLimit} · {d.rentalPeriod}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[var(--color-ink)] text-white p-6">
              <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
                Same-day in {loc.name}
              </div>
              <h3 className="font-extrabold text-2xl mb-4">Get a quote.</h3>
              <Link href="/get-a-quote" className="btn-primary w-full">
                Get A Free Quote <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="mt-3 flex items-center justify-center gap-2 w-full text-white font-bold border border-white/20 rounded-lg py-3.5 hover:bg-white/10">
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
            <div className="mt-4 rounded-2xl bg-[var(--color-surface)] p-6">
              <h4 className="font-bold mb-2 text-[var(--color-ink)]">Why {loc.name} hires us</h4>
              <ul className="text-sm text-[var(--color-steel)] space-y-2">
                <li>· Same- or next-day delivery</li>
                <li>· Family owned, fully insured</li>
                <li>· COIs on file for property managers</li>
                <li>· Net-30 for established contractors</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Get started" title={`Quote your ${loc.name} project`} />
        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-2 max-w-3xl mx-auto">
          <QuoteFormEmbed kind="dumpster" />
        </div>
      </Section>

      {others.length > 0 ? (
        <Section>
          <SectionHeader eyebrow="Nearby" title={`Other ${loc.county} towns we serve`} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 hover:border-[var(--color-orange)] hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-[var(--color-ink)] text-sm">
                  {o.name}, {o.state}
                </span>
                <ArrowRight size={14} className="text-[var(--color-orange)]" />
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/locations" className="btn-secondary">
              All service areas <ArrowRight size={16} />
            </Link>
          </div>
        </Section>
      ) : null}

      <CtaBanner />
    </>
  );
}
