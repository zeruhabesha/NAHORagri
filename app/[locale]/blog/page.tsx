"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const t = useTranslations();
  const posts = [
    {
      key: "ceremony",
      title: t("coffeeBlog.ceremony.title"),
      description: t("coffeeBlog.ceremony.description"),
      excerpt: t("coffeeBlog.ceremony.excerpt"),
      image: "/coffee.jpg",
      link: `/blog/ceremony`
    },
    {
      key: "origins",
      title: t("coffeeBlog.origins.title"),
      description: t("coffeeBlog.origins.description"),
      excerpt: t("coffeeBlog.origins.excerpt"),
      image: "/yirgacheffe.jpg",
      link: `/blog/origins`
    },
    {
      key: "sustainability",
      title: t("coffeeBlog.sustainability.title"),
      description: t("coffeeBlog.sustainability.description"),
      excerpt: t("coffeeBlog.sustainability.excerpt"),
      image: "/vision.jpg",
      link: `/blog/sustainability`
    }
  ];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            {t("coffeeBlog.title")}
          </h1>
          <p className="max-w-2xl text-lg mb-8">
            {t("coffeeBlog.intro")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary to-transparent" />
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.key} className="transition-all hover:shadow-lg flex flex-col rounded-lg border bg-muted">
                <div className="relative aspect-[4/3] w-full rounded-t-lg overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <div className="text-muted-foreground text-sm mb-2">{post.description}</div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                  <Link href={post.link} className="inline-flex items-center text-primary font-medium hover:underline mt-auto">
                    {t("coffeeBlog.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 