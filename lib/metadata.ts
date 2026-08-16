import type { Metadata } from "next";
import { SITE } from "./constants";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

// CTR-optimised title overrides for high-impression service pages
const SERVICE_TITLE_OVERRIDES: Record<string, string> = {
  "flat-roof-repairs": "Flat Roof Repairs Liverpool — EPDM, GRP & Felt Specialist | Free Quote",
  "emergency-roof-repairs": "Emergency Roofer Liverpool — 24/7, 60-Min Response | 07845 463877",
  "roof-repairs": "Roof Repairs Liverpool — All Roof Types | From £150 | Free Quote",
  "roof-cleaning": "Roof Cleaning Liverpool — Moss & Algae Removal | From £250 | Free Quote",
  "gutter-cleaning": "Gutter Cleaning Liverpool — Blocked Gutters Cleared | From £60 | Free Quote",
  "gutter-repairs": "Gutter Repairs Liverpool — UPVC & Cast Iron | Fast Response | Free Quote",
  "fascias-and-soffits": "Fascias & Soffits Liverpool — UPVC Supply & Fit | Free Quote",
  "leadwork": "Leadwork Liverpool — Chimney Flashing & Lead Valley Specialists | Free Quote",
  "commercial-roof-cleaning": "Commercial Roof Cleaning Liverpool — Industrial & Flat Roof Specialists",
  "roof-moss-removal": "Roof Moss Removal Liverpool — Biocide Treatment Included | Free Quote",
  "slate-roof-cleaning": "Slate Roof Cleaning Liverpool — Safe Soft Wash for Victorian Homes",
  "tile-roof-cleaning": "Tile Roof Cleaning Liverpool — Clay & Concrete Tile Specialists | Free Quote",
  "exterior-painting": "Exterior Painting Liverpool — Render, UPVC & Masonry | Free Quote",
  "brickwork": "Brickwork & Repointing Liverpool — Local Bricklayers | Free Quote",
  "property-maintenance": "Property Maintenance Liverpool — Full Exterior Services | Free Quote",
};

// CTR-optimised description overrides for high-impression service pages
const SERVICE_DESC_OVERRIDES: Record<string, string> = {
  "flat-roof-repairs": `Liverpool's flat roof specialists. We repair and replace felt, EPDM rubber and GRP fibreglass flat roofs on extensions, garages, and commercial properties. EPDM carries a 20-year guarantee. Call ${SITE.phoneDisplay} for a free survey.`,
  "emergency-roof-repairs": `Roof emergency in Liverpool? Call ${SITE.phoneDisplay} now — we answer 24/7, 365 days. Targeting 60-minute response across all Merseyside postcodes. Storm damage, active leaks, fallen chimneys — we fix it fast.`,
  "roof-repairs": `Liverpool's trusted roofers for all roof types. Missing tiles, cracked slates, failed flashings, ridge tile repointing — from £150 with a 10-year workmanship guarantee. Free inspection, no hidden costs. Call ${SITE.phoneDisplay}.`,
  "roof-cleaning": `Professional roof cleaning across Liverpool and Merseyside using safe soft wash and steam methods. Removes moss, algae and lichen without damaging tiles. Biocide treatment inhibits regrowth for 5–10 years. Free survey — from £250.`,
  "gutter-cleaning": `Blocked gutters in Liverpool? We clear all types — UPVC, cast iron, aluminium — across all of Merseyside. Includes flush test and condition report. Prevents wall damp and fascia rot. From £60. Call ${SITE.phoneDisplay} for a free quote.`,
  "gutter-repairs": `Leaking or overflowing gutters in Liverpool? We repair and replace all gutter types including cast iron, UPVC and aluminium. Fast response across Merseyside. Free survey and written quote — call ${SITE.phoneDisplay}.`,
  "fascias-and-soffits": `New fascias and soffits for Liverpool homes. UPVC supply and fit in white, anthracite grey and woodgrain. Low-maintenance, guaranteed, and fitted by our own teams. Free survey across Liverpool and Merseyside — call ${SITE.phoneDisplay}.`,
};

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}: MetadataOptions = {}): Metadata {
  const pageTitle = title
    ? title
    : `${SITE.name} | Liverpool's Trusted Roofing Specialists`;

  const pageDescription =
    description ||
    "Expert roofing repairs, roof cleaning, gutter services and property maintenance across Liverpool and Merseyside. Free quotes, 24/7 emergency response.";

  const pageUrl = `${SITE.url}${path}`;
  const ogImage = image || `${SITE.url}/logo.webp`;

  const baseKeywords = [
    "roofing Liverpool",
    "roofer Liverpool",
    "roof repairs Liverpool",
    "roofing contractor Liverpool",
    "Sefton Roofing",
    "Liverpool roofing services",
    "Merseyside roofer",
    "roof cleaning Liverpool",
    "gutter cleaning Liverpool",
  ];

  return {
    // absolute bypasses Next.js layout template so the title is exactly what we craft
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: [...baseKeywords, ...keywords].join(", "),
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "Home Services",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: pageUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE.name,
      locale: "en_GB",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      creator: "@seftonroofing",
    },
    verification: {
      google: "789bd5951d6ca0e9",
    },
    other: {
      "geo.region": "GB-LIV",
      "geo.placename": "Liverpool",
      "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
      "ICBM": `${SITE.geo.lat}, ${SITE.geo.lng}`,
    },
  };
}

export function generateServiceMetadata(
  serviceName: string,
  serviceSlug: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = SERVICE_TITLE_OVERRIDES[serviceSlug]
    ?? `${serviceName} Liverpool — Expert Local Service | ${SITE.shortName}`;
  const desc = SERVICE_DESC_OVERRIDES[serviceSlug] ?? description;
  return generateMetadata({
    title,
    description: desc,
    path: `/services/${serviceSlug}`,
    keywords,
    type: "website",
  });
}

export function generateAreaMetadata(
  areaName: string,
  areaSlug: string,
  geo?: { lat: number; lng: number },
  postcode?: string
): Metadata {
  const base = generateMetadata({
    title: `Roofers ${areaName} — Emergency, Repairs & Roof Cleaning | ${SITE.shortName}`,
    description: `Trusted local roofers in ${areaName}${postcode ? ` (${postcode})` : ""}. Roof repairs, emergency roofing, roof cleaning, gutter services and fascias. 14+ years local experience. Free quotes — call ${SITE.phoneDisplay}.`,
    path: `/areas/${areaSlug}`,
    keywords: [
      `roofer ${areaName}`,
      `roofers ${areaName}`,
      `roof repairs ${areaName}`,
      `roofing ${areaName}`,
      `emergency roofer ${areaName}`,
      `gutter cleaning ${areaName}`,
      `roof cleaning ${areaName}`,
      `${areaName} roofing company`,
      `${areaName} roofing contractor`,
    ],
  });

  if (geo) {
    base.other = {
      "geo.region": "GB-LIV",
      "geo.placename": `${areaName}, Merseyside`,
      "geo.position": `${geo.lat};${geo.lng}`,
      "ICBM": `${geo.lat}, ${geo.lng}`,
    };
  }

  return base;
}
