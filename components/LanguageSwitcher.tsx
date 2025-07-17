"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="flex gap-2 items-center text-sm font-medium">
      <Link 
        href="/en" 
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === "en" 
            ? "text-primary bg-primary/10" 
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        EN
      </Link>
      <span className="text-muted-foreground">|</span>
      <Link 
        href="/fr" 
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === "fr" 
            ? "text-primary bg-primary/10" 
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        FR
      </Link>
      <span className="text-muted-foreground">|</span>
      <Link 
        href="/zh" 
        className={`px-2 py-1 rounded transition-colors ${
          currentLocale === "zh" 
            ? "text-primary bg-primary/10" 
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        中文
      </Link>
    </div>
  );
} 