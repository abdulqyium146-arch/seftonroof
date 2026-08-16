import type { Metadata } from "next";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle, Camera, Zap, Star } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Get a Free Roofing Quote Liverpool — Call or WhatsApp | Sefton Roofing" },
  description:
    "Get a free roofing quote in seconds. Call 07845 463877 or WhatsApp us a photo of your roof — we'll give you a price usually within the hour. No forms. No waiting. Liverpool & Merseyside.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const WHATSAPP_URL = `https://wa.me/447845463877?text=Hi%2C%20I'd%20like%20a%20free%20roofing%20quote.%20I'm%20based%20in%20Liverpool%20%2F%20Merseyside.`;

const whatsappBenefits = [
  { icon: Camera, text: "Send photos of the issue — we assess faster" },
  { icon: Zap, text: "Quotes typically within the hour" },
  { icon: CheckCircle, text: "No forms, no callbacks, no waiting" },
  { icon: Star, text: "Chat directly with the team, not a call centre" },
];

const steps = [
  { num: "1", title: "Tap WhatsApp or Call", desc: "No forms. Contact us directly in seconds." },
  { num: "2", title: "Describe your roof or send a photo", desc: "WhatsApp is perfect for this — photos help us assess and price faster." },
  { num: "3", title: "Get your free quote", desc: "We reply fast — usually within the hour on WhatsApp, or instantly by phone." },
  { num: "4", title: "We visit & confirm in writing", desc: "For larger jobs we'll visit free of charge and confirm everything in writing." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="max-w-2xl mt-8">
            <div className="badge-orange mb-4 w-fit">Free Quotes · No Forms</div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Get a Free Quote in{" "}
              <span className="text-gradient-orange">Seconds</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Call us direct or WhatsApp a photo of your roof. We reply fast — usually within
              the hour. No forms, no waiting, no automated responses.
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTAs */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: action cards */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Two ways to reach us — both instant
              </h2>

              {/* WhatsApp — primary */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-green-600 hover:bg-green-700 text-white p-7 rounded-2xl transition-colors group shadow-lg"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-9 h-9" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-2xl mb-1">WhatsApp Us</div>
                  <div className="text-green-100 text-sm leading-relaxed">
                    Tap to open WhatsApp — send a message or photo of your roof.<br />
                    <strong className="text-white">Fastest way to get a quote.</strong>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0 bg-white/20 rounded-xl px-4 py-3">
                  <span className="text-xs font-semibold text-green-100">Typical reply</span>
                  <span className="text-xl font-black">1 hr</span>
                </div>
              </a>

              {/* WhatsApp benefits */}
              <div className="grid sm:grid-cols-2 gap-3 p-5 bg-green-50 rounded-2xl border border-green-100">
                {whatsappBenefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-green-700 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-5 bg-brand-orange hover:bg-brand-orange-dark text-white p-7 rounded-2xl transition-colors group shadow-lg"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <Phone className="w-9 h-9" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-2xl mb-1">{SITE.phoneDisplay}</div>
                  <div className="text-orange-100 text-sm leading-relaxed">
                    Speak directly with the team.<br />
                    <strong className="text-white">Emergency line available 24/7.</strong>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0 bg-white/20 rounded-xl px-4 py-3">
                  <span className="text-xs font-semibold text-orange-100">Emergency</span>
                  <span className="text-xl font-black">24/7</span>
                </div>
              </a>

              {/* Hours note */}
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <Clock className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div className="text-slate-600 text-sm">
                  <strong className="text-brand-navy">Office hours:</strong> Mon–Fri {SITE.openingHours.weekday} · Sat {SITE.openingHours.saturday}<br />
                  <strong className="text-brand-red">Emergency line: 24/7</strong> — call any time for urgent roof damage, leaks, or storm damage.
                </div>
              </div>

              {/* How it works */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-brand-navy mb-5">How it works</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-4">
                      <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">
                        {s.num}
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy text-sm mb-1">{s.title}</div>
                        <div className="text-slate-600 text-xs leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="bg-brand-navy text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 bg-green-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">
                        WhatsApp Us
                      </div>
                      <div className="text-slate-500 text-xs">Fastest way · Send photos</div>
                    </div>
                  </a>
                  <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-brand-orange transition-colors">
                        {SITE.phoneDisplay}
                      </div>
                      <div className="text-slate-500 text-xs">Emergency 24/7</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div className="text-slate-300 text-sm">
                      {SITE.address.street}, {SITE.address.city}<br />
                      {SITE.address.county}, {SITE.address.postcode}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div className="text-slate-300 text-sm">
                      <div>Mon–Fri: {SITE.openingHours.weekday}</div>
                      <div>Saturday: {SITE.openingHours.saturday}</div>
                      <div className="text-brand-red font-semibold">Emergency: 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-brand-navy text-base mb-4">Why choose us?</h3>
                <div className="space-y-3">
                  {[
                    "4.9★ from 127+ Google reviews",
                    "1,850+ roofs completed since 2010",
                    "10-year workmanship guarantee",
                    "Fully insured operatives",
                    "60-minute emergency response",
                    "Free, no-obligation quotes",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-slate-50">
        <div className="container-xl">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
