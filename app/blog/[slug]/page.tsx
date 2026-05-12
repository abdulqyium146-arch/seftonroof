import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Phone, Tag, ChevronRight, ExternalLink } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

function renderInline(text: string, keyPrefix: string | number) {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[0].startsWith("**")) {
      parts.push(
        <strong key={`${keyPrefix}-s${m.index}`} className="font-bold text-brand-navy">
          {m[1]}
        </strong>
      );
    } else {
      const isExternal = !m[3].startsWith(SITE.url);
      parts.push(
        <a
          key={`${keyPrefix}-a${m.index}`}
          href={m[3]}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-brand-orange font-semibold hover:underline"
        >
          {m[2]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? <>{parts}</> : <>{text}</>;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author, url: SITE.url }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${slug}`,
      siteName: SITE.name,
      locale: "en_GB",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [SITE.name],
      tags: post.tags,
      images: [
        {
          url: `${SITE.url}/logo.webp`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE.url}/logo.webp`],
    },
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const pageUrl = `${SITE.url}/blog/${slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog` },
    { name: post.title, url: pageUrl },
  ]);

  // 1. WebPage — signals freshness via datePublished/dateModified; isPartOf links to WebSite entity
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE.url}/#website` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.webp`,
      width: 1200,
      height: 630,
    },
  };

  // 2. Article — enhanced with wordCount, about (topic entities), mentions (RRM for guest post)
  const isGuestPost = post.author.includes("Guest Post");
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.webp`,
      width: 1200,
      height: 630,
    },
    author: isGuestPost
      ? {
          "@type": "Organization",
          name: "R.R.M External Cleaning Specialist",
          url: "https://rrmexternalcleaningspecialist.co.uk",
        }
      : {
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.name,
          url: SITE.url,
        },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.webp`,
        width: 400,
        height: 120,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@id": pageUrl },
    keywords: post.tags.join(", "),
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    articleSection: post.category,
    inLanguage: "en-GB",
    about: isGuestPost
      ? [
          { "@type": "Thing", name: "Exterior Cleaning", sameAs: "https://en.wikipedia.org/wiki/Pressure_washing" },
          { "@type": "City", name: "Newton-le-Willows", containedInPlace: { "@type": "AdministrativeArea", name: "Merseyside" } },
          { "@type": "City", name: "Warrington" },
        ]
      : [{ "@id": `${SITE.url}/#organization` }],
    ...(isGuestPost
      ? {
          mentions: [
            {
              "@type": "LocalBusiness",
              name: "R.R.M External Cleaning Specialist",
              url: "https://rrmexternalcleaningspecialist.co.uk",
              areaServed: [
                { "@type": "City", name: "Newton-le-Willows" },
                { "@type": "City", name: "Warrington" },
                { "@type": "City", name: "St Helens" },
              ],
            },
          ],
        }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-excerpt"],
    },
  };

  // 3. FAQPage — generated from post.faqs; triggers rich snippet and forces re-crawl priority
  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  // 4. SpeakableSpecification — standalone block for AEO/voice search engines
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "@id": `${pageUrl}/#speakable`,
    cssSelector: ["h1", ".article-excerpt", "h2"],
    url: pageUrl,
  };

  const contentSections = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <SchemaOrg schema={webPageSchema} />
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={speakableSchema} />
      {faqSchema && <SchemaOrg schema={faqSchema} />}

      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric"
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article */}
            <article className="lg:col-span-3">
              <p className="article-excerpt text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              <div className="prose max-w-none prose-headings:font-black prose-headings:text-brand-navy prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-brand-navy">
                {contentSections.map((section, i) => {
                  if (section.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-black text-brand-navy mt-10 mb-4">
                        {section.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (section.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-xl font-bold text-brand-navy mt-8 mb-3">
                        {section.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (section.startsWith("| ")) {
                    const rows = section.split("\n").filter((r) => r.trim().startsWith("|"));
                    const headers = rows[0].split("|").filter(Boolean).map((c) => c.trim());
                    const dataRows = rows.slice(2);
                    return (
                      <div key={i} className="my-6 overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-brand-navy text-white">
                              {headers.map((h, j) => (
                                <th key={j} className="p-3 text-left font-semibold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, ri) => {
                              const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                              return (
                                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                  {cells.map((cell, ci) => (
                                    <td key={ci} className="p-3 border-b border-slate-100 text-slate-600">{cell}</td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (section.startsWith("- ")) {
                    const items = section.split("\n").filter((l) => l.startsWith("- "));
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600">
                            <span className="text-brand-orange font-bold mt-0.5">✓</span>
                            <span>{renderInline(item.replace(/^- /, ""), `${i}-${j}`)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.startsWith("**") && section.includes("\n")) {
                    const lines = section.split("\n");
                    return (
                      <div key={i} className="my-4">
                        {lines.map((line, j) => (
                          <p key={j} className={line.startsWith("**") && line.endsWith("**") ? "font-bold text-brand-navy mt-4 mb-1" : "text-slate-600 mb-2"}>
                            {renderInline(line, `${i}-${j}`)}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {renderInline(section, i)}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author box */}
              {post.author.includes("Guest Post") ? (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Guest Contributor</p>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy mb-1">
                        <a
                          href="https://rrmexternalcleaningspecialist.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-orange transition-colors"
                        >
                          R.R.M External Cleaning Specialist
                        </a>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">
                        Professional exterior cleaning services across Newton-le-Willows, Warrington,
                        St Helens, and Wigan — specialising in roof soft washing, driveway pressure washing,
                        render cleaning, and gutter maintenance.
                      </p>
                      <a
                        href="https://rrmexternalcleaningspecialist.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm hover:gap-2.5 transition-all"
                      >
                        Visit rrmexternalcleaningspecialist.co.uk
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white font-black">
                      SR
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{post.author}</div>
                      <div className="text-slate-500 text-sm">
                        Liverpool&apos;s trusted roofing experts since {SITE.founded}.
                        Serving all of Merseyside with expert roofing and property maintenance services.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="bg-brand-navy text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-2">Need a Liverpool Roofer?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Free quotes · 24/7 emergency · 10-year guarantee
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-xl transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Free Quote Online
                </Link>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-navy mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-brand-orange/5 hover:border-brand-orange/20 border border-transparent transition-all group"
                      >
                        <div className="flex-1">
                          <div className="text-brand-navy font-medium text-sm leading-snug group-hover:text-brand-orange transition-colors">
                            {related.title}
                          </div>
                          <div className="text-slate-400 text-xs mt-1">{related.readingTime} min read</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Guest contributor widget */}
              {post.author.includes("Guest Post") && (
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="font-bold text-brand-navy text-sm mb-3">About the Contributor</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    Exterior cleaning specialists serving Newton-le-Willows, Warrington &amp; the wider North West.
                  </p>
                  <a
                    href="https://rrmexternalcleaningspecialist.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm justify-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    R.R.M Exterior Cleaning
                  </a>
                </div>
              )}

              {/* Quick links */}
              <div>
                <h3 className="font-bold text-brand-navy mb-3 text-sm uppercase tracking-wider">
                  Our Services
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Roof Repairs", href: "/services/roof-repairs" },
                    { label: "Emergency Repairs", href: "/services/emergency-roof-repairs" },
                    { label: "Roof Cleaning", href: "/services/roof-cleaning" },
                    { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
                    { label: "All Services", href: "/services" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-slate-600 hover:text-brand-orange text-sm transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
