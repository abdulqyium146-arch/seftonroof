import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Award, Star, MapPin, Clock, Phone,
  CheckCircle, Heart, ThumbsUp,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Sefton Roofing — Liverpool Roofing Specialists",
  description:
    "Learn about Sefton Roofing & Property Maintenance — Liverpool's trusted local roofing company based in Waterloo. 14+ years experience, 4.9★ rated, fully insured.",
  alternates: { canonical: `${SITE.url}/about` },
};

const values = [
  {
    icon: ThumbsUp,
    title: "Honest Advice",
    description:
      "We tell you what your roof actually needs — not what maximises our bill. Our reputation is built on trust, not upselling.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every job comes with a 10-year workmanship guarantee. We back every repair and installation completely.",
  },
  {
    icon: Clock,
    title: "Always Responsive",
    description:
      "We pick up the phone. We turn up when we say we will. For emergencies, we're there within the hour.",
  },
  {
    icon: Heart,
    title: "Local Community",
    description:
      "We live and work in Liverpool. Our reputation is built street by street, neighbour by neighbour, across Merseyside.",
  },
];

const milestones = [
  { year: "2010", event: "Founded in Waterloo, Liverpool" },
  { year: "2013", event: "Expanded to cover all of Merseyside" },
  { year: "2016", event: "Launched 24/7 emergency roofing service" },
  { year: "2018", event: "1,000th roofing project completed" },
  { year: "2020", event: "Introduced EPDM and GRP flat roofing" },
  { year: "2022", event: "Reached 100+ five-star Google reviews" },
  { year: "2024", event: "1,850+ projects · 4.9★ Google Rating" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="grid lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              <div className="badge-orange mb-4 w-fit">About Sefton Roofing</div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Liverpool&apos;s Local Roofing{" "}
                <span className="text-gradient-orange">Specialists</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Sefton Roofing & Property Maintenance has been Liverpool&apos;s trusted
                roofing company since {SITE.founded}. Founded in Waterloo and built on
                honest, reliable workmanship, we&apos;ve grown from a small local team
                to Merseyside&apos;s highest-rated roofing contractor.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We&apos;re not a franchise or a call centre. We&apos;re a Liverpool
                company, staffed by Liverpool people, serving Liverpool homeowners. Every
                job we do is a commitment to the community we live in.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${SITE.phone}`} className="btn-primary">
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${SITE.yearsExperience}+`, label: "Years Experience", icon: Award },
                { value: `${SITE.projectsCompleted}+`, label: "Projects Completed", icon: CheckCircle },
                { value: `${SITE.rating}★`, label: "Google Rating", icon: Star },
                { value: `${SITE.reviewCount}+`, label: "5-Star Reviews", icon: ThumbsUp },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass-card p-6 text-center">
                  <Icon className="w-6 h-6 text-brand-orange mx-auto mb-2" />
                  <div className="text-3xl font-black text-brand-orange mb-1">{value}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-white">
        <div className="container-xl">
          <TrustBadges />
        </div>
      </section>

      {/* Our story */}
      <section className="py-16 bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="badge-orange mb-4 w-fit">Our Story</div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-6">
                Built on Liverpool Rooftops
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Sefton Roofing was founded in {SITE.founded} with a simple idea: deliver the
                  kind of roofing service that Liverpool homeowners actually deserve — honest
                  assessments, quality workmanship, and a team that picks up the phone.
                </p>
                <p>
                  We started small, working the Victorian terraces of Waterloo and Crosby, learning
                  the specific challenges of Liverpool&apos;s exposed coastal climate and its
                  mix of traditional slate roofs, lead valley work, and aging concrete tile
                  properties. That local knowledge is something no national contractor can replicate.
                </p>
                <p>
                  Today, we cover all of Liverpool and Merseyside with a full team of qualified
                  roofers. But our approach hasn&apos;t changed: free, honest quotes; quality materials
                  and workmanship; a 10-year guarantee; and a genuine commitment to getting it right
                  first time.
                </p>
                <p>
                  Our {SITE.reviewCount}+ five-star reviews from across Liverpool, Crosby, Formby,
                  Bootle, and Walton tell the story better than we can.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0">
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 h-6 bg-slate-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-brand-orange font-bold text-sm">{m.year}</div>
                      <div className="text-brand-navy font-medium">{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              These aren&apos;t corporate values from a boardroom — they&apos;re how we
              actually work, every day, on every Liverpool rooftop.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-base p-6 text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="container-xl text-center">
          <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-4">Based in Waterloo, Serving All of Liverpool</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Our home base is Waterloo, Liverpool — but we serve every postcode across
            Merseyside. From Formby in the north to Huyton in the east, from Bootle
            to Ormskirk — if you&apos;re in Liverpool, we&apos;re your local roofer.
          </p>
          <Link href="/areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
