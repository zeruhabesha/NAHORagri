"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { sendEmail, type FormData } from "@/app/actions/send-email"

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
          title: "Message sent",
          description: result.message,
        })

        // Reset form
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
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to discuss your specific requirements and discover how NAHORagri can meet your
              needs.
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
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AB Zone Business Centre, House No. F7-108,
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+254743933740</p>
                <p className="text-muted-foreground mb-2">+251911251023</p>
                <p className="text-muted-foreground">+251909523769</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  Email Addresses
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
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Contact Our Team</h2>
              <p className="text-muted-foreground mb-8">
                For all inquiries, please use the contact information or map below. We look forward to hearing from you!
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126766.39636748288!2d38.6440633!3d9.0119816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1715613791000!5m2!1sen!2sus"
                width="100%"
                height="100%"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our products, services, and business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What is the minimum order quantity?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our minimum order quantity is 1 Full Container Load (FCL). However, we can discuss smaller quantities
                  for first-time orders or samples.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does shipping take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shipping times vary depending on the destination. Typically, it takes 2-4 weeks from the Port of
                  Djibouti to most international destinations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you provide samples?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide samples upon request. Sample costs and shipping fees may apply, which can be credited
                  against your first order.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We primarily work with 100% Confirmed Letter of Credit (LC) at Sight. For established clients, we may
                  consider other payment methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Ready to Partner With Us?</h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            Contact our team today to discuss your specific requirements and discover how NAHORagri can meet your
            agricultural and engineering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="mailto:info@nahoragri.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
