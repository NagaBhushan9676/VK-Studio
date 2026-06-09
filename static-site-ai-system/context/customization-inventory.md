# Customization Inventory — Antra Template
## Single Source of Truth for All Replaceable Content

> **How agents use this file:**
> - Every item has an `ID` used in commit messages and change logs
> - `AFFECTS` lists every HTML file containing that element
> - `AGENT` specifies which agent is responsible
> - Items marked ⚠️ are **bugs in the original template** — fix during customization
> - Items marked 🔁 are **repeated across all 35 pages** — one edit must be replicated everywhere
> - The `YOUR VALUE` column is blank — fill it in `business-requirements.md`, then agents read both files together
>
> **Asset naming convention (from client uploads):**
> When the client sends files using the intake guide (`client-intake/website-content-checklist.html`),
> each file is named with its inventory ID prefix, e.g. `G-005-logo-dark.png`, `H-001-hero-slide-1.jpg`.
> Agents must parse the filename prefix to determine the inventory item and destination path automatically.
> Pattern: `[INVENTORY-ID]-[descriptive-name].[ext]` — the ID portion before the first `-[a-z]` is the key.

---

## Legend

| Symbol | Meaning |
|---|---|
| 🔁 | Repeated on every page (35 HTML files) — edit all at once |
| ⚠️ | Bug in original template — must fix |
| 🎨 | Design token — edit via SCSS, not HTML |
| 🖼️ | Image asset — edit via Asset Manager |
| 📝 | Text content — edit via Content Writer |
| 🔗 | Link href — edit via Content Writer (contact/social hrefs) |
| 🔍 | SEO metadata — edit via SEO Optimizer |

---

## SECTION 1 — GLOBAL ELEMENTS
*These elements appear identically on all 35 HTML pages. One change must be replicated across all files.*

### 1.1 — Head / Meta

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-001 | Page `<title>` 🔁 🔍 | `<head> > <title>` | `Antra - Architecture & Interior Design HTML Template` | _(fill in business-requirements.md)_ | All 35 pages | SEO Optimizer |
| G-002 | Meta description 🔁 🔍 | `<meta name="description">` | _(empty string `""`)_ | _(fill in business-requirements.md)_ | All 35 pages | SEO Optimizer |
| G-003 | Favicon 🔁 🖼️ | `<link rel="shortcut icon" href="assets/img/favicon.png">` | `assets/img/favicon.png` _(template placeholder)_ | _(client favicon)_ | All 35 pages | Asset Manager |

---

### 1.2 — Preloader

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-004 | Preloader brand name 🔁 📝 | `.site-name > span` | `ANTRA` | _(client brand name in ALL CAPS)_ | All 35 pages | Content Writer |

> **Note:** This text animates on page load via GSAP. Keep ALL CAPS format.

---

### 1.3 — Header (Desktop)

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-005 | Header logo 🔁 🖼️ | `.header-logo img[src]` | `assets/img/logo/logo-2.png` | _(logo on dark bg)_ | All 35 pages | Asset Manager |
| G-006 | Header logo alt 🔁 📝 | `.header-logo img[alt]` | `logo` | _(business name)_ | All 35 pages | Content Writer |
| G-007 | Header phone display 🔁 📝 | `.header-contact .call-number` | `(+480) 123 678 900` | _(real phone)_ | All 35 pages | Content Writer |
| G-008 | Header phone href 🔁 🔗 | `.header-contact[href]` | `tel:+480123678900` | `tel:[real number]` | All 35 pages | Content Writer |
| G-009 | Header phone label 🔁 📝 | `.header-contact .call-text` | `Call Us Phone` | _(e.g. "Call Us")_ | All 35 pages | Content Writer |
| G-010 | Header CTA button 🔁 📝 | `.header-btn-wrap .header-btn` | `Get in Touch` | _(e.g. "Book a Call")_ | All 35 pages | Content Writer |

---

### 1.4 — Off-Canvas Sidebar (Desktop)

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-011 | Sidebar logo dark 🔁 🖼️ | `.side-menu-logo .dark-img img[src]` | `assets/img/logo/logo-2.png` | _(logo on dark bg)_ | All 35 pages | Asset Manager |
| G-012 | Sidebar logo light 🔁 🖼️ | `.side-menu-logo .light-img img[src]` | `assets/img/logo/logo-1.png` | _(logo on light bg)_ | All 35 pages | Asset Manager |
| G-013 | Sidebar about blurb 🔁 📝 | `.side-menu-about .title` | `We Shape Interior Designs, Crafting Timeless and Inspiring Spaces` | _(one-line brand promise)_ | All 35 pages | Content Writer |
| G-014 | Sidebar gallery image 1 🔁 🖼️ | `.side-menu-gallary-item:nth-child(1) img[src]` | `assets/img/project/sidebar-gallary-1.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-015 | Sidebar gallery image 2 🔁 🖼️ | `.side-menu-gallary-item:nth-child(2) img[src]` | `assets/img/project/sidebar-gallary-2.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-016 | Sidebar gallery image 3 🔁 🖼️ | `.side-menu-gallary-item:nth-child(3) img[src]` | `assets/img/project/sidebar-gallary-3.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-017 | Sidebar gallery image 4 🔁 🖼️ | `.side-menu-gallary-item:nth-child(4) img[src]` | `assets/img/project/sidebar-gallary-4.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-018 | Sidebar gallery image 5 🔁 🖼️ | `.side-menu-gallary-item:nth-child(5) img[src]` | `assets/img/project/sidebar-gallary-5.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-019 | Sidebar gallery image 6 🔁 🖼️ | `.side-menu-gallary-item:nth-child(6) img[src]` | `assets/img/project/sidebar-gallary-6.png` | _(project photo)_ | All 35 pages | Asset Manager |
| G-020 | Sidebar address 🔁 📝 | `.side-menu-contact .side-menu-list li:first-child` | `5609 E Sprague Ave, Spokane Valley, WA 99212, USA` | _(real address)_ | All 35 pages | Content Writer |
| G-021 | Sidebar phone text 🔁 📝 | `.side-menu-contact a[href^="tel"]` text | `+(084) 456-0789` | _(real phone)_ | All 35 pages | Content Writer |
| G-022 | Sidebar phone href 🔁 🔗 | `.side-menu-contact a[href^="tel"]` | `tel:+0844560789` | `tel:[real number]` | All 35 pages | Content Writer |
| G-023 | Sidebar email text 🔁 📝 | `.side-menu-contact .mail` text | `support@example.com` | _(real email)_ | All 35 pages | Content Writer |
| G-024 | Sidebar email href 🔁 🔗 | `.side-menu-contact .mail[href]` | `mailto:support@example.com` | `mailto:[real email]` | All 35 pages | Content Writer |
| G-025 | Sidebar Facebook href 🔁 🔗 | `.side-menu-social .facebook a[href]` | `#` | _(Facebook page URL)_ | All 35 pages | Content Writer |
| G-026 | Sidebar Instagram href 🔁 🔗 | `.side-menu-social .instagram a[href]` | `#` | _(Instagram profile URL)_ | All 35 pages | Content Writer |
| G-027 | Sidebar Twitter href 🔁 🔗 | `.side-menu-social .twitter a[href]` | `#` | _(Twitter/X profile URL)_ | All 35 pages | Content Writer |
| G-028 | Sidebar Google+ href 🔁 🔗 | `.side-menu-social .g-plus a[href]` | `#` | _(remove or replace with LinkedIn)_ | All 35 pages | Content Writer |

