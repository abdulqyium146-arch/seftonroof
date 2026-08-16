import Link from "next/link";
import { Phone, ArrowRight, Clock, MapPin, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const guarantees = [
  "Free, no-obligation quotes",
  "10-year workmanship guarantee",
  "Fully insured operatives",
  "60-minute emergency response",
  "Transparent, upfront pricing",
  "Liverpool-based local team",
];

export function FinalCTA() {
  return (
    <section
      className="py-20 bg-white"
      aria-label="Contact Sefton Roofing for a free quote in Liverpool"
    >
      <div className="container-xl">
        <div className="bg-navy-gradient rounded-3xl overflow-hidden relative">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-6">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span className="text-brand-orange text-sm font-semibold">
                    Serving Liverpool & Merseyside
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                  Ready for a Free
                  <br />
                  <span className="text-gradient-orange">Roofing Quote?</span>
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Join over 1,850 Liverpool homeowners who have trusted Sefton Roofing
                  with their properties. Call now or fill in our simple form — we&apos;ll
                  get back to you the same day.
                </p>

                {/* Guarantee list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {guarantees.map((g) => (
                    <div key={g} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{g}</span>
                    </div>
                  ))}
                </div>

                {/* Opening hours */}
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>
                    Mon–Fri {SITE.openingHours.weekday} ·{" "}
                    Sat {SITE.openingHours.saturday} ·{" "}
                    <strong className="text-brand-red">Emergency 24/7</strong>
                  </span>
                </div>
              </div>

              {/* Right: Contact options */}
              <div className="space-y-4">
                {/* Primary: Call */}
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-4 bg-brand-orange hover:bg-brand-orange-dark text-white p-6 rounded-2xl transition-colors group shadow-glow-orange"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-2xl">{SITE.phoneDisplay}</div>
                    <div className="text-orange-100 text-sm">Call for instant response · 24/7 Emergency Line</div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary: Online form */}
                <Link
                  href="/contact"
                  className="flex items-center gap-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white p-6 rounded-2xl transition-colors group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl">Request a Free Quote Online</div>
                    <div className="text-slate-400 text-sm">Fill in our form · We reply same day</div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Email */}
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white p-5 rounded-2xl transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-slate-400 text-xs mb-1">Email us</div>
                    <div className="font-medium">{SITE.email}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
