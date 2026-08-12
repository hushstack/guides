import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `How to reach the ${SITE_NAME} team.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed">
            <p>
              For guide corrections, tool support, or anything else, email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 underline dark:text-indigo-400">
                {CONTACT_EMAIL}
              </a>
              . We read every message and reply personally.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
