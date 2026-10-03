import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { site, type Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { Container } from './ui';
import { DashboardMockup } from './DashboardMockup';

export function Hero({ lang }: { lang: Lang }) {
  const h = site.home.hero;

  return (
    <section id="top" className="relative px-4 pb-16 pt-14 sm:px-6 md:pt-[72px]">
      {/* ambient gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-5xl rounded-full bg-brand/8 blur-3xl animate-float-slower"
      />

      <Container className="grid items-center gap-14 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        <div className="flex flex-col gap-6">
          <span className="animate-fade-up self-start rounded-full bg-brand-soft px-3.5 py-1.5 text-[15px] font-semibold text-brand-deep shadow-[0_10px_25px_-15px_rgba(37,99,235,0.5)]">
            {pick(h.eyebrow, lang)}
          </span>

          <h1 className="animate-fade-up text-[clamp(36px,5.2vw,60px)] font-bold leading-[1.22] tracking-[-0.01em] [animation-delay:80ms]">
            {pick(h.titleLead, lang)}{' '}
            <span className="relative inline-block text-brand">
              {pick(h.titleAccent, lang)}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand via-brand-deep to-brand animate-[underline-grow_1.2s_cubic-bezier(0.22,1,0.36,1)_0.6s_forwards]"
              />
            </span>
          </h1>

          <p className="animate-fade-up max-w-[34em] text-[19px] leading-[1.8] text-body [animation-delay:160ms]">
            {pick(h.subtitle, lang)}
          </p>

          <div className="animate-fade-up flex flex-wrap gap-3 [animation-delay:240ms]">
            <a
              href="#contact"
              className="group/cta inline-flex min-h-[54px] items-center gap-2.5 rounded-xl bg-brand px-7 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:shadow-[0_20px_40px_-16px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {pick(site.cta, lang)}
              <ArrowRight
                size={20}
                aria-hidden
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </a>
            <a
              href="#modules"
              className="inline-flex min-h-[54px] items-center rounded-xl border border-line-strong bg-white px-6 text-lg font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-[#fbfcfe] hover:-translate-y-0.5"
            >
              {pick(h.secondaryCta, lang)}
            </a>
          </div>

          <ul className="animate-fade-up flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-body [animation-delay:320ms]">
            {h.checks.map((c, i) => (
              <li
                key={c.en}
                className="group/check inline-flex items-center gap-1.5 transition-transform duration-300 hover:translate-x-0.5"
                style={{ animationDelay: `${320 + i * 60}ms` }}
              >
                <Check
                  size={18}
                  strokeWidth={2.6}
                  className="text-brand transition-transform duration-300 group-hover/check:scale-110"
                  aria-hidden
                />
                {pick(c, lang)}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          {h.image ? (
            <Image
              src={h.image}
              alt={pick(h.imageAlt, lang)}
              width={1440}
              height={900}
              priority
              className="h-auto w-full rounded-2xl border border-line shadow-[0_40px_70px_-30px_rgba(15,20,36,0.35)] transition-transform duration-500 hover:-translate-y-1"
            />
          ) : (
            <DashboardMockup lang={lang} />
          )}
        </div>
      </Container>

      {/* keyframes for the underline */}
      <style>{`
        @keyframes underline-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-fade-up"],
          [class*="animate-float"],
          [class*="animate-bar-grow"],
          [class*="animate-ping-dot"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}