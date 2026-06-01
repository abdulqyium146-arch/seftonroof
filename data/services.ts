export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  priceFrom?: string;
  emergency?: boolean;
  popular?: boolean;
  category: "repair" | "cleaning" | "commercial";
}

export const services: Service[] = [
  {
    slug: "roof-repairs",
    name: "Roof Repairs",
    shortName: "Roof Repairs",
    icon: "Hammer",
    tagline: "Fast, reliable roof repairs across Liverpool",
    description:
      "Professional roof repair services for all roof types across Liverpool and Merseyside. From missing tiles to structural damage, our expert roofers fix it right first time.",
    longDescription:
      "Liverpool's unpredictable weather — from driving Atlantic rain to winter gales — puts constant pressure on your roof. Whether you have a broken ridge tile, cracked slate, deteriorating flashing, or a persistent leak you can't track down, our experienced roofers diagnose the problem accurately and carry out lasting repairs that protect your home for years ahead. We work on all roof types: traditional slate, concrete and clay tile, flat roofs, and Victorian terraces common across Liverpool's residential streets. Every repair comes with a written guarantee and honest, upfront pricing — no hidden extras.",
    features: [
      "Broken and missing tile replacement",
      "Ridge tile repointing and replacement",
      "Lead flashing repairs and replacement",
      "Chimney stack repairs",
      "Roof felt and membrane repairs",
      "Structural timber repairs",
      "Leak detection and repair",
      "Storm damage assessment and repair",
    ],
    benefits: [
      "Prevent costly water damage to your home",
      "Same-day assessment available",
      "All roof types covered",
      "Fully insured, vetted tradespeople",
      "10-year workmanship guarantee",
      "Transparent, written quotes",
    ],
    process: [
      { step: 1, title: "Free Roof Inspection", description: "We assess your roof thoroughly and identify all issues, not just the obvious ones." },
      { step: 2, title: "Honest Written Quote", description: "You receive a detailed quote with no hidden costs before any work begins." },
      { step: 3, title: "Expert Repair", description: "Our qualified roofers carry out all repairs using quality materials built to last." },
      { step: 4, title: "Final Check", description: "We inspect the completed work and clean up, leaving your property spotless." },
    ],
    faqs: [
      {
        question: "How quickly can you repair my roof in Liverpool?",
        answer: "For non-emergency repairs, we typically attend within 2–3 working days. For emergency roof repairs, we aim to have someone with you within 60 minutes across Liverpool and Merseyside.",
      },
      {
        question: "How much does a roof repair cost in Liverpool?",
        answer: "Roof repair costs vary depending on the extent of damage. Minor repairs such as replacing a few tiles typically start from £150–£300. We provide free, no-obligation quotes before any work begins.",
      },
      {
        question: "Do you repair all types of roofs in Liverpool?",
        answer: "Yes. We repair slate roofs, clay tile, concrete tile, flat roofs, EPDM, felt, and GRP. Our team is experienced with all roof types common across Liverpool's Victorian, Edwardian, and modern properties.",
      },
      {
        question: "Will my roof repair come with a guarantee?",
        answer: "Absolutely. All our roofing repairs come with a 10-year workmanship guarantee. We are also fully insured, giving you complete peace of mind.",
      },
    ],
    keywords: [
      "roof repairs Liverpool",
      "roofer Liverpool",
      "roof repair near me Liverpool",
      "missing roof tile Liverpool",
      "leaking roof repair Liverpool",
      "ridge tile repairs Liverpool",
      "roof tile replacement Liverpool",
    ],
    priceFrom: "150",
    popular: true,
    category: "repair",
  },
  {
    slug: "emergency-roof-repairs",
    name: "Emergency Roof Repairs",
    shortName: "Emergency Repairs",
    icon: "AlertTriangle",
    tagline: "24/7 emergency roof repair response across Liverpool",
    description:
      "When a storm hits or your roof fails suddenly, call us. We offer 24/7 emergency roof repair service across Liverpool and Merseyside, aiming to respond within 60 minutes.",
    longDescription:
      "A roof emergency can happen at any time — a midnight storm tears off tiles, heavy rainfall forces water through your ceiling, or high winds topple a chimney stack. When the unexpected strikes, you need a roofer who picks up the phone and arrives fast. Our emergency roofing team covers all of Liverpool, Waterloo, Crosby, Bootle, and surrounding areas 24 hours a day, 7 days a week, 365 days a year. We carry a comprehensive stock of materials in our vehicles so we can carry out temporary weatherproofing and permanent repairs on the same visit wherever possible. We work with all major insurers and can provide detailed reports for insurance claims.",
    features: [
      "60-minute emergency response target",
      "24/7, 365 days a year availability",
      "Temporary weatherproofing applied immediately",
      "Full insurance claim support and reports",
      "Same-day permanent repairs where possible",
      "Storm damage specialist assessment",
      "Tarpaulin and emergency boarding if needed",
      "Out-of-hours call-out service",
    ],
    benefits: [
      "Stop water ingress immediately",
      "Minimise interior damage",
      "Expert storm damage assessment",
      "Insurance claim documentation provided",
      "Available when other roofers aren't",
      "Single point of contact from call to completion",
    ],
    process: [
      { step: 1, title: "Emergency Call", description: "Call us now. We answer 24/7 and dispatch a roofer immediately." },
      { step: 2, title: "Rapid Response", description: "Our emergency roofer arrives within 60 minutes across Liverpool." },
      { step: 3, title: "Secure Your Roof", description: "We apply weatherproofing immediately to stop further damage." },
      { step: 4, title: "Full Repair", description: "We complete permanent repairs and provide a full damage report if needed for insurance." },
    ],
    faqs: [
      {
        question: "Do you offer 24-hour emergency roofing in Liverpool?",
        answer: "Yes. We operate a genuine 24/7 emergency roofing service across Liverpool and the wider Merseyside area. We aim to respond within 60 minutes of your call.",
      },
      {
        question: "What counts as a roof emergency?",
        answer: "A roof emergency includes: active water ingress (leak), missing large sections of tiles after a storm, fallen chimney stacks, collapsed sections of roof, exposed roof timbers, or any damage that leaves your home at immediate risk.",
      },
      {
        question: "Can you help me make an insurance claim for storm roof damage?",
        answer: "Yes. We work with all major home insurers and can produce a detailed written damage report, photographs, and costings to support your claim. We can also work directly with loss adjusters on your behalf.",
      },
    ],
    keywords: [
      "emergency roof repair Liverpool",
      "24 hour roofer Liverpool",
      "emergency roofer Liverpool",
      "storm damage roof repair Liverpool",
      "emergency roofing Merseyside",
      "roof leak emergency Liverpool",
      "urgent roof repair Liverpool",
    ],
    emergency: true,
    popular: true,
    category: "repair",
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortName: "Roof Cleaning",
    icon: "Sparkles",
    tagline: "Restore your roof's appearance and extend its life",
    description:
      "Professional roof cleaning services in Liverpool using soft wash, steam, and pressure washing techniques. Remove moss, algae, lichen and black stains safely.",
    longDescription:
      "Liverpool's damp, Atlantic climate creates the perfect environment for moss, algae, and lichen to colonise roof tiles. Left untreated, these organisms trap moisture, accelerate tile deterioration, block gutters, and significantly reduce kerb appeal. Our professional roof cleaning team uses the correct technique for your roof type — low-pressure soft washing for delicate slates and tiles, or specialist biocide treatments — to remove organic growth safely without damaging your tiles or voiding warranties. After cleaning, we can apply a professional biocide treatment that inhibits regrowth for 5–10 years, saving you money long-term.",
    features: [
      "Moss, algae and lichen removal",
      "Soft wash low-pressure cleaning",
      "High-pressure tile cleaning",
      "Steam cleaning available",
      "Post-clean biocide treatment",
      "Moss prevention spray application",
      "Tile brightening and restoration",
      "Gutter clearing included",
    ],
    benefits: [
      "Extends roof life by up to 10 years",
      "Dramatically improves kerb appeal",
      "Prevents costly structural damage",
      "Protects home insurance validity",
      "Biocide treatment lasts 5–10 years",
      "Increases property value",
    ],
    process: [
      { step: 1, title: "Roof Assessment", description: "We inspect your roof's condition and recommend the safest, most effective cleaning method." },
      { step: 2, title: "Debris Removal", description: "Loose moss and debris are removed manually before washing begins." },
      { step: 3, title: "Professional Cleaning", description: "We clean your roof using the appropriate technique — soft wash, steam, or pressure wash." },
      { step: 4, title: "Biocide Treatment", description: "A professional biocide is applied to kill remaining spores and prevent regrowth for years." },
    ],
    faqs: [
      {
        question: "Is roof cleaning worth it in Liverpool?",
        answer: "Absolutely. Liverpool's wet climate means roofs accumulate moss and algae faster than in drier regions. Roof cleaning removes organisms that damage tiles, blocks gutters, and causes leaks — extending your roof's life significantly. It also dramatically improves the appearance of your home.",
      },
      {
        question: "How often should I clean my roof in Liverpool?",
        answer: "We recommend a professional roof clean every 3–5 years in Liverpool's climate. With our post-clean biocide treatment, growth is significantly inhibited, often keeping roofs clean for 5–10 years.",
      },
      {
        question: "Does roof cleaning damage roof tiles?",
        answer: "Not when done correctly. We always use the safest, most appropriate method for your specific roof type. For delicate slates and tiles, we use soft wash low-pressure techniques that clean effectively without risking tile damage.",
      },
    ],
    keywords: [
      "roof cleaning Liverpool",
      "moss removal Liverpool roof",
      "roof soft washing Liverpool",
      "roof pressure washing Liverpool",
      "algae removal Liverpool roof",
      "roof biocide treatment Liverpool",
    ],
    popular: true,
    category: "cleaning",
  },
  {
    slug: "roof-moss-removal",
    name: "Roof Moss Removal",
    shortName: "Moss Removal",
    icon: "Leaf",
    tagline: "Eliminate moss and protect your roof from Liverpool's damp climate",
    description:
      "Specialist roof moss removal service in Liverpool. Our expert team removes moss safely and applies long-lasting biocide treatments to prevent regrowth.",
    longDescription:
      "Moss is one of the most common and damaging problems facing Liverpool homeowners. In Merseyside's mild, wet climate, moss spreads rapidly across both clay and concrete tiles, growing into the surface and forcing tiles apart over time. As it holds moisture against your roof surface, it accelerates freeze-thaw damage in winter and provides a pathway for water to penetrate beneath tiles. Our moss removal specialists carefully remove all moss growth — working from the ridge down — and apply a professional-grade biocide treatment that kills remaining spores and prevents regrowth for years.",
    features: [
      "Manual moss brushing and removal",
      "Chemical moss treatment application",
      "Ridge tile moss removal",
      "Post-removal biocide spray",
      "Gutter clearing of moss debris",
      "Moss prevention strips fitted",
      "Annual maintenance plans available",
      "Zinc/copper strip installation",
    ],
    benefits: [
      "Prevents tile cracking and lifting",
      "Stops gutter blockages",
      "Protects roof structure long-term",
      "Improves home appearance instantly",
      "Regrowth inhibited for 5+ years",
      "Avoids expensive structural repairs",
    ],
    process: [
      { step: 1, title: "Moss Assessment", description: "We survey the extent of moss growth and check for any underlying damage it may have caused." },
      { step: 2, title: "Manual Removal", description: "Moss is carefully brushed away by hand, working from ridge to eaves to avoid damaging tiles." },
      { step: 3, title: "Biocide Application", description: "A professional biocide is applied across the entire roof surface to kill remaining spores." },
      { step: 4, title: "Prevention Measures", description: "We can fit moss-resistant zinc strips at the ridge to provide long-term natural prevention." },
    ],
    faqs: [
      {
        question: "Why does my Liverpool roof get so much moss?",
        answer: "Liverpool and Merseyside's westerly Atlantic climate means higher rainfall, lower sunshine hours, and persistent dampness compared to much of England. This creates ideal conditions for moss, algae, and lichen to thrive on north-facing and shaded roof surfaces.",
      },
      {
        question: "How do I stop moss growing back on my roof?",
        answer: "The most effective approach is professional moss removal followed by a biocide treatment, combined with the fitting of zinc or copper strips at the ridge. These metals release ions when it rains that naturally inhibit moss regrowth across the whole roof.",
      },
    ],
    keywords: [
      "roof moss removal Liverpool",
      "moss removal Liverpool",
      "moss on roof Liverpool",
      "roof moss treatment Liverpool",
      "remove moss from roof Liverpool",
    ],
    category: "cleaning",
  },
  {
    slug: "roof-soft-washing",
    name: "Roof Soft Washing",
    shortName: "Soft Washing",
    icon: "Droplets",
    tagline: "Safe, low-pressure roof cleaning that won't damage your tiles",
    description:
      "Professional soft wash roof cleaning in Liverpool. The safe alternative to pressure washing — effective on moss, algae and lichen without risking tile damage.",
    longDescription:
      "Pressure washing a roof can dislodge granules from tiles, damage mortar, and void manufacturer warranties. Soft washing uses low water pressure combined with specialist biodegradable cleaning solutions to kill moss, algae, lichen, and black staining at the root — leaving your roof clean without any risk of damage. This method is recommended by most major tile manufacturers and is the preferred approach for slate roofs, aged tiles, and any roof where pressure washing carries a risk. Our Liverpool soft wash teams carry professional-grade equipment and cleaning solutions for outstanding results.",
    features: [
      "Ultra-low pressure application",
      "Biodegradable cleaning agents",
      "Safe for all tile and slate types",
      "Kills biological growth at the root",
      "No tile damage risk",
      "Manufacturer warranty compliant",
      "Long-lasting results",
      "Streak-free finish",
    ],
    benefits: [
      "Zero risk of tile or slate damage",
      "Cleans more thoroughly than pressure washing",
      "Kills biological growth rather than just removing it",
      "Safe for all roof types",
      "Results last longer",
      "Preserves tile coatings and granules",
    ],
    process: [
      { step: 1, title: "Roof Inspection", description: "We assess your roof type and the nature of growth to select the correct cleaning solution." },
      { step: 2, title: "Solution Application", description: "Specialist soft wash solution is applied at low pressure across the entire roof surface." },
      { step: 3, title: "Dwell Time", description: "The solution works into the biological growth, killing it at the root." },
      { step: 4, title: "Gentle Rinse", description: "The roof is gently rinsed clean at very low pressure, leaving a pristine finish." },
    ],
    faqs: [
      {
        question: "What is soft washing and why is it better than pressure washing for roofs?",
        answer: "Soft washing uses low water pressure (similar to a garden hose) combined with specialist cleaning solutions to kill and remove moss, algae, and lichen. Unlike pressure washing, it doesn't risk cracking tiles, displacing granules, or disturbing mortar — making it significantly safer for your roof.",
      },
    ],
    keywords: [
      "roof soft washing Liverpool",
      "soft wash roof cleaning Liverpool",
      "low pressure roof cleaning Liverpool",
      "safe roof cleaning Liverpool",
    ],
    category: "cleaning",
  },
  {
    slug: "roof-steam-cleaning",
    name: "Roof Steam Cleaning",
    shortName: "Steam Cleaning",
    icon: "Wind",
    tagline: "Deep clean your roof with professional steam technology",
    description:
      "Professional roof steam cleaning in Liverpool. High-temperature steam penetrates deep into tiles to kill moss, algae and lichen without chemicals.",
    longDescription:
      "Roof steam cleaning uses superheated steam at precisely controlled temperatures to penetrate roof tiles and kill biological growth — including moss, algae, lichen, and black algae staining — without the need for chemical treatments. This makes it an excellent choice for environmentally conscious homeowners, those near gardens and ponds, and properties where chemical run-off is a concern. The high-temperature steam also reaches into joints and crevices that pressure washing and soft washing miss, producing an exceptionally thorough clean.",
    features: [
      "Chemical-free cleaning process",
      "Kills all biological growth",
      "Penetrates joints and crevices",
      "No chemical run-off",
      "Safe near gardens and water features",
      "Sanitises roof surface",
      "Suitable for sensitive environments",
      "Streak-free professional finish",
    ],
    benefits: [
      "Environmentally friendly — no chemicals",
      "Deeper clean than pressure washing",
      "Safe near ponds, gardens and allotments",
      "Kills bacteria and pathogens",
      "Outstanding results on stubborn staining",
      "No risk of chemical damage to tiles",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We evaluate the type and extent of growth and confirm steam cleaning is the optimal approach." },
      { step: 2, title: "Steam Application", description: "Professional steam equipment is used to treat the entire roof surface systematically." },
      { step: 3, title: "Detail Work", description: "Joints, valleys and crevices are treated by hand for a complete result." },
      { step: 4, title: "Clean-Up", description: "All loosened debris is cleared from gutters and surrounding areas." },
    ],
    faqs: [
      {
        question: "Is steam cleaning better than soft washing for roofs?",
        answer: "Both achieve excellent results. Steam cleaning is the preferred option when chemicals should be avoided — near ponds, vegetable gardens, or for environmentally conscious homeowners. Soft washing is often preferred for roofs with very heavy biological growth. We'll recommend the right approach for your specific situation.",
      },
    ],
    keywords: [
      "roof steam cleaning Liverpool",
      "steam clean roof Liverpool",
      "chemical free roof cleaning Liverpool",
    ],
    category: "cleaning",
  },
  {
    slug: "flat-roof-repairs",
    name: "Flat Roof Repairs",
    shortName: "Flat Roof Repairs",
    icon: "Layers",
    tagline: "Expert flat roof repair and replacement across Liverpool",
    description:
      "Specialist flat roof repair and replacement services in Liverpool. We work with felt, EPDM rubber, GRP fibreglass, and torch-on systems for lasting results.",
    longDescription:
      "Flat roofs are common on Liverpool's extensions, garages, bay windows, and commercial properties. They are particularly vulnerable to pooling water, UV degradation, and joint failure. Signs your flat roof needs attention include bubbling felt, visible cracking, persistent leaks, or pooling water after rain. Our flat roof specialists diagnose the exact failure point and offer either targeted repairs or full replacement depending on condition and age. We work with all flat roof systems including traditional felt, single-ply EPDM rubber, GRP fibreglass, and torch-on modified bitumen — advising on the most cost-effective and durable solution for your specific situation.",
    features: [
      "Felt flat roof repairs",
      "EPDM rubber roof repairs and installation",
      "GRP fibreglass roof repairs and overlay",
      "Torch-on felt repairs",
      "Flat roof leak detection",
      "Drainage improvement",
      "Full flat roof replacement",
      "Roof terrace waterproofing",
    ],
    benefits: [
      "Permanent watertight repairs",
      "Choice of long-lasting systems",
      "EPDM comes with 20-year guarantee",
      "Faster installation than pitched roofs",
      "Specialist diagnosis — no guesswork",
      "Works with all flat roof types",
    ],
    process: [
      { step: 1, title: "Flat Roof Inspection", description: "We locate the exact failure point using visual inspection and where needed, moisture detection." },
      { step: 2, title: "System Recommendation", description: "We advise on repair vs replacement and the best system for your roof's condition and use." },
      { step: 3, title: "Expert Repair/Installation", description: "Our flat roof specialists carry out all work to the highest standards." },
      { step: 4, title: "Watertight Test", description: "We test the completed work and issue a guarantee certificate." },
    ],
    faqs: [
      {
        question: "How long does a flat roof last in Liverpool?",
        answer: "Lifespan varies by system: traditional felt lasts 10–15 years, torch-on felt 15–20 years, EPDM rubber 25–50 years, and GRP fibreglass 25+ years. We'll help you choose the right system for your budget and the longevity you need.",
      },
    ],
    keywords: [
      "flat roof repairs Liverpool",
      "flat roof replacement Liverpool",
      "EPDM flat roof Liverpool",
      "GRP flat roof Liverpool",
      "flat roof leak Liverpool",
      "felt roof repairs Liverpool",
    ],
    popular: true,
    category: "repair",
  },
  {
    slug: "leadwork",
    name: "Leadwork",
    shortName: "Leadwork",
    icon: "Triangle",
    tagline: "Traditional lead flashing and valley work from Liverpool craftsmen",
    description:
      "Expert leadwork services in Liverpool. Chimney flashing, valley lead, abutment flashing and roof lead replacement by experienced craftsmen.",
    longDescription:
      "Lead is the most durable and traditional waterproofing material used in roofing, found at chimney stacks, roof valleys, abutments, bay windows, and dormers across Liverpool's Victorian and Edwardian properties. When lead fails — due to age, movement, or poor original installation — it creates persistent leaks that are often misdiagnosed. Our experienced leadworkers craft bespoke lead flashing to the correct specification and code thickness, ensuring a watertight joint that lasts generations. All our lead work is carried out in compliance with current building regulations and the Lead Sheet Association guidelines.",
    features: [
      "Chimney flashing installation and replacement",
      "Valley lead replacement",
      "Abutment flashing",
      "Bay window lead work",
      "Dormer flashing",
      "All Lead Sheet Association standards observed",
      "Emergency lead repairs",
      "Code 3–6 lead as specified",
    ],
    benefits: [
      "Lasts 60–100 years when correctly installed",
      "Permanently eliminates chimney and valley leaks",
      "Crafted to precise specification",
      "Traditional material for heritage properties",
      "Fully waterproof in all conditions",
      "Compliant with building regulations",
    ],
    process: [
      { step: 1, title: "Lead Survey", description: "We assess the existing leadwork, identify failure points, and determine the correct specification." },
      { step: 2, title: "Old Lead Removed", description: "Failed lead is carefully stripped out without damaging surrounding tiles or stonework." },
      { step: 3, title: "New Lead Dressed", description: "Bespoke lead is cut, dressed, and fixed to the correct specification for lasting results." },
      { step: 4, title: "Inspection and Guarantee", description: "The completed work is inspected thoroughly and guaranteed against defects." },
    ],
    faqs: [
      {
        question: "How long does lead flashing last on a Liverpool roof?",
        answer: "Correctly installed lead flashing has a lifespan of 60–100 years. Lead is one of the most durable roofing materials available and is commonly found on Victorian and Edwardian properties throughout Liverpool.",
      },
    ],
    keywords: [
      "leadwork Liverpool",
      "lead flashing Liverpool",
      "chimney flashing Liverpool",
      "lead valley Liverpool",
      "lead roof repairs Liverpool",
      "lead flashing repair Liverpool",
    ],
    category: "repair",
  },
  {
    slug: "slate-roof-cleaning",
    name: "Slate Roof Cleaning",
    shortName: "Slate Roof Cleaning",
    icon: "Grid3X3",
    tagline: "Specialist slate roof cleaning for Liverpool's Victorian properties",
    description:
      "Expert slate roof cleaning in Liverpool. We safely clean natural and fibre cement slate roofs using low-pressure soft wash methods that preserve slate integrity.",
    longDescription:
      "Slate roofs are common across Liverpool's Victorian and Edwardian terraces, and while natural slate is among the most durable roofing materials available, it requires careful cleaning to avoid damage. High-pressure washing can dislodge the natural texture of slate, widen hairline cracks, and disturb the nail fixings that hold slates in place. Our slate cleaning specialists use gentle, low-pressure soft wash techniques combined with specialist biocidal treatments that clean slate thoroughly and safely. The result is a clean, restored slate roof without any risk of pressure-related damage.",
    features: [
      "Low-pressure soft wash technique",
      "Safe for natural Welsh and Spanish slate",
      "Safe for fibre cement slate",
      "Biocidal treatment applied post-clean",
      "Moss and lichen removal",
      "Careful working to avoid dislodging slates",
      "Ground-level inspection included",
      "Post-clean condition report",
    ],
    benefits: [
      "Zero risk of slate damage",
      "Restores original slate appearance",
      "Biocide prevents regrowth for years",
      "Preserves historic character of Victorian properties",
      "Extends slate lifespan significantly",
      "Improves kerb appeal dramatically",
    ],
    process: [
      { step: 1, title: "Slate Assessment", description: "We inspect the slate type, condition, and growth to select the safest cleaning approach." },
      { step: 2, title: "Soft Wash Application", description: "Specialist cleaning solution is applied at ultra-low pressure to clean without damage." },
      { step: 3, title: "Biocide Treatment", description: "Professional biocide is applied to prevent lichen and moss regrowth." },
      { step: 4, title: "Condition Report", description: "We inspect the cleaned roof and note any slates requiring attention." },
    ],
    faqs: [
      {
        question: "Can I pressure wash my slate roof?",
        answer: "We strongly advise against it. High-pressure washing can crack slates, dislodge nail fixings, and widen hairline fractures — turning a cleaning job into a repair job. Soft washing is far safer and actually more effective at killing biological growth at the root.",
      },
    ],
    keywords: [
      "slate roof cleaning Liverpool",
      "clean slate roof Liverpool",
      "Victorian roof cleaning Liverpool",
      "natural slate cleaning Liverpool",
    ],
    category: "cleaning",
  },
  {
    slug: "tile-roof-cleaning",
    name: "Tile Roof Cleaning",
    shortName: "Tile Roof Cleaning",
    icon: "LayoutGrid",
    tagline: "Restore clay and concrete roof tiles to their original appearance",
    description:
      "Professional tile roof cleaning in Liverpool. Restore clay and concrete tiles, remove moss and staining, and protect with biocide treatments.",
    longDescription:
      "Both clay and concrete roof tiles are found across Liverpool's residential properties, from interwar semis to modern estates. Concrete tiles in particular are porous and highly susceptible to moss and algae growth in Liverpool's damp climate. Clay tiles are more resistant but still accumulate lichen and general soiling over time. Our tile cleaning service removes all biological growth and staining, restores the tile's original colour, and applies a professional biocide to inhibit regrowth. For concrete tiles, we can also apply a specialist sealing coat that dramatically reduces future moss growth and helps the tile retain its colour.",
    features: [
      "Concrete tile cleaning and restoration",
      "Clay tile soft wash cleaning",
      "Lichen and algae removal",
      "Ridge tile cleaning",
      "Valley cleaning",
      "Post-clean biocide treatment",
      "Concrete tile sealing optional",
      "Before-and-after photography",
    ],
    benefits: [
      "Restores tiles to original appearance",
      "Prevents premature tile failure",
      "Biocide treatment lasts 5–10 years",
      "Sealing reduces future maintenance",
      "Improves property kerb appeal",
      "Extends tile lifespan",
    ],
    process: [
      { step: 1, title: "Tile Assessment", description: "We assess tile type, condition and growth level to choose the optimum cleaning method." },
      { step: 2, title: "Cleaning", description: "Tiles are cleaned thoroughly using the correct pressure and solution for the tile type." },
      { step: 3, title: "Biocide Application", description: "Post-clean biocide is applied to kill remaining spores and inhibit regrowth." },
      { step: 4, title: "Optional Sealing", description: "A breathable tile sealer can be applied to concrete tiles for additional protection." },
    ],
    faqs: [
      {
        question: "How do I know if my Liverpool roof tiles need cleaning?",
        answer: "Green discolouration indicates algae, black streaks are algae or pollution staining, and visible green/brown cushions on tiles are moss. Any of these indicate it's time for a professional clean, both for appearance and to prevent tile deterioration.",
      },
    ],
    keywords: [
      "tile roof cleaning Liverpool",
      "concrete tile cleaning Liverpool",
      "clay tile cleaning Liverpool",
      "roof tile restoration Liverpool",
    ],
    category: "cleaning",
  },
  {
    slug: "commercial-roof-cleaning",
    name: "Commercial Roof Cleaning",
    shortName: "Commercial Cleaning",
    icon: "Factory",
    tagline: "Commercial roof cleaning specialists — Liverpool, Merseyside & North West",
    description:
      "Professional commercial roof cleaning in Liverpool — trusted by businesses, facilities managers, and commercial landlords across Merseyside. COSHH-compliant flat roof, industrial, and commercial building cleaning with full health and safety documentation. Free site survey.",
    longDescription:
      "Commercial buildings across Liverpool and Merseyside face significant challenges from biological growth and debris accumulation on their rooflines. Flat industrial roofs — the most common commercial roofing type across Merseyside's business parks, retail units, and warehouses — accumulate moss, algae, and atmospheric soiling that blocks internal drainage points, creates hazardous ponding water, and can add structural loading to drainage-critical roof zones. Left untreated, blocked commercial roof drains can cause tens of thousands of pounds in damage to stock, equipment, and building fabric.\n\nAs Liverpool's commercial roof cleaning specialists, Sefton Roofing provides a complete service for businesses of all sizes — from single retail units in the city centre to multi-site industrial premises across the North West. Our commercial cleaning team operates within current Health and Safety at Work regulations, holds £5 million public liability insurance, and provides full documentation including method statements, COSHH assessments, and risk assessments for every project. We can work outside business hours — evenings, weekends, and bank holidays — to minimise disruption to your tenants and operations.\n\nWe work with facilities managers, property managers, commercial landlords, building surveyors, housing associations, and business owners directly to deliver planned preventative maintenance (PPM) programmes that keep roofs clean, drainage systems clear, and buildings compliant with commercial property obligations. Our commercial roof cleaning service covers all roofing types: EPDM and rubber flat roofs, felt and torch-on systems, GRP fibreglass, metal standing seam, corrugated fibre cement and steel sheeting, and commercial tiled rooflines.",
    features: [
      "Large-scale commercial flat roof cleaning",
      "Industrial and warehouse roofline cleaning",
      "COSHH-compliant cleaning methods throughout",
      "Full health and safety documentation provided",
      "Method statements and risk assessments included",
      "Out-of-hours, weekend and bank holiday working",
      "Multi-site contracts across North West",
      "Emergency drain and gulley clearance",
      "Planned preventative maintenance (PPM) programmes",
      "Before-and-after photographic reporting",
    ],
    benefits: [
      "Eliminates standing water and structural roof loading",
      "Fully COSHH and WAH regulation compliant",
      "Minimises disruption to business operations",
      "Prevents costly damage to stock and equipment",
      "Multi-site management from a single provider",
      "Detailed post-clean reports for your property records",
      "Priority emergency response for contract clients",
      "Reduces commercial property insurance risk",
    ],
    process: [
      { step: 1, title: "Free Site Survey", description: "We visit your commercial property, assess roof type, access requirements, drainage layout, and produce a full method statement." },
      { step: 2, title: "COSHH & Risk Assessment", description: "All required health and safety documentation is prepared and issued before any operatives attend site." },
      { step: 3, title: "Professional Clean", description: "Our commercial cleaning team carries out the full programme safely, efficiently, and to specification." },
      { step: 4, title: "Completion Report", description: "A full photographic completion report and updated documentation are provided for your compliance records." },
    ],
    faqs: [
      {
        question: "How much does commercial roof cleaning cost in Liverpool?",
        answer: "Commercial roof cleaning costs in Liverpool and Merseyside depend on roof type, size, access requirements, and the extent of biological growth. Most commercial flat roofs start from £250 for smaller units. Large industrial roofs and multi-building sites are priced on a bespoke basis following a free site survey. We provide detailed written quotes with no hidden costs.",
      },
      {
        question: "What types of commercial buildings do you clean in Liverpool?",
        answer: "We provide commercial roof cleaning across Liverpool and Merseyside for: office buildings, retail units and shopping centres, warehouses and distribution centres, schools, colleges and universities, industrial premises and factories, NHS and council buildings, hotels and hospitality venues, residential apartment blocks, and car park decks. We are experienced on both flat and pitched commercial rooflines.",
      },
      {
        question: "Do you provide health and safety documentation for commercial roof cleaning?",
        answer: "Yes — every commercial project includes a site-specific method statement, COSHH assessment, risk assessment, and proof of our £5 million public liability insurance. We comply fully with the Work at Height Regulations 2005 and all relevant HSE guidance. Documentation is provided in advance of work commencing so your facilities team can review and approve.",
      },
      {
        question: "How often should commercial roofs be cleaned in Liverpool?",
        answer: "We recommend commercial flat roofs in Liverpool and Merseyside are professionally cleaned every 12–24 months, depending on surrounding vegetation, local pollution levels, and roof drainage design. Buildings in areas with heavy tree cover or near industrial activity may require more frequent cleaning. We offer planned preventative maintenance (PPM) contracts that schedule regular cleans and inspections to keep your roof compliant year-round.",
      },
      {
        question: "Can you carry out commercial roof cleaning outside business hours?",
        answer: "Yes. We regularly work evenings, weekends, and bank holidays for commercial clients across Liverpool and Merseyside where business continuity is a priority. Out-of-hours working is included in our commercial quotes at no additional premium for scheduled contract work. We also offer emergency drain clearance and urgent commercial cleaning on 24-hour callout.",
      },
      {
        question: "Do you offer commercial roof cleaning contracts in Liverpool?",
        answer: "Yes. We offer tailored commercial roof cleaning maintenance contracts for single-site and multi-site commercial properties across Liverpool, Merseyside, and the wider North West. Contracted clients receive priority scheduling, discounted rates, and regular condition reporting — ideal for facilities managers and commercial landlords managing multiple properties.",
      },
    ],
    keywords: [
      "commercial roof cleaning Liverpool",
      "commercial roof cleaning Merseyside",
      "industrial roof cleaning Liverpool",
      "flat roof cleaning commercial Liverpool",
      "commercial building roof cleaning Liverpool",
      "commercial roof cleaning companies Liverpool",
      "commercial roof cleaning contractors Merseyside",
      "COSHH compliant roof cleaning Liverpool",
      "commercial flat roof cleaning Liverpool",
      "warehouse roof cleaning Liverpool",
      "office roof cleaning Liverpool",
      "PPM roof cleaning Liverpool",
      "commercial roofing services Liverpool",
    ],
    priceFrom: "250",
    popular: true,
    category: "commercial",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return services.filter((s) => s.category === category);
}

export function getPopularServices(): Service[] {
  return services.filter((s) => s.popular);
}

export function getEmergencyService(): Service | undefined {
  return services.find((s) => s.emergency);
}
