import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, SITE_NAME, TOOL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Who writes ${SITE_NAME} and why it exists.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">About {SITE_NAME}</h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed">
            <p>
              {SITE_NAME} is written and maintained by Kroza, a small team building video tools for
              creators who post across more than one language and platform. We also build{" "}
              <a href={TOOL_URL} className="text-indigo-600 underline dark:text-indigo-400">
                a free video downloader and AI publishing tool
              </a>{" "}
              — this site is where we write up the how-to guides and answer the questions that come
              up around it, in more depth than a product page has room for.
            </p>
            <p>
              We started with a bilingual English/Khmer creator audience in mind, because most video
              tooling only ever ships in English. That focus still shapes what we write about.
            </p>
            <p>
              Every guide here is written from direct experience running the tool in production —
              when something breaks (platforms change their APIs often), we update the guide, not
              just the software.
            </p>
            <p>
              Questions, corrections, or a guide you wish existed?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 underline dark:text-indigo-400">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
