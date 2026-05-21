import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for U.S. Carting dumpster rentals and junk removal.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service" showCta={false} />
      <Section>
        <div className="prose max-w-3xl text-[var(--color-steel)] leading-relaxed space-y-5">
          <p>
            These terms govern dumpster rentals and junk-removal services provided by U.S.
            Carting. By scheduling a service, you agree to the terms below.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Rentals</h2>
          <p>
            Standard roll-off rentals are seven (7) days. Extensions are available at a daily
            rate. Weight allowances vary by can size; overages are billed at the per-ton rate
            shown on the transfer-station ticket.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Prohibited items</h2>
          <p>
            Hazardous materials, paint cans with wet paint, propane tanks, asbestos,
            chemicals, oil furnaces, and medical/biological waste are prohibited. Loading
            prohibited items may result in additional fees and a return trip to remove them.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Property damage</h2>
          <p>
            We use boards under the rollers on asphalt driveways on request. We are not
            responsible for damage to driveways, lawns, or surfaces caused by normal placement
            of the can.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Payment</h2>
          <p>
            Payment is due on completion for new accounts. Established contractors and
            property managers may qualify for net-30 terms. Late balances are subject to
            standard finance charges.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Contact</h2>
          <p>Questions about these terms? Email info@uscarting.com or call (917) 664-4794.</p>
        </div>
      </Section>
    </>
  );
}
