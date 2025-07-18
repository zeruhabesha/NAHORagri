"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const categories = [
  "ceremony",
  "origins",
  "sustainability"
];

export default function BlogPage() {
  const t = useTranslations();
  const [openPost, setOpenPost] = useState(null as null | string);
  const posts = [
    {
      key: "ceremony",
      title: t("coffeeBlog.ceremony.title"),
      description: t("coffeeBlog.ceremony.description"),
      excerpt: t("coffeeBlog.ceremony.excerpt"),
      image: "/ceremony.jpg",
      author: t("coffeeBlog.ceremony.author"),
      date: t("coffeeBlog.ceremony.date"),
      category: t("coffeeBlog.ceremony.category"),
      content: t("coffeeBlog.ceremony.content")
    },
    {
      key: "origins",
      title: t("coffeeBlog.origins.title"),
      description: t("coffeeBlog.origins.description"),
      excerpt: t("coffeeBlog.origins.excerpt"),
      image: "/yigachefe.jpg",
      author: t("coffeeBlog.origins.author"),
      date: t("coffeeBlog.origins.date"),
      category: t("coffeeBlog.origins.category"),
      content: t("coffeeBlog.origins.content")
    },
    {
      key: "sustainability",
      title: t("coffeeBlog.sustainability.title"),
      description: t("coffeeBlog.sustainability.description"),
      excerpt: t("coffeeBlog.sustainability.excerpt"),
      image: "/Sustainability.jpg",
      author: t("coffeeBlog.sustainability.author"),
      date: t("coffeeBlog.sustainability.date"),
      category: t("coffeeBlog.sustainability.category"),
      content: t("coffeeBlog.sustainability.content")
    }
  ];
  const selectedPost = posts.find(p => p.key === openPost);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <Image src="/coffee.jpg" alt="Coffee Blog" fill className="object-cover object-center absolute inset-0 opacity-30 pointer-events-none" />
        <div className="container relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 drop-shadow-lg">
            {t("coffeeBlog.title")}
          </h1>
          <p className="max-w-2xl text-lg mb-6 drop-shadow">
            {t("coffeeBlog.subtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary to-transparent" />
      </section>
      {/* Categories Filter */}
      <section className="bg-background border-b">
        <div className="container py-6 flex flex-wrap gap-4 justify-center">
          {categories.map(cat => (
            <button key={cat} className="px-4 py-2 rounded-full border bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition">
              {t(`coffeeBlog.${cat}.category`)}
            </button>
          ))}
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground text-lg py-20">
                {t("coffeeBlog.noPosts")}
              </div>
            ) : posts.map(post => (
              <div key={post.key} className="transition-all hover:shadow-xl flex flex-col rounded-2xl border bg-muted overflow-hidden group">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <span className="font-semibold">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{t("coffeeBlog.by")}&nbsp;{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <div className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</div>
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition mt-auto"
                    onClick={() => setOpenPost(post.key)}
                  >
                    {t("coffeeBlog.readMore")}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modal for full post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              className="absolute top-4 right-4 flex items-center gap-2 text-muted-foreground hover:text-primary text-lg px-4 py-2 bg-background/80 rounded-full border shadow"
              onClick={() => setOpenPost(null)}
              aria-label={t("close")}
            >
              <X className="w-5 h-5" />
              <span>{t("close")}</span>
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover rounded-t-2xl" />
            </div>
            <div className="p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                <span className="font-semibold">{selectedPost.category}</span>
                <span>·</span>
                <span>{selectedPost.date}</span>
                <span>·</span>
                <span>{t("coffeeBlog.by")}&nbsp;{selectedPost.author}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <div className="prose prose-neutral max-w-none text-foreground" style={{ whiteSpace: 'pre-line' }}>
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 