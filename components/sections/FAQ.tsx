"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { globalFaqs } from "@/data/faqs";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div
      className={cn(
        "border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200",
        isOpen && "border-brand-orange/30 shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-slate-50 transition-colors group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-brand-navy text-base leading-tight group-hover:text-brand-orange transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-600 leading-relaxed text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ limit = 8 }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = globalFaqs.slice(0, limit);

  return (
    <section
      className="py-20 bg-slate-50"
      aria-label="Frequently asked questions about Liverpool roofing services"
      id="faq"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="badge-orange mb-4 w-fit">
              Common Questions
            </div>
            <h2 className="text-4xl font-black text-brand-navy mb-4">
              Roofing{" "}
              <span className="text-gradient-orange">FAQs</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Answers to the most common roofing questions from Liverpool homeowners.
              Don&apos;t see your question? Call us — we&apos;re always happy to help.
            </p>

            {/* Quick contact */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white">
              <HelpCircle className="w-8 h-8 text-brand-orange mb-3" />
              <h3 className="font-bold text-lg mb-2">Still Have Questions?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Our Liverpool roofing experts are available Mon–Fri 7am–6pm, Sat 7am–2pm,
                and 24/7 for emergencies.
              </p>
              <a
                href="tel:+447971321313"
                className="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Call 07845 463877
              </a>
            </div>
          </div>

          {/* FAQ list */}
          <div className="lg:col-span-3 space-y-3">
            {displayFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
