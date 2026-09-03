# Fundamental Domain: Layout & Composition

Interface layout provides structural logic, visual balance, and intuitive focal points.

## 1. Spatial Systems & Grid Rhythm
* **4px / 8px Base Grid**: All margins, paddings, gaps, and component heights should be multiples of 4px or 8px (`p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px, `p-12` = 48px).
* **Column Grids**: Standard 12-column grid for desktop layouts; 4-column grid for mobile screens.
* **Max Container Widths**:
  * Prose / Articles: `max-w-3xl` (768px)
  * Standard Content: `max-w-6xl` (1152px)
  * Widescreen Application Dashboard: `max-w-7xl` (1280px) or fluid `w-full px-6`

## 2. Whitespace & Visual Density
* **Active Whitespace**: Intentional spacing used to group related items (proximity principle) and separate distinct content sections.
* **Density Trade-Offs**:
  * **Marketing / Portfolio**: Low density, generous vertical padding (`py-16` to `py-24`), high visual air.
  * **Dashboard / Internal Tool**: High density, compact row padding (`py-2` to `py-3`), maximum visible data above the fold.

## 3. Asymmetry & Focal Points
* Avoid monotonous symmetric grids where every card is identical.
* Use primary focal points: 1 hero card scaled 2x larger than supporting cards, or a 2/3 and 1/3 split column layout (`grid-cols-1 lg:grid-cols-3`).

## 4. Optical Alignment
* **Icon + Text Alignment**: Center icons optically with text caps, not necessarily bounding box centers.
* **Header Margins**: Top margin above a header should be roughly 2x the bottom margin below it to visually anchor the header to its section.
