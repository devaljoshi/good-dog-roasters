/**
 * GOOD DOG ROASTERS — DROP CONFIG
 * Update this file for every new drop. The drops page reads from here automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW THE DROP SYSTEM WORKS:
 *
 * 1. Set opens/closes dates below and push — countdown starts automatically.
 * 2. Create the Shopify product as a Draft, copy the URL into shopifyUrl, push.
 * 3. Send newsletter so subscribers know first.
 * 4. At opens time: flip Shopify product to Active. First 25 buyers win.
 *    Shopify closes it automatically when inventory hits zero.
 * 5. At closes time (or when sold out): flip product back to Draft.
 * 6. Move current drop data into archive below, start fresh for next drop.
 */

const DROP_CONFIG = {

  // ── CURRENT DROP ──────────────────────────────────────────────────────────
  current: {
    number:     '01',
    name:       'Ethiopia',
    nameAccent: 'Yirgacheffe',               // shown in italic gold
    subtitle:   'Hand Roasted · Palm Beach County · Small Batch',
    bagCount:   25,                          // shown on countdown ("25 bags · opens...")

    // ── DATES ──────────────────────────────────────────────────────────────
    opens:  new Date('2026-04-22T10:00:00'), // when Shopify product goes live
    closes: new Date('2026-04-22T23:59:59'), // when drop closes (or sells out first)

    shopifyUrl: '#', // ← paste Shopify product URL here before opens time

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
      '{{YOUR DESCRIPTION of this coffee\'s flavor, body, finish.}}',
      '{{HOW YOU ROASTED IT — decisions you made, what you were going for.}}',
      '{{BREWING RECOMMENDATIONS — grind size, method, water temp, ratio.}}',
    ],

    // Featured Good Dog Story
    dogName:         '{{DOG_NAME}}',
    storyQuote:      '{{The customer\'s story — 2-3 sentences in their own voice.}}',
    storyAuthor:     '{{First Name Last Name}}',
    storyCity:       '{{City, FL}}',
    illustrationSrc: '', // e.g. 'assets/drop-01-illustration.jpg'
  },

  // ── ARCHIVE ───────────────────────────────────────────────────────────────
  // When a drop closes, copy current values here and start fresh above.
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
