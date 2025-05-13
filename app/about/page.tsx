import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">About NAHORagri</h1>
              <p className="text-lg text-muted-foreground mb-6">
                A trusted exporter and service provider specializing in agricultural commodities and engineering
                solutions from Ethiopia to the world.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground">
              NAHORagri is a trusted exporter and service provider specializing in agricultural commodities and
              engineering solutions. Headquartered in Addis Ababa, we leverage Ethiopia's rich natural resources and our
              global partnerships to serve clients across five continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground mb-6">
                To deliver exceptional agro and engineering services tailored to the evolving needs of our clients with
                a focus on sustainability and customer satisfaction.
              </p>

              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To become East Africa's leading exporter of agricultural goods and a top provider of integrated
                engineering solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At NAHORagri, our values guide everything we do, from sourcing the finest agricultural products to
              delivering exceptional engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards in all our products and services, ensuring that our clients receive
                  only the best.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We continuously seek new and better ways to serve our clients, embracing technological advancements
                  and creative solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our clients can depend on us to deliver on our promises, consistently and on time, building trust
                  through every interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to environmentally responsible practices that preserve resources for future
                  generations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize understanding and meeting our clients' needs, building long-term relationships based on
                  mutual success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical standards that exceed industry
                  expectations.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Why Choose NAHORagri</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With strategic partnerships, a strong export track record, and an unwavering focus on quality, we deliver
              exceptional products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Rigorous quality control at every stage</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>International certification standards</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Consistent product excellence</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Global Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Export experience across five continents</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Understanding of international markets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Compliance with global trade regulations</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Sustainable Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Environmentally responsible sourcing</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Support for local farming communities</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Reduced environmental footprint</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Transparent communication</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Flexible solutions to meet client needs</span>
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
            Ready to Experience the NAHORagri Difference?
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            Contact our team today to learn more about our products and services, and discover how we can help you
            achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