---

### 1.5 — Mobile Side Menu

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-029 | Mobile menu logo 🔁 🖼️ | `.mobile-side-menu .side-menu-head img[src]` | `assets/img/logo/logo-2.png` | _(logo file)_ | All 35 pages | Asset Manager |
| G-030 | Mobile menu address 🔁 📝 ⚠️ | `.mobile-side-menu .side-menu-list li:first-child p` | `Valentin, Street Road 24, New York,` | _(real address — **INCONSISTENT WITH SIDEBAR**)_ | All 35 pages | Content Writer |
| G-031 | Mobile menu phone text 🔁 📝 ⚠️ | `.mobile-side-menu a[href^="tel"]` text | `+000 123 (456) 789` | _(real phone — **DIFFERENT FROM HEADER**)_ | All 35 pages | Content Writer |
| G-032 | Mobile menu phone href 🔁 🔗 ⚠️ | `.mobile-side-menu a[href^="tel"]` | `tel:+000123456789` | `tel:[real number]` | All 35 pages | Content Writer |
| G-033 | Mobile menu email text 🔁 📝 ⚠️ | `.mobile-side-menu a[href^="mailto"]` text | `antra@gmail.com` | _(real email — **DIFFERENT FROM SIDEBAR**)_ | All 35 pages | Content Writer |
| G-034 | Mobile menu email href 🔁 🔗 ⚠️ | `.mobile-side-menu a[href^="mailto"]` | `mailto:antra@gmail.com` | `mailto:[real email]` | All 35 pages | Content Writer |
| G-035 | Mobile menu Facebook href 🔁 🔗 | `.mobile-side-menu .facebook a[href]` | `#` | _(Facebook URL)_ | All 35 pages | Content Writer |
| G-036 | Mobile menu Instagram href 🔁 🔗 | `.mobile-side-menu .instagram a[href]` | `#` | _(Instagram URL)_ | All 35 pages | Content Writer |
| G-037 | Mobile menu Twitter href 🔁 🔗 | `.mobile-side-menu .twitter a[href]` | `#` | _(Twitter URL)_ | All 35 pages | Content Writer |

---

### 1.6 — Footer

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-038 | Footer background 🔁 🖼️ | `.footer-section .footer-bg[data-background]` | `assets/img/bg-img/footer-bg.png` | _(real footer background or keep)_ | All 35 pages | Asset Manager |
| G-039 | Footer logo 🔁 🖼️ | `.footer-logo img[src]` | `assets/img/logo/logo-2.png` | _(logo file)_ | All 35 pages | Asset Manager |
| G-040 | Footer tagline 🔁 📝 | `.footer-widget > p:first-of-type` | `We transform your vision into beautifully crafted spaces.` | _(brand promise)_ | All 35 pages | Content Writer |
| G-041 | Footer address 🔁 📝 | `.footer-widget > p:last-of-type` | `5609 E Sprague Ave, Spokane Valley, WA 99212, USA` | _(real address)_ | All 35 pages | Content Writer |
| G-042 | Footer phone text 🔁 📝 | `.footer-address .number` text | `+(084) 456-0789` | _(real phone)_ | All 35 pages | Content Writer |
| G-043 | Footer phone href 🔁 🔗 | `.footer-address .number[href]` | `tel:+0844560789` | `tel:[real number]` | All 35 pages | Content Writer |
| G-044 | Footer email text 🔁 📝 ⚠️ | `.footer-address .mail` text | `support@example.com` | _(real email)_ | All 35 pages | Content Writer |
| G-045 | Footer email href 🔁 🔗 ⚠️ | `.footer-address .mail[href]` | `tel:` **(BUG — should be `mailto:`)** | `mailto:[real email]` | All 35 pages | Content Writer |
| G-046 | Footer Facebook href 🔁 🔗 | `.social-list li:nth-child(1) a[href]` | `#` | _(Facebook URL)_ | All 35 pages | Content Writer |
| G-047 | Footer Instagram href 🔁 🔗 | `.social-list li:nth-child(2) a[href]` | `#` | _(Instagram URL)_ | All 35 pages | Content Writer |
| G-048 | Footer YouTube href 🔁 🔗 | `.social-list li:nth-child(3) a[href]` | `#` | _(YouTube channel URL or remove)_ | All 35 pages | Content Writer |
| G-049 | Footer Twitter href 🔁 🔗 | `.social-list li:nth-child(4) a[href]` | `#` | _(Twitter/X URL)_ | All 35 pages | Content Writer |
| G-050 | Footer copyright year 🔁 📝 | `.copyright-content p` | `© 2025 antra. All Rights Reserved.` | `© [YEAR] [Business Name]. All Rights Reserved.` | All 35 pages | Content Writer |

---

### 1.7 — Navigation Menu

