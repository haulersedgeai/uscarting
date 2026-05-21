import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "./Container";

export function CtaBanner({
  title = "Ready to clear it out?",
  description = "Same-day dumpsters. Same-day junk removal. All-in pricing — no surprises.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[var(--color-ink)] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
            <p className="mt-3 text-white/80 text-lg">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={SITE.phoneTel} className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]">
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link href="/get-a-quote" className="btn-primary">
              Get A Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
