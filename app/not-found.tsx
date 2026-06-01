import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-brand-navy flex items-center">
      <div className="container-xl text-center py-20">
        <div className="text-brand-orange/20 text-[10rem] font-black leading-none mb-6" aria-hidden="true">
          404
        </div>
        <h1 className="text-4xl font-black text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Looking for a Liverpool roofer?
          We&apos;re right here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary-lg">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <a href={`tel:${SITE.phone}`} className="btn-secondary text-lg">
            <Phone className="w-5 h-5" />
            {SITE.phoneDisplay}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {[
            { label: "Roof Repairs", href: "/services/roof-repairs" },
            { label: "Emergency", href: "/services/emergency-roof-repairs" },
            { label: "Roof Cleaning", href: "/services/roof-cleaning" },
            { label: "Flat Roofs", href: "/services/flat-roof-repairs" },
            { label: "All Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-slate-400 hover:text-brand-orange text-sm transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