| ID | Element | Location (selector) | Current Template Value | YOUR VALUE | Affects | Agent |
|---|---|---|---|---|---|---|
| G-051 | "Home" mega-menu label 🔁 📝 | `.mobile-menu-items > li:first-child > a` | `Home` | Keep or simplify to single entry | All 35 pages | Content Writer |
| G-052 | Home sub-items 🔁 📝 | `.mobile-menu-items li.menu-item-has-children:first-child ul` | 9 variants listed (Home One–Nine) | Simplify to client's chosen variant only | All 35 pages | Content Writer |
| G-053 | Services nav label 🔁 📝 | `li > a[href="service.html"]` parent | `Services` | Keep or rename | All 35 pages | Content Writer |
| G-054 | Pages nav label 🔁 📝 | `li > a[href="#"]:contains("Pages")` | `Pages` | Rename or remove unused sub-pages | All 35 pages | Content Writer |
| G-055 | Blog nav label 🔁 📝 | `li > a[href="blog-grid.html"]` parent | `Blog` | Keep or remove if no blog | All 35 pages | Content Writer |
| G-056 | Contact nav label 🔁 📝 | `li > a[href="contact.html"]` | `Contact` | Keep | All 35 pages | Content Writer |

---

## SECTION 2 — DESIGN TOKENS
*Edit ONLY via SCSS files — never in HTML. Run `npm run sass` after any change.*

| ID | Token | SCSS File | SCSS Variable | Current Value | CSS Variable Generated | YOUR VALUE |
|---|---|---|---|---|---|---|
| D-001 | Primary accent color 🎨 | `utilities/_colors.scss` | `$colors > "theme" > "primary"` | `#CAA05C` (gold/bronze) | `--tl-color-theme-primary` | _(hex from branding.md)_ |
| D-002 | Heading color 🎨 | `utilities/_colors.scss` | `$colors > "heading" > "primary"` | `#191919` (near black) | `--tl-color-heading-primary` | _(keep or change)_ |
| D-003 | Body text color 🎨 | `utilities/_colors.scss` | `$colors > "text" > "body"` | `#4D4D52` (dark grey) | `--tl-color-text-body` | _(keep or change)_ |
| D-004 | Page background 🎨 | `utilities/_colors.scss` | `$colors > "bg" > "1"` | `#1C1C1D` (near black) | `--tl-color-bg-1` | _(keep or change)_ |
| D-005 | Heading font 🎨 | `utilities/_typography.scss` | `$font-family > "ff" > "heading"` | `'Cal Sans', serif` | `--tl-ff-heading` | _(Google Fonts name from branding.md)_ |
| D-006 | Body font 🎨 | `utilities/_typography.scss` | `$font-family > "ff" > "body"` | `'Golos Text', sans-serif` | `--tl-ff-body` | _(Google Fonts name from branding.md)_ |
| D-007 | Google Fonts URL 🎨 | `utilities/_typography.scss` | `$font-url` | `Cal Sans + Golos Text` Google Fonts URL | _(loaded in compiled CSS)_ | _(update if changing fonts)_ |

---

## SECTION 3 — HOMEPAGE (`index.html`)

### 3.1 — Hero Slider

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-001 | Slide 1 background 🖼️ | `.swiper-slide:nth-child(1) .bg-img[data-background]` | `assets/img/bg-img/slider-img-1.png` | _(hero photo 1, 1920×1080)_ | DO NOT remove `data-background` |
| H-002 | Slide 2 background 🖼️ | `.swiper-slide:nth-child(2) .bg-img[data-background]` | `assets/img/bg-img/slider-img-2.png` | _(hero photo 2, 1920×1080)_ | |
| H-003 | Slide 1 sub-heading 📝 | `.swiper-slide:nth-child(1) .sub-heading` | `FAST AND RELIABLE` | _(brand tagline, ALL CAPS)_ | |
| H-004 | Slide 1 headline 📝 | `.swiper-slide:nth-child(1) .section-title` | `The Art of Stunning Interior Design` | _(hero headline)_ | Preserve `<br>` tags |
| H-005 | Slide 1 body text 📝 | `.swiper-slide:nth-child(1) .antra-desc p` | `Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.` | _(2–3 sentence intro)_ | Preserve `<br>` tags |
| H-006 | Slide 1 CTA button 📝 | `.swiper-slide:nth-child(1) .tl-primary-btn` | `Take counsel` | _(action CTA e.g. "Book a Consultation")_ | Keep `<span class="icon">` |
| H-007 | Slide 1 stat number 📝 | `.swiper-slide:nth-child(1) .element-title` | `260+` | _(real stat number)_ | |
| H-008 | Slide 1 stat label 📝 | `.swiper-slide:nth-child(1) .slider-element > span` | `Successful projects and counting` | _(stat label)_ | |
| H-009 | Slide 1 services text 📝 | `.swiper-slide:nth-child(1) .slider-element > p` | `Tech Specifications / Design Project / 3D visualisation` | _(3 services, one per line)_ | Keep `<br>` tags |
| H-010 | Slide 1 thumb image 🖼️ | `.swiper-slide:nth-child(1) .slider-thumb img[src]` | `assets/img/images/slider-thumb-1.png` | _(portrait/detail image, ~400×500px)_ | |
| H-011 | Slide 2 sub-heading 📝 ⚠️ | `.swiper-slide:nth-child(2) .sub-heading` | `FAST AND RELIABLE` | _(different tagline for slide 2)_ | **Same as slide 1 — should differ** |
| H-012 | Slide 2 headline 📝 ⚠️ | `.swiper-slide:nth-child(2) .section-title` | `The Art of Stunning Interior Design` | _(different headline)_ | **Identical to slide 1** |

---

