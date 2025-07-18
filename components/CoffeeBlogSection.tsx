"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

export function CoffeeBlogSection() {
  const t = useTranslations();
  const { locale } = useParams();
  const [openPost, setOpenPost] = useState(null as null | string);
  // Dynamic blog post data
  const posts = [
    {
      key: "ceremony",
      title: t("coffeeBlog.ceremony.title"),
      description: t("coffeeBlog.ceremony.description"),
      excerpt: t("coffeeBlog.ceremony.excerpt"),
      image: "/coffee.jpg",
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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("coffeeBlog.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("coffeeBlog.intro")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.key} className="transition-all hover:shadow-lg flex flex-col">
              <div className="relative aspect-[4/3] w-full rounded-t-lg overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <button
                  className="flex items-center text-primary font-medium hover:underline"
                  onClick={() => setOpenPost(post.key)}
                >
                  {t("coffeeBlog.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
            {t("coffeeBlog.viewAll")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
      {/* Modal for full post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              className="absolute top-4 right-4 flex items-center gap-2 text-muted-foreground hover:text-primary text-lg px-4 py-2 bg-background/80 rounded-full border shadow"
              onClick={() => setOpenPost(null)}
              aria-label={t("close") || "Close"}
            >
              <span>{t("close") || "Close"}</span>
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
    </section>
  );
}
