import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Phone, Tag, ChevronRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

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
          url: `${SITE.url}/og-image.jpg`,
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
      images: [`${SITE.url}/og-image.jpg`],
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog` },
    { name: post.title, url: `${SITE.url}/blog/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/blog/${slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
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
        url: `${SITE.url}/logo.png`,
        width: 400,
        height: 120,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-GB",
    about: { "@id": `${SITE.url}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-excerpt"],
    },
  };

  const contentSections = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

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
                  if (section.startsWith("- ")) {
                    const items = section.split("\n").filter((l) => l.startsWith("- "));
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600">
                            <span className="text-brand-orange font-bold mt-0.5">✓</span>
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.includes("**") && section.startsWith("**")) {
                    const lines = section.split("\n");
                    return (
                      <div key={i} className="my-4">
                        {lines.map((line, j) => {
                          if (line.startsWith("**") && line.endsWith("**")) {
                            return (
                              <p key={j} className="font-bold text-brand-navy mt-4 mb-1">
                                {line.replace(/\*\*/g, "")}
                              </p>
                            );
                          }
                          return <p key={j} className="text-slate-600 mb-2">{line}</p>;
                        })}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {section}
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
