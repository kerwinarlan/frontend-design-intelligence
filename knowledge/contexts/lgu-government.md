# Context Guide: LGU & Local Government Service Portals

Local Government Unit (LGU) websites, municipal portals, and civic information systems exist to serve citizens, local business owners, visitors, and department staff.

## Core Design Principles

### 1. TRUST > NOVELTY
* **Rationale**: Citizens visit government portals to complete important legal tasks (business permit applications, real property tax payments, local birth certificate requests). Visual gimmicks create anxiety and suspicion.
* **Appropriate**: High-contrast, clean typography, visible official seals, clear contact numbers, verified department directory.
* **Inappropriate**: Dark-mode fintech styling, neon gradients, floating ambient blur orbs, or speculative AI chatbots taking over the main page.

### 2. SERVICE DISCOVERY > MARKETING
* **Rationale**: Government websites are not SaaS marketing funnels. Users are looking for direct service action paths.
* **Appropriate**: Prominent "What do you need today?" service search bar, top 6 municipal services grid (Permits, Taxes, Health, Certificates, Zoning, Advisories).
* **Inappropriate**: "Revolutionize your city experience" headlines, fake client testimonials, or giant generic stock video backgrounds.

### 3. ACCESSIBILITY > SPECTACLE
* **Rationale**: LGU services must be accessible to all citizens, including senior citizens, low-vision users, and citizens on low-bandwidth mobile networks.
* **Appropriate**: WCAG 2.2 AA compliance (4.5:1 text contrast), 44x44px touch targets, plain Taglish or simple English copy, minimal bandwidth payload (<500kB initial load).
* **Inappropriate**: Complex WebGL scroll hijacking, small 12px muted text, or complex multi-level hover menus.

### 4. LOCAL IDENTITY > GENERIC STARTUP BRANDING
* **Rationale**: A city portal should feel grounded in its specific municipality, culture, and geography.
* **Appropriate**: Authentic local municipal colors, official LGU crest/logo, emergency hotline banner (911 / Local Disaster Risk Reduction Office), local announcements.
* **Inappropriate**: Generic Silicon Valley startup aesthetic, purple/indigo gradients, or generic abstract vector art.

### 5. EMERGENCY & ADVISORY PRIORITY
* **Rationale**: During typhoons, flooding, or public safety events, the LGU website is the primary source of truth.
* **Appropriate**: Persistent top alert banner slot (`aria-live="polite"`) for class suspensions, weather updates, or road closures.

---

## Technical & Visual Guidance

| Dimension | Guidance |
|---|---|
| **Typography** | Clean, highly legible sans-serif (Inter, Geist, SF Pro, or System UI). Bold clear section headers. |
| **Color Palette** | Official municipal brand hue (e.g., Deep Civic Blue `#1E3A8A`, Emerald Green `#065F46`, or Warm Gold accent) on crisp off-white or dark zinc. |
| **Hero Section** | Clear City Name + "Official Online Services Portal" + Quick Service Search Bar (`⌘K` or prominent input field). |
| **Navigation** | Sticky header with emergency hotline button, clear service categories, and language toggle if applicable. |
| **Mobile UX** | 100% thumb-zone friendly navigation; prominent mobile service shortcuts. |
