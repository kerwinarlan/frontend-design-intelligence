# Contributing Knowledge & References

This guide outlines how to extend `frontend-design-intelligence` with new reference corpora, design patterns, and framework recipes.

## 1. Adding a New Reference Corpus
When analyzing a new design reference source (e.g., a design system, showcase gallery, or motion platform):

1. **Establish Status Document**: Create `knowledge/references/<source>/STATUS.md` recording:
   - Source URL & platform name
   - Date of research
   - Categories analyzed
   - Observed pattern count
   - Remaining gaps / future work

2. **Structure Reference Records**: Save pattern records as structured JSON in `knowledge/references/<source>/<category>.json`. Standard fields:
   ```json
   {
     "id": "unique-pattern-id",
     "name": "Human Readable Name",
     "source_url": "https://...",
     "category": "heroes | cards | buttons | text | navigation",
     "tags": ["motion", "stagger", "react"],
     "composition": "Description of spatial arrangement",
     "animation_primitives": ["scale", "opacity", "clip-path"],
     "choreography": "Timing sequence and delays",
     "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
     "why_it_works": "Analytical rationale",
     "use_cases": ["When to use"],
     "avoid_when": ["When NOT to use"],
     "feasibility": {
       "css": true,
       "motion": true,
       "gsap": true,
       "lottie": true
     }
   }
   ```

## 2. Writing Implementation Recipes
Recipes in `knowledge/recipes/` MUST follow this structure:
* **Title & Overview**
* **Why Use This Pattern**
* **When To Use vs. When NOT To Use**
* **Accessibility & Reduced Motion Strategy**
* **Performance Guidelines**
* **Implementation Options** (Tailwind CSS, Framer Motion, GSAP, or Vanilla CSS)

## 3. Validation
Always run `npm run validate` after adding or updating knowledge files.
