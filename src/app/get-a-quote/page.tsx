import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Trash2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";

export const metadata: Metadata = {
  title: "Get An Instant Quote — Dumpster Rental or Junk Removal",
  description:
    "Get a same-day quote on a roll-off dumpster or full-service junk removal. Pick the form that matches your project.",
};

export default function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Pick the project. Get a quote."
        description="Roll-off dumpster, full-service junk removal, or just a question — pick the form that fits and we'll respond the same day."
        showCta={false}
      />

      <QuoteInner promise={searchParams} />
    </>
  );
}

async function QuoteInner({ promise }: { promise: Promise<{ kind?: string }> }) {
  const params = await promise;
  const kind =
    params.kind === "junk"
      ? "junk"
      : params.kind === "contact"
        ? "contact"
        : "dumpster";

  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-3 mb-10">
        <QuoteSwitch
          label="Dumpster Rental"
          icon={<Truck size={20} />}
          href="/get-a-quote?kind=dumpster"
          active={kind === "dumpster"}
        />
        <QuoteSwitch
          label="Junk Removal"
          icon={<Trash2 size={20} />}
          href="/get-a-quote?kind=junk"
          active={kind === "junk"}
        />
        <QuoteSwitch
          label="General Question"
          icon={<ArrowRight size={20} />}
          href="/get-a-quote?kind=contact"
          active={kind === "contact"}
        />
      </div>
      <div className="rounded-2xl border border-[var(--color-line)] bg-white p-2">
        <QuoteFormEmbed kind={kind} />
      </div>
    </Section>
  );
}

function QuoteSwitch({
  label,
  icon,
  href,
  active,
}: {
  label: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-2xl px-5 py-4 border transition-all ${
        active
          ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)]"
          : "bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[var(--color-orange)]"
      }`}
    >
      <div className="flex items-center gap-3 font-bold">
        <span
          className={`size-8 rounded-lg flex items-center justify-center ${
            active ? "bg-[var(--color-orange)] text-white" : "bg-[var(--color-orange)]/10 text-[var(--color-orange)]"
          }`}
        >
          {icon}
        </span>
        {label}
      </div>
      <ArrowRight size={16} className={active ? "text-[var(--color-orange)]" : "text-[var(--color-steel)]"} />
    </Link>
  );
}
