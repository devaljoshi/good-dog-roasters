# Taste Skill — Design Variance Framework

**Project:** Good Dog Roasters  
**Purpose:** Define visual taste preferences for all design and code output  
**Author:** Anthropic Claude  

## Design Parameters

| Setting | Value | Notes |
|---------|-------|-------|
| DESIGN_VARIANCE | 8 | High visual distinction, avoid generic patterns |
| MOTION_INTENSITY | 6 | Smooth, purposeful animations (not jarring) |
| VISUAL_DENSITY | 4 | Spacious, breathing layouts, generous padding |
| EMOJI_USAGE | 0 | Never use emoji — custom SVG icons instead |
| FONT_PREFERENCE | Playfair Display + DM Sans | Display + Body hierarchy |

## Code Patterns

### Easing & Animation
```css
/* Custom cubic-bezier for smooth, organic feel */
cubic-bezier(0.32, 0.72, 0, 1)

/* Scroll reveals: blur + translate */
opacity: 0;
filter: blur(6px);
transform: translateY(20px);
transition: all 0.8s cubic-bezier(0.32, 0.72, 0, 1);
```

### Spacing
- **Section padding:** `py-24+` (minimum 96px, often 10rem)
- **Element gap:** `gap-1.2rem` for buttons, `gap-3rem` for sections
- **Min heights:** Use `min-h-100dvh` over `min-h-screen`

### Visual Elements
- **SVG icons:** 1.5 stroke-width, no fills (outlines only)
- **Buttons:** `scale(0.98)` on active, no padding-collapse
- **Cards:** Double-bezel nesting (outer shell + inner core)
- **Shadows:** Tinted shadows matching background hue, not black
- **Overlays:** Gradient overlays with directional flow

### Anti-Patterns
- ❌ Inter font (use Playfair/DM Sans)
- ❌ Bright neon colors or AI-cliché palettes
- ❌ Generic "Web3" UI components
- ❌ Trembling or overly intense micro-interactions
- ❌ Emoji in UI (use custom SVG instead)
- ❌ `vh` units (use `100dvh`)

## Brand Color Palette

```
Gold:       #fdbb56 (primary accent)
Sage:       #799b8e (secondary, calming)
Sand:       #d4bfaa (tertiary, warm neutral)
Cream:      #f6f3f1 (light background)
Espresso:   #2C1810 (dark text/overlay)
```

## Text Styling
- **Display:** Playfair Display, weights 400–800, italics allowed
- **Body:** DM Sans, weights 400–500
- **Headlines:** Usually bold (800), sometimes italic (400)
- **Text shadows:** Subtle, 0 4px 16px rgba(44, 24, 16, 0.3)

## Scroll Behavior
- **Intersection Observer:** Passive scroll listeners, no jank
- **Staggered reveals:** Child elements fade in with 100–200ms delays
- **Parallax:** Video/background moves at 0.5x scroll speed
- **Film grain overlay:** Fixed, `pointer-events: none`, subtle noise

## Component States
- **Hover:** Slight color shift, scale(1.02) or lighter overlay
- **Active/Pressed:** scale(0.98), darker overlay
- **Focus:** 2px ring outline in brand color
- **Disabled:** opacity(0.5), cursor-not-allowed

## Responsive Breakpoints
- **Mobile:** 320px–767px (single column, 2rem padding)
- **Tablet:** 768px–1024px (2-column grid, 4rem padding)
- **Desktop:** 1025px+ (full layouts, 10rem padding)

## Asset Guidelines
- **Logo:** PNG, white/transparent background, drop-shadow only
- **Video:** MP4, H.264 codec, max 3.7MB (for web)
- **Photography:** High contrast, warm color grade, shallow DOF
- **Icons:** SVG, 24–48px, consistent stroke-width

---

**Last Updated:** April 19, 2026  
**Next Review:** When adding new design features
