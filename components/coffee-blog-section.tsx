"use client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CoffeeBlogSection() {
  const t = useTranslations();
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("coffeeBlog")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("discoverStories")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{t("ethiopianCoffeeCeremony")}</CardTitle>
              <CardDescription>{t("cultureRituals")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                {t("exploreRichCultural")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="flex items-center text-primary font-medium hover:underline">
                {t("readMore")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
          {/* Blog Post 2 */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{t("fromYirgacheffeToSidamo")}</CardTitle>
              <CardDescription>{t("originsFlavors")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                {t("discoverWhatMakes")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="flex items-center text-primary font-medium hover:underline">
                {t("readMore")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
          {/* Blog Post 3 */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{t("sustainabilityInEthiopian")}</CardTitle>
              <CardDescription>{t("sustainability")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                {t("learnHowEthiopian")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="flex items-center text-primary font-medium hover:underline">
                {t("readMore")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
