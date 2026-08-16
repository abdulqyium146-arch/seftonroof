import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Sefton Roofing — Free Roofing Quotes Liverpool",
  description:
    "Contact Sefton Roofing for a free, no-obligation roofing quote in Liverpool. Call 07845 463877, email, or fill in our contact form. 24/7 emergency line available.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: SITE.phoneDisplay,
    sub: "Mon–Fri 7am–6pm · Sat 7am–2pm · Emergency 24/7",
    action: `tel:${SITE.phone}`,
    actionLabel: "Call now",
    color: "orange",
    emergency: false,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Line",
    primary: "24/7 Emergency",
    sub: "Roof emergencies across Liverpool — 60-minute response",
    action: `tel:${SITE.phone}`,
    actionLabel: "Emergency call",
    color: "red",
    emergency: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: SITE.email,
    sub: "We reply to all emails within 4 hours during business hours",
    action: `mailto:${SITE.email}`,
    actionLabel: "Send email",
    color: "blue",
    emergency: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "Message Us",
    sub: "Send photos of your roofing issue for a faster assessment",
    action: `https://wa.me/447845463877?text=Hi, I'd like a free roofing quote`,
    actionLabel: "WhatsApp us",
    color: "green",
    emergency: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="max-w-2xl mt-8">
            <div className="badge-orange mb-4 w-fit">Get in Touch</div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Free Roofing Quotes{" "}
              <span className="text-gradient-orange">Across Liverpool</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ready for a free, no-obligation roofing quote? Call us, email, or fill
              in the form below — we respond same day to all enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith("https") ? "_blank" : undefined}
                  rel={method.action.startsWith("https") ? "noopener noreferrer" : undefined}
                  className={`card-base p-6 hover:-translate-y-1 transition-all duration-300 group ${
                    method.emergency ? "border-2 border-brand-red/20 hover:border-brand-red/40" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    method.color === "red" ? "bg-brand-red/10 group-hover:bg-brand-red/20" :
                    method.color === "green" ? "bg-green-100 group-hover:bg-green-200" :
                    method.color === "blue" ? "bg-blue-100 group-hover:bg-blue-200" :
                    "bg-brand-orange/10 group-hover:bg-brand-orange/20"
                  } transition-colors`}>
                    <Icon className={`w-6 h-6 ${
                      method.color === "red" ? "text-brand-red" :
                      method.color === "green" ? "text-green-700" :
                      method.color === "blue" ? "text-blue-700" :
                      "text-brand-orange"
                    }`} />
                  </div>
                  <h2 className="font-bold text-brand-navy text-base mb-1">{method.title}</h2>
                  <div className="font-semibold text-brand-navy text-sm mb-2">{method.primary}</div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">{method.sub}</p>
                  <span className={`text-sm font-semibold ${
                    method.color === "red" ? "text-brand-red" :
                    method.color === "green" ? "text-green-700" :
                    "text-brand-orange"
                  }`}>
                    {method.actionLabel} →
                  </span>
                </a>
              );
            })}
          </div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Request a Free Roofing Quote
              </h2>
              <form className="space-y-5" aria-label="Free roofing quote request form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors placeholder:text-slate-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors placeholder:text-slate-400"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors placeholder:text-slate-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Property Address / Postcode *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    autoComplete="street-address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors placeholder:text-slate-400"
                    placeholder="Property address or postcode"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="roof-repairs">Roof Repairs</option>
                    <option value="emergency-roof-repairs">Emergency Roof Repair</option>
                    <option value="roof-cleaning">Roof Cleaning / Moss Removal</option>
                    <option value="flat-roof-repairs">Flat Roof Repairs</option>
                    <option value="leadwork">Leadwork</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Tell Us About Your Roof / Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors placeholder:text-slate-400 resize-none"
                    placeholder="Describe the issue, the type of roof, when it started, etc. The more detail you can give, the more accurate your quote will be."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 text-brand-orange rounded border-slate-300"
                  />
                  <label htmlFor="consent" className="text-slate-600 text-sm leading-relaxed">
                    I agree to Sefton Roofing contacting me about my enquiry. I understand
                    my data will be handled in accordance with the{" "}
                    <a href="/privacy-policy" className="text-brand-orange hover:underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary-lg w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Request Free Quote
                </button>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="bg-brand-navy text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-5">Direct Contact</h3>
                <div className="space-y-4">
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
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-brand-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-orange" />
                    </div>
                    <span className="text-slate-300 text-sm">{SITE.email}</span>
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

              {/* What to expect */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-brand-navy text-base mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  {[
                    "We call or email you within 4 hours",
                    "A surveyor visits your property — free",
                    "You receive a detailed written quote",
                    "No pressure to proceed",
                    "Work starts on your agreed date",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 text-sm">{step}</span>
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
