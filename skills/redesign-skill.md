# Redesign Skill — Audit & Upgrade Checklist

**Project:** Good Dog Roasters  
**Purpose:** Systematic checklist for refining and auditing existing designs  
**When to Use:** Before major launches, quarterly refreshes, or performance audits  

## Pre-Redesign Audit

### Visual Hierarchy
- [ ] Headlines use correct font weight (usually 700+)
- [ ] Body text has sufficient contrast (WCAG AA minimum)
- [ ] Font sizes follow a clear scale (1rem, 1.25rem, 1.5rem, 2rem, etc.)
- [ ] Line heights are generous (1.5–1.8 for body, 1.1–1.3 for headlines)
- [ ] Letter spacing is intentional (not defaults)

### Color & Contrast
- [ ] Primary brand color (#fdbb56) used sparingly and deliberately
- [ ] Secondary colors (sage, sand) complement, don't dominate
- [ ] Text on backgrounds passes WCAG AA (4.5:1 minimum)
- [ ] Dark overlays are gradient-based, not flat black
- [ ] Color palette is consistently applied across all pages

### Spacing & Layout
- [ ] Section padding is generous (10rem+ on desktop)
- [ ] Gap between elements follows a rhythm (3rem, 1.2rem, etc.)
- [ ] No text is "pinned" to edges (always 2rem+ padding)
- [ ] Whitespace feels intentional, not accidental
- [ ] Mobile spacing scales down proportionally (2rem on mobile, 10rem on desktop)

### Typography
- [ ] Playfair Display used only for display/headlines
- [ ] DM Sans used for body and UI copy
- [ ] No serif fonts mixed in (except intentional design choice)
- [ ] Font weights are limited to 3–4 per page (not a rainbow)
- [ ] Italic used sparingly and purposefully

### Interactive States
- [ ] Buttons have `:hover` states (color shift or scale)
- [ ] Buttons have `:active` states (scale 0.98)
- [ ] Links have underlines or clear hover indication
- [ ] Forms have `:focus` rings (2px, brand color)
- [ ] Disabled states are visually distinct (opacity or grey)

### Motion & Animation
- [ ] Animations use custom easing: `cubic-bezier(0.32, 0.72, 0, 1)`
- [ ] Animations never exceed 1 second (except scroll parallax)
- [ ] Scroll reveals use blur + translate (not just fade)
- [ ] No trembling, bouncing, or overly intense effects
- [ ] Mobile: animations simplified or reduced (prefers-reduced-motion respected)

### Responsive Design
- [ ] Tested on mobile (320px), tablet (768px), desktop (1440px)
- [ ] Images scale proportionally (no stretching)
- [ ] Text doesn't overflow or become too small
- [ ] Touch targets are at least 48x48px (buttons, links)
- [ ] Navigation adapts (mobile menu, desktop nav)

### Performance
- [ ] Images are optimized (JPEG/WebP, <500KB per image)
- [ ] Videos are under 5MB for web
- [ ] No inline CSS (all in <style> tags or external sheet)
- [ ] No unused CSS (audit with Chrome DevTools)
- [ ] Fonts load before layout shift (font-display: swap)

### Accessibility
- [ ] All images have `alt` text
- [ ] Links are clearly distinguishable (not just color)
- [ ] Color isn't the only indicator of state
- [ ] Text has sufficient line height (1.5+ for body)
- [ ] Forms have associated labels

## Step-by-Step Redesign Workflow

### Step 1: Font Swap First
If changing fonts:
1. Remove old font imports
2. Add new font imports (Google Fonts, Typekit, etc.)
3. Update `font-family` declarations
4. Test all weights and styles
5. Check if line-height needs adjustment

### Step 2: Color Cleanup
1. Audit all colors used (search CSS for `#` and `rgb`)
2. Map to brand palette
3. Replace ad-hoc colors with variables
4. Test contrast on all backgrounds
5. Update shadows/overlays to use brand colors

### Step 3: Hover & Active States
1. Add `:hover` to all interactive elements
2. Add `:active` / `:focus` to buttons and forms
3. Test on keyboard (Tab key)
4. Test on mobile (no :hover, use `:active`)
5. Ensure states are visually distinct

### Step 4: Layout Spacing
1. Audit all margin/padding values
2. Consolidate to a 4px or 8px grid (e.g., 8px, 16px, 24px, etc.)
3. Increase section padding (target: 10rem desktop, 2rem mobile)
4. Check whitespace around text blocks
5. Verify rhythm is consistent top-to-bottom

### Step 5: Replace Generic Components
Look for:
- ❌ Placeholder icons (replace with custom SVG)
- ❌ Default buttons (style to match brand)
- ❌ Emoji (replace with SVG or remove)
- ❌ Stock images (replace with brand photography)
- ❌ Lorem ipsum (replace with real copy)

### Step 6: Missing States
Check for:
- ❌ Empty states (no results, loading, error)
- ❌ Loading spinners (add animation)
- ❌ Error messages (style distinctly)
- ❌ Success messages (celebratory, but not jarring)
- ❌ Form validation (real-time feedback)

### Step 7: Typography Polish
1. Check line lengths (45–75 characters optimal)
2. Verify hierarchy (H1 > H2 > H3 > body)
3. Ensure letter spacing on headlines (if Playfair, use 0–-0.03em)
4. Test on small screens (does text stack well?)
5. Add text shadows where needed for readability over images

## Post-Redesign QA

- [ ] Mobile: Tested on iPhone SE, iPhone 14, Android device
- [ ] Desktop: Tested on 1440px and 2560px widths
- [ ] Browser: Chrome, Firefox, Safari, Edge
- [ ] Performance: Lighthouse audit (target: >90 Performance)
- [ ] Accessibility: axe DevTools audit (0 critical issues)
- [ ] Load time: Full page < 3 seconds (target)
- [ ] Video: Plays on autoplay (muted)
- [ ] Forms: Submit works, validation displays
- [ ] Links: All external links have `target="_blank" rel="noopener"`
- [ ] Print: Page looks reasonable when printed

## Common Redesign Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Text unreadable over images | Insufficient contrast | Add darker overlay or text shadow |
| Buttons too small on mobile | Fixed dimensions | Use min-width instead, scale down padding |
| Layout breaks on tablet | Breakpoints missing | Add 768px breakpoint queries |
| Colors look different on phone | Wrong color space | Use hex or rgb, test on multiple devices |
| Animation jank on scroll | Inefficient transitions | Use transform/opacity only, avoid layout shifts |
| Font looks blurry | Wrong font-weight loaded | Verify Google Fonts import includes all weights |

---

**Last Updated:** April 19, 2026  
**Used By:** Good Dog Roasters design audit process
