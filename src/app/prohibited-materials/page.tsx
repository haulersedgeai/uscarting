import type { Metadata } from "next";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Prohibited Materials — What We Can't Take",
  description:
    "A complete list of items we cannot accept in our dumpsters or on junk removal jobs — and why.",
};

const PROHIBITED = [
  {
    title: "Anything with gas or oil",
    body: "Lawn mowers, snowblowers, generators, motorcycles, ATVs — anything with fuel in it. Drain the tank and we'll take the equipment.",
  },
  {
    title: "Medical & biological waste",
    body: "No sharps, no biohazard bags, no feces. Licensed medical-waste haulers handle these.",
  },
  {
    title: "Asbestos",
    body: "Asbestos requires a licensed abatement contractor. We can't transport or dispose of it.",
  },
  {
    title: "Boats and vehicles",
    body: "Cars, trucks, boats, trailers — call a salvage yard or vehicle-removal service.",
  },
  {
    title: "Chemicals & pesticides",
    body: "Cleaning chemicals, herbicides, pesticides, pool chemicals, automotive fluids. Your town's hazardous-waste day is the route.",
  },
  {
    title: "Oil furnaces & tanks",
    body: "Even empty oil-furnace tanks can't go in. A licensed oil-tank removal company is required.",
  },
  {
    title: "Wet paint",
    body: "Paint cans with wet paint inside are hazardous. Dry it out completely (kitty litter, paint hardener) and the empty/dry can is fine.",
  },
  {
    title: "Propane tanks",
    body: "Empty or full, propane tanks are explosive. Most propane retailers will take them back for free.",
  },
  {
    title: "Rocks, cement, or dirt — in bulk",
    body: "Small amounts mixed with other debris are usually fine. Pure-load rock, dirt, or concrete loads need to be priced separately and often need a smaller can.",
  },
  {
    title: "Tires (in the dumpster)",
    body: "Tires aren't accepted at most transfer stations. We do recycle them — but separately, not in the roll-off.",
  },
];

export default function ProhibitedMaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prohibited"
        title="What we can't take — and why."
        description="A few materials need licensed haulers or specialized disposal. Here's the list and where to send them instead."
      />

      <Section>
        <SectionHeader eyebrow="Not in the can" title="Prohibited items." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROHIBITED.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white border border-[var(--color-line)] p-6 flex gap-3">
              <span className="size-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <X size={18} />
              </span>
              <div>
                <h3 className="font-bold text-[var(--color-ink)] mb-1">{p.title}</h3>
                <p className="text-sm text-[var(--color-steel)] leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Not sure?"
          title="Ask us before you load."
          description="If you're unsure whether an item is OK, just call. We'll tell you yes, no, or 'we can take that if you do X first.' Saves you a re-haul and saves us a trip back."
          align="center"
        />
      </Section>

      <CtaBanner />
          <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Prohibited Materials", path: "/prohibited-materials" },
        ]}
      />
    </>
  );
}
