// ─────────────────────────────────────────────────────────────
// Sahos POS — সাইটের সব লেখা এই এক ফাইলে।
// কম্পোনেন্টে কোনো লেখা হার্ডকোড নেই; এখানে বদলালেই সাইট বদলায়।
// ─────────────────────────────────────────────────────────────

export const langs = ['bn', 'en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'bn';

/** দুই ভাষার লেখা */
export type L = { bn: string; en: string };

export type Module = {
  id: string;
  name: L;
  blurb: L;
  /** true = মডিউল চালু করলে পাওয়া যায় (ডিফল্টে বন্ধ) */
  optional?: boolean;
  /** public/ থেকে স্ক্রিনশটের পাথ, যেমন '/shots/sale-form.webp' */
  shot?: string;
  items: L[];
};

export type Faq = { q: L; a: L };

export const site = {
  // ───────── ব্র্যান্ড ─────────
  brand: {
    name: 'Sahos POS',
    tagline: {
      bn: 'আপনার দোকানের পুরো হিসাব, এক জায়গায়',
      en: 'Your whole shop, accounted for — in one place',
    },
    description: {
      bn: 'বিক্রি, স্টক, বাকি, কিস্তি, ওয়ারেন্টি ও হিসাবরক্ষণ — বাংলায়, আপনার নিজস্ব সিস্টেমে।',
      en: 'Sales, stock, dues, EMI, warranty and full accounting — in Bangla, on your own system.',
    },
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sahospos.vercel.app', // ডোমেইন পেলে .env-এ বদলান
    logoLight: '/logo-on-light.png', // হালকা ব্যাকগ্রাউন্ডে (হেডার)
    logoDark: '/logo-on-dark.png', //   গাঢ় ব্যাকগ্রাউন্ডে (ফুটার)
  },

  // ───────── যোগাযোগ ─────────
  // {{…}} থাকা মান সাইটে প্লেসহোল্ডার হিসেবে দেখায়। আসল মান বসালেই সব জায়গায় নিজে বসে যাবে।
  contact: {
    phone: '{{PHONE}}', // যেমন +8801XXXXXXXXX
    whatsapp: '{{WHATSAPP}}', // কান্ট্রি-কোডসহ, + ছাড়া: 8801XXXXXXXXX
    email: '{{EMAIL}}',
    address: { bn: '{{ঠিকানা}}', en: '{{Address}}' },
    hours: { bn: 'শনি–বৃহস্পতি, সকাল ১০টা – সন্ধ্যা ৭টা', en: 'Sat–Thu, 10am – 7pm' },
    social: { facebook: '{{URL}}', youtube: '{{URL}}' },
    whatsappPrefill: {
      bn: 'আসসালামু আলাইকুম, Sahos POS-এর একটা ডেমো দেখতে চাই।',
      en: 'Hello, I would like a demo of Sahos POS.',
    },
  },

  // ───────── নেভিগেশন (এক পেজের সাইট, তাই সব #অ্যাঙ্কর) ─────────
  nav: [
    { href: '#features', label: { bn: 'ফিচার', en: 'Features' } },
    { href: '#modules', label: { bn: 'মডিউল', en: 'Modules' } },
    { href: '#how', label: { bn: 'কীভাবে শুরু', en: 'Getting started' } },
    { href: '#faq', label: { bn: 'প্রশ্নোত্তর', en: 'FAQ' } },
    { href: '#contact', label: { bn: 'যোগাযোগ', en: 'Contact' } },
  ],
  cta: { bn: 'ফ্রি ডেমো দেখুন', en: 'Get a free demo' },

  // ───────── UI-র ছোট লেখা ─────────
  ui: {
    menuOpen: { bn: 'মেনু খুলুন', en: 'Open menu' },
    menuClose: { bn: 'মেনু বন্ধ করুন', en: 'Close menu' },
    mainNav: { bn: 'প্রধান মেনু', en: 'Main menu' },
    language: { bn: 'ভাষা', en: 'Language' },
    optional: { bn: 'ঐচ্ছিক', en: 'Optional' },
    whenEnabled: { bn: 'মডিউল চালু করলে', en: 'When enabled' },
    shotPending: { bn: 'স্ক্রিনশট বসবে', en: 'Screenshot goes here' },
    contactUs: { bn: 'যোগাযোগ করুন', en: 'Contact us' },
    whatsappCta: { bn: 'WhatsApp-এ ডেমো চান', en: 'Ask for a demo on WhatsApp' },
    whatsappShort: { bn: 'WhatsApp', en: 'WhatsApp' },
    phonePlaceholder: { bn: '[আপনার ফোন নম্বর]', en: '[Your phone number]' },
    emailPlaceholder: { bn: '[আপনার ইমেইল]', en: '[Your email]' },
    addressPlaceholder: { bn: '[আপনার ঠিকানা]', en: '[Your address]' },
    footerPages: { bn: 'পেজ', en: 'Pages' },
    footerContact: { bn: 'যোগাযোগ', en: 'Contact' },
    footerOther: { bn: 'অন্যান্য', en: 'More' },
    privacy: { bn: 'প্রাইভেসি নীতি', en: 'Privacy policy' },
    terms: { bn: 'শর্তাবলি', en: 'Terms' },
    backHome: { bn: 'হোমে ফিরুন', en: 'Back to home' },
    notFoundTitle: { bn: 'পেজটা পাওয়া যায়নি', en: 'Page not found' },
    notFoundBody: { bn: 'আপনি যে পেজটা খুঁজছেন সেটা নেই বা সরানো হয়েছে।', en: 'The page you are looking for does not exist or has moved.' },
    copyright: { bn: '© ২০২৬ Sahos POS', en: '© 2026 Sahos POS' },
    viewAllFaqs: { bn: 'সব প্রশ্ন ও উত্তর দেখুন', en: 'See all FAQs' },
    allFaqs: { bn: 'সকল প্রশ্নোত্তর', en: 'All FAQs' },
  },

  // ───────── হোম ─────────
  home: {
    hero: {
      eyebrow: {
        bn: 'ফ্রিজ · এসি · টিভি · হার্ডওয়্যার — দোকান-মালিকদের জন্য',
        en: 'Fridges · ACs · TVs · Hardware — for shop owners',
      },
      titleLead: { bn: 'বাকি, কিস্তি আর হিসাবের', en: 'Done with dues, instalments' },
      titleAccent: { bn: 'ঝামেলা শেষ', en: 'and messy books' },
      subtitle: {
        bn: 'ফ্রিজ, এসি, ইলেকট্রনিক্স ও হার্ডওয়্যার দোকানের জন্য বানানো — বিক্রি থেকে ব্যালেন্স শিট পর্যন্ত সব এক সিস্টেমে।',
        en: 'Made for appliance, electronics and hardware shops — from the sale to the balance sheet, in one system.',
      },
      secondaryCta: { bn: 'সব মডিউল দেখুন', en: 'See all modules' },
      checks: [
        { bn: 'বাংলা ও ইংরেজি', en: 'Bangla & English' },
        { bn: 'মোবাইলেও চলে', en: 'Works on mobile' },
        { bn: 'প্রতিদিন অটো ব্যাকআপ', en: 'Daily automatic backups' },
      ],
      // আসল স্ক্রিনশট পেলে এখানে পাথ দিন (যেমন '/shots/dashboard.webp')।
      // null থাকলে HTML দিয়ে বানানো ড্যাশবোর্ড-মকআপ দেখায়।
      image: null as string | null,
      imageAlt: { bn: 'Sahos POS ড্যাশবোর্ড', en: 'Sahos POS dashboard' },
    },

    // সংখ্যা বানিয়ে লিখবেন না — যা সত্যি, শুধু তাই
    highlights: [
      { value: { bn: '৮+', en: '8+' }, label: { bn: 'রিপোর্ট — লাভ-ক্ষতি থেকে ব্যালেন্স শিট', en: 'reports — from P&L to balance sheet' } },
      { value: { bn: '২', en: '2' }, label: { bn: 'ভাষা: বাংলা ও ইংরেজি', en: 'languages: Bangla & English' } },
      { value: { bn: '১০০%', en: '100%' }, label: { bn: 'লেনদেনে "কে করেছে" লেখা', en: 'of transactions record who did it' } },
      { value: { bn: 'প্রতিদিন', en: 'Daily' }, label: { bn: 'অটো ব্যাকআপ', en: 'automatic backups' } },
    ],

    problems: {
      eyebrow: { bn: 'খাতা-কলমের দোকানে', en: 'Running on notebooks?' },
      title: { bn: 'চেনা সমস্যাগুলো?', en: 'Sound familiar?' },
      lead: {
        bn: 'প্রতিদিনের এই ছোট ঝামেলাগুলোই মাস শেষে বড় ক্ষতি হয়ে দাঁড়ায়।',
        en: 'These small daily headaches add up to real losses by month-end.',
      },
      items: [
        { bn: 'কার কাছে কত বাকি, খাতা খুঁজে বের করতে হয়', en: 'Finding who owes what means digging through notebooks' },
        { bn: 'কিস্তির তারিখ ভুলে যাওয়া, টাকা আটকে থাকা', en: 'Missed instalment dates, money stuck outside' },
        { bn: 'স্টকে কত আছে আর খাতায় কত — মেলে না', en: 'Stock on the shelf never matches the register' },
        { bn: 'কর্মী কী বদলাল, কেউ জানে না', en: 'No idea what staff changed, or when' },
        { bn: 'মাস শেষে লাভ-ক্ষতি বের করতে সপ্তাহ লাগে', en: 'Month-end profit takes a week to work out' },
      ],
    },

    solutions: {
      eyebrow: { bn: 'সমাধান', en: 'The solution' },
      title: { bn: 'এক সিস্টেমে, পুরো দোকান', en: 'Your whole shop, one system' },
      lead: {
        bn: 'বিক্রির কাউন্টার থেকে মাস শেষের হিসাব — প্রতিটা ধাপ একসাথে বাঁধা।',
        en: 'From the counter to the month-end books — every step connected.',
      },
      items: [
        { icon: 'receipt', title: { bn: 'দ্রুত বিক্রি', en: 'Fast selling' }, body: { bn: 'কীবোর্ড শর্টকাটে মিনিটে ইনভয়েস, একাধিক পেমেন্ট, WhatsApp-এ ইনভয়েস।', en: 'Invoice in a minute with keyboard shortcuts, split payments, send it on WhatsApp.' } },
        { icon: 'calendar-clock', title: { bn: 'কিস্তি ও বাকি', en: 'Instalments & dues' }, body: { bn: 'কিস্তির সময়সূচি, ওভারডিউ নিজে চিহ্নিত, ক্রেতার পুরো লেজার।', en: 'Instalment schedules, automatic overdue marking, a full ledger per customer.' } },
        { icon: 'shield-check', title: { bn: 'ওয়ারেন্টি ও সার্ভিস', en: 'Warranty & service' }, body: { bn: 'সিরিয়াল নম্বর, সার্ভিস-প্ল্যান, ওয়ারেন্টি ক্লেইম — সব বিক্রির সাথে বাঁধা।', en: 'Serial numbers, service plans and warranty claims — all tied to the sale.' } },
        { icon: 'scale', title: { bn: 'আসল হিসাবরক্ষণ', en: 'Real accounting' }, body: { bn: 'ডাবল-এন্ট্রি জার্নাল, ব্যালেন্স শিট, ট্রায়াল ব্যালেন্স, ক্যাশ ফ্লো।', en: 'Double-entry journals, balance sheet, trial balance and cash flow.' } },
        { icon: 'eye', title: { bn: 'পূর্ণ স্বচ্ছতা', en: 'Full transparency' }, body: { bn: 'কে কখন কী বদলাল — পুরনো মান → নতুন মান সহ Activity Log।', en: 'Who changed what and when — with old → new values in the Activity Log.' } },
        { icon: 'database-backup', title: { bn: 'নিরাপদ ডাটা', en: 'Safe data' }, body: { bn: 'প্রতিদিন অটো ব্যাকআপ, রোল-ভিত্তিক অনুমতি, কিছু মোছা যায় না — রিভার্স হয়।', en: 'Daily automatic backups, role-based permissions, nothing is deleted — it is reversed.' } },
      ],
    },

    modulesSection: {
      eyebrow: { bn: 'মডিউল', en: 'Modules' },
      title: { bn: 'প্রতিটা মডিউল, বিস্তারিত', en: 'Every module, in detail' },
      lead: { bn: 'একটা বেছে নিন — ভেতরে কী কী আছে দেখুন।', en: 'Pick one to see what is inside.' },
    },

    // শর্টকাটের কি-গুলো ইচ্ছা করে লেখা হয়নি — শুধু জানানো হচ্ছে যে আছে
    comfort: {
      eyebrow: { bn: 'প্রতিদিনের আরাম', en: 'Everyday comfort' },
      title: { bn: 'কর্মীরা নিজে থেকেই শিখে নেয়', en: 'Your staff pick it up on their own' },
      items: [
        { icon: 'keyboard', title: { bn: 'কীবোর্ড শর্টকাট', en: 'Keyboard shortcuts' }, body: { bn: 'মাউস ছাড়াই বিক্রি থেকে পেমেন্ট — ভিড়ের সময়ও কাউন্টার দ্রুত চলে।', en: 'From sale to payment without a mouse — the counter keeps moving at rush hour.' } },
        { icon: 'zap', title: { bn: 'কুইক অ্যাকশন', en: 'Quick actions' }, body: { bn: 'যেকোনো পেজ থেকে এক চাপে নতুন বিক্রি, ক্রয় বা কন্টাক্ট।', en: 'Start a new sale, purchase or contact from any page, instantly.' } },
        { icon: 'search', title: { bn: 'গ্লোবাল সার্চ', en: 'Global search' }, body: { bn: 'পণ্য, ক্রেতা, ইনভয়েস — সব এক জায়গা থেকে খুঁজুন।', en: 'Find products, customers and invoices from one place.' } },
        { icon: 'languages', title: { bn: 'বাংলা ও ইংরেজি', en: 'Bangla & English' }, body: { bn: 'যেকোনো সময় ভাষা বদলান, প্রত্যেক ব্যবহারকারী নিজের মতো।', en: 'Switch language any time, per user.' } },
        { icon: 'moon', title: { bn: 'ডার্ক মোড ও থিম রঙ', en: 'Dark mode & theme colours' }, body: { bn: 'শপের ডিফল্ট রঙ, সাথে প্রত্যেকের ব্যক্তিগত পছন্দ।', en: "The shop's default colour, plus each person's own choice." } },
        { icon: 'smartphone', title: { bn: 'মোবাইলেও চলে', en: 'Works on mobile' }, body: { bn: 'ফোনে তালিকা কার্ড আকারে, কম্পিউটারে টেবিলে।', en: 'Lists become cards on phones and tables on desktop.' } },
        { icon: 'bell', title: { bn: 'নোটিফিকেশন', en: 'Notifications' }, body: { bn: 'লো-স্টক, বাকি পরিশোধ আর লোনের তারিখ মনে করিয়ে দেয়।', en: 'Reminders for low stock, due payments and loan dates.' } },
        { icon: 'palette', title: { bn: 'আপনার ব্র্যান্ডিং', en: 'Your branding' }, body: { bn: 'শপের লোগো, ফেভিকন আর নিজের মতো সাজানো মেনু।', en: 'Your logo, favicon and a menu ordered your way.' } },
      ],
    },

    howItWorks: {
      eyebrow: { bn: '৩ ধাপে চালু', en: 'Live in 3 steps' },
      title: { bn: 'শুরু করা কত সহজ', en: 'Getting started is simple' },
      steps: [
        { title: { bn: 'ডেমো দেখুন', en: 'See a demo' }, body: { bn: 'আমরা আপনার ব্যবসার ধরন বুঝে সিস্টেম দেখাই।', en: 'We walk you through the system for your kind of business.' } },
        { title: { bn: 'সেটআপ ও ডাটা তোলা', en: 'Setup & data import' }, body: { bn: 'পণ্য, কন্টাক্ট ও আগের হিসাব ফাইল থেকে তুলে দিই।', en: 'We bring in your products, contacts and opening balances from files.' } },
        { title: { bn: 'আপনার দল শুরু করে', en: 'Your team goes live' }, body: { bn: 'রোল ঠিক করে কর্মীদের দিয়ে চালু — আমরা পাশে থাকি।', en: 'Set roles, start with your staff — we stay alongside you.' } },
      ],
    },

    faqSection: {
      eyebrow: { bn: 'প্রশ্নোত্তর', en: 'FAQ' },
      title: { bn: 'যা সবাই জানতে চান', en: 'What people ask' },
      lead: { bn: 'উত্তর পাননি? সরাসরি জিজ্ঞেস করুন — দ্রুত উত্তর দিই।', en: 'Not answered here? Ask us directly — we reply quickly.' },
    },

    finalCta: {
      title: { bn: 'আপনার দোকানের জন্য কেমন হবে, নিজের চোখে দেখুন', en: 'See how it fits your shop' },
      body: { bn: 'ফ্রি ডেমোতে আপনার ব্যবসার ঘটনা দিয়েই সিস্টেম দেখাব।', en: 'In a free demo we use your own scenarios.' },
    },
  },

  // ───────── মডিউল (বিস্তারিত) ─────────
  modules: [
    {
      id: 'dashboard',
      name: { bn: 'ড্যাশবোর্ড', en: 'Dashboard' },
      blurb: { bn: 'ব্যবসার আজকের অবস্থা এক পাতায়।', en: "Today's business on one page." },
      shot: '/shots/dashboard.webp',
      items: [
        { bn: 'আজ, গতকাল, মাস, বছর বা নিজের তারিখ-সীমায় বিক্রি, ক্রয়, খরচ ও বাকি', en: 'Sales, purchases, expenses and dues for today, yesterday, month, year or any range' },
        { bn: 'লো-স্টক পণ্য ও সাম্প্রতিক লেনদেন', en: 'Low-stock products and recent transactions' },
        { bn: 'বেস্ট-সেলার পণ্য', en: 'Best-selling products' },
        { bn: '৩০ দিন ও অর্থবছরের চার্ট', en: '30-day and financial-year charts' },
        { bn: 'রাজস্ব বনাম খরচ এক নজরে', en: 'Revenue versus expenses at a glance' },
      ],
    },
    {
      id: 'sales',
      name: { bn: 'বিক্রি', en: 'Sales' },
      blurb: { bn: 'কাউন্টারে দ্রুত, হিসাবে নির্ভুল।', en: 'Quick at the counter, exact in the books.' },
      shot: '/shots/sale-form.webp',
      items: [
        { bn: 'কীবোর্ড-ফ্রেন্ডলি দ্রুত বিক্রি স্ক্রিন', en: 'A fast, keyboard-friendly sale screen' },
        { bn: 'ড্রাফট ও কোটেশন (মেয়াদসহ), পরে কনফার্ম', en: 'Drafts and quotations (with validity), confirm later' },
        { bn: 'ক্যাশ, ব্যাংক, মোবাইল ব্যাংকিং — একাধিক অ্যাকাউন্টে ভাগ করে পেমেন্ট', en: 'Split one payment across cash, bank and mobile banking' },
        { bn: 'ক্রেতার আগের বাকি/অগ্রিম বিক্রির সময়েই দেখা', en: "See the customer's previous due/advance while selling" },
        { bn: 'আগে কেনা পণ্য এক ক্লিকে আবার যোগ', en: 'Re-add past purchases in one click' },
        { bn: 'ইনভয়েস PDF — সাধারণ ও থার্মাল প্রিন্টার, নিজের মতো সাজানো', en: 'Invoice PDF — standard and thermal, customisable' },
        { bn: 'এক বাটনে সেভ করে WhatsApp-এ ইনভয়েস মেসেজ', en: 'Save and open a ready WhatsApp invoice message in one click' },
        { bn: 'সেলস অর্ডার (অগ্রিম বুকিং) ও সেল রিটার্ন', en: 'Sales orders (advance booking) and sale returns' },
        { bn: 'প্রতিটা বিক্রিতে কর্মীর নাম', en: 'The staff name on every sale' },
      ],
    },
    {
      id: 'emi',
      optional: true,
      name: { bn: 'কিস্তি (EMI)', en: 'EMI' },
      blurb: { bn: 'কিস্তিতে বিক্রি আর আদায়, এক জায়গায়।', en: 'Sell on instalments and collect them from one place.' },
      shot: '/shots/emi.webp',
      items: [
        { bn: 'বিক্রির সময়েই কিস্তি-সংখ্যা ঠিক', en: 'Choose the number of instalments while selling' },
        { bn: 'কোন ক্রেতার কোন কিস্তি বাকি, কতটা পরিশোধ', en: 'Which instalment each customer owes, and how much is paid' },
        { bn: 'ওভারডিউ কিস্তি প্রতিদিন রাতে নিজে চিহ্নিত', en: 'Overdue instalments marked automatically every night' },
        { bn: 'কিস্তির টাকা কোন অ্যাকাউন্টে গেল, লেখা থাকে', en: 'Each collection is recorded against an account' },
      ],
    },
    {
      id: 'products',
      name: { bn: 'পণ্য ও স্টক', en: 'Products & stock' },
      blurb: { bn: 'স্টকের প্রতিটা বাড়া-কমার ইতিহাস।', en: 'A history for every stock movement.' },
      shot: '/shots/product-list.webp',
      items: [
        { bn: 'ক্যাটাগরি, ব্র্যান্ড, ইউনিট ও পণ্যের ছবি', en: 'Categories, brands, units and product photos' },
        { bn: 'SKU ও বারকোড ফিল্ড', en: 'SKU and barcode fields' },
        { bn: 'ওপেনিং স্টক ও ভুল-সংশোধন আলাদা', en: 'Opening stock and corrections kept separate' },
        { bn: 'লো-স্টক ও স্টক-আউট সতর্কতা', en: 'Low-stock and out-of-stock alerts' },
        { bn: 'গড় ক্রয়মূল্য ও মুনাফার হার', en: 'Average cost and profit margin' },
        { bn: 'সিরিয়াল নম্বর ট্র্যাকিং (চালু করলে)', en: 'Serial-number tracking (when enabled)' },
        { bn: 'ইনস্টলেশনের মতো নন-স্টক সেবা', en: 'Non-stock services such as installation' },
      ],
    },
    {
      id: 'contacts',
      name: { bn: 'কন্টাক্ট', en: 'Contacts' },
      blurb: { bn: 'ক্রেতা, সাপ্লায়ার, গ্রুপ ও লেজার।', en: 'Customers, suppliers, groups and ledgers.' },
      shot: '/shots/contact-ledger.webp',
      items: [
        { bn: 'একই ব্যক্তি ক্রেতা, সাপ্লায়ার বা দুটোই', en: 'One person can be a customer, a supplier, or both' },
        { bn: 'কাস্টমার গ্রুপ', en: 'Customer groups' },
        { bn: 'প্রতিটার নিজস্ব লেজার — ব্যাংক স্টেটমেন্টের মতো', en: 'A ledger per contact — like a bank statement' },
        { bn: 'তারিখ ধরে দেখা: কে কার কাছে কত পায়/দেয়', en: 'See who owes whom, by date range' },
      ],
    },
    {
      id: 'purchases',
      name: { bn: 'ক্রয়', en: 'Purchases' },
      blurb: { bn: 'সাপ্লায়ার থেকে কেনা ও রিটার্ন।', en: 'Buying from suppliers, and returns.' },
      items: [
        { bn: 'ড্রাফট, অর্ডার ও রিসিভড — তিন অবস্থা', en: 'Draft, ordered and received states' },
        { bn: 'ক্রয়ে ডিসকাউন্ট', en: 'Purchase discounts' },
        { bn: 'ক্রয় রিটার্ন', en: 'Purchase returns' },
        { bn: 'সাপ্লায়ারের কাছে কত দেনা, তার হিসাব', en: 'What you owe each supplier' },
      ],
    },
    {
      id: 'bills',
      name: { bn: 'বিল', en: 'Bills' },
      blurb: { bn: 'বাকি আদায়, পরিশোধ, ডিসকাউন্ট।', en: 'Collect dues, pay bills, waive.' },
      items: [
        { bn: 'ক্রেতার কাছ থেকে বাকি আদায়', en: 'Collect dues from customers' },
        { bn: 'সাপ্লায়ারকে বিল পরিশোধ', en: 'Pay supplier bills' },
        { bn: 'ডিসকাউন্ট (মওকুফ) আলাদা স্ক্রিনে', en: 'Waive dues on a separate screen' },
        { bn: 'প্রতিটা আদায়/পরিশোধ কন্টাক্টের লেজারে', en: "Every receipt and payment shows in the contact's ledger" },
      ],
    },
    {
      id: 'expenses',
      name: { bn: 'খরচ ও আয়', en: 'Expenses & income' },
      blurb: { bn: 'দোকানের খরচ ও ছোট আয়।', en: 'Shop expenses and small income.' },
      items: [
        { bn: 'ক্যাটাগরি অনুযায়ী খরচ', en: 'Expenses by category' },
        { bn: 'যে অ্যাকাউন্ট থেকে দেওয়া, সেখান থেকে সরাসরি কমে', en: 'Deducted directly from the account that paid' },
        { bn: 'অন্যান্য আয় — কার্টন/স্ক্র্যাপ বিক্রি, সুদ, কমিশন', en: 'Other income — carton/scrap sales, interest, commission' },
      ],
    },
    {
      id: 'accounts',
      name: { bn: 'পেমেন্ট অ্যাকাউন্ট', en: 'Payment accounts' },
      blurb: { bn: 'প্রতিটা টাকা কোন অ্যাকাউন্টে, জানা থাকে।', en: 'Always know which account holds every taka.' },
      items: [
        { bn: 'ক্যাশ, ব্যাংক, মোবাইল ব্যাংকিং — প্রতিটার নিজস্ব ব্যালেন্স', en: 'Cash, bank, mobile banking — each with its own balance' },
        { bn: 'নিজের দুই অ্যাকাউন্টের মধ্যে ফান্ড ট্রান্সফার', en: 'Fund transfers between your own accounts' },
        { bn: 'ফাইন্যান্সিয়াল পজিশন এক নজরে', en: 'Financial position at a glance' },
      ],
    },
    {
      id: 'accounting',
      name: { bn: 'হিসাবরক্ষণ', en: 'Accounting' },
      blurb: { bn: 'হিসাবরক্ষকের মতো নির্ভুল, মালিকের মতো সহজ।', en: 'Accurate like an accountant, simple like an owner needs.' },
      shot: '/shots/balance-sheet.webp',
      items: [
        { bn: 'ডাবল-এন্ট্রি: প্রতিটা লেনদেন নিজে জার্নালে', en: 'Double-entry: every transaction posts a journal by itself' },
        { bn: 'চার্ট অব অ্যাকাউন্টস ও জার্নাল এন্ট্রি', en: 'Chart of accounts and journal entries' },
        { bn: 'ভুল ঠিক হয় রিভার্স করে — কখনো মুছে নয়', en: 'Mistakes are reversed — never deleted' },
        { bn: 'অ্যাকাউন্টিং পিরিয়ড — মাস/বছর বন্ধ', en: 'Accounting periods — close a month or year' },
        { bn: 'জেনারেল লেজার, বছরের পর বছরের ডাটাতেও দ্রুত', en: 'General ledger, fast even with years of data' },
        { bn: 'প্রতিদিন রাতে স্বয়ংক্রিয় হিসাব-মেলানো', en: 'A nightly automatic consistency check' },
      ],
    },
    {
      id: 'assets',
      name: { bn: 'অ্যাসেট ও দেনা', en: 'Assets & liabilities' },
      blurb: { bn: 'দোকানের সম্পদ ও অন্যান্য দেনা।', en: "The shop's assets and other liabilities." },
      items: [
        { bn: 'ফার্নিচার, গাড়ি, ইকুইপমেন্টের মতো অ্যাসেট', en: 'Assets such as furniture, vehicles and equipment' },
        { bn: 'পুরনো অ্যাসেট ওপেনিং ভ্যালুতে, নতুন কেনা অ্যাকাউন্ট থেকে কাটা', en: 'Existing assets at opening value, new ones paid from an account' },
        { bn: 'অন্যান্য দেনা', en: 'Other liabilities' },
      ],
    },
    {
      id: 'investors',
      name: { bn: 'ইনভেস্টর ও লোন', en: 'Investors & loans' },
      blurb: { bn: 'মূলধন ও কোম্পানি লোন।', en: 'Capital and company loans.' },
      items: [
        { bn: 'ইনভেস্টর ও তাদের বিনিয়োগ', en: 'Investors and their investments' },
        { bn: 'কোম্পানি লোন — আগের চলমান বা নতুন', en: 'Company loans — existing or new' },
        { bn: 'লোন পরিশোধের হিসাব ও সময়মতো নোটিফিকেশন', en: 'Loan repayments with timely notifications' },
      ],
    },
    {
      id: 'staff',
      name: { bn: 'স্টাফ', en: 'Staff' },
      blurb: { bn: 'বেতন ও অগ্রিম।', en: 'Salary and advances.' },
      items: [
        { bn: 'কর্মীর বেতন ও অগ্রিম', en: 'Staff salary and advances' },
        { bn: 'প্রতিজনের নিজস্ব লেজার', en: 'A ledger for each staff member' },
      ],
    },
    {
      id: 'service',
      name: { bn: 'ওয়ারেন্টি ও সার্ভিস', en: 'Warranty & service' },
      blurb: { bn: 'বিক্রির পরের দায়িত্বও সাজানো।', en: 'After-sale care, organised.' },
      shot: '/shots/warranty.webp',
      items: [
        { bn: 'পণ্যে ওয়ারেন্টি মাস ও সার্ভিস-প্ল্যান (কত মাসে কতবার ফ্রি)', en: 'Warranty months and service plans per product' },
        { bn: 'ইনস্টলেশন ও সার্ভিস রিকোয়েস্ট — ফ্রি কোটা বা চার্জ', en: 'Installation and service requests — free quota or charged' },
        { bn: 'বিক্রিত আইটেম খুঁজে ওয়ারেন্টি ক্লেইম', en: 'Open a warranty claim from the sold item' },
        { bn: 'অবস্থা ট্র্যাকিং ও রেজোলিউশন নোট', en: 'Status tracking with resolution notes' },
      ],
    },
    {
      id: 'reports',
      name: { bn: 'রিপোর্ট', en: 'Reports' },
      blurb: { bn: 'লাভ-ক্ষতি, ব্যালেন্স শিট, ক্যাশ ফ্লো ও আরও।', en: 'P&L, balance sheet, cash flow and more.' },
      shot: '/shots/profit-loss.webp',
      items: [
        { bn: 'লাভ-ক্ষতি, ব্যালেন্স শিট, ক্যাশ ফ্লো, ট্রায়াল ব্যালেন্স', en: 'Profit & loss, balance sheet, cash flow, trial balance' },
        { bn: 'ফাইন্যান্সিয়াল পজিশন', en: 'Financial position' },
        { bn: 'স্টক, বাকি ও বেস্ট-সেলার রিপোর্ট', en: 'Stock, dues and best-seller reports' },
        { bn: 'প্রতিটা তালিকা CSV, Excel ও PDF-এ — কলাম বেছে', en: 'Export any list to CSV, Excel or PDF — pick the columns' },
        { bn: 'বড় ডাটাতেও নিরাপদ এক্সপোর্ট', en: 'Safe exports even with large data' },
      ],
    },
    {
      id: 'admin',
      name: { bn: 'অ্যাডমিন ও নিরাপত্তা', en: 'Admin & security' },
      blurb: { bn: 'আপনার ডাটা, আপনার নিয়ন্ত্রণে।', en: 'Your data, under your control.' },
      shot: '/shots/activity-log.webp',
      items: [
        { bn: 'Admin, Manager, Cashier, Staff — সাথে নিজের বানানো রোল', en: 'Admin, Manager, Cashier and Staff — plus your own roles' },
        { bn: 'মডিউল ধরে দেখা/তৈরি/এডিট/মোছার অনুমতি', en: 'Per-module view/create/edit/delete permissions' },
        { bn: 'Activity Log — কে, কখন, পুরনো → নতুন মান', en: 'Activity Log — who, when, old → new values' },
        { bn: 'প্রতিদিন অটো ব্যাকআপ, অ্যাপ থেকেই দেখা/নেওয়া', en: 'Daily automatic backups, viewable in the app' },
        { bn: 'আগের ডাটা ফাইল থেকে ইমপোর্ট', en: 'Import existing data from files' },
        { bn: 'শপের লোগো, মেনু-ক্রম ও কুইক অ্যাকশন সাজানো', en: 'Arrange your logo, menu order and quick actions' },
      ],
    },
  ] satisfies Module[],

  // স্ক্রিনশট public/shots/-এ রাখার পর true করুন।
  // false থাকলে: ডেভেলপমেন্টে ডটেড প্লেসহোল্ডার দেখায়, প্রোডাকশনে কিছুই দেখায় না।
  screenshotsReady: false,

  // ───────── FAQ ─────────
  faq: [
    {
      q: { bn: 'Sahos POS কী ধরনের দোকানের জন্য?', en: 'What kind of shops is Sahos POS for?' },
      a: { bn: 'মূলত হোম অ্যাপ্লায়েন্স (ফ্রিজ, এসি, টিভি), ইলেকট্রনিক্স ও হার্ডওয়্যার/স্যানিটারি দোকানের জন্য — যেখানে কিস্তি, বাকি, ওয়ারেন্টি ও সিরিয়াল নম্বর গুরুত্বপূর্ণ। অন্য ধরনের খুচরা দোকানেও চলে।', en: 'Mainly home-appliance, electronics and hardware/sanitary shops where instalments, dues, warranty and serial numbers matter. It also works for other retail.' },
    },
    {
      q: { bn: 'কিস্তিতে বিক্রি কীভাবে চলে?', en: 'How do instalment sales work?' },
      a: { bn: 'EMI মডিউল চালু থাকলে বিক্রির সময়েই কিস্তি-সংখ্যা বেছে নিন। সিস্টেম কিস্তির সময়সূচি বানায়, ওভারডিউ নিজে চিহ্নিত করে, আর আপনি কিস্তির টাকা নিয়ে কোন অ্যাকাউন্টে গেল তা লেখেন।', en: 'With the EMI module on, choose the number of instalments while selling. The system builds the schedule, marks overdue ones automatically, and you record each payment against an account.' },
    },
    {
      q: { bn: 'ওয়ারেন্টি ও সার্ভিস কীভাবে সামলায়?', en: 'How does it handle warranty and service?' },
      a: { bn: 'পণ্যে ওয়ারেন্টি মাস ও সার্ভিস-প্ল্যান ঠিক করা যায়। বিক্রিত আইটেম খুঁজে ওয়ারেন্টি ক্লেইম খোলা যায় এবং ইনস্টলেশন/সার্ভিস রিকোয়েস্টে ফ্রি কোটা বা চার্জ রাখা যায়।', en: 'Set warranty months and a service plan per product. Open a claim by finding the sold item, and log installation/service requests as free-quota or charged.' },
    },
    {
      q: { bn: 'আমার ডাটা কি নিরাপদ? ব্যাকআপ হয়?', en: 'Is my data safe? Are there backups?' },
      a: { bn: 'প্রতিদিন স্বয়ংক্রিয় ব্যাকআপ হয় এবং পুরনোগুলো নিয়ম মেনে পরিষ্কার হয়। কে কী করতে পারবে তা রোল দিয়ে ঠিক করা যায়, আর Activity Log-এ প্রতিটা পরিবর্তন লেখা থাকে।', en: 'Automatic daily backups run and old ones are tidied by policy. Roles control who can do what, and the Activity Log records every change.' },
    },
    {
      q: { bn: 'কর্মী ভুল করলে বা কিছু বদলালে ধরব কীভাবে?', en: 'How do I catch a staff mistake or change?' },
      a: { bn: 'প্রতিটা বিক্রি, ক্রয়, খরচ ও ট্রান্সফারে কর্মীর নাম থাকে। Activity Log-এ কে, কখন, কোন রেকর্ড কী মান থেকে কী মানে বদলাল তা দেখা যায়, ব্যবহারকারী/তারিখ দিয়ে ফিল্টার করেও।', en: 'Every sale, purchase, expense and transfer carries the staff name. The Activity Log shows who changed which record from what to what, filterable by user and date.' },
    },
    {
      q: { bn: 'ভুল এন্ট্রি হলে কী করব? মোছা যায়?', en: 'What if I make a wrong entry? Can I delete it?' },
      a: { bn: 'আর্থিক লেনদেন মোছা হয় না — ব্যাংকের মতো রিভার্স করা হয়, ফলে মূল রেকর্ড ও সংশোধন দুটোই ইতিহাসে থাকে। এতে হিসাব কখনো ভেঙে যায় না।', en: 'Financial transactions are not deleted — they are reversed, like a bank. Both the original and the correction stay in history, so your books never break.' },
    },
    {
      q: { bn: 'বাংলা ও ইংরেজি দুটোতেই চলে?', en: 'Does it work in both Bangla and English?' },
      a: { bn: 'হ্যাঁ। যেকোনো সময় ভাষা বদলানো যায়। ডার্ক মোড ও থিম রঙও আছে।', en: 'Yes. You can switch language any time. Dark mode and theme colours are included.' },
    },
    {
      q: { bn: 'মোবাইলে চলবে?', en: 'Does it work on mobile?' },
      a: { bn: 'হ্যাঁ, ব্রাউজারে মোবাইল, ট্যাব ও কম্পিউটারে চলে। মোবাইলে তালিকাগুলো কার্ড (গ্রিড) আকারে দেখা যায়।', en: 'Yes, in a browser on phone, tablet and computer. On mobile, lists appear as cards.' },
    },
    {
      q: { bn: 'ইনভয়েস প্রিন্ট ও থার্মাল প্রিন্টার?', en: 'Invoice printing and thermal printers?' },
      a: { bn: 'ইনভয়েস PDF হয় এবং থার্মাল প্রিন্টার লেআউট চালু করা যায়। কোন তথ্য ছাপা হবে (লোগো, ঠিকানা, শর্তাবলি, ফুটার ইত্যাদি) নিজে ঠিক করা যায়, সাথে লাইভ প্রিভিউ।', en: 'Invoices export as PDF and a thermal-printer layout can be enabled. Choose what prints (logo, address, terms, footer…) with a live preview.' },
    },
    {
      q: { bn: 'আমার আগের খাতার ডাটা তোলা যাবে?', en: 'Can I bring in my existing data?' },
      a: { bn: 'হ্যাঁ, ইমপোর্ট টুলে ফাইল থেকে ডাটা তোলা যায়। শুরুতে আমরা এ কাজে সাহায্য করি। আগের বাকি/ব্যালেন্স ওপেনিং ব্যালেন্স হিসেবে বসে।', en: 'Yes — the import tool brings data in from files, and we help with the first load. Past balances go in as opening balances.' },
    },
    {
      q: { bn: 'একাধিক কর্মী একসাথে কাজ করতে পারে?', en: 'Can several staff work at once?' },
      a: { bn: 'পারে। Admin, Manager, Cashier, Staff — এই ডিফল্ট রোল আছে, আর নিজের মতো রোল বানিয়ে মডিউল ধরে দেখা/তৈরি/এডিট/মোছার অনুমতি দেওয়া যায়।', en: 'Yes. Admin, Manager, Cashier and Staff roles come built-in, and you can create your own with per-module view/create/edit/delete permissions.' },
    },
    {
      q: { bn: 'কী কী রিপোর্ট পাব?', en: 'Which reports do I get?' },
      a: { bn: 'লাভ-ক্ষতি, ব্যালেন্স শিট, ক্যাশ ফ্লো, ট্রায়াল ব্যালেন্স, ফাইন্যান্সিয়াল পজিশন, স্টক, বাকি ও বেস্ট-সেলার পণ্য। প্রতিটা তালিকা CSV/Excel/PDF-এ নামানো যায়।', en: 'Profit & loss, balance sheet, cash flow, trial balance, financial position, stock, dues and best sellers. Lists export to CSV/Excel/PDF.' },
    },
    // ইন্টারনেট ছাড়া চলার প্রশ্নটা ইচ্ছা করে বাদ — হোস্টিং মডেল ঠিক করে নিজে উত্তর লিখে এখানে যোগ করুন।
    {
      q: { bn: 'দাম কত? সাপোর্ট কেমন?', en: 'What does it cost? What about support?' },
      // TODO: আপনার প্যাকেজ/কোটেশন ও সাপোর্ট নীতি লিখুন
      a: { bn: 'ডেমোর পর আপনার দোকানের প্রয়োজন অনুযায়ী কোটেশন দিই।', en: 'After the demo we quote for your shop’s needs.' },
    },
  ] satisfies Faq[],

  // ───────── যোগাযোগ ফর্ম ─────────
  // NEXT_PUBLIC_WEB3FORMS_KEY থাকলে ফর্ম ইমেইলে যায় (web3forms.com)।
  // না থাকলে "পাঠান" চাপলে লেখাসহ WhatsApp খোলে — কোনো ডাটাবেস লাগে না।
  form: {
    title: { bn: 'মেসেজ পাঠান', en: 'Send a message' },
    lead: { bn: 'আমরা শিগগিরই ফোন করে যোগাযোগ করব।', en: 'We will call you back shortly.' },
    name: { bn: 'আপনার নাম', en: 'Your name' },
    phone: { bn: 'ফোন নম্বর', en: 'Phone' },
    shop: { bn: 'দোকানের ধরন', en: 'Type of shop' },
    shopHint: { bn: 'যেমন: ফ্রিজ-এসি', en: 'e.g. fridges & ACs' },
    message: { bn: 'কী জানতে চান', en: 'What would you like to know' },
    submit: { bn: 'পাঠান', en: 'Send' },
    sending: { bn: 'পাঠানো হচ্ছে…', en: 'Sending…' },
    success: { bn: 'ধন্যবাদ! আমরা শিগগিরই যোগাযোগ করব।', en: 'Thank you! We will contact you soon.' },
    error: { bn: 'পাঠানো যায়নি। অনুগ্রহ করে WhatsApp বা ফোনে যোগাযোগ করুন।', en: 'Could not send. Please reach us on WhatsApp or by phone.' },
  },

  // ───────── লিগ্যাল পেজ ─────────
  legal: {
    privacy: {
      title: { bn: 'প্রাইভেসি নীতি', en: 'Privacy policy' },
      body: [
        { bn: 'এই ওয়েবসাইটে কোনো অ্যাকাউন্ট খুলতে হয় না এবং আমরা কোনো ডাটাবেসে আপনার তথ্য রাখি না।', en: 'This website has no accounts and we keep no database of your information.' },
        { bn: 'যোগাযোগ ফর্মে দেওয়া নাম, ফোন নম্বর ও বার্তা আমরা শুধু আপনার সাথে যোগাযোগের জন্য ব্যবহার করি, কারো সাথে শেয়ার করি না।', en: 'The name, phone number and message you send through the contact form are used only to contact you and are never shared.' },
        { bn: 'সাইট কেমন চলছে বোঝার জন্য আমরা কুকি-ছাড়া, পরিচয়-গোপন পরিসংখ্যান ব্যবহার করতে পারি।', en: 'We may use cookie-free, anonymous statistics to understand how the site is used.' },
        { bn: 'কোনো প্রশ্ন থাকলে যোগাযোগ সেকশনের যেকোনো মাধ্যমে আমাদের জানান।', en: 'For any questions, reach us through the contact section.' },
      ],
    },
    terms: {
      title: { bn: 'শর্তাবলি', en: 'Terms' },
      body: [
        // TODO: আপনার নিজের শর্তাবলি লিখুন
        { bn: 'এই সাইটের তথ্য Sahos POS সম্পর্কে সাধারণ ধারণা দেওয়ার জন্য। চূড়ান্ত ফিচার, দাম ও সেবার শর্ত লিখিত কোটেশনে উল্লেখ থাকবে।', en: 'The information on this site is a general introduction to Sahos POS. Final features, pricing and service terms are set out in a written quotation.' },
        { bn: '[এখানে আপনার শর্তাবলি যোগ করুন]', en: '[Add your terms here]' },
      ],
    },
  },

  // ───────── SEO ─────────
  seo: {
    titleTemplate: '%s | Sahos POS',
    defaultTitle: {
      bn: 'Sahos POS — দোকানের POS ও হিসাব সফটওয়্যার',
      en: 'Sahos POS — POS & accounting software for shops',
    },
    keywords: {
      bn: ['পিওএস সফটওয়্যার', 'দোকানের হিসাব সফটওয়্যার', 'কিস্তি ব্যবস্থাপনা', 'ইনভেন্টরি সফটওয়্যার বাংলাদেশ', 'অ্যাপ্লায়েন্স দোকানের সফটওয়্যার'],
      en: ['POS software Bangladesh', 'shop accounting software', 'EMI management', 'inventory software', 'appliance shop software'],
    },
  },
};
