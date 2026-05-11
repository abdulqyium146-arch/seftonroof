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
      "Liverpool's trusted roofing specialists. Expert roof repairs, cleaning and property maintenance across all Liverpool postcodes.",
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
      "gutter-cleaning",
      "flat-roof-repairs",
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
      "Expert roofing services in Waterloo, Liverpool. Local roofers you can trust — roof repairs, cleaning, gutters and property maintenance in Waterloo.",
    longDescription:
      "Waterloo is our home base, and we've been maintaining and repairing the roofs of Waterloo's Victorian terraces, Edwardian semis, and coastal properties for over 14 years. Located directly on the Mersey coast, Waterloo properties face some of the most exposed weather conditions in Merseyside — coastal winds, salt-laden air, and high rainfall that accelerates moss growth and material deterioration. We know Waterloo's rooftops intimately and offer the fastest response times in the area, typically arriving within the hour for emergencies.",
    roofingChallenges: [
      "Coastal salt air accelerating metal corrosion on flashings and guttering",
      "Persistent coastal winds causing tile slippage and ridge displacement",
      "High rainfall and proximity to the coast promoting rapid moss growth",
      "Mix of Victorian terraces and Edwardian semis requiring traditional skills",
      "Coastal exposure meaning gutters block more frequently with windblown debris",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "roof-moss-removal",
      "leadwork",
      "fascias-and-soffits",
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
      "Professional roofing services in Crosby, Liverpool. Trusted local roofers for roof repairs, moss removal, gutter cleaning and all roofing needs in Crosby.",
    longDescription:
      "Crosby is one of Merseyside's most desirable residential areas, with a wide range of property types from Victorian terraces near Crosby beach to larger interwar detached properties in Blundellsands. The area's proximity to the Irish Sea means coastal exposure is a significant factor for roofing longevity. Sefton Roofing has built an outstanding reputation in Crosby over many years, with a large proportion of our work coming from recommendations within the local community. We understand the specific roofing needs of Crosby's housing stock and provide fast, reliable service to all parts of the area.",
    roofingChallenges: [
      "Coastal exposure from proximity to Crosby beach and the Irish Sea",
      "High winds causing ridge tile displacement on exposed properties",
      "Sand and salt residue blocking gutters and corroding metal components",
      "Moss growth on north and west-facing roof slopes",
      "Mix of coastal Victorian terraces and larger interwar properties",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "gutter-cleaning",
      "fascias-and-soffits",
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
      "Reliable roofing services in Bootle, Liverpool. Local roofers offering roof repairs, gutter cleaning, flat roof repairs and emergency roofing in Bootle.",
    longDescription:
      "Bootle's predominantly Victorian and Edwardian terraced housing stock presents specific roofing challenges — older properties with original slates, clay ridge tiles, lead flashings, and cast iron guttering that require traditional skills and careful handling. Our Bootle roofing team are experienced with the area's housing types and provide competitive, honest pricing for all roofing and property maintenance needs across Bootle's residential streets.",
    roofingChallenges: [
      "Victorian and Edwardian terraces with original slates requiring specialist handling",
      "Older properties with deteriorating lead flashings",
      "Cast iron guttering requiring specialist repair skills",
      "Moss growth on tightly packed terraced rooflines",
      "Close proximity of properties making access challenging",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
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
      "Trusted roofing services across Sefton, Merseyside. Expert local roofers for all roof types, gutter services, and property maintenance in the Sefton area.",
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
      "gutter-cleaning",
      "property-maintenance",
      "flat-roof-repairs",
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
      "Premium roofing services in Formby. Expert roofers serving Formby's distinctive homes with roof repairs, cleaning and property maintenance.",
    longDescription:
      "Formby is one of Merseyside's most affluent areas, home to larger detached and semi-detached properties that often require premium roofing services. The area's proximity to Formby beach and the National Trust coastal dunes means properties face significant coastal exposure and wind loading. We serve Formby's homeowners with the same attention to quality and detail that the area's properties demand, working on everything from period homes to modern executive houses.",
    roofingChallenges: [
      "Coastal wind exposure from Formby beach and dunes",
      "High-value properties requiring careful, high-quality workmanship",
      "Mix of period homes and modern executive properties",
      "Tree coverage promoting moss growth on north-facing slopes",
    ],
    popularServices: [
      "roof-repairs",
      "roof-cleaning",
      "fascias-and-soffits",
      "gutter-cleaning",
      "property-maintenance",
    ],
    nearbyAreas: ["crosby", "sefton", "maghull", "ormskirk"],
    facts: [
      "Formby is home to the UK's largest population of red squirrels at Formby Point",
      "The area's large tree population contributes to frequent gutter blockages in autumn",
      "Formby's executive housing stock often features complex roof designs requiring specialist skills",
    ],
    geo: { lat: 53.5589, lng: -3.0685 },
  },
  {
    slug: "walton",
    name: "Walton",
    county: "Merseyside",
    postcode: "L4–L9",
    description:
      "Local roofing services in Walton, Liverpool. Trusted roofers for roof repairs, gutter cleaning and emergency roofing in Walton and surrounding areas.",
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
      "gutter-cleaning",
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
      "Reliable roofing services in Everton, Liverpool. Expert roof repairs, emergency roofing and gutter services across Everton.",
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
      "gutter-cleaning",
      "flat-roof-repairs",
      "brickwork",
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
      "Professional roofing services in Anfield, Liverpool. Local roofers offering roof repairs, gutter cleaning and all roofing services in Anfield.",
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
      "gutter-cleaning",
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
      "Trusted roofing services in Aintree, Liverpool. Expert local roofers for roof repairs, cleaning and property maintenance in Aintree.",
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
      "gutter-cleaning",
      "tile-roof-cleaning",
      "fascias-and-soffits",
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
      "Local roofing services in Kirkdale, Liverpool. Reliable roofers offering roof repairs, gutter services and emergency roofing in Kirkdale.",
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
      "gutter-repairs",
      "brickwork",
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
      "Professional roofing in Litherland, Merseyside. Expert roofers for roof repairs, cleaning and all roofing services in Litherland.",
    longDescription:
      "Litherland is a suburban area of Merseyside with predominantly interwar and post-war housing. Our roofing teams serve all of Litherland's residential streets, offering competitive pricing and fast response times for everything from roof tile replacements to complete gutter systems.",
    roofingChallenges: [
      "Interwar semi-detached properties with concrete tile roofs",
      "Post-war housing requiring flat roof repairs",
      "Moss growth on aging concrete tiles",
    ],
    popularServices: [
      "roof-repairs",
      "tile-roof-cleaning",
      "gutter-cleaning",
      "flat-roof-repairs",
      "fascias-and-soffits",
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
      "Trusted roofing services in Maghull, Merseyside. Local roofers for roof repairs, cleaning and property maintenance in Maghull.",
    longDescription:
      "Maghull is a pleasant suburban town in the north of Merseyside with a mix of interwar semis, post-war detached homes, and newer executive developments. Its residential character and family-friendly reputation mean homeowners here place high value on property maintenance — and we regularly work with Maghull homeowners on everything from annual gutter cleans to complete roof restorations.",
    roofingChallenges: [
      "Mix of interwar and modern property types",
      "Tree coverage in residential streets causing gutter blockages",
      "Moss growth on north-facing slopes of semis and detacheds",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "roof-moss-removal",
      "property-maintenance",
      "fascias-and-soffits",
    ],
    nearbyAreas: ["aintree", "sefton", "formby", "ormskirk"],
    facts: [
      "Maghull is one of Sefton's most popular residential areas for families",
      "The town's substantial tree coverage makes autumn gutter cleaning particularly important",
    ],
    geo: { lat: 53.5166, lng: -2.9432 },
  },
  {
    slug: "huyton",
    name: "Huyton",
    county: "Merseyside",
    postcode: "L36",
    description:
      "Local roofing services in Huyton, Merseyside. Expert roofers for roof repairs, cleaning and property maintenance in Huyton.",
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
      "gutter-cleaning",
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
      "gutter-cleaning",
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
      "Reliable roofing services in Knowsley, Merseyside. Expert local roofers for roof repairs, gutter cleaning and property maintenance in Knowsley.",
    longDescription:
      "Knowsley is a metropolitan borough encompassing a range of communities from Kirkby to Huyton. Our roofing teams cover all of Knowsley's residential areas, providing fast, reliable service for all roofing and property maintenance needs.",
    roofingChallenges: [
      "Large post-war housing estates requiring planned maintenance",
      "Mix of social housing and private properties",
      "Exposed northerly position in parts of the borough",
    ],
    popularServices: [
      "roof-repairs",
      "gutter-cleaning",
      "flat-roof-repairs",
      "tile-roof-cleaning",
      "property-maintenance",
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
      "Expert roofing services in Ormskirk. Local roofers covering Ormskirk and surrounding areas for roof repairs, cleaning and property maintenance.",
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
      "gutter-cleaning",
      "leadwork",
      "brickwork",
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
      "Local roofing services in Fazakerley, Liverpool. Reliable roofers for roof repairs, gutter cleaning and property maintenance in Fazakerley.",
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
      "gutter-cleaning",
      "flat-roof-repairs",
      "fascias-and-soffits",
    ],
    nearbyAreas: ["aintree", "walton", "anfield", "kirkdale"],
    facts: [
      "Fazakerley is home to Fazakerley Hospital, one of Merseyside's largest hospitals",
      "The area's post-war housing stock is a common feature of north Liverpool's suburban landscape",
    ],
    geo: { lat: 53.4603, lng: -2.9356 },
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
