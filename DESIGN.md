---
name: Architectural Cyber Luxe
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#debec8'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#a68992'
  outline-variant: '#574048'
  surface-tint: '#ffb0cd'
  primary: '#ffb0cd'
  on-primary: '#640039'
  primary-container: '#f751a1'
  on-primary-container: '#570032'
  inverse-primary: '#b4136d'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ccc0ea'
  on-tertiary: '#332b4c'
  tertiary-container: '#968bb2'
  on-tertiary-container: '#2d2545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#ffb0cd'
  on-primary-fixed: '#3e0022'
  on-primary-fixed-variant: '#8c0053'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#ccc0ea'
  on-tertiary-fixed: '#1e1636'
  on-tertiary-fixed-variant: '#4a4264'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes a high-impact, premium developer and designer portfolio aesthetic. The visual identity bridges architectural geometry, luxury modern computing, and high-precision digital product design. 

The mood communicates supreme technical competence, deliberate aesthetic restraint, and high-contrast vibrancy. Designed for executive creative directors, technical founders, and enterprise engineering leads, the interface acts as an austere, hyper-modern gallery for complex product work, systems architecture, and engineering prototypes. Zero decorative photography or personal imagery is permitted; the interface relies exclusively on structural typography, glowing sub-surface gradients, frosted obsidian planes, and crisp telemetry tokens.

## Colors

The color architecture is rooted in deep pitch space with saturated radiant energy:

- **Primary (`#EC4899`)**: Cyber Pink. Reserved for primary calls to action, active terminal signals, glowing border focal points, and dynamic state markers.
- **Secondary (`#8B5CF6`)**: Radiant Neon Violet. Paired directly with the primary color to generate linear energy gradients (`linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)`), ambient backdrops, and interactive hover shifts.
- **Tertiary (`#2A2242`)**: Deep Slate Violet. Utilized as structural hairline borders, segmented controls, card perimeters, and divider lines.
- **Neutral Canvas (`#090A0F`)**: Obsidian pitch canvas with an imperceptible violet undertone, absorbing specular light while anchoring luminous cards.
- **Surface Elevation (`#151221`)**: Frosted dark violet-slate backing for cards, modals, navigation docks, and interactive panels.
- **Text & Foreground**: Full spectrum contrast using `#FFFFFF` for primary displays and headlines, `#94A3B8` for secondary copy and technical prose, and `#64748B` for subdued metadata and code comment roles.

## Typography

The type system balances architectural display geometry with balanced, high-legibility body rhythm:

- **Outfit (Headlines & Display)**: Chosen for its razor-sharp geometric cuts, circular bowls, and distinct modern posture. Headlines utilize negative letter spacing to create high-density editorial lockups.
- **Manrope (Body & Interface Copy)**: Provides high typographic clarity and geometric neutrality. Open counters and clear letterforms ensure effortless scanning across technical specifications, case study narratives, and metadata.
- **Hierarchy Rules**: 
  - Never apply uppercase styling to headlines; preserve strict sentence or title case.
  - Reserve uppercase tracking (`0.06em` to `0.08em`) exclusively for technical labels, system telemetry, and micro badges.
  - Large headline scales gracefully drop down on viewports below 768px via mobile-specific overrides to preserve balance and avoid forced wrapping.

## Layout & Spacing

The layout is built upon an 8pt modular scale framed within a 12-column responsive fluid grid:

- **Desktop (1200px+)**: 12-column layout capped at a maximum width of `1440px`. Gutters are fixed at `1.5rem` (`24px`), with outer canvas margins expanding dynamically from `4rem` (`64px`). Case study displays span 8 or 12 columns, while secondary metrics sit in 4-column sidebars.
- **Tablet (768px - 1199px)**: 8-column layout. Margin compresses to `2.5rem`, maintaining an internal card gutter of `1.5rem`.
- **Mobile (Below 768px)**: 4-column layout. Canvas margin reduces strictly to `1.25rem` (`20px`) with `1rem` gutters. All multi-column cards collapse to full-width stacks (`4/4` columns).
- **Rhythm Philosophy**: Sections are separated by generous breathing room (`space-3xl` / `6rem`) to let technical work sit isolated against the obsidian canvas. Internal card padding is locked to `space-lg` (`1.5rem`) on desktop and `space-md` (`1rem`) on small viewports.

## Elevation & Depth

Visual hierarchy uses physical glass stratification, sub-surface ambient luminescence, and laser-fine border articulation:

