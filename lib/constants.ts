export const SITE = {
  name: "Sefton Roofing & Property Maintenance",
  shortName: "Sefton Roofing",
  tagline: "Liverpool's Trusted Roofing Specialists",
  description:
    "Expert roofing repairs, roof cleaning, flat roof repairs and leadwork across Liverpool and Merseyside. Free quotes, 24/7 emergency response.",
  url: "https://seftonroofing.co.uk",
  phone: "+447971321313",
  phoneDisplay: "07971 321313",
  email: "sefton-roofing@mail.com",
  address: {
    street: "Waterloo",
    city: "Liverpool",
    county: "Merseyside",
    postcode: "L22",
    country: "GB",
    countryFull: "United Kingdom",
  },
  geo: {
    lat: 53.4786,
    lng: -3.0258,
  },
  social: {
    facebook: "https://facebook.com/seftonroofing",
    instagram: "https://instagram.com/seftonroofing",
    google: "https://maps.google.com/?q=Sefton+Roofing+Liverpool",
  },
  founded: "2010",
  registrationNumber: "",
  vatNumber: "",
  openingHours: {
    weekday: "07:00–18:00",
    saturday: "07:00–14:00",
    sunday: "Emergency only",
    emergency: "24/7",
  },
  reviewCount: 127,
  rating: 4.9,
  projectsCompleted: 1850,
  yearsExperience: 14,
  responseTime: "60 minutes",
  guarantee: "10-year workmanship guarantee",
} as const;

export const COLORS = {
  navy: "#0B1628",
  navyLight: "#112040",
  navyMid: "#1A3058",
  orange: "#F05A28",
  orangeLight: "#FF7A4A",
  orangeDark: "#C8441A",
  red: "#DC2626",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_SLUGS = [
  "roof-repairs",
  "emergency-roof-repairs",
  "roof-cleaning",
  "roof-moss-removal",
  "roof-soft-washing",
  "roof-steam-cleaning",
  "flat-roof-repairs",
  "leadwork",
  "slate-roof-cleaning",
  "tile-roof-cleaning",
  "commercial-roof-cleaning",
] as const;

export const AREA_SLUGS = [
  "liverpool",
  "waterloo",
  "crosby",
  "bootle",
  "sefton",
  "formby",
  "walton",
  "everton",
  "anfield",
  "aintree",
  "kirkdale",
  "litherland",
  "maghull",
  "huyton",
  "prescot",
  "knowsley",
  "ormskirk",
  "fazakerley",
] as const;
