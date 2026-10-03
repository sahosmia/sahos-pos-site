'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { Check, ImageIcon } from 'lucide-react';

export type ModuleView = {
  id: string;
  name: string;
  blurb: string;
  optional: boolean;
  shot?: string;
  items: string[];
};

export type ShotMode = 'image' | 'placeholder' | 'none';

type Props = {
  modules: ModuleView[];
  initial: string;
  shotMode: ShotMode;
  labels: { tablist: string; optional: string; whenEnabled: string; shotPending: string };
};

export function ModuleExplorer({ modules, initial, shotMode, labels }: Props) {
  const [sel, setSel] = useState(initial);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // তীর-কি দিয়ে ট্যাব বদলানো (অ্যাক্সেসিবিলিটি)
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const i = modules.findIndex((m) => m.id === sel);
    const last = modules.length - 1;
    const next =
      e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i === last ? 0 : i + 1)
      : i === 0 ? last : i - 1;
    setSel(modules[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="flex flex-wrap items-start gap-6">
      <div
        role="tablist"
        aria-label={labels.tablist}
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex max-w-full flex-[1_1_260px] flex-row flex-wrap gap-1.5 md:flex-col md:flex-nowrap"
      >
        {modules.map((m, i) => {
          const on = m.id === sel;
          return (
            <button
              key={m.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={on}
              aria-controls={`panel-${m.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => {
                setSel(m.id);
                // ফোনে প্যানেল তালিকার নিচে থাকে — ক্লিকের পর সেখানে নিয়ে যাও
                if (window.matchMedia('(max-width: 767px)').matches) {
                  requestAnimationFrame(() =>
                    document.getElementById(`panel-${m.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                  );
                }
              }}
              className={`flex min-h-[46px] items-center justify-between gap-2.5 rounded-[10px] border px-4 text-left text-base font-semibold transition-colors ${
                on ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink hover:border-line-strong'
              }`}
            >
              <span>{m.name}</span>
              {m.optional && (
                <span
                  className={`rounded-full px-2 text-xs font-semibold ${
                    on ? 'bg-white/20 text-white' : 'bg-warn-soft text-[#7a4206]'
                  }`}
                >
                  {labels.optional}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* সব প্যানেল HTML-এ থাকে (SEO-র জন্য), শুধু বাছাই করাটা দেখায় */}
      {modules.map((m) => (
        <div
          key={m.id}
          role="tabpanel"
          id={`panel-${m.id}`}
          aria-labelledby={`tab-${m.id}`}
          hidden={m.id !== sel}
          className="min-w-0 flex-[999_1_560px] scroll-mt-24 rounded-[18px] border border-line bg-white p-6 md:p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-[30px] font-bold leading-[1.3]">{m.name}</h3>
              {m.optional && (
                <span className="rounded-full bg-warn-soft px-3 py-0.5 text-[13px] font-semibold text-[#7a4206]">
                  {labels.whenEnabled}
                </span>
              )}
            </div>
            <p className="text-lg text-body">{m.blurb}</p>
          </div>

          <ul className="mt-6 grid gap-x-6 gap-y-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
            {m.items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-[26px] shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                  <Check size={14} strokeWidth={3} aria-hidden />
                </span>
                <span className="text-[16.5px] leading-[1.65]">{it}</span>
              </li>
            ))}
          </ul>

          {m.shot && shotMode === 'image' && (
            <Image
              src={m.shot}
              alt={m.name}
              width={1440}
              height={900}
              className="mt-6 h-auto w-full rounded-xl border border-line"
            />
          )}
          {m.shot && shotMode === 'placeholder' && (
            <div className="mt-6 flex min-h-[220px] flex-col items-center justify-center gap-1.5 rounded-xl border-[1.5px] border-dashed border-line-strong bg-[#f8f9fc] p-6 text-center text-muted">
              <ImageIcon size={30} strokeWidth={1.6} aria-hidden />
              <span className="font-semibold">{labels.shotPending}</span>
              <code className="text-sm">public{m.shot}</code>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
