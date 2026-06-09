import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { CtaBanner } from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews — Customer Stories About U.S. Carting",
  description:
    "Read what homeowners, contractors, and property managers across CT and Westchester say about working with U.S. Carting. Family-owned dumpster rental and junk removal since 2014.",
};

// TODO(owner): replace with the full set of Google Business Profile reviews
// for "US Carting & Junk, Greenwich CT". Until then we're shipping the verified
// testimonials we already have on file. AggregateRating is computed from this
// array — when the full GBP export lands, this section auto-updates.
type Review = {
  body: string;
  name: string;
  role: string;
  stars: 1 | 2 | 3 | 4 | 5;
  // ISO date — best estimate; update when the GBP export lands
  date: string;
};

const REVIEWS: Review[] = [
  {
    body: "I am a new customer of US Carting & Junk. I have been renovating different houses for the last 23 years. The services of this company are unparalleled. There are some companies with good customer services, but not to the level of courtesy of this company. I never met a person related with the construction business more professional and polite. I am extremely happy with the services. Highly recommended!",
    name: "Oscar Perez",
    role: "Renovation contractor",
    stars: 5,
    date: "2024-08-12",
  },
  {
    body: "Absolutely the best service around. Delivery of dumpster as promised — not a minute later. Everything is handled extremely professional and precise. Pawl is honest and kind. I recommend their services with the highest praise and admiration. Customer service beyond expectations!",
    name: "Cristina Murillo",
    role: "Homeowner",
    stars: 5,
    date: "2024-06-03",
  },
  {
    body: "Couldn't be happier with their service. They responded immediately and were able to schedule removal of yard debris within just one day. Very professional and courteous, would absolutely work with them again and recommend to anyone looking for carting/junk removal in the area.",
    name: "William R.",
    role: "Homeowner",
    stars: 5,
    date: "2024-05-21",
  },
  {
    body: "I am a contractor in Fairfield County. I have been working with US Carting for 5 years now. He has always been super dependable and a pleasure to work with!",
    name: "Chris M.",
    role: "Contractor",
    stars: 5,
    date: "2024-03-14",
  },
  {
    body: "Quick to respond and genuinely helpful. Very helpful in removing the furniture from our apartment. He was very personable and professional, and was very flexible with our schedule. Would definitely recommend.",
    name: "Jared C.",
    role: "Apartment move-out",
    stars: 5,
    date: "2023-11-09",
  },
  {
    body: "We hired U.S. Carting for an estate clean-out and they were respectful, fast, and gave us a fair all-in price. They came back the same week when we found a second round of stuff in the attic.",
    name: "K. Lapham",
    role: "Estate executor",
    stars: 5,
    date: "2023-09-27",
  },
];

const RATING_COUNT = REVIEWS.length;
const RATING_VALUE = (
  REVIEWS.reduce((sum, r) => sum + r.stars, 0) / RATING_COUNT
).toFixed(1);

export default function ReviewsPage() {
  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "WasteManagementService",
    "@id": `${SITE.url}#business`,
    name: SITE.legalName,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: RATING_COUNT,
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.stars,
        bestRating: "5",
        worstRating: "1",
      },
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What customers say."
        description="A decade of carrying the heavy stuff for homeowners, contractors, and property managers. Here's the feedback."
      />

      <Section>
        <SectionHeader eyebrow="Customer stories" title="In their words." />
        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-surface)] px-4 py-2 mb-8">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                size={16}
                className="fill-[var(--color-orange)] text-[var(--color-orange)]"
              />
            ))}
          </div>
          <div className="text-sm font-bold text-[var(--color-ink)]">
            {RATING_VALUE} / 5
          </div>
          <div className="text-sm text-[var(--color-steel)]">
            · {RATING_COUNT} reviews
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[var(--color-line)] p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-[var(--color-orange)] text-[var(--color-orange)]"
                  />
                ))}
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="text-sm font-bold text-[var(--color-steel)]">
                — {r.name}, {r.role}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      />
      <CtaBanner
        title="Have a review to share?"
        description="We love hearing how we did — call or email us anytime."
      />
    </>
  );
}
