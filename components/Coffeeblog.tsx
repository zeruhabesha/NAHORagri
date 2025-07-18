"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CoffeeBlogSection() {
  const t = useTranslations();
  // Dynamic blog post data
  const posts = [
    {
      key: "ceremony",
      title: t("coffeeBlog.ceremony.title"),
      description: t("coffeeBlog.ceremony.description"),
      excerpt: t("coffeeBlog.ceremony.excerpt"),
      image: "/coffee.jpg",
      link: "#"
    },
    {
      key: "origins",
      title: t("coffeeBlog.origins.title"),
      description: t("coffeeBlog.origins.description"),
      excerpt: t("coffeeBlog.origins.excerpt"),
      image: "/yigachefe.jpg",
      link: "#"
    },
    {
      key: "sustainability",
      title: t("coffeeBlog.sustainability.title"),
      description: t("coffeeBlog.sustainability.description"),
      excerpt: t("coffeeBlog.sustainability.excerpt"),
      image: "/Sustainability.jpg",
      link: "#"
    }
  ];
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
                <Link href={post.link} className="flex items-center text-primary font-medium hover:underline">
                  {t("coffeeBlog.readMore")} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
            {t("coffeeBlog.viewAll")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
