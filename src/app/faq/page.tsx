import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/Accordion";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { FAQ_CATEGORIES } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ — Dumpster Rental & Junk Removal Questions",
  description:
    "Answers to the most common questions about roll-off rentals, junk removal, pricing, weight limits, permits, prohibited items, and scheduling across Fairfield County and Westchester.",
};

const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) => c.items);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions we get most often."
        description="Direct answers from a decade of running dumpsters and junk-removal trucks across CT and NY. Jump to a section or scroll the whole thing."
      />

      <Section bg="soft">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-wider font-bold text-[var(--color-steel)] mb-3">
            Categories
          </h2>
          <ul className="flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="inline-block rounded-full bg-white border border-[var(--color-line)] px-3.5 py-1.5 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {FAQ_CATEGORIES.map((section, i) => (
        <Section
          key={section.id}
          bg={i % 2 === 0 ? "default" : "soft"}
        >
          <div id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-ink)] mb-2">
              {section.title}
            </h2>
            <p className="text-[var(--color-steel)] mb-8">
              {section.items.length} question{section.items.length === 1 ? "" : "s"}
            </p>
            <div className="max-w-3xl">
              <FaqAccordion items={section.items} />
            </div>
          </div>
        </Section>
      ))}

      <FaqJsonLd items={ALL_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <CtaBanner />
    </>
  );
}
