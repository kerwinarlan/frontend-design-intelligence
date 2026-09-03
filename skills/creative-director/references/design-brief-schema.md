# Structured Design Brief Schema

The Creative Director generates this structured design brief after interpreting the user's natural-language request, inspecting the codebase, and analyzing browser viewports.

```yaml
project:
  name: "lgu-ph-web"
  path: "/Users/kerwinarlan/github/lgu-ph-web"
  type: "LGU Municipal Service Portal"
  stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"]
  maturity: "Working Prototype"

user_request:
  literal: "Bro this still looks super vibe-coded. Make it feel like a real LGU portal I can pitch to a mayor, but keep it modern and portfolio-worthy."
  interpreted_goal: "Transform generic startup/fintech visual styling into an authoritative, trustworthy, civic-grounded municipal service portal with high perceived craft and responsive polish."

audience:
  primary: "Local residents, business owners, municipal permit applicants"
  secondary: "City department staff, local organizations"
  stakeholders: "City Mayor, City Administrator, Department Heads"
  portfolio: "Recruiters, founders, public-sector decision makers"

desired_perception:
  - "Trustworthy & Authoritative"
  - "Civic & Local Grounded"
  - "Modern & Competent"
  - "Approachable & Organized"

avoid:
  - "Corporate SaaS / Fintech Aesthetic"
  - "Futuristic AI / Purple Radial Orbs"
  - "Excessive Glassmorphism"
  - "Unreadable Small Gray Text"
  - "Generic Startup Slogans"

experience_priorities:
  - "Immediate Service Discovery ('What do you need today?')"
  - "Emergency Hotline & Advisory Banner Prominence"
  - "100% Mobile Thumb-Zone Navigation"
  - "WCAG AA Text Contrast & Keyboard Focus Rings"

information_priorities:
  - "1. Municipal Service Shortcuts (Permits, Taxes, Health, Certificates)"
  - "2. City Mayor & Administration Overview"
  - "3. Latest Local Advisories & Announcements"
  - "4. Department Contact Directory"

design_direction:
  typography: "Geist Sans for headlines; System UI / Inter for body copy; tight line height on titles"
  composition: "Asymmetric 2/3 and 1/3 split; service shortcut grid; max-w-6xl container"
  density: "Generous vertical air for public clarity (`py-12` to `py-16`); compact service cards"
  spacing: "Strict 4px/8px base grid (`p-6` container padding, 16px grid gap)"
  geometry: "Tight 8px-12px corner radii matching typography scale"
  color: "Deep Civic Blue (`#1E3A8A`) + Warm Gold accent (`#D97706`) on crisp zinc off-black (`#09090B`) or off-white"
  motion: "Damped spring hover feedback; staggered service grid entrance; prefers-reduced-motion fallback"
  interaction: "5-state buttons with explicit 44x44px touch targets and focus-visible rings"
  responsive_priority: "Mobile-first reflow with sticky thumb-zone navigation rail"

portfolio_strategy:
  enabled: true
  role: "Demonstrate high-craft civic UX engineering and public-sector design intelligence without compromising product credibility."

implementation_constraints:
  preserve_functionality: true
  preserve_routes: true
  preserve_content: true
  dependency_budget: "Use existing Tailwind CSS & Framer Motion; zero new heavy npm dependencies"
  performance_priority: "LCP < 2.5s, CLS < 0.1, bundle size < 300kB"
  accessibility_priority: "WCAG 2.2 AA Compliance"

confidence_model:
  high:
    - "Project is a citizen-facing LGU municipal portal"
    - "Mobile usability and trust are top priorities"
  medium:
    - "City leadership and mayor will review prototype"
    - "Local identity should be visually prominent"
  low:
    - "Official municipal brand pantone color codes"
    - "Exact local department phone numbers"

recommended_intervention_level: 2 # Level 2: Redirection & Visual System Overhaul

recommended_specialists:
  - "frontend-audit"
  - "hero-redesign"
  - "ui-polish"
  - "motion-pass"
```
