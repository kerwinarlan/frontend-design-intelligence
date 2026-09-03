# Recipe: Sticky Side-by-Side Code & View Storytelling

## Overview
A split layout pattern where the left column remains sticky during vertical scrolling to explain architectural steps, while the right column scrolls matching code blocks or UI screenshots.

---

## Implementation (Next.js / React + Tailwind CSS)

```tsx
interface Step {
  id: string;
  title: string;
  description: string;
  codeSnippet: string;
}

const steps: Step[] = [
  {
    id: "step-1",
    title: "1. Client Data Serialization",
    description: "Payload parameters are validated against strict Zod schemas before transmission.",
    codeSnippet: `const payload = UserSchema.parse(input);\nawait sendEvent(payload);`,
  },
  {
    id: "step-2",
    title: "2. Edge Queue Processing",
    description: "Requests are ingested at the nearest Cloudflare Edge worker with <10ms queue delay.",
    codeSnippet: `export async function fetch(req: Request) {\n  return queue.enqueue(req);\n}`,
  },
];

export function StickyStorytellingSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Sticky Summary Column */}
        <div className="sticky top-24 h-fit self-start">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Architecture Pipeline</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
            How Data Flows Through The Engine
          </h2>
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Every client request goes through strict validation, edge routing, and asynchronous database persistence.
          </p>
        </div>

        {/* Right Scrolling Step Cards Column */}
        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-md backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold text-zinc-100">{step.title}</h3>
              <p className="mt-2 text-xs text-zinc-400">{step.description}</p>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-blue-300">
                <code>{step.codeSnippet}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```
