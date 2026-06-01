import { Phone, Search, FileText, Hammer, CheckCircle, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Contact Us",
    description:
      "Call us on 07845 463877 or fill in our contact form. We respond quickly — same day for most enquiries, within the hour for emergencies.",
    duration: "Immediate response",
  },
  {
    number: "02",
    icon: Search,
    title: "Free Roof Assessment",
    description:
      "One of our experienced Liverpool roof cleaning specialists visits your property. We assess the roof type, extent of moss, algae or lichen growth, and recommend the safest, most effective cleaning method.",
    duration: "Within 2–3 days",
  },
  {
    number: "03",
    icon: FileText,
    title: "Written Quote Provided",
    description:
      "You receive a detailed written quote covering everything that needs doing. No hidden extras, no vague estimates — clear, transparent pricing before any work begins.",
    duration: "Same day as inspection",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Expert Work Carried Out",
    description:
      "Our qualified roofers carry out all work to the highest standard, using quality materials. We work efficiently and respect your property throughout.",
    duration: "Agreed timescale",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Final Inspection & Sign-Off",
    description:
      "We carry out a final quality inspection of all completed work, clear up completely, and walk you through what was done. Your guarantee certificate is issued.",
    duration: "On completion",
  },
  {
    number: "06",
    icon: Star,
    title: "Ongoing Support",
    description:
      "We remain available after every job. If you have any questions or concerns, we&apos;re on the end of the phone. Our 10-year guarantee means you have lasting peace of mind.",
    duration: "10-year guarantee",
  },
];

export function Process() {
  return (
    <section
      className="py-20 bg-slate-50"
      aria-label="Our roofing process in Liverpool"
      id="process"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange mx-auto mb-4 w-fit">
            How We Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-navy mb-4">
            Our Simple{" "}
            <span className="text-gradient-orange">6-Step Process</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From your first call to a watertight guarantee — every Liverpool job
            follows our proven, stress-free process.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-orange text-white font-black text-sm rounded-xl flex items-center justify-center shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
                </div>

                <h3 className="text-brand-navy font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration badge */}
                <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-lg px-3 py-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-slate-600 text-xs font-medium">{step.duration}</span>
                </div>

                {/* Connector line (not on last items) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-brand-orange/30"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
