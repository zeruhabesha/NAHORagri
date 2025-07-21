"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useParams } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale } = useParams(); // get current locale
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="NAHORagri Logo" width={100} height={80} />
            {/* <span className="hidden font-bold sm:inline-block text-xl">NAHORagri</span> */}
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}/about`}>{t("aboutUs")}</Link>
          <Link href={`/${locale}/products`}>{t("products")}</Link>
          <Link href={`/${locale}/blog`}>{t("blog")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>
          <ModeToggle />
          <Button asChild className="hidden md:flex">
            <Link href={`/${locale}/contact`}>{t("getAQuote")}</Link>
          </Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("aboutUs")}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("products")}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("blog")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <div className="pt-2 border-t">
              <LanguageSwitcher />
            </div>
            <Button asChild>
              <Link href={`/${locale}/contact`} onClick={() => setIsMenuOpen(false)}>
                {t("getAQuote")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
