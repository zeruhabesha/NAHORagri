"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { sendEmail, type FormData } from "@/app/[locale]/actions/send-email"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    interest: "coffee",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useTranslations()
  const { locale } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(formData as FormData)

      if (result.success) {
        toast({
          title: t("contactForm.send"),
          description: result.message,
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          interest: "coffee",
          message: "",
        })
      } else {
        toast({
          title: t("contactForm.errorRequired"),
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: t("contactForm.errorRequired"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{t("contact")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("getInTouchWithTeam")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  {t("officeAddress")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Urael, AB Zone Business Centre, House No. F7-108,
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  {t("phoneNumbers")}
                </CardTitle>
              </CardHeader>
              <CardContent>
  <p className="text-muted-foreground mb-2 flex items-center gap-2">
    <Phone className="w-4 h-4 text-primary" />
    +251909523769
  </p>
  <p className="text-muted-foreground mb-2 flex items-center gap-2">
    <Phone className="w-4 h-4 text-primary" />
    +251911251023
  </p>
  <p className="text-muted-foreground flex items-center gap-2">
    <MessageCircle className="w-4 h-4 text-green-500" />
    +254743933740
  </p>
</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  {t("emailAddresses")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <a href="mailto:nahorengineering@gmail.com" className="hover:text-primary transition-colors">
                    nahorengineering@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="mailto:info@nahoragri.com" className="hover:text-primary transition-colors">
                    info@nahoragri.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Replaced contact form with a message and CTA */}
              <h2 className="text-3xl font-bold tracking-tighter mb-6">{t("contactOurTeam")}</h2>
              <p className="text-muted-foreground mb-8">{t("forAllInquiries")}</p>
              {/* Contact options with icons */}
              <div className="bg-muted p-8 rounded-xl shadow flex flex-col items-center gap-6">
                <p className="text-lg text-center">
                  {t("contactTeamTodayDiscuss")}
                </p>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                  {/* Email */}
                  <a
                    href="mailto:info@nahoragri.com"
                    aria-label={t("contactUs") + " (Email)"}
                    className="flex flex-col items-center group hover:text-primary transition-colors"
                  >
                    <Mail className="h-8 w-8 mb-1" />
                    <span className="text-xs">Email</span>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+251911514499"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex flex-col items-center group hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="h-8 w-8 mb-1" />
                    <span className="text-xs">WhatsApp</span>
                  </a>
                  {/* Telegram */}
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="flex flex-col items-center group hover:text-blue-500 transition-colors"
                  >
                    <Send className="h-8 w-8 mb-1" />
                    <span className="text-xs">Telegram</span>
                  </a>
                  {/* Phone */}
                  <a
                    href="tel:+251911251023"
                    aria-label={t("contactUs") + " (Phone)"}
                    className="flex flex-col items-center group hover:text-primary transition-colors"
                  >
                    <Phone className="h-8 w-8 mb-1" />
                    <span className="text-xs">Call</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5922923147723!2d38.77026887785189!3d9.009610266242003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a6cf75f37f%3A0x96070c7187a5164!2z4Yqk4YmiIOGLnuGKlSDhiaLhi53hipDhiLUg4Yi04YqV4Ymw4Yit!5e0!3m2!1sen!2sus!4v1752169206437!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
  <div className="container">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {t("frequentlyAskedQuestions")}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {t("findAnswersToCommon")}
      </p>
    </div>

    {/* FAQ Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {[
        {
          title: t("minimumOrderQuantity"),
          content: t("ourMinimumOrder"),
        },
        {
          title: t("shippingTime"),
          content: t("shippingTimesVary"),
        },
        {
          title: t("samples"),
          content: t("yesWeProvide"),
        },
        {
          title: t("paymentMethods"),
          content: t("wePrimarilyWork"),
        },
      ].map((faq, idx) => (
        <Card
          key={idx}
          className="bg-white dark:bg-background border border-border shadow-sm hover:shadow-md transition-shadow rounded-2xl"
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {faq.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base leading-relaxed">
              {faq.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/pattern.jpg"
      alt="Background pattern"
      className="object-cover w-full h-full opacity-40"
    />
    <div className="absolute inset-0 bg-black" style={{ opacity: 0.3 }} />
  </div>

  {/* Content */}
  <div className="container text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
      {t("readyToPartner")}
    </h2>
    <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
      {t("contactTeamTodayDiscuss")}
    </p>
    <Button asChild size="lg" variant="secondary">
      <Link href={`/${locale}/contact`}>{t("getInTouch")}</Link>
    </Button>
  </div>
</section>


    </div>
  )
}
