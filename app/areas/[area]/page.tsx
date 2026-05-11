import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, ArrowRight, Clock, Star } from "lucide-react";
import { areas, getAreaBySlug, getNearbyAreas } from "@/data/areas";
import { getServiceBySlug } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";
import { generateAreaMetadata } from "@/lib/metadata";
import { globalFaqs } from "@/data/faqs";
import { SITE } from "@/lib/constants";

interface AreaPageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);
  if (!area) return {};
  return generateAreaMetadata(area.name, area.slug);
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);
  if (!area) notFound();

  const nearbyAreas = getNearbyAreas(areaSlug);
  const popularServices = area.popularServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const areaFaqs = [
    {
      question: `How quickly can Sefton Roofing attend an emergency in ${area.name}?`,
      answer: `We aim to attend roofing emergencies in ${area.name} within 60 minutes of your call. Our team is based in Waterloo, Liverpool, meaning we can reach ${area.name} quickly. We operate 24/7, 365 days a year.`,
    },
    {
      question: `Do you offer free roof inspections in ${area.name}?`,
      answer: `Yes. We provide free, no-obligation roof inspections across ${area.name} and all of our coverage area. One of our experienced roofers will attend your property, assess the condition of your roof, and provide a detailed written quote — all at no cost.`,
    },
    {
      question: `What roofing services do you offer in ${area.name}?`,
      answer: `We offer a full range of roofing and property maintenance services in ${area.name}, including roof repairs, emergency roof repairs, roof cleaning, moss removal, gutter cleaning, gutter repairs, fascias and soffits, flat roof repairs, leadwork, brickwork, exterior painting, and general property maintenance.`,
    },
    ...globalFaqs.slice(0, 3),
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Service Areas", url: `${SITE.url}/areas` },
    { name: `${area.name} Roofing`, url: `${SITE.url}/areas/${area.slug}` },
  ]);

  const faqSchema = generateFAQSchema(areaFaqs);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SchemaOrg schema={localBusinessSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Areas", href: "/areas" },
              { label: area.name },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold">
                  {area.name}, {area.county}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" id="speakable-title">
                Roofing Services{" "}
                <span className="text-gradient-orange">{area.name}</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-6" id="speakable-description">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  `${SITE.responseTime} Emergency Response`,
                  "Free Roof Inspections",
                  "10-Year Guarantee",
                  "Fully Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="text-white text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${SITE.phone}`} className="btn-primary-lg">
                  <Phone className="w-5 h-5" />
                  Call {SITE.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Free Quote
                </Link>
              </div>
            </div>

            {/* Info panel */}
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h3 className="text-white font-bold text-lg mb-4">
                  Roofing in {area.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">Location</div>
                      <div className="text-slate-400 text-sm">{area.name}, {area.county}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">Emergency Response</div>
                      <div className="text-slate-400 text-sm">{SITE.responseTime} target across {area.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">{SITE.rating}★ Rating</div>
                      <div className="text-slate-400 text-sm">{SITE.reviewCount}+ verified reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm italic leading-relaxed mb-3">
                  &ldquo;{testimonials[0]?.review?.slice(0, 140)}...&rdquo;
                </blockquote>
                <div className="text-slate-500 text-xs">
                  — {testimonials[0]?.author}, {testimonials[0]?.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About this area */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-brand-navy mb-6">
                Roofing Services in {area.name}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {area.longDescription}
              </p>

              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Common Roofing Challenges in {area.name}
              </h3>
              <div className="space-y-3">
                {area.roofingChallenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular services */}
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-5">
                Most Popular Services in {area.name}
              </h3>
              <div className="space-y-3">
                {popularServices.map((service) => {
                  if (!service) return null;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all group"
                    >
                      <div>
                        <div className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                          {service.name}
                        </div>
                        <div className="text-slate-500 text-sm">{service.tagline}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-brand-orange flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/services"
                className="mt-4 flex items-center gap-2 text-brand-orange font-semibold text-sm"
              >
                View all our services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 bg-slate-50">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">
            We Also Cover Nearby Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/areas/${nearby.slug}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 text-sm hover:border-brand-orange/30 hover:text-brand-orange transition-all"
              >
                <MapPin className="w-4 h-4 text-brand-orange" />
                {nearby.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange text-sm font-medium hover:bg-brand-orange/20 transition-colors"
            >
              All Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Area FAQs */}
      <FAQ limit={6} />

      <FinalCTA />
    </>
  );
}
