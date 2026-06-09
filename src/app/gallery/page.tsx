import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery — Dumpsters, Trucks, and Real Jobs",
  description:
    "A look at our roll-off cans, trucks, and recent jobs across CT and Westchester.",
};

// TODO(owner): replace with real job-site photos. The images below are brand /
// product shots carried over from the legacy site. Drop new photos into
// /public/images/gallery/ and update the IMAGES list. Once at least 6 real job
// photos are live, flip `kind` to "real" and the coming-soon banner auto-hides.
type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  // "brand" = legacy product/brand shot; "real" = real job-site photo
  kind: "brand" | "real";
};

const IMAGES: GalleryImage[] = [
  // TODO(owner): replace with a real on-site truck photo
  { src: "/images/hero-truck.webp", alt: "U.S. Carting roll-off truck", caption: "Our roll-off truck on a drop", kind: "brand" },
  // TODO(owner): replace with photo of an actual 10-yard on a customer driveway
  { src: "/images/dumpster-10.png", alt: "10 yard dumpster", caption: "10 yard — tight driveways, small jobs", kind: "brand" },
  // TODO(owner): replace with photo of a real 15-yard delivery
  { src: "/images/dumpster-15.png", alt: "15 yard dumpster", caption: "15 yard — mid-size remodels", kind: "brand" },
  // TODO(owner): replace with photo of an actual 20-yard job
  { src: "/images/dumpster-20.png", alt: "20 yard dumpster", caption: "20 yard — whole-house renovations", kind: "brand" },
  // TODO(owner): replace with on-site 30/40-yard photo
  { src: "/images/dumpster-30-40.png", alt: "30 to 40 yard dumpster", caption: "30/40 yard — major demo and commercial", kind: "brand" },
  // TODO(owner): replace with real junk-removal action shot
  { src: "/images/junk-removal.png", alt: "Junk removal job", caption: "Full-service junk removal in action", kind: "brand" },
  // TODO(owner): replace with real loading photo
  { src: "/images/junk-hauling.png", alt: "Junk hauling truck", caption: "Loading the truck on a clean-out", kind: "brand" },
  // TODO(owner): replace with real demo project photo
  { src: "/images/demo-1.png", alt: "Demo project", caption: "Light demolition project", kind: "brand" },
  // TODO(owner): replace with real demo cleanup photo
  { src: "/images/demo-2.png", alt: "Demo project", caption: "Demo cleanup", kind: "brand" },
];

export default function GalleryPage() {
  const realCount = IMAGES.filter((i) => i.kind === "real").length;
  const showBanner = realCount < 6;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The trucks, the cans, and the real work."
      />

      <Section>
        {showBanner ? (
          <div className="mb-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-line)] p-5 text-sm text-[var(--color-steel)]">
            <strong className="text-[var(--color-ink)]">
              Real job-site photos coming soon.
            </strong>{" "}
            The shots below are brand and product images from our fleet — we&apos;re
            actively swapping them with real on-site work from Greenwich,
            Stamford, Scarsdale, and beyond. Want to see your project featured?
            Tell the crew on delivery day.
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className="rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-line)]"
            >
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

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <CtaBanner />
    </>
  );
}
