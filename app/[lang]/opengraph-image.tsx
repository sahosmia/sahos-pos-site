import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// ফেসবুক/WhatsApp-এ লিংক শেয়ার করলে যে ছবি দেখায়।
// (OG ইমেজ-জেনারেটর বাংলা যুক্তাক্ষর ঠিকমতো আঁকতে পারে না, তাই লেখা ইংরেজিতে।)
export const alt = 'Sahos POS — POS & accounting software for shops';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public', 'logo-on-dark.png'), 'base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0f1424',
          color: '#ffffff',
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={410} height={80} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
            POS &amp; accounting software for shops
          </div>
          <div style={{ fontSize: 30, color: '#b7bfd3' }}>
            Sales · Stock · Dues · EMI · Warranty · Double-entry books
          </div>
        </div>
        <div style={{ display: 'flex', width: 160, height: 8, background: '#5b84ff', borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
