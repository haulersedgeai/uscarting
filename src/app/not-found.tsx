import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-ink)] text-white py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-[var(--color-orange)] font-bold uppercase tracking-[0.18em] text-xs mb-3">
            404
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Lost in the load.
          </h1>
          <p className="text-white/75 text-lg mb-8">
            That page didn&apos;t make the trip. Try one of these instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary">Home</Link>
            <Link href="/services" className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]">All Services</Link>
            <Link href="/get-a-quote" className="btn-ghost border-white text-white hover:bg-white hover:text-[var(--color-ink)]">Get A Quote</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
