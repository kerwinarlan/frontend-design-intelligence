---
name: study-reference
description: Analyze public website URLs, design references, motion systems, or inspiration screenshots. Extracts transferable layout, motion, typography, and choreography principles into normalized JSON reference entries.
---

# Skill: Study Reference

## Description
Analyzes external web references, design inspiration links, or motion examples. Decomposes them into transferable design primitives, analytical insights, and framework-agnostic implementation specifications.

## WHEN TO USE
* Orchestrated by `/skill:creative-director` or invoked directly.
* User provides a URL or reference link (e.g. "Study this website and tell me why it looks good", "Analyze this animation link", or "Extract design patterns from this reference").

## WHEN NOT TO USE
* User wants immediate code refactoring without reference analysis.

---

## WORKFLOW

### Step 1: External Reference Analysis
When provided a URL, fetch content or inspect public documentation. Decompose into:
1. **Composition & Spatial Layout**: Grid columns, container widths, whitespace density.
2. **Typography Characteristics**: Type scale, variable font pairings, tracking, line height.
3. **Motion Primitives & Choreography**: Easing curves, duration (ms), stagger delays, spring physics parameters (`stiffness`, `damping`).
4. **Interaction Model**: Hover behaviors, scroll triggers, keyboard focus models.
5. **Why It Works**: Rationale explaining why the composition and motion guide user focus effectively.

### Step 2: Extract Transferable Principles
Identify what makes the design successful; identify context-specific elements that should NOT be copied blindly.

### Step 3: Format & Store Knowledge
Format extracted insights using the normalized taxonomy in [docs/TAXONOMY.md](docs/TAXONOMY.md) and store in `knowledge/references/` or `knowledge/patterns/`.

---

## REQUIRED INSPECTION
* `docs/TAXONOMY.md`
* `docs/CONTRIBUTING_KNOWLEDGE.md`

## DECISION RULES
* **DO NOT COPY PROPRIETARY CODE OR ASSETS**. Extract principles, choreography parameters, and original implementation strategies.
* Always record source provenance and research date.

## OUTPUT
* Detailed analytical breakdown and structured JSON/Markdown reference entry added to the knowledge base.
