import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

const LAST_UPDATED = "August 12, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles data, cookies, and advertising.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: {LAST_UPDATED}</p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed">
            <p>
              {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is a content site — it doesn&rsquo;t
              require an account, doesn&rsquo;t collect personal information through forms, and
              doesn&rsquo;t run its own analytics tracking.
            </p>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Advertising and cookies</h2>
              <p className="text-slate-600 dark:text-slate-400">
                This site may display advertising served by Google AdSense. Google and its
                advertising partners may use cookies and similar technologies to serve ads based on
                your prior visits to this or other websites. You can opt out of personalized
                advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  className="text-indigo-600 underline dark:text-indigo-400"
                >
                  Google Ads Settings
                </a>
                , or{" "}
                <a
                  href="https://optout.aboutads.info"
                  className="text-indigo-600 underline dark:text-indigo-400"
                >
                  optout.aboutads.info
                </a>{" "}
                for other participating providers.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Third-party vendors, including Google, use cookies to serve ads based on a user&rsquo;s
                prior visits to this website or other websites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Links to other sites</h2>
              <p className="text-slate-600 dark:text-slate-400">
                This site links to our own downloader tool and, occasionally, to other third-party
                resources. We aren&rsquo;t responsible for the privacy practices of sites we link to
                — check their own policies before providing any information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Contact</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Questions about this policy can be sent to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 underline dark:text-indigo-400">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
