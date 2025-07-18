"use client";
import Link from "next/link";
import { ArrowRight, Coffee, Leaf, FuelIcon as Oil, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CoffeeBlogSection } from "@/components/Coffeeblog";
import { ChatWidget } from "@/components/ChatWidget";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Home() {
    const t = useTranslations();
    const { locale } = useParams();
    return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-pattern">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            {t("empoweringAgriculture")}
            <br />
            {t("enablingGrowth")}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
            {t("basedInAddis")} <span className="font-semibold">NAHORagri</span> {t("isYourPremierGlobalSource")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href={`/${locale}/products`}>{t("exploreProducts")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/contact`}>{t("contactUs")}</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <blockquote className="relative text-center max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-4xl font-serif text-primary opacity-30 absolute top-0 left-0">"</div>
            <p className="text-xl md:text-2xl italic text-foreground/80 mb-4">
              {t("fromHighlands")}
            </p>
            <div className="text-4xl font-serif text-primary opacity-30 absolute bottom-0 right-0">"</div>
          </blockquote>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("exploreCoreOfferings")}</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              {t("weDeliverExceptional")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 text-primary mb-2" />
                <CardTitle>{t("coffeeBeans")}</CardTitle>
                <CardDescription>{t("premiumEthiopianArabica")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("exportingHighGrade")}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#coffee" className="flex items-center text-primary">
                    {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-primary mb-2" />
                <CardTitle>{t("sesameSeeds")}</CardTitle>
                <CardDescription>{t("highQualityVarieties")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("premiumHumeraWollega")}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#sesame" className="flex items-center text-primary">
                    {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Oil className="h-12 w-12 text-primary mb-2" />
                <CardTitle>{t("avocadoProducts")}</CardTitle>
                <CardDescription>{t("rawPasteOil")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("organicallyGrown")}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#avocado" className="flex items-center text-primary">
                    {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Wrench className="h-12 w-12 text-primary mb-2" />
                <CardTitle>{t("engineeringSolutions")}</CardTitle>
                <CardDescription>{t("tailoredServices")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("reliableEngineering")}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#engineering" className="flex items-center text-primary">
                    {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("ourGlobalReach")}</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              {t("weProudlyExport")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">{t("europe")}</h3>
              <p className="text-sm text-muted-foreground">{t("europeCountries")}</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">{t("asia")}</h3>
              <p className="text-sm text-muted-foreground">{t("asiaCountries")}</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">{t("northAmerica")}</h3>
              <p className="text-sm text-muted-foreground">{t("northAmericaCountries")}</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">{t("middleEast")}</h3>
              <p className="text-sm text-muted-foreground">{t("middleEastCountries")}</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">{t("africa")}</h3>
              <p className="text-sm text-muted-foreground">{t("africaCountries")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{t("readyToPartner")}</h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            {t("contactTeamTodayDiscuss")}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{t("getInTouch")}</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background border-b">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t("whyChooseUs")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted rounded-xl p-6 shadow flex flex-col items-center text-center">
              <span className="text-4xl mb-4">🌱</span>
              <h3 className="font-semibold mb-2">{t("sustainablePractices")}</h3>
              <p className="text-muted-foreground">{t("environmentallyResponsible")}</p>
            </div>
            <div className="bg-muted rounded-xl p-6 shadow flex flex-col items-center text-center">
              <span className="text-4xl mb-4">✅</span>
              <h3 className="font-semibold mb-2">{t("qualityAssurance")}</h3>
              <p className="text-muted-foreground">{t("rigorousQualityControl")}</p>
            </div>
            <div className="bg-muted rounded-xl p-6 shadow flex flex-col items-center text-center">
              <span className="text-4xl mb-4">🌍</span>
              <h3 className="font-semibold mb-2">{t("globalExpertise")}</h3>
              <p className="text-muted-foreground">{t("exportExperience")}</p>
            </div>
            <div className="bg-muted rounded-xl p-6 shadow flex flex-col items-center text-center">
              <span className="text-4xl mb-4">🤝</span>
              <h3 className="font-semibold mb-2">{t("customerService")}</h3>
              <p className="text-muted-foreground">{t("dedicatedAccountManagement")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t("howToOrder")}</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow">
                <Image src="/coffee.webp" alt={t("howToOrder")} fill className="object-cover" />
              </div>
            </div>
            <ol className="w-full md:w-1/2 max-w-2xl mx-auto space-y-6 text-lg">
              <li><span className="font-semibold">1.</span> {t("stepInquiry")}</li>
              <li><span className="font-semibold">2.</span> {t("stepConsultation")}</li>
              <li><span className="font-semibold">3.</span> {t("stepQuotation")}</li>
              <li><span className="font-semibold">4.</span> {t("stepOrderConfirmation")}</li>
              <li><span className="font-semibold">5.</span> {t("stepDelivery")}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t("testimonials")}</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="bg-muted rounded-xl p-6 shadow max-w-md w-full text-center">
              <p className="italic mb-4">“{t("testimonial1.text")}"</p>
              <div className="font-semibold">{t("testimonial1.author")}</div>
              <div className="text-xs text-muted-foreground">{t("testimonial1.company")}</div>
            </div>
            <div className="bg-muted rounded-xl p-6 shadow max-w-md w-full text-center">
              <p className="italic mb-4">“{t("testimonial2.text")}"</p>
              <div className="font-semibold">{t("testimonial2.author")}</div>
              <div className="text-xs text-muted-foreground">{t("testimonial2.company")}</div>
            </div>
            <div className="bg-muted rounded-xl p-6 shadow max-w-md w-full text-center">
              <p className="italic mb-4">“{t("testimonial3.text")}"</p>
              <div className="font-semibold">{t("testimonial3.author")}</div>
              <div className="text-xs text-muted-foreground">{t("testimonial3.company")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Blog Section */}
      <CoffeeBlogSection />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}