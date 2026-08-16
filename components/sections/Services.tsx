import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Hammer, AlertTriangle, Sparkles, Leaf, Droplets, Wind,
  Layers, Triangle, Grid3X3, LayoutGrid, Factory,
  ArrowRight, CheckCircle,
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Hammer, AlertTriangle, Sparkles, Leaf, Droplets, Wind,
  Layers, Triangle, Grid3X3, LayoutGrid, Factory,
};

const cleaningServices = services.filter((s) => s.category === "cleaning" || s.category === "commercial");
const repairServices = services.filter((s) => s.category === "repair");

export function Services() {
  return (
    <section
      className="py-20 bg-white"
      aria-label="Roof cleaning and roofing services in Liverpool"
      id="services"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange mx-auto mb-4 w-fit">
            Liverpool Roof Cleaning Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-navy mb-4">
            Professional Roof Cleaning
            <br />
            <span className="text-gradient-orange">Across Liverpool & Merseyside</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Specialist roof cleaning, moss removal, soft washing and steam cleaning —
            safe methods that restore your roof and prevent regrowth for years.
            Roof repairs and flat roof work available too.
          </p>
        </div>

        {/* Roof Cleaning — Primary featured grid */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-brand-orange rounded" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Roof Cleaning Services
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cleaningServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group card-base p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  {service.popular && (
                    <div className="badge-orange mb-3 w-fit">Most Popular</div>
                  )}

                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description.slice(0, 110)}...
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-brand-orange font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Repairs — compact secondary section */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-brand-navy rounded" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy">
              Roof Repairs & Specialist Work
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {repairServices.map((service) => {
              const Icon = iconMap[service.icon] || Hammer;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group",
                    service.emergency && "border border-brand-red/20"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                    service.emergency ? "bg-brand-red/10" : "bg-brand-orange/10"
                  )}>
                    <Icon className={cn("w-4 h-4", service.emergency ? "text-brand-red" : "text-brand-orange")} />
                  </div>
                  <div>
                    <span className="text-slate-700 text-sm font-semibold group-hover:text-brand-orange transition-colors block">
                      {service.shortName}
                    </span>
                    {service.emergency && (
                      <span className="text-brand-red text-xs font-medium">24/7</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link href="/services" className="btn-navy">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
