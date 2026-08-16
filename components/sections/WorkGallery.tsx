import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const workItems = [
  {
    src: "/images/work/solar-panel-roof-installation-liverpool.webp",
    alt: "Solar panel installation and roof work completed on a Liverpool residential property by Sefton Roofing",
    caption: "Solar Panel Roof Work",
    location: "Liverpool, Merseyside",
    service: "Roof Repairs",
    href: "/services/roof-repairs",
  },
  {
    src: "/images/work/fascia-soffit-installation-liverpool-merseyside.webp",
    alt: "New white UPVC fascia and soffit boards fitted along the roofline of a Merseyside brick property",
    caption: "Roofline Repairs",
    location: "Merseyside",
    service: "Roof Repairs",
    href: "/services/roof-repairs",
  },
  {
    src: "/images/work/conservatory-roof-cleaning-liverpool.webp",
    alt: "Clean UPVC conservatory roof and frame after professional cleaning service in Liverpool",
    caption: "Conservatory Roof Cleaning",
    location: "Liverpool",
    service: "Roof Cleaning",
    href: "/services/roof-cleaning",
  },
  {
    src: "/images/work/roof-tile-repair-extension-liverpool.webp",
    alt: "Terracotta clay roof tiles repaired and replaced on a house extension in Liverpool",
    caption: "Roof Tile Repair & Replacement",
    location: "Liverpool",
    service: "Roof Repairs",
    href: "/services/roof-repairs",
  },
  {
    src: "/images/work/gutter-replacement-before-liverpool-property.webp",
    alt: "Liverpool detached property showing existing roof and roofline before repair by Sefton Roofing",
    caption: "Roof Repair — Before",
    location: "Liverpool",
    service: "Roof Repairs",
    href: "/services/roof-repairs",
  },
  {
    src: "/images/work/gutter-replacement-after-merseyside-home.webp",
    alt: "Completed roofline and flat roof repair on a Merseyside detached home by Sefton Roofing",
    caption: "Flat Roof Repair — After",
    location: "Merseyside",
    service: "Flat Roof Repairs",
    href: "/services/flat-roof-repairs",
  },
  {
    src: "/images/work/new-upvc-guttering-installed-liverpool.webp",
    alt: "Completed roofing work on a red-brick Liverpool property with garage, by Sefton Roofing",
    caption: "Roof Repairs — Completed",
    location: "Liverpool",
    service: "Roof Repairs",
    href: "/services/roof-repairs",
  },
];

export function WorkGallery() {
  return (
    <section
      className="py-20 bg-slate-50"
      aria-label="Completed roofing projects across Liverpool and Merseyside by Sefton Roofing"
    >
      <div className="container-xl">
        <div className="text-center mb-12">
          <div className="badge-orange mb-4 w-fit mx-auto">Real Projects · Real Results</div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4">
            Our Work Across Liverpool &amp; Merseyside
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Every photo is a completed job. Real roofing work on real Liverpool homes — no stock imagery, no filters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workItems.map((item) => (
            <figure
              key={item.src}
              className="group rounded-2xl overflow-hidden bg-white shadow-card border border-slate-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={item.href} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {item.service}
                    </span>
                  </div>
                </div>
              </Link>
              <figcaption className="p-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{item.caption}</p>
                  <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-orange flex-shrink-0" />
                    {item.location}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="text-brand-orange text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all flex-shrink-0 mt-0.5"
                  aria-label={`View our ${item.service} service`}
                >
                  View <ArrowRight className="w-3 h-3" />
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote for Your Property
          </Link>
        </div>
      </div>
    </section>
  );
}
