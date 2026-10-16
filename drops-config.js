/**
 * GOOD DOG ROASTERS — ARTISAN ALLOCATION CONFIG
 * Single source of truth for the Artisan page (drops.html) and the homepage widget.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW ALLOCATIONS WORK:
 *
 * 1. Shopify has ONE product, "Artisan Allocation", with one variant per roast
 *    month (e.g. "November 2026 Roast"). Each variant's inventory = capacity.
 *    Paste each variant's URL (…/products/artisan-allocation?variant=123) into
 *    that batch's shopifyUrl below.
 * 2. Keep ~3 months open at a time. When a month ships, move it to `archive`
 *    and add the next month to the end of `batches`.
 * 3. Update `claimed` as orders come in (Shopify → Products → inventory sold).
 *    A batch with claimed >= capacity shows as fully allocated automatically.
 * 4. When you pick the green coffee for a month, set that batch's `coffee`
 *    and replace `profile` below with its tasting profile.
 * 5. Every quarter: pay the rescue partner, then add a row to `ledger`.
 */

const DROP_CONFIG = {

  // ── PRICING & GIVING ─────────────────────────────────────────────────────
  pricing: {
    price:            28,     // per 12 oz bag
    coffeeShare:      23,     // price minus donation — shown as the split
    donation:         5,      // per Artisan bag → charity
    everydayDonation: 1,      // per Everyday (Dripshipper) bag → charity
    bagSize:          '12 oz / 340g',
    shipping:         6,      // flat rate, Florida only (USPS Ground Advantage)
    freeShippingBags: 2,      // free shipping at this many bags or more
    perCustomerLimit: 2,      // max bags per person per month
  },

  // Current rescue partner. This file is public — don't fill in a partner's
  // details until they've approved in writing. While announced is false the
  // site says "a local Palm Beach County dog rescue" everywhere.
  // When rotating partners: give 60 days' notice, then swap these values.
  charity: {
    announced: false,
    name:  '',     // full legal name
    short: '',     // short name for tight spots
    url:   '',     // their website
    about: '',     // one sentence about them
  },

  // ── OPEN MONTHS ──────────────────────────────────────────────────────────
  // coffee: null shows "Roaster's choice — revealed ~2 weeks before roast"
  batches: [
    {
      number:     '02',
      month:      'November 2026',
      roastWeek:  'Week of Nov 16',          // ← confirm
      capacity:   20,
      claimed:    0,
      coffee:     null,
      shopifyUrl: 'https://good-dog-roasters.myshopify.com/products/artisan-allocation?variant=67713405550666',
    },
    {
      number:     '03',
      month:      'December 2026',
      roastWeek:  'Week of Dec 7',           // ← confirm (early, to beat holiday mail)
      capacity:   20,
      claimed:    0,
      coffee:     null,
      shopifyUrl: 'https://good-dog-roasters.myshopify.com/products/artisan-allocation?variant=67713405583434',
    },
    {
      number:     '04',
      month:      'January 2027',
      roastWeek:  'Week of Jan 11',          // ← confirm
      capacity:   20,
      claimed:    0,
      coffee:     null,
      shopifyUrl: 'https://good-dog-roasters.myshopify.com/products/artisan-allocation?variant=67713405616202',
    },
  ],

  // ── FEATURED PROFILE ─────────────────────────────────────────────────────
  // Shows the most recent roast until the next coffee is announced.
  profileLabel: 'Most Recent Roast',
  profile: {
    number:     '01',
    name:       'Ethiopia',
    nameAccent: 'Bensa Kokose',

    origin:     'Ethiopia',
    region:     'Bensa, Sidama',
    farm:       'Kokose Kebele Smallholders',
    altitude:   '1,900–2,200 masl',
    varietal:   'Ethiopian Heirloom',
    process:    'Natural (Dry Process)',
    roastLevel: 'Light-Medium',
    roastDate:  'May 15, 2026',

    tastingNotes: [
      'Cherry Cordial',
      'Dried Blueberry',
      'Raspberry Truffle',
    ],

    // Roaster's written notes (each string = one paragraph)
    roasterNotes: [
      'This coffee leads with fruit and delivers on the promise. The dry process gives it a syrupy body and big berry character — cherry cordial up front, dried blueberry in the middle, and a raspberry truffle sweetness that lingers on the finish. There\'s real chocolate depth underneath that grounds the fruit and keeps the cup from tipping into candy territory. Bright, complex, and unmistakably Ethiopian.',
      'Dry process beans run hotter and carry more chaff than washed lots, so I took this one deliberately. I extended the drying phase to let off-gases clear, then built steadily toward first crack and pulled just before second crack began. A light-medium landing keeps the fruit character alive without letting it tip into fermented or boozy territory — enough development to round out the body, not so much that the character gets cooked off.',
      'Pour-over is the move. V60 or Chemex, 1:15 ratio, 200°F water, medium-coarse grind — give it a 45-second bloom, natural process beans are gassy and need it. If you\'re in the first week off roast, rest it 3–5 days first for the CO₂ to clear. Cold brew works beautifully too: the dry process body becomes something rich and almost dessert-like when brewed long.',
    ],

    // Featured Good Dog Story
    dogName:         'Spencer',
    storyQuote:      'Spencer came to us after we lost our beloved Yorkies, Snickers and Nick. We walked into a house full of rescue dogs and before we could say a word, he launched himself onto my daughter like he\'d been waiting for her — that was it, we knew. He\'s never lost that joy. Since Mojo passed, he\'s filled that quiet 5am spot I didn\'t know I was missing. Hard to find a soul willing to sit with you in the dark and just be there. Spencer never misses.',
    storyAuthor:     'Deval Joshi, Founder — Good Dog Roasters',
    storyCity:       'Palm Beach, FL',
    illustrationSrc: 'assets/01_spencer_transparent background.png',
  },

  // ── GIVING LEDGER ────────────────────────────────────────────────────────
  // One row per quarter, added after the donation is paid.
  ledger: [
    // {
    //   period:       'Q4 2026',
    //   recipient:    'Partner legal name',
    //   artisanBags:  40,
    //   everydayBags: 25,
    //   donated:      225,                 // artisanBags×5 + everydayBags×1
    //   paidOn:       'Jan 8, 2027',
    //   receiptUrl:   'assets/receipts/2026-q4.pdf',
    // },
  ],

  // ── ARCHIVE ──────────────────────────────────────────────────────────────
  archive: [
    {
      number:       '01',
      name:         'Ethiopia Bensa Kokose',
      date:         'May 2026',
      tags:         ['Natural', 'Light-Medium'],
      tastingNotes: 'Cherry Cordial · Dried Blueberry · Raspberry Truffle',
      dogName:      'Spencer',
    },
  ],

};

// What the site actually displays for the partner (generic until announced).
DROP_CONFIG.partner = DROP_CONFIG.charity.announced
  ? DROP_CONFIG.charity
  : {
      name:  'a local Palm Beach County dog rescue',
      short: 'local dog rescue',
      url:   null,
      about: 'We\'re finalizing our first rescue partner — a 501(c)(3) dog rescue here in Palm Beach County. We\'ll name them here as soon as they\'ve signed off, and every $5 collected before then goes to them.',
    };

// Next batch with bags left (or null) — used by drops.html and the homepage widget.
DROP_CONFIG.nextOpen = DROP_CONFIG.batches.find(b => b.claimed < b.capacity) || null;
