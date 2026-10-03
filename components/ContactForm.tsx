'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';

type Texts = {
  title: string; lead: string; name: string; phone: string;
  shop: string; shopHint: string; message: string;
  submit: string; sending: string; success: string; error: string;
};

type Props = {
  whatsapp: string | null;
  email: string | null;
  t: Texts;
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  'min-h-[50px] rounded-[10px] border border-line-strong bg-white px-3.5 text-base text-ink outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/25 hover:border-brand/60';

export function ContactForm({ whatsapp, email, t }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.botcheck) return;

    const text = [
      `${t.name}: ${data.name}`,
      `${t.phone}: ${data.phone}`,
      data.shop && `${t.shop}: ${data.shop}`,
      data.message && `${t.message}: ${data.message}`,
    ].filter(Boolean).join('\n');

    if (WEB3FORMS_KEY) {
      setStatus('sending');
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: 'Sahos POS — নতুন ডেমো রিকোয়েস্ট',
            from_name: 'Sahos POS website',
            ...data,
          }),
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        form.reset();
        setStatus('ok');
      } catch {
        setStatus('error');
      }
      return;
    }

    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      setStatus('ok');
      return;
    }

    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Sahos POS demo')}&body=${encodeURIComponent(text)}`;
      setStatus('ok');
      return;
    }

    setStatus('error');
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-[1_1_380px] flex-col gap-[18px] p-8 md:p-14 animate-fade-up [animation-delay:120ms]"
      noValidate={false}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold">{t.title}</h3>
        <p className="text-[15.5px] text-muted">{t.lead}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-name" className="text-[15px] font-semibold">
          {t.name} <span className="text-[#b42318]">*</span>
        </label>
        <input id="f-name" name="name" type="text" required autoComplete="name" className={field} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-phone" className="text-[15px] font-semibold">
          {t.phone} <span className="text-[#b42318]">*</span>
        </label>
        <input
          id="f-phone" name="phone" type="tel" required inputMode="tel"
          autoComplete="tel" placeholder="01XXXXXXXXX" className={field}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-shop" className="text-[15px] font-semibold">{t.shop}</label>
        <input id="f-shop" name="shop" type="text" placeholder={t.shopHint} className={field} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-msg" className="text-[15px] font-semibold">{t.message}</label>
        <textarea id="f-msg" name="message" rows={3} className={`${field} resize-y py-3`} />
      </div>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === 'sending'}
        data-event="form_submit"
        className="group/btn relative inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand text-lg font-bold text-white transition-all duration-300 hover:bg-brand-deep hover:shadow-[0_18px_36px_-12px_rgba(37,99,235,0.55)] hover:scale-[1.015] active:scale-[0.985] disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden />
            {t.sending}
          </>
        ) : (
          <>
            {t.submit}
            <Send
              size={18}
              aria-hidden
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-[15px]">
        {status === 'ok' && (
          <span className="inline-flex items-center gap-1.5 text-[#067647] animate-fade-up">
            <CheckCircle2 size={18} aria-hidden /> {t.success}
          </span>
        )}
        {status === 'error' && (
          <span className="inline-flex items-center gap-1.5 text-[#b42318] animate-fade-up">
            <AlertCircle size={18} aria-hidden /> {t.error}
          </span>
        )}
      </p>
    </form>
  );
}