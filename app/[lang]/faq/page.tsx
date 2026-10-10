import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { isLang, pick } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export async function generateMetadata({ params }: PageProps<'/[lang]/faq'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = `${pick(site.ui.allFaqs, lang)} | ${site.brand.name}`;
  return {
    title,
    description: pick(site.home.faqSection.lead, lang),
    alternates: {
      canonical: `/${lang}/faq`,
      languages: { bn: '/bn/faq', en: '/en/faq' },
    },
  };
}

export default async function FaqPage({ params }: PageProps<'/[lang]/faq'>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const url = `${site.brand.url}/${lang}/faq`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      url,
      mainEntity: site.faq.map((f) => ({
        '@type': 'Question',
        name: pick(f.q, lang),
        acceptedAnswer: { '@type': 'Answer', text: pick(f.a, lang) },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Header lang={lang} onHome={false} />
      <main className="py-8">
        <Faq lang={lang} isStandalone />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} onHome={false} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
