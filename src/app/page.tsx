import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Trash2,
  Hammer,
  Recycle,
  Phone,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  Building2,
  Home as HomeIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import { SITE } from "@/lib/site";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";
import { LOCATIONS } from "@/content/locations";

const FAQS = [
  {
    q: "How fast can I get a dumpster delivered?",
    a: "Most days, same- or next-day. Call before noon and we can usually have a roll-off in your driveway by the end of the day.",
  },
  {
    q: "What's included in the dumpster rental price?",
    a: "Delivery, pickup, disposal up to the included weight allowance, and a 7-day rental period. No hidden weight or fuel fees.",
  },
  {
    q: "How is junk removal priced?",
    a: "By the volume your stuff takes up in our truck. You get an all-in price before we start.",
  },
  {
    q: "Do you do same-day junk removal?",
    a: "Yes — same-day service most days when you book before mid-morning. We confirm a 2-hour window and the crew calls 15–30 minutes before arriving.",
  },
  {
    q: "What areas do you serve?",
    a: "Fairfield County and Westchester County are our home turf, plus New Haven, Hartford, Middlesex, Litchfield, and New London Counties in CT. See our locations page for the full list.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-[var(--color-ink)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-truck.webp"
            alt="U.S. Carting roll-off dumpster truck"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/85 to-[var(--color-ink)]/40" />
        </div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-[var(--color-orange)]" />
              Family Owned · Licensed & Insured · Since 2014
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Dumpsters &amp; Junk Removal
              <span className="block text-[var(--color-orange)]">at your fingertips.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Same-day roll-off rentals and full-service junk removal across Fairfield County,
              Westchester, and beyond. Upfront pricing. No surprise fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/get-a-quote" className="btn-primary">
                Get A Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.phoneTel}
                className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]"
              >
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <Stat label="Years in business" value="10+" />
              <Stat label="Cities served" value="70+" />
              <Stat label="Same-day jobs" value="Daily" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-cream)] py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-[var(--color-steel)]">
            <Badge icon={<ShieldCheck size={16} />} text="Fully licensed & insured" />
            <Badge icon={<Clock size={16} />} text="Same-day service" />
            <Badge icon={<Recycle size={16} />} text="Recycle & donate first" />
            <Badge icon={<Star size={16} />} text="Family owned since 2014" />
            <Badge icon={<MapPin size={16} />} text="CT & Westchester, NY" />
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Two trucks. Four can sizes. One phone number."
          description="Whether you need a roll-off dropped today or a crew to clear out a basement, we run both sides of the operation under one roof."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Truck size={28} />}
            title="Roll-Off Rentals"
            description="10, 15, 20, and 30/40-yard cans. 7-day rental, weight included."
            href="/dumpster-sizes"
          />
          <FeatureCard
            icon={<Trash2 size={28} />}
            title="Junk Removal"
            description="Full-service. We load, haul, and recycle. All-in pricing."
            href="/services/junk-removal"
          />
          <FeatureCard
            icon={<HomeIcon size={28} />}
            title="Clean-Outs"
            description="Estates, foreclosures, basements, garages, attics. Sweep-out finish."
            href="/services/residential-cleanouts"
          />
          <FeatureCard
            icon={<Hammer size={28} />}
            title="Demo & Construction"
            description="Light demo and contractor debris. Net-30 for repeat clients."
            href="/services/light-demolition"
          />
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Roll-off rentals"
          title="Pick the can. We deliver today."
          description="Each size includes weight and a 7-day rental. Mix demo with household debris — that's what the can is for."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DUMPSTER_SIZES.map((d) => (
            <Link
              key={d.slug}
              href={`/dumpster-sizes/${d.slug}`}
              className="group block rounded-2xl bg-white p-6 border border-[var(--color-line)] hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] rounded-xl bg-[var(--color-surface-2)] mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={d.image}
                  alt={`${d.size} dumpster`}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-extrabold text-[var(--color-ink)]">{d.size}</h3>
                <span className="text-xs font-bold text-[var(--color-orange)]">
                  {d.weightLimit.replace(" included", "")}
                </span>
              </div>
              <p className="text-sm text-[var(--color-steel)] mb-3">{d.bestFor[0]}</p>
              <div className="text-sm font-bold text-[var(--color-orange)] flex items-center gap-1 group-hover:gap-2 transition-all">
                See details <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="How it works" title="Four steps. One phone call." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { num: "01", title: "Call or quote online", body: "Tell us what you've got. We send back an all-in number." },
            { num: "02", title: "We schedule the drop", body: "Same- or next-day in most areas. You pick the window." },
            { num: "03", title: "We do the work", body: "Drop the can, or load the truck. You don't lift a thing." },
            { num: "04", title: "Responsible disposal", body: "We recycle, donate, and transfer-station the rest." },
          ].map((s) => (
            <div key={s.num} className="rounded-2xl bg-[var(--color-surface)] p-6">
              <div className="text-4xl font-extrabold text-[var(--color-orange)] mb-3">{s.num}</div>
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/how-it-works" className="btn-secondary">
            See the full process <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid gap-10 lg:grid-cols-2">
          <SplitCard
            icon={<HomeIcon size={28} />}
            title="Residential"
            description="Homeowners, renters, estates, downsizes, and contractor renovation work. We do basement-to-attic clean-outs and same-day roll-offs."
            cta="Residential services"
            href="/residential"
          />
          <SplitCard
            icon={<Building2 size={28} />}
            title="Commercial"
            description="Property managers, real estate agents, retailers, restaurants, and contractors. Off-hours scheduling, COI on file, net-30 billing."
            cta="Commercial services"
            href="/commercial"
          />
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="What customers say"
          title="A decade of repeat customers."
          description="From contractors who call weekly to homeowners with a single garage to clear, the feedback is the same: show up, do the job, charge fair."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border border-[var(--color-line)]">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-[var(--color-orange)] text-[var(--color-orange)]" />
                ))}
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">&ldquo;{t.body}&rdquo;</p>
              <div className="text-sm font-bold text-[var(--color-steel)]">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/reviews" className="btn-secondary">
            Read more reviews <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Service areas"
          title="Covering Fairfield, Westchester & beyond."
          description="Headquartered in Greenwich, CT — running roll-offs and crews across two states and seven counties."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.slice(0, 18).map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 hover:border-[var(--color-orange)] hover:shadow-sm transition-all"
            >
              <div>
                <div className="font-bold text-[var(--color-ink)]">
                  {l.name}, {l.state}
                </div>
                <div className="text-xs text-[var(--color-steel)]">{l.county}</div>
              </div>
              <ArrowRight size={16} className="text-[var(--color-orange)]" />
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/locations" className="btn-secondary">
            See all {LOCATIONS.length} service areas <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Frequently asked" title="The fast answers." align="center" />
        <div className="mt-10 max-w-3xl mx-auto">
          <FaqAccordion items={FAQS} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-secondary">
              See the full FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-orange)]">{value}</div>
      <div className="text-xs text-white/60 mt-1">{label}</div>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-[var(--color-orange)]">{icon}</span>
      {text}
    </span>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
    >
      <div className="size-12 rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-steel)] leading-relaxed mb-4">{description}</p>
      <div className="text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={14} />
      </div>
    </Link>
  );
}

function SplitCard({
  icon,
  title,
  description,
  cta,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <div className="size-14 rounded-xl bg-[var(--color-orange)]/15 text-[var(--color-orange)] flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-3">{title}</h3>
      <p className="text-white/75 leading-relaxed mb-6">{description}</p>
      <Link href={href} className="inline-flex items-center gap-2 font-bold text-[var(--color-orange)] hover:gap-3 transition-all">
        {cta} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

const TESTIMONIALS = [
  {
    body: "I've been working with U.S. Carting for 5 years on contractor jobs in Fairfield County. Super dependable, easy to schedule, always a pleasure.",
    name: "Chris M.",
    role: "Contractor",
  },
  {
    body: "They responded immediately and scheduled yard-debris removal in a day. Very professional, very courteous. I'd absolutely call them again.",
    name: "William R.",
    role: "Homeowner",
  },
  {
    body: "Renovating houses for 23 years — the service is unparalleled. Customer service beyond expectations. Highly recommended.",
    name: "Oscar P.",
    role: "Renovation client",
  },
];
