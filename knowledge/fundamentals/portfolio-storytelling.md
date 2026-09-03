# Fundamental Domain: Portfolio Storytelling & Case Study Craft

A great portfolio project is an evidence-backed technical case study that convinces senior engineering reviewers, founders, and hiring managers of your engineering depth and craftsmanship.

---

## Principle 1: The 5-Second Technical Hero Value Proposition
* **Why**: Reviewers scan dozens of portfolio links daily. A hero section must communicate core technical identity instantly without requiring scroll.
* **Symptoms of Poor Implementation**: Vague marketing copy ("Building the future of software with AI"); missing stack details; no live preview or demo link.
* **Appropriate Implementation**: A technical hero section MUST answer three questions within 5 seconds:
  1. **WHAT IS IT?**: Direct, specific name and tagline (e.g. "Sub-millisecond Edge Inference Engine").
  2. **WHAT IS THE STACK?**: Explicit stack pills (e.g. Next.js 15, Rust, WebAssembly, Tailwind CSS, PostgreSQL).
  3. **CAN I SEE IT WORKING NOW?**: Live interactive demo frame, video loop, or direct Live App / GitHub links.

---

## Principle 2: Architecture & Decision Transparency
* **Why**: Senior reviewers care more about *why* you built something and *what tradeoffs* you navigated than mere visual screenshots.
* **Symptoms of Poor Implementation**: Portfolio case study consisting of 10 static screenshots with zero explanation of engineering architecture or data flow.
* **Appropriate Implementation**: Structure the presentation around **The Engineering Narrative**:
  * **Problem Context**: What bottleneck or technical challenge existed?
  * **Architecture Diagram**: Clean visual flowchart showing request flow, queue processing, or edge routing.
  * **Key Tradeoffs**: Explicitly explain 2-3 engineering decisions (e.g. "Why we chose SQLite over Postgres for edge latency").
  * **Code Snippets**: Highlight 1-2 core algorithmic or pipeline functions.

---

## Principle 3: Measured Evidence & Quantifiable Impact
* **Why**: Numeric evidence establishes credibility and separates actual working software from non-functional UI mockups.
* **Symptoms of Poor Implementation**: Subjective claims ("Super fast performance", "Highly scalable architecture") without data.
* **Appropriate Implementation**: Provide exact, reproducible metrics:
  * "Reduced initial bundle size by **42%** (380kB -> 220kB)."
  * "P99 API response latency measured at **18ms** under 1,000 synthetic requests/sec."
  * "Achieved **100/100** Lighthouse performance score across mobile and desktop."

---

## Principle 4: Authenticity vs. Fake Marketing Fluff
* **Why**: Fabricated social proof damages candidate credibility during technical interview deep-dives.
* **Symptoms of Poor Implementation**: Personal student or side projects featuring fake "Trusted by 10,000+ teams" banners, fake client logos, or fake star ratings.
* **Appropriate Implementation**: Replace fake social proof with authentic developer evidence:
  * Actual GitHub star count and open-source license badge.
  * Real automated test suite coverage metrics (e.g. "86% Unit Test Coverage").
  * Reflection notes on technical lessons learned and known future limitations.

---

## Provenance & Standards References
* Senior Engineering Hiring Rubrics (FAANG / Vercel / Stripe / Linear Case Study Standards)
* Staff Engineer (Will Larson) - Technical Writing & Decision Documentation
