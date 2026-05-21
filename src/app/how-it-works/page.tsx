import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "How It Works — Dumpster Rentals & Junk Removal",
  description:
    "Four steps for a dumpster rental. Four steps for junk removal. Same outcome: the clutter is gone and your driveway is swept.",
};

const RENTAL_STEPS = [
  { num: "01", title: "Pick a size, pick a date.", body: "Quote online or call us. We help you size the can to the job in two minutes." },
  { num: "02", title: "We drop the can.", body: "Same- or next-day delivery in most areas. Boards under the rollers on asphalt." },
  { num: "03", title: "You fill it on your schedule.", body: "Walk-in door for easy loading. Seven-day rental — extensions are easy." },
  { num: "04", title: "We pull it.", body: "Call when you're done. We pick up, weigh, and dispose responsibly." },
];

const JUNK_STEPS = [
  { num: "01", title: "Book the appointment.", body: "We schedule a 2-hour arrival window. The driver calls 15–30 minutes ahead." },
  { num: "02", title: "Walk-through and quote.", body: "Show us what's going. We quote all-in. You agree before we start." },
  { num: "03", title: "We load the truck.", body: "Crew of two with all the gear. You don't lift anything." },
  { num: "04", title: "Sweep, recycle, donate.", body: "We sweep the area, route donations and recyclables, then transfer-station the rest." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Two services. Same simple process."
        description="Whether you need a dumpster dropped or a crew to haul, here's exactly what happens from the moment you call."
      />

      <Section>
        <SectionHeader eyebrow="Roll-off dumpster rental" title="Four steps to a clean driveway." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RENTAL_STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <SectionHeader eyebrow="Full-service junk removal" title="Four steps to a clean house." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JUNK_STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--color-line)] p-6">
      <div className="text-4xl font-extrabold text-[var(--color-orange)] mb-3">{num}</div>
      <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-steel)] leading-relaxed">{body}</p>
    </div>
  );
}
