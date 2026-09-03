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

## Phase 2: Jitter Motion Research & Hardening (COMPLETED)
- Reverse-engineer public Jitter templates across 12 categories.
- Build 6 structured reference JSON databases (`knowledge/references/jitter/`).
- Implement Playwright browser inspector (`scripts/browser-inspector.ts`).
- Create runnable before/after evaluation fixture (`evals/fixtures/`).
- Conduct non-destructive audit of real repository (`evals/real-projects/personal-website-audit.md`).

## Phase 2.5: Public GitHub Release & Packaging (COMPLETED)
- Publish as public repository on GitHub: `kerwinarlan/frontend-design-intelligence`.
- Tag v0.1.0 release.
- Verify Pi package remote discovery via `pi install git:github.com/kerwinarlan/frontend-design-intelligence`.
- Generate social preview card (`assets/github-social-preview.png`).

## Phase 3: Creative Director Orchestration Layer (COMPLETED)
- Implement `creative-director` master skill (`skills/creative-director/SKILL.md`).
- Build natural language intent translation guide (`skills/creative-director/references/intent-translation.md`).
- Build structured design brief schema (`skills/creative-director/references/design-brief-schema.md`).
- Create domain context guides (`knowledge/contexts/`): `lgu-government.md`, `public-service-portal.md`, `portfolio.md`, `dashboard.md`, `developer-tool.md`, `ai-ml-product.md`.
- Establish intent translation test fixtures (`evals/fixtures/intent-translation.md`).
- Update all specialist skills to accept context parameters from `creative-director`.
- Tag v0.2.0 release.

## Phase 4: Future Research & Expansion (PLANNED)
- Expand reference corpora to include Stripe, Linear, and Apple HIG motion systems.
- Add WebGL / Three.js / Canvas micro-recipes for high-end portfolio showpieces.
- Integrate automated visual regression image diffing in Playwright inspector.
