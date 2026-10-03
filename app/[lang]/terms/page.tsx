import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { isLang, pick } from '@/lib/i18n';
import { LegalPage } from '@/components/LegalPage';

export async function generateMetadata({ params }: PageProps<'/[lang]/terms'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: pick(site.legal.terms.title, lang),
    alternates: { canonical: `/${lang}/terms`, languages: { bn: '/bn/terms', en: '/en/terms' } },
  };
}

export default async function Terms({ params }: PageProps<'/[lang]/terms'>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage lang={lang} title={site.legal.terms.title} body={site.legal.terms.body} />;
}
