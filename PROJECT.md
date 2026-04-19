# Good Dog Roasters — VS Code Context & Development Guide

## Project Overview
Artisan coffee brand website. Hybrid model: limited-drop artisan roasts (Wait.li on Shopify) + everyday a la carte/subscription (Shopify dropship).

**Live Site:** https://good-dog-roasters.netlify.app/  
**GitHub:** https://github.com/devaljoshi/good-dog-roasters  
**Domain:** good-dog-roasters.com (points to Netlify)

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
- **Two real dogs:** Vizsla/Lab + Yorkie (brand mascots)
- **Logo:** Oval badge with dogs on beach/sunset
- **Location:** South Florida (Davie, FL)
- **Style:** Editorial luxury, cinematic, artisan quality

---

## Tech Stack

### Frontend
- **Framework:** Plain HTML/CSS (no build tools, no frameworks)
- **Video:** Parallax hero with autoplay background video (header.mp4)
- **Fonts:** Google Fonts (Playfair Display + DM Sans)

### Hosting & Deployment
- **Host:** Netlify (free tier)
- **Auto-deploy:** On every GitHub push
- **Build time:** ~3 seconds
- **Live preview:** Automatic after push

### GitHub
- **Repo:** https://github.com/devaljoshi/good-dog-roasters
- **Branch:** main
- **Files:** HTML, CSS (inline), images, video assets

### Shopify Integration
- **Store URL:** https://good-dog-roasters.myshopify.com
- **Collections:** Single Origin, Blends, Flavored, Sample Packs, Tea, Merch
- **Drop system:** Wait.li app (artisan exclusive access)
- **Model:** Shopify as pure commerce backend (Netlify is customer-facing front door)

---

## Project File Structure

```
good-dog-roasters/
├── index.html                          # Main site (hero, story, products, waitlist)
├── privacy.html                        # Privacy policy
├── good_dog_roasters_oval_standard.png # Logo
├── assets/
│   ├── header.mp4                      # Hero video (parallax background)
│   ├── header-1.mp4                    # (TODO: Additional hero videos)
│   ├── header-2.mp4
│   └── header-3.mp4
├── skills/
│   ├── taste-skill.md                  # Design taste preferences
│   ├── redesign-skill.md               # Audit/upgrade checklist
│   └── soft-skill.md                   # $150K agency visual design
├── PROJECT.md                          # This file
├── README.md                           # Deployment instructions
└── .gitignore                          # (recommended)
```

---

## Key Features

### Hero Section
- **Video background:** Parallax autoplay (muted, looping)
- **Logo:** Floating animation with drop-shadow
- **Headline:** "Good Dog Roasters" (serif + italic accent)
- **CTA buttons:** "Join the Drop List" + "Shop Coffee"
- **Scroll indicator:** Hint to scroll down

### Story Section
- "Two dogs, one mission" narrative
- Stats: 100% Hand Roasted, 48hr Roast to Ship, 2 Good Dogs
- Brand values messaging

### Collections Display
- **Artisan Collection:** Limited drops, hand-roasted
- **Everyday Collection:** Always available, shop anytime or subscribe
- Product card layout with Shopify links

### Waitlist / Drop List
- Email signup form (Netlify Forms)
- "No spam. Just coffee drops. Unsubscribe anytime."
- Connected to Wait.li for artisan drops

### Footer
- Quick links to Shopify collections
- Merch links (Tees, Hoodies, Hats, Mugs)
- Privacy policy link
- Copyright & tagline

---

## Design Skills (Active)

All three skills are embedded and should be referenced for all code/design output:

### taste-skill.md — Design Variance Framework
**Parameters:**
- DESIGN_VARIANCE: 8 (high visual distinction, avoid generic patterns)
- MOTION_INTENSITY: 6 (smooth, purposeful animations)
- VISUAL_DENSITY: 4 (spacious layouts, generous padding)

**Key rules:**
- Easing: `cubic-bezier(0.32, 0.72, 0, 1)` for all transitions
- Icons: SVG only, 1.5 stroke-width (no emoji, no Fill)
- Fonts: Playfair Display + DM Sans (never Inter)
- Buttons: Active state is `scale(0.98)`, hover is `scale(1.02)`
- Scroll reveals: blur(6px) + translateY(20px) → blur(0) + translateY(0)
- Section padding: `10rem` desktop, `2rem` mobile

**Anti-patterns to avoid:**
- ❌ Emoji
- ❌ Inter font
- ❌ Generic Web3 UI
- ❌ Trembling/overly intense micro-interactions
- ❌ `vh` units (use `100dvh`)

### redesign-skill.md — Audit & Upgrade Checklist
7-step workflow for refining designs:
1. Font swap first
2. Color cleanup
3. Hover & active states
4. Layout spacing
5. Replace generic components
6. Missing states (empty, loading, error)
7. Typography polish

Use before major launches or quarterly refreshes.

### soft-skill.md — $150K Agency Visual Design
**Archetype:** Editorial Luxury (think Aesop, Oak Dining, premium coffee publications)

**Key patterns:**
- Double-bezel nested cards (outer bezel + inner core)
- Blur + translate scroll reveals (cinematic entrance)
- Tinted shadows (never black, use brand colors)
- Film grain overlay (texture, sophistication)
- Eyebrow pill badges (visual hierarchy)
- Massive section padding (10rem+)
- Parallax video hero (cinematic entry point)

**Quality checklist:**
- Every section has 10rem+ padding
- Zero generic UI components
- Shadows tinted to brand colors
- Typography is hierarchical and breathes
- Video/images are cinematic
- Every interactive element has 3+ states
- Whitespace feels intentional

---

## Development Workflow

