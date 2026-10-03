import { CalendarClock } from 'lucide-react';
import type { L, Lang } from '@/content/site';
import { pick } from '@/lib/i18n';

// Hero-র জন্য HTML দিয়ে বানানো ড্যাশবোর্ড — শুধু দেখানোর জন্য ডেমো সংখ্যা।
// আসল স্ক্রিনশট পেলে content/site.ts-এ home.hero.image দিন, এটা আর দেখাবে না।
const t = {
  menu: [
    { bn: 'ড্যাশবোর্ড', en: 'Dashboard' },
    { bn: 'বিক্রি', en: 'Sales' },
    { bn: 'কিস্তি', en: 'EMI' },
    { bn: 'পণ্য', en: 'Products' },
    { bn: 'কন্টাক্ট', en: 'Contacts' },
    { bn: 'হিসাবরক্ষণ', en: 'Accounting' },
    { bn: 'রিপোর্ট', en: 'Reports' },
    { bn: 'সার্ভিস', en: 'Service' },
  ],
  title: { bn: 'ড্যাশবোর্ড', en: 'Dashboard' },
  ranges: [
    { bn: 'আজ', en: 'Today' },
    { bn: 'এই মাস', en: 'This month' },
    { bn: 'বছর', en: 'Year' },
  ],
  stats: [
    { label: { bn: 'বিক্রি', en: 'Sales' }, value: { bn: '৳১৮,৪৫,৫০০', en: '৳1,845,500' } },
    { label: { bn: 'ক্রয়', en: 'Purchases' }, value: { bn: '৳১১,২০,০০০', en: '৳1,120,000' } },
    { label: { bn: 'খরচ', en: 'Expenses' }, value: { bn: '৳৮৬,৩০০', en: '৳86,300' } },
  ],
  due: { label: { bn: 'মোট বাকি', en: 'Total due' }, value: { bn: '৳৬,২৮,৭৫০', en: '৳628,750' } },
  chart: { bn: '৩০ দিনের বিক্রি', en: 'Sales, last 30 days' },
  lowStock: { bn: 'লো-স্টক', en: 'Low stock' },
  stock: [
    { name: { bn: 'ফ্রিজ ২৫২ লি. ডাবল ডোর', en: 'Fridge 252L double door' }, qty: { bn: '২টা', en: '2 left' }, out: false },
    { name: { bn: 'স্প্লিট এসি ১.৫ টন', en: 'Split AC 1.5 ton' }, qty: { bn: '১টা', en: '1 left' }, out: false },
    { name: { bn: 'এলইডি টিভি ৪৩ ইঞ্চি', en: 'LED TV 43 inch' }, qty: { bn: 'স্টক নেই', en: 'Out' }, out: true },
  ],
  overdue: { bn: 'কিস্তি ওভারডিউ', en: 'Instalment overdue' },
  overdueWho: { bn: '[ক্রেতার নাম] · ৩য় কিস্তি', en: '[Customer] · 3rd instalment' },
  log: { bn: 'দাম: ৳৫২,০০০ → ৳৪৯,৫০০', en: 'Price: ৳52,000 → ৳49,500' },
  live: { bn: 'লাইভ', en: 'Live' },
  label: { bn: 'Sahos POS ড্যাশবোর্ডের নমুনা', en: 'Sample of the Sahos POS dashboard' },
} satisfies Record<string, unknown>;

const bars = [38, 52, 44, 66, 58, 72, 48, 80, 62, 76, 88, 100];

