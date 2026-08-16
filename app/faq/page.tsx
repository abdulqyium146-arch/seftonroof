import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateFAQSchema, generateWebPageSchema, generatePageSpeakableSchema } from "@/lib/schema";
import { globalFaqs } from "@/data/faqs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roofing FAQs Liverpool — Common Roofing Questions Answered",
  description:
    "Answers to the most common roofing questions from Liverpool homeowners. Emergency response times, costs, guarantees, roof types, and more — from Sefton Roofing.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const categories = [
  { id: "general", label: "General Questions", href: "#general" },
  { id: "repairs", label: "Roof Repairs", href: "#repairs" },
  { id: "emergency", label: "Emergency", href: "#emergency" },
  { id: "cleaning", label: "Roof Cleaning", href: "#cleaning" },
  { id: "guttering", label: "Guttering", href: "#guttering" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
];

export default function FAQPage() {
  const faqPageSchema = generateWebPageSchema({
    url: `${SITE.url}/faq`,
    name: "Roofing FAQs Liverpool — Common Roofing Questions Answered",
    description: "Answers to the most common roofing questions from Liverpool homeowners. Emergency response times, costs, guarantees, roof types, and more — from Sefton Roofing.",
    type: "FAQPage",
    dateModified: "2026-01-01",
    audience: "Liverpool homeowners with roofing questions",
  });
  const speakableSchema = generatePageSpeakableSchema(`${SITE.url}/faq`, ["h1", "h2", ".faq-answer"]);

  return (
    <>
      <SchemaOrg schema={generateFAQSchema(globalFaqs)} />
      <SchemaOrg schema={faqPageSchema} />
      <SchemaOrg schema={speakableSchema} />

      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <div className="max-w-2xl mt-8">
            <div className="badge-orange mb-4 w-fit">Common Questions</div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Liverpool Roofing{" "}
              <span className="text-gradient-orange">FAQs</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Everything Liverpool homeowners commonly ask about our roofing services,
              pricing, emergency response, and guarantees. Can&apos;t find your answer?
              Just call us.
            </p>
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="container-xl">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 text-sm font-medium transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <FAQ limit={globalFaqs.length} />

      {/* Still have questions */}
      <section className="py-12 bg-brand-navy text-center">
        <div className="container-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Still Have a Question?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Our Liverpool roofing team is always happy to answer any question about
            your roof, our services, or our pricing — no obligation required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="btn-primary"
            >
              Call {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-secondary">
              Send us a Message
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
