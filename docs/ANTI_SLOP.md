# Anti-AI-Slop Design Guide

AI coding agents frequently default to generic visual clichés that make web applications look identical, cheap, and unmistakably AI-generated. This guide defines forbidden anti-patterns and their professional replacements.

---

## Banned Visual Clichés vs. Professional Alternatives

| Category | Banned AI-Slop Pattern | Professional Replacement |
|---|---|---|
| **Gradients** | Purple/indigo/cyan glowing background gradients, colorful radial orbs | Subtle neutral background tones, clean monochrome, or single restrained accent fill |
| **Borders** | Glowing rainbow border gradients (`border-gradient`), multi-colored neon rings | Crisp 1px solid neutral borders (`border-neutral-200` or `border-neutral-800`) |
| **Glassmorphism** | Blur filters on every card (`backdrop-blur-xl bg-white/10`) creating muddy low-contrast text | Solid high-contrast backgrounds (`bg-white` or `bg-zinc-900`) with intentional elevation |
| **Cards & Layout** | Uniform Bento grid layouts forced onto every page; identical cards with huge 24px+ rounded corners | Asymmetric, content-driven layouts; tight 6px to 12px radii matching typography scale |
| **Typography** | Generic inter font with default tracking; giant "Revolutionize your workflow with AI" headlines | Custom variable font pairing (e.g., Geist, Inter Display, Newsreader, JetBrains Mono); tight tracking on large headers |
| **Motion** | Every single element bouncing into view on scroll with long delays; gratuitous custom cursor dots | Subtle, immediate entrances (150-250ms opacity/scale shift); standard native cursor behavior |
| **Copy & Marketing** | "Powered by AI", "Transform the way you...", fake testimonials, fake client logos | Direct, specific technical copy explaining actual problem, architecture, stack, and metrics |

---

## The Anti-Slop Inspection Checklist

When auditing or polishing a frontend project, immediately flag and remove:
1. `bg-gradient-to-r from-purple-500 via-pink-500 to-red-500`
2. `shadow-[0_0_50px_rgba(168,85,247,0.5)]`
3. Floating ambient blur blobs (`absolute blur-3xl opacity-30 bg-purple-600`)
4. Cards with `rounded-3xl` holding a single line of text
5. Infinite marquee loops containing fake brand logos
6. Heavy parallax scroll hijacking that delays reading core content

---

## Core Aesthetic Rule
**Clean, precise typography, disciplined whitespace, and sharp 1px borders will ALWAYS look more modern, senior, and timeless than glowing purple gradients.**
