"use client";

import { useMemo, useState } from "react";

type TokenCategory = "Color" | "Typography" | "Surface";

const tokenData: Record<TokenCategory, Array<{ name: string; value: string; note?: string }>> =
  {
    Color: [
      { name: "brand/500", value: "#6366F1", note: "Primary actions" },
      { name: "accent/400", value: "#22D3EE", note: "Highlights & charts" },
      { name: "neutral/900", value: "#0B1120", note: "Dominant text" },
      { name: "neutral/100", value: "#F4F4F5", note: "Background layers" },
    ],
    Typography: [
      { name: "font/sans", value: "Geist Variable", note: "Headings & UI" },
      { name: "font/mono", value: "Geist Mono", note: "Data & code" },
      { name: "size/title", value: "2.5rem / 44px", note: "Hero display" },
      { name: "size/body", value: "1rem / 18px", note: "Default copy" },
    ],
    Surface: [
      { name: "radius/card", value: "1.25rem", note: "Surface containers" },
      { name: "radius/button", value: "999px", note: "Pills & badges" },
      { name: "shadow/elevated", value: "0px 24px 48px -12px rgba(15, 23, 42, 0.25)" },
      { name: "spacing/base", value: "8px (grid unit)", note: "Spacing scale" },
    ],
  };

const tabs: TokenCategory[] = ["Color", "Typography", "Surface"];

export default function TokenGrid() {
  const [activeTab, setActiveTab] = useState<TokenCategory>("Color");

  const visibleTokens = useMemo(() => tokenData[activeTab], [activeTab]);

  return (
    <section
      id="tokens"
      className="flex flex-col gap-6 rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-[0_30px_60px_-45px_rgba(79,70,229,0.35)] backdrop-blur"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-zinc-900">Design tokens</h2>
        <p className="max-w-xl text-sm text-zinc-600">
          Tokens power theming, accessibility, and tooling integration. Switch
          between categories to preview the source-of-truth primitives.
        </p>
      </header>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "border-transparent bg-zinc-900 text-white shadow-sm"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleTokens.map((token) => (
          <article
            key={token.name}
            className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm shadow-black/5"
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {token.name}
              </span>
              <span className="text-lg font-semibold text-zinc-900">
                {token.value}
              </span>
              {token.note ? (
                <span className="text-xs text-zinc-400">{token.note}</span>
              ) : null}
            </div>
            {activeTab === "Color" ? (
              <span
                className="h-12 w-12 rounded-xl border border-black/10 shadow-inner"
                style={{ backgroundColor: token.value }}
              />
            ) : null}
            {activeTab === "Surface" ? (
              <span className="h-12 w-12 rounded-xl border border-dashed border-zinc-300" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
