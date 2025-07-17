"use client";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();
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
                <Link href="/contact">{t("contactUs")}</Link>
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

              <h3 className="text-2xl font-bold mb-4">{t("vision")}</h3>
              <p className="text-muted-foreground">
                {t("toBecomeEast")}
              </p>
            </div>
            <div className="order-1 md:order-2 relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/vision.jpg?height=600&width=600"
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            {t("readyToExperience")}
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            {t("contactTeamToday")}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{t("getInTouch")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
