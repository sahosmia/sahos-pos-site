'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { langs, site, type Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { MobileMenu } from './MobileMenu';

export function Header({ lang, onHome = true }: { lang: Lang; onHome?: boolean }) {
  const anchor = (h: string) => {
    if (h.startsWith('/')) return `/${lang}${h}`;
    return onHome ? h : `/${lang}${h}`;
  };
  const navItems = site.nav.map((n) => ({ href: anchor(n.href), label: pick(n.label, lang) }));

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-ground/85 shadow-[0_10px_30px_-20px_rgba(15,20,36,0.35)] backdrop-blur-xl'
          : 'border-transparent bg-ground/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={`/${lang}`}
          aria-label={`${site.brand.name} — ${pick(site.ui.backHome, lang)}`}
          className="inline-flex min-h-11 items-center transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src={site.brand.logoLight}
            alt={site.brand.name}
            width={205}
            height={40}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <nav aria-label={pick(site.ui.mainNav, lang)} className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group/nav relative inline-flex min-h-11 items-center rounded-lg px-3.5 font-medium text-body transition-colors hover:text-ink"
            >
              {n.label}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-3.5 bottom-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover/nav:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            role="group"
            aria-label={pick(site.ui.language, lang)}
            className="hidden rounded-full border border-line bg-white p-[3px] sm:inline-flex"
          >
            {langs.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                hrefLang={l}
                aria-current={l === lang ? 'true' : undefined}
                className={`inline-flex min-h-9 items-center rounded-full px-3 text-sm font-semibold transition-all duration-300 ${
                  l === lang
                    ? 'bg-ink text-white shadow-[0_6px_14px_-6px_rgba(15,20,36,0.6)]'
                    : 'text-muted hover:text-ink hover:bg-[#f4f6fb]'
                }`}
              >
                {l === 'bn' ? 'বাংলা' : 'EN'}
              </Link>
            ))}
          </div>
          <a
            href={anchor('#contact')}
            className="group/cta hidden min-h-11 items-center gap-1.5 rounded-[10px] bg-brand px-5 font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:shadow-[0_14px_28px_-12px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
          >
            {pick(site.cta, lang)}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover/cta:translate-x-0.5"
            >
              →
            </span>
          </a>
          <MobileMenu
            lang={lang}
            items={navItems}
            ctaHref={anchor('#contact')}
            cta={pick(site.cta, lang)}
            openLabel={pick(site.ui.menuOpen, lang)}
            closeLabel={pick(site.ui.menuClose, lang)}
            navLabel={pick(site.ui.mainNav, lang)}
          />
        </div>
      </div>
    </header>
  );
}