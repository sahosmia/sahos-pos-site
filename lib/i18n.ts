import { langs, site, type L, type Lang } from '@/content/site';

/** L থেকে বর্তমান ভাষার লেখা */
export const pick = (l: L, lang: Lang) => l[lang];

export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

export const otherLang = (lang: Lang): Lang => (lang === 'bn' ? 'en' : 'bn');

/** {{…}} প্লেসহোল্ডার এখনো পূরণ হয়নি কিনা */
export const isSet = (v: string | undefined | null): v is string => !!v && !v.includes('{{');

/** WhatsApp ক্লিক-টু-চ্যাট লিংক; নম্বর না বসানো থাকলে যোগাযোগ সেকশনে নিয়ে যায় */
export function whatsappLink(lang: Lang, text?: string) {
  const n = site.contact.whatsapp;
  if (!isSet(n)) return '#contact';
  const msg = text ?? pick(site.contact.whatsappPrefill, lang);
  return `https://wa.me/${n.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
}

export function phoneLink() {
  const p = site.contact.phone;
  return isSet(p) ? `tel:${p.replace(/[^\d+]/g, '')}` : '#contact';
}

export function emailLink() {
  const e = site.contact.email;
  return isSet(e) ? `mailto:${e}` : '#contact';
}
