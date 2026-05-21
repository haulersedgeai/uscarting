import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "./Container";
import { SERVICES } from "@/content/services";
import { DUMPSTER_SIZES } from "@/content/dumpster-sizes";

export function Footer() {
  const featuredServices = SERVICES.slice(0, 8);
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="font-[family-name:var(--font-manrope)] font-extrabold text-2xl">
              U.S. <span className="text-[var(--color-orange)]">Carting</span>
            </div>
            <p className="mt-3 text-white/70 leading-relaxed max-w-sm">
              Roll-off dumpsters and full-service junk removal across Fairfield County,
              Westchester, and beyond. Family owned. Licensed and insured. Delivering
              dumpsters with a smile since 2014.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={16} className="mt-0.5 text-[var(--color-orange)]" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={SITE.phoneTel}
                  className="flex items-center gap-2 text-white hover:text-[var(--color-orange)]"
                >
                  <Phone size={16} className="text-[var(--color-orange)]" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-2 text-white hover:text-[var(--color-orange)]"
                >
                  <Mail size={16} className="text-[var(--color-orange)]" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[var(--color-orange)] hover:text-white">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Dumpster Sizes</h4>
            <ul className="space-y-2 text-sm">
              {DUMPSTER_SIZES.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/dumpster-sizes/${d.slug}`}
                    className="text-white/70 hover:text-white"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/what-fits" className="text-white/70 hover:text-white">
                  What Fits
                </Link>
              </li>
              <li>
                <Link
                  href="/accepted-materials"
                  className="text-white/70 hover:text-white"
                >
                  Accepted Materials
                </Link>
              </li>
              <li>
                <Link
                  href="/prohibited-materials"
                  className="text-white/70 hover:text-white"
                >
                  Prohibited Items
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link href="/why-choose-us" className="text-white/70 hover:text-white">Why Choose Us</Link></li>
              <li><Link href="/how-it-works" className="text-white/70 hover:text-white">How It Works</Link></li>
              <li><Link href="/reviews" className="text-white/70 hover:text-white">Reviews</Link></li>
              <li><Link href="/gallery" className="text-white/70 hover:text-white">Gallery</Link></li>
              <li><Link href="/pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              <li><Link href="/commercial" className="text-white/70 hover:text-white">Commercial</Link></li>
              <li><Link href="/residential" className="text-white/70 hover:text-white">Residential</Link></li>
              <li><Link href="/locations" className="text-white/70 hover:text-white">Service Areas</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              <li><Link href="/get-a-quote" className="text-[var(--color-orange)] hover:text-white">Get A Quote →</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 mb-6 border-white/10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Family
            owned & locally operated. Licensed & insured.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
