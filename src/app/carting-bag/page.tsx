import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone, Clock, MapPin, Package } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import {
  FaqJsonLd,
  BreadcrumbJsonLd,
  ProductJsonLd,
} from "@/components/JsonLd";
import { EXTRA_SERVICE_FAQS } from "@/content/faqs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carting Bag Rental $299 — 8-Yard Dumpster Bag | U.S. Carting",
  description:
    "Dumpster bag rental in Greenwich CT, Fairfield County, and Westchester. $299 flat — 8 cubic yards, delivery and pickup included, no rental clock. Fits tight driveways.",
  alternates: { canonical: "/carting-bag" },
};

const FAQS = EXTRA_SERVICE_FAQS["carting-bag"] ?? [];

const PRICE = 299;
const CAPACITY_YARDS = 8;

export default function CartingBagPage() {
  return (
    <>
      <PageHero
        eyebrow="Carting Bag · $299 flat"
        title="An 8-yard dumpster bag, no rental clock."
        description="When a roll-off is more than the project calls for, the Carting Bag covers it. We drop the bag at your address, you fill it on your own schedule, and you call us when it's ready for pickup. One flat price, delivery and collection bundled in."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 flex items-center justify-between gap-6 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-steel-soft)] font-bold mb-1">
                  Flat-rate bag rental
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-ink)]">
                  ${PRICE}
                  <span className="text-base font-bold text-[var(--color-steel)]"> all-in</span>
                </div>
                <div className="text-sm text-[var(--color-steel)] mt-1">
                  Delivery, the bag itself, and pickup — wrapped in one price.
                </div>
              </div>
              <Link href="/get-a-quote?kind=dumpster" className="btn-primary">
                Reserve a Carting Bag <ArrowRight size={16} />
              </Link>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              How the bag works
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <div key={s.title} className="rounded-2xl bg-[var(--color-surface)] p-5">
                  <div className="text-3xl font-extrabold text-[var(--color-orange)] mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-[var(--color-ink)] mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--color-steel)] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              What you get for $299
            </h2>
            <ul className="space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="size-6 rounded-md bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-[var(--color-steel)]">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-5">
              The bag at a glance
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <Spec label="Flat price" value={`$${PRICE}`} />
              <Spec label="Capacity" value={`${CAPACITY_YARDS} cubic yards`} />
              <Spec label="Dimensions" value="8 ft L × 4 ft W × 2.5 ft H (folded flat at delivery)" />
              <Spec label="Footprint" value="Fits a single parking spot or tight driveway" />
              <Spec label="Rental window" value="No clock — fill on your own schedule" />
              <Spec label="Delivery" value="Bundled in the $299 price" />
              <Spec label="Pickup" value="Bundled in the $299 price" />
              <Spec label="Service area" value="Fairfield County CT + Westchester County NY" />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-4">When the bag is the right call</h3>
                <ul className="space-y-2">
                  {RIGHT_FOR.map((r) => (
                    <li key={r} className="flex gap-2 items-start text-sm text-[var(--color-ink)]">
                      <Check size={14} className="text-[var(--color-green)] mt-1 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-4">When to choose a roll-off instead</h3>
                <ul className="space-y-2">
                  {NOT_FOR.map((r) => (
                    <li key={r} className="flex gap-2 items-start text-sm text-[var(--color-ink)]">
                      <span className="size-3.5 rounded-full bg-[var(--color-orange)]/20 mt-1 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dumpster-sizes"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--color-orange)] hover:gap-2 transition-all"
                >
                  Compare with roll-off sizes <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[var(--color-ink)] text-white p-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
                <Package size={14} /> Reserve the bag
              </div>
              <div className="text-4xl font-extrabold mb-1">${PRICE}</div>
              <div className="text-sm text-white/75 mb-5">
                One flat number. Drop, bag, and pickup all wrapped in. Most Greenwich-area orders go out within 1–2 business days.
              </div>
              <Link href="/get-a-quote?kind=dumpster" className="btn-primary w-full">
                Book the bag <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.phoneTel}
                className="mt-3 flex items-center justify-center gap-2 w-full text-white font-bold border border-white/20 rounded-lg py-3.5 hover:bg-white/10"
              >
                <Phone size={16} /> {SITE.phone}
              </a>
              <div className="mt-6 space-y-3 text-sm text-white/85">
                <div className="flex items-start gap-2">
                  <Clock size={16} className="text-[var(--color-orange)] mt-0.5 shrink-0" />
                  <span>Delivered out of our Greenwich depot — most Fairfield drops in 1 business day.</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[var(--color-orange)] mt-0.5 shrink-0" />
                  <span>Fairfield County, CT &amp; Westchester County, NY. Outside that radius? Call and we'll check.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[var(--color-surface)] p-6">
              <h4 className="font-bold mb-3 text-[var(--color-ink)]">Heads-up before you book</h4>
              <ul className="text-sm text-[var(--color-steel)] space-y-2">
                <li>· Heavy material (concrete, brick, dirt, shingles) needs a roll-off, not a bag.</li>
                <li>· Hazardous items void pickup — if we find paint, propane, batteries, or chemicals, a $95 trip fee applies and the bag stays.</li>
                <li>· The bag is reusable — fold and store, or have us collect it empty.</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Compare"
          title="Carting Bag vs. roll-off dumpster"
          description="Both move waste off your property. They solve different jobs."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--color-line)]">
                <th className="py-4 pr-4 text-sm uppercase tracking-wider text-[var(--color-steel-soft)] font-bold"></th>
                <th className="py-4 px-4 text-sm uppercase tracking-wider text-[var(--color-steel-soft)] font-bold">
                  Carting Bag
                </th>
                <th className="py-4 px-4 text-sm uppercase tracking-wider text-[var(--color-steel-soft)] font-bold">
                  10-Yard Roll-Off
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.label} className="border-b border-[var(--color-line)]">
                  <th className="py-4 pr-4 font-bold text-[var(--color-ink)]">{row.label}</th>
                  <td className="py-4 px-4 text-[var(--color-steel)]">{row.bag}</td>
                  <td className="py-4 px-4 text-[var(--color-steel)]">{row.rolloff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Reserve"
          title="Lock in a Carting Bag drop."
          description="Tell us where to drop the bag and we'll confirm a delivery window. Pick 'Carting Bag' (or note it in the message) so the booking lands in the right queue."
        />
        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-2 max-w-3xl mx-auto">
          <QuoteFormEmbed kind="contact" />
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Common questions"
          title="Carting Bag, asked and answered."
        />
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <FaqJsonLd items={FAQS} />
      <ProductJsonLd
        name="Carting Bag — 8-Yard Dumpster Bag"
        description="Flat-rate 8-cubic-yard dumpster bag rental in Fairfield County CT and Westchester County NY. $299 includes delivery, the bag, and pickup. No rental window."
        url="/carting-bag"
        price={PRICE}
        sku="USC-CARTING-BAG-8YD"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Carting Bag", path: "/carting-bag" },
        ]}
      />
      <CtaBanner
        title="Want it dropped this week?"
        description="Call before 11 AM and most Fairfield County orders are on the truck the same day."
      />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-[var(--color-steel-soft)] font-bold mb-1">
        {label}
      </div>
      <div className="text-sm font-semibold text-[var(--color-ink)]">{value}</div>
    </div>
  );
}

