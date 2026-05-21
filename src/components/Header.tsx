"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const NAV = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Roll-Off Dumpster Rental", href: "/services/roll-off-dumpster-rental" },
      { label: "Junk Removal", href: "/services/junk-removal" },
      { label: "Residential Clean-Outs", href: "/services/residential-cleanouts" },
      { label: "Construction Debris", href: "/services/construction-debris-removal" },
      { label: "Light Demolition", href: "/services/light-demolition" },
      { label: "Estate Clean-Outs", href: "/services/estate-cleanouts" },
      { label: "All Services →", href: "/services" },
    ],
  },
  {
    label: "Dumpster Sizes",
    href: "/dumpster-sizes",
    children: [
      { label: "10 Yard Dumpster", href: "/dumpster-sizes/10-yard-dumpster" },
      { label: "15 Yard Dumpster", href: "/dumpster-sizes/15-yard-dumpster" },
      { label: "20 Yard Dumpster", href: "/dumpster-sizes/20-yard-dumpster" },
      { label: "30 & 40 Yard Dumpster", href: "/dumpster-sizes/30-40-yard-dumpster" },
      { label: "What Fits in Each Size →", href: "/what-fits" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
  },
  {
    label: "Locations",
    href: "/locations",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-shadow",
        scrolled && "shadow-sm border-b border-[var(--color-line)]"
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-xl md:text-2xl text-[var(--color-ink)]">
            U.S. <span className="text-[var(--color-orange)]">Carting</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-orange)] flex items-center gap-1"
              >
                {item.label}
                {item.children ? <ChevronDown size={14} /> : null}
              </Link>
              {item.children ? (
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute top-full left-0 w-72 bg-white border border-[var(--color-line)] rounded-xl shadow-lg p-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-3 py-2 text-sm rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 text-sm font-bold text-[var(--color-ink)] hover:text-[var(--color-orange)]"
          >
            <Phone size={16} className="text-[var(--color-orange)]" />
            {SITE.phone}
          </a>
          <Link href="/get-a-quote" className="btn-primary text-sm">
            Get A Quote
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-md text-[var(--color-ink)]"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto md:hidden">
          <div className="container-x flex h-16 items-center justify-between border-b border-[var(--color-line)]">
            <span className="font-[family-name:var(--font-manrope)] font-extrabold text-xl text-[var(--color-ink)]">
              U.S. <span className="text-[var(--color-orange)]">Carting</span>
            </span>
            <button
              aria-label="Close menu"
              className="p-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              <X size={26} />
            </button>
          </div>
          <div className="container-x py-6">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-bold text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-[var(--color-steel)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="hairline my-4" />
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-bold text-[var(--color-ink)]"
              >
                About
              </Link>
              <Link
                href="/reviews"
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-bold text-[var(--color-ink)]"
              >
                Reviews
              </Link>
              <Link
                href="/faq"
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-bold text-[var(--color-ink)]"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-bold text-[var(--color-ink)]"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <a href={SITE.phoneTel} className="btn-secondary">
                <Phone size={16} /> Call {SITE.phone}
              </a>
              <Link href="/get-a-quote" onClick={() => setOpen(false)} className="btn-primary">
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
