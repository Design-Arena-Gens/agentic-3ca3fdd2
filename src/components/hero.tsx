"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const gradients = [
  "from-[#6366F1] to-[#22D3EE]",
  "from-[#F97316] to-[#FACC15]",
  "from-[#3B82F6] to-[#2DD4BF]",
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 rounded-3xl bg-zinc-950 px-6 py-16 text-white shadow-2xl sm:px-16">
      <div className="grid gap-8 sm:grid-cols-[2fr,1fr] sm:items-start sm:gap-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide">
            DS • Unified design language
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Drift Design System
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            Modular foundations, responsive patterns, and delightful
            micro-interactions built for product teams that ship fast without
            sacrificing craft.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Snapshot
          </p>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-white/40">Tokens</dt>
              <dd className="text-xl font-semibold">64</dd>
            </div>
            <div>
              <dt className="text-white/40">Components</dt>
              <dd className="text-xl font-semibold">28</dd>
            </div>
            <div>
              <dt className="text-white/40">States covered</dt>
              <dd className="text-xl font-semibold">Hover • Focus • Dark</dd>
            </div>
            <div>
              <dt className="text-white/40">Platforms</dt>
              <dd className="text-xl font-semibold">Web • Native</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#components"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
        >
          Explore component kit
        </Link>
        <Link
          href="#tokens"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Browse tokens
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {gradients.map((gradient, index) => (
          <motion.div
            key={gradient}
            className={`h-32 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}
