# Context Selection Guidelines

The Creative Director selects the appropriate context knowledge guide from `knowledge/contexts/` based on repository inspection and product classification.

---

## Context Mapping Guide

| Observed Repository Characteristics | Selected Context Guide | Key Design Priorities |
|---|---|---|
| Municipal services, city portal, LGU forms, local advisories, barangay/city directory | `knowledge/contexts/lgu-government.md` | Trust, civic identity, service shortcuts, emergency banner, mobile usability, WCAG AA. |
| Public records, school directory, transit schedules, community resources | `knowledge/contexts/public-service-portal.md` | Information architecture, low payload size, search filter prominence. |
| Personal developer portfolio, case study deep dive, resume showcase | `knowledge/contexts/portfolio.md` | Stack badges, architecture pipeline, measured metrics, live demo frame. |
| KPI metrics, line charts, tabular logs, real-time telemetry | `knowledge/contexts/dashboard.md` | High density, `tabular-nums`, chart entrances, slide-over detail drawers. |
| API docs, CLI tool, developer sandbox, code generator | `knowledge/contexts/developer-tool.md` | Terminal code blocks, copy micro-interactions, dark mode `#09090B`, monospace type. |
| Model inference monitoring, token throughput, latency telemetry | `knowledge/contexts/ai-ml-product.md` | P99 latency ms, confidence score %, token throughput, telemetry over marketing hype. |

---

## Multiple Context Blending
When a project spans multiple contexts (e.g. an LGU Municipal Portal that includes an Analytics Dashboard for city administrators):
1. **Primary Context**: Apply the primary audience context (e.g. `lgu-government.md`) for top-level pages, navigation, and citizen routes.
2. **Secondary Context**: Apply secondary context (e.g. `dashboard.md`) for internal admin or analytics routes.
