"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Leaf, FuelIcon as Oil, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation";

function CoffeeOriginsGrid() {
  const t = useTranslations();
  const [selected, setSelected] = useState(null as null | any);
  const coffeeOrigins = [
    {
      key: "lekempti",
      name: t("coffeeOrigin.lekempti.name"),
      image: "/LEKEMPTI.jpg",
      short: t("coffeeOrigin.lekempti.short"),
      detail: t("coffeeOrigin.lekempti.detail"),
      region: t("coffeeOrigin.lekempti.region"),
      altitude: t("coffeeOrigin.lekempti.altitude"),
      harvest: t("coffeeOrigin.lekempti.harvest"),
      processing: t("coffeeOrigin.lekempti.processing"),
      cupProfile: t("coffeeOrigin.lekempti.cupProfile").split("|"),
      additional: t("coffeeOrigin.lekempti.additional")
    },
    {
      key: "djimmah",
      name: t("coffeeOrigin.djimmah.name"),
      image: "/djimmah.webp",
      short: t("coffeeOrigin.djimmah.short"),
      detail: t("coffeeOrigin.djimmah.detail"),
      region: t("coffeeOrigin.djimmah.region"),
      altitude: t("coffeeOrigin.djimmah.altitude"),
      harvest: t("coffeeOrigin.djimmah.harvest"),
      processing: t("coffeeOrigin.djimmah.processing"),
      cupProfile: t("coffeeOrigin.djimmah.cupProfile").split("|"),
      additional: t("coffeeOrigin.djimmah.additional")
    },
    {
      key: "yirgacheffe",
      name: t("coffeeOrigin.yirgacheffe.name"),
      image: "/yirgacheffe.jpg",
      short: t("coffeeOrigin.yirgacheffe.short"),
      detail: t("coffeeOrigin.yirgacheffe.detail"),
      region: t("coffeeOrigin.yirgacheffe.region"),
      altitude: t("coffeeOrigin.yirgacheffe.altitude"),
      harvest: t("coffeeOrigin.yirgacheffe.harvest"),
      processing: t("coffeeOrigin.yirgacheffe.processing"),
      cupProfile: t("coffeeOrigin.yirgacheffe.cupProfile").split("|"),
      additional: t("coffeeOrigin.yirgacheffe.additional")
    },
    {
      key: "sidamo",
      name: t("coffeeOrigin.sidamo.name"),
      image: "/sidamo.jpg",
      short: t("coffeeOrigin.sidamo.short"),
      detail: t("coffeeOrigin.sidamo.detail"),
      region: t("coffeeOrigin.sidamo.region"),
      altitude: t("coffeeOrigin.sidamo.altitude"),
      harvest: t("coffeeOrigin.sidamo.harvest"),
      processing: t("coffeeOrigin.sidamo.processing"),
      cupProfile: t("coffeeOrigin.sidamo.cupProfile").split("|"),
      additional: t("coffeeOrigin.sidamo.additional")
    },
    {
      key: "guji",
      name: t("coffeeOrigin.guji.name"),
      image: "/guji.jpg",
      short: t("coffeeOrigin.guji.short"),
      detail: t("coffeeOrigin.guji.detail"),
      region: t("coffeeOrigin.guji.region"),
      altitude: t("coffeeOrigin.guji.altitude"),
      harvest: t("coffeeOrigin.guji.harvest"),
      processing: t("coffeeOrigin.guji.processing"),
      cupProfile: t("coffeeOrigin.guji.cupProfile").split("|"),
      additional: t("coffeeOrigin.guji.additional")
    },
    {
      key: "limmu",
      name: t("coffeeOrigin.limmu.name"),
      image: "/limmu.jpg",
      short: t("coffeeOrigin.limmu.short"),
      detail: t("coffeeOrigin.limmu.detail"),
      region: t("coffeeOrigin.limmu.region"),
      altitude: t("coffeeOrigin.limmu.altitude"),
      harvest: t("coffeeOrigin.limmu.harvest"),
      processing: t("coffeeOrigin.limmu.processing"),
      cupProfile: t("coffeeOrigin.limmu.cupProfile").split("|"),
      additional: t("coffeeOrigin.limmu.additional")
    },
    {
      key: "benchmaji",
      name: t("coffeeOrigin.benchmaji.name"),
      image: "/benchmaji.jpg",
      short: t("coffeeOrigin.benchmaji.short"),
      detail: t("coffeeOrigin.benchmaji.detail"),
      region: t("coffeeOrigin.benchmaji.region"),
      altitude: t("coffeeOrigin.benchmaji.altitude"),
      harvest: t("coffeeOrigin.benchmaji.harvest"),
      processing: t("coffeeOrigin.benchmaji.processing"),
      cupProfile: t("coffeeOrigin.benchmaji.cupProfile").split("|"),
      additional: t("coffeeOrigin.benchmaji.additional")
    }
  ];
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {coffeeOrigins.map(origin => (
          <button
            key={origin.key}
            className="flex flex-col items-center bg-muted/40 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer focus:outline-none"
            onClick={() => setSelected(origin)}
            aria-label={`View details for ${origin.name}`}
            type="button"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background shadow">
              <img src={origin.image} alt={origin.name + ' Coffee'} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold mb-2">{origin.name}</h3>
            <p className="text-muted-foreground mb-4 text-sm text-center">{origin.short}</p>
            <span className="inline-block px-5 py-2 rounded-full bg-background border text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">{t("readMore")}</span>
          </button>
        ))}
      </div>
      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background rounded-xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button className="absolute top-3 right-3 text-muted-foreground hover:text-primary" onClick={() => setSelected(null)} aria-label="Close">
              ×
            </button>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background shadow">
                <img src={selected.image} alt={selected.name + ' Coffee'} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{selected.detail}</p>

              {/* General Ethiopia Coffee Export Note */}
              <div className="w-full text-left text-xs mb-4 p-3 bg-muted/50 rounded">
                <div className="mb-1 font-semibold">{t("coffeeModal.exportProductsTitle")}</div>
                <ul className="list-disc pl-6">
                  {(t.raw("coffeeModal.exportProductsList") as string[]).map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
                <div className="mt-2">{t("coffeeModal.exportProductsNote")}</div>
              </div>

              {/* Region Details */}
              <div className="w-full text-left text-sm mt-2">
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.region")}:</span> {selected.region}</div>
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.altitude")}:</span> {selected.altitude}</div>
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.harvest")}:</span> {selected.harvest}</div>
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.processing")}:</span> {selected.processing}</div>
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.cupProfile")}:</span>
                  <ul className="list-disc pl-6">
                    {selected.cupProfile.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2"><span className="font-semibold">{t("coffeeOrigin.lekempti.additional")}:</span> {selected.additional}</div>
              </div>

              {/* Grades, Moisture, Flavor, Pricing, etc. */}
              <div className="w-full text-left text-xs mt-4 p-3 bg-muted/40 rounded">
                <div className="font-semibold mb-1">{t("coffeeModal.gradesTitle")}</div>
                <ul className="list-disc pl-6 mb-2">
                  {(t.raw("coffeeModal.gradesList") as string[]).map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
                <div className="mb-1"><span className="font-semibold">{t("coffeeModal.moistureContent")}:</span> {t("coffeeModal.moistureContent")}</div>
                <div className="mb-1"><span className="font-semibold">{t("coffeeOrigin.lekempti.flavorProfiles")}:</span> {t("coffeeOrigin.lekempti.flavorProfiles")}</div>
                <div className="font-semibold mb-1">{t("coffeeModal.packagingTitle")}</div>
                <ul className="list-disc pl-6 mb-2">
                  {(t.raw("coffeeModal.packagingList") as string[]).map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
                <div className="font-semibold mb-1">{t("coffeeModal.destinationsTitle")}</div>
                <ul className="list-disc pl-6">
                  {(t.raw("coffeeModal.destinationsList") as string[]).map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const sesameProducts = [
  {
    key: "humera",
    name: "HUMERA SESAME",
    image: "/humera.jpg", // Replace with actual image if available
    short: "Humera type of sesame, which is known to be a premium variety. Native to the Humera district in northwest Ethiopia. Whitish Humera type is known for its top quality and has a bid demand in the world market.",
    detail: "Humera type of sesame, which is known to be a premium variety. Native to the Humera district in northwest Ethiopia. Whitish Humera type is known for its top quality and has a bid demand in the world market."
  },
  {
    key: "wollega",
    name: "WOLLEGA SESAME",
    image: "/wollega.jpg", // Replace with actual image if available
    short: "Wollega type sesame seeds are the mixed/brownish coloured variety which comes from Wollega region. The Wollega type sesame seeds have a competitive advantage for edible oil production because of its high oil content.",
    detail: "Wollega type sesame seeds are the mixed/brownish coloured variety which comes from Wollega region. The Wollega type sesame seeds have a competitive advantage for edible oil production because of its high oil content."
  },
  {
    key: "hulled",
    name: "HULLED SESAME",
    image: "/hulled.webp", // Replace with actual image if available
    short: "Hulled sesame seeds are those that have lost their hull or outer shell during the manufacturing or processing stage.",
    detail: "Hulled sesame seeds are those that have lost their hull or outer shell during the manufacturing or processing stage."
  },
  {
    key: "tahini",
    name: "TAHINI",
    image: "/tahini.jpg", // Replace with actual image if available
    short: "Tahini is a middle eastern condiment made from toasted ground hulled sesame seeds & sesame oil, has a very rich creamy paste,",
    detail: "Tahini is a middle eastern condiment made from toasted ground hulled sesame seeds & sesame oil, has a very rich creamy paste,"
  }
]

function SesameProductsGrid() {
  const [selected, setSelected] = useState<typeof sesameProducts[0] | null>(null)
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {sesameProducts.map(product => (
          <button
            key={product.key}
            className="flex flex-col items-center bg-muted/40 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer focus:outline-none"
            onClick={() => setSelected(product)}
            aria-label={`View details for ${product.name}`}
            type="button"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background shadow">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4 text-sm text-center">{product.short}</p>
            <span className="inline-block px-5 py-2 rounded-full bg-background border text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">Read More</span>
          </button>
        ))}
      </div>
      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background rounded-xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button className="absolute top-3 right-3 text-muted-foreground hover:text-primary" onClick={() => setSelected(null)} aria-label="Close">
              ×
            </button>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background shadow">
                <img src={selected.image} alt={selected.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{selected.detail}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("coffee")
  const t = useTranslations()
  const { locale } = useParams();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{t("products")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("exploreProductsServices")}
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
                <span>{t("coffee")}</span>
              </TabsTrigger>
              <TabsTrigger value="sesame" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span>{t("sesame")}</span>
              </TabsTrigger>
              <TabsTrigger value="avocado" className="flex items-center gap-2">
                <Oil className="h-4 w-4" />
                <span>{t("avocado")}</span>
              </TabsTrigger>
              <TabsTrigger value="engineering" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>{t("engineering")}</span>
              </TabsTrigger>
            </TabsList>

            {/* Coffee Tab */}
            <TabsContent value="coffee" id="coffee">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">{t("coffeeExports")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("weExportHighGrade")}
                  </p>
                  <Button asChild>
                    <Link href={`/${locale}/contact`}>{t("requestQuote")}</Link>
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

              <div className="flex flex-col gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("coffeeOriginsProfiles")}</CardTitle>
                    <CardDescription>{t("ethiopiasRenowned")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CoffeeOriginsGrid />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("productDetails")}</CardTitle>
                    <CardDescription>{t("specificationsCharacteristics")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="pb-2 border-b">
                        <span className="font-semibold">{t("grades")}:</span> 1, 2 (Washed/Natural), Grade 4
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">{t("moistureContent")}:</span> 10–12%
                      </li>
                      <li className="pb-2 border-b">
                        <span className="font-semibold">{t("altitude")}:</span> 1,700–2,300 m.a.s.l
                      </li>
                      <li>
                        <span className="font-semibold">{t("flavorProfiles")}:</span> Citrus, spices, rich body, crisp acidity
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Sesame Tab */}
            <TabsContent value="sesame" id="sesame">
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">{t("sesameSeedsProducts")}</h2>
                <p className="text-muted-foreground mb-8">
                  {t("discoverOurRange")}
                </p>
                <SesameProductsGrid />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">{t("ethiopianSesameSeeds")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("weExportPremium")}
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
                    <li><span className="font-semibold">{t("types")}:</span> Humera (white), Wollega (brown)</li>
                    <li><span className="font-semibold">{t("origin")}:</span> Ethiopia</li>
                    <li><span className="font-semibold">{t("purity")}:</span> 99.5% minimum</li>
                    <li><span className="font-semibold">{t("oilContent")}:</span> 48–52%</li>
                    <li><span className="font-semibold">{t("moisture")}:</span> 6–8% maximum</li>
                    <li><span className="font-semibold">{t("uses")}:</span> Edible oil production, tahini, bakery, confectionery</li>
                    <li><span className="font-semibold">{t("packaging")}:</span> 50kg or 25kg new jute or PP bags</li>
                    <li><span className="font-semibold">{t("minimumOrder")}:</span> 1 FCL (Full Container Load)</li>
                    <li><span className="font-semibold">{t("exportDestinations")}:</span> Asia, Middle East, Europe, North America</li>
                  </ul>
                  <Button asChild>
                    <Link href={`/${locale}/contact`}>{t("requestQuote")}</Link>
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
            </TabsContent>

            {/* Avocado Tab */}
            <TabsContent value="avocado" id="avocado">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">{t("avocadoAvocadoOil")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("organicallyGrownAvocados")}
                  </p>
                  <Button asChild>
                    <Link href={`/${locale}/contact`}>{t("requestQuote")}</Link>
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
                    <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                      <Image src="/raw-avocado.jpg" alt="Raw Avocados" fill className="object-cover" />
                    </div>
                    <CardTitle>{t("rawAvocados")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("freshOrganicallyGrown")}
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• {t("varieties")}: Hass, Fuerte, Bacon</li>
                      <li className="text-sm">• {t("sizes")}: Small, Medium, Large</li>
                      <li className="text-sm">• {t("packaging")}: 4kg cartons</li>
                      <li className="text-sm">• {t("coldChainLogistics")}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                      <Image src="/avocado-paste.jpg" alt="Avocado Paste" fill className="object-cover" />
                    </div>
                    <CardTitle>{t("avocadoPaste")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("purePreservativeFree")}
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• {t("pureAvocado")}</li>
                      <li className="text-sm">• {t("noAdditives")}</li>
                      <li className="text-sm">• {t("packaging")}: 1kg, 5kg, 20kg</li>
                      <li className="text-sm">• {t("shelfLife")}: 12 months frozen</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                      <Image src="/cold-pressed-oil.webp" alt="Cold-Pressed Oil" fill className="object-cover" />
                    </div>
                    <CardTitle>{t("coldPressedOil")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("premiumColdPressed")}
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm">• {t("extraVirginQuality")}</li>
                      <li className="text-sm">• {t("highSmokePoint")}</li>
                      <li className="text-sm">• {t("richOleicAcid")}</li>
                      <li className="text-sm">• {t("packaging")}: 250ml, 500ml, 1L bottles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("processingFacilities")}</CardTitle>
                    <CardDescription>{t("stateOfTheArt")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {t("ourAvocadoProducts")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="relative w-full aspect-[4/3] mb-3 rounded-lg overflow-hidden">
                          <Image src="/yirgalem.jpg" alt="Yirgalem Processing Plant" fill className="object-cover" />
                        </div>
                        <h4 className="font-semibold mb-2">{t("yirgalemProcessingPlant")}</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• {t("capacity")}: 10 tons per day</li>
                          <li>• {t("haccpCertified")}</li>
                          <li>• {t("coldStorageFacilities")}</li>
                          <li>• {t("specializesFreshPacking")}</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="relative w-full aspect-[4/3] mb-3 rounded-lg overflow-hidden">
                          <Image src="/jimma.jpg" alt="Jimma Oil Extraction Facility" fill className="object-cover" />
                        </div>
                        <h4 className="font-semibold mb-2">{t("jimmaOilExtraction")}</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• {t("capacity")}: 5,000 liters per week</li>
                          <li>• {t("coldPressTechnology")}</li>
                          <li>• {t("isoCertified")}</li>
                          <li>• {t("specializesPremiumOil")}</li>
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
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">{t("engineeringSolutions")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("nahoragriPartners")}
                  </p>
                  <Button asChild>
                    <Link href={`/${locale}/contact`}>{t("requestConsultation")}</Link>
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
                    <CardTitle>{t("agriculturalEngineering")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("weProvideComprehensive")}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("irrigationSystem")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("postHarvestProcessing")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("farmMechanization")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("coldChainInfrastructure")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("industrialEngineering")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("ourIndustrialEngineering")}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("productionLineDesign")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("processAutomation")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("qualityControlSystems")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("energyEfficiency")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("infrastructureDevelopment")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("weContributeTo")}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("roadBridgeConstruction")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("waterSupplySanitation")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("renewableEnergy")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("commercialBuilding")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("technicalConsulting")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t("ourTeamExperienced")}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("feasibilityStudies")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("technicalDueDiligence")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("environmentalImpact")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">•</span>
                        <span>{t("projectManagement")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">{t("ourEngineeringPartners")}</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                  {t("weCollaborateWith")}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt={t("partnerLogo")}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt={t("partnerLogo")}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt={t("partnerLogo")}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted p-6 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt={t("partnerLogo")}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div> */}
              {/* </div> */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Packaging & Logistics */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("packagingLogistics")}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("weEnsureProducts")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("packaging")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("bagType")}:</span> {t("durableJuteBags")}
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("weightPerBag")}:</span> 60 kg
                  </li>
                  <li>
                    <span className="font-semibold">{t("customPackaging")}:</span> {t("availableUponRequest")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("orderDetails")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("minimumOrder")}:</span> 1 FCL (Full Container Load)
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("leadTime")}:</span> {t("weeksPostConfirmation")}
                  </li>
                  <li>
                    <span className="font-semibold">{t("samplesAvailable")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("shippingTerms")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("portOfLoading")}:</span> {t("portOfDjibouti")}
                  </li>
                  <li className="pb-2 border-b">
                    <span className="font-semibold">{t("portOfDestination")}:</span> {t("dubaiOrSpecified")}
                  </li>
                  <li>
                    <span className="font-semibold">{t("incoterms")}:</span> {t("fobDjibouti")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{t("readyToOrder")}</h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90">
            {t("contactTeamTodayQuote")}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${locale}/contact`}>{t("requestQuote")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
