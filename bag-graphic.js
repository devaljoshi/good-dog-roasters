/**
 * GOOD DOG ROASTERS — ARTISAN BAG GRAPHIC
 * Returns an SVG string of a kraft coffee bag whose label shows the roast
 * number and month, so the hero art updates itself every month.
 *   bagGraphic({ number: '02', month: 'November 2026' })
 *   bagGraphic({ title: 'Monthly Roast', subtitle: 'Reserve your month' })   // generic
 */
function bagGraphic(o){
  const opt = Object.assign({
    number: '02',
    month:  'November 2026',
    logo:   'assets/good_dog_roasters_oval_standard.png',
    stamp:  '$5',
  }, o || {});
  const title    = opt.title    || ('Roast #' + opt.number);
  const subtitle = opt.subtitle || opt.month;
  // shrink long titles so they always fit the ~140-unit label
  const titleSize = Math.min(25, 140 / (title.length * 0.62)).toFixed(1);
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

  // crimped top seal — vertical ridges
  let crimp = '';
  for(let x = 101; x < 300; x += 6) crimp += `<line x1="${x}" y1="50" x2="${x}" y2="80"/>`;

  // scattered beans: [x, y, rotation, scale]
  const beans = [[62,392,-25,1],[92,428,40,.85],[322,410,15,1.05],[352,372,-50,.8],[300,440,70,.9],[48,330,10,.75]]
    .map(([x,y,r,s]) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
      <ellipse rx="11" ry="15" fill="#5a3a24"/>
      <path d="M0 -12 C-4 -4, 4 4, 0 12" stroke="#2c1810" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    </g>`).join('');

  return `<svg viewBox="-35 0 470 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Good Dog Roasters Artisan bag — ${esc(title)}, ${esc(subtitle)}">
  <defs>
    <linearGradient id="gdr-kraft" x1="0" x2="1">
      <stop offset="0" stop-color="#b38a5f"/>
      <stop offset=".18" stop-color="#cfab80"/>
      <stop offset=".55" stop-color="#d8b88f"/>
      <stop offset=".85" stop-color="#c49d71"/>
      <stop offset="1" stop-color="#a87f55"/>
    </linearGradient>
    <linearGradient id="gdr-seal" x1="0" x2="1">
      <stop offset="0" stop-color="#a27a51"/>
      <stop offset=".5" stop-color="#c29a6e"/>
      <stop offset="1" stop-color="#9c744c"/>
    </linearGradient>
  </defs>

  <circle cx="200" cy="245" r="178" fill="#e8efec"/>
  <circle cx="200" cy="245" r="178" fill="none" stroke="#799b8e" stroke-opacity=".25" stroke-dasharray="2 7"/>
  <ellipse cx="200" cy="440" rx="128" ry="11" fill="#2c1810" opacity=".13"/>

  <!-- bag body -->
  <path d="M97 78 L303 78 L316 420 Q316 432 304 432 L96 432 Q84 432 84 420 Z" fill="url(#gdr-kraft)"/>
  <path d="M112 84 L104 428" stroke="#fff" stroke-opacity=".18" stroke-width="2"/>
  <path d="M288 84 L296 428" stroke="#2c1810" stroke-opacity=".10" stroke-width="2"/>
  <path d="M84 412 Q200 404 316 412" stroke="#2c1810" stroke-opacity=".08" stroke-width="3" fill="none"/>

  <!-- crimped top -->
  <rect x="97" y="48" width="206" height="34" rx="3" fill="url(#gdr-seal)"/>
  <g stroke="#2c1810" stroke-opacity=".16" stroke-width="1.2">${crimp}</g>
  <rect x="97" y="80" width="206" height="4" fill="#2c1810" opacity=".12"/>

  <!-- degassing valve -->
  <circle cx="200" cy="112" r="10" fill="#c49d71" stroke="#2c1810" stroke-opacity=".25"/>
  <circle cx="200" cy="112" r="4" fill="#2c1810" opacity=".3"/>

  <!-- label -->
  <rect x="118" y="138" width="164" height="258" rx="6" fill="#fcf3e6" stroke="#2c1810" stroke-width="1.6"/>
  <rect x="124" y="144" width="152" height="246" rx="4" fill="none" stroke="#2c1810" stroke-opacity=".25" stroke-dasharray="3 3"/>
  <image href="${esc(opt.logo)}" x="140" y="148" width="120" height="120" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="290" text-anchor="middle" font-family="'DM Sans',Helvetica,Arial,sans-serif" font-size="8.5" font-weight="700" letter-spacing="2" textLength="132" lengthAdjust="spacingAndGlyphs" fill="#3d5a4e">ARTISAN ALLOCATION</text>
  <text x="200" y="318" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="${titleSize}" font-weight="800" fill="#2C1810">${esc(title)}</text>
  <text x="200" y="339" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="14" font-style="italic" fill="#b07a26">${esc(subtitle)}</text>
  <line x1="160" y1="352" x2="240" y2="352" stroke="#2c1810" stroke-opacity=".3"/>
  <text x="200" y="368" text-anchor="middle" font-family="'DM Sans',Helvetica,Arial,sans-serif" font-size="7" font-weight="600" letter-spacing="1" textLength="132" lengthAdjust="spacingAndGlyphs" fill="#6b5a45">HAND ROASTED · PALM BEACH CO.</text>
  <text x="200" y="381" text-anchor="middle" font-family="'DM Sans',Helvetica,Arial,sans-serif" font-size="7" font-weight="600" letter-spacing="1" textLength="104" lengthAdjust="spacingAndGlyphs" fill="#6b5a45">12 OZ · 340 G · FLORIDA</text>

  <!-- giving stamp -->
  <g transform="translate(300 168) rotate(-12)">
    <circle r="38" fill="#fdbb56"/>
    <circle r="32" fill="none" stroke="#2c1810" stroke-opacity=".55" stroke-dasharray="2 3"/>
    <text y="2" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="22" font-weight="800" fill="#2C1810">${esc(opt.stamp)}</text>
    <text y="15" text-anchor="middle" font-family="'DM Sans',Helvetica,Arial,sans-serif" font-size="6.5" font-weight="700" letter-spacing=".8" textLength="50" lengthAdjust="spacingAndGlyphs" fill="#2C1810">TO DOG RESCUE</text>
  </g>

  ${beans}
</svg>`;
}
