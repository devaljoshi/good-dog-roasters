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
    nameAccent: 'Bensa Kokose',                // shown in italic gold
    subtitle:   'Hand Roasted · Palm Beach County · Small Batch',
    bagCount:   25,                            // shown on countdown ("25 bags · opens...")

    // ── DATES ──────────────────────────────────────────────────────────────
    opens:  new Date('2026-05-15T10:00:00'),   // when Shopify product goes live
    closes: new Date('2026-05-15T23:59:59'),   // when drop closes (or sells out first)

    shopifyUrl: '#', // ← paste Shopify product URL here before opens time

    // Coffee Stats
    origin:     'Ethiopia',
    region:     'Bensa, Sidama',
    farm:       'Kokose Kebele Smallholders',
    altitude:   '1,900–2,200 masl',
    varietal:   'Ethiopian Heirloom',
    process:    'Natural (Dry Process)',
    roastLevel: 'Light-Medium',
    roastDate:  'May 15, 2026',
    bagSize:    '12 oz / 340g',
    price:      '$25',                  // ← set before launch

    // Tasting Notes (shown as tags)
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

  // ── ARCHIVE ───────────────────────────────────────────────────────────────
  // When a drop closes, copy current values here and start fresh above.
  archive: [
    // {
    //   number:      '01',
    //   name:        'Ethiopia Bensa Kokose',
    //   date:        'May 2026',
    //   tags:        ['Natural', 'Light-Medium'],
    //   tastingNotes:'Cherry Cordial · Dried Blueberry · Raspberry Truffle',
    //   dogName:     'Spencer',
    // },
  ],

};
