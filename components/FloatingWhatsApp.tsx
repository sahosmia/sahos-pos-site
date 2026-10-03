import { MessageCircle } from 'lucide-react';
import { site, type Lang } from '@/content/site';
import { isSet, pick, whatsappLink } from '@/lib/i18n';

/** মোবাইলে নিচে স্থায়ী WhatsApp বাটন (ডেস্কটপে লুকানো) */
export function FloatingWhatsApp({ lang }: { lang: Lang }) {
  return (
    <a
      href={whatsappLink(lang)}
      target={isSet(site.contact.whatsapp) ? '_blank' : undefined}
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      aria-label={pick(site.ui.whatsappShort, lang)}
      className="group/wa fixed bottom-4 right-4 z-40 inline-flex min-h-[52px] items-center gap-2 overflow-hidden rounded-full bg-[#128c4a] px-4 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(15,20,36,0.6)] transition-all duration-300 hover:bg-[#0e7a40] hover:shadow-[0_20px_40px_-14px_rgba(18,140,74,0.7)] hover:scale-[1.04] active:scale-[0.97] md:hidden"
    >
      {/* pulse ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#128c4a] opacity-70 animate-pulse-ring"
      />
      <MessageCircle
        size={22}
        aria-hidden
        className="relative transition-transform duration-300 group-hover/wa:rotate-12"
      />
      <span className="relative">{pick(site.ui.whatsappShort, lang)}</span>
    </a>
  );
}