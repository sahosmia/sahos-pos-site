import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { isLang, pick } from '@/lib/i18n';
import { LegalPage } from '@/components/LegalPage';

export async function generateMetadata({ params }: PageProps<'/[lang]/privacy'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: pick(site.legal.privacy.title, lang),
    alternates: { canonical: `/${lang}/privacy`, languages: { bn: '/bn/privacy', en: '/en/privacy' } },
  };
}

export default async function Privacy({ params }: PageProps<'/[lang]/privacy'>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage lang={lang} title={site.legal.privacy.title} body={site.legal.privacy.body} />;
}
