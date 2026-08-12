import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="mb-3 flex items-center justify-center gap-4">
        <Link href="/guides" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
          Guides
        </Link>
        <Link href="/about" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
          About
        </Link>
        <Link href="/contact" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
          Privacy Policy
        </Link>
      </div>
      &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
    </footer>
  );
}
