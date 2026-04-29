# Isla Aguada Glamping Co. — Official Website

> *Where the Jungle Meets the Sea*

A professional, multi-page luxury resort website for **Isla Aguada Glamping Co.**, a world-class glamping destination on the Gulf Coast of Campeche, Mexico.

**Live URL:** https://nwffobct.gensparkspace.com/

---

## Project Overview

| Field | Detail |
|-------|--------|
| Resort | Isla Aguada Glamping Co. |
| Location | Palmar Peninsula, Isla Aguada, Campeche, Mexico |
| Coordinates | 18°56′16.5″N · 91°18′24.7″W |
| Concept | 50 private luxury safari tents — 40 Standard Luxury + 10 Ultra VIP |
| Aesthetic | 1930s El Dorado / Lost City expedition romance |
| Opening | January 2028 |
| Email | islaglampingcompany@gmail.com |

---

## Pages & Entry Points

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Full-viewport jungle hero, icon pillars, features grid, preview gallery, CTA |
| The Vision | `vision.html` | Expedition concept, statistics, El Dorado aesthetic, location, philosophy |
| Accommodations | `accommodations.html` | Safari tent details, interior features, material specifications |
| Amenities | `amenities.html` | Guest services, shower pavilions, outdoor spa, Grand Reception, expeditions |
| Wellness & Longevity | `wellness.html` | Nutrition, Detox, Stem Cell, Regenerative Medicine, Spa, Mind & Movement |
| Dining & Beach | `dining.html` | Mas'Tul Bar & Restaurant, entertainment schedule, full menu, beach features |
| Master Plan | `masterplan.html` | Aerial site plan, zone breakdown, coordinates, Federal Highway 180 |
| Safety | `safety.html` | Zero hurricanes, crime safety, sargassum, 50-year interactive animation |
| Nature & Conservation | `nature.html` | Sea Turtle Sanctuary, Turtle Hospital, Laguna de Términos Biosphere Reserve |
| Sustainability | `sustainability.html` | Solar power, water conservation, carbon commitments, off-grid operations |
| Arrival | `arrival.html` | Transfer options, airport info, journey details |
| Contact & Reserve | `contact.html` | Reservation enquiry form, contact info, sidebar details |

---

## Completed Features

### Core Design
- 1930s safari/jungle expedition aesthetic (El Dorado / Lost City romance)
- Color palette: Jungle Green `#1a3a2a` · Aged Gold `#c9a84c` · Parchment `#faf0dc` · Dark Mahogany `#2c1810`
- Typography: **Cinzel** (headings) · **Libre Baskerville** (body) — Google Fonts
- Gold ornamental dividers and diamond separators throughout
- Pull quote sections on every page
- Semantic HTML5 throughout
- Active nav state on each page

### Navigation
- Two-row desktop navigation (logo row + links row)
- Hamburger mobile menu (≤ 900px) — three gold bars, dropdown on click
- Active link highlighting per page
- Consistent footer with full navigation list + location address

### Responsiveness (v3 — fully fixed)
- `css/responsive-patch.css` is the **single authoritative** responsive override file
- Hamburger navigation: works correctly on all screen sizes — removed conflicting old 768px nav rules from style.css
- No horizontal scroll or left-right page shifting — `overflow-x: hidden` on html/body
- All inline-style grids collapse gracefully at 900px (tablet) and 600px (mobile)
- iframe excluded from `max-width: 100%` rule so hurricane animation viewport works

### Safety Page — Hurricane Animation
- 50-year interactive hurricane animation embedded from MayaRoyale.com
- **Iframe viewport technique:** outer clip box (`overflow: hidden`, 510px height) + iframe shifted `top: -70px` to hide their nav bar
- Solid mahogany top mask (68px) with branded label replaces their header
- Solid mahogany bottom mask (52px) permanently hides their footer / "Connect Wallet" / links
- Left/right edge masks (8px) clean up side chrome
- All masks use `pointer-events: none` — animation remains fully interactive
- `.hurricane-viewport` CSS class for targeted responsive sizing

### Mayan Glyph Decoration System
- `css/mayan-glyphs.css` — base classes, opacity/color/size variants, borders, dividers, corners, watermarks
- `js/mayan-glyphs.js` — authentic stone-carved SVG glyphs (serpent, pyramid, sun wheel, jaguar eye, maize, hand, mask, solar eye, feather, spiral, cross-diamond)
- Applied site-wide on all 12 pages: pull quote watermarks, section dividers, border strips
- Stone/rustic carved look: sepia/weathered filter, high contrast, tactile appearance

