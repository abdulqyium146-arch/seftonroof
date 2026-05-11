import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Liverpool's Trusted Roofing Specialists`,
    template: `%s | ${SITE.shortName} Liverpool`,
  },
  description: SITE.description,
  keywords:
    "roofing Liverpool, roofer Liverpool, roof repairs Liverpool, roof cleaning Liverpool, gutter cleaning Liverpool, Sefton Roofing, emergency roofing Liverpool, Merseyside roofer",
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
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
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "geo.region": "GB-LIV",
    "geo.placename": "Liverpool",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    "ICBM": `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1628" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1628" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head />
      <body className="antialiased">
        <SchemaOrg schema={generateLocalBusinessSchema()} />
        <SchemaOrg schema={generateWebSiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
