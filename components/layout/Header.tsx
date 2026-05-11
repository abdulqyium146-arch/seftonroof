"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";

const serviceGroups = {
  Repairs: services.filter((s) => s.category === "repair").slice(0, 4),
  Cleaning: services.filter((s) => s.category === "cleaning").slice(0, 4),
  Guttering: services.filter((s) => s.category === "guttering").slice(0, 2),
  Maintenance: services.filter((s) => s.category === "maintenance").slice(0, 4),
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Emergency top bar */}
      <div className="bg-brand-red text-white text-sm py-2 text-center hidden sm:block">
        <div className="container-xl flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">
            24/7 Emergency Roof Repairs Across Liverpool —{" "}
            <a
              href={`tel:${SITE.phone}`}
              className="underline font-bold hover:text-red-100 transition-colors"
            >
              Call {SITE.phoneDisplay} Now
            </a>
          </span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-navy/98 backdrop-blur-md shadow-lg"
            : "bg-brand-navy"
        )}
      >
        <nav className="container-xl" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Sefton Roofing - Home"
            >
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center group-hover:bg-brand-orange-dark transition-colors">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M20 4L2 18h4v18h10V24h8v12h10V18h4L20 4z" />
                </svg>
              </div>
              <div className="hidden xs:block">
                <div className="text-white font-bold text-base leading-tight">
                  Sefton Roofing
                </div>
                <div className="text-brand-orange text-xs font-medium">
                  Liverpool&apos;s Trusted Roofers
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services dropdown */}
              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname.startsWith("/services")
                      ? "text-brand-orange"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  )}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega dropdown */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-premium border border-slate-100 transition-all duration-200 z-50",
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6 grid grid-cols-2 gap-6">
                    {Object.entries(serviceGroups).map(([group, items]) => (
                      <div key={group}>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          {group}
                        </p>
                        <div className="space-y-1">
                          {items.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item"
                            >
                              <span className="text-sm font-medium text-slate-700 group-hover/item:text-brand-orange transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 p-4 bg-slate-50 rounded-b-2xl">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>

              {[
                { label: "Areas", href: "/areas" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname.startsWith(link.href)
                      ? "text-brand-orange"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">{SITE.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm py-2 px-5"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-1.5 bg-brand-orange text-white px-3 py-2 rounded-lg text-sm font-semibold"
                aria-label={`Call us on ${SITE.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xs:inline">Call Now</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 top-[calc(4rem+2.125rem)] bg-brand-navy z-40 overflow-y-auto transition-all duration-300",
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="p-6 space-y-6">
            {/* Emergency CTA */}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-3 w-full bg-brand-red text-white p-4 rounded-xl font-semibold text-lg"
            >
              <AlertTriangle className="w-5 h-5" />
              24/7 Emergency: {SITE.phoneDisplay}
            </a>

            {/* Services */}
            <div>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-3">
                Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {services.slice(0, 8).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3 bg-white/5 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-3 block text-center text-brand-orange text-sm font-semibold py-2"
              >
                All Services →
              </Link>
            </div>

            {/* Nav Links */}
            <div className="space-y-2">
              {[
                { label: "Service Areas", href: "/areas" },
                { label: "About Us", href: "/about" },
                { label: "Blog & Guides", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-slate-300 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact info */}
            <div className="border-t border-white/10 pt-6 space-y-2">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-white font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                {SITE.phoneDisplay}
              </a>
              <p className="text-slate-400 text-sm">{SITE.openingHours.weekday} Mon–Fri</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