### Contact Page
- Reservation enquiry form: First/Last Name, Email, Phone, Arrival/Departure dates, Guests, Tent Preference, Interests, Referral source
- Date validation: minimum arrival Jan 1 2028; departure auto-updates to be after arrival
- Reservation code generator: format `IAG-28-XXXXXX`
- Thank-you overlay with name, email, reservation code confirmation
- Sidebar: email, location, coordinates, opening date, tent availability, response time, reassurance strip
- **EmailJS / Formspree integration config removed** (deferred — form works in demo/display mode)

### Staff Images (all generated)
| File | Staff Member |
|------|-------------|
| `images/staff-concierge.jpg` | Welcome Concierge |
| `images/staff-spa-therapist.jpg` | Spa Therapist |
| `images/staff-jungle-guide.jpg` | Jungle Guide |
| `images/staff-nutritionist.jpg` | Nutritionist / Chef |
| `images/staff-bartender.jpg` | Bartender |
| `images/staff-laguna-guide.jpg` | Laguna & Beach Guide |

---

## File Structure

```
/
├── index.html              # Home
├── vision.html             # The Vision
├── accommodations.html     # Accommodations
├── amenities.html          # Amenities
├── wellness.html           # Wellness & Longevity
├── dining.html             # Dining & Beach
├── masterplan.html         # Master Plan
├── safety.html             # Safety & Security
├── nature.html             # Nature & Conservation
├── sustainability.html     # Sustainability
├── arrival.html            # Arrival & Getting Here
├── contact.html            # Contact & Reserve
├── css/
│   ├── style.css           # Main stylesheet (~2 000 lines)
│   ├── responsive-patch.css # Authoritative responsive overrides (v3)
│   └── mayan-glyphs.css    # Mayan decoration system
├── js/
│   └── mayan-glyphs.js     # Authentic stone-carved SVG glyphs
├── images/
│   ├── logo.png
│   ├── hero-jungle.jpg
│   ├── tent-exterior-day.jpg
│   ├── tent-exterior-sunset.jpg
│   ├── tent-interior.jpg
│   ├── guest-services-hut.jpg
│   ├── shower-pavilion.jpg
│   ├── grand-reception.jpg
│   ├── beach-bar.jpg
│   ├── aerial-site-plan.jpg
│   ├── staff-concierge.jpg
│   ├── staff-spa-therapist.jpg
│   ├── staff-jungle-guide.jpg
│   ├── staff-nutritionist.jpg
│   ├── staff-bartender.jpg
│   └── staff-laguna-guide.jpg
└── README.md
```

---

## Resort Data

| Metric | Value |
|--------|-------|
| Total Tents | 50 |
| Standard Luxury Tents | 40 |
| Ultra VIP Tents | 10 |
| Beach Frontage | Gulf of Mexico (North Shore) |
| Glamping Zone Depth | 2 km (jungle corridor) |
| Laguna Access | Laguna de Términos — UNESCO Biosphere Reserve |
| Reception Capacity | 100+ |
| Tent Platform Height | 3 feet elevated walkways |
| Hurricane Landfalls (recorded history) | 0 |
| Crime Ranking | Campeche = #1 safest state in Mexico |

---

## Not Yet Implemented / Deferred

| Feature | Status |
|---------|--------|
| EmailJS / Formspree reservation integration | Deferred — form runs in demo mode |
| Staff image placement on their respective pages | Pending (images exist, not yet inserted in HTML) |
| Lightbox photo gallery | Not started |
| Scroll animations (AOS) | Not started |
| Interactive satellite/embedded map | Not started |
| Blog / journal section | Not started |
| Open Graph / social meta tags | Not started |
| 404 error page | Not started |

---

## Recommended Next Steps

1. **Place staff images** on their respective pages (images already exist in `/images/`)
2. **Configure reservation form** — add real Formspree ID or EmailJS keys to contact.html `CONFIG` object when ready
3. **Add scroll animations** using AOS library (`data-aos` attributes)
4. **Lightbox gallery** on accommodations and amenities pages (Fancybox or GLightbox)
5. **Open Graph meta tags** for social sharing (`og:title`, `og:image`, `og:description`)
6. **Create 404.html** in resort aesthetic
7. **Consider video hero** for `index.html` when video assets are available

---

## Deployment

Use the **Publish tab** in the Genspark editor to deploy. All files are static HTML/CSS/JS — no server-side processing required.

---

*© 2025 Isla Aguada Glamping Co. — Campeche, Gulf of Mexico*
