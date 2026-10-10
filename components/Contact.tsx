import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site, type Lang } from '@/content/site';
import { emailLink, isSet, phoneLink, pick, whatsappLink } from '@/lib/i18n';
import { Container } from './ui';
import { ContactForm } from './ContactForm';

export function Contact({ lang }: { lang: Lang }) {
  const c = site.contact;
  const f = site.form;
  const fc = site.home.finalCta;
  const address = pick(c.address, lang);

  const contactItems = [
    {
      icon: Phone,
      href: phoneLink(),
      event: 'phone_click',
      value: isSet(c.phone) ? c.phone : pick(site.ui.phonePlaceholder, lang),
    },
    {
      icon: Mail,
      href: emailLink(),
      event: undefined,
      value: isSet(c.email) ? c.email : pick(site.ui.emailPlaceholder, lang),
    },
  //   {
  //     icon: MapPin,
  //     href: undefined,
  //     event: undefined,
  //     value: isSet(address) ? address : pick(site.ui.addressPlaceholder, lang),
  //   },
  //   {
  //     icon: Clock,
  //     href: undefined,
  //     event: undefined,
  //     value: pick(c.hours, lang),
  //   },
  ];

  return (
    <section id="contact" className="px-4 pb-24 sm:px-6">
      <Container className="flex flex-wrap overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(15,20,36,0.25)]">
        {/* Left — Brand panel */}
        <div className="group relative flex flex-[1_1_380px] flex-col gap-[22px] overflow-hidden bg-brand p-8 text-white md:p-14">
          {/* animated gradient + floating orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand via-brand-deep to-brand opacity-90 animate-gradient"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl animate-float-slow"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-12 size-64 rounded-full bg-white/10 blur-3xl animate-float-slower"
          />

          <div className="relative z-10 flex flex-col gap-[22px]">
            <h2 className="text-[clamp(30px,3.4vw,42px)] font-bold leading-[1.3] animate-fade-up">
              {pick(fc.title, lang)}
            </h2>
            <p className="text-lg text-brand-tint animate-fade-up [animation-delay:80ms]">
              {pick(fc.body, lang)}
            </p>

            <a
              href={whatsappLink(lang)}
              target={isSet(c.whatsapp) ? '_blank' : undefined}
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-[14px] bg-white text-lg font-bold text-brand-deep transition-all duration-300 hover:bg-brand-tint hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.4)] active:scale-[0.98] animate-pulse-ring"
            >
              <MessageCircle size={22} aria-hidden className="transition-transform duration-300 group-hover:rotate-6" />
              {pick(site.ui.whatsappCta, lang)}
            </a>

            <ul className="relative z-10 flex flex-col gap-3 border-t border-white/25 pt-[22px] text-[16.5px]">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-white/12 transition-all duration-300 group/item:bg-white/25 group/item:scale-110">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className="truncate">{item.value}</span>
                  </>
                );
                return (
                  <li
                    key={i}
                    className="animate-fade-up"
                    style={{ animationDelay: `${140 + i * 70}ms` }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        data-event={item.event}
                        className="group/item flex min-h-9 items-center gap-3 rounded-lg px-1 transition-colors hover:bg-white/10"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group/item flex min-h-9 items-center gap-3 rounded-lg px-1">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right — Form */}
        <ContactForm
          whatsapp={isSet(c.whatsapp) ? c.whatsapp.replace(/\D/g, '') : null}
          email={isSet(c.email) ? c.email : null}
          t={{
            title: pick(f.title, lang),
            lead: pick(f.lead, lang),
            name: pick(f.name, lang),
            phone: pick(f.phone, lang),
            shop: pick(f.shop, lang),
            shopHint: pick(f.shopHint, lang),
            message: pick(f.message, lang),
            submit: pick(f.submit, lang),
            sending: pick(f.sending, lang),
            success: pick(f.success, lang),
            error: pick(f.error, lang),
          }}
        />
      </Container>
    </section>
  );
}