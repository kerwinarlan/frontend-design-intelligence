# Pattern: Sticky Panel Card Deck Stacking & 3D Fan Out

## 1. Web Dev Specification & Critical Constraints

### When to Use
- **Strictly Fixed Height Sections ($H \le 80\text{vh}$)**: Multi-step interactive showcases, pricing tiers, or short feature slides where every card fits entirely within the viewport.

### When NOT to Use & Architectural Pitfall
- **Never Use for Variable or Tall Sections ($H > 100\text{vh}$)**: If a section contains long lists, timelines, or galleries exceeding the screen fold, `position: sticky; top: 88px` pins the top of the card and truncates all lower content. The user cannot scroll through the section, creating a broken, trapped-scroll defect.
- **Layout Thrashing Hazard**: Never execute `getBoundingClientRect()` inside an unthrottled `scroll` event listener. This triggers forced synchronous layout recalculations on every frame.
- **Alternative for Tall Sections**: Use **Cursor-Tracking Spotlight Borders** (`radial-gradient` mapped to `--mouse-x`, `--mouse-y`) or natural document flow with `IntersectionObserver` scrollspy.

---

## 2. CSS Implementation (Fixed Height Cards Only)

```css
.stacked-deck-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.sticky-deck-card {
  position: sticky;
  top: 88px;
  max-height: 80vh; /* Mandatory cap */
  overflow-y: auto;
  background: rgba(15, 26, 51, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 34px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

/* 3D Card Fan Out on Hover */
.card-deck-fan {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  perspective: 1000px;
}

.card-deck-fan:hover .fan-card:nth-child(1) { transform: rotate(-2.5deg) translateY(-4px); }
.card-deck-fan:hover .fan-card:nth-child(2) { transform: translateY(-8px) scale(1.02); }
.card-deck-fan:hover .fan-card:nth-child(3) { transform: rotate(2.5deg) translateY(-4px); }
```

---

## 3. Alternative: Hardware-Accelerated Spotlight Card Pattern

For full-page sections with variable height, use cursor-tracking spotlight borders with zero layout cost:

```css
.spotlight-card {
  position: relative;
  background: var(--glass-strong);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-xl);
  padding: 3rem 2.5rem;
  overflow: hidden;
}

.spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: radial-gradient(450px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(77, 227, 242, 0.45), transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms ease;
}

.spotlight-card:hover::before {
  opacity: 1;
}
```

```javascript
// Global zero-layout-cost cursor tracking
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, { passive: true });
});
```
