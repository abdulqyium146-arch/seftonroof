"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = testimonials.slice(0, 6);

  const prev = () => setCurrentIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === featured.length - 1 ? 0 : i + 1));

  return (
    <section
      className="py-20 bg-white"
      aria-label="Customer reviews for Sefton Roofing Liverpool"
      id="reviews"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange mx-auto mb-4 w-fit">
            What Liverpool Customers Say
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-navy mb-4">
            Trusted by{" "}
            <span className="text-gradient-orange">Liverpool Homeowners</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-brand-navy font-bold text-xl ml-2">4.9 / 5</span>
          </div>
          <p className="text-slate-500 text-base">
            Based on 127+ verified reviews from Liverpool homeowners
          </p>
        </div>

        {/* Featured review (large) */}
        <div className="relative mb-10">
          <div className="bg-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-8 opacity-10" aria-hidden="true">
              <Quote className="w-24 h-24 text-brand-orange" />
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(featured[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
              &ldquo;{featured[currentIndex].review}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-black text-xl">
                  {featured[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{featured[currentIndex].author}</div>
                  <div className="text-slate-400 text-sm">{featured[currentIndex].location}</div>
                  <div className="text-brand-orange text-sm font-medium">
                    {featured[currentIndex].service}
                    {featured[currentIndex].verified && " · Verified Review"}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-6">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "transition-all duration-200",
                    i === currentIndex
                      ? "w-8 h-2 bg-brand-orange rounded-full"
                      : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
                  )}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-brand-orange/20 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-navy font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-slate-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
