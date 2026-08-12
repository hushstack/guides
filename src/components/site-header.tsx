import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { SITE_NAME, TOOL_URL } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpenText className="size-5 text-indigo-600 dark:text-indigo-400" />
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/guides" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Guides
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            About
          </Link>
          <a
            href={TOOL_URL}
            className="rounded-md bg-indigo-600 px-3 py-1.5 font-medium text-white hover:bg-indigo-700"
          >
            Try the free tool
          </a>
        </nav>
      </div>
    </header>
  );
}
