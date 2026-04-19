# Soft Skill — $150K Agency Tier Visual Design

**Project:** Good Dog Roasters  
**Design Archetype:** Editorial Luxury  
**Target Audience:** Premium coffee enthusiasts, brand-conscious consumers  
**Aesthetic:** Sophisticated, minimal, cinematic, heirloom-quality  

## Core Design Principles

### 1. Editorial Luxury Aesthetic
- **Photography:** High-end, shallow depth of field, warm color grading
- **Typography:** Generous sizing, serif + sans-serif hierarchy
- **Whitespace:** Excessive and intentional (never feels cramped)
- **Motion:** Subtle, organic, never jarring
- **Materials:** Matte textures, refined metallics, natural fabrics

### 2. Archetype Reference
Think: Aesop, Oak Dining, Loro Piana, Craft & Co., artisan coffee publications

Key shared traits:
- Large, breathing sections with generous padding
- High-contrast black text on cream/white backgrounds
- Occasional use of spot color (gold, sage, deep brown)
- Layered imagery with subtle parallax
- Refined typography without playfulness

---

## Visual Patterns — Implemented in Good Dog Roasters

### Pattern 1: Double-Bezel Nested Cards
**Purpose:** Create depth and refinement without skeuomorphism

```css
/* Outer shell (bezel) */
.card-outer {
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: transparent;
}

/* Inner core (concentric) */
.card-inner {
  padding: 2.5rem;
  border-radius: 8px;
  background: rgba(253, 187, 86, 0.03);
  border: 1px solid rgba(253, 187, 86, 0.1);
}
```

**Effect:** Creates a "frame within frame" that feels hand-crafted and intentional.

---

### Pattern 2: Blur + Translate Scroll Reveals
**Purpose:** Cinematic entrance animations for content

```css
@keyframes reveal {
  from {
    opacity: 0;
    filter: blur(6px);
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

.scroll-reveal {
  animation: reveal 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}
```

**Effect:** Content "focuses into view" rather than fading, suggesting intentionality and care.

---

### Pattern 3: Tinted Shadows (Never Black)
**Purpose:** Shadows that feel organic to the brand, not imposed

```css
/* Instead of: box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */

/* Use: */
box-shadow: 
  0 4px 12px rgba(121, 155, 142, 0.08),  /* Sage tint */
  0 8px 24px rgba(44, 24, 16, 0.06);     /* Espresso tint */
```

**Effect:** Shadows feel like they belong to the palette, not like generic UI.

---

### Pattern 4: Film Grain Overlay
**Purpose:** Add texture and sophistication, reduce "flatness"

```css
.grain-overlay {
  position: fixed;
  inset: 0;
  background-image: 
    repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.03),
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 2px
    );
  pointer-events: none;
  z-index: 9999;
  opacity: 0.15;
}
```

**Effect:** Suggests analogue photography or printed materials (high-end magazine feel).

---

### Pattern 5: Eyebrow Pill Badges
**Purpose:** Create visual hierarchy for section introductions

```css
.eyebrow {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  background: rgba(253, 187, 86, 0.1);
  border: 1px solid rgba(253, 187, 86, 0.2);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #799b8e;
  margin-bottom: 1rem;
}
```

**Effect:** Subtly guides user attention without being loud or gamified.

---

### Pattern 6: Massive Section Padding
**Purpose:** Breathing room signals quality and attention to detail

```css
section {
  padding: 10rem 2rem;  /* Desktop: 160px top/bottom */
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;  /* Mobile: 64px top/bottom */
  }
}
```

**Effect:** Each section feels like a deliberate composition, not cramped content.

---

### Pattern 7: Parallax Video Hero
**Purpose:** Cinematic entry point, immediately signals quality

```css
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(44, 24, 16, 0.35) 0%,
    rgba(44, 24, 16, 0.3) 50%,
    rgba(44, 24, 16, 0.4) 100%
  );
  z-index: 2;
}
```

**Effect:** Immediately signals luxury (big brands use this pattern).

---

## Color Application Guide

### Primary Accent (Gold #fdbb56)
- **Use for:** CTA buttons, highlights, accent borders
- **Frequency:** <5% of design
- **Rule:** Never more than one gold accent per fold

### Secondary (Sage #799b8e)
- **Use for:** Subheadings, borders, tinted backgrounds
- **Frequency:** 5–10% of design
- **Rule:** Cooling color, use to balance warm golds

