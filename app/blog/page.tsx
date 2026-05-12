import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts, getAllCategories } from "@/data/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Liverpool Roofing Blog 2026 — Expert Tips, Guides & Advice",
  description:
    "2026 roofing guides for Liverpool homeowners from Sefton Roofing. Learn how to spot roof damage, when to call a roofer, gutter cleaning frequency, moss removal, and how to maintain your Liverpool roof in 2026.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  const categories = getAllCategories();
  const featured = blogPosts.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Blog & Guides" }]} />
          <div className="max-w-2xl mt-8">
            <div className="badge-orange mb-4 w-fit">Liverpool Roofing Blog</div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Expert Roofing Advice{" "}
              <span className="text-gradient-orange">for Liverpool Homeowners — 2026</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              2026 roofing guides — practical tips, seasonal maintenance advice, and expert insight
              from Liverpool&apos;s most trusted roofing team. All guides updated for 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container-xl">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            <Link
              href="/blog"
              className="flex-shrink-0 px-4 py-2 rounded-lg bg-brand-orange text-white text-sm font-medium"
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat.toLowerCase().replace(" ", "-")}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 text-sm font-medium transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          {featured.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-brand-navy mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card-base overflow-hidden group"
                  >
                    <div className="bg-gradient-to-br from-brand-navy to-brand-navy-mid h-48 flex items-end p-6 relative">
                      <div className="absolute inset-0 opacity-20 bg-brand-orange" />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </div>
                        <h3 className="text-white font-bold text-xl leading-tight group-hover:text-brand-orange transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-400 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                              day: "numeric", month: "long", year: "numeric"
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} min read
                          </span>
                        </div>
                        <span className="text-brand-orange text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* All posts */}
          <h2 className="text-2xl font-bold text-brand-navy mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-base p-6 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {post.category}
                </div>
                <h3 className="font-bold text-brand-navy text-base mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </div>
                  <span className="text-brand-orange text-sm font-semibold">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
