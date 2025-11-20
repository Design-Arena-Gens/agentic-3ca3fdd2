const principles = [
  {
    title: "Accessibility first",
    description:
      "Contrast-driven palettes, keyboard friendly interactions, and WCAG guidance integrated into every pattern.",
  },
  {
    title: "Systematic layout",
    description:
      "Responsive grid tokens and spacing primitives that scale from mobile flows to data-dense dashboards.",
  },
  {
    title: "Opinionated defaults",
    description:
      "Curated components with sensible defaults, optional variants, and just enough flexibility for teams to move quickly.",
  },
];

export default function Principles() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Principles
        </h2>
        <p className="max-w-2xl text-base text-zinc-600">
          Drift DS codifies the best of our product craft. Each principle acts
          as a guardrail to ensure consistency while giving teams room to
          explore.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm shadow-black/5"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {principle.title}
            </h3>
            <p className="text-sm text-zinc-600">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