### 3.2 — Services Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-013 | Section sub-heading 📝 | `.service-section .sub-heading` | `WHO We Are` | _(e.g. "WHAT WE OFFER")_ | |
| H-014 | Section headline 📝 | `.service-section .section-title` | `Experience the art of Interior Design` | _(services section headline)_ | Preserve `<span>` |
| H-015 | Section body 📝 | `.service-section .section-heading-2 p` | `We specialize in transforming visions into reality...` | _(2–3 sentence intro)_ | |
| H-016 | Service 1 name 📝 | `.service-item:nth-child(1) .title a` | `Architectural Design` | _(real service name)_ | |
| H-017 | Service 1 icon 🖼️ | `.service-item:nth-child(1) .icon img[src]` | `assets/img/icon/service-icon-1.png` | _(icon file or keep)_ | 60×60px recommended |
| H-018 | Service 1 description 📝 | `.service-item:nth-child(1) p` | `Dream it, we'll design it! From big picture layouts to the tiniest details...` | _(real 2-sentence description)_ | |
| H-019 | Service 2 name 📝 | `.service-item:nth-child(2) .title a` | `Interior Design & Planning` | | |
| H-020 | Service 2 icon 🖼️ | `.service-item:nth-child(2) .icon img[src]` | `assets/img/icon/service-icon-2.png` | | |
| H-021 | Service 2 description 📝 ⚠️ | `.service-item:nth-child(2) p` | `Dream it, we'll design it!...` | | **Identical to service 1** |
| H-022 | Service 3 name 📝 | `.service-item:nth-child(3) .title a` | `Consulting Services` | | |
| H-023 | Service 3 icon 🖼️ | `.service-item:nth-child(3) .icon img[src]` | `assets/img/icon/service-icon-3.png` | | |
| H-024 | Service 3 description 📝 ⚠️ | `.service-item:nth-child(3) p` | `Dream it, we'll design it!...` | | **Identical** |
| H-025 | Service 4 name 📝 | `.service-item:nth-child(4) .title a` | `Project Management` | | |
| H-026 | Service 4 icon 🖼️ | `.service-item:nth-child(4) .icon img[src]` | `assets/img/icon/service-icon-4.png` | | |
| H-027 | Service 4 description 📝 ⚠️ | `.service-item:nth-child(4) p` | `Dream it, we'll design it!...` | | **Identical** |

---

### 3.3 — About Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-028 | Section background 🖼️ | `.about-section .about-bg[data-background]` | `assets/img/bg-img/about-bg.png` | _(background image, 1920×800px)_ | |
| H-029 | Sub-heading 📝 | `.about-section .sub-heading` | `Started In 1991` | _(founding year e.g. "Since 2009")_ | |
| H-030 | Headline 📝 | `.about-section .section-title` | `Where Spaces Inspire, and Design Comes Alive` | _(about headline)_ | Preserve `<span>` and `<br>` |
| H-031 | List item 1 📝 | `.about-list li:nth-child(1)` text | `Latest technologies` | _(real differentiator)_ | Keep `<img>` at start |
| H-032 | List item 2 📝 | `.about-list li:nth-child(2)` text | `High-Quality Designs` | _(real differentiator)_ | |
| H-033 | List item 3 📝 | `.about-list li:nth-child(3)` text | `5 Years Warranty` | _(real differentiator)_ | |
| H-034 | List item 4 📝 | `.about-list li:nth-child(4)` text | `Residential Design` | _(real differentiator)_ | |
| H-035 | Body paragraph 📝 | `.about-content > p` | `Whether it's your home, office, or a commercial project...` | _(real about paragraph)_ | |
| H-036 | CTA button 📝 | `.about-btn .tl-primary-btn` | `More About Us` | _(keep or rephrase)_ | |
| H-037 | About image 🖼️ | `.about-img img[src]` | `assets/img/images/about-img-1.png` | _(about/team photo, 700×850px)_ | |

---

### 3.4 — Services Feature List

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-038 | Section sub-heading 📝 ⚠️ | `.feature-section .sub-heading` | `WHO We Are` | _(e.g. "OUR EXPERTISE")_ | Same as services section — should differ |
| H-039 | Section headline 📝 | `.feature-section .section-title` | `Explore our comprehensive interior design services` | _(feature section headline)_ | |
| H-040 | Feature 1 name 📝 | `.feature-item:nth-child(1) .title a` | `Residential Interior Design` | _(service name)_ | |
| H-041 | Feature 1 hover image 🖼️ | `.feature-item:nth-child(1)[data-img]` | `assets/img/service/feature-img-1.png` | _(service image, 700×480px)_ | `data-img` attr — update both |
| H-042 | Feature 1 hover text 📝 | `.feature-item:nth-child(1)[data-text]` | `Tailored design services for private homes...` | _(service description)_ | `data-text` attr |
| H-043 | Feature default image 🖼️ | `.feature-img img[src]` | `assets/img/service/feature-img-1.png` | _(matches feature 1)_ | Must match feature 1 |
| H-044 | Feature default text 📝 | `.feature-img .img-content p` | `Tailored design services for private homes...` | _(matches feature 1)_ | Must match feature 1 |
| H-045 | Feature 2 name 📝 | `.feature-item:nth-child(2) .title a` | `Commercial Interior Design` | | |
| H-046 | Feature 2 hover image 🖼️ | `.feature-item:nth-child(2)[data-img]` | `assets/img/service/feature-img-2.png` | | |
| H-047 | Feature 3 name 📝 | `.feature-item:nth-child(3) .title a` | `Interior Design Consultation` | | |
| H-048 | Feature 3 hover image 🖼️ | `.feature-item:nth-child(3)[data-img]` | `assets/img/service/feature-img-3.png` | | |
| H-049 | Feature 4 name 📝 | `.feature-item:nth-child(4) .title a` | `Outdoor & Landscape Design` | | |
| H-050 | Feature 4 hover image 🖼️ | `.feature-item:nth-child(4)[data-img]` | `assets/img/service/feature-img-4.png` | | |
| H-051 | Feature 5 name 📝 | `.feature-item:nth-child(5) .title a` | `Renovation and Remodeling` | | |
| H-052 | Feature 5 hover image 🖼️ | `.feature-item:nth-child(5)[data-img]` | `assets/img/service/feature-img-5.png` | | |

---

