# Normalized Design Taxonomy

To maintain structured cross-referencing and prevent knowledge fragmentation, all UI/UX and motion assets follow this normalized classification schema.

## Primary Taxonomy Categories

### 1. Fundamental Domains (`knowledge/fundamentals/`)
* `typography`: Type scales, hierarchy, measure, line height, optical sizing.
* `layout`: Grids, alignment, spatial rhythm, density, composition.
* `responsive`: Fluid layouts, container queries, mobile navigation, touch targets.
* `color`: Semantic tokens, contrast ratios, dark mode, restrained accent usage.
* `ui-ux`: Form states, modal ergonomics, feedback loops, progressive disclosure.
* `motion`: Easing curves, timing, choreography, spatial continuity, reduced-motion.
* `accessibility`: ARIA roles, keyboard focus indicators, screen reader flow.
* `performance`: GPU acceleration, layout thrashing prevention, CLS mitigation.
* `portfolio-storytelling`: Framing engineering metrics, architecture diagrams, live demos.

### 2. UI Component Patterns (`knowledge/patterns/`)
* `heroes`: Product heroes, developer portfolio heroes, SaaS, dashboard highlights.
* `typography`: Animated headlines, kinetic typography, kinetic quotes.
* `cards`: Hover depth, card stacks, orbiting cards, bento variations (restrained).
* `navigation`: Floating action bars, rail menus, liquid glass headers, search modals.
* `showcases`: Device mockup choreography, interactive product tours, screenshot reveals.
* `dashboards`: Data density management, chart entrance animations, metric counters.
* `scrolling`: Sticky storytelling, scroll progress indicators, horizontal gallery tracks.
* `microinteractions`: Button feedback, toggle switches, form validation cues.

### 3. Implementation Recipes (`knowledge/recipes/`)
* `css`: Pure CSS transitions, keyframe animations, scroll-driven animations.
* `tailwind`: Utility-first animations, custom arbitrary variants, group-hover states.
* `motion`: Framer Motion layout animations, AnimatePresence, useScroll, springs.
* `gsap`: ScrollTrigger timelines, flip plugin, split-text choreography.
* `lottie`: Lightweight vector animations, interactive trigger integration.

### 4. Reference Corpus Tagging
All structured reference entries in `knowledge/references/` MUST include at least 3 taxonomy tags from this document to enable programmatically filtered pattern retrieval.
