import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package, Truck, Trash2, Hammer } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  PriceRangeJsonLd,
} from "@/components/JsonLd";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";

export const metadata: Metadata = {
  title: "Pricing — Dumpsters, Junk Removal, Demolition, Carting Bag | U.S. Carting",
  description:
    "Published prices for roll-off dumpsters ($447–$899), Carting Bag ($299), junk removal ($145–$795), and outbuilding demolition (from $400). All-in, no hidden fees.",
  alternates: { canonical: "/pricing" },
};

const JUNK_BANDS = [
  {
    label: "Small loads",
    range: "$145 – $295",
    body: "A single item like a couch, mattress, or appliance — up through a packed quarter-truck of furniture or moving debris.",
    tiers: [
      { name: "Minimum trip (one item)", price: "$145" },
      { name: "1/8 of the truck", price: "$195" },
      { name: "1/6 of the truck", price: "$250" },
      { name: "1/4 of the truck (~5 yd³)", price: "$295" },
    ],
  },
  {
    label: "Medium loads",
    range: "$340 – $455",
    body: "Single-room clear-outs, a packed garage corner, or a basement sweep that fills roughly a third to half the truck.",
    tiers: [
      { name: "1/3 of the truck", price: "$340" },
      { name: "3/8 of the truck", price: "$395" },
      { name: "1/2 of the truck (~10 yd³)", price: "$455" },
    ],
  },
  {
    label: "Large loads",
    range: "$535 – $745",
    body: "Multi-room or full-basement clear-outs that take most of the truck's space.",
    tiers: [
      { name: "5/8 of the truck", price: "$535" },
      { name: "2/3 of the truck", price: "$615" },
      { name: "3/4 of the truck (~15 yd³)", price: "$655" },
      { name: "5/6 of the truck", price: "$690" },
      { name: "7/8 of the truck", price: "$745" },
    ],
  },
  {
    label: "Packed truck",
    range: "$795",
    body: "A full single-trip load — typical for whole-house downsize, full clear-out, or end-of-renovation hauls.",
    tiers: [{ name: "Full truckload (~20 yd³)", price: "$795" }],
  },
];

const DEMO_PRICES = [
  { item: "Wood-frame shed (8×10 to 10×12)", price: "from $400" },
  { item: "Larger shed / outbuilding (up to ~400 sq ft)", price: "from $700" },
  { item: "Hot tub — on grade, drained", price: "from $400" },
  { item: "Hot tub — deck-set or sunken", price: "from $700" },
  { item: "Above-ground pool (no surrounding deck)", price: "from $600" },
  { item: "Above-ground pool with surrounding deck", price: "from $1,000" },
  { item: "Detached garage — single bay", price: "from $1,800" },
  { item: "Detached garage — two bay", price: "from $3,000" },
  { item: "Deck under 200 sq ft", price: "from $400" },
  { item: "Deck 200–400 sq ft", price: "from $800" },
  { item: "Deck 400+ sq ft", price: "from $1,500" },
  { item: "Fencing — posts and footings pulled", price: "$5 / linear foot" },
  { item: "Gazebo, pergola, playset, trampoline", price: "from $200" },
];

const INCLUDED = [
  {
    icon: <Truck size={20} />,
    title: "Drop-off and pickup",
    body: "Both runs are inside the rental price — no zone surcharge, no fuel fee.",
  },
  {
    icon: <Package size={20} />,
    title: "Weight allowance",
    body: "Every roll-off includes a set weight that covers most residential loads (1,000 to 6,000 lbs by size).",
  },
  {
    icon: <Trash2 size={20} />,
    title: "Disposal and recycling",
    body: "Dump fee at a licensed transfer station is part of the price. Metals, e-waste, and donations route separately.",
  },
  {
    icon: <Hammer size={20} />,
    title: "Driveway protection",
    body: "Plywood boards under the rollers on asphalt come standard when you ask.",
  },
];

const OVERAGE = [
  {
    label: "Overweight",
    detail:
      "$0.10 per pound past the included allowance. We hand you the scale ticket from the transfer station so the math is on paper.",
  },
  {
    label: "Extra rental days",
    detail: "$15 per day past the 7-day window. Call before pickup day to roll the rental.",
  },
  {
    label: "Restricted items in the can",
    detail:
      "$50 each for a refrigerator, freezer, AC unit, mattress, box spring, or tire that ends up in the roll-off. Avoid the fee by hauling those with our junk-removal crew instead.",
  },
  {
    label: "Carting Bag hazmat",
    detail:
      "$95 trip charge if we arrive and find prohibited items (paint, propane, batteries, chemicals). The bag stays until the items are removed.",
  },
];