### 3.5 — Counters Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-053 | Counter image 🖼️ | `.counter-element img[src]` | `assets/img/images/counter-img-1.png` | _(decorative image or keep)_ | |
| H-054 | Counter 1 number 📝 | `.counter-item:nth-child(1) [data-count]` | `22` | _(real number — update `data-count` value)_ | Also update the `data-count` attribute |
| H-055 | Counter 1 label 📝 | `.counter-item:nth-child(1) .sub-title` | `Years experience` | _(real label)_ | |
| H-056 | Counter 1 description 📝 ⚠️ | `.counter-item:nth-child(1) p` | `Improving homes with expert craftsmanship for years` | _(unique 1-sentence description)_ | **Identical x4 — all need unique text** |
| H-057 | Counter 2 number 📝 | `.counter-item:nth-child(2) [data-count]` | `189` | _(real number)_ | Update `data-count` attribute too |
| H-058 | Counter 2 label 📝 | `.counter-item:nth-child(2) .sub-title` | `Projects completed` | | |
| H-059 | Counter 2 description 📝 ⚠️ | `.counter-item:nth-child(2) p` | `Improving homes with expert craftsmanship for years` | _(unique)_ | **Identical** |
| H-060 | Counter 3 number 📝 | `.counter-item:nth-child(3) [data-count]` | `265` | _(real number)_ | |
| H-061 | Counter 3 label 📝 | `.counter-item:nth-child(3) .sub-title` | `Skilled Tradespeople` | | |
| H-062 | Counter 4 number 📝 | `.counter-item:nth-child(4) [data-count]` | `328` | _(real number)_ | |
| H-063 | Counter 4 label 📝 | `.counter-item:nth-child(4) .sub-title` | `Client satisfaction` | | |

> ⚠️ **Counter `data-count` attributes**: These drive the Odometer animation. When you update the visible text number, you MUST also update the `data-count="[number]"` attribute on the `.odometer` span — otherwise the animation will count to the old number.

---

### 3.6 — Process Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-064 | Section sub-heading 📝 | `.process-section .sub-heading` | `How We Work` | _(e.g. "OUR PROCESS")_ | |
| H-065 | Section headline 📝 | `.process-section .section-title` | `Description Architecture process for exceptional results.` | _(process headline)_ | |
| H-066 | Section description 📝 | `.process-desc p` | `Our process is alive - adapting, refining, and growing with your vision...` | _(supporting paragraph)_ | |
| H-067 | Step 1 title 📝 | `.process-item:nth-child(1) .title` | `01. Initial Consultation` | _(keep number, change title)_ | Keep `<span>01</span>` |
| H-068 | Step 1 image 🖼️ | `.process-item:nth-child(1) .process-thumb img[src]` | `assets/img/images/process-img-1.png` | _(process step image)_ | |
| H-069 | Step 1 body 📝 ⚠️ | `.process-item:nth-child(1) p` | `We begin by understanding your vision, goals, and needs, followed Antra.` | _(real description — **contains "Antra" brand name**)_ | Fix incomplete sentence |
| H-070 | Step 2 title 📝 | `.process-item:nth-child(2) .title` | `02. Design & Planning` | | |
| H-071 | Step 2 image 🖼️ | `.process-item:nth-child(2) .process-thumb img[src]` | `assets/img/images/process-img-2.png` | | |
| H-072 | Step 2 body 📝 ⚠️ | `.process-item:nth-child(2) p` | `We begin by understanding your vision, goals, and needs, followed Antra.` | _(unique — **identical to step 1**)_ | |
| H-073 | Step 3 title 📝 | `.process-item:nth-child(3) .title` | `03. Implementation` | | |
| H-074 | Step 4 title 📝 | `.process-item:nth-child(4) .title` | `04. Project Handover` | | |
| H-075 | Bottom CTA text 📝 | `.process-text .bottom-text` | `We've been working hard to impress you.` + link `Start your's today` | _(update text + fix grammar "your's" → "yours")_ | Fix typo |

---

### 3.7 — Portfolio / Projects Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-076 | Section sub-heading 📝 | `.project-section .sub-heading` | `Our Projects` | | |
| H-077 | Section headline 📝 | `.project-section .section-title` | `Creative projects that define our style` | | Preserve `<span>` |
| H-078 | Project 1 image 🖼️ | `.project-item:nth-child(1) img[src]` | `assets/img/project/project-img-1.png` | _(real project photo, 800×600px)_ | |
| H-079 | Project 1 category 1 📝 | `.project-item:nth-child(1) ul li:first-child a` | `Residential` | _(project type)_ | |
| H-080 | Project 1 category 2 📝 | `.project-item:nth-child(1) ul li:last-child a` | `Single Home` | _(sub-type)_ | |
| H-081 | Project 1 name 📝 | `.project-item:nth-child(1) .title a` | `Luxury Skyline` | _(real project name)_ | |
| H-082 | Project 1 location + year 📝 | `.project-item:nth-child(1) span` | `Berlin, Germany / 2025` | _(real location + year)_ | Keep `<br>` tag |
| H-083 | Project 2 image 🖼️ | `.project-item:nth-child(2) img[src]` | `assets/img/project/project-img-2.png` | | |
| H-084 | Project 2 name 📝 | `.project-item:nth-child(2) .title a` | `Bohemian Rhapsody` | | |
| H-085 | Project 3 image 🖼️ | `.project-item:nth-child(3) img[src]` | `assets/img/project/project-img-3.png` | | |
| H-086 | Project 3 name 📝 | `.project-item:nth-child(3) .title a` | `Vintage Glamour` | | |
| H-087 | Project 4 image 🖼️ | `.project-item:nth-child(4) img[src]` | `assets/img/project/project-img-4.png` | | |
| H-088 | Project 4 name 📝 | `.project-item:nth-child(4) .title a` | `Titan Office Interior` | | |
| H-089 | Project 5 image 🖼️ | `.project-item:nth-child(5) img[src]` | `assets/img/project/project-img-5.png` | | |
| H-090 | Project 5 name 📝 | `.project-item:nth-child(5) .title a` | `Living Innovation` | | |
| H-091 | All project locations ⚠️ 📝 | all `.project-content span` | `Berlin, Germany / 2025` ×5 | _(real locations)_ | **All 5 are identical** |

---

### 3.8 — Testimonials Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-092 | Section sub-heading 📝 ⚠️ | `.testimonial-section .sub-heading` | `Owr clients say` | _(fix typo: "Owr" → "Our")_ | Typo in original |
| H-093 | Section headline 📝 | `.testimonial-section .section-title` | `Here's What warm words our clients say` | | |
| H-094 | Testimonial section image 🖼️ | `.testi-img img[src]` | `assets/img/testi/testi-img-1.png` | _(interior/project photo, 600×700px)_ | |
| H-095 | Rating score 📝 | `.testi-top-content .rating` | `4.80` | _(real rating or remove)_ | |
| H-096 | Review count 📝 | `.rating-list span` | `2,688 reviews` | _(real count or remove)_ | |
| H-097 | Featured quote 📝 | `.right-content p` | `From concept to reality, the team turned my vision into a stunning, livable space...` | _(pull quote from a real testimonial)_ | |
| H-098 | Testimonial 1 text 📝 | `.testi-item:nth-child(1) p` | `"A wonderful experience! They knew what they were doing..."` | _(real testimonial quote)_ | Include quotation marks |
| H-099 | Testimonial 1 author 📝 | `.testi-item:nth-child(1) .name` | `Morgan Dufresne` | _(real author name)_ | |
| H-100 | Testimonial 1 role 📝 | `.testi-item:nth-child(1) .name span` | `Company Owner` | _(real role/descriptor)_ | |
| H-101 | Testimonial 1 avatar 🖼️ | `.testi-author .author-img img[src]` | `assets/img/testi/testi-author-1.png` | _(real headshot, 120×120px)_ | |

