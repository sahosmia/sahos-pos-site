import Image from 'next/image';
import Link from 'next/link';
import { site, type Lang } from '@/content/site';
import { isSet, pick } from '@/lib/i18n';
import { Container } from './ui';

export function Footer({ lang, onHome = true }: { lang: Lang; onHome?: boolean }) {
  const c = site.contact;
  const address = pick(c.address, lang);
  const anchor = (h: string) => (onHome ? h : `/${lang}${h}`);

  const linkClass =
    'group/link relative inline-block w-fit text-[15px] text-night-text transition-colors duration-300 hover:text-white';
  const underline = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover/link:scale-x-100"
    />
  );

  return (
    <footer className="relative overflow-hidden bg-night px-4 pb-8 pt-16 text-night-text sm:px-6">
      {/* ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-4xl rounded-full bg-brand/15 blur-3xl animate-float-slower"
      />

      <Container className="relative flex flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex max-w-[380px] flex-[1_1_320px] flex-col gap-4">
            <Image
              src={site.brand.logoDark}
              alt={site.brand.name}
              width={236}
              height={46}
              className="h-[46px] w-auto self-start transition-transform duration-300 hover:scale-[1.03]"
            />
            <p className="text-[15px]">{pick(site.brand.description, lang)}</p>
          </div>

          <div className="flex flex-wrap gap-12 text-[15px]">
            <div className="flex flex-col gap-1.5">
              <span className="mb-1 font-bold text-white">{pick(site.ui.footerPages, lang)}</span>
              {site.nav.map((n) => (
                <a key={n.href} href={anchor(n.href)} className={linkClass}>
                  {pick(n.label, lang)}
                  {underline}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="mb-1 font-bold text-white">{pick(site.ui.footerContact, lang)}</span>
              <span>{isSet(c.phone) ? c.phone : pick(site.ui.phonePlaceholder, lang)}</span>
              <span>{isSet(c.email) ? c.email : pick(site.ui.emailPlaceholder, lang)}</span>
              <span>{isSet(address) ? address : pick(site.ui.addressPlaceholder, lang)}</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="mb-1 font-bold text-white">{pick(site.ui.footerOther, lang)}</span>
              <Link href={`/${lang}/privacy`} className={linkClass}>
                {pick(site.ui.privacy, lang)}
                {underline}
              </Link>
              <Link href={`/${lang}/terms`} className={linkClass}>
                {pick(site.ui.terms, lang)}
                {underline}
              </Link>
              {isSet(c.social.facebook) && (
                <a
                  href={c.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Facebook
                  {underline}
                </a>
              )}
              {isSet(c.social.youtube) && (
                <a
                  href={c.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  YouTube
                  {underline}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-night-line pt-5 text-sm text-[#8e97ae]">
          <span>{pick(site.ui.copyright, lang)}</span>
          <span className="inline-flex items-center gap-1.5">
            <Link
              href="/bn"
              hrefLang="bn"
              className="transition-colors duration-300 hover:text-white"
            >
              বাংলা
            </Link>
            <span aria-hidden className="text-night-line">
              ·
            </span>
            <Link
              href="/en"
              hrefLang="en"
              className="transition-colors duration-300 hover:text-white"
            >
              English
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}