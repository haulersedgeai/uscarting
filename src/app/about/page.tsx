import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Recycle, Users, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About U.S. Carting — Family Owned Since 2014",
  description:
    "Family-owned dumpster rentals and junk removal serving Fairfield County, Westchester, and beyond. A decade of carrying the heavy stuff so you don't have to.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A decade of dumpsters, junk, and a whole lot of stairs."
        description="U.S. Carting started in 2014 with one truck, one phone line, and one rule: show up when you say you will. Ten years in, we still answer the phone live and we still sweep the driveway before we leave."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="The story"
              title="Greenwich-based. Family-owned. Built on repeat customers."
            />
            <div className="mt-6 space-y-5 text-[var(--color-steel)] text-lg leading-relaxed">
              <p>
                U.S. Carting was founded in 2014 to bring honest, professional hauling
                service to Fairfield County. We started with one roll-off truck and a
                simple operating principle: be the company you'd want to hire yourself.
              </p>
              <p>
                Today we run roll-offs and a full-service junk-removal crew out of
                Greenwich, CT — covering all of Fairfield and Westchester counties, plus
                most of New Haven, Hartford, Middlesex, Litchfield, and New London
                counties in Connecticut. Same family. Same phone number. Same rule.
              </p>
              <p>
                Half our work is repeat — contractors who call us week after week,
                property managers who keep our COI on file, homeowners who used us once
                and now use us every time. That's the metric we care about.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface)] p-8">
            <h3 className="font-bold text-xl text-[var(--color-ink)] mb-5">
              What we stand for
            </h3>
            <ul className="space-y-5">
              {VALUES.map((v) => (
                <li key={v.title} className="flex gap-3">
                  <span className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                    {v.icon}
                  </span>
                  <div>
                    <div className="font-bold text-[var(--color-ink)]">{v.title}</div>
                    <div className="text-sm text-[var(--color-steel)] mt-0.5">
                      {v.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="How we work"
          title="The rules of the road."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white p-6 border border-[var(--color-line)]">
              <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{r.title}</h3>
              <p className="text-[var(--color-steel)] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/why-choose-us" className="btn-secondary">
            Why choose U.S. Carting <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Leadership"
            title="About the Owner"
          />
          <div className="mt-6 space-y-5 text-[var(--color-steel)] text-lg leading-relaxed">
            <p>[OWNER_BIO_PLACEHOLDER]</p>
          </div>
        </div>
      </Section>

      <Section bg="soft">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Disclosure"
            title="Ownership"
          />
          <div className="mt-6 space-y-5 text-[var(--color-steel)] text-lg leading-relaxed">
            <p>
              U.S. Carting is independently owned and operated. The same ownership
              also operates Grizzly Junk Pros, a junk removal company serving
              customers in other markets. The two businesses run with separate
              teams, dispatch, fleets, and customer service — U.S. Carting&apos;s
              focus is exclusively on Fairfield County and Westchester.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Want to work with us?"
        description="Get an instant quote or call us — we answer the phone live, every weekday."
      />
    </>
  );
}

const VALUES = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Show up when we say.",
    body: "Two-hour delivery and pickup windows. The driver calls 15–30 minutes ahead.",
  },
  {
    icon: <Recycle size={20} />,
    title: "Recycle and donate first.",
    body: "Furniture goes to charity when it can. Metals and e-waste hit a recycler. Then the rest goes to the transfer station.",
  },
  {
    icon: <Users size={20} />,
    title: "One crew, every job.",
    body: "Our drivers and loaders are full-time, trained, and respect your property — and your neighbors'.",
  },
  {
    icon: <Truck size={20} />,
    title: "All-in pricing.",
    body: "You get the number before we start. No weight fees. No fuel surcharges. No \"we ran into something\" calls.",
  },
];

const RULES = [
  {
    title: "We answer the phone.",
    body: "Live, during business hours, by a person. No phone tree. No callback queue.",
  },
  {
    title: "We sweep up.",
    body: "Broom-sweep finish on every clean-out. Boards under the can if you ask. Your property is cleaner when we leave than when we arrived.",
  },
  {
    title: "We protect your driveway.",
    body: "Wood under the rollers on asphalt. We know how to spot a soft driveway before we drop two tons on it.",
  },
  {
    title: "We bill straight.",
    body: "No surprise weight charges. If you go over the included allowance, you'll see the ticket and the math. Net-30 available for established contractors and PMs.",
  },
  {
    title: "We do the stairs.",
    body: "Basement, third floor, attic — we bring the dollies and the muscle. You don't carry anything.",
  },
  {
    title: "We say no when we should.",
    body: "Some loads are too heavy for the chosen can. Some items we can't take (paint, propane, asbestos). We tell you upfront, not after.",
  },
];
