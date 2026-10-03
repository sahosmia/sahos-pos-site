import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { isLang, pick } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Comfort, Highlights, HowItWorks, Problems, Solutions } from '@/components/Sections';
import { ModulesSection } from '@/components/ModulesSection';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const url = `${site.brand.url}/${lang}`;

  // গুগলের জন্য স্ট্রাকচার্ড ডাটা
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: site.brand.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      description: pick(site.brand.description, lang),
      inLanguage: ['bn', 'en'],
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.brand.name,
      url: site.brand.url,
      logo: `${site.brand.url}${site.brand.logoLight}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
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
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Highlights lang={lang} />
        <Problems lang={lang} />
        <Solutions lang={lang} />
        <ModulesSection lang={lang} />
        <Comfort lang={lang} />
        <HowItWorks lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
