import type { L, Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui';

export function LegalPage({ lang, title, body }: { lang: Lang; title: L; body: L[] }) {
  return (
    <>
      <Header lang={lang} onHome={false} />
      <main className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
        {/* subtle ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-brand/6 blur-3xl"
        />
        <Container className="max-w-[760px]">
          <h1 className="animate-fade-up text-[clamp(32px,4vw,44px)] font-bold leading-[1.25]">
            {pick(title, lang)}
          </h1>
          <div className="mt-8 flex flex-col gap-5 text-lg text-body">
            {body.map((p, i) => (
              <p
                key={p.en}
                className="animate-fade-up"
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                {pick(p, lang)}
              </p>
            ))}
          </div>
        </Container>
      </main>
      <Footer lang={lang} onHome={false} />
    </>
  );
}