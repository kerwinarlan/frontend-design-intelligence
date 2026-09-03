# Specialist Skill Orchestration Rules

The Creative Director orchestrates existing specialist skills rather than re-implementing everything from scratch.

---

## Orchestration Matrix

| Project Problem / Scenario | Intervention Level | Skill Execution Sequence | Rationale |
|---|---|---|---|
| **Ugly Dashboard / Unrefined Components** | Level 1 | `frontend-audit` -> `ui-polish` | Fixes tabular figures, grid spacing, borders, and interaction states. |
| **Functional Site with Weak Motion** | Level 1 | `frontend-audit` -> `motion-pass` | Adds spring hover feedback, staggered reveals, and reduced-motion support. |
| **Weak Hero / Misleading Intro** | Level 2 | `frontend-audit` -> `hero-redesign` -> `ui-polish` | Replaces generic slogans with technical copy, stack badges, and browser frame. |
| **Mismatch with Audience (e.g. LGU Portal)** | Level 2 | `frontend-audit` -> `hero-redesign` -> `ui-polish` -> `motion-pass` | Purges AI slop; establishes civic trust, service shortcuts, and mobile thumb navigation. |
| **Full Portfolio Showpiece Transformation** | Level 3 | `frontend-audit` -> `portfolio-polish` | Full art-directed pass orchestrating hero redesign, component polish, motion, and visual QA. |

---

## Delegating Context to Specialist Skills
When delegating to specialist skills, the Creative Director passes down structured context parameters in the task prompt:
* `project_context`: (e.g., LGU Municipal Portal, Analytics Dashboard, DevTool)
* `desired_perception`: (e.g., Trustworthy, Civic, Competent, Authoritative)
* `avoid`: (e.g., Purple gradients, Fintech, Generic AI copy)
* `intervention_level`: (1, 2, or 3)
* `constraints`: (Preserve routes, preserve business logic, zero new heavy npm deps)
