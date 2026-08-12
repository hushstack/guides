import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { GUIDES } from "@/app/guides/data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, TOOL_URL } from "@/lib/constants";

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <JsonLd data={WEBSITE_JSON_LD} />
      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-16 text-center sm:py-24">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Video guides, without the runaround
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {SITE_DESCRIPTION}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/guides"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Browse all guides
            </Link>
            <a
              href={TOOL_URL}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Try the free downloader
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h2 className="mb-6 text-2xl font-semibold">Latest guides</h2>
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
                <h3 className="font-medium">{guide.title}</h3>
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
