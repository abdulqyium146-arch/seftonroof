import { SITE } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: ["Sefton Roofing", "Sefton Roofing Liverpool"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.png`,
      width: 400,
      height: 120,
    },
    image: [
      `${SITE.url}/images/hero-roofing.jpg`,
      `${SITE.url}/images/roof-repairs-liverpool.jpg`,
      `${SITE.url}/images/team-sefton-roofing.jpg`,
    ],
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Liverpool" },
      { "@type": "Place", name: "Waterloo" },
      { "@type": "Place", name: "Crosby" },
      { "@type": "Place", name: "Bootle" },
      { "@type": "Place", name: "Sefton" },
      { "@type": "Place", name: "Formby" },
      { "@type": "Place", name: "Walton" },
      { "@type": "Place", name: "Everton" },
      { "@type": "Place", name: "Anfield" },
      { "@type": "Place", name: "Aintree" },
      { "@type": "Place", name: "Maghull" },
      { "@type": "Place", name: "Huyton" },
      { "@type": "Place", name: "Knowsley" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "14:00",
      },
    ],
    priceRange: "££",
    paymentAccepted: ["Cash", "Bank Transfer", "Credit Card"],
    currenciesAccepted: "GBP",
    foundingDate: SITE.founded,
    numberOfEmployees: { "@type": "QuantitativeValue", value: 12 },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.google,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing & Property Maintenance Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repairs Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Repairs Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fascias and Soffits Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roof Repairs Liverpool" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Maintenance Liverpool" } },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-GB",
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "City", name: "Liverpool" },
    url: `${SITE.url}/services/${service.slug}`,
    ...(service.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: service.price,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateReviewSchema(reviews: {
  author: string;
  rating: number;
  review: string;
  date: string;
}[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: r.review,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    itemReviewed: { "@id": `${SITE.url}/#organization` },
  }));
}

export function generateSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}
