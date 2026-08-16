import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";

export function ServiceAreas() {
  return (
    <section
      className="py-20 bg-brand-navy"
      aria-label="Roofing service areas in Liverpool and Merseyside"
      id="service-areas"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold">
              Liverpool &amp; Merseyside Coverage
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Roofing Services Across{" "}
            <span className="text-gradient-orange">All of Liverpool</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Based in Waterloo, we cover every area of Liverpool and Merseyside.
            Fast response times across all postcodes — emergency attendance within 60 minutes.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-10">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                {area.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Coverage statement */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-brand-orange font-black text-3xl mb-2">L1–L39</div>
            <div className="text-white font-bold mb-1">All Liverpool Postcodes</div>
            <div className="text-slate-400 text-sm">
              Full coverage across every Liverpool postcode, from L1 in the city centre to L39 in Ormskirk.
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-brand-orange font-black text-3xl mb-2">60 min</div>
            <div className="text-white font-bold mb-1">Emergency Response</div>
            <div className="text-slate-400 text-sm">
              We target a 60-minute response time for roofing emergencies anywhere in our coverage area.
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-brand-orange font-black text-3xl mb-2">24/7</div>
            <div className="text-white font-bold mb-1">Always Available</div>
            <div className="text-slate-400 text-sm">
              Our emergency line operates 24 hours a day, 7 days a week — including bank holidays.
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            View All Service Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
