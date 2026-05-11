import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Hammer, AlertTriangle, Sparkles, Leaf, Droplets, Wind,
  Filter, Wrench, Home, Layers, Triangle, Building2,
  Paintbrush, Palette, Brush, Settings, Grid3X3, LayoutGrid, Factory,
  ArrowRight, CheckCircle,
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Hammer, AlertTriangle, Sparkles, Leaf, Droplets, Wind,
  Filter, Wrench, Home, Layers, Triangle, Building2,
  Paintbrush, Palette, Brush, Settings, Grid3X3, LayoutGrid, Factory,
};

const featuredServices = services.filter((s) => s.popular || s.emergency).slice(0, 6);
const otherServices = services.filter((s) => !s.popular && !s.emergency);

export function Services() {
  return (
    <section
      className="py-20 bg-white"
      aria-label="Roofing and property maintenance services in Liverpool"
      id="services"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange mx-auto mb-4 w-fit">
            Liverpool Roofing Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-navy mb-4">
            Complete Roofing & Property
            <br />
            <span className="text-gradient-orange">Maintenance Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From emergency roof repairs to complete property maintenance — everything
            your Liverpool home needs from one trusted local team.
          </p>
        </div>

        {/* Featured services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "group card-base p-6 hover:-translate-y-1 transition-all duration-300",
                  service.emergency && "border-2 border-brand-red/30 hover:border-brand-red/60"
                )}
              >
                {service.emergency && (
                  <div className="badge-red mb-3 w-fit">24/7 Emergency</div>
                )}
                {service.popular && !service.emergency && (
                  <div className="badge-orange mb-3 w-fit">Most Popular</div>
                )}

                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                  service.emergency
                    ? "bg-brand-red/10 group-hover:bg-brand-red/20"
                    : "bg-brand-orange/10 group-hover:bg-brand-orange/20"
                )}>
                  <Icon className={cn(
                    "w-6 h-6",
                    service.emergency ? "text-brand-red" : "text-brand-orange"
                  )} />
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description.slice(0, 120)}...
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

        {/* Other services compact grid */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-brand-navy mb-6">
            More Services Available in Liverpool
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherServices.map((service) => {
              const Icon = iconMap[service.icon] || Hammer;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <Icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium group-hover:text-brand-orange transition-colors">
                    {service.shortName}
                  </span>
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