export function DashboardMockup({ lang }: { lang: Lang }) {
  const p = (l: L) => pick(l, lang);

  return (
    <div
      className="group relative transition-transform duration-500 ease-out will-change-transform hover:-translate-y-1"
      role="img"
      aria-label={p(t.label)}
    >
      {/* ambient glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-brand/25 via-brand/10 to-transparent opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div
        aria-hidden
        className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_70px_-30px_rgba(15,20,36,0.35)]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[#e8ebf3] bg-[#fafbfd] px-3.5 py-2.5">
          <span className="size-2.5 rounded-full bg-[#e1e5ee] transition-colors duration-300 group-hover:bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#e1e5ee] transition-colors duration-300 group-hover:bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#e1e5ee] transition-colors duration-300 group-hover:bg-[#28c840]" />
          <span className="ml-2.5 rounded-md bg-[#f0f2f8] px-3 py-0.5 text-xs text-[#5b6377]">
            /dashboard
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#e9f7ef] px-2.5 py-0.5 text-[11px] font-semibold text-[#067647]">
            <span className="relative inline-flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-[#067647] animate-ping-dot" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#067647]" />
            </span>
            {p(t.live)}
          </span>
        </div>

        <div className="flex min-h-[380px]">
          {/* Sidebar */}
          <div className="hidden w-[132px] shrink-0 flex-col gap-1 border-r border-[#e8ebf3] px-2.5 py-3.5 text-[13px] text-muted sm:flex">
            {t.menu.map((m, i) => (
              <span
                key={m.en}
                className={`relative rounded-md px-2.5 py-1 transition-all duration-300 ${
                  i === 0
                    ? 'bg-brand-soft font-semibold text-brand-deep shadow-[inset_2px_0_0_0_var(--brand)]'
                    : 'hover:bg-[#f4f6fb] hover:text-ink'
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {p(m)}
              </span>
            ))}
          </div>

          {/* Main panel */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 bg-[#fbfcfe] p-4">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-base font-bold">{p(t.title)}</span>
              <span className="inline-flex gap-1 text-xs">
                {t.ranges.map((r, i) => (
                  <span
                    key={r.en}
                    className={`rounded-md px-2 py-0.5 transition-all duration-300 ${
                      i === 1
                        ? 'bg-ink text-white shadow-[0_6px_14px_-6px_rgba(15,20,36,0.6)]'
                        : 'text-[#5b6377] hover:bg-[#eef1f8]'
                    }`}
                  >
                    {p(r)}
                  </span>
                ))}
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2 leading-[1.4]">
              {t.stats.map((s, i) => (
                <div
                  key={s.label.en}
                  className="animate-fade-up rounded-[10px] border border-[#e8ebf3] bg-white px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_14px_28px_-18px_rgba(15,20,36,0.35)]"
                  style={{ animationDelay: `${100 + i * 80}ms` }}
                >
                  <div className="text-xs text-[#5b6377]">{p(s.label)}</div>
                  <div className="text-[19px] font-bold">{p(s.value)}</div>
                </div>
              ))}
              <div
                className="animate-fade-up relative overflow-hidden rounded-[10px] border border-[#f3ddb8] bg-[#fff6e8] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-18px_rgba(180,120,20,0.45)]"
                style={{ animationDelay: `${100 + t.stats.length * 80}ms` }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 size-16 rounded-full bg-[#f3ddb8]/50 blur-xl animate-float-slow"
                />
                <div className="relative text-xs text-warn">{p(t.due.label)}</div>
                <div className="relative text-[19px] font-bold text-[#6b3a06]">
                  {p(t.due.value)}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="rounded-[10px] border border-[#e8ebf3] bg-white px-3 py-2.5 transition-all duration-300 hover:shadow-[0_14px_28px_-20px_rgba(15,20,36,0.3)]">
              <div className="mb-2 flex items-center justify-between text-xs text-[#5b6377]">
                <span>{p(t.chart)}</span>
                <span className="font-semibold text-[#067647]">+18.4%</span>
              </div>
              <div className="flex h-[84px] items-end gap-[5px]">
                {bars.map((b, i) => (
                  <span
                    key={i}
                    className="animate-bar-grow flex-1 origin-bottom rounded-t-[3px] bg-brand-mark transition-opacity duration-300"
                    style={{
                      height: `${b}%`,
                      opacity: i === bars.length - 1 ? 1 : 0.35,
                      animationDelay: `${i * 55}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Low stock */}
            <div className="flex flex-col gap-1.5 rounded-[10px] border border-[#e8ebf3] bg-white px-3 py-2.5 text-[13px] leading-[1.4]">
              <div className="text-xs text-[#5b6377]">{p(t.lowStock)}</div>
              {t.stock.map((s, i) => (
                <div
                  key={s.name.en}
                  className="animate-fade-up flex justify-between gap-2 rounded-md px-1 py-0.5 transition-colors duration-300 hover:bg-[#f7f9fd]"
                  style={{ animationDelay: `${300 + i * 80}ms` }}
                >
                  <span>{p(s.name)}</span>
                  <span
                    className={`rounded-full px-2 font-semibold transition-transform duration-300 hover:scale-105 ${
                      s.out ? 'bg-[#fde8e5] text-[#a1271b]' : 'bg-warn-soft text-warn'
                    }`}
                  >
                    {p(s.qty)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating overdue badge */}
      <div
        aria-hidden
        className="animate-float-slow absolute -bottom-7 -left-7 hidden items-center gap-3 rounded-[14px] border border-line bg-white px-4 py-3 leading-[1.4] shadow-[0_20px_40px_-18px_rgba(15,20,36,0.35)] md:flex"
      >
        <span className="relative inline-flex size-10 items-center justify-center rounded-[10px] bg-warn-soft text-warn">
          <CalendarClock size={22} />
          <span className="absolute -right-0.5 -top-0.5 inline-flex size-2.5">
            <span className="absolute inset-0 rounded-full bg-warn animate-ping-dot" />
            <span className="relative inline-flex size-2.5 rounded-full bg-warn" />
          </span>
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-semibold text-warn">{p(t.overdue)}</span>
          <span className="text-[15px] font-semibold">{p(t.overdueWho)}</span>
        </span>
      </div>

      {/* Floating activity log */}
      <div
        aria-hidden
        className="animate-float-slower absolute -right-5 top-[60px] hidden flex-col rounded-xl bg-night px-3.5 py-2.5 text-[13px] leading-normal text-white shadow-[0_20px_40px_-18px_rgba(15,20,36,0.5)] md:flex"
      >
        <span className="mb-0.5 inline-flex items-center gap-1.5 font-semibold text-[#a9beff]">
          <span className="size-1.5 rounded-full bg-[#a9beff] animate-pulse" />
          Activity Log
        </span>
        <span>{p(t.log)}</span>
      </div>
    </div>
  );
}