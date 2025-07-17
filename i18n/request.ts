import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'fr', 'zh'];

export default getRequestConfig(async ({locale}) => {
  if (!locale || !locales.includes(locale as any)) {
    console.warn('Invalid or missing locale:', locale);
    notFound();
  } else {
    console.log('Requested locale:', locale);
  }

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}); 