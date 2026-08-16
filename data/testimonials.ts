export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Margaret H.",
    location: "Crosby, Liverpool",
    rating: 5,
    review:
      "Absolutely brilliant service from Sefton Roofing. Called them on a Friday evening when a storm took off several tiles from our Victorian terrace. They were at our house within the hour, made it safe that night, and completed the full repair the following Monday. Couldn't fault them at all. Will be recommending to all my neighbours.",
    service: "Emergency Roof Repairs",
    date: "2024-11-12",
    verified: true,
  },
  {
    id: "2",
    author: "David T.",
    location: "Waterloo, Liverpool",
    rating: 5,
    review:
      "Used Sefton Roofing for a full roof clean and moss treatment. The difference is incredible — roof looks like new. They were thorough, professional, and explained everything they were doing. Left the garden spotless after. Price was very fair and I've already booked them for the gutter clean next month.",
    service: "Roof Cleaning",
    date: "2024-09-28",
    verified: true,
  },
  {
    id: "3",
    author: "Patricia K.",
    location: "Formby",
    rating: 5,
    review:
      "I've been using Sefton Roofing for 6 years now for our annual gutter clean and any repairs that come up. Absolutely reliable, always on time, and the standard of work is first class. They identified a cracked ridge tile I didn't know about and sorted it during the same visit. Wouldn't use anyone else.",
    service: "Gutter Cleaning",
    date: "2024-10-15",
    verified: true,
  },
  {
    id: "4",
    author: "James M.",
    location: "Walton, Liverpool",
    rating: 5,
    review:
      "Had a persistent roof leak that two other roofers couldn't find. Sefton Roofing diagnosed the problem correctly first time — failed lead flashing around the chimney — and sorted it for a very reasonable price. Dry house ever since. Brilliant service, completely professional throughout.",
    service: "Leadwork",
    date: "2024-08-03",
    verified: true,
  },
  {
    id: "5",
    author: "Sandra W.",
    location: "Bootle, Liverpool",
    rating: 5,
    review:
      "New fascias, soffits and guttering fitted last month and the house looks completely transformed. The team were tidy, polite, and finished the job in one day as promised. The quality of the materials and workmanship is excellent. Already had three neighbours ask who did the work!",
    service: "Fascias & Soffits",
    date: "2024-07-20",
    verified: true,
  },
  {
    id: "6",
    author: "Robert C.",
    location: "Anfield, Liverpool",
    rating: 5,
    review:
      "Needed the flat roof on my extension replacing. Sefton Roofing came out, assessed the job, gave me a clear written quote, and completed the work on schedule. The new EPDM roof looks superb and I have a 20-year guarantee. Really professional from start to finish.",
    service: "Flat Roof Repairs",
    date: "2024-06-14",
    verified: true,
  },
  {
    id: "7",
    author: "Louise B.",
    location: "Maghull",
    rating: 5,
    review:
      "Called Sefton Roofing after my ceiling started dripping during heavy rain. They were at my house within 90 minutes despite it being a Sunday. Temporary repair done immediately, full repair completed the next day. Professional, responsive, and reassuringly competent. Highly recommended.",
    service: "Emergency Roof Repairs",
    date: "2024-11-03",
    verified: true,
  },
  {
    id: "8",
    author: "Kevin P.",
    location: "Huyton, Merseyside",
    rating: 5,
    review:
      "Sefton Roofing replaced the chimney flashing and repointed the chimney stack. Excellent job — no more leaks, looks smart, and the price was very competitive. The team were friendly and respectful of my property throughout. Will definitely use again.",
    service: "Brickwork",
    date: "2024-05-22",
    verified: true,
  },
  {
    id: "9",
    author: "Helen N.",
    location: "Aintree, Liverpool",
    rating: 5,
    review:
      "Had the roof of my Victorian terrace cleaned for the first time in years. The transformation is incredible — looks like a completely different house. The team arrived on time, worked cleanly, and left everything immaculate. The biocide treatment means it should stay clean for years. Brilliant.",
    service: "Slate Roof Cleaning",
    date: "2024-04-11",
    verified: true,
  },
  {
    id: "10",
    author: "Brian O.",
    location: "Litherland, Merseyside",
    rating: 5,
    review:
      "Property maintenance contract with Sefton Roofing for my rental properties. They take care of all gutters, roof checks, and any minor repairs — couldn't be easier. Detailed reports after every visit and always available for emergencies. Peace of mind for a very reasonable monthly fee.",
    service: "Property Maintenance",
    date: "2024-03-08",
    verified: true,
  },
  {
    id: "11",
    author: "Angela F.",
    location: "Everton, Liverpool",
    rating: 5,
    review:
      "Storm damage caused a section of ridge tiles to come away. Sefton Roofing attended within the hour, made the roof safe immediately, and produced a detailed report for my insurance company. The full repair was completed a few days later. Absolutely seamless service from a company that genuinely cares.",
    service: "Emergency Roof Repairs",
    date: "2024-02-19",
    verified: true,
  },
  {
    id: "12",
    author: "Thomas R.",
    location: "Fazakerley, Liverpool",
    rating: 5,
    review:
      "Gutter cleaning and minor gutter repair done in a few hours. Professional, efficient, and no mess. The before-and-after photos they provided showed just how blocked the gutters were — can't believe I left it so long. Reasonable prices and great communication throughout. Highly recommend.",
    service: "Gutter Cleaning",
    date: "2024-01-25",
    verified: true,
  },
];

export function getFeaturedTestimonials(count = 6): Testimonial[] {
  return testimonials.slice(0, count);
}

export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter((t) =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}