const FAQS = [
  {
    q: "Why publish a price list when most haulers don't?",
    a: "Because every quote phone call starts with you wondering what's a fair number. Putting our rate card on the page short-circuits that. You'll know the size, the price, and the included weight before you call — so the conversation is about scheduling, not haggling.",
  },
  {
    q: "Is the price I see the price I pay?",
    a: "If you stay inside the included weight and the 7-day window, yes — that's the full bill. The overage rules ($0.10 per pound past the weight allowance, $15 per day past the rental window) are the only line items that move the number, and you'll see the scale ticket if you cross.",
  },
  {
    q: "How do I know which size dumpster I need?",
    a: "Use this rule of thumb: 10-yard for a single room or a dense load; 15-yard for a kitchen, basement, or two-room remodel; 20-yard for a whole-floor renovation; 30/40-yard for whole-property and commercial work. Photos help us size more precisely — text them when you call.",
  },
  {
    q: "How is junk removal priced — by the hour or by the load?",
    a: "By the truck space your items take up. Four bands: small ($145–$295), medium ($340–$455), large ($535–$745), and packed truck ($795). The crew lands the load in the right band on site and confirms the number before any lifting starts.",
  },
  {
    q: "Do you charge extra for stairs or long carries?",
    a: "Standard residential stairs, third-floor walk-ups, and long basement-to-curb carries are inside the truck-space price. If a job involves something unusual — a piano carry, a freight-elevator booking, or a hand-shuttle from a backyard to a street truck — we'd flag that during the on-site quote, not surprise you with it after.",
  },
  {
    q: "What's the minimum charge for any service?",
    a: "$145 minimum for full-service junk removal. The Carting Bag is $299 flat regardless of fill level. Roll-off rentals start at the 10-yard's $447 price.",
  },
  {
    q: "Do prices change in different towns?",
    a: "No zone pricing. Greenwich, Scarsdale, Westport, Rye, Stamford, White Plains — same prices. Delivery is included.",
  },
  {
    q: "Do I need to pay before delivery?",
    a: "Homeowners pay at booking (card on file). Contractors and property managers run on net-30 invoicing after a couple of completed jobs.",
  },
  {
    q: "Are demolition prices flat or quoted?",
    a: "The starting prices on this page are real floor numbers — most small sheds, hot tubs, and decks come in at the published 'from' rate. The final number gets locked during an on-site walk-around because access, soil, and surrounding structure all change the labor.",
  },
  {
    q: "Do you do interior demolition?",
    a: "No — our demo scope is outbuildings only. Sheds, garages, decks, hot tubs, pools, fences. Interior gut-outs and load-bearing work need a licensed general contractor. We'll happily drop a roll-off for that crew to fill.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel before we dispatch the truck and there's no charge. If we've already rolled out and you cancel at the curb, there's a delivery-attempt fee — we'll spell out the number at booking.",
  },
  {
    q: "Can I extend my rental period?",
    a: "Yes — call before scheduled pickup. Extensions run $15 per day. Contractors with active job sites routinely keep cans for weeks at a time.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Every number, on one page."
        description="Our published rate card for roll-off rentals, the Carting Bag, junk removal, and outbuilding demo. Greenwich-based. Same prices across every town we serve."
      />

      <Section>
        <SectionHeader
          eyebrow="Roll-off rentals"
          title="Four sizes, one flat price each."
          description="Every roll-off rental includes the drop, the pickup, the dump fee, the included weight allowance, and 7 days of rental time. Drive straight to the size you need."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {DUMPSTER_SIZES.map((d) => (
            <Link
              key={d.slug}
              href={`/dumpster-sizes/${d.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-line)] p-6 hover:border-[var(--color-orange)] hover:shadow-md transition-all"
            >
              <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
                {d.cubicYards} cubic yards
              </div>
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{d.size}</h3>
              <div className="text-3xl font-extrabold text-[var(--color-ink)] mb-3">
                ${d.price}
              </div>
              <ul className="text-sm text-[var(--color-steel)] space-y-1.5 mb-4">
                <li>{d.weightLimit}</li>
                <li>{d.rentalPeriod}</li>
                <li className="text-xs">{d.dimensions}</li>
              </ul>
              <div className="text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                See size details <ArrowRight size={14} />
              </div>
            </Link>
          ))}

          <Link
            href="/carting-bag"
            className="group rounded-2xl bg-[var(--color-ink)] text-white p-6 hover:shadow-md transition-all"
          >
            <div className="text-xs uppercase tracking-wider text-[var(--color-orange)] font-bold mb-2">
              8 cubic yards
            </div>
            <h3 className="font-bold text-lg mb-2">Carting Bag</h3>
            <div className="text-3xl font-extrabold mb-3">$299</div>
            <ul className="text-sm text-white/80 space-y-1.5 mb-4">
              <li>No rental clock</li>
              <li>Delivery + pickup bundled</li>
              <li className="text-xs">Fits a single parking spot</li>
            </ul>
            <div className="text-sm font-bold text-[var(--color-orange)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              See the Carting Bag <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Junk removal"
          title="Truck-space pricing in four bands."
          description="We measure how much room your stuff takes in the truck, drop it in the right band, and confirm the number before we lift. $145 minimum trip, $795 for a packed truck."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {JUNK_BANDS.map((band) => (
            <div
              key={band.label}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-bold text-xl text-[var(--color-ink)]">{band.label}</h3>
                <div className="text-xl font-extrabold text-[var(--color-orange)]">
                  {band.range}
                </div>
              </div>
              <p className="text-[var(--color-steel)] mb-4 leading-relaxed">{band.body}</p>
              <ul className="border-t border-[var(--color-line)] pt-3 space-y-1.5">
                {band.tiers.map((t) => (
                  <li
                    key={t.name}
                    className="flex justify-between text-sm text-[var(--color-steel)]"
                  >
                    <span>{t.name}</span>
                    <span className="font-bold text-[var(--color-ink)]">{t.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-2xl text-sm text-[var(--color-steel)] leading-relaxed">
          The crew confirms the on-site band before any lifting starts. If the load comes in
          smaller than the booking, you pay the smaller band. If it grows, we re-quote at the
          curb and you say yes or no before we load.
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Outbuilding demolition"
          title="Sheds, decks, hot tubs, pools, fences."
          description="Demolition scope is outbuildings only — no interior demo, no load-bearing work, no house teardowns. Published prices below are starting points. Final number locks at an on-site walk-around."
        />
        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white overflow-hidden">
          {DEMO_PRICES.map((row, i) => (
            <div
              key={row.item}
              className={`flex items-center justify-between px-5 py-4 ${
                i !== DEMO_PRICES.length - 1 ? "border-b border-[var(--color-line)]" : ""
              }`}
            >
              <div className="text-[var(--color-ink)]">{row.item}</div>
              <div className="font-bold text-[var(--color-ink)] shrink-0 pl-4">
                {row.price}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-[var(--color-steel)] max-w-2xl leading-relaxed">
          All demolition prices include hand demo, hauling, and disposal at a licensed
          transfer station. Slab removal is quoted separately. Permits — when the town
          requires them for larger outbuildings — are the customer's; we'll point you to the
          right office during the walk-around.
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="What's bundled in"
          title="The price includes the work. Not just the truck."
          description="Every roll-off rental and every junk-removal job rolls these items into the published price — no add-ons, no zone fees, no fuel surcharges."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6"
            >
              <div className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[var(--color-ink)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="If a charge moves the number"
          title="The four ways the price can change — and how we show our math."
          description="If anything bumps the published rate, you see it on paper. We'd rather walk you through a scale ticket than send a surprise invoice."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {OVERAGE.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-bold text-[var(--color-ink)] mb-2">{row.label}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed">{row.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Why publish a rate card"
          title="So you can pick a size without a phone call."
          description="Most haulers keep their pricing in a back-office spreadsheet. We don't run that way."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "No haggling.",
              body: "Prices are the same whether it's a first call or a fiftieth. The published rate is the working number.",
            },
            {
              title: "No zone math.",
              body: "Greenwich to Westchester to Stamford — every town we cover runs on this rate card. Delivery is bundled.",
            },
            {
              title: "Show our work.",
              body: "When a charge moves, you see the receipt — scale tickets for overage, photo documentation for hazardous items, line-item invoicing for commercial accounts.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-[var(--color-line)] p-6"
            >
              <Check size={20} className="text-[var(--color-orange)] mb-3" />
              <h3 className="font-bold text-[var(--color-ink)] mb-2">{card.title}</h3>
              <p className="text-sm text-[var(--color-steel)] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Pricing FAQ" title="The questions we get on every quote call." />
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <FaqJsonLd items={FAQS} />
      <PriceRangeJsonLd
        name="U.S. Carting — Dumpster Rental & Junk Removal Pricing"
        description="Published flat-rate pricing for roll-off dumpsters, Carting Bag, and junk removal services in Fairfield County CT and Westchester County NY."
        url="/pricing"
        lowPrice={145}
        highPrice={3000}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <CtaBanner />
    </>
  );
}
