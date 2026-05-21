import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { QuoteFormEmbed } from "@/components/QuoteFormEmbed";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact U.S. Carting — Dumpsters & Junk Removal",
  description:
    "Call, text, or fill out the form. We answer the phone live during business hours and respond to forms same-day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person, not a phone tree."
        description="Call, text, or fill out the form. We respond same-day on weekdays and most Saturdays."
        showCta={false}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-[var(--color-ink)] mb-6">Get in touch</h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-sm text-[var(--color-steel)]">Call or text</div>
                  <a
                    href={SITE.phoneTel}
                    className="font-bold text-lg text-[var(--color-ink)] hover:text-[var(--color-orange)]"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="text-sm text-[var(--color-steel)]">Email</div>
                  <a
                    href={SITE.emailHref}
                    className="font-bold text-lg text-[var(--color-ink)] hover:text-[var(--color-orange)]"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-sm text-[var(--color-steel)]">Office</div>
                  <div className="font-bold text-lg text-[var(--color-ink)]">
                    {SITE.address.full}
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="size-10 rounded-lg bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="text-sm text-[var(--color-steel)]">Hours</div>
                  {SITE.hours.map((h) => (
                    <div
                      key={h.day}
                      className="font-bold text-[var(--color-ink)]"
                    >
                      <span className="text-sm font-semibold text-[var(--color-steel)] mr-2">
                        {h.day}
                      </span>
                      {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <div className="hairline my-8" />
            <h3 className="font-bold text-[var(--color-ink)] mb-3">Need a quote fast?</h3>
            <p className="text-[var(--color-steel)] leading-relaxed">
              For an instant dumpster or junk removal estimate, use one of our quote forms —
              or call and we'll quote on the phone in two minutes.
            </p>
          </div>

          <div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-2">
              <QuoteFormEmbed kind="contact" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
