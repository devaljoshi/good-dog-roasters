# Good Dog Roasters — VS Code Context & Development Guide

## Project Overview
Artisan coffee brand website. Hybrid model: limited-drop artisan roasts (Wait.li on Shopify) + everyday a la carte/subscription (Shopify dropship via Dripshipper).

**Live Site:** https://good-dog-roasters.netlify.app/  
**GitHub:** https://github.com/devaljoshi/good-dog-roasters  
**Domain:** good-dog-roasters.com (points to Netlify)

---

## Business Model — Critical Distinction

| | Artisan Collection | Everyday Collection |
|---|---|---|
| **Made by** | Hand-roasted by owner in Palm Beach County, FL | Dropshipped via Dripshipper (not made locally) |
| **Availability** | Limited drops only | Always in stock |
| **Access** | Wait.li waitlist → selected users | Direct purchase anytime or subscribe |
| **Ship time** | Within 48hr of roasting | Standard dropship fulfillment |
| **Messaging** | "Made Here", hand-roasted, small-batch | "Curated for You", Good Dog Approved |

**⚠️ Never claim all coffee is hand-roasted — only the Artisan line is.**

---

## Brand Identity

### Tagline
"Be Good. Do Good. Taste Good."

### Color Palette
```
#fdbb56 — Gold (primary accent)
#799b8e — Sage (secondary, calming)
#d4bfaa — Sand (tertiary, warm neutral)
#f6f3f1 — Cream (light background)
#2C1810 — Espresso (dark text/overlay)
```

### Typography
- **Display:** Playfair Display (weights: 400, 700, 800)
- **Body:** DM Sans (weights: 400, 500)

### Visual Identity
- **Two real dogs:** Vizsla/Lab + Yorkie (brand mascots, inspiration — not in roastery)
- **Logo:** `assets/Good Dog Graphic.svg` — clean SVG, no background (active)
- **Logo (legacy):** `assets/good_dog_roasters_oval_standard.png` — oval badge (unused)
- **Location:** Palm Beach County, FL
- **Style:** Editorial luxury, cinematic, artisan quality

---

## Tech Stack

### Frontend
- **Framework:** Plain HTML/CSS + Alpine.js (CDN, no build tools)
- **Styles:** External `style.css` (shared across all pages)
- **Dynamic data:** Alpine.js fetching Shopify Storefront API
- **Video:** Parallax hero with autoplay background video
- **Fonts:** Google Fonts (Playfair Display + DM Sans)

### Hosting & Deployment
- **Host:** Netlify (free tier)
- **Auto-deploy:** On every GitHub push to main
- **Build time:** ~3 seconds
- **Forms:** Netlify Forms (data-netlify="true") — newsletter active

### Shopify Integration
- **Store URL:** https://good-dog-roasters.myshopify.com
- **Storefront API token:** `8029c8b316efbfcc22cbf26acd6d1bc6` (read-only, public-safe)
- **API version:** 2024-10
- **API endpoint:** `https://good-dog-roasters.myshopify.com/api/2024-10/graphql.json`
- **Drop system:** Wait.li app (artisan exclusive access)
- **Dropship:** Dripshipper app ($30/mo) for everyday collection
- **Headless channel:** Created for Storefront API access

---

## Project File Structure

```
good-dog-roasters/
├── index.html                        # Main site
├── privacy.html                      # Privacy policy
├── style.css                         # All styles (shared across pages)
├── index.backup.html                 # Pre-copy-rewrite backup
├── style.backup.css                  # Pre-copy-rewrite backup
├── assets/
│   ├── header.mp4                    # Hero video (has VEO watermark — handled via CSS overlay)
│   ├── story-photo.png               # Story section lifestyle photo (has watermark — handled via CSS)
│   ├── Good Dog Graphic.svg          # Active logo (no background, used in hero)
│   └── good_dog_roasters_oval_standard.png  # Legacy logo (unused)
├── skills/
│   ├── taste-skill.md                # Design taste preferences
│   ├── redesign-skill.md             # Audit/upgrade checklist
│   └── soft-skill.md                 # $150K agency visual design
├── PROJECT.md                        # This file
└── README.md                         # Deployment instructions
```

---

## Current Site Sections (top to bottom)

### 1. Nav
Fixed, transparent → frosted glass on scroll. Links: Our Story, Coffee, Newsletter, Shop Now.

