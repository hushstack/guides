import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GUIDES } from "@/app/guides/data";

export const metadata: Metadata = {
  title: "All Guides",
  description: "Every guide, in one place — video downloading, publishing, and the legal questions creators actually ask.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">All Guides</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Plain-language guides for saving and publishing short-form video — no jargon, no login walls.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-xl border border-slate-200 p-5 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    {guide.category}
                  </span>
                  <ArrowRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                </div>
                <h2 className="font-medium">{guide.title}</h2>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
