import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ — Dumpster Rental & Junk Removal Questions",
  description:
    "Answers to the most common questions about roll-off rentals, junk removal, pricing, weight limits, prohibited items, and scheduling.",
};

const SECTIONS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Dumpster rentals",
    items: [
      {
        q: "How fast can you deliver a dumpster?",
        a: "Same- or next-day in most areas. Call before noon and we can usually drop the can the same afternoon.",
      },
      {
        q: "What's the rental period?",
        a: "Seven days standard. Extensions are easy — just call when you need more time.",
      },
      {
        q: "Do I need a permit?",
        a: "If the dumpster sits on your private driveway, no permit needed. For street placement, most towns in our area require a permit — we'll point you to the right office.",
      },
      {
        q: "What size should I get?",
        a: "Rough rule: 10-yard for one room, 15-yard for a basement or kitchen remodel, 20-yard for whole-house projects, 30/40-yard for major demo. Call us if you're between sizes — we'll help you pick.",
      },
      {
        q: "What happens if I go over the weight allowance?",
        a: "You'll see the scale ticket from the transfer station and pay a per-ton overage. No mystery math, no rounding up.",
      },
      {
        q: "Can I keep the dumpster longer than 7 days?",
        a: "Yes. Just call before pickup day and we'll extend the rental at a daily rate.",
      },
    ],
  },
  {
    title: "Junk removal",
    items: [
      {
        q: "How is junk removal priced?",
        a: "By the volume your items take up in our truck — measured in cubic yards. You get an all-in price before we start.",
      },
      {
        q: "Do I need to move anything outside?",
        a: "Nope. We come into the home and take it from wherever it sits — basement, third floor, attic, garage, yard.",
      },
      {
        q: "How big is your crew?",
        a: "Two-person crew on standard jobs. Bigger jobs get more bodies.",
      },
      {
        q: "Do you take everything?",
        a: "Most things, yes. We don't take asbestos, wet paint, propane tanks, oil furnaces with fuel, chemicals/pesticides, biological/medical waste, or boats/vehicles. We do take refrigerators, appliances, furniture, electronics, hot tubs, sheds, and just about everything else.",
      },
    ],
  },
  {
    title: "Scheduling & service",
    items: [
      {
        q: "What areas do you serve?",
        a: "All of Fairfield and Westchester counties, plus most of New Haven, Hartford, Middlesex, Litchfield, and New London counties in CT. See our full service area page for details.",
      },
      {
        q: "Do you work weekends?",
        a: "Saturdays, yes. Sundays only for emergencies or pre-arranged jobs.",
      },
      {
        q: "How do appointment windows work?",
        a: "We book a 2-hour window. The crew calls 15–30 minutes before arrival.",
      },
      {
        q: "Do you offer net-30 billing?",
        a: "Yes — for established contractors and property managers. The first few jobs are paid on completion; after that we set you up with net-30.",
      },
    ],
  },
  {
    title: "Recycling & disposal",
    items: [
      {
        q: "What do you do with our junk?",
        a: "We recycle and donate first whenever possible. Furniture in good shape goes to local charities (with a tax receipt). Metals, e-waste, and tires go to recyclers. The rest goes to permitted transfer stations.",
      },
      {
        q: "Can I get a donation receipt?",
        a: "Yes. When items go to a charity that issues receipts, we'll send it back to you within a week.",
      },
      {
        q: "What about hazardous materials?",
        a: "We don't take hazardous waste — paint, chemicals, propane, oil, asbestos, biological/medical waste. Your town's hazardous-waste day or a licensed hazmat hauler is the right route.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions we get most often."
        description="Answers from a decade of running dumpsters and junk-removal trucks in CT and NY."
      />

      {SECTIONS.map((section, i) => (
        <Section key={section.title} bg={i % 2 === 1 ? "soft" : "default"}>
          <SectionHeader eyebrow="Section" title={section.title} />
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={section.items} />
          </div>
        </Section>
      ))}

      <CtaBanner />
    </>
  );
}
