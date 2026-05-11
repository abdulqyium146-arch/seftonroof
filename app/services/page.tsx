import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Hammer, AlertTriangle, Sparkles, Filter } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roofing Services Liverpool",
  description:
    "Complete roofing and property maintenance services across Liverpool and Merseyside. Roof repairs, cleaning, guttering, flat roofs, fascias, leadwork and more. Free quotes.",
  alternates: { canonical: `${SITE.url}/services` },
};

const categories = [
  { id: "repair", label: "Roof Repairs", icon: Hammer },
  { id: "cleaning", label: "Roof Cleaning", icon: Sparkles },
  { id: "guttering", label: "Guttering", icon: Filter },
  { id: "maintenance", label: "Property Maintenance", icon: CheckCircle },
  { id: "commercial", label: "Commercial", icon: AlertTriangle },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Services", href: "/services" }]} />
          <div className="max-w-3xl mt-8">
            <div className="badge-orange mb-4 w-fit">Liverpool Roofing Specialists</div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              All Roofing & Property{" "}
              <span className="text-gradient-orange">Maintenance Services</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Expert roofing and property maintenance across Liverpool and Merseyside.
              From emergency repairs to routine cleaning — one trusted local company for everything.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${SITE.phone}`} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by category */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.id);
            if (!catServices.length) return null;
            const CatIcon = cat.icon;

            return (
              <div key={cat.id} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                    <CatIcon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy">{cat.label}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="card-base p-6 group hover:-translate-y-1 transition-all duration-300"
                    >
                      {service.emergency && (
                        <div className="badge-red mb-3 w-fit text-xs">24/7 Emergency</div>
                      )}
                      {service.popular && !service.emergency && (
                        <div className="badge-orange mb-3 w-fit text-xs">Popular</div>
                      )}
                      <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {service.description.slice(0, 110)}...
                      </p>
                      <div className="space-y-1 mb-4">
                        {service.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                            <span className="text-slate-600 text-xs">{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold group-hover:gap-2.5 transition-all">
                        View Service <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
