# Pattern: Sticky Panel Card Deck Stacking & 3D Fan Out

Inspired by Chinese hardcore web engineering and modern Linear/Vercel scroll mechanics, this pattern treats top-level section containers as a sticky deck of cards. As the user scrolls down, each page section slides up and stacks over the previous section with depth scaling (`scale(0.96)`), glass opacity adjustments, and subtle blur.

---

## 1. Web Dev Specification & Lingo

### Core Mechanics
- **CSS Sticky Stacking Context**: Each section uses `position: sticky; top: 88px;` inside a `perspective: 1200px` container (`.stacked-deck-container`).
- **Depth & Blur Interpolation**: When a lower section slides over the active section, JS applies `.is-stacked-under` to trigger GPU-accelerated depth scaling (`transform: scale(0.96) translateY(-12px); filter: blur(1.5px); opacity: 0.82;`).
- **3D Card Fan-Out**: Grid items inside card decks fan out horizontally and rotate slightly on hover (`transform: rotate(-2.5deg) translateY(-4px)` vs `rotate(2.5deg)`).
- **Scroll Read Progress**: 3px fixed accent line at the top of the viewport reflecting document scroll percentage (`transform: scaleX(progress)`).

---

## 2. CSS Implementation

```css
.stacked-deck-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  perspective: 1200px;
}

.sticky-deck-card {
  position: sticky;
  top: 88px; /* Sticky offset below nav */
  background: rgba(15, 26, 51, 0.9);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 34px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1), filter 350ms ease, opacity 350ms ease;
  will-change: transform, filter, opacity;
}

.sticky-deck-card.is-stacked-under {
  transform: scale(0.96) translateY(-12px);
  opacity: 0.82;
  filter: blur(1.5px);
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

## 3. Lightweight Vanilla JS Driver

```javascript
const deckCards = Array.from(document.querySelectorAll('.sticky-deck-card'));

function handleDeckStacking() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const offset = 90;
  deckCards.forEach((card, index) => {
    const nextCard = deckCards[index + 1];
    if (nextCard) {
      const nextRect = nextCard.getBoundingClientRect();
      if (nextRect.top <= offset + 60) {
        card.classList.add('is-stacked-under');
      } else {
        card.classList.remove('is-stacked-under');
      }
    }
  });
}

window.addEventListener('scroll', handleDeckStacking, { passive: true });
```
