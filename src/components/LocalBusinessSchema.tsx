import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/content/locations";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WasteManagementService",
    "@id": `${SITE.url}#business`,
    name: SITE.legalName,
    alternateName: ["U.S. Carting", "US Carting", "US Carting & Junk"],
    description:
      "Roll-off dumpster rentals and full-service junk removal across Fairfield County, Westchester County, and surrounding areas. Family owned. Licensed and insured.",
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    image: `${SITE.url}/images/hero-truck.webp`,
    logo: `${SITE.url}/images/logo.png`,
    priceRange: "$$",
    foundingDate: `${SITE.founded}-01-01`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
      { "@type": "AdministrativeArea", name: "Westchester County, NY" },
      { "@type": "AdministrativeArea", name: "New Haven County, CT" },
      { "@type": "AdministrativeArea", name: "Hartford County, CT" },
      { "@type": "AdministrativeArea", name: "Litchfield County, CT" },
      { "@type": "AdministrativeArea", name: "Middlesex County, CT" },
      { "@type": "AdministrativeArea", name: "New London County, CT" },
      ...LOCATIONS.map((l) => ({
        "@type": "City",
        name: l.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${l.county}, ${l.state}`,
        },
      })),
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
