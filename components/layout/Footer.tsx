import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, Shield, Award, CheckCircle, BookOpen } from "lucide-react";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

const footerServices = services.slice(0, 9);
const footerAreas = areas.slice(0, 9);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" aria-label="Footer">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="container-xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, label: "4.9★ Rating", sub: `${SITE.reviewCount}+ Google Reviews` },
              { icon: Shield, label: "Fully Insured", sub: "Public Liability Cover" },
              { icon: Award, label: "14+ Years", sub: "Liverpool Roofing Experts" },
              { icon: CheckCircle, label: "10-Year Guarantee", sub: "On All Workmanship" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M20 4L2 18h4v18h10V24h8v12h10V18h4L20 4z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">Sefton Roofing</div>
                <div className="text-brand-orange text-xs">& Property Maintenance</div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Liverpool&apos;s trusted roofing and property maintenance specialists. Serving Waterloo,
              Crosby, Bootle, and all of Merseyside since {SITE.founded}.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{SITE.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>
                  {SITE.address.street}, {SITE.address.city},<br />
                  {SITE.address.county}, {SITE.address.postcode}
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Fri: {SITE.openingHours.weekday}</div>
                  <div>Sat: {SITE.openingHours.saturday}</div>
                  <div className="text-brand-orange font-medium">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-brand-orange hover:text-brand-orange-light text-sm font-medium transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Areas We Cover
            </h3>
            <ul className="space-y-2.5">
              {footerAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-brand-orange hover:text-brand-orange-light text-sm font-medium transition-colors"
                >
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links + Emergency CTA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Service Areas", href: "/areas" },
                { label: "Blog & Guides", href: "/blog" },
                { label: "FAQs", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Free Quote", href: "/contact" },
                { label: "Exterior Cleaning — Newton-le-Willows", href: "/blog/exterior-cleaning-newton-le-willows-guide" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Featured Guide card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <p className="text-slate-300 font-semibold text-xs uppercase tracking-wider">Featured Guide — 2026</p>
              </div>
              <p className="text-white font-semibold text-sm leading-snug mb-2">
                Exterior Cleaning in Newton-le-Willows: Complete 2026 Guide
              </p>
              <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                Roof soft washing, driveway pressure washing &amp; render cleaning — everything North West homeowners need to know.
              </p>
              <a
                href="https://seftonroof.vercel.app/blog/exterior-cleaning-newton-le-willows-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors"
              >
                Read the Full Guide →
              </a>
            </div>

            {/* Emergency CTA box */}
            <div className="bg-brand-red/20 border border-brand-red/30 rounded-xl p-4">
              <p className="text-brand-red font-bold text-sm mb-2">
                🚨 Roofing Emergency?
              </p>
              <p className="text-slate-300 text-xs mb-3">
                We respond within 60 minutes across Liverpool. Call us now — we answer 24/7.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="block text-center bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
            <p>
              © {currentYear} {SITE.name}. All rights reserved. Based in {SITE.address.city}, {SITE.address.county}.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
