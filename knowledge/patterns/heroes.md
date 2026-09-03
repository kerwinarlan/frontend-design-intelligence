# Component Pattern: Hero Sections

The hero section is the highest-value real estate on any landing page, portfolio item, or showcase site.

## Hero Archetypes

### 1. The Interactive Technical Demo Hero
* **Best For**: Developer tools, APIs, ML utilities, data processing libraries.
* **Composition**: 2-column split (Left: Headline, tagline, stack badges, primary CTA; Right: Live interactive code editor or terminal sandbox).
* **Key Motion**: Subtle typing animation on code terminal entrance, instant syntax highlighting, copy-to-clipboard micro-interaction.

### 2. The Device Mockup Showcase Hero
* **Best For**: Mobile apps, web applications, SaaS products, visual tools.
* **Composition**: Centered top headline -> Stack pills -> Direct high-fidelity browser/device frame showcasing the live app UI.
* **Key Motion**: Smooth 3D tilt/scroll entrance of the browser frame, floating floating contextual badges (e.g. "99.9% Uptime", "12ms Response").

### 3. The Editorial Portfolio Hero
* **Best For**: Personal portfolios, design engineers, research showcases.
* **Composition**: Large typographic headline (Newsreader or Geist Display) with integrated kinetic highlight, bio line, location/availability indicator, clean navigation links.
* **Key Motion**: Staggered text character or line reveal (`clip-path` mask reveal).

## Common Anti-Patterns to Avoid
* Giant purple ambient orbs covering 50% of the screen.
* Unreadable semi-transparent text over video backgrounds.
* Generic "Revolutionize your workflow" headlines.
