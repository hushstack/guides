import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { GUIDES, getGuide } from "@/app/guides/data";
import { SITE_URL, TOOL_URL } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const guideUrl = `${SITE_URL}/guides/${guide.slug}`;

  const howToJsonLd =
    guide.category === "Legal"
      ? null
      : {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: guide.title,
          description: guide.description,
          step: guide.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.body,
          })),
        };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: guideUrl },
    ],
  };

  return (
    <div className="flex flex-1 flex-col">
      {howToJsonLd && <JsonLd data={howToJsonLd} />}
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto max-w-3xl px-6 pt-8 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/guides" className="hover:underline">Guides</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-slate-900 dark:text-slate-100">{guide.category}</span>
          </nav>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{guide.title}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: {guide.updated}</p>
          <p className="mt-6 text-base leading-relaxed">{guide.intro}</p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-12">
          <ol className="space-y-5">
            {guide.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {guide.tips.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 pb-12">
            <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Good to know
              </h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
                {guide.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className="mb-6 text-2xl font-semibold">Frequently asked questions</h2>
          <div className="space-y-4">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {guide.category !== "Legal" && (
          <section className="mx-auto max-w-3xl px-6 pb-16">
            <a
              href={TOOL_URL}
              className="flex items-center justify-between rounded-xl border border-indigo-200 bg-indigo-50 p-5 hover:border-indigo-300 dark:border-indigo-900 dark:bg-indigo-950/40 dark:hover:border-indigo-800"
            >
              <div>
                <h2 className="font-semibold text-indigo-900 dark:text-indigo-200">
                  Ready to try it? Use the free downloader
                </h2>
                <p className="mt-1 text-sm text-indigo-700/80 dark:text-indigo-300/80">
                  Paste a link, pick a quality, download — no account needed.
                </p>
              </div>
              <ExternalLink className="size-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            </a>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
