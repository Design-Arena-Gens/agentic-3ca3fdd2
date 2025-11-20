const roadmap = [
  {
    quarter: "Q1",
    initiatives: [
      "Release theming API with JSON schema export.",
      "Ship motion tokens for micro-interactions.",
    ],
  },
  {
    quarter: "Q2",
    initiatives: [
      "Expand chart primitives (area, stacked bar, radial).",
      "Introduce figma-to-code pipeline powered by tokens.",
    ],
  },
  {
    quarter: "Q3",
    initiatives: [
      "Create adaptive layout utilities for multi-brand apps.",
      "Launch accessibility regression suite with Storybook.",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.2)]">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Implementation roadmap
        </h2>
        <p className="max-w-xl text-sm text-zinc-600">
          Drift DS evolves alongside the product. Explore the upcoming quarters
          to understand where the system is headed.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        {roadmap.map((item) => (
          <article
            key={item.quarter}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400">
              {item.quarter}
            </span>
            <ul className="space-y-2 text-sm text-zinc-600">
              {item.initiatives.map((initiative) => (
                <li key={initiative} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{initiative}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
