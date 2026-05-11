"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Star, Shield, CheckCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

const stats = [
  { value: "1,850+", label: "Roofs Repaired" },
  { value: "14+", label: "Years Experience" },
  { value: "4.9★", label: "Google Rating" },
  { value: "60 Min", label: "Emergency Response" },
];

const trustBadges = [
  { icon: Shield, text: "Fully Insured" },
  { icon: Star, text: "4.9★ Rated" },
  { icon: CheckCircle, text: "10-Year Guarantee" },
  { icon: MapPin, text: "Based in Waterloo, Liverpool" },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  return <span>{target}{suffix}</span>;
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] bg-brand-navy flex items-center overflow-hidden"
      aria-label="Hero section — Liverpool's trusted roofing specialists"
      id="hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern" aria-hidden="true" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Orange accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-navy-mid/50 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold">
                Waterloo, Liverpool — Serving All Merseyside
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6"
              id="speakable-title"
            >
              Liverpool&apos;s{" "}
              <span className="text-gradient-orange">Trusted</span>{" "}
              Roofing Specialists
            </h1>

            <p
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              id="speakable-description"
            >
              Expert roof repairs, cleaning, gutter services and property maintenance
              across Liverpool and Merseyside. Free quotes. 24/7 emergency response.{" "}
              <strong className="text-white">10-year guarantee</strong> on all work.
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5"
                >
                  <Icon className="w-4 h-4 text-brand-orange" />
                  <span className="text-white text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${SITE.phone}`}
                className="btn-primary-lg phone-pulse"
                aria-label={`Call Sefton Roofing on ${SITE.phoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn-secondary text-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Opening hours note */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-brand-orange" />
              <span>
                Mon–Fri {SITE.openingHours.weekday} · Sat {SITE.openingHours.saturday} ·{" "}
                <strong className="text-brand-red">Emergency: 24/7</strong>
              </span>
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-brand-orange mb-1">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Review card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-white font-bold ml-2">4.9/5</span>
              </div>
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                &ldquo;Sefton Roofing attended within the hour after a storm damaged our roof.
                Professional, fast, and excellent quality work. Wouldn&apos;t use anyone else.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Margaret H.</div>
                  <div className="text-slate-500 text-xs">Crosby, Liverpool · Verified Google Review</div>
                </div>
              </div>
            </div>

            {/* Services quick links */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Roof Repairs", href: "/services/roof-repairs" },
                { label: "Emergency", href: "/services/emergency-roof-repairs" },
                { label: "Roof Cleaning", href: "/services/roof-cleaning" },
                { label: "Gutters", href: "/services/gutter-cleaning" },
                { label: "Fascias", href: "/services/fascias-and-soffits" },
                { label: "Flat Roofs", href: "/services/flat-roof-repairs" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-center p-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-brand-orange/30 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
