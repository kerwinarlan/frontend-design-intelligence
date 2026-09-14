---
name: creative-director
description: Top-level creative director and intent translation skill for coding agents. Translates vague or informal user requests ("Make this look legit", "Parang mas premium sana", "Vibe-coded", "Make it look expensive", "Make it look like something I can show a mayor") into structured design briefs, inspects code and Playwright viewports, classifies context & audience, and orchestrates specialist skills.
---

# Skill: Creative Director

## Description
This is the master orchestration and intent-translation skill for `frontend-design-intelligence`. It acts as a competent product designer, frontend design director, and portfolio art director. It translates informal, vague, or subjective user prompts into a rigorous design strategy, inspects code and browser viewports, classifies product context and audience, determines an intervention level (1, 2, or 3), and orchestrates specialist skills (`frontend-audit`, `hero-redesign`, `ui-polish`, `motion-pass`, `portfolio-polish`).

## WHEN TO USE
* User communicates design intent using informal, vague, or perceptual language:
  * *"Make this look more legit."*
  * *"Parang mas premium sana."*
  * *"This still looks vibe-coded."*
  * *"Make it look like something I can show a mayor."*
  * *"Make this more alive but don't overdo it."*
  * *"Fix the UI."*
  * *"Make it look expensive."*
  * *"Make the dashboard less ugly."*
* Orchestrating multi-component frontend redesigns across code, layout, typography, motion, and browser viewports.

## WHEN NOT TO USE
* User asks for a hyper-specific 1-line CSS property edit (e.g., *"Change button background to red"*).
* Simple backend API route bug fixes without frontend UI involvement.

---

## WORKFLOW

### Phase 1: Interpret User Intent
Read [references/intent-translation.md](references/intent-translation.md). Parse the prompt into:
* Explicit requests vs. Implied goals
* Perceptual goals (e.g., Trustworthy, Premium, Civic, Authoritative, Competent, Modern)
* Dislikes & Constraints
* **Primary Principle**: Distinguish *what the user said* from *what the user actually wants to achieve*. You are authorized to diverge from literal design mistakes (e.g. "Animate everything") when following them reduces usability or accessibility.

### Phase 2: Inspect Repository & Codebase
* Read `package.json`, project routes, layouts, and main page components.
* Identify frontend stack (Next.js, React, Vite, Astro, Tailwind CSS, Framer Motion, GSAP).
* Understand what the software *actually does*. Identify technically/functionally critical areas.

### Phase 3: Classify Product Context
Read [references/context-selection.md](references/context-selection.md). Classify into relevant contexts:
* LGU / Municipal Portal (`knowledge/contexts/lgu-government.md`)
* Public Information Portal (`knowledge/contexts/public-service-portal.md`)
* Portfolio / Case Study (`knowledge/contexts/portfolio.md`)
* Analytics Dashboard (`knowledge/contexts/dashboard.md`)
* Developer Tool / CLI (`knowledge/contexts/developer-tool.md`)
* AI / ML Telemetry (`knowledge/contexts/ai-ml-product.md`)

### Phase 4: Identify Audiences
Identify Primary Users, Secondary Users, Stakeholders (e.g., Mayor, Admin, Clients), and Portfolio Viewers. Prioritize actual user task completion over pure portfolio spectacle.

### Phase 5: Determine Desired Perception
Define a explicit DESIRED vs. AVOID perception model (e.g., DESIRED: Trustworthy, Civic, Modern; AVOID: Corporate SaaS, Fintech, Purple Orbs).

### Phase 6: Visual Inspection (Playwright Browser)
Run Playwright browser inspection (`scripts/browser-inspector.ts`). Capture Desktop (1280x800) and Mobile (390x844) viewports. Check layout overflow, contrast, and console errors.

### Phase 7: Run Frontend Audit
Execute 14-point visual audit against [evals/rubric.md](evals/rubric.md) and [docs/ANTI_SLOP.md](docs/ANTI_SLOP.md).

### Phase 8: Create Structured Design Brief
Generate structured YAML brief per [references/design-brief-schema.md](references/design-brief-schema.md).

### Phase 9: Confidence Model
Label assumptions as HIGH, MEDIUM, or LOW confidence. Low-confidence non-essential details must not become unverified facts.

### Phase 10: Determine Design Intervention Level
Read [references/intervention-levels.md](references/intervention-levels.md):
* **Level 1 (Polish)**: Component micro-refinements, spacing, focus rings, tabular figures.
* **Level 2 (Redirection)**: Visual system overhaul, hero redesign, card consolidation, service hierarchy.
* **Level 3 (Showpiece)**: Full art-directed transformation (3D device tilt, kinetic typography, sticky storytelling).

### Phase 11: Delegate to Specialist Skills
Read [references/orchestration-rules.md](references/orchestration-rules.md). Orchestrate existing specialist skills:
* `frontend-audit` -> `hero-redesign` -> `ui-polish` -> `motion-pass` -> `portfolio-polish`

### Phase 12: Design System Direction
Establish single coherent direction for typography, layout, spacing grid (4px/8px), colors, radii, borders, and interaction states.

### Phase 13: Content & Copy Judgment
Replace generic AI slogans ("Revolutionizing software") with direct, specific technical or civic copy ("What do you need today?", "Sub-millisecond Edge Inference"). Never fabricate official statistics or department names.

### Phase 14: Motion Judgment
Apply motion that serves hierarchy, feedback, spatial continuity, or state communication. Default to restraint for civic/institutional contexts.

### Phase 15: Context-Specific Rules
Enforce domain rules from `knowledge/contexts/` (e.g. TRUST > NOVELTY for LGUs).

### Phase 16: Product vs. Portfolio Distinction
Preserve functional product usability inside the app; place richer storytelling/motion in case study wrappers if needed.

### Phase 17: Implementation
Modify project files cleanly. Follow framework conventions, preserve business logic, and minimize dependencies.

### Phase 18: Visual QA & Recapture
Run Playwright inspector to recapture desktop & mobile screenshots. Compare before/after diffs and check for horizontal overflow.

### Phase 19: Self-Critique Checklist
Execute internal self-critique:
* Does this still look AI-generated?
* Is there a coherent visual identity?
* Did we turn an LGU portal into a crypto landing page?
* Did we make it prettier but less usable?
* Is mobile navigation thumb-zone friendly?

### Phase 20: Creative Director Report
Return concise Creative Director Report presenting interpreted intent, brief summary, changes made, and visual QA results.

---

## REQUIRED INSPECTION
Before editing any code, inspect:
1. `references/`
2. `knowledge/contexts/`
3. `docs/ANTI_SLOP.md`
4. `evals/rubric.md`

## DECISION RULES
* **NEVER DEMAND A FORMAL DESIGN BRIEF FROM THE USER.** Generating the brief is the primary responsibility of this skill.
* Satisfy underlying user objectives rather than literal design mistakes.
* Maintain 100% full keyboard accessibility and WCAG AA contrast.

## OUTPUT
1. Direct, high-precision code modifications across project components.
2. Concise Creative Director Report summarizing interpreted intent, design strategy, changes made, things preserved, and Playwright browser QA findings.
