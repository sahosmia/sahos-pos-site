'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { langs, type Lang } from '@/content/site';

type Props = {
  lang: Lang;
  items: { href: string; label: string }[];
  cta: string;
  ctaHref: string;
  openLabel: string;
  closeLabel: string;
  navLabel: string;
};

export function MobileMenu({ lang, items, cta, ctaHref, openLabel, closeLabel, navLabel }: Props) {
  const [open, setOpen] = useState(false);

  // Esc চাপলে বন্ধ
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex size-11 items-center justify-center rounded-[10px] border border-line bg-white text-ink"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={navLabel}
          className="absolute inset-x-0 top-full border-b border-line bg-ground px-4 pb-6 pt-2 shadow-lg"
        >
          <ul className="flex flex-col">
            {items.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line text-lg font-medium"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-brand font-semibold text-white"
            >
              {cta}
            </a>
            {langs
              .filter((l) => l !== lang)
              .map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  hrefLang={l}
                  className="inline-flex min-h-12 items-center rounded-xl border border-line-strong bg-white px-5 font-semibold"
                >
                  {l === 'bn' ? 'বাংলা' : 'English'}
                </Link>
              ))}
          </div>
        </nav>
      )}
    </div>
  );
}
