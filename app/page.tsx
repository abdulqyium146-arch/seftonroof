import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateFAQSchema, generateWebPageSchema, generatePageSpeakableSchema, generateOrganizationEEATSchema } from "@/lib/schema";
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
    images: [{ url: `${SITE.url}/logo.webp`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(globalFaqs.slice(0, 10));

  const webPageSchema = generateWebPageSchema({
    url: SITE.url,
    name: `${SITE.name} | Liverpool's Trusted Roofing Specialists`,
    description: "Liverpool's highest-rated roofing company. Expert roof repairs, cleaning, gutter services and property maintenance across Merseyside. Free quotes · 24/7 emergency · 10-year guarantee.",
    type: "WebPage",
    datePublished: "2010-01-01",
    dateModified: "2026-05-01",
    audience: "Liverpool and Merseyside homeowners, landlords, and commercial property managers",
  });

  const speakableSchema = generatePageSpeakableSchema(SITE.url, ["h1", "#speakable-description", "h2"]);
  const organizationEEATSchema = generateOrganizationEEATSchema();

  return (
    <>
      <SchemaOrg schema={organizationEEATSchema} />
      <SchemaOrg schema={webPageSchema} />
      <SchemaOrg schema={speakableSchema} />
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

      {/* 8. Real project work gallery */}
      <WorkGallery />

      {/* 9. Service areas */}
      <ServiceAreas />

      {/* 9. Liverpool coverage map */}
      <section className="py-16 bg-slate-50" aria-label="Liverpool service area map">
        <div className="container-xl">
          <div className="text-center mb-10">
            <div className="badge-orange mb-4 w-fit mx-auto">Our Coverage Area</div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-3">
              Serving Liverpool &amp; Merseyside
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Based in Waterloo, we cover all of Liverpool and the surrounding Merseyside area — typically on-site within 60 minutes.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-premium border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152269.15539195805!2d-2.9185897!3d53.393262799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool%2C%20UK!5e0!3m2!1sen!2s!4v1778479862471!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sefton Roofing service area — Liverpool and Merseyside"
            />
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <FAQ limit={10} />

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}