const STEPS = [
  {
    title: "We drop the bag",
    body: "Folded flat at your address — driveway, walkway, or parking spot. Footprint sized like a single car space.",
  },
  {
    title: "You fill it",
    body: "No daily fees. No 7-day countdown. Load it over a weekend or stretch it across a month-long project.",
  },
  {
    title: "We collect it",
    body: "Email or call when the bag is ready. We collect, dispose at a licensed transfer station, and the bag's cost is already in the original $299.",
  },
];

const INCLUDED = [
  "An 8-cubic-yard reusable dumpster bag delivered to your address",
  "Delivery from our Greenwich, CT depot — bundled in the price",
  "Collection when you're ready — bundled in the price",
  "Disposal at a licensed transfer station, with recycling routed where possible",
  "No rental clock and no daily fees while the bag sits at your house",
  "Available across Fairfield County, CT and Westchester County, NY",
];

const RIGHT_FOR = [
  "Tight driveways where a roll-off won't fit",
  "Townhomes, condos, and multi-family with shared parking",
  "Slow-roll basement, attic, or garage purges",
  "Move-out and listing prep over multiple weekends",
  "Smaller renovation debris (drywall scraps, baseboards, cabinetry trim)",
  "Multi-family unit turnovers and apartment refresh cycles",
];

const NOT_FOR = [
  "Concrete, brick, dirt, sod, or roofing shingles",
  "Whole-house renovation debris",
  "Roof tear-offs above ~5 squares",
  "Jobs where overnight street placement is required",
];

const COMPARE = [
  {
    label: "Flat price",
    bag: "$299",
    rolloff: "$447",
  },
  {
    label: "Capacity",
    bag: "8 cubic yards",
    rolloff: "10 cubic yards",
  },
  {
    label: "Rental window",
    bag: "None — fill on your own schedule",
    rolloff: "7-day window included",
  },
  {
    label: "Footprint",
    bag: "Single parking spot or tight driveway",
    rolloff: "14 ft of straight driveway",
  },
  {
    label: "Weight allowance",
    bag: "Light to medium debris only — no heavy material",
    rolloff: "1,000 lbs included, overage at $0.10/lb",
  },
  {
    label: "Delivery time",
    bag: "Most orders within 1–2 business days",
    rolloff: "Same- or next-day in most areas",
  },
];
