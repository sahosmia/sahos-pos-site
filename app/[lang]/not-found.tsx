import Link from 'next/link';
import { site } from '@/content/site';
import { pick } from '@/lib/i18n';

// not-found params পায় না, তাই দুই ভাষাই দেখায়
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-6xl font-bold text-line-strong">404</span>
      <h1 className="text-3xl font-bold">{pick(site.ui.notFoundTitle, 'bn')}</h1>
      <p className="text-body">{pick(site.ui.notFoundBody, 'bn')}</p>
      <p className="text-sm text-muted">{pick(site.ui.notFoundBody, 'en')}</p>
      <Link
        href="/bn"
        className="mt-2 inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-semibold text-white hover:bg-brand-deep"
      >
        {pick(site.ui.backHome, 'bn')}
      </Link>
    </main>
  );
}
