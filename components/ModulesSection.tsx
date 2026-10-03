import { site, type Lang } from '@/content/site';
import { pick } from '@/lib/i18n';
import { Container, SectionHeading } from './ui';
import { ModuleExplorer, type ModuleView, type ShotMode } from './ModuleExplorer';

/** সার্ভারে লেখা বেছে নিয়ে ক্লায়েন্ট-কম্পোনেন্টে পাঠায় — পুরো কনটেন্ট ফাইল ব্রাউজারে যায় না */
export function ModulesSection({ lang }: { lang: Lang }) {
  const m = site.home.modulesSection;

  const shotMode: ShotMode = site.screenshotsReady
    ? 'image'
    : process.env.NODE_ENV === 'development'
      ? 'placeholder'
      : 'none';

  const modules: ModuleView[] = site.modules.map((mod) => ({
    id: mod.id,
    name: pick(mod.name, lang),
    blurb: pick(mod.blurb, lang),
    optional: 'optional' in mod && !!mod.optional,
    shot: 'shot' in mod ? mod.shot : undefined,
    items: mod.items.map((i) => pick(i, lang)),
  }));

  return (
    <section id="modules" className="bg-panel px-4 py-20 sm:px-6">
      <Container className="flex flex-col gap-9">
        <SectionHeading eyebrow={pick(m.eyebrow, lang)} title={pick(m.title, lang)} lead={pick(m.lead, lang)} />
        <ModuleExplorer
          modules={modules}
          initial="sales"
          shotMode={shotMode}
          labels={{
            tablist: pick(m.eyebrow, lang),
            optional: pick(site.ui.optional, lang),
            whenEnabled: pick(site.ui.whenEnabled, lang),
            shotPending: pick(site.ui.shotPending, lang),
          }}
        />
      </Container>
    </section>
  );
}
