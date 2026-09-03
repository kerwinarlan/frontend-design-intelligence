# Context Guide: Analytics & Data Dashboards

Analytics dashboards present complex data streams, metrics, and logs with maximum density and visual clarity.

## Core Design Principles

1. **High Information Density**: Compact row heights, clear tabular layout, and minimal wasted space.
2. **Tabular Figures**: Always apply `font-mono tabular-nums` to dynamic numerical values to eliminate width jitter.
3. **Chart Entrance Choreography**: Animate line and bar chart entrances smoothly on load (`scaleY` or SVG stroke draw).
4. **Contextual Drawers**: Clicking a row opens a slide-over drawer detailing raw payload metadata without losing page context.

## Inappropriate Patterns
* Huge 24px+ rounded cards holding single numbers.
* Low-contrast chart colors that fail WCAG AA standards.
* Hiding primary filtering controls behind 3 layers of dropdowns.
