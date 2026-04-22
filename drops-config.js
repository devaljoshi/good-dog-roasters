/**
 * GOOD DOG ROASTERS — DROP CONFIG
 * Update this file for every new drop. The drops page reads from here automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const DROP_CONFIG = {

  // ── CURRENT DROP ──────────────────────────────────────────────────────────
  current: {
    number:      '01',
    name:        'Ethiopia',
    nameAccent:  'Yirgacheffe',               // shown in italic gold
    subtitle:    'Hand Roasted · Palm Beach County · Small Batch',
    opens:       new Date('2026-04-22T00:00:00'),  // PREVIEW MODE — set back to real date when done
    closes:      new Date('2026-04-22T23:59:59'),  // PREVIEW MODE — set back to real date when done
    shopifyUrl:  '#',                              // ← paste Shopify product URL when ready

    // Coffee Stats
    origin:      'Ethiopia',
    region:      'Yirgacheffe',
    farm:        '{{FARM_OR_COOPERATIVE_NAME}}',
    altitude:    '{{ALTITUDE}} masl',
    varietal:    '{{VARIETAL}}',
    process:     '{{WASHED / NATURAL / HONEY}}',
    roastLevel:  '{{LIGHT / LIGHT-MEDIUM / MEDIUM}}',
    roastDate:   '{{MONTH DAY, YEAR}}',
    bagSize:     '12 oz / 340g',
    price:       '${{PRICE}}',

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
    dogName:        '{{DOG_NAME}}',
    storyQuote:     '{{The customer\'s story — 2-3 sentences in their own voice.}}',
    storyAuthor:    '{{First Name Last Name}}',
    storyCity:      '{{City, FL}}',
    illustrationSrc: '', // e.g. 'assets/drop-01-illustration.jpg' — leave empty until ready
  },

  // ── ARCHIVE ───────────────────────────────────────────────────────────────
  // Add a new object here each time a drop sells out.
  archive: [
    // Example — uncomment and fill in when Drop 01 sells out:
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
