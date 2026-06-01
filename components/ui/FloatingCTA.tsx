"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-brand-navy border-t border-white/10 p-3 flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-xl"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <Phone className="w-5 h-5" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-xl"
          >
            Free Quote
          </a>
        </div>
      </div>

      {/* Desktop floating buttons */}
      <div
        className={cn(
          "hidden md:flex fixed right-6 bottom-8 z-50 flex-col items-end gap-3 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Expandable CTA group */}
        <div className="flex flex-col items-end gap-2">
          {expanded && (
            <>
              <a
                href={`https://wa.me/447845463877?text=Hi, I'd like a free roofing quote in Liverpool`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-mid text-white font-semibold px-4 py-3 rounded-xl shadow-lg border border-white/10 transition-colors"
              >
                Free Quote
              </a>
            </>
          )}

          <div className="flex items-center gap-2">
            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                className="w-10 h-10 bg-slate-700 text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-slate-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-5 py-3 rounded-xl shadow-lg phone-pulse transition-colors"
              aria-label={`Call ${SITE.phoneDisplay}`}
              onClick={() => setExpanded(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding spacer */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </>
  );
}
