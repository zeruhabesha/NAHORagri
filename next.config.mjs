import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // Supported locales for internationalization
  locales: ['en', 'fr', 'zh'],
  defaultLocale: 'en',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint checks during production builds (not recommended for long-term)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production build to complete even if there are TypeScript errors (use carefully)
    ignoreBuildErrors: true,
  },
  images: {
    // Disable Next.js Image Optimization (useful for static or external images)
    unoptimized: true,
  },
};

// Wrap the Next.js config with next-intl plugin to add i18n support
export default withNextIntl(nextConfig);
