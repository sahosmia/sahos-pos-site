# Sahos POS — প্রোমোশনাল ওয়েবসাইট

Next.js 16 (App Router) + TypeScript + Tailwind 4। এক পেজের সাইট, বাংলা (`/bn`) ও ইংরেজি (`/en`), পুরোটা স্ট্যাটিক — কোনো ডাটাবেস নেই।

## চালানো

```bash
npm install
cp .env.example .env.local   # মান বসান
npm run dev                  # http://localhost:3000 → /bn
```

প্রোডাকশন বিল্ড: `npm run build && npm start`

## প্রথমে যা পূরণ করবেন

সব লেখা **`content/site.ts`** ফাইলে। কম্পোনেন্টে কোনো লেখা হার্ডকোড নেই।

1. `contact` → `phone`, `whatsapp` (যেমন `8801XXXXXXXXX`), `email`, `address`, `social`।
   `{{…}}` থাকা পর্যন্ত সাইটে `[আপনার ফোন নম্বর]` ধরনের প্লেসহোল্ডার দেখায়, আর WhatsApp বাটন যোগাযোগ সেকশনে নিয়ে যায়।
2. `faq` → শেষ প্রশ্নে (দাম/সাপোর্ট) আপনার নীতি লিখুন। ইন্টারনেট ছাড়া চলার প্রশ্নটা হোস্টিং মডেল ঠিক করে যোগ করুন।
3. `legal.terms` → নিজের শর্তাবলি।
4. `.env.local` → `NEXT_PUBLIC_SITE_URL` (আসল ডোমেইন)।

## স্ক্রিনশট

1. ডেমো ডাটাবেসে `php artisan db:seed --class=DummyDataSeeder` চালিয়ে ১৪৪০px প্রস্থে স্ক্রিনশট নিন।
2. WebP-তে কনভার্ট করে `public/shots/`-এ রাখুন। নামগুলো `content/site.ts`-এর `modules[].shot`-এ দেওয়া আছে (`dashboard.webp`, `sale-form.webp`, `emi.webp` …)।
3. `content/site.ts`-এ `screenshotsReady: true` করুন।
4. Hero-তে আসল ড্যাশবোর্ড চাইলে `home.hero.image: '/shots/dashboard.webp'` দিন। তখন HTML-মকআপটা আর দেখাবে না।

`screenshotsReady: false` থাকা অবস্থায় `npm run dev`-এ মডিউল প্যানেলে ডটেড প্লেসহোল্ডার দেখায়, প্রোডাকশনে কিছুই দেখায় না।

## যোগাযোগ-ফর্ম কীভাবে কাজ করে (ডাটাবেস ছাড়া)

- `NEXT_PUBLIC_WEB3FORMS_KEY` থাকলে → ফর্ম web3forms.com হয়ে আপনার ইমেইলে যায়।
- না থাকলে → "পাঠান" চাপলে ফর্মের লেখাসহ WhatsApp খোলে।
- WhatsApp নম্বরও না থাকলে → ইমেইল অ্যাপ খোলে।

স্প্যাম ঠেকাতে honeypot ফিল্ড আছে।

## ফাইল-কাঠামো

```
app/
  [lang]/layout.tsx         <html lang>, ফন্ট, SEO মেটাডেটা, hreflang
  [lang]/page.tsx           হোম: সব সেকশন + JSON-LD (SoftwareApplication, Organization, FAQPage)
  [lang]/privacy, terms     লিগ্যাল পেজ
  [lang]/opengraph-image    শেয়ার করলে যে ছবি দেখায়
  sitemap.ts, robots.ts, icon.png, apple-icon.png
components/
  Header + MobileMenu       স্টিকি হেডার, ভাষা-বদল, মোবাইল মেনু
  Hero + DashboardMockup    হেডলাইন ও ড্যাশবোর্ড-মকআপ
  Sections.tsx              Highlights, Problems, Solutions, Comfort, HowItWorks
  ModulesSection + ModuleExplorer   মডিউল ট্যাব (সব প্যানেল HTML-এ থাকে — SEO-বান্ধব)
  Faq.tsx                   নেটিভ <details>, JS লাগে না
  Contact + ContactForm     WhatsApp/ফোন/ইমেইল + ফর্ম
  Footer, FloatingWhatsApp  মোবাইলে নিচে স্থায়ী WhatsApp বাটন
content/site.ts             সব লেখা (বাংলা + ইংরেজি)
lib/i18n.ts                 pick(), WhatsApp/ফোন/ইমেইল লিংক
app/globals.css             রং ও ফন্ট (@theme)
```

রং বদলাতে `app/globals.css`-এর `@theme` ব্লক দেখুন। `--color-brand` হলো বাটনের নীল, `--color-brand-mark` লোগোর নীল।

## ডিপ্লয় (Vercel)

1. GitHub-এ পুশ করুন।
2. Vercel → Import Project। ফ্রেমওয়ার্ক নিজে চিনে নেবে।
3. Environment Variables-এ `NEXT_PUBLIC_SITE_URL` (আর চাইলে `NEXT_PUBLIC_WEB3FORMS_KEY`) দিন।
4. Settings → Domains থেকে কাস্টম ডোমেইন যোগ করুন।

অ্যানালিটিক্স: `npm i @vercel/analytics` করে layout-এ `<Analytics />` বসান (কুকি-ব্যানার লাগে না)। WhatsApp, ফোন আর ফর্মের বাটনে `data-event` অ্যাট্রিবিউট দেওয়া আছে, ইভেন্ট মাপতে কাজে লাগবে।

## যা দাবি করা হয়নি (ইচ্ছা করে)

অনলাইন পেমেন্ট গেটওয়ে, মাল্টি-ব্রাঞ্চ, অফলাইন মোড, মোবাইল অ্যাপ, ভ্যাট/NBR, "AI" — অ্যাপে নেই, তাই সাইটেও নেই। বানানো সংখ্যা বা গ্রাহক-প্রশংসা যোগ করবেন না, সত্যিগুলো পেলে তবেই যোগ করুন।
