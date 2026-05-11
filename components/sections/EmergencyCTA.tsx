import { Phone, AlertTriangle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export function EmergencyCTA() {
  return (
    <section
      className="bg-brand-red py-6"
      aria-label="Emergency roof repair service"
    >
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                Roofing Emergency in Liverpool?
              </p>
              <p className="text-red-100 text-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                We respond within 60 minutes · Available 24 hours, 7 days a week
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 bg-white text-brand-red font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
              aria-label={`Call emergency roofing on ${SITE.phoneDisplay}`}
            >
              <Phone className="w-5 h-5" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/services/emergency-roof-repairs"
              className="hidden sm:flex items-center gap-1.5 text-white font-medium text-sm border border-white/30 hover:border-white px-4 py-3 rounded-xl transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
