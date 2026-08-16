import {
  Shield, Clock, Star, Award, ThumbsUp, Wrench,
  Phone, FileText, MapPin, CheckCircle,
} from "lucide-react";
import { SITE } from "@/lib/constants";

const reasons = [
  {
    icon: Clock,
    title: "60-Minute Emergency Response",
    description:
      "When your roof fails in a Liverpool storm, you need help fast. We aim to attend any roofing emergency across Merseyside within 60 minutes — 24/7, 365 days a year.",
    highlight: "24/7 Available",
  },
  {
    icon: Shield,
    title: "Fully Insured & Vetted",
    description:
      "We carry comprehensive public liability and employer's liability insurance. Every operative on our team is vetted, experienced, and trained to the highest standard.",
    highlight: "Fully Insured",
  },
  {
    icon: Award,
    title: "10-Year Workmanship Guarantee",
    description:
      "Every repair and installation comes with our written 10-year guarantee. We stand behind our work completely — because we're not going anywhere.",
    highlight: "10-Year Guarantee",
  },
  {
    icon: Star,
    title: `${SITE.rating}★ Rated — ${SITE.reviewCount}+ Reviews`,
    description:
      "Our reputation is built on hundreds of verified 5-star reviews from Liverpool homeowners. We don't just claim to be the best — our customers confirm it.",
    highlight: `${SITE.reviewCount}+ Reviews`,
  },
  {
    icon: FileText,
    title: "Free, Transparent Quotes",
    description:
      "No hidden extras. No surprise charges. Every quote is provided in writing before a single tile is touched. You know exactly what you're paying and why.",
    highlight: "No Hidden Costs",
  },
  {
    icon: MapPin,
    title: "Genuinely Local — Based in Waterloo",
    description:
      "We're not a national company with a local number. We're based in Waterloo, Liverpool. We know the area, the properties, and the roofing challenges they face.",
    highlight: "Liverpool-Based",
  },
  {
    icon: Wrench,
    title: "All Roof Types — Safe Cleaning Methods",
    description:
      "Slate, concrete tile, clay tile, flat EPDM, GRP, felt — we use the correct cleaning method for every roof type. Soft wash, steam, biocide — safe and effective every time.",
    highlight: "All Roof Types",
  },
  {
    icon: ThumbsUp,
    title: "No Pressure, Honest Advice",
    description:
      "We tell you what your roof actually needs — not what maximises our invoice. Sometimes that means advising a simple repair over a full replacement.",
    highlight: "Honest Advice",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 bg-brand-navy"
      aria-label="Why choose Sefton Roofing for your Liverpool roofing needs"
      id="why-choose-us"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-4">
            <CheckCircle className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold">
              Why Liverpool Homeowners Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Sefton Roofing
            <br />
            <span className="text-gradient-orange">Difference</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Liverpool&apos;s trusted roof cleaning specialists since 2010 — built
            on honest advice, proven results, and roofs that stay clean for years.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/30 transition-colors">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <div className="inline-block bg-brand-orange/10 border border-brand-orange/20 rounded-lg px-2.5 py-1 text-brand-orange text-xs font-bold mb-3">
                  {reason.highlight}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emergency CTA inside section */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-white text-3xl font-black mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-orange-100 text-lg max-w-lg">
                Call Liverpool&apos;s highest-rated roof cleaning specialists now for your
                free quote. No obligation, no pressure — just honest advice from local experts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 bg-white text-brand-orange font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors shadow-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
