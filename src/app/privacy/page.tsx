import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How U.S. Carting collects, uses, and protects information you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" showCta={false} />
      <Section>
        <div className="prose max-w-3xl text-[var(--color-steel)] leading-relaxed space-y-5">
          <p>
            U.S. Carting (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what
            information we collect when you contact us or use our website, how we use it, and
            the choices you have.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Information we collect</h2>
          <p>
            When you submit a quote form or contact us, we collect the name, phone number,
            email, service address, and project details you provide. We use that information
            only to respond to your inquiry, schedule service, and follow up.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Sharing</h2>
          <p>
            We do not sell your information. We share it only with team members and service
            providers who need it to deliver the work you requested.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">SMS / text messaging</h2>
          <p>
            By providing a mobile number, you consent to receive service-related text
            messages. Standard message and data rates may apply. Reply STOP to unsubscribe.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8">Contact</h2>
          <p>Questions? Email info@uscarting.com or call (917) 664-4794.</p>
        </div>
      </Section>
    </>
  );
}
