import type { MetadataRoute } from 'next';
import { langs, site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.brand.url;
  const paths = ['', '/privacy', '/terms'];

  return paths.flatMap((p) =>
    langs.map((lang) => ({
      url: `${base}/${lang}${p}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.3,
      alternates: {
        languages: Object.fromEntries(langs.map((l) => [l, `${base}/${l}${p}`])),
      },
    })),
  );
}
