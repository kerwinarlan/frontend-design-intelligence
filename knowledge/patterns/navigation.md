# Component Pattern: Navigation & Floating Controls

Navigation controls guide user movement across views and tools.

## Navigation Patterns

### 1. Sticky Island Header
* **Mechanism**: Compact floating header (`max-w-4xl mx-auto mt-4 px-4 py-2 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800`). Remains fixed at top during scroll.
* **Key Motion**: Smooth scale-down on scroll initialization.

### 2. Floating Action Dock / Rail
* **Mechanism**: Fixed bottom or side rail holding primary utility icons (Theme toggle, GitHub link, Live Demo button, Search shortcut `⌘K`).
* **Key Motion**: Hover tooltips reveal label smoothly (`opacity-0 y-1` -> `opacity-100 y-0`).

### 3. Command Palette Modal (`⌘K`)
* **Mechanism**: Modal overlay activated via keyboard shortcut (`⌘K` / `Ctrl+K`) or search bar click. Instant keyboard filter of page sections, routes, and actions.
