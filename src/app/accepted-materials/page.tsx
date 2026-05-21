import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Accepted Materials — What Goes In The Dumpster",
  description:
    "A complete list of what we accept in our roll-off dumpsters and on full-service junk removal jobs.",
};

const CATEGORIES = [
  {
    title: "Household items",
    items: [
      "Furniture (sofas, sectionals, recliners, dressers, tables, chairs)",
      "Mattresses and box springs",
      "Carpets and rugs",
      "Toys, books, clothes, housewares",
      "Holiday decorations",
      "Patio and outdoor furniture",
    ],
  },
  {
    title: "Appliances",
    items: [
      "Refrigerators and freezers (refrigerant-safe recycling)",
      "Washers, dryers, dishwashers, ovens",
      "Microwaves and small appliances",
      "Water heaters (electric)",
      "Air conditioners (window and central units)",
    ],
  },
  {
    title: "Construction & demo debris",
    items: [
      "Drywall and plaster",
      "Lumber and framing",
      "Tile, flooring, and underlayment",
      "Cabinetry and millwork",
      "Roofing shingles",
      "Siding tear-off",
      "Concrete (small loads — heavier weight, use the 10-yard)",
      "Brick and block",
    ],
  },
  {
    title: "Yard & outdoor",
    items: [
      "Storm debris and downed limbs",
      "Brush piles",
      "Leaves and grass clippings (bagged)",
      "Old fence sections",
      "Sheds and shed contents",
      "Above-ground pools",
      "Hot tubs (we cut them down in place)",
    ],
  },
  {
    title: "Electronics (recycled)",
    items: [
      "Flat-screen and CRT TVs",
      "Computer monitors",
      "Desktops, laptops, servers",
      "Printers and scanners",
      "Hard drives",
      "Audio equipment",
    ],
  },
  {
    title: "Office",
    items: [
      "Cubicles and workstations",
      "Office chairs",
      "Conference tables",
      "Desks and credenzas",
      "File cabinets",
    ],
  },
];

export default function AcceptedMaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials"
        title="What goes in the can."
        description="Whether you're filling a roll-off yourself or having our crew haul, here's the full list of what we accept."
      />

      <Section>
        <SectionHeader eyebrow="Accepted" title="Materials we take." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-[var(--color-line)] p-6">
              <h3 className="font-extrabold text-lg text-[var(--color-ink)] mb-4">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-[var(--color-ink)]">
                    <Check size={14} className="text-[var(--color-green)] mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader
          eyebrow="Heads up"
          title="Some materials change the can size."
          description="Heavy material like concrete, brick, or dirt hits the weight allowance before it fills the volume. For those loads, the 10-yard is often the right choice — you'll fill it faster but the price stays right."
        />
      </Section>

      <CtaBanner />
    </>
  );
}
