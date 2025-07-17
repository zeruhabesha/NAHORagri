"use client";

import { NextIntlClientProvider } from "next-intl";
import { useParams } from "next/navigation";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import zh from "../../messages/zh.json";
import Header from "@/components/header";
import Footer from "@/components/footer";

const messages = { en, fr, zh };

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useParams<{ locale: string }>();
  const selectedMessages = (messages as any)[locale] || messages.en;

  return (
    <NextIntlClientProvider locale={locale} messages={selectedMessages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}