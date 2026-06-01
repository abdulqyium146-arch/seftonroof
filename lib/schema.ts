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
      url: `${SITE.url}/logo.webp`,
      width: 1275,
      height: 638,
      caption: `${SITE.name} logo`,
    },
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.webp`,
        width: 1275,
        height: 638,
        caption: "Sefton Roofing & Property Maintenance — Liverpool",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/roof-tile-repair-extension-liverpool.webp`,
        caption: "Roof tile repair and replacement on a Liverpool property extension",
        representativeOfPage: true,
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/gutter-replacement-after-merseyside-home.webp`,
        caption: "New UPVC guttering installation completed on a Merseyside home",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/fascia-soffit-installation-liverpool-merseyside.webp`,
        caption: "Fascia and soffit installation on a Liverpool roofline",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/solar-panel-roof-installation-liverpool.webp`,
        caption: "Solar panel roof installation on a Liverpool residential property",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/conservatory-roof-cleaning-liverpool.webp`,
        caption: "Conservatory roof cleaning service in Liverpool",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/work/new-upvc-guttering-installed-liverpool.webp`,
        caption: "Completed UPVC guttering installation on a Liverpool property",
      },
    ],
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    hasMap: `https://www.google.com/maps/search/?api=1&query=Sefton+Roofing+Waterloo+Liverpool`,
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
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      geoRadius: "30000",
    },
    areaServed: [
      { "@type": "City", name: "Liverpool", sameAs: "https://en.wikipedia.org/wiki/Liverpool" },
      { "@type": "AdministrativeArea", name: "Merseyside" },
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
      { "@type": "Place", name: "Kirkdale" },
      { "@type": "Place", name: "Litherland" },
      { "@type": "Place", name: "Prescot" },
      { "@type": "Place", name: "Ormskirk" },
      { "@type": "Place", name: "Fazakerley" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
      hoursAvailable: [
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
        {
          "@type": "OpeningHoursSpecification",
          name: "Emergency Line",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
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
    knowsAbout: [
      "Roof Repairs Liverpool",
      "Emergency Roof Repairs",
      "Flat Roof Repairs",
      "Roof Cleaning Liverpool",
      "Moss Removal",
      "Soft Washing",
      "Gutter Cleaning Liverpool",
      "Gutter Repairs",
      "Fascias and Soffits",
      "Leadwork",
      "Brickwork and Repointing",
      "Property Maintenance Liverpool",
      "Slate Roof Cleaning",
      "Commercial Roof Cleaning",
    ],
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
    areaServed: [
      { "@type": "City", name: "Liverpool" },
      { "@type": "AdministrativeArea", name: "Merseyside" },
    ],
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

export function generateHowToSchema(
  serviceName: string,
  serviceSlug: string,
  steps: { step: number; title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE.url}/services/${serviceSlug}/#howto`,
    name: `How We Carry Out ${serviceName} in Liverpool`,
    description: `Our step-by-step ${serviceName} process for Liverpool and Merseyside homeowners`,
    provider: { "@id": `${SITE.url}/#organization` },
    step: steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };
}

export function generateAreaPageSchema(area: {
  name: string;
  slug: string;
  county: string;
  postcode: string;
  description: string;
  geo: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    "@id": `${SITE.url}/areas/${area.slug}/#localbusiness`,
    name: `${SITE.shortName} — ${area.name}`,
    description: area.description,
    url: `${SITE.url}/areas/${area.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    hasMap: `https://www.google.com/maps/search/?api=1&query=Sefton+Roofing+${encodeURIComponent(area.name)}`,
    image: `${SITE.url}/images/hero-roofing.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.county,
      postalCode: area.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.geo.lat,
      longitude: area.geo.lng,
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    },
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
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
  };
}

export function generateItemListSchema(
  items: { name: string; url: string }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
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

// WebPage schema — signals freshness, links page to WebSite entity, supports AIO/GEO
export function generateWebPageSchema(options: {
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "FAQPage" | "ContactPage" | "ServicePage" | "CollectionPage";
  datePublished?: string;
  dateModified?: string;
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": options.type ?? "WebPage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
    ...(options.datePublished ? { datePublished: options.datePublished, dateModified: options.dateModified ?? options.datePublished } : {}),
    ...(options.audience ? { audience: { "@type": "Audience", audienceType: options.audience } } : {}),
  };
}

// Standalone SpeakableSpecification — tells voice / AEO engines which CSS selectors carry the primary answer
export function generatePageSpeakableSchema(pageUrl: string, cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "@id": `${pageUrl}#speakable`,
    cssSelector: cssSelectors,
    url: pageUrl,
  };
}

// E-E-A-T enhanced Organization — used on About page and high-authority placements
export function generateOrganizationEEATSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "RoofingContractor"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: ["Sefton Roofing", "Sefton Roofing Liverpool", "Sefton Roofing & Property Maintenance"],
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.founded,
    foundingLocation: {
      "@type": "Place",
      name: "Waterloo, Liverpool, UK",
      geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: "GB",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", value: 12 },
    slogan: SITE.tagline,
    description: SITE.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Public Liability Insurance — £5 Million Cover" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Employer's Liability Insurance" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "10-Year Workmanship Guarantee" },
    ],
    knowsAbout: [
      "Roof Repairs Liverpool",
      "Emergency Roof Repairs",
      "Flat Roof Repairs",
      "Roof Cleaning Liverpool",
      "Moss Removal",
      "Soft Washing",
      "Gutter Cleaning Liverpool",
      "Fascias and Soffits",
      "Leadwork",
      "Brickwork",
      "Property Maintenance",
      "Commercial Roof Cleaning",
      "EPDM Flat Roofing",
      "Victorian Slate Roofs",
    ],
    award: [
      `${SITE.rating}-star rated roofing contractor on Google (${SITE.reviewCount}+ reviews)`,
      `Liverpool's highest-rated roofing specialist, ${SITE.founded}–present`,
    ],
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.google],
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}
