"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Leaf, FuelIcon as Oil, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("coffee")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Products & Services</h1>
            <p className="text-lg text-muted-foreground">
              Explore our range of high-quality agricultural commodities and engineering solutions, sourced from
              Ethiopia's rich natural resources.
            </p>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="coffee" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="coffee" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <span>Coffee</span>
              </TabsTrigger>
              <TabsTrigger value="sesame" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span>Sesame</span>
              </TabsTrigger>
              <TabsTrigger value="avocado" className="flex items-center gap-2">
                <Oil className="h-4 w-4" />
                <span>Avocado</span>
              </TabsTrigger>
              <TabsTrigger value="engineering" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>Engineering</span>
              </TabsTrigger>
            </TabsList>

            {/* Coffee Tab */}
            <TabsContent value="coffee" id="coffee">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Coffee Exports</h2>
                  <p className="text-muted-foreground mb-6">
                    We export high-grade Green Arabica Coffee Beans sourced from Ethiopia's renowned coffee regions,
                    known for their exceptional quality and distinctive flavor profiles.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/coffee.jpg?height=600&width=800"
                    alt="Ethiopian Coffee Beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Coffee Origins & Profiles</CardTitle>
                    <CardDescription>Ethiopia's renowned coffee regions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Nekemte:</span> Smooth acidity, balanced cup, delicate fruit
                        notes
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Jimma:</span> Fruity & winey, low acidity, dark chocolate hints
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Yirgacheffe:</span> Floral, red currant, cherry, blueberry,
                        vanilla
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Sidamo:</span> Citrus, lemongrass, pineapple, blueberry
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Guji:</span> Jasmine, lemon, honey, berry, silky body
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Limmu:</span> Fruity, winey, smooth with low acidity
                      </li>
                      <li>
                        <span className="font-semibold">Benchmaji:</span> Exotic, bold, spicy and winey complexity
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>Specifications and characteristics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Grades:</span> 1, 2 (Washed/Natural), Grade 4
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Moisture Content:</span> 10–12%
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Altitude:</span> 1,700–2,300 m.a.s.l
                      </li>
                      <li>
                        <span className="font-semibold">Flavor Profiles:</span> Citrus, spices, rich body, crisp acidity
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Pricing (USD/lb)</CardTitle>
                  <CardDescription>Current pricing for our coffee varieties</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Grade</TableHead>
                        <TableHead>Processing</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Grade 1</TableCell>
                        <TableCell>Washed</TableCell>
                        <TableCell className="text-right">$4.25</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grade 2</TableCell>
                        <TableCell>Washed</TableCell>
                        <TableCell className="text-right">$3.75</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grade 1</TableCell>
                        <TableCell>Natural</TableCell>
                        <TableCell className="text-right">$4.71</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grade 2</TableCell>
                        <TableCell>Natural</TableCell>
                        <TableCell className="text-right">$4.17</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grade 4</TableCell>
                        <TableCell>Natural</TableCell>
                        <TableCell className="text-right">$3.38</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grade 4</TableCell>
                        <TableCell>Washed</TableCell>
                        <TableCell className="text-right">$3.29</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card> */}
            </TabsContent>

            {/* Sesame Tab */}
            <TabsContent value="sesame" id="sesame">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Sesame Seed Exports</h2>
                  <p className="text-muted-foreground mb-6">
                    We export high-quality sesame seeds suitable for edible oil production and export markets, sourced
                    from Ethiopia's prime growing regions.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/seeds.jpg?height=600&width=800"
                    alt="Ethiopian Sesame Seeds"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Sesame Types</CardTitle>
                    <CardDescription>Premium varieties from Ethiopia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="pb-3 border-b">
                        <h4 className="font-semibold text-lg mb-1">Humera</h4>
                        <p className="text-muted-foreground">
                          Premium white sesame seeds known for their large size, high oil content, and sweet flavor.
                          Ideal for tahini production and premium culinary applications.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-semibold text-lg mb-1">Wollega</h4>
                        <p className="text-muted-foreground">
                          High oil content brown sesame seeds, perfect for oil extraction and industrial uses. Known for
                          their rich, nutty flavor and excellent nutritional profile.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications & Standards</CardTitle>
                    <CardDescription>Quality assurance for our sesame products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Purity:</span> 99.5% minimum
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Moisture:</span> 6-8% maximum
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Free Fatty Acid (FFA):</span> 1.5% maximum
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">Oil Content:</span> 48-52%
                      </li>
                      <li>
                        <span className="font-semibold">Foreign Matter:</span> 0.5% maximum
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Avocado Tab */}
            <TabsContent value="avocado" id="avocado">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Avocado & Avocado Oil Exports</h2>
                  <p className="text-muted-foreground mb-6">
                    Organically grown avocados sourced from Ethiopian highlands, processed in modern facilities with
                    strict quality control measures.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/avocado.jpg?height=600&width=800"
                    alt="Ethiopian Avocados"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Raw Avocados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Fresh, organically grown avocados from the Ethiopian highlands, known for their creamy texture and
                      rich flavor.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• Varieties: Hass, Fuerte, Bacon</li>
                      <li className="text-sm">• Sizes: Small, Medium, Large</li>
                      <li className="text-sm">• Packaging: 4kg cartons</li>
                      <li className="text-sm">• Cold chain logistics available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Avocado Paste</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pure, preservative-free avocado paste, perfect for food service, retail, and industrial
                      applications.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• 100% pure avocado</li>
                      <li className="text-sm">• No additives or preservatives</li>
                      <li className="text-sm">• Packaging: 1kg, 5kg, 20kg</li>
                      <li className="text-sm">• Shelf life: 12 months frozen</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cold-Pressed Oil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Premium cold-pressed avocado oil, extracted using state-of-the-art technology to preserve
                      nutrients and flavor.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• Extra virgin quality</li>
                      <li className="text-sm">• High smoke point (255°C)</li>
                      <li className="text-sm">• Rich in oleic acid and vitamins</li>
                      <li className="text-sm">• Packaging: 250ml, 500ml, 1L bottles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Processing Facilities</CardTitle>
                    <CardDescription>State-of-the-art processing plants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Our avocado products are processed in modern facilities located in Yirgalem and Jimma, equipped
                      with the latest technology to ensure product quality and safety.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Yirgalem Processing Plant</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Capacity: 10 tons per day</li>
                          <li>• HACCP certified</li>
                          <li>• Cold storage facilities</li>
                          <li>• Specializes in fresh packing and paste production</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Jimma Oil Extraction Facility</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Capacity: 5,000 liters per week</li>
                          <li>• Cold-press technology</li>
                          <li>• ISO 22000 certified</li>
                          <li>• Specializes in premium oil production</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Engineering Tab */}
            <TabsContent value="engineering" id="engineering">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Engineering Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    NAHORagri partners with global manufacturers to deliver reliable engineering solutions tailored to
                    Africa's growing infrastructural needs.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Request a Consultation</Link>
                  </Button>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/engineering.jpg?height=600&width=800"
                    alt="Engineering Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Agricultural Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We provide comprehensive agricultural engineering solutions to enhance productivity and efficiency
                      in farming operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Irrigation system design and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Post-harvest processing equipment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Farm mechanization solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Cold chain infrastructure development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Industrial Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our industrial engineering services help businesses optimize their operations and improve
                      efficiency.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Production line design and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Process automation solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Quality control systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Energy efficiency consulting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Infrastructure Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We contribute to Africa's infrastructure development through innovative engineering solutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Road and bridge construction consulting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Water supply and sanitation systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Renewable energy installations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Commercial building design and construction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our team of experienced engineers provides expert consulting services across various technical
                      domains.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Feasibility studies and project assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Technical due diligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Environmental impact assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>Project management and supervision</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Engineering Partners</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                  We collaborate with leading global manufacturers and engineering firms to deliver the best solutions
                  to our clients.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Partner Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Partner Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Partner Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Partner Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Packaging & Logistics */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Packaging & Logistics</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We ensure that our products are properly packaged and delivered to your destination with efficiency and
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Bag Type:</span> Durable Jute Bags
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Weight per Bag:</span> 60 kg
                  </li>
                  <li>
                    <span className="font-semibold">Custom Packaging:</span> Available upon request
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Minimum Order:</span> 1 FCL (Full Container Load)
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Lead Time:</span> 4–6 weeks post-confirmation
                  </li>
                  <li>
                    <span className="font-semibold">Samples:</span> Available upon request
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Port of Loading:</span> Port of Djibouti, Djibouti
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">Port of Destination:</span> Dubai (or as specified)
                  </li>
                  <li>
                    <span className="font-semibold">Incoterms:</span> FOB Djibouti
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      {/* <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Payment Terms</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer flexible payment options to facilitate smooth business transactions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="pb-3 border-b flex justify-between">
                    <span className="font-semibold">Method:</span>
                    <span>100% Confirmed Letter of Credit (LC) at Sight</span>
                  </li>
                  <li className="pb-3 border-b flex justify-between">
                    <span className="font-semibold">Currency:</span>
                    <span>USD</span>
                  </li>
                  <li className="pb-3 border-b flex justify-between">
                    <span className="font-semibold">Quotation Validity:</span>
                    <span>Until April 26, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Samples:</span>
                    <span>Available upon request</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Ready to Place an Order?</h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            Contact our team today to discuss your specific requirements and get a personalized quote for our products
            and services.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