- **Base Ground (`#090A0F`)**: Flat, non-reflective pitch floor.
- **Level 1 — Frosted Modules**: Cards and structural panes use background `rgba(21, 18, 33, 0.7)` supported by a `backdrop-filter: blur(16px)`. Edges are framed by a 1px border of `rgba(42, 34, 66, 0.8)`. Ambient drop shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6)`.
- **Level 2 — Elevated Overlays & Menus**: Flyout inspectors, terminal windows, and interactive tooltips render with `rgba(21, 18, 33, 0.9)`, backdrop blur of `24px`, and a perimeter stroke of `#2A2242`. Drop shadow: `0 20px 48px -8px rgba(0, 0, 0, 0.8)`.
- **Luminescent Accent Glow**: High-priority interactive elements project subtle neon halos. Under hover states, Level 1 cards cast a localized glow: `box-shadow: 0 0 30px -10px rgba(236, 72, 153, 0.25), 0 0 20px -5px rgba(139, 92, 246, 0.2)`. Hairline borders shift dynamically from `#2A2242` to an illuminated gradient boundary.

## Shapes

The design system enforces a calibrated `roundedness: 2` (base `0.5rem` / `8px` corner radius) to establish an architectural, precision-machined tech aesthetic:

- **Micro Controls & Badges (`rounded-sm` / `4px`)**: Applied to inline tags, mini code snippets, and telemetry indicators.
- **Base Components (`rounded` / `8px`)**: Standard input fields, action buttons, segmented toggles, and dropdown menus.
- **Compound Containers (`rounded-lg` / `16px`)**: Primary project cards, interactive preview canvases, code sandboxes, and modal dialogs.
- **Floating Docks (`rounded-xl` / `24px`)**: Global sticky navigation bars and floating action shells.
- **Proportional Integrity**: Rounded corners are never pill-shaped on functional cards or containers; they remain structured rectangles with softened, engineered corners that preserve geometric alignment.

## Components

### Buttons
- **Primary Action**: Gradient fill `linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)`, text `#FFFFFF`, font `Manrope` (weight 600, 14px), radius `8px`, padding `12px 24px`. On hover: scale `1.02` with an ambient glow (`box-shadow: 0 0 24px rgba(236, 72, 153, 0.4)`).
- **Secondary / Glass Button**: Background `rgba(21, 18, 33, 0.8)`, border `1px solid #2A2242`, text `#FFFFFF`. On hover: border color transitions to `#8B5CF6`, background to `rgba(42, 34, 66, 0.5)`.
- **Ghost Action**: Transparent background, text `#94A3B8`, fine hover transition to `#EC4899` with horizontal translation on accompanying directional icons.

### Cards & Project Showcase
- **Container**: Layered frosted background (`rgba(21, 18, 33, 0.65)`), border `1px solid #2A2242`, radius `16px`, padding `24px`.
- **Interactive State**: Subsurface illumination fades in via a pseudo-element radiating from cursor position or cardinal center; border activates to `rgba(236, 72, 153, 0.5)`.
- **Header Structure**: Split layout with project classification labels flush left and metric telemetry indicators flush right.

### Chips & Badges
- **Status Badge**: Background `rgba(236, 72, 153, 0.1)`, border `1px solid rgba(236, 72, 153, 0.3)`, text `#EC4899`, radius `4px`, padding `4px 8px`, typography `label-sm` (uppercase, tracked).
- **Secondary Tech Tag**: Background `rgba(42, 34, 66, 0.5)`, border `1px solid #2A2242`, text `#94A3B8`, radius `4px`, padding `4px 8px`.

### Input Fields & Terminal Elements
- **Input Field**: Height `48px`, background `rgba(9, 10, 15, 0.6)`, border `1px solid #2A2242`, radius `8px`, text `#FFFFFF`, placeholder `#64748B`. Focused state: border transitions to `#EC4899` with an inner ring glow `0 0 0 1px #EC4899`.
- **Code Terminal Pane**: Deep pitch container (`#090A0F`), top macOS/IDE-style telemetry toolbar with structural window management dots, separated by a crisp 1px stroke of `#2A2242`.

### Lists & Case Study Indexes
- **Index Row**: Border-bottom `1px solid #2A2242`, padding `20px 0`. Contains index number in `Outfit` (subdued `#64748B`), project title in white bold typography, and meta roles aligned right. Hover state causes the entire horizontal row to shift text color to `#EC4899` and elevate by `-2px`.

### Checkboxes & Toggle Controls
- **Toggle Switch**: Track width `44px`, height `24px`, background `#151221`, border `1px solid #2A2242`, radius `12px`. Active track fills with gradient `#EC4899` to `#8B5CF6`. Thumb: `#FFFFFF` circle (`18px`) with smooth spring translation.