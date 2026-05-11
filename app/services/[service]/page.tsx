import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone, CheckCircle, ArrowRight, Star, Shield, Clock,
  MapPin, Award,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { areas } from "@/data/areas";
import { testimonials } from "@/data/testimonials";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/schema";
import { generateServiceMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};
  return generateServiceMetadata(
    service.name,
    service.slug,
    service.description,
    service.keywords
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const serviceSchema = generateServiceSchema({
    name: `${service.name} Liverpool`,
    description: service.description,
    slug: service.slug,
    price: service.priceFrom,
  });

  const faqSchema = generateFAQSchema(service.faqs);

  const howToSchema = generateHowToSchema(service.name, service.slug, service.process);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
    { name: `${service.name} Liverpool`, url: `${SITE.url}/services/${service.slug}` },
  ]);

  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const serviceReviews = testimonials.filter((t) =>
    t.service.toLowerCase().includes(service.shortName.toLowerCase())
  ).slice(0, 3);

  const displayReviews = serviceReviews.length > 0 ? serviceReviews : testimonials.slice(0, 3);

  return (
    <>
      <SchemaOrg schema={serviceSchema} />
      <SchemaOrg schema={howToSchema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Hero */}
      <section className={`py-20 ${service.emergency ? "bg-brand-red" : "bg-brand-navy"}`}>
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              {service.emergency && (
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-4">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">24/7 Emergency Service</span>
                </div>
              )}
              {!service.emergency && (
                <div className="badge-orange mb-4 w-fit">{service.shortName} Liverpool</div>
              )}

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" id="speakable-title">
                {service.name}{" "}
                <span className={service.emergency ? "text-yellow-300" : "text-gradient-orange"}>
                  in Liverpool
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8" id="speakable-description">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {service.benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    {benefit}
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

              {service.priceFrom && (
                <p className="mt-4 text-slate-400 text-sm">
                  From <strong className="text-white">£{service.priceFrom}</strong> · Free site inspection · No hidden costs
                </p>
              )}
            </div>

            {/* Trust panel */}
            <div className="space-y-4">
              {/* Social proof */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-white font-bold ml-2">4.9/5</span>
                </div>
                <blockquote className="text-slate-300 text-sm italic leading-relaxed mb-3">
                  &ldquo;{displayReviews[0]?.review?.slice(0, 150)}...&rdquo;
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {displayReviews[0]?.author?.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{displayReviews[0]?.author}</div>
                    <div className="text-slate-500 text-xs">{displayReviews[0]?.location}</div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, text: "Fully Insured" },
                  { icon: Award, text: "10-Year Guarantee" },
                  { icon: Clock, text: "Same-Day Response" },
                  { icon: MapPin, text: "Liverpool Local" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="glass-card p-4 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-brand-orange" />
                    <span className="text-white text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-brand-navy mb-6">
                {service.name} — Liverpool Expert Service
              </h2>
              <div className="prose-roofing">
                <p>{service.longDescription}</p>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-brand-navy mb-5">
                  What&apos;s Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA box */}
              <div className="bg-brand-navy text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-2">
                  Get a Free {service.shortName} Quote
                </h3>
                <p className="text-slate-400 text-sm mb-5">
                  Free site inspection · Written quote · No obligation
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-colors mb-3"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                >
                  Request Free Quote Online
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10 text-slate-400 text-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    10-year workmanship guarantee
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    Fully insured operatives
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    No hidden costs
                  </div>
                </div>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-navy mb-3 text-sm uppercase tracking-wider">
                    Related Services
                  </h3>
                  <div className="space-y-2">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/services/${related.slug}`}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-brand-orange/5 hover:border-brand-orange/20 border border-transparent transition-all text-sm"
                      >
                        <span className="text-brand-navy font-medium">{related.name}</span>
                        <ArrowRight className="w-4 h-4 text-brand-orange" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="container-xl">
          <h2 className="text-3xl font-black text-brand-navy mb-8 text-center">
            Our {service.name} Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-card relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-orange text-white font-black text-sm rounded-xl flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="font-bold text-brand-navy mb-2 mt-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-brand-navy mb-6">
                Why Liverpool Homeowners Choose Sefton Roofing
                <br />for {service.name}
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy rounded-3xl p-8">
              <div className="text-4xl font-black text-brand-orange mb-2">{SITE.rating}★</div>
              <div className="text-white font-bold text-xl mb-4">Liverpool&apos;s Highest-Rated Roofer</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Our {SITE.reviewCount}+ verified reviews from across Liverpool, Crosby, Formby,
                Bootle, and Walton reflect our commitment to quality on every single job.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Book Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service area links */}
      <section className="py-12 bg-slate-50">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-brand-navy mb-5">
            {service.name} Across Liverpool & Merseyside
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {areas.slice(0, 12).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="text-center p-3 bg-white border border-slate-100 rounded-xl text-slate-600 text-sm hover:border-brand-orange/30 hover:text-brand-orange transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-black text-brand-navy mb-8 text-center">
            {service.name} FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-brand-navy hover:bg-slate-50 transition-colors list-none">
                  <span>{faq.question}</span>
                  <ArrowRight className="w-5 h-5 text-brand-orange flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
