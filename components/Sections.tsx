import { X } from 'lucide-react';
import { site, type Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { Container, SectionHeading, icons } from './ui';

/** ৪টা সত্যি সংখ্যা */
export function Highlights({ lang }: { lang: Lang }) {
  return (
    <section className="px-4 pb-[72px] pt-6 sm:px-6">
      <Container>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
          {site.home.highlights.map((h) => (
            <div key={h.label.en} className="flex flex-col-reverse gap-1 bg-white px-5 py-5 sm:px-7 sm:py-6">
              <dt className="text-body">{pick(h.label, lang)}</dt>
              <dd className="text-[30px] font-bold leading-[1.2] text-brand sm:text-[38px]">{pick(h.value, lang)}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/** চেনা সমস্যাগুলো (গাঢ় সেকশন) */
export function Problems({ lang }: { lang: Lang }) {
  const p = site.home.problems;
  return (
    <section className="bg-night px-4 py-[88px] text-white sm:px-6">
      <Container className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <SectionHeading dark eyebrow={pick(p.eyebrow, lang)} title={pick(p.title, lang)} lead={pick(p.lead, lang)} />
        <ul className="flex flex-col gap-3">
          {p.items.map((it) => (
            <li
              key={it.en}
              className="flex items-center gap-4 rounded-xl border border-night-line bg-night-card px-5 py-4 text-lg"
            >
              <span className="inline-flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#3a2e14] text-warn-glow">
                <X size={16} strokeWidth={2.8} aria-hidden />
              </span>
              {pick(it, lang)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** ৬টা মূল সমাধান-কার্ড */
export function Solutions({ lang }: { lang: Lang }) {
  const s = site.home.solutions;
  return (
    <section id="features" className="px-4 pb-12 pt-24 sm:px-6">
      <Container className="flex flex-col gap-11">
        <SectionHeading eyebrow={pick(s.eyebrow, lang)} title={pick(s.title, lang)} lead={pick(s.lead, lang)} />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          {s.items.map((it) => {
            const Icon = icons[it.icon];
            return (
              <article key={it.icon} className="flex flex-col gap-3.5 rounded-2xl border border-line bg-white p-7">
                <span className="inline-flex size-[52px] items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon size={26} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="text-[22px] font-bold leading-[1.35]">{pick(it.title, lang)}</h3>
                <p className="text-[16.5px] text-body">{pick(it.body, lang)}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** প্রতিদিনের আরাম — শর্টকাট আছে জানানো হয়, কোন কি তা নয় */
export function Comfort({ lang }: { lang: Lang }) {
  const c = site.home.comfort;
  return (
    <section className="px-4 pb-10 pt-[88px] sm:px-6">
      <Container className="flex flex-col gap-9">
        <SectionHeading eyebrow={pick(c.eyebrow, lang)} title={pick(c.title, lang)} />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
          {c.items.map((it) => {
            const Icon = icons[it.icon];
            return (
              <article key={it.icon} className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-white p-[22px]">
                <Icon size={28} strokeWidth={1.8} className="text-brand" aria-hidden />
                <h3 className="text-[19px] font-bold leading-[1.4]">{pick(it.title, lang)}</h3>
                <p className="text-[15.5px] text-body">{pick(it.body, lang)}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** ৩ ধাপ */
export function HowItWorks({ lang }: { lang: Lang }) {
  const h = site.home.howItWorks;
  const num = (i: number) => (lang === 'bn' ? `০${'১২৩'[i]}` : `0${i + 1}`);
  return (
    <section id="how" className="px-4 py-[72px] sm:px-6">
      <Container className="flex flex-col gap-10">
        <SectionHeading center eyebrow={pick(h.eyebrow, lang)} title={pick(h.title, lang)} />
        <ol className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {h.steps.map((s, i) => (
            <li key={s.title.en} className="flex flex-col gap-3 rounded-b-2xl border-t-[3px] border-brand bg-white p-7">
              <span aria-hidden className="text-[44px] font-bold leading-none text-line-strong">
                {num(i)}
              </span>
              <h3 className="text-[22px] font-bold">{pick(s.title, lang)}</h3>
              <p className="text-[16.5px] text-body">{pick(s.body, lang)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