### Local Setup
```bash
# Clone the repo
git clone https://github.com/devaljoshi/good-dog-roasters.git
cd good-dog-roasters

# Open in VS Code
code .

# Open Claude Code (if installed)
claude-code
```

### Making Changes
1. **Edit files** in VS Code (HTML, CSS, add assets)
2. **Test locally** (open `index.html` in browser, or use Live Server)
3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update: [clear description of changes]"
   git push
   ```
4. **Netlify auto-deploys** (~30 seconds)
5. **Verify live** at https://good-dog-roasters.netlify.app/

### Important: Never Push Directly to Production
Always push to `main` branch on GitHub. Netlify will auto-deploy from main.

---

## Pending Features & TODOs

### Phase 1: Current MVP (ACTIVE)
- [x] Hero parallax video background
- [x] Drop list / waitlist functionality
- [x] All Shopify collection links
- [x] Privacy policy page
- [x] Logo, tagline, story section
- [ ] ⚠️ Fix hero video watermark (Nano Banana watermark visible in bottom right)
  - **Action:** Crop video to remove "VEO" watermark
- [ ] ⚠️ Verify all buttons visible on mobile (second CTA button may be cut off)
  - **Action:** Test responsive design, adjust padding if needed
- [ ] ⚠️ Logo appearance over video background (may need opacity adjustment)
  - **Action:** Refine logo styling, test contrast

### Phase 2: Enhancement (NEXT)
- [ ] Random hero video rotation (3–5 video variants)
  - Prompt: Generate 2–3 more coffee hero videos in Nano Banana
  - Code: Add JS randomizer to select video on page load
- [ ] FAQ page (explaining drop system, Wait.li process)
- [ ] Shipping & Returns policy page
- [ ] Contact form (separate from Shopify)
- [ ] Favicon + meta/og tags (social sharing previews)
- [ ] Cookie consent banner (if adding Google Analytics)
- [ ] Social media links (Instagram feed integration?)
- [ ] Newsletter signup (Klaviyo/Mailchimp)

### Phase 3: Advanced (FUTURE)
- [ ] Kling-generated hero video (coffee roasting slow-mo, premium quality)
- [ ] Panagora Raffle Shopify app (phase 2 of drop system, automated lotteries)
- [ ] User accounts + loyalty program
- [ ] Custom drop-list platform (replace Wait.li with bespoke system)
- [ ] Email automation (drop announcements, order confirmations)

---

## Shopify Integration Details

### Store Configuration
- **Domain:** good-dog-roasters.myshopify.com
- **Products:** Coffee, merch (all on Shopify)
- **Collections:** 
  - Single Origin (from $23.99)
  - Signature Blends (from $23.99)
  - Flavored (from $23.99)
  - Sample Packs ($24.99)
  - Tea (various)
  - Tees, Hoodies, Hats, Mugs (merch)

### Drop System (Current)
- **App:** Wait.li (installed on Shopify)
- **Flow:** Main site → "Join the Drop List" button → Wait.li page on Shopify
- **Process:** 
  1. User signs up via Wait.li
  2. When batch drops, selected users get access
  3. They purchase through Shopify
  4. You roast and ship

### Shopify URLs Referenced in HTML
```html
<!-- Main store -->
https://good-dog-roasters.myshopify.com

<!-- Collections -->
/collections/single-origin
/collections/blends
/collections/flavored
/collections/sample-packs
/collections/tea

<!-- Merch -->
/collections/tees
/collections/hoodies-sweatshirts
/collections/hats-caps
/collections/mugs

<!-- Contact -->
/pages/contact
```

---

## Important Notes & Gotchas

### Video Watermark Issue
- **Problem:** Google Nano Banana adds "VEO" watermark to all videos
- **Solution:** Manually crop the video using FFmpeg or video editor (CapCut, etc.)
- **Command:** `ffmpeg -i header.mp4 -vf "crop=iw:ih-100:0:0" header-cropped.mp4` (crops bottom 100px)

### File Size / Performance
- **HTML:** ~24KB
- **Logo PNG:** ~200KB
- **Hero video:** ~3.7MB (keep under 5MB for web)
- **Load time target:** <3 seconds
- **Lighthouse target:** >90 Performance score

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Video autoplay: Requires muted attribute
- CSS Grid & Flexbox: Fully supported
- No IE11 support (intentional)

### Florida Raffle Regulations
- ⚠️ Your business is **not a nonprofit**, so traditional raffles are illegal in Florida
- ✅ **Solution:** Use "drop access" model (invitation to purchase, not a free prize)
- Wait.li handles this correctly (randomizes who gets purchase access, not a raffle)
- **No need for FDACS registration** with this model

---

## Deployment Checklist

Before each deployment:
- [ ] Test all Shopify links (do they resolve?)
- [ ] Check video plays on desktop and mobile
- [ ] Verify logo displays correctly
- [ ] Test buttons (all CTAs working?)
- [ ] Check privacy policy link
- [ ] Mobile responsiveness (test on phone)
- [ ] No console errors (DevTools)
- [ ] Lighthouse audit (>90 performance)

---

## Contact & Support

**Email:** hello@good-dog-roasters.com  
**Shopify Contact Page:** https://good-dog-roasters.myshopify.com/pages/contact  
**GitHub:** https://github.com/devaljoshi/good-dog-roasters  

---

## Claude Code Quick Commands

When working in VS Code with Claude Code:

```bash
# Check status
git status

# Stage files
git add index.html privacy.html assets/

# Commit with message
git commit -m "Fix: Update hero overlay for better watermark coverage"

# Push to GitHub (Netlify auto-deploys)
git push

# View recent deployments
# → https://app.netlify.com/sites/good-dog-roasters/deploys
```

---

**Last Updated:** April 19, 2026  
**Maintained by:** Developer (with Claude Code assistance)  
**Next Review:** After shipping random hero video rotation feature