---

### 3.9 — Sponsors / Partners Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-102 | Section text 📝 | `.sponsor-text` | `Our Website 75000+ VIP Customer` | _(real client/partner count or rephrase)_ | |
| H-103 | Sponsor 1 logo 🖼️ | `.sponsor-item:nth-child(1) img[src]` | `assets/img/sponsor/sponsor-1.png` | _(partner/client logo, 160×60px)_ | All href="#" |
| H-104 | Sponsor 2 logo 🖼️ | `.sponsor-item:nth-child(2) img[src]` | `assets/img/sponsor/sponsor-2.png` | | |
| H-105 | Sponsor 3 logo 🖼️ | `.sponsor-item:nth-child(3) img[src]` | `assets/img/sponsor/sponsor-3.png` | | |
| H-106 | Sponsor 4 logo 🖼️ | `.sponsor-item:nth-child(4) img[src]` | `assets/img/sponsor/sponsor-4.png` | | |
| H-107 | Sponsor 5 logo 🖼️ | `.sponsor-item:nth-child(5) img[src]` | `assets/img/sponsor/sponsor-5.png` | | |
| H-108 | Sponsor 6 logo 🖼️ | `.sponsor-item:nth-child(6) img[src]` | `assets/img/sponsor/sponsor-6.png` | | |

---

### 3.10 — 360° Panorama Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-109 | Section sub-heading 📝 | `.antra-panoroma-area .sub-heading` | `360-degree panoramas` | _(keep or rename)_ | |
| H-110 | Section headline 📝 | `.antra-panoroma-area .section-title` | `Create an even greater experience` | | |
| H-111 | Panorama image 🖼️ | `.antra-panoroma-img[data-img]` | `assets/img/bg-img/virtual-tours.jpg` | _(360° equirectangular image)_ | Used by Panolens.js — must be equirectangular format |

> ⚠️ **Special requirement:** The panorama viewer requires an equirectangular format image (typically 4096×2048 or 8192×4096 px). Standard photos will NOT work here. Either supply a real 360° photo or replace the entire section with a different section type.

---

### 3.11 — Team Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-112 | Section sub-heading 📝 | `.team-section .sub-heading` | `amazing design team` | _(e.g. "OUR TEAM")_ | |
| H-113 | Section headline 📝 | `.team-section .section-title` | `Meet the Experts Our interior designers` | | |
| H-114 | Featured team image 🖼️ | `.team-img img[src]` | `assets/img/team/team-img-1.png` | _(matches member 1, 480×600px)_ | |
| H-115 | Member 1 name 📝 | `.team-item:nth-child(1) .title a` | `Mark Jackson` | _(real name)_ | |
| H-116 | Member 1 role 📝 | `.team-item:nth-child(1) .mid-content span` | `Exhibition designer` | _(real job title)_ | |
| H-117 | Member 1 hover image 🖼️ | `.team-item:nth-child(1)[data-img]` | `assets/img/team/team-img-1.png` | _(portrait photo)_ | Update **both** `data-img` attr AND featured `<img src>` for member 1 |
| H-118 | Member 2 name 📝 | `.team-item:nth-child(2) .title a` | `Valeria Novikova` | | |
| H-119 | Member 2 role 📝 ⚠️ | `.team-item:nth-child(2) .mid-content span` | `Exhibition designer` | _(real role)_ | **All 5 members have same role** |
| H-120 | Member 2 hover image 🖼️ | `.team-item:nth-child(2)[data-img]` | `assets/img/team/team-img-2.png` | | |
| H-121 | Member 3 name 📝 | `.team-item:nth-child(3) .title a` | `Alex Podzemsky` | | |
| H-122 | Member 3 hover image 🖼️ | `.team-item:nth-child(3)[data-img]` | `assets/img/team/team-img-3.png` | | |
| H-123 | Member 4 name 📝 | `.team-item:nth-child(4) .title a` | `Helen Reeves` | | |
| H-124 | Member 4 hover image 🖼️ | `.team-item:nth-child(4)[data-img]` | `assets/img/team/team-img-4.png` | | |
| H-125 | Member 5 name 📝 | `.team-item:nth-child(5) .title a` | `Jake Nicholson` | | |
| H-126 | Member 5 hover image 🖼️ | `.team-item:nth-child(5)[data-img]` | `assets/img/team/team-img-5.png` | | |

---

### 3.12 — Video Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-127 | Video section background 🖼️ | `.video-section .bg-img[data-background]` | `assets/img/bg-img/video-bg-1.png` | _(real video poster/screenshot)_ | |
| H-128 | YouTube video URL 🔗 | `.video-popup.venobox[href]` | `https://youtu.be/JwC-Qx1lJso` | _(real YouTube/Vimeo URL)_ | DO NOT remove `data-vbtype="video"` |
| H-129 | Video headline 📝 | `.video-title` | `Unlock Your Dream Home Today!` | _(video CTA headline)_ | |
| H-130 | Video body 📝 | `.video-section p` | `We encourage clients to actively participate in discussions...` | _(supporting sentence)_ | |

---

