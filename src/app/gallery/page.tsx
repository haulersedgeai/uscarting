import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery — Dumpsters, Trucks, and Real Jobs",
  description:
    "A look at our roll-off cans, trucks, and recent jobs across CT and Westchester.",
};

const IMAGES: { src: string; alt: string; caption: string }[] = [
  { src: "/images/hero-truck.webp", alt: "U.S. Carting roll-off truck", caption: "Our roll-off truck on a drop" },
  { src: "/images/dumpster-10.png", alt: "10 yard dumpster", caption: "10 yard — tight driveways, small jobs" },
  { src: "/images/dumpster-15.png", alt: "15 yard dumpster", caption: "15 yard — mid-size remodels" },
  { src: "/images/dumpster-20.png", alt: "20 yard dumpster", caption: "20 yard — whole-house renovations" },
  { src: "/images/dumpster-30-40.png", alt: "30 to 40 yard dumpster", caption: "30/40 yard — major demo and commercial" },
  { src: "/images/junk-removal.png", alt: "Junk removal job", caption: "Full-service junk removal in action" },
  { src: "/images/junk-hauling.png", alt: "Junk hauling truck", caption: "Loading the truck on a clean-out" },
  { src: "/images/demo-1.png", alt: "Demo project", caption: "Light demolition project" },
  { src: "/images/demo-2.png", alt: "Demo project", caption: "Demo cleanup" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The trucks, the cans, and the real work."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-line)]">
              <div className="aspect-[4/3] relative bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-[var(--color-ink)]">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
