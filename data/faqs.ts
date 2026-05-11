export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const globalFaqs: FAQ[] = [
  {
    category: "general",
    question: "What areas do Sefton Roofing cover?",
    answer:
      "Sefton Roofing covers all of Liverpool and the wider Merseyside area, including Waterloo, Crosby, Bootle, Formby, Walton, Everton, Anfield, Aintree, Kirkdale, Litherland, Maghull, Huyton, Prescot, Knowsley, Ormskirk, and Fazakerley. If you are unsure whether we cover your area, call us — we almost certainly do.",
  },
  {
    category: "general",
    question: "Do you offer free roofing quotes in Liverpool?",
    answer:
      "Yes, all our quotes are completely free and come with no obligation. One of our experienced roofing surveyors will attend your property, assess the work required, and provide a detailed written quote before any work begins. There is no pressure to proceed.",
  },
  {
    category: "general",
    question: "How quickly can Sefton Roofing attend my property?",
    answer:
      "For emergency situations, we aim to attend within 60 minutes anywhere in Liverpool and Merseyside. For non-emergency repairs and inspections, we typically schedule visits within 2–3 working days. We also offer same-day appointments where our schedule allows.",
  },
  {
    category: "general",
    question: "Are Sefton Roofing fully insured?",
    answer:
      "Yes. We carry full public liability insurance and employer's liability insurance. All our operatives are vetted and experienced, and we can provide copies of our insurance certificates on request.",
  },
  {
    category: "general",
    question: "What guarantee do you offer on roofing work?",
    answer:
      "We provide a 10-year workmanship guarantee on all roofing repairs and installations. Some products we use, such as EPDM rubber membranes, also carry their own manufacturer guarantees of up to 25 years.",
  },
  {
    category: "repairs",
    question: "How do I know if I need a roof repair or a full replacement?",
    answer:
      "Most roofing problems can be resolved with targeted repairs rather than a full replacement. If your roof is over 50 years old, has widespread deterioration across multiple areas, or repair costs would exceed 50% of replacement cost, we may advise replacement. However, we always provide honest, impartial advice and will never recommend more work than is genuinely needed.",
  },
  {
    category: "repairs",
    question: "Can you repair my roof in winter?",
    answer:
      "Yes. We work throughout the year including winter, though we do monitor weather conditions to ensure safe working. Most repair work can be carried out in cold conditions using appropriate materials. We will always advise you if weather conditions make it safer or more practical to reschedule a specific job.",
  },
  {
    category: "repairs",
    question: "My roof is leaking — what should I do right now?",
    answer:
      "Call us immediately on 07971 321313. While you wait, try to contain any water with buckets or towels and move valuables away from the affected area. Do not attempt to access your roof yourself — this is dangerous. Our emergency team will make your roof safe as a priority, then carry out a permanent repair.",
  },
  {
    category: "emergency",
    question: "Do you offer 24/7 emergency roofing in Liverpool?",
    answer:
      "Yes. We operate a genuine 24/7 emergency roofing service, 365 days a year, including bank holidays and Christmas. We aim to attend within 60 minutes across Liverpool and Merseyside. Our emergency line is 07971 321313 — we always answer.",
  },
  {
    category: "emergency",
    question: "Will my home insurance cover storm roof damage?",
    answer:
      "Most home insurance policies cover storm damage to roofs, but the specific terms vary between policies. We work with all major home insurers and can provide a detailed written damage report, photographs, and repair estimates to support your claim. We can also liaise directly with loss adjusters on your behalf.",
  },
  {
    category: "cleaning",
    question: "How long does a roof clean take in Liverpool?",
    answer:
      "A standard residential roof clean typically takes 4–8 hours depending on the size of the roof and the extent of moss and algae growth. Larger properties or roofs with very heavy growth may require a full day. We will give you an accurate time estimate when quoting.",
  },
  {
    category: "cleaning",
    question: "Is it safe to pressure wash a slate roof?",
    answer:
      "No. High-pressure washing can damage natural slate by widening hairline cracks, dislodging nail fixings, and disturbing the surface texture. For slate roofs, we always use low-pressure soft wash techniques combined with specialist biocidal treatments, which are both safer and more effective.",
  },
  {
    category: "guttering",
    question: "How do I know if my gutters need cleaning or repairing?",
    answer:
      "Signs your gutters need attention include: water overflowing over the edges of gutters during rainfall, visible plants growing in gutters, gutters sagging or pulling away from the fascia, damp patches on external walls below gutter lines, or visible cracks or splits in gutter sections. We offer a free gutter inspection with any visit.",
  },
  {
    category: "pricing",
    question: "How much do roofing services cost in Liverpool?",
    answer:
      "Pricing varies depending on the type and extent of work required. Minor roof repairs start from around £150; gutter cleaning typically ranges from £60–£150; roof cleaning from £300–£800; fascia and soffit replacement from £800–£2,500. We provide free, detailed written quotes before any work begins — no hidden extras, ever.",
  },
  {
    category: "pricing",
    question: "Do you offer payment plans for roofing work?",
    answer:
      "For larger projects, we can discuss staged payment options. Contact us to discuss your specific situation and we will do our best to find a payment arrangement that works for you.",
  },
];

export function getFaqsByCategory(category: string): FAQ[] {
  return globalFaqs.filter((f) => f.category === category);
}

export function getAllFaqs(): FAQ[] {
  return globalFaqs;
}