### 3.13 — Blog Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-131 | Section sub-heading 📝 ⚠️ | `.blog-section .sub-heading` | `amazing design team` | _(e.g. "FROM THE BLOG")_ | **Copy-pasted from team section — wrong** |
| H-132 | Section headline 📝 ⚠️ | `.blog-section .section-title` | `Meet the Experts Our interior designers` | _(e.g. "Latest from the Studio")_ | **Same as team section — wrong** |
| H-133 | Blog post 1 image 🖼️ | `.post-card:nth-child(1) .post-thumb img[src]` | `assets/img/blog/post-1.jpg` | _(real blog featured image, 800×480px)_ | |
| H-134 | Blog post 1 category 📝 | `.post-card:nth-child(1) .category` | `exteriors` | _(real category)_ | |
| H-135 | Blog post 1 date 📝 | `.post-card:nth-child(1) .post-meta li:first-child` | `Dec 25, 2025` | _(real publish date)_ | |
| H-136 | Blog post 1 title 📝 ⚠️ | `.post-card:nth-child(1) .title a` | `Four Ways for Creating Extra Space in Small Homes` | _(real article title)_ | **All 3 posts identical** |
| H-137 | Blog post 1 excerpt 📝 ⚠️ | `.post-card:nth-child(1) p` | `Modest, recently established interior design company...` | _(real excerpt)_ | **All 3 identical** |
| H-138 | Blog post 2 image 🖼️ | `.post-card:nth-child(2) .post-thumb img[src]` | `assets/img/blog/post-2.png` | | |
| H-139 | Blog post 3 image 🖼️ | `.post-card:nth-child(3) .post-thumb img[src]` | `assets/img/blog/post-3.png` | | |

---

### 3.14 — Scrolling Gallery

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-140–H-147 | Gallery images 1–8 🖼️ | `.gallary-scroll-item img[src]` + href | `project-img-6.png` through `project-img-13.png` | _(portfolio/project photos)_ | Used in Venobox lightbox — update both `href` and `img src` |

---

### 3.15 — Newsletter Section

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| H-148 | Sub-heading 📝 | `.newsletter-section .sub-heading` | `Subscribe to the newsletter` | | |
| H-149 | Headline 📝 | `.newsletter-section .section-title` | `Join our newsletter stay up to date` | | |
| H-150 | Body text 📝 | `.newsletter-section p` | `Join our newsletter. Learn something new, gain access to exclusive content...` | | |
| H-151 | Input placeholder 📝 | `.newsletter-form input[placeholder]` | `Email address..` | _(e.g. "Your email address")_ | |

> ⚠️ The newsletter form currently has no backend action. The `<button type="submit">` is not connected to any service. Either connect to Mailchimp/ConvertKit/etc. or remove this section.

---

## SECTION 4 — CONTACT PAGE (`contact.html`)

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| C-001 | Page header background 🖼️ | `.page-header .bg-img[data-background]` | `assets/img/bg-img/page-header-bg.png` | _(hero/banner background, 1920×700px)_ | |
| C-002 | Page header title 📝 | `.page-header .title` | `Contact Us` | _(keep or rename)_ | |
| C-003 | Section sub-heading 📝 | `.contact-section .sub-heading` | `get in touch` | | |
| C-004 | Section headline 📝 | `.contact-section .section-title` | `Have a Project in Mind? Let's Make It Happen` | | |
| C-005 | Address card text 📝 | `.request-item:nth-child(1) p` | `5609 E Sprague Ave, Spokane Valley, WA 99212, USA` | _(real address)_ | |
| C-006 | Phone card text 📝 | `.request-item:nth-child(2) a[href^="tel"]` text | `+(084) 456-0789` | _(real phone)_ | |
| C-007 | Phone card href 🔗 | `.request-item:nth-child(2) a[href^="tel"]` | `tel:+0844560789` | `tel:[real number]` | |
| C-008 | Email card text 📝 | `.request-item:nth-child(2) a[href^="mailto"]` text | `support@example.com` | _(real email)_ | |
| C-009 | Email card href 🔗 | `.request-item:nth-child(2) a[href^="mailto"]` | `mailto:support@example.com` | `mailto:[real email]` | |
| C-010 | Contact image 🖼️ | `.contact-img img[src]` | `assets/img/images/contact-img-1.png` | _(building/studio photo)_ | |
| C-011 | Form placeholder — name 📝 | `input#fullname[placeholder]` | `Designer` | _(e.g. "Your full name")_ | |
| C-012 | Form placeholder — phone 📝 | `input#phone[placeholder]` | `+(084) 456-0789` | _(e.g. "Your phone number")_ | |
| C-013 | Form placeholder — email 📝 | `input#email[placeholder]` | `support@example.com` | _(e.g. "Your email address")_ | |
| C-014 | Form placeholder — service 📝 | `input#service[placeholder]` | `I want to` | _(e.g. "Service you're interested in")_ | |
| C-015 | Form placeholder — message 📝 | `textarea#message[placeholder]` | `Your message..` | _(keep or improve)_ | |
| C-016 | Google Maps embed 🔗 | `iframe[src]` | Los Angeles, CA coordinates | _(real office Google Maps embed URL)_ | Get embed URL from Google Maps > Share > Embed |
| C-017 | mail.php recipient ⚙️ | `mail.php` line 22: `$recipient` | `contact@yourdomain.com` | _(real recipient email)_ | Edit `mail.php` directly — **not an agent task** |

---

## SECTION 5 — ABOUT PAGE (`about.html`)

*Key unique items on about.html beyond shared header/footer. Full analysis available by running the Template Analyst agent on `about.html`.*

| ID | Element | Selector | Current Value | YOUR VALUE | Notes |
|---|---|---|---|---|---|
| A-001 | Page header background 🖼️ | `.page-header .bg-img[data-background]` | `assets/img/bg-img/page-header-bg.png` | _(same as contact page)_ | |
| A-002 | Page header title 📝 | `.page-header .title` | `About us` | | |
| A-003 | About images (×2) 🖼️ | `assets/img/images/about-img-2.png` + `about-img-3.png` | Template stock photos | _(real team/studio photos)_ | |
| A-004 | History timeline items | `.history-img` ×6 | `assets/img/images/history-img-1.png` ×6 | _(milestone images — currently all same)_ | |
| A-005 | Award/recognition items | `.award-item[data-img]` ×5 | `award-img-1.png` through `award-img-5.jpg` | _(award logos or project photos)_ | |
| A-006 | Gallery images ×3 🖼️ | `.gallary-img-1.png`, `gallary-img-2.png`, `gallary-img-3.png` | Template stock images | _(real project photos)_ | |

---

## SECTION 6 — CONFIGURATION FILES

