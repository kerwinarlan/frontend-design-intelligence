# Natural Language Intent Translation Guide

The Creative Director translates informal, vague, or subjective user feedback into actionable, technical design strategies.

---

## Intent Translation Dictionary

| User Natural Language Prompt | Derived Design Strategy & Meaning | What NOT To Do |
|---|---|---|
| **"Make this look more legit."** | Increase perceived craft: replace generic placeholder fonts with Geist/Inter, enforce 1px neutral borders, fix 4px/8px grid alignment, add stack badges and real technical metrics. | Do NOT add giant corporate stock photos or fake awards. |
| **"Parang mas premium sana."** / **"Make it look expensive."** | Establish visual restraint: reduce color count to 1 primary neutral + 1 accent hue, increase vertical whitespace, apply high-contrast typography (`tracking-tight`), add spring hover feedback. | Do NOT automatically use black + gold gradients or heavy glassmorphism. |
| **"This still looks vibe-coded."** | Purge AI-slop visual clichés: remove purple/pink radial background orbs, glowing rainbow borders, uniform 24px rounded bento grids, and low-contrast `backdrop-blur`. | Do NOT strip away all personality—replace slop with clean 1px borders and sharp typography. |
| **"Make it look like something I can show a mayor."** | Establish civic trust & LGU authority: apply municipal service discovery layout, emergency advisory banner, clear contact directory, mobile-first thumb navigation, and WCAG AA contrast. | Do NOT turn the site into a SaaS marketing landing page or crypto app. |
| **"Make it more alive but don't overdo it."** | Add functional, restrained motion: spring hover feedback on buttons (`active:scale-[0.98]`), staggered headline word reveals, smooth metric counter rolls, and `prefers-reduced-motion` fallbacks. | Do NOT animate body paragraphs or add continuous spinning background objects. |
| **"Make it modern government, not boring."** | Clean editorial civic design: bold clear typography, structured service cards, smooth subtle micro-interactions, responsive mobile layout, grounded municipal accent color. | Do NOT use 1990s table layouts or ugly default browser blue links. |
| **"Make this look impressive for LinkedIn."** | Enhance technical storytelling: add tech stack pills in hero, embed live device mockup frame, showcase architecture pipeline, highlight performance metrics (-42% latency). | Do NOT add fake client logos or fake user testimonials. |
| **"Fix the UI."** | Run 14-point audit: calibrate type scale, fix line heights, enforce 4px/8px grid padding, add 5-state button controls, implement custom focus rings, fix mobile horizontal overflow. | Do NOT apply arbitrary random style changes without auditing the codebase first. |
| **"Make this feel like Apple but don't copy Apple."** | High-craft minimalism & precision: generous whitespace, razor-sharp typography, subtle 3D device tilt, damped spring physics (`stiffness: 300, damping: 25`), monochrome surfaces. | Do NOT copy Apple product images or literal trademarked slogans. |
| **"Make the dashboard less ugly."** | High-density data layout: apply `font-mono tabular-nums` to numbers, compact row heights, subtle hover highlights, chart entrance animations, slide-over detail drawers. | Do NOT reduce data density or turn the dashboard into a sparse marketing landing page. |

---

## Core Intent Translation Rule
**Always separate WHAT THE USER SAID from WHAT THE USER ACTUALLY WANTS TO ACHIEVE.** Satisfy the underlying objective, even if it requires politely diverging from a literal design mistake.
