# Component Pattern: Dashboards & Analytics

Dashboards present complex data with maximum clarity and density.

## Dashboard Patterns

### 1. High-Density Metric Grid
* **Structure**: Grid of 4-6 metric cards displaying key performance indicators (KPIs), percentage trends (+12.4%), sparkline micro-charts, and status badges.

### 2. Interactive Data Table with Inline Drawer
* **Structure**: Clean table rows with alternating subtle background fills or 1px dividers. Clicking a row slides open a right-side drawer detailing raw log events or payload metadata without losing page context.

### 3. Chart Entrance Choreography
* **Structure**: Line charts, bar charts, and area charts render with path-length draw animation (`stroke-dashoffset`) on initial view entrance.
