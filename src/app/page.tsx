import Hero from "@/components/hero";
import ComponentShowcase from "@/components/component-showcase";
import Principles from "@/components/principles";
import Roadmap from "@/components/roadmap";
import TokenGrid from "@/components/token-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-100/60 via-white to-white py-20 text-zinc-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 sm:px-8">
        <Hero />
        <Principles />
        <ComponentShowcase />
        <TokenGrid />
        <Roadmap />
        <footer className="rounded-3xl border border-zinc-100 bg-white p-6 text-center text-sm text-zinc-500 shadow-sm">
          Crafted for product teams building with Drift DS. Customize by editing
          <code className="mx-1 rounded bg-zinc-100 px-2 py-1">src/app/page.tsx</code>
          and hooks in <code className="mx-1 rounded bg-zinc-100 px-2 py-1">src/components</code>.
        </footer>
      </main>
    </div>
  );
}
