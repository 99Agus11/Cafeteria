# Handoff: Alma Café — Landing Page

## Overview
A full-page marketing landing for a specialty coffee shop. The design covers every section a customer needs: hero with carousel, quick info bar, about story, tabbed menu, Instagram-style gallery, testimonials, CTA banner, and footer — plus a WhatsApp floating action button.

## About the Design Files
The files in this bundle (`Cafeteria Landing.html`) are **design references created in HTML** — high-fidelity prototypes showing intended look, copy, and behavior. They are **not production code to copy directly**. The task is to **recreate these designs in your target codebase** (Next.js, React, Astro, etc.) using its established patterns, libraries, and component conventions.

## Fidelity
**High-fidelity.** Colors, typography, spacing, interactions, and copy are final. Recreate pixel-accurately using the codebase's existing libraries and patterns.

---

## Design Tokens

### Colors
| Token | Value | Usage |
|---|---|---|
| `--espresso` | `#120b07` | Page background |
| `--dark-roast` | `#1e1009` | Section alternating bg |
| `--mid-roast` | `#2e1a0e` | Cards, nav bg |
| `--cream` | `#f5ede0` | Primary text |
| `--warm-white` | `#fdf8f2` | Lightest text |
| `--muted` | `#b09880` | Secondary text, icons |
| `--gold` | `oklch(0.72 0.10 58)` ≈ `#c9953a` | Accent, CTAs, prices |
| `--gold-light` | `oklch(0.85 0.08 58)` ≈ `#e8c07a` | Italic hero text |

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Headings | **Cormorant Garamond** | 400, 600, 700 | Italic variants used extensively |
| Body / UI | **Space Grotesk** | 300, 400, 500, 600 | Nav, labels, buttons, body copy |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600
```

### Spacing & Sizing
- Section vertical padding: `100px 24px` (desktop), `72px 24px` (mobile ≤768px)
- Max content width: `1200px` (centered)
- Border radius: `2px` (buttons, cards), `4px` (menu cards, gallery)
- Nav height: `~64px` scrolled, `~80px` top of page

### Shadows
- Menu card hover: `0 20px 60px rgba(0,0,0,0.5)`
- WhatsApp FAB: `0 4px 24px rgba(37,211,102,0.4)` → `0 8px 32px rgba(37,211,102,0.6)` on hover

---

## Sections / Views

### 1. Navigation (Fixed, Full-width)
- **Behavior**: Transparent at top; on scroll >60px → semi-opaque `rgba(18,11,7,0.92)` + `backdrop-filter: blur(16px)` + bottom border
- **Left**: Logo `Alma.` — Cormorant Garamond 1.4rem, `.` in gold
- **Center**: Nav links — Space Grotesk 0.85rem, `#b09880`, uppercase, letter-spacing 0.08em
  - Links: Nosotros · Menú · Galería · Contacto (anchor links to sections)
- **Right**: "Ver Menú" button — gold bg, espresso text, 10px 22px padding
- **Mobile (≤768px)**: Hide links + CTA; show hamburger → full-screen overlay nav with serif links

### 2. Hero (100svh, Carousel)
- **Carousel**: 3 slides, auto-advance every 5s, crossfade 1.2s
- **Overlay**: `linear-gradient(to bottom, rgba(18,11,7,0.55) 0%, rgba(18,11,7,0.3) 40%, rgba(18,11,7,0.8) 100%)`
- **Content** (centered):
  - Label: 0.75rem uppercase, letter-spacing 0.25em, gold
  - Title: Cormorant Garamond, clamp(3rem, 8vw, 6.5rem), cream — second word in italic gold-light
  - Subtitle: clamp(1rem, 2vw, 1.2rem), cream @80% opacity, weight 300
  - Two buttons: primary (gold) + outline (cream border)
- **Dots**: Bottom-center, active dot expands to pill shape in gold
- **Scroll hint**: Vertical text "Scroll" bottom-right, hidden on mobile

**Slide data:**
| # | Image (Unsplash) | Title | Italic | Subtitle |
|---|---|---|---|---|
| 1 | `photo-1495474472287` | Alma | Café | Donde cada taza es una historia… |
| 2 | `photo-1442512595331` | Origen | y Ritual | Granos de especialidad… |
| 3 | `photo-1501339847302` | Un Lugar | para Volver | Ambiente cálido… |

### 3. Quick Info Bar
- Dark mid-roast background, 3-column grid (collapses to 1 col on mobile)
- Each item: circular icon (42px, subtle bg), label (0.7rem muted uppercase), value (Cormorant 1rem)
- Items: Horarios · Ubicación · Ambiente
- Column dividers: `1px solid rgba(176,152,128,0.12)`

### 4. Nuestra Historia (About)
- 2-col grid: image left, text right (stacks on mobile)
- Image: 3:4 aspect ratio, `object-fit: cover`
- Badge: 100px circle, gold bg, espresso text — positioned `bottom: -24px; right: -24px`
- Stats row: 3 numbers (Cormorant 2.5rem gold) with labels below
- Scroll-triggered fade-up animations on all children

