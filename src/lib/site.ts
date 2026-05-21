export const SITE = {
  name: "U.S. Carting",
  legalName: "US Carting & Junk",
  tagline: "Dumpsters & Junk Removal — Delivered With A Smile Since 2014",
  shortTagline: "Roll-off dumpsters & full-service junk removal.",
  founded: 2014,
  phone: "(917) 664-4794",
  phoneRaw: "+19176644794",
  phoneTel: "tel:+19176644794",
  smsTel: "sms:+19176644794",
  email: "info@uscarting.com",
  emailHref: "mailto:info@uscarting.com",
  address: {
    street: "37 S Water St",
    city: "Greenwich",
    region: "CT",
    postal: "06830",
    country: "US",
    full: "37 S Water St, Greenwich, CT 06830",
    lat: 41.0265,
    lng: -73.6275,
  },
  hours: [
    { day: "Mon–Sat", time: "7:00 AM – 6:00 PM" },
    { day: "Sun", time: "Closed (24/7 for emergencies)" },
  ],
  url: "https://www.uscarting.com",
  vercelUrl: "https://uscarting.vercel.app",
} as const;

export const GHL_FORMS = {
  contact: {
    id: "5YCB9iHh1m5tm8Amkb2I",
    name: "Contact Form",
    height: 828,
  },
  junk: {
    id: "ZR6qrMHXEewyIyxaVyLj",
    name: "Junk removal QUOTE - GHL Form to site ",
    height: 1300,
  },
  dumpster: {
    id: "C9RnwG7Br1T0dEYqiot7",
    name: "DUMPSTER RENTAL INSTANT QUOTE - GHL form to connect with site ",
    height: 1300,
  },
} as const;

export type FormKind = keyof typeof GHL_FORMS;
