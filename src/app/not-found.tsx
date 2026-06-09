import Link from "next/link";
import { ArrowRight, Phone, Truck, Trash2, Home, Hammer } from "lucide-react";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

const TOP_LINKS = [
  { href: "/dumpster-sizes", label: "Dumpster Rentals", icon: <Truck size={18} /> },
  { href: "/services/junk-removal", label: "Junk Removal", icon: <Trash2 size={18} /> },
  { href: "/services/residential-cleanouts", label: "Clean-Outs", icon: <Home size={18} /> },
  { href: "/services/light-demolition", label: "Demolition", icon: <Hammer size={18} /> },
];

export default function NotFound() {
  return (
    <section className="bg-[var(--color-ink)] text-white py-24 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-3xl">
          <div className="text-[var(--color-orange)] font-bold uppercase tracking-[0.18em] text-xs mb-3">
            404 · Page not found
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Lost in the load.
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            That page didn&apos;t make the trip. The link might be from our old site, or
            something we&apos;ve since renamed. Try one of these — or call us and we&apos;ll
            point you to what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="/" className="btn-primary">
              Back to home <ArrowRight size={16} />
            </Link>
            <Link
              href="/get-a-quote"
              className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]"
            >
              Get A Free Quote
            </Link>
            <a
              href={SITE.phoneTel}
              className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]"
            >
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>

          <div className="text-xs uppercase tracking-wider font-bold text-white/50 mb-3">
            Or jump straight to a service
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 hover:bg-white/10 hover:border-[var(--color-orange)]/50 transition-all"
              >
                <span className="text-[var(--color-orange)]">{l.icon}</span>
                <span className="font-semibold flex-1">{l.label}</span>
                <ArrowRight size={16} className="text-white/40" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
