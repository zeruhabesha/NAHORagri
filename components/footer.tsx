import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation";

export default function Footer() {
  const { locale } = useParams();
  const t = useTranslations();
  
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">NAHORagri</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("basedInAddis")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("home")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("products")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/products#coffee`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("coffeeBeans")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products#sesame`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("sesameSeeds")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products#avocado`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t("avocadoProducts")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products#engineering`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("engineeringSolutions")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  Urael, AB Zone Business Centre, House No. F7-108, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+254743933740</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@nahoragri.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@nahoragri.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NAHORagri. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
