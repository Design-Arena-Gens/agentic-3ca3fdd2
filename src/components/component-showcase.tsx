"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Menu, Sparkles } from "lucide-react";

type ComponentDemo = "cta" | "card" | "navigation";

const demos: Record<ComponentDemo, { label: string; description: string }> = {
  cta: {
    label: "Action button",
    description: "Primary button variants with motion-friendly states.",
  },
  card: {
    label: "Insight card",
    description: "Surface hierarchy for analytics and status reporting.",
  },
  navigation: {
    label: "Command menu",
    description: "Palette navigation for power users on desktop.",
  },
};

export default function ComponentShowcase() {
  const [activeDemo, setActiveDemo] = useState<ComponentDemo>("cta");

  return (
    <section
      id="components"
      className="flex flex-col gap-6 rounded-3xl border border-zinc-100 bg-gradient-to-br from-white via-white to-indigo-50 p-6 shadow-xl shadow-indigo-200/50"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Component playground
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600">
          Prebuilt React components ship with state tokens, motion guidelines,
          and code samples. Swap between demos to preview how Drift DS handles
          interaction and density.
        </p>
      </header>
      <div className="flex flex-wrap gap-3">
        {(Object.keys(demos) as ComponentDemo[]).map((demo) => (
          <button
            key={demo}
            type="button"
            onClick={() => setActiveDemo(demo)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeDemo === demo
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:text-zinc-900"
            }`}
          >
            {demos[demo].label}
          </button>
        ))}
      </div>
      <p className="text-sm text-zinc-500">{demos[activeDemo].description}</p>
      <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-lg">
        {activeDemo === "cta" ? <ButtonShowcase /> : null}
        {activeDemo === "card" ? <CardShowcase /> : null}
        {activeDemo === "navigation" ? <CommandPaletteShowcase /> : null}
      </div>
    </section>
  );
}

function ButtonShowcase() {
  return (
    <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-zinc-900">
          Primary button bundle
        </h3>
        <p className="text-sm text-zinc-500">
          16px spacing grid, 14px label, dense shadow, and focus ring all sourced
          from core tokens.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Launch
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Secondary
        </button>
        <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
          Dark
        </button>
      </div>
    </div>
  );
}

function CardShowcase() {
  return (
    <div className="grid gap-6 bg-gradient-to-br from-zinc-50 via-white to-white p-6 md:grid-cols-[1.2fr,0.8fr] md:items-start">
      <article className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-indigo-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-indigo-500">
                Signal
              </span>
              <h3 className="text-lg font-semibold text-zinc-900">
                Engagement pulse
              </h3>
            </div>
          </div>
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
            +12.4%
          </span>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Compare week-over-week health, analyze retention cohorts, and share
          insights directly within dashboards.
        </p>
        <div className="mt-6 grid gap-4 text-sm text-zinc-600">
          <div className="flex items-center justify-between">
            <span>Returning users</span>
            <span className="font-semibold text-zinc-900">18.2k</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Active segments</span>
            <span className="font-semibold text-zinc-900">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Alerts triggered</span>
            <span className="font-semibold text-rose-500">3</span>
          </div>
        </div>
      </article>
      <div className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-6 text-sm text-zinc-500 shadow-md">
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Tokens applied
        </h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            color.brand[500]
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-900" />
            elevation.card
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-200" />
            radius.xl
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-200" />
            layout.gap[24]
          </li>
        </ul>
      </div>
    </div>
  );
}

function CommandPaletteShowcase() {
  return (
    <div className="flex flex-col gap-6 bg-zinc-950 p-6 text-white md:flex-row md:items-start md:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
          Command UI
        </p>
        <h3 className="text-lg font-semibold">Palette-first navigation</h3>
        <p className="text-sm text-zinc-400">
          Supports fuzzy search, nested actions, keyboard shortcuts, and theme
          aware surfaces out of the box.
        </p>
      </div>
      <div className="flex-1">
        <div className="rounded-2xl bg-zinc-900/60 p-4 shadow-inner shadow-black/50 backdrop-blur">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            <Menu className="h-4 w-4 text-white/60" />
            <span className="flex-1 text-white/80">Jump to: audit logs</span>
            <kbd className="rounded bg-white/10 px-2 py-1 text-xs text-white/60">
              ⌘
            </kbd>
            <kbd className="rounded bg-white/10 px-2 py-1 text-xs text-white/60">
              K
            </kbd>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { title: "Create release note", shortcut: "N" },
              { title: "Review accessibility flags", shortcut: "F" },
              { title: "Switch to dark theme", shortcut: "D" },
            ].map((action) => (
              <li
                key={action.title}
                className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-emerald-400/80" />
                  {action.title}
                </span>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <kbd className="rounded bg-white/10 px-2 py-1">
                    ⌘
                  </kbd>
                  <kbd className="rounded bg-white/10 px-2 py-1">
                    {action.shortcut}
                  </kbd>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
