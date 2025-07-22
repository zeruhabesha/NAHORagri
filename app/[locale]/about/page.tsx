"use client";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const t = useTranslations();
  const { locale } = useParams();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{t("aboutNAHORagri")}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {t("aTrustedExporter")}
              </p>
              <Button asChild>
                <Link href={`/${locale}/contact`}>{t("contactUs")}</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="NAHORagri Headquarters"
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{t("whoWeAre")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("nahoragriIsTrusted")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">{t("mission")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("toDeliverExceptional")}
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 text-sm">
                <li>We leverage innovative technologies and best practices to ensure our agro and engineering solutions are both effective and sustainable.</li>
                <li>Our team is dedicated to understanding each client’s unique requirements, delivering personalized service and measurable results.</li>
                <li>We prioritize environmental stewardship and long-term partnerships, aiming to create value for our clients and communities.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">{t("vision")}</h3>
              <p className="text-muted-foreground">
                {t("toBecomeEast")}
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-4 text-sm">
                <li>We aspire to set the benchmark for quality, reliability, and innovation in the agricultural export and engineering sectors.</li>
                <li>Our vision includes expanding our global reach while maintaining strong roots in local communities and sustainable practices.</li>
                <li>We are committed to continuous improvement, investing in our people, technology, and partnerships to drive growth and positive impact.</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/humera.jpg?height=600&width=600"
                alt="Ethiopian Coffee Farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{t("ourCoreValues")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("atNAHORagri")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("quality")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("weMaintainHighest")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("innovation")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("weContinuouslySeek")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("reliability")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("ourClientsCanDepend")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("sustainability")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("weAreCommitted")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("customerFocus")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("wePrioritizeUnderstanding")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("integrity")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("weConductOurBusiness")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{t("whyChooseUs")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("withStrategicPartnerships")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{t("qualityAssurance")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("rigorousQualityControl")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("internationalCertification")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("consistentProductExcellence")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{t("globalExpertise")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("exportExperience")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("understandingInternational")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("complianceGlobalTrade")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{t("sustainablePractices")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("environmentallyResponsible")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("supportLocalFarming")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("reducedEnvironmental")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{t("customerService")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("dedicatedAccountManagement")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("transparentCommunication")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t("flexibleSolutions")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
  {/* Background image and overlay */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/pattern.jpg" // Replace with your image path
      alt="Background pattern"
      className="object-cover w-full h-full opacity-40"
    />
    <div className="absolute inset-0 bg-black" style={{ opacity: 0.3 }} />
  </div>

  {/* Content */}
  <div className="container text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
      {t("readyToExperience")}
    </h2>
    <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
      {t("contactTeamToday")}
    </p>
    <Button asChild size="lg" variant="secondary">
      <Link href={`/${locale}/contact`}>{t("getInTouch")}</Link>
    </Button>
  </div>
</section>

    </div>
  )
}
