# System Roadmap

This roadmap tracks the development phases of `frontend-design-intelligence`.

## Phase 0: Repository Bootstrap (COMPLETED)
- Initialize Git repository and directory structure.
- Configure `package.json` with Pi package metadata and scripts.
- Establish `AGENTS.md` and basic tooling.

## Phase 1: Architecture, Taxonomy & Principles (COMPLETED)
- Document system architecture (`docs/ARCHITECTURE.md`).
- Define normalized design taxonomy (`docs/TAXONOMY.md`).
- Formulate core design principles (`docs/DESIGN_PRINCIPLES.md`) and anti-slop guide (`docs/ANTI_SLOP.md`).
- Establish portfolio storytelling guide (`docs/PORTFOLIO_DESIGN.md`).

## Phase 2: Jitter Motion Research & Extraction (COMPLETED)
- Analyze public Jitter motion templates across UI elements, buttons, shows, websites, and text.
- Build structured JSON reference records (`knowledge/references/jitter/`).
- Document research status and provenance (`knowledge/references/jitter/STATUS.md`).

## Phase 3: Core Knowledge Curriculum & Recipes (COMPLETED)
- Draft comprehensive Markdown guides for all 9 fundamental domains (`knowledge/fundamentals/`).
- Document component pattern standards (`knowledge/patterns/`).
- Build copy-pasteable, frameworks-aware implementation recipes (`knowledge/recipes/`).

## Phase 4: Pi Agent Skills (COMPLETED)
- Implement `portfolio-polish` (primary orchestration skill).
- Implement `frontend-audit` (non-destructive scoring and assessment).
- Implement `motion-pass` (targeted animation enhancement).
- Implement `hero-redesign` (specialized hero section art direction).
- Implement `ui-polish` (component micro-refinements).
- Implement `study-reference` (reference extraction and translation).

## Phase 5: Evaluation & Examples (COMPLETED)
- Define 14-dimension scoring rubric (`evals/rubric.md`).
- Build executable evaluation fixture (`evals/eval-fixture.ts`).
- Document real-world transformation example (`examples/mediocre-dashboard-improvement.md`).

## Phase 6: Tooling & Validation (COMPLETED)
- Implement `scripts/validate-skills.ts` and `scripts/validate-knowledge.ts`.
- Implement `scripts/audit-project.ts`.
- Configure GitHub Actions CI workflow (`.github/workflows/ci.yml`).

## Phase 7: Future Expansion (PLANNED)
- Expand reference corpora to include Stripe, Linear, and Apple HIG motion systems.
- Add WebGL / Three.js / Canvas micro-recipes for high-end portfolio showpieces.
- Integrate headless browser screenshot comparison in `evals/`.
