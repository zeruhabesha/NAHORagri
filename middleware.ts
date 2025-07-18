import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['en', 'fr', 'zh']

export function middleware(req: NextRequest) {
  let { pathname } = req.nextUrl

  // Normalize double slashes
  pathname = pathname.replace(/\/+/g, '/');

  // Remove trailing slash (except for root)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  // Ignore Next.js internals, API, and public files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(PUBLIC_FILE)
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We're on a public file on the root level e.g. /robots.txt
    return
  }

    // Redirect if there is no locale
  if (pathname === '/') {
    const locale = req.nextUrl.locale || 'en';
    req.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(req.nextUrl);
  }

  // If already at /en, /fr, or /zh, do nothing (let Next.js handle it)
}