'use client';

import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { site, type Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { Container, SectionHeading } from './ui';

export function Faq({
  lang,
  limit,
  isStandalone = false,
}: {
  lang: Lang;
  limit?: number;
  isStandalone?: boolean;
}) {
  const f = site.home.faqSection;
  const [open, setOpen] = useState<number | null>(0);

  const faqItems = limit ? site.faq.slice(0, limit) : site.faq;

  return (
    <section id="faq" className="relative px-4 pb-24 pt-[72px] sm:px-6">
      {/* soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-brand/5 blur-3xl"
      />
      <Container className="flex flex-wrap items-start gap-12">
        <div className="flex flex-[1_1_300px] flex-col gap-3.5">
          <SectionHeading
            eyebrow={pick(f.eyebrow, lang)}
            title={pick(f.title, lang)}
            lead={pick(f.lead, lang)}
          />
          <div className="flex flex-col gap-2 self-start">
            {limit && (
              <Link
                href={`/${lang}/faq`}
                className="group inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand transition-colors hover:text-brand-deep"
              >
                {pick(site.ui.viewAllFaqs, lang)}
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            )}
            <a
              href={isStandalone ? `/${lang}#contact` : '#contact'}
              className="group inline-flex min-h-11 items-center gap-1.5 font-medium text-body transition-colors hover:text-ink"
            >
              {pick(site.ui.contactUs, lang)}
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-2.5">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q.en}
                className={`overflow-hidden rounded-[14px] border bg-white transition-all duration-300 ease-out ${
                  isOpen
                    ? 'border-brand/40 shadow-[0_20px_45px_-25px_rgba(37,99,235,0.45)]'
                    : 'border-line hover:border-brand/30 hover:shadow-[0_10px_30px_-20px_rgba(15,20,36,0.25)]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-[22px] py-4 text-left text-lg font-semibold leading-normal transition-colors"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isOpen ? 'text-brand-deep' : 'text-ink'
                    }`}
                  >
                    {pick(item.q, lang)}
                  </span>
                  <span
                    className={`inline-flex size-[30px] shrink-0 items-center justify-center rounded-full transition-all duration-400 ease-out ${
                      isOpen
                        ? 'rotate-45 bg-brand text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.6)]'
                        : 'bg-brand-soft text-brand-deep group-hover:bg-brand/15'
                    }`}
                  >
                    <Plus size={18} strokeWidth={2.4} aria-hidden />
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-[22px] pb-5 text-[16.5px] text-body">
                      {pick(item.a, lang)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {limit && (
            <div className="mt-2 flex justify-start">
              <Link
                href={`/${lang}/faq`}
                className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-brand/30 bg-brand/5 px-5 py-2.5 font-semibold text-brand transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                {pick(site.ui.viewAllFaqs, lang)}
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}