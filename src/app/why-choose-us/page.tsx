import type { Metadata } from "next";
import { ShieldCheck, Recycle, Clock, DollarSign, Phone, Users, Truck, Trash2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Why Choose U.S. Carting — The Differences That Matter",
  description:
    "Family owned. Licensed and insured. Same-day service. All-in pricing. Real humans answer the phone. Here's what makes us different.",
};

const REASONS = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Licensed and insured.",
    body: "Full liability and workers' comp. We email a COI to your property manager on request.",
  },
  {
    icon: <Phone size={26} />,
    title: "Real people answer.",
    body: "Live phones during business hours. The owner picks up if no one else can.",
  },
  {
    icon: <Clock size={26} />,
    title: "Same-day service.",
    body: "Most days you can have a roll-off in your driveway or our crew at your door within 24 hours.",
  },
  {
    icon: <DollarSign size={26} />,
    title: "All-in pricing.",
    body: "You see the number before we start. No weight surprises. No fuel surcharges. No \"oh we hit something extra\" calls.",
  },
  {
    icon: <Recycle size={26} />,
    title: "Recycle and donate first.",
    body: "Furniture goes to charity when possible (with a tax receipt). Metals, e-waste, and tires hit recyclers. Then the rest goes to the transfer station.",
  },
  {
    icon: <Users size={26} />,
    title: "Family owned since 2014.",
    body: "Ten-plus years operating under the same name. Half our jobs are repeat customers.",
  },
  {
    icon: <Truck size={26} />,
    title: "Right-sized cans.",
    body: "We don't over-sell. If a 15-yard does the job, we won't push a 20.",
  },
  {
    icon: <Trash2 size={26} />,
    title: "We do the stairs.",
    body: "Basement, third floor, attic — we bring the dollies and the muscle. You don't carry anything.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why us"
        title="The differences that actually matter."
        description="Pretty much every hauler claims same-day service and fair pricing. Here's what we actually mean by it."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white border border-[var(--color-line)] p-6 flex gap-4">
              <span className="size-12 rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                {r.icon}
              </span>
              <div>
                <h3 className="font-bold text-lg text-[var(--color-ink)] mb-1">{r.title}</h3>
                <p className="text-[var(--color-steel)] leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ink">
        <SectionHeader
          eyebrow="The promise"
          title="Show up. Do the job. Charge fair."
          description="The whole operating philosophy in eight words. We've been running on it since 2014 and it hasn't let us down yet."
          light
        />
      </Section>

      <CtaBanner />
          <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Why Choose Us", path: "/why-choose-us" },
        ]}
      />
    </>
  );
}
