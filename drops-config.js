/**
 * GOOD DOG ROASTERS — DROP CONFIG
 * Update this file for every new drop. The drops page reads from here automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW THE DROP SYSTEM WORKS (read this before each drop):
 *
 * 1. REGISTRATION WINDOW  (registrationOpens → registrationCloses)
 *    Anyone can register their interest — free, no commitment.
 *    A Netlify form captures name + email + dog name + timestamp.
 *    Send newsletter announcing registration is open.
 *
 * 2. SELECTION  (registrationCloses → purchaseOpens)
 *    You pick winners from the Netlify form submissions.
 *    Mix of loyal buyers (check past Shopify orders) + random draw.
 *    Email winners the drops.html URL. Keep the Shopify product unlisted
 *    until purchaseOpens so only winners can find and buy it.
 *
 * 3. PURCHASE WINDOW  (purchaseOpens → purchaseCloses)
 *    Winners claim their bag via the Shopify link.
 *    Shopify handles checkout, payment, labels, and shipping notifications.
 *    Set the Shopify product to active/published right at purchaseOpens.
 *
 * 4. CLOSED  (after purchaseCloses)
 *    Drop is over. Move current → archive below. Start next drop config.
 */

const DROP_CONFIG = {

  // ── CURRENT DROP ──────────────────────────────────────────────────────────
  current: {
    number:     '01',
    name:       'Ethiopia',
    nameAccent: 'Yirgacheffe',               // shown in italic gold
    subtitle:   'Hand Roasted · Palm Beach County · Small Batch',
    bagCount:   25,                          // how many bags in this drop (shown on page)

    // ── DROP TIMELINE ──────────────────────────────────────────────────────
    // All 4 dates required. Keep them in chronological order.
    registrationOpens:  new Date('2026-04-22T00:00:00'), // PREVIEW — set real date
    registrationCloses: new Date('2026-04-22T06:00:00'), // PREVIEW — set real date
    purchaseOpens:      new Date('2026-04-22T07:00:00'), // PREVIEW — set real date
    purchaseCloses:     new Date('2026-04-22T23:59:59'), // PREVIEW — set real date

    shopifyUrl: '#', // ← paste Shopify product URL before purchaseOpens

    // Coffee Stats
    origin:     'Ethiopia',
    region:     'Yirgacheffe',
    farm:       '{{FARM_OR_COOPERATIVE_NAME}}',
    altitude:   '{{ALTITUDE}} masl',
    varietal:   '{{VARIETAL}}',
    process:    '{{WASHED / NATURAL / HONEY}}',
    roastLevel: '{{LIGHT / LIGHT-MEDIUM / MEDIUM}}',
    roastDate:  '{{MONTH DAY, YEAR}}',
    bagSize:    '12 oz / 340g',
    price:      '${{PRICE}}',

    // Tasting Notes (shown as tags)
    tastingNotes: [
      '{{TASTING NOTE 1}}',
      '{{TASTING NOTE 2}}',
      '{{TASTING NOTE 3}}',
    ],

    // Roaster's written notes (each string = one paragraph)
    roasterNotes: [
      '{{YOUR DESCRIPTION of this coffee\'s flavor, body, finish. Write it like you\'re telling a friend what to expect in the cup.}}',
      '{{HOW YOU ROASTED IT — decisions you made, what you were going for, what makes this batch yours.}}',
      '{{BREWING RECOMMENDATIONS — grind size, method, water temp, ratio, anything specific to this coffee.}}',
    ],

    // Featured Good Dog Story
    dogName:         '{{DOG_NAME}}',
    storyQuote:      '{{The customer\'s story — 2-3 sentences in their own voice.}}',
    storyAuthor:     '{{First Name Last Name}}',
    storyCity:       '{{City, FL}}',
    illustrationSrc: '', // e.g. 'assets/drop-01-illustration.jpg' — leave empty until ready
  },

  // ── ARCHIVE ───────────────────────────────────────────────────────────────
  // When a drop closes, copy current{} values here and start fresh above.
  archive: [
    // {
    //   number:      '01',
    //   name:        'Ethiopia Yirgacheffe',
    //   date:        'May 2026',
    //   tags:        ['Washed', 'Light-Medium'],
    //   tastingNotes:'Jasmine · Citrus · Brown Sugar',
    //   dogName:     'Biscuit',
    // },
  ],

};
