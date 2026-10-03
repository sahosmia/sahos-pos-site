import type { ReactNode } from 'react';
import {
  Bell,
  CalendarClock,
  DatabaseBackup,
  Eye,
  Keyboard,
  Languages,
  Moon,
  Palette,
  Receipt,
  Scale,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/** content/site.ts-এর icon নাম → আইকন */
export const icons: Record<string, LucideIcon> = {
  receipt: Receipt,
  'calendar-clock': CalendarClock,
  'shield-check': ShieldCheck,
  scale: Scale,
  eye: Eye,
  'database-backup': DatabaseBackup,
  keyboard: Keyboard,
  zap: Zap,
  search: Search,
  languages: Languages,
  moon: Moon,
  smartphone: Smartphone,
  bell: Bell,
  palette: Palette,
};

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  dark = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  dark?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={`flex max-w-[760px] flex-col gap-3 ${center ? 'mx-auto items-center text-center' : ''}`}>
      {eyebrow && (
        <span className={`text-[15px] font-semibold ${dark ? 'text-warn-glow' : 'text-brand'}`}>{eyebrow}</span>
      )}
      <Tag className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.25]">{title}</Tag>
      {lead && <p className={`text-lg ${dark ? 'text-night-text' : 'text-body'}`}>{lead}</p>}
    </div>
  );
}
