import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, Clock } from "lucide-react";
import { areas } from "@/data/areas";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roofing Services Areas — Liverpool & Merseyside",
  description:
    "Sefton Roofing serves all of Liverpool and Merseyside — Waterloo, Crosby, Bootle, Formby, Walton, Everton, Aintree and more. Fast local response, 60-min emergency cover.",
  alternates: { canonical: `${SITE.url}/areas` },
};

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Service Areas" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold">Liverpool & Merseyside Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Roofing Services Across{" "}
              <span className="text-gradient-orange">All of Liverpool</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Based in Waterloo, we cover every area of Liverpool and Merseyside.
              Emergency response within 60 minutes across all postcodes.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-orange" />
                60-min emergency response
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-orange" />
                All Liverpool postcodes covered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-brand-navy mb-3">
              Our Liverpool & Merseyside Coverage
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Click any area to learn about our local roofing services, common roofing
              challenges in that area, and how quickly we can reach you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-base p-6 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-slate-500 text-sm">{area.postcode}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold group-hover:gap-2.5 transition-all">
                  View Local Services <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage statement */}
      <section className="py-12 bg-slate-50">
        <div className="container-xl text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Not Sure if We Cover Your Area?
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            If you live anywhere in Liverpool, Merseyside, or the surrounding areas,
            there&apos;s a very good chance we cover you. Just give us a call.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="btn-primary-lg"
          >
            <Phone className="w-5 h-5" />
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
