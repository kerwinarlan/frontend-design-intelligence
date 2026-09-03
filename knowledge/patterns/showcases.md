# Component Pattern: Product & Device Showcases

Showcases present working software inside high-fidelity frames.

## Showcase Patterns

### 1. High-Fidelity Browser Frame
* **Structure**: Custom SVG/CSS browser title bar (traffic light window controls: Red/Yellow/Green dots + URL bar showing project domain) holding an interactive iframe, image, or video loop.

### 2. Multi-Device Stage (Desktop + Mobile Sync)
* **Structure**: Main desktop browser window overlapped by a sleek mobile device frame on the lower right.
* **Key Motion**: Hovering the mobile device brings it to the foreground (`z-10 scale-105 transition-all`).

### 3. Before / After Interactive Split
* **Structure**: Slider control allowing users to drag horizontally across a screenshot to compare "Before Redesign" vs "After Portfolio Polish".
