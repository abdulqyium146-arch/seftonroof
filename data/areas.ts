export interface Area {
  slug: string;
  name: string;
  county: string;
  postcode: string;
  description: string;
  longDescription: string;
  roofingChallenges: string[];
  popularServices: string[];
  nearbyAreas: string[];
  facts: string[];
  geo: { lat: number; lng: number };
}

export const areas: Area[] = [
  {
    slug: "liverpool",
    name: "Liverpool",
    county: "Merseyside",
    postcode: "L1–L36",
    description:
      "Liverpool's trusted roofing specialists. Expert roof repairs, roof cleaning and flat roof repairs across all Liverpool postcodes.",
    longDescription:
      "As Liverpool's leading roofing contractor, Sefton Roofing serves homes and businesses across every part of the city — from the terraced streets of Toxteth and Everton to the larger Victorian villas of Aigburth and Woolton. Liverpool's exposed position on the Mersey estuary means its properties face some of the most challenging weather conditions in England, with high rainfall, Atlantic winds, and significant temperature variation. Our teams are based locally and understand the specific roofing challenges of Liverpool's diverse housing stock, from grand Edwardian mansions to post-war council housing estates and modern new builds.",
    roofingChallenges: [
      "High annual rainfall from Atlantic weather systems",
      "Persistent westerly winds causing tile dislodgement",
      "Freeze-thaw cycles damaging pointing and mortar",
      "Rapid moss growth on north-facing roof slopes",
      "Pollution and proximity to the Mersey affecting roofline materials",
      "Mix of Victorian, Edwardian, and modern roof types",
    ],
    popularServices: [
      "roof-repairs",
      "emergency-roof-repairs",
      "roof-cleaning",
      "flat-roof-repairs",
      "slate-roof-cleaning",
    ],
    nearbyAreas: ["waterloo", "crosby", "bootle", "walton", "everton"],
    facts: [
      "Liverpool receives approximately 850mm of rainfall per year — significantly above the UK average",
      "The city's Victorian terrace housing stock requires specialist traditional roofing skills",
      "Liverpool has over 300,000 residential properties across its postcodes",
    ],
    geo: { lat: 53.4084, lng: -2.9916 },
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    county: "Merseyside",
    postcode: "L22",
    description:
      "Expert roofing services in Waterloo, Liverpool. Local roofers you can trust — roof repairs, roof cleaning and flat roof repairs in Waterloo.",
    longDescription:
      "Waterloo is our home base, and we've been maintaining and repairing the roofs of Waterloo's Victorian terraces, Edwardian semis, and coastal properties for over 14 years. Located directly on the Mersey coast, Waterloo properties face some of the most exposed weather conditions in Merseyside — coastal winds, salt-laden air, and high rainfall that accelerates moss growth and material deterioration. We know Waterloo's rooftops intimately and offer the fastest response times in the area, typically arriving within the hour for emergencies.",
    roofingChallenges: [
      "Coastal salt air accelerating metal corrosion on flashings and guttering",
      "Persistent coastal winds causing tile slippage and ridge displacement",
      "High rainfall and proximity to the coast promoting rapid moss growth",
      "Mix of Victorian terraces and Edwardian semis requiring traditional skills",
      "Coastal exposure meaning debris blocks internal gutters more frequently",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "leadwork",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["crosby", "bootle", "litherland", "kirkdale"],
    facts: [
      "Waterloo's coastal location makes it one of the most exposed areas in Merseyside",
      "The area's Victorian and Edwardian properties require specialist traditional roofing skills",
      "Salt air significantly accelerates corrosion of metal roofline components",
    ],
    geo: { lat: 53.4786, lng: -3.0258 },
  },
  {
    slug: "crosby",
    name: "Crosby",
    county: "Merseyside",
    postcode: "L23",
    description:
      "Professional roofing services in Crosby, Liverpool. Trusted local roofers for roof repairs, moss removal, roof cleaning and all roofing needs in Crosby.",
    longDescription:
      "Crosby is one of Merseyside's most desirable residential areas, with a wide range of property types from Victorian terraces near Crosby beach to larger interwar detached properties in Blundellsands. The area's proximity to the Irish Sea means coastal exposure is a significant factor for roofing longevity. Sefton Roofing has built an outstanding reputation in Crosby over many years, with a large proportion of our work coming from recommendations within the local community. We understand the specific roofing needs of Crosby's housing stock and provide fast, reliable service to all parts of the area.",
    roofingChallenges: [
      "Coastal exposure from proximity to Crosby beach and the Irish Sea",
      "High winds causing ridge tile displacement on exposed properties",
      "Sand and salt residue accelerating corrosion of metal components",
      "Moss growth on north and west-facing roof slopes",
      "Mix of coastal Victorian terraces and larger interwar properties",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "flat-roof-repairs",
      "leadwork",
    ],
    nearbyAreas: ["waterloo", "formby", "litherland", "maghull"],
    facts: [
      "Crosby is home to Antony Gormley's Another Place sculpture on the beach",
      "The area's Blundellsands neighbourhood has some of Merseyside's most impressive Victorian villas",
      "Coastal properties in Crosby require more frequent maintenance than inland homes",
    ],
    geo: { lat: 53.4869, lng: -3.0330 },
  },
  {
    slug: "bootle",
    name: "Bootle",
    county: "Merseyside",
    postcode: "L20",
    description:
      "Reliable roofing services in Bootle, Liverpool. Local roofers offering roof repairs, roof cleaning, flat roof repairs and emergency roofing in Bootle.",
    longDescription:
      "Bootle's predominantly Victorian and Edwardian terraced housing stock presents specific roofing challenges — older properties with original slates, clay ridge tiles, lead flashings, and cast iron guttering that require traditional skills and careful handling. Our Bootle roofing team are experienced with the area's housing types and provide competitive, honest pricing for all roofing needs across Bootle's residential streets.",
    roofingChallenges: [
      "Victorian and Edwardian terraces with original slates requiring specialist handling",
      "Older properties with deteriorating lead flashings",
      "Cast iron guttering requiring specialist repair skills",
      "Moss growth on tightly packed terraced rooflines",
      "Close proximity of properties making access challenging",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "slate-roof-cleaning",
      "leadwork",
      "emergency-roof-repairs",
    ],
    nearbyAreas: ["waterloo", "kirkdale", "litherland", "walton"],
    facts: [
      "Bootle's terraced streets are predominantly Victorian, built during the late 19th-century dock expansion",
      "Many Bootle properties retain original Welsh slate roofing",
      "Cast iron guttering is common in Bootle's older terraces",
    ],
    geo: { lat: 53.4440, lng: -2.9927 },
  },
  {
    slug: "sefton",
    name: "Sefton",
    county: "Merseyside",
    postcode: "L29–L31",
    description:
      "Trusted roofing services across Sefton, Merseyside. Expert local roofers for all roof types, roof cleaning and specialist roofing in the Sefton area.",
    longDescription:
      "The wider Sefton area encompasses a mix of coastal villages, rural settlements, and suburban residential areas. Roofing needs vary considerably across the area — from exposed coastal properties requiring robust repairs to newer suburban homes needing preventative maintenance. Sefton Roofing has deep roots in the area (our name reflects our long commitment to serving this community) and we provide a comprehensive roofing service to all parts of Sefton.",
    roofingChallenges: [
      "Mix of coastal and inland properties with differing exposure levels",
      "Wide variety of property ages and roof types",
      "Rural properties with more complex access requirements",
      "Moss and lichen growth across the damp Sefton landscape",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "flat-roof-repairs",
      "leadwork",
    ],
    nearbyAreas: ["formby", "crosby", "maghull", "litherland"],
    facts: [
      "Sefton is a Metropolitan Borough covering coastal communities from Bootle to Southport",
      "The area's diverse geography creates very different roofing challenges across its communities",
      "Sefton Roofing takes its name from the borough it is proud to serve",
    ],
    geo: { lat: 53.5228, lng: -2.9862 },
  },
  {
    slug: "formby",
    name: "Formby",
    county: "Merseyside",
    postcode: "L37",
    description:
      "Premium roofing services in Formby, Merseyside. Trusted local roofers for roof repairs, roof cleaning, gutter cleaning, leadwork and flat roofs on Formby's executive and period homes.",
    longDescription:
      "Formby is one of Merseyside's most desirable residential areas — a leafy coastal village where Victorian seaside villas sit alongside 1930s Arts & Crafts detacheds and contemporary executive builds. The neighbourhoods of Birkdale, Ainsdale, and Formby village itself each have distinct housing characters, but they share a common challenge: the area's coastal and woodland setting creates some of the most demanding roofing conditions in Merseyside.\n\nFormby Point's famous Scots pine forest — home to the UK's largest red squirrel population and managed by the National Trust — delivers a constant supply of pine needles that block gutters within weeks and accumulate on flat roof sections. Combined with the persistent south-westerly winds that funnel off the Irish Sea across the dunes, tile slippage, ridge displacement, and deteriorating pointing are recurring issues for Formby homeowners.\n\nThe area's salt-laden coastal air accelerates the corrosion of lead flashings, aluminium guttering, and metal fixings faster than in inland Merseyside postcodes. North and west-facing roof slopes — common on Formby's detached and semi-detached properties — can become moss-covered within two to three years without a biocide treatment regime.\n\nSefton Roofing has worked extensively across Formby and knows the area's housing stock well. We are typically on-site within 20–25 minutes from our Waterloo base for emergency calls, and we provide free no-obligation inspections for Formby homeowners. Many of our Formby clients are recommended to us through the local community — a reflection of the trust we've built in this area over many years. Whether you need a tile replacement on an original Victorian slate roof, a full EPDM flat roof on a garage extension, or a thorough gutter clean before the pine needles accumulate, our team delivers the standard of workmanship that Formby's properties deserve.",
    roofingChallenges: [
      "Pine needle accumulation from Formby Point's Scots pine woodland blocking gutters year-round",
      "Salt-laden coastal air accelerating corrosion of lead flashings and metal fixings",
      "Persistent south-westerly winds causing tile slippage and ridge displacement",
      "Rapid moss and algae growth on north and west-facing slopes due to coastal dampness",
      "High-value executive and period properties requiring quality workmanship and careful access management",
      "Complex hipped roofs, dormers, and multi-valley designs on detached executive homes",
      "Victorian and Arts & Crafts properties with original slate and lead that need sensitive handling",
      "Insurance requirements on premium properties often requiring accredited, fully insured contractors",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "roof-cleaning",
      "slate-roof-cleaning",
      "flat-roof-repairs",
      "leadwork",
    ],
    nearbyAreas: ["crosby", "southport", "maghull", "ormskirk"],
    facts: [
      "Formby is one of Merseyside's highest-value residential postcodes — average detached property prices exceed £500,000",
      "Formby Point's Scots pine woodland creates year-round pine needle debris on gutters and flat roof sections",
      "Salt air from the Irish Sea corrodes metal roofline components significantly faster than inland Merseyside postcodes",
      "Executive hipped and gabled roofs common in Formby's Birkdale and Ainsdale areas require specialist valley and leadwork skills",
      "Sefton Roofing reaches Formby from our Waterloo base in approximately 20 minutes — among the fastest response times available in L37",
      "North-facing roof slopes in Formby's leafy streets can accumulate moss covering within 2–3 years without treatment",
    ],
    geo: { lat: 53.5589, lng: -3.0685 },
  },
  {
    slug: "walton",
    name: "Walton",
    county: "Merseyside",
    postcode: "L4–L9",
    description:
      "Local roofing services in Walton, Liverpool. Trusted roofers for roof repairs, roof cleaning and emergency roofing in Walton and surrounding areas.",
    longDescription:
      "Walton is a densely populated Liverpool suburb with a predominantly Victorian and interwar terraced housing stock. The area's tightly packed streets mean access can be challenging, but our experienced team are adept at working efficiently in restricted spaces. Walton residents benefit from our fast response times and competitive pricing, and we have built a strong local reputation through word-of-mouth recommendations.",
    roofingChallenges: [
      "Densely packed terraced streets with limited access",
      "Victorian terraces with original slates and clay ridge tiles",
      "Moss growth on north-facing closely packed roofs",
      "Shared chimney stacks requiring careful neighbour coordination",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "emergency-roof-repairs",
      "slate-roof-cleaning",
    ],
    nearbyAreas: ["everton", "kirkdale", "anfield", "bootle"],
    facts: [
      "Walton is home to Everton's historic Goodison Park stadium",
      "The area's Victorian terraces are characteristic of Liverpool's inner-city housing stock",
      "Walton's proximity to our base means we offer some of the fastest response times in the city",
    ],
    geo: { lat: 53.4481, lng: -2.9681 },
  },
  {
    slug: "everton",
    name: "Everton",
    county: "Merseyside",
    postcode: "L5–L6",
    description:
      "Reliable roofing services in Everton, Liverpool. Expert roof repairs, emergency roofing and roof cleaning across Everton.",
    longDescription:
      "Everton is one of Liverpool's historic inner-city areas, with a mix of Victorian terraces, newer social housing, and older properties that require expert roofing care. The area's hillside position provides scenic views over the city but also means properties face increased wind exposure. Our team works across all of Everton's property types with the same commitment to quality and honest pricing.",
    roofingChallenges: [
      "Elevated position increasing wind exposure",
      "Mix of old Victorian and newer social housing requiring different approaches",
      "Urban pollution contributing to quicker roof soiling",
      "Emergency response priority for vulnerable residents",
    ],
    popularServices: [
      "roof-repairs",
      "emergency-roof-repairs",
      "roof-cleaning",
      "flat-roof-repairs",
      "leadwork",
    ],
    nearbyAreas: ["walton", "kirkdale", "anfield", "liverpool"],
    facts: [
      "Everton sits on a prominent hill with views across Liverpool Bay",
      "The area's elevated position means properties face higher wind loads than lower-lying Liverpool areas",
      "Everton has a rich history as one of Liverpool's original residential districts",
    ],
    geo: { lat: 53.4183, lng: -2.9699 },
  },
  {
    slug: "anfield",
    name: "Anfield",
    county: "Merseyside",
    postcode: "L4",
    description:
      "Professional roofing services in Anfield, Liverpool. Local roofers offering roof repairs, roof cleaning and all roofing services in Anfield.",
    longDescription:
      "Anfield is a densely built residential area of Liverpool known worldwide for its football heritage. The area's Victorian and Edwardian terraced streets are typical of Liverpool's inner-city housing stock, and their roofs require regular attention to prevent costly damage. Sefton Roofing provides fast, reliable roofing services throughout Anfield.",
    roofingChallenges: [
      "Victorian terraces with aging slate roofs",
      "Dense street layout making scaffolding challenging",
      "Shared chimney stacks between properties",
      "High footfall area requiring careful working practices",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "slate-roof-cleaning",
      "leadwork",
      "emergency-roof-repairs",
    ],
    nearbyAreas: ["walton", "everton", "kirkdale", "fazakerley"],
    facts: [
      "Anfield is home to Liverpool FC's iconic Anfield stadium",
      "The area's terraced streets date predominantly from the 1880s–1910s",
      "Anfield's Victorian properties often still carry original Welsh slate roofing",
    ],
    geo: { lat: 53.4306, lng: -2.9609 },
  },
  {
    slug: "aintree",
    name: "Aintree",
    county: "Merseyside",
    postcode: "L9–L10",
    description:
      "Trusted roofing services in Aintree, Liverpool. Expert local roofers for roof repairs, cleaning and roof moss removal in Aintree.",
    longDescription:
      "Aintree is best known for its world-famous racecourse, but it's also a thriving residential area with a mix of interwar semis, post-war housing, and more modern developments. Our roofing teams cover all of Aintree's property types, providing fast response times and competitive pricing for everything from emergency repairs to planned maintenance.",
    roofingChallenges: [
      "Mix of interwar and post-war property types",
      "Concrete tile roofs requiring specialist cleaning",
      "Proximity to open land increasing moss growth rates",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "tile-roof-cleaning",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["maghull", "walton", "fazakerley", "kirkdale"],
    facts: [
      "Aintree is home to the Grand National racecourse, one of the world's most famous horse racing venues",
      "The area has a mix of housing types built across several decades",
    ],
    geo: { lat: 53.4685, lng: -2.9420 },
  },
  {
    slug: "kirkdale",
    name: "Kirkdale",
    county: "Merseyside",
    postcode: "L4–L5",
    description:
      "Local roofing services in Kirkdale, Liverpool. Reliable roofers offering roof repairs, slate cleaning and emergency roofing in Kirkdale.",
    longDescription:
      "Kirkdale is one of Liverpool's oldest residential areas with a rich industrial and maritime heritage. Its Victorian terrace streets require specialist roofing knowledge, particularly for original slate roofs, lead valleys, and traditional cast iron guttering found on many properties.",
    roofingChallenges: [
      "Victorian terrace properties with original slate and lead",
      "Cast iron guttering requiring specialist skills",
      "Dense terraced layout with access challenges",
      "Older properties with mixed repair histories",
    ],
    popularServices: [
      "roof-repairs",
      "slate-roof-cleaning",
      "leadwork",
      "roof-cleaning",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["bootle", "walton", "everton", "litherland"],
    facts: [
      "Kirkdale's terraced streets date back to the Victorian era of Liverpool's maritime expansion",
      "Many properties retain original Welsh slate roofing installed over 100 years ago",
    ],
    geo: { lat: 53.4360, lng: -2.9811 },
  },
  {
    slug: "litherland",
    name: "Litherland",
    county: "Merseyside",
    postcode: "L21",
    description:
      "Professional roofing in Litherland, Merseyside. Expert roofers for roof repairs, cleaning and flat roof repairs in Litherland.",
    longDescription:
      "Litherland is a suburban area of Merseyside with predominantly interwar and post-war housing. Our roofing teams serve all of Litherland's residential streets, offering competitive pricing and fast response times for everything from roof tile replacements to complete flat roof installations.",
    roofingChallenges: [
      "Interwar semi-detached properties with concrete tile roofs",
      "Post-war housing requiring flat roof repairs",
      "Moss growth on aging concrete tiles",
    ],
    popularServices: [
      "roof-repairs",
      "tile-roof-cleaning",
      "roof-cleaning",
      "flat-roof-repairs",
      "slate-roof-cleaning",
    ],
    nearbyAreas: ["bootle", "waterloo", "crosby", "kirkdale"],
    facts: [
      "Litherland sits between the River Alt and the Leeds-Liverpool Canal",
      "The area's post-war housing often features flat-roofed garages and extensions",
    ],
    geo: { lat: 53.4626, lng: -3.0052 },
  },
  {
    slug: "maghull",
    name: "Maghull",
    county: "Merseyside",
    postcode: "L31",
    description:
      "Trusted roofing services in Maghull, Merseyside. Local roofers for roof repairs, roof cleaning and moss removal in Maghull.",
    longDescription:
      "Maghull is a pleasant suburban town in the north of Merseyside with a mix of interwar semis, post-war detached homes, and newer executive developments. Its residential character and family-friendly reputation mean homeowners here place high value on property maintenance — and we regularly work with Maghull homeowners on everything from annual roof cleans to complete roof restorations.",
    roofingChallenges: [
      "Mix of interwar and modern property types",
      "Tree coverage in residential streets causing debris on roofs",
      "Moss growth on north-facing slopes of semis and detacheds",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "flat-roof-repairs",
      "leadwork",
    ],
    nearbyAreas: ["aintree", "sefton", "formby", "ormskirk"],
    facts: [
      "Maghull is one of Sefton's most popular residential areas for families",
      "The town's substantial tree coverage makes regular roof cleaning particularly important",
    ],
    geo: { lat: 53.5166, lng: -2.9432 },
  },
  {
    slug: "huyton",
    name: "Huyton",
    county: "Merseyside",
    postcode: "L36",
    description:
      "Local roofing services in Huyton, Merseyside. Expert roofers for roof repairs, cleaning and flat roof repairs in Huyton.",
    longDescription:
      "Huyton is a large suburban area east of Liverpool city centre, known for its mix of post-war housing estates, interwar semis, and modern developments. Our roofing teams cover all of Huyton, providing fast response times and competitive pricing across all property types.",
    roofingChallenges: [
      "Large post-war housing estates with aging felt flat roofs on garages",
      "Concrete tile roofs from 1950s–1980s requiring cleaning and repair",
      "Exposed easterly position increasing rainfall impact",
    ],
    popularServices: [
      "roof-repairs",
      "flat-roof-repairs",
      "tile-roof-cleaning",
      "roof-cleaning",
      "emergency-roof-repairs",
    ],
    nearbyAreas: ["prescot", "knowsley", "liverpool"],
    facts: [
      "Huyton was the constituency of former Prime Minister Harold Wilson",
      "The area has one of the largest concentrations of 1950s housing in Merseyside",
    ],
    geo: { lat: 53.4107, lng: -2.8449 },
  },
  {
    slug: "prescot",
    name: "Prescot",
    county: "Merseyside",
    postcode: "L34–L35",
    description:
      "Professional roofing services in Prescot, Merseyside. Trusted local roofers for roof repairs, cleaning and all roofing needs in Prescot.",
    longDescription:
      "Prescot is a historic market town in Knowsley with a mixture of older terraced properties in the town centre and newer suburban housing on the periphery. The town's varied housing stock requires a flexible approach to roofing, and our experienced team handles everything from traditional slate repair to modern EPDM flat roof installation.",
    roofingChallenges: [
      "Mix of older town centre terraces and modern suburban housing",
      "Original slate roofs on older town centre properties",
      "Modern developments with complex roof designs",
    ],
    popularServices: [
      "roof-repairs",
      "slate-roof-cleaning",
      "roof-cleaning",
      "leadwork",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["huyton", "knowsley", "liverpool"],
    facts: [
      "Prescot has a long history as a market town dating back to the 13th century",
      "The town features a mix of historic and modern architecture requiring diverse roofing skills",
    ],
    geo: { lat: 53.4281, lng: -2.8032 },
  },
  {
    slug: "knowsley",
    name: "Knowsley",
    county: "Merseyside",
    postcode: "L33–L34",
    description:
      "Reliable roofing services in Knowsley, Merseyside. Expert local roofers for roof repairs, roof cleaning and flat roof repairs in Knowsley.",
    longDescription:
      "Knowsley is a metropolitan borough encompassing a range of communities from Kirkby to Huyton. Our roofing teams cover all of Knowsley's residential areas, providing fast, reliable service for all roofing needs.",
    roofingChallenges: [
      "Large post-war housing estates requiring planned maintenance",
      "Mix of social housing and private properties",
      "Exposed northerly position in parts of the borough",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "flat-roof-repairs",
      "tile-roof-cleaning",
      "leadwork",
    ],
    nearbyAreas: ["huyton", "prescot", "liverpool", "fazakerley"],
    facts: [
      "Knowsley is home to one of Europe's finest safari parks",
      "The borough encompasses a wide range of communities with diverse housing needs",
    ],
    geo: { lat: 53.4526, lng: -2.8519 },
  },
  {
    slug: "ormskirk",
    name: "Ormskirk",
    county: "Lancashire",
    postcode: "L39",
    description:
      "Expert roofing services in Ormskirk. Local roofers covering Ormskirk and surrounding areas for roof repairs, cleaning and flat roof repairs.",
    longDescription:
      "Ormskirk is a historic market town in West Lancashire, close to the Merseyside border. Our roofing teams extend to cover Ormskirk and its surrounding villages, providing the same high-quality service that Liverpool residents have come to rely on. The area's older properties and rural settings require specialist knowledge, and our experienced team deliver it.",
    roofingChallenges: [
      "Older market town properties with traditional roofing materials",
      "Rural exposure in surrounding villages increasing weather impact",
      "Historic properties requiring sensitive handling",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "leadwork",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["formby", "maghull", "sefton"],
    facts: [
      "Ormskirk dates back to the Norman Conquest with a market charter from the 13th century",
      "The area's historic properties require sensitive, specialist roofing approaches",
    ],
    geo: { lat: 53.5699, lng: -2.8840 },
  },
  {
    slug: "fazakerley",
    name: "Fazakerley",
    county: "Merseyside",
    postcode: "L9–L10",
    description:
      "Local roofing services in Fazakerley, Liverpool. Reliable roofers for roof repairs, roof cleaning and flat roof repairs in Fazakerley.",
    longDescription:
      "Fazakerley is a north Liverpool suburb with a predominantly post-war housing stock, including large estates built in the 1950s and 1960s alongside older interwar properties. Our roofing teams cover all of Fazakerley, providing competitive pricing and fast response times for all roofing needs.",
    roofingChallenges: [
      "Large post-war estates with aging concrete tile roofs",
      "Flat-roofed garages and extensions requiring maintenance",
      "Open aspect increasing exposure to northerly weather",
    ],
    popularServices: [
      "roof-repairs",
      "tile-roof-cleaning",
      "roof-cleaning",
      "flat-roof-repairs",
      "slate-roof-cleaning",
    ],
    nearbyAreas: ["aintree", "walton", "anfield", "kirkdale"],
    facts: [
      "Fazakerley is home to Fazakerley Hospital, one of Merseyside's largest hospitals",
      "The area's post-war housing stock is a common feature of north Liverpool's suburban landscape",
    ],
    geo: { lat: 53.4603, lng: -2.9356 },
  },
  {
    slug: "southport",
    name: "Southport",
    county: "Merseyside",
    postcode: "PR8–PR9",
    description:
      "Expert roofing services in Southport. Trusted local roofers for roof repairs, emergency roofing, roof cleaning and flat roof repairs across Southport and the PR8/PR9 postcodes.",
    longDescription:
      "Southport is the largest coastal town in Merseyside, with a wide range of property types from Victorian and Edwardian terraces in the town centre to larger detached properties in Birkdale and Ainsdale. The town's position on the Sefton coast exposes its properties to significant Atlantic weather — salt-laden air, persistent south-westerly winds, and high annual rainfall that accelerates moss growth and corrosion of metal roofline components. Our roofing teams cover all of Southport and its surrounding areas, providing the same fast, reliable service that Sefton Roofing is known for across Merseyside.",
    roofingChallenges: [
      "Coastal salt air accelerating corrosion of flashings and guttering",
      "High winds from the Irish Sea causing tile displacement",
      "Victorian and Edwardian properties requiring traditional roofing skills",
      "Rapid moss growth due to coastal dampness and low winter sunshine",
      "Large tree cover in Birkdale causing gutter blockages",
    ],
    popularServices: [
      "roof-repairs",
      "emergency-roof-repairs",
      "roof-cleaning",
      "roof-moss-removal",
      "gutter-cleaning",
    ],
    nearbyAreas: ["formby", "sefton", "maghull", "ormskirk"],
    facts: [
      "Southport's coastal position makes it one of the most exposed towns in Merseyside to Atlantic weather",
      "The town's Victorian and Edwardian housing stock in areas like Lord Street requires specialist traditional roofing skills",
      "Southport's Birkdale and Ainsdale neighbourhoods have large properties with complex roof designs",
    ],
    geo: { lat: 53.6452, lng: -3.0078 },
  },
  {
    slug: "lydiate",
    name: "Lydiate",
    county: "Merseyside",
    postcode: "L31",
    description:
      "Trusted roofing services in Lydiate, Merseyside. Local roofers for roof repairs, gutter cleaning, roof cleaning and all roofing needs in Lydiate and surrounding villages.",
    longDescription:
      "Lydiate is a semi-rural village in the north of Merseyside, with a mix of older rural cottages, interwar semis, and more recent residential developments. Its open, agricultural setting means properties are exposed to wind-driven rain with fewer urban barriers — moss and algae growth can be particularly aggressive on north and west-facing roof slopes. Sefton Roofing covers Lydiate and all surrounding villages, providing professional roofing, gutter, and property maintenance services to Lydiate residents.",
    roofingChallenges: [
      "Open rural aspect with increased wind and rainfall exposure",
      "Aggressive moss and algae growth on exposed roof slopes",
      "Mix of older rural properties and modern residential developments",
      "Tree coverage in rural lanes causing significant gutter blockages",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "roof-cleaning",
      "roof-moss-removal",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["maghull", "aintree", "sefton", "formby"],
    facts: [
      "Lydiate's semi-rural setting means properties face higher wind exposure than many Merseyside areas",
      "The village's mature tree cover makes bi-annual gutter cleaning essential",
      "Lydiate sits within the Sefton Metropolitan Borough",
    ],
    geo: { lat: 53.5321, lng: -2.9687 },
  },
  {
    slug: "woolton",
    name: "Woolton",
    county: "Merseyside",
    postcode: "L25",
    description:
      "Professional roofing services in Woolton, Liverpool. Expert roofers for roof repairs, roof cleaning, gutter services and all roofing needs in Woolton and surrounding areas.",
    longDescription:
      "Woolton is one of Liverpool's most desirable south Liverpool suburbs — home to leafy streets, large Victorian and Edwardian villas, and the kind of mature residential character that creates both high property values and regular roofing maintenance needs. The area's substantial tree coverage means moss and algae accumulation is significant, and gutters can block within weeks during autumn leaf fall. Our roofing teams cover all of Woolton and the surrounding south Liverpool suburbs, providing professional services for premium properties as well as standard residential homes.",
    roofingChallenges: [
      "Heavy tree coverage causing rapid gutter blockage and roof moss growth",
      "Large Victorian and Edwardian villas with complex original roof structures",
      "North and west-facing slopes accumulating moss rapidly in south Liverpool's damp climate",
      "Premium properties requiring quality workmanship and careful access management",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "gutter-cleaning",
      "roof-moss-removal",
      "leadwork",
    ],
    nearbyAreas: ["liverpool", "huyton", "knowsley"],
    facts: [
      "Woolton is one of Liverpool's highest-value residential suburbs with a mix of Victorian villas and modern detached properties",
      "The area's tree-lined streets make regular gutter cleaning particularly important",
      "Woolton Village retains much of its original Victorian character and housing stock",
    ],
    geo: { lat: 53.3799, lng: -2.8688 },
  },
  {
    slug: "kirkby",
    name: "Kirkby",
    county: "Merseyside",
    postcode: "L32–L33",
    description:
      "Local roofing services in Kirkby, Merseyside. Trusted roofers for roof repairs, roof cleaning, gutter cleaning and all roofing needs in Kirkby.",
    longDescription:
      "Kirkby is a large town in the Knowsley borough, developed extensively in the 1950s–1960s as Liverpool's population expanded into surrounding areas. Its predominantly post-war housing stock — including large council estates and semi-detached properties — presents specific roofing challenges: ageing concrete tile roofs, flat-roofed garages requiring repair, and guttering on older properties that has often reached the end of its useful life. Our roofing teams cover all of Kirkby and provide competitive, honest pricing for all residential roofing needs.",
    roofingChallenges: [
      "Large post-war housing estates with ageing concrete tile roofs",
      "Flat-roofed garages and extensions requiring repair or replacement",
      "Older UPVC and cast iron guttering in need of replacement",
      "Exposed northerly position increasing wind and rainfall impact",
    ],
    popularServices: [
      "roof-repairs",
      "flat-roof-repairs",
      "gutter-cleaning",
      "tile-roof-cleaning",
      "roof-cleaning",
    ],
    nearbyAreas: ["maghull", "aintree", "fazakerley", "knowsley"],
    facts: [
      "Kirkby was developed in the 1950s–1960s as part of Liverpool's post-war housing expansion",
      "The town has one of the largest concentrations of post-war housing in Knowsley borough",
      "Kirkby's concrete tile roofs typically require cleaning and repair after 20–30 years",
    ],
    geo: { lat: 53.4882, lng: -2.8990 },
  },
  {
    slug: "wavertree",
    name: "Wavertree",
    county: "Merseyside",
    postcode: "L15",
    description:
      "Reliable roofing services in Wavertree, Liverpool. Expert local roofers for roof repairs, gutter cleaning, roof cleaning and emergency roofing in Wavertree.",
    longDescription:
      "Wavertree is an inner-Liverpool suburb with a rich mix of Victorian terraces, interwar semis, and student accommodation near the university quarter. The area's dense housing and large tree cover create regular roofing and gutter maintenance needs. Its Victorian and Edwardian properties often retain original slate roofing, lead valleys, and cast iron guttering that require specialist knowledge. Sefton Roofing covers all of Wavertree and surrounding south-east Liverpool suburbs.",
    roofingChallenges: [
      "Victorian terraces with original slate roofs and lead flashings",
      "Dense housing layout with restricted access for scaffolding",
      "Heavy tree cover causing gutter blockage and moss accumulation",
      "Cast iron guttering on older properties requiring specialist repair",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "slate-roof-cleaning",
      "leadwork",
      "flat-roof-repairs",
    ],
    nearbyAreas: ["liverpool", "huyton", "knowsley", "prescot"],
    facts: [
      "Wavertree's Victorian terrace housing is characteristic of Liverpool's inner suburban expansion in the 1880s–1910s",
      "The area's tree-lined streets make gutter cleaning essential at least twice a year",
      "Wavertree is home to several university buildings with complex commercial rooflines",
    ],
    geo: { lat: 53.4021, lng: -2.9194 },
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getNearbyAreas(slug: string): Area[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearbyAreas
    .map((s) => getAreaBySlug(s))
    .filter((a): a is Area => a !== undefined);
}
