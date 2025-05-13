import Link from "next/link"
import { ArrowRight, Coffee, Leaf, FuelIcon as Oil, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-pattern">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Empowering Agriculture.
            <br />
            Enabling Growth.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
            Based in Addis Ababa, Ethiopia, <span className="font-semibold">NAHORagri</span> is your premier global
            source for high-quality agricultural commodities and engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
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
              From the highlands of Yirgacheffe to the fertile lands of Wollega, we bring Ethiopia's finest harvests to
              the world.
            </p>
            <div className="text-4xl font-serif text-primary opacity-30 absolute bottom-0 right-0">"</div>
          </blockquote>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Explore Our Core Offerings</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              We deliver exceptional products and services tailored to meet diverse market demands with an unwavering
              focus on quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Coffee Beans</CardTitle>
                <CardDescription>Premium Ethiopian Arabica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Exporting high-grade green Arabica coffee beans from Ethiopia's renowned coffee regions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#coffee" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Sesame Seeds</CardTitle>
                <CardDescription>High-Quality Varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Premium Humera and Wollega sesame seeds suitable for edible oil production and export markets.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#sesame" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Oil className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Avocado Products</CardTitle>
                <CardDescription>Raw, Paste & Oil</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Organically grown avocados from Ethiopian highlands, processed in modern facilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#avocado" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Wrench className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Engineering Solutions</CardTitle>
                <CardDescription>Tailored Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reliable engineering solutions tailored to Africa's growing infrastructural needs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/products#engineering" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Global Reach</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              We proudly export to countries across five continents, delivering Ethiopia's finest agricultural products
              to the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">Europe</h3>
              <p className="text-sm text-muted-foreground">Germany, Italy, UK, Belgium, Spain, France</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">Asia</h3>
              <p className="text-sm text-muted-foreground">South Korea, India, Japan, China, Taiwan</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">North America</h3>
              <p className="text-sm text-muted-foreground">USA, Canada</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">Middle East</h3>
              <p className="text-sm text-muted-foreground">UAE, Saudi Arabia</p>
            </div>

            <div className="p-6 rounded-lg bg-background shadow-sm">
              <h3 className="font-bold mb-4">Africa</h3>
              <p className="text-sm text-muted-foreground">South Africa</p>
            </div>
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
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
