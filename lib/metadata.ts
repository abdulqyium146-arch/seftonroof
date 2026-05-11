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
    ? `${title} | ${SITE.shortName} Liverpool`
    : `${SITE.name} | Liverpool's Trusted Roofing Specialists`;

  const pageDescription =
    description ||
    "Expert roofing repairs, roof cleaning, gutter services and property maintenance across Liverpool and Merseyside. Free quotes, 24/7 emergency response.";

  const pageUrl = `${SITE.url}${path}`;
  const ogImage = image || `${SITE.url}/og-image.jpg`;

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
    title: pageTitle,
    description: pageDescription,
    keywords: [...baseKeywords, ...keywords].join(", "),
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
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
      google: "your-google-verification-code",
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
  return generateMetadata({
    title: `${serviceName} Liverpool`,
    description,
    path: `/services/${serviceSlug}`,
    keywords,
    type: "website",
  });
}

export function generateAreaMetadata(
  areaName: string,
  areaSlug: string
): Metadata {
  return generateMetadata({
    title: `Roofing Services ${areaName}`,
    description: `Expert roofing repairs, cleaning and property maintenance in ${areaName}, Liverpool. Local roofers with 14+ years experience. Free quotes, 24/7 emergency response.`,
    path: `/areas/${areaSlug}`,
    keywords: [
      `roofing ${areaName}`,
      `roofer ${areaName}`,
      `roof repairs ${areaName}`,
      `gutter cleaning ${areaName}`,
      `roof cleaning ${areaName}`,
    ],
  });
}
