export type ServiceItem = {
  slug: string;
  category: "rental" | "junk" | "cleanout" | "demolition" | "specialty" | "commercial";
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatsIncluded: string[];
  items: string[];
  relatedSlugs?: string[];
  faq?: { q: string; a: string }[];
};

export type DumpsterSize = {
  slug: string;
  size: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  price: number;
  cubicYards: number;
  dimensions: string;
  weightLimit: string;
  includedTonnage: string;
  rentalPeriod: string;
  dailyRate?: string;
  bestFor: string[];
  whatFits: string[];
  whatDoesntFit: string[];
  commonUseCases: string[];
  intro: string;
  image: string;
  relatedSlugs?: string[];
};

export type LocationItem = {
  slug: string;
  name: string;
  fullName: string;
  type: "city" | "town" | "village";
  county: string;
  state: "CT" | "NY";
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  zipCodes?: string[];
};

export type CommercialItem = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatsIncluded: string[];
  bestFor: string[];
  faq?: { q: string; a: string }[];
};