### 2. Hero
Full-bleed video background (`assets/header.mp4`), dark overlay, logo SVG, headline, tagline, two CTAs: "Join the Drop List" (→ #waitlist) + "Shop Coffee" (→ Shopify). VEO watermark handled via CSS overlay on video.

### 3. Marquee
Scrolling text strip: Artisan Roasted · Palm Beach County · Small Batch · Expert Curated · Limited Drops · Ethically Sourced · Always Fresh · Good Dog Approved

### 4. Two Worlds (split panel)
- **Left (dark sage):** "Made Here" — Artisan Collection, hand-roasted PBC, limited drops, btn → #waitlist
- **Right (gold-light):** "Curated for You" — Everyday Collection, dropshipped, always in stock, btn → Shopify

### 5. Story / The Why
Split layout. Left: lifestyle photo (`assets/story-photo.png`, watermark masked with CSS gradient + object-position:top). Right: emotional "why" copy — dog-as-presence philosophy. Stats: PBC Artisan Roasted · 48hr Artisan Ship Time · 100% Good Dog Approved.

### 6. Newsletter
Netlify Form (`name="newsletter"`, `data-netlify="true"`). Real email capture — submissions visible in Netlify dashboard. Copy: "Stay in the Loop." Placeholder for Wait.li embed when snippet is available.

### 7. Products — "The Lineup"
Alpine.js + Shopify Storefront API. Fetches 3 collection tiles: Single Origin, Blends, Flavored. Shows first product image + starting price from each collection. Skeleton shimmer on load. Links to Shopify collection pages.

### 8. Footer
Links: Shop collections, Merch, Company. Tagline: "Artisan roasts made in Palm Beach County. Everyday coffees curated to the same standard."

---

## Design Skills (Active)

All three skills in `/skills/` should be referenced for all design output:

### taste-skill.md — Design Variance Framework
- DESIGN_VARIANCE: 8 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 4
- Easing: `cubic-bezier(0.32, 0.72, 0, 1)` always
- Fonts: Playfair Display + DM Sans (never Inter)
- Scroll reveals: blur(6px) + translateY(20px) → blur(0) + translateY(0)
- Use `100dvh` not `vh`

### redesign-skill.md — Audit & Upgrade Checklist
7-step workflow: Font → Color → Hover states → Spacing → Replace generics → Missing states → Typography

### soft-skill.md — $150K Agency Visual Design
Editorial luxury archetype. Double-bezel cards, tinted shadows, film grain, massive padding (10rem+), blur+translate reveals, parallax video hero.

---

## Pending Items & Next Steps

### Immediate (next session)
- [ ] **Shopify theme page** — needs redesign to match brand aesthetic
- [ ] **Wait.li embed snippet** — replace/supplement newsletter section when available
- [ ] **Story photo** — replace AI-generated PNG with clean Midjourney/Kling version (no watermark)
  - Prompt: *"Cinematic editorial photo, person outdoors in warm golden morning light holding ceramic mug, dog resting beside them, shallow DOF, amber warm tones, Palm Beach County, film grain, no text, no logo"*
- [ ] **Hero video watermark** — crop VEO watermark properly via FFmpeg:
  ```bash
  ffmpeg -i assets/header.mp4 -vf "crop=iw:ih-80:0:0" assets/header-clean.mp4
  ```

### Phase 2: Enhancement
- [ ] Random hero video rotation (3–5 variants from Kling, JS randomizer on page load)
- [ ] Favicon + meta/OG tags (social sharing previews)
- [ ] FAQ page (drop system, Wait.li process explained)
- [ ] Shipping & Returns policy page
- [ ] Cookie consent banner (before adding Google Analytics)
- [ ] Instagram feed or social links section
- [ ] Klaviyo integration (replace Netlify Forms for email marketing)

### Phase 3: Advanced
- [ ] Panagora Raffle app (phase 2 of drop system — automated lotteries)
- [ ] User accounts + loyalty program
- [ ] Email automation (drop announcements, order confirmations)
- [ ] Custom drop-list platform (replace Wait.li with bespoke system)

---

## Shopify Theme (Needs Work)
The Shopify storefront theme (`good-dog-roasters.myshopify.com`) does not currently match the brand aesthetic of the Netlify site. Next steps:
- Audit current theme against brand palette + typography
- Apply Playfair Display + DM Sans to theme
- Match color tokens (espresso, gold, sage, cream, sand)
- Ensure collection/product pages feel cohesive with the main site
- Consider Dawn theme as base (most customizable free Shopify theme)

---

## Important Notes & Gotchas

### Watermark Issues
- **Hero video:** VEO watermark bottom-right — currently masked via CSS overlay. Permanent fix: FFmpeg crop (see above).
- **Story photo:** AI watermark — currently masked via `object-position:top` + bottom gradient. Replace with clean asset.

### Local Development
```bash
# Must use a local server for Alpine.js CDN + Shopify API to work
python3 -m http.server 8080
# Then open http://localhost:8080
# Do NOT open index.html directly via file:// — API calls will fail
```

### Florida Raffle Regulations
- ⚠️ Business is **not a nonprofit** — traditional raffles are illegal in Florida
- ✅ Drop access model (invitation to purchase) is legal — Wait.li handles this correctly

### File Size Targets
- Hero video: under 5MB
- Images: under 500KB each
- Lighthouse target: >90 Performance

---

## Deployment Checklist

Before each push:
- [ ] Test on `localhost:8080` (not file://)
- [ ] Products section loads from Shopify API
- [ ] Newsletter form submits (check Netlify Forms dashboard after deploy)
- [ ] All Shopify links resolve
- [ ] Video plays (muted, autoplay)
- [ ] Logo displays in hero
- [ ] Mobile responsive (test at 375px)
- [ ] No console errors

---

## Contact & Support

**Email:** hello@good-dog-roasters.com  
**Shopify:** https://good-dog-roasters.myshopify.com  
**GitHub:** https://github.com/devaljoshi/good-dog-roasters  
**Netlify:** https://app.netlify.com/sites/good-dog-roasters/deploys  

---

## Claude Code Quick Commands

```bash
# Local dev server
python3 -m http.server 8080

# Stage and commit
git add index.html style.css privacy.html assets/
git commit -m "Update: [description]"
git push

# FFmpeg watermark crop (when ready)
ffmpeg -i assets/header.mp4 -vf "crop=iw:ih-80:0:0" assets/header-clean.mp4
```

---

**Last Updated:** April 19, 2026  
**Maintained by:** Deval Joshi (with Claude Code assistance)  
**Next Session:** Shopify theme redesign + Wait.li embed
