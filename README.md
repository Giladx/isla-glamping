# Isla Aguada Glamping Co. — Official Website

> *Where the Jungle Meets the Sea*

A professional, multi-page luxury resort website for **Isla Aguada Glamping Co.**, a world-class glamping destination on the Gulf Coast of Campeche, Mexico.

---

## Project Overview

**Resort:** Isla Aguada Glamping Co.  
**Location:** Campeche, Gulf of Mexico, Mexico  
**Coordinates:** 18°56′16.5″N 91°18′24.7″W  
**Concept:** ~50 private luxury safari tents set within a pristine jungle corridor on Mexico's Gulf Coast, inspired by El Dorado / Lost City 1930s expedition aesthetics.

---

## Completed Features

### Pages
- **`index.html`** — Home page: Full-viewport hero with jungle background and centered logo, tagline "Where the Jungle Meets the Sea", eco/sustainability/glamping/Pueblo Mágico icon pillars, features grid, preview gallery, pull quote, CTA strip
- **`vision.html`** — The Vision: Expedition concept story, statistics, El Dorado aesthetic, location analysis, philosophy pillars, resort component list
- **`accommodations.html`** — Accommodations: Tent exterior (day), tent exterior (sunset), full-width tent interior treatment, feature specifications, material details
- **`amenities.html`** — Amenities: Guest services hut, private shower pavilion, outdoor spa experience (6 tiles), service features strip, Grand Reception full treatment with specifications, complete amenity listing, expeditions & activities
- **`wellness.html`** — Wellness & Longevity: Six pillar intro (Nutrition, Detox, Stem Cell, Functional Medicine, Spa, Mind & Movement), full Nutrition Therapy section (5 components with tags), Detox Programmes (3/7/14/21-day protocols + 6 modalities), Stem Cell & Regenerative Medicine (6 treatments: stem cells, NAD⁺, peptides, IV nutrients, hormone optimisation, ozone), Nutrition Activities (6 classes/workshops), 8 Specialised Nutrition Approaches, full Wellness Package inclusions grid
- **`dining.html`** — Dining & Beach: Mas'Tul Bar & Restaurant, Thu–Sat full spectacle / Sun–Wed chill schedule, farm-to-fork Produce Paradise, random entertainment (sax, wandering singer, Mayan parade), full menu, beach features
- **`masterplan.html`** — Master Plan: Aerial site plan image, dual-zone breakdown, measurements, coordinates, Federal Highway 180 context
- **`safety.html`** — Safety: Zero hurricanes, lowest crime rate, COVID Green status, sargassum guarantee, interactive 50-year hurricane animation, comparison table
- **`nature.html`** — Nature & Conservation: Sea Turtle Sanctuary, onsite Turtle Hospital (federal partnership), zero coastal erosion, flora & fauna, Laguna de Términos Biosphere Reserve, Conservation Pledge
- **`sustainability.html`** — Sustainability: Solar power farm, full energy independence, water conservation, waste management, carbon commitments
- **`arrival.html`** — Arrival: Transfer options, journey details, Campeche airport info

### Design & Technical
- Fully responsive layout (mobile, tablet, desktop)
- Fixed navigation bar with mobile hamburger menu
- `css/style.css` — Single shared stylesheet (~700 lines)
- **Color palette:**
  - Deep Jungle Green: `#1a3a2a`
  - Aged Gold: `#c9a84c`
  - Parchment Cream: `#faf0dc`
  - Dark Mahogany: `#2c1810`
- **Typography:**
  - Headings: Cinzel (Google Fonts)
  - Body: Libre Baskerville (Google Fonts)
- 1930s safari/jungle expedition aesthetic
- No glass overlays or frosted effects
- Semantic HTML5 throughout
- Active nav state on each page
- Consistent footer across all pages
- Pull quote sections throughout
- Gold ornamental dividers

### Images Used
| File | Purpose |
|------|---------|
| `images/hero-jungle.jpg` | Home hero & Vision page hero background |
| `images/logo.png` | Navigation, hero, footer |
| `images/tent-exterior-day.jpg` | Accommodations page, home preview card |
| `images/tent-exterior-sunset.jpg` | Accommodations page, Vision page feature |
| `images/tent-interior.jpg` | Accommodations full-width interior feature |
| `images/guest-services-hut.jpg` | Amenities page |
| `images/shower-pavilion.jpg` | Amenities page |
| `images/grand-reception.jpg` | Amenities page hero & full section, home preview |
| `images/beach-bar.jpg` | Dining page hero & full section, home preview |
| `images/aerial-site-plan.jpg` | Master Plan page (hero, main image, detail) |

---

## File Structure

```
/
├── index.html              # Home page
├── vision.html             # The Vision page
├── accommodations.html     # Accommodations page
├── amenities.html          # Amenities page
├── dining.html             # Dining & Beach page
├── masterplan.html         # Master Plan page
├── css/
│   └── style.css           # Shared main stylesheet
├── images/
│   ├── hero-jungle.jpg
│   ├── logo.png
│   ├── tent-exterior-day.jpg
│   ├── tent-exterior-sunset.jpg
│   ├── tent-interior.jpg
│   ├── guest-services-hut.jpg
│   ├── shower-pavilion.jpg
│   ├── grand-reception.jpg
│   ├── beach-bar.jpg
│   └── aerial-site-plan.jpg
└── README.md
```

---

## Navigation Structure

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Hero, features, preview gallery |
| The Vision | `vision.html` | Resort concept and location |
| Accommodations | `accommodations.html` | Safari tent details |
| Amenities | `amenities.html` | Services, reception, facilities |
| **Wellness & Longevity** | **`wellness.html`** | **Nutrition, Detox, Stem Cell, Regenerative Medicine** |
| Dining & Beach | `dining.html` | Beach bar & restaurant |
| Master Plan | `masterplan.html` | Aerial site plan, dimensions |
| Safety | `safety.html` | Hurricane/crime/health safety data |
| Nature & Conservation | `nature.html` | Turtles, wildlife, coastal preservation |
| Sustainability | `sustainability.html` | Solar, water, carbon commitments |
| Arrival | `arrival.html` | Transfer and journey information |

---

## Resort Data Highlights

| Metric | Value |
|--------|-------|
| Private Tents | ~50 |
| Beach Zone | 60m × 100m |
| Glamping Zone | 60m × 1,000m |
| Total Site Area | ~66,000 m² |
| Reception Capacity | 100+ |
| Tent Platform Height | 3 feet |
| Highway Division | Federal Highway 180 |

---

## Features Not Yet Implemented

- Enquiry / contact form
- Interactive map/satellite view of the site
- Photo gallery lightbox
- Pricing/availability information
- Booking integration
- Blog / journal section
- Animation on scroll (AOS library)
- Social media links

---

## Recommended Next Steps

1. **Add a Contact / Enquiry page** with a form for reservation enquiries
2. **Integrate a lightbox gallery** on each image-heavy page (Fancybox or similar)
3. **Add scroll animations** (AOS library) for section reveals
4. **Embed interactive satellite map** for the master plan page
5. **Add a Blog/Journal section** for expedition stories and resort news
6. **Create a 404 error page** in the resort aesthetic
7. **Add Open Graph / social meta tags** for sharing optimization
8. **Consider video background** for the hero section when video assets are available

---

## Deployment

To publish this website, use the **Publish tab** in the project interface. All files are static HTML/CSS and require no server-side processing.

---

*© 2025 Isla Aguada Glamping Co. — Campeche, Gulf of Mexico*
# isla-glamping
