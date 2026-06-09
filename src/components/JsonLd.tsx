import { SITE } from "@/lib/site";
import type { Faq } from "@/content/faqs";

function emit(data: object) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: Faq[] }) {
  if (!items?.length) return null;
  return emit({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  });
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  if (!items?.length) return null;
  return emit({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  });
}

export function ProductJsonLd({
  name,
  description,
  url,
  price,
  image,
  sku,
  priceCurrency = "USD",
  itemCondition = "https://schema.org/NewCondition",
  availability = "https://schema.org/InStock",
}: {
  name: string;
  description: string;
  url: string;
  price: number;
  image?: string;
  sku?: string;
  priceCurrency?: string;
  itemCondition?: string;
  availability?: string;
}) {
  return emit({
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    sku: sku ?? name,
    image: image ? `${SITE.url}${image}` : undefined,
    brand: { "@type": "Brand", name: "U.S. Carting" },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}${url}`,
      priceCurrency,
      price,
      availability,
      itemCondition,
      seller: { "@id": `${SITE.url}#business` },
    },
  });
}

export function PriceRangeJsonLd({
  name,
  description,
  url,
  lowPrice,
  highPrice,
  priceCurrency = "USD",
}: {
  name: string;
  description: string;
  url: string;
  lowPrice: number;
  highPrice: number;
  priceCurrency?: string;
}) {
  return emit({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${url}`,
    provider: { "@id": `${SITE.url}#business` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency,
      lowPrice,
      highPrice,
      offerCount: 5,
    },
  });
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return emit({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${url}`,
    serviceType: serviceType ?? name,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
      { "@type": "AdministrativeArea", name: "Westchester County, NY" },
    ],
  });
}
