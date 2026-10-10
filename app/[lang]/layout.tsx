import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '@fontsource/hind-siliguri/400.css';
import '@fontsource/hind-siliguri/500.css';
import '@fontsource/hind-siliguri/600.css';
import '@fontsource/hind-siliguri/700.css';
import '../globals.css';
import { langs, site } from '@/content/site';
import { isLang, pick } from '@/lib/i18n';

// শুধু bn ও en — অন্য যেকোনো /xx হলে 404
export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: '#0f1424',
};

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = pick(site.seo.defaultTitle, lang);
  const description = pick(site.brand.description, lang);

  return {
    metadataBase: new URL(site.brand.url),
    title: { default: title, template: site.seo.titleTemplate },
    description,
    keywords: site.seo.keywords[lang],
    applicationName: site.brand.name,
    alternates: {
      canonical: `/${lang}`,
      languages: { bn: '/bn', en: '/en', 'x-default': '/bn' },
    },
    openGraph: {
      type: 'website',
      siteName: site.brand.name,
      title,
      description,
      url: `/${lang}`,
      locale: lang === 'bn' ? 'bn_BD' : 'en_US',
      alternateLocale: lang === 'bn' ? 'en_US' : 'bn_BD',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang}>
      <body suppressHydrationWarning className="min-h-screen bg-ground text-ink antialiased">{children}</body>
    </html>
  );
}