### Tertiary (Sand #d4bfaa)
- **Use for:** Section backgrounds, cards, subtle accents
- **Frequency:** 10–15% of design
- **Rule:** Warm neutral, grounding element

### Background (Cream #f6f3f1)
- **Use for:** Main background, card backgrounds
- **Frequency:** 60–70% of design
- **Rule:** Off-white, never pure white

### Text (Espresso #2C1810)
- **Use for:** Body text, headlines
- **Frequency:** 15–20% of design
- **Rule:** Dark brown, never pure black

---

## Typography Hierarchy

### Headline Styles
```
H1: Playfair Display, 5rem, weight 800, letter-spacing -0.03em
H2: Playfair Display, 2.5rem, weight 700, letter-spacing -0.02em
H3: DM Sans, 1.5rem, weight 600
```

### Body Styles
```
Body: DM Sans, 1rem, weight 400, line-height 1.7
Caption: DM Sans, 0.875rem, weight 400, opacity 0.75
```

### Special Styling
- **Italics:** Used sparingly, usually for taglines or subheadings
- **Letter-spacing:** Generous on Playfair (+0.05em–0.1em on small caps)
- **Text shadows:** Subtle, only over images (0 4px 16px rgba(44,24,16,0.3))

---

## Interactive Design

### Button Hierarchy
```
Primary (CTA): Dark background (#2C1810), cream text, gold border on hover
Secondary (Info): Transparent, sage border, sagey text
Tertiary (Link): Underline on hover, no background
```

### Hover States
- **Buttons:** `scale(1.02)` + color shift (gold → more gold)
- **Links:** Underline appears or color darkens
- **Images:** Subtle blur (2px) or opacity fade
- **Cards:** Slight shadow increase, no lift (too playful)

### Active States
- **Buttons:** `scale(0.98)`, darker shade, held for duration of click
- **Form fields:** Gold border, soft background highlight
- **Checkboxes:** Gold checkmark (SVG), not generic

---

## Motion Guidelines

### Easing Function
**Always use:** `cubic-bezier(0.32, 0.72, 0, 1)`

Why? It's organic, not mechanical. Matches real-world deceleration curves.

### Timing
- **Quick interactions (hover):** 200–300ms
- **Page transitions:** 500–800ms
- **Scroll reveals:** 800–1000ms
- **Never:** >1.5s for UI animations (feels broken)

### Avoid
- ❌ Bouncing (cubic-out)
- ❌ Elastic (overshoot)
- ❌ Linear (mechanical)
- ❌ Tremor effects (micro jank)

---

## Photography & Imagery

### Style Guidelines
- **Color grade:** Warm, amber-toned (not cool/blue)
- **Lighting:** Golden hour, soft shadows, high-key
- **Composition:** Shallow DOF (f/1.8–f/2.8), off-center subjects
- **Subjects:** Hands, details, steam, texture (not wide shots)

### Resolution
- **Desktop:** 2x resolution (e.g., 2880px wide for 1440px display)
- **Mobile:** 1x resolution (e.g., 375px wide)
- **Format:** JPEG or WebP, optimized to <500KB

### Usage
- Large hero images (full-width, above fold)
- Layered imagery with parallax
- Detail shots (macro coffee, hands, ceramic)
- Never: Obvious stock photos, generic "business" imagery

---

## Layout Grid

Use an 12-column grid with generous gutters:
```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

**Breakpoints:**
- Mobile (320px–767px): 1 column, 2rem gap
- Tablet (768px–1024px): 2–4 columns, 3rem gap
- Desktop (1025px+): 12 columns, 2rem gap

---

## Quality Checklist for $150K Agency Standard

- [ ] Every section has massive padding (10rem+)
- [ ] Zero generic UI components or stock icons
- [ ] Shadows are tinted to brand colors
- [ ] Motion uses correct easing curve
- [ ] Typography is hierarchical and breathes
- [ ] Colors feel like a conscious palette, not random
- [ ] Video/images are cinematic (not documentary)
- [ ] Every interactive element has 3+ states
- [ ] Whitespace feels intentional, never accidental
- [ ] The site feels like a high-end coffee table book, not a startup

---

**Last Updated:** April 19, 2026  
**Archetype:** Editorial Luxury  
**Target Price Point:** $150K+