| ID | File | Item | Current Value | YOUR VALUE | Agent |
|---|---|---|---|---|---|
| CF-001 | `mail.php` | `$recipient` email | `contact@yourdomain.com` | _(real recipient email)_ | **Manual — not automatable** |
| CF-002 | All pages | Google Analytics | _(not present)_ | `G-XXXXXXXXXX` | SEO Optimizer |
| CF-003 | `antra/` | `sitemap.xml` | _(not present)_ | _(auto-generated)_ | SEO Optimizer |
| CF-004 | `antra/` | `robots.txt` | _(not present)_ | _(auto-generated)_ | SEO Optimizer |
| CF-005 | `antra/` | `.nojekyll` | _(not present)_ | _(created if GitHub Pages)_ | Deploy Preparer |

---

## SECTION 7 — BUGS IN ORIGINAL TEMPLATE

These must be fixed during customization. They are bugs in the purchased template, not introduced by customization.

| Bug ID | File | Location | Description | Fix |
|---|---|---|---|---|
| BUG-001 | All 35 pages | `.footer-address .mail[href]` | `href="tel:"` on email link — should be `href="mailto:"` | Change to `mailto:[email]` |
| BUG-002 | `index.html` | `.blog-section .sub-heading` | Text says "amazing design team" — copy-pasted from team section | Update to relevant blog heading |
| BUG-003 | `index.html` | `.blog-section .section-title` | Text says "Meet the Experts Our interior designers" — same as team section | Update to relevant blog headline |
| BUG-004 | `index.html` | `.testimonial-section .sub-heading` | Text says "Owr clients say" — typo | Fix to "Our clients say" |
| BUG-005 | `index.html` | All `.process-item p` | Step descriptions say "followed Antra." — incomplete sentence | Rewrite all 4 step descriptions |
| BUG-006 | `index.html` | `.process-text .bottom-text` | "Start your's today" — possessive apostrophe typo | Fix to "Start yours today" |
| BUG-007 | `index.html` | Slide 2 | Hero slide 2 is 100% identical copy of slide 1 — no differentiation | Write unique content for slide 2 |
| BUG-008 | `index.html` | All service `.service-item p` | All 4 service descriptions are identical | Write unique description per service |
| BUG-009 | `index.html` | All `.counter-item p` | All 4 counter descriptions are identical | Write unique description per counter |
| BUG-010 | `index.html` | All `.project-content span` | All 5 project locations identical: "Berlin, Germany / 2025" | Update per project |
| BUG-011 | `index.html` | All team `.mid-content span` | All 5 team members have role "Exhibition designer" | Update per person |
| BUG-012 | All 35 pages | `.mobile-side-menu` | Mobile menu has different address/phone/email than desktop sidebar | Sync both to same real contact info |

---

## SECTION 8 — AGENT RESPONSIBILITY MATRIX

Quick reference: which agent handles which category of items.

| Category | Item IDs | Agent | SCSS Recompile Needed? |
|---|---|---|---|
| Text/copy (all pages) | G-004, G-007–G-010, G-013, G-020–G-021, G-023, G-030–G-031, G-033, G-040–G-042, G-044, G-050–G-056 | **Content Writer** | No |
| Contact & social hrefs | G-008, G-022, G-024–G-028, G-032, G-034–G-037, G-043, G-045–G-049 | **Content Writer** | No |
| Homepage text content | H-003 through H-150 (📝 items) | **Content Writer** | No |
| Logos (5 locations/page) | G-005, G-011–G-012, G-029, G-039 | **Asset Manager** | No |
| Hero backgrounds | H-001, H-002 | **Asset Manager** | No |
| All other images | H-010, H-017–H-020, H-028, H-037, H-043, H-046–H-052, H-053, H-068–H-074, H-078–H-090, H-094, H-101, H-103–H-108, H-111, H-114–H-117, H-120, H-122, H-124, H-126–H-127, H-133, H-138–H-139, H-140–H-147 | **Asset Manager** | No |
| Favicon | G-003 | **Asset Manager** | No |
| Colors | D-001 through D-004 | **UI Designer** | **Yes** |
| Fonts | D-005 through D-007 | **UI Designer** | **Yes** |
| Meta tags, SEO | G-001, G-002, CF-002–CF-004 | **SEO Optimizer** | No |
| Bug fixes | BUG-001 through BUG-012 | **Content Writer** / **Asset Manager** | No |
| mail.php | CF-001 | **Manual only** | No |

---

## SECTION 9 — PRE-LAUNCH CHECKLIST

Use this as a final verification after all agents have run.

### Text
- [ ] All `📝` items with YOUR VALUE filled in have been updated in HTML
- [ ] BUG-002, 003, 004, 005, 006, 007, 008, 009, 010, 011 fixed
- [ ] No remaining "antra" or "ANTRA" brand references in visible text
- [ ] No placeholder text: "Lorem ipsum", "example.com", "yourdomain.com", "Antra"
- [ ] Counter `data-count` attributes updated to match visible numbers

### Links
- [ ] All `🔗` items updated with real URLs
- [ ] BUG-001 fixed (footer email href changed from `tel:` to `mailto:`)
- [ ] All social media links pointing to real profiles (not `#`)
- [ ] Video URL updated from placeholder to real video
- [ ] Google Maps embed URL updated to real office location

### Images
- [ ] All `🖼️` items replaced with real assets (or `REPLACE-ME` placeholders noted)
- [ ] Favicon updated
- [ ] No `sidebar-gallary-*.png` default images remaining
- [ ] Team `data-img` attributes updated to match photo replacements
- [ ] Panorama image is equirectangular format (or section removed/replaced)

### Design
- [ ] Primary accent color updated from `#CAA05C` (or confirmed keep)
- [ ] Fonts updated (or confirmed keep Cal Sans + Golos Text)
- [ ] SCSS recompiled after any token changes

### SEO & Config
- [ ] Meta descriptions filled on all active pages
- [ ] Page titles customized on all active pages
- [ ] `sitemap.xml` generated
- [ ] `robots.txt` generated
- [ ] GA4 snippet added (if Measurement ID provided)
- [ ] `mail.php` `$recipient` updated to real email

### Navigation
- [ ] Homepage variant chosen (index.html vs index-2 through index-9)
- [ ] Unused page links removed from nav
- [ ] "Home" sub-menu simplified to client's single homepage
