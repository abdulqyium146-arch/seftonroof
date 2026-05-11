import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateFAQSchema } from "@/lib/schema";
import { globalFaqs } from "@/data/faqs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Liverpool's Trusted Roofing Specialists`,
  description:
    "Liverpool's highest-rated roofing company. Expert roof repairs, cleaning, gutter services and property maintenance across Merseyside. Free quotes · 24/7 emergency · 10-year guarantee.",
  openGraph: {
    title: `${SITE.name} | Liverpool Roofing Specialists`,
    description:
      "Expert roofing services across Liverpool and Merseyside. Free quotes, 24/7 emergency response, 10-year guarantee.",
    url: SITE.url,
    images: [{ url: `${SITE.url}/og-image.jpg`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(globalFaqs.slice(0, 10));

  return (
    <>
      <SchemaOrg schema={faqSchema} />

      {/* 1. Premium hero */}
      <Hero />

      {/* 2. Emergency CTA bar */}
      <EmergencyCTA />

      {/* 3. Social proof stats */}
      <Stats />

      {/* 4. Services grid */}
      <Services />

      {/* 5. Why choose us */}
      <WhyChooseUs />

      {/* 6. Our process */}
      <Process />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Service areas */}
      <ServiceAreas />

      {/* 9. FAQs */}
      <FAQ limit={10} />

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}