### 5. Menú (Tabbed)
- Dark-roast background section
- 4 tab categories: **Cafés · Fríos · Pastelería · Brunch**
- Active tab: cream text + gold 2px bottom border
- Card grid: `repeat(auto-fill, minmax(260px, 1fr))`
- **Menu card**:
  - Image: 200px height, zoom on hover (scale 1.07, 0.5s)
  - Tag: 0.65rem gold uppercase
  - Name: Cormorant 1.2rem cream
  - Description: 0.82rem muted, line-height 1.6
  - Footer: price (Cormorant 1.3rem gold) + "Pedir" ghost button

**All prices in ARS (pesos argentinos, IVA incluido):**

*Cafés:* Flat White $3.200 · Cortado de Avellana $3.800 · Pour Over Etiopía $4.500 · Espresso Clásico $1.900

*Fríos:* Cold Brew 24h $3.500 · Latte Tostado $4.200 · Matcha Latte $4.800 · Agua Tónica de Café $4.500

*Pastelería:* Roll de Canela $2.900 · Croissant de Almendras $2.700 · Cheesecake de Miso $3.400 · Tostada de Banana $3.100

*Brunch:* Eggs Benedict $7.800 · Tostada de Aguacate $6.500 · Bowl de Granola $5.900 · Pancakes de Ricotta $7.500

### 6. Galería
- 4×2 grid, `gap: 8px`, square cells (`aspect-ratio: 1`)
- Each cell: image fills, hover → scale(1.05) + dark overlay + Instagram icon
- 3-col on tablet, 2-col on mobile
- Section header centered: label + `@alma.cafe` as title

### 7. Testimonios
- Dark-roast background
- 3-col grid (1-col on mobile)
- Each card: gold stars · italic serif quote · avatar + name/location
- Card bg: mid-roast, 1px subtle border

**Testimonials:**
1. Sofía M. — "El mejor flat white de la ciudad…"
2. Rodrigo K. — "Vine por el café, me quedé por la pastelería…"
3. Valentina C. — "Oficina alternativa y café de especialidad…"

### 8. CTA Banner
- Full-bleed background image with fixed attachment (parallax)
- Overlay: `rgba(18,11,7,0.78)`
- Title + subtitle centered, max-width 600px
- Two buttons: WhatsApp (with WA icon) + "Reservar Mesa" outline

### 9. Footer (`id="contacto"`)
- 4-col grid (2-col tablet, 1-col mobile)
- Col 1: Logo + description + social icons (IG, FB, Twitter)
- Col 2: Menú links
- Col 3: Address, phone, email
- Col 4: Horarios + "Reservar mesa →" in gold
- Bottom bar: copyright + "Hecho con ♥ y mucho café"

---

## Interactions & Animations

| Interaction | Detail |
|---|---|
| Hero carousel | Auto 5s interval, crossfade 1.2s ease-in-out, dot nav |
| Scroll reveal | `IntersectionObserver` at 10–12% threshold → `.visible` class adds `opacity:1, translateY(0)`. Elements start `opacity:0, translateY(40px)`, transition 0.7s ease |
| Stagger | 4 stagger classes add `transition-delay: 0, 0.12s, 0.24s, 0.36s` |
| Nav shrink | Scroll >60px triggers compact nav with blur backdrop |
| Menu card hover | `translateY(-6px)` + deeper shadow + image scale(1.07) |
| WhatsApp FAB | Pulsing box-shadow animation (2.5s infinite), tooltip on hover |
| Mobile nav | Full-screen overlay slides in from right (`translateX(100% → 0)`) |

---

## WhatsApp Integration
- FAB links to: `https://wa.me/56912345678?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Alma%20Caf%C3%A9`
- CTA banner button links same URL
- Replace `56912345678` with actual business number

---

## Assets
All images are from Unsplash (free to use). In production, replace with actual café photography. Key image IDs used:
- Hero: `photo-1495474472287`, `photo-1442512595331`, `photo-1501339847302`
- About: `photo-1447933601403`
- Menu: various per-item Unsplash photos (see HTML source)
- Gallery: `photo-1554118811`, `photo-1600093463592`, `photo-1445116572660`, `photo-1507914997625`, `photo-1504753793650`, `photo-1463797221720`, `photo-1511081692775`, `photo-1575386619241`

---

## Contact Info (placeholder — replace with real data)
- Address: Av. Los Leones 1420, Providencia, Santiago
- Phone: +56 9 1234 5678
- Email: hola@almacafe.cl
- Hours: Lun–Vie 7:30–20:00 / Sáb 8:00–21:00 / Dom 8:00–20:00

---

## Files in This Package
| File | Description |
|---|---|
| `Cafeteria Landing.html` | Full self-contained hi-fi prototype (React + Babel inline) |
| `README.md` | This document |
