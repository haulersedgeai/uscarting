import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  showCta = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  showCta?: boolean;
}) {
  return (
    <section className="bg-[var(--color-ink)] text-white pt-12 pb-16 md:pt-16 md:pb-20 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <Container className="relative">
        {eyebrow ? (
          <div className="uppercase tracking-[0.18em] text-xs font-bold mb-3 text-[var(--color-orange)]">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        ) : null}
        {showCta ? (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-quote" className="btn-primary">
              Get A Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href={SITE.phoneTel}
              className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]"
            >
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
