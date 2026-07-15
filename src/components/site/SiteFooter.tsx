import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-accent-cyan/15 bg-[#0b0b14]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/lana-logo.png" alt="" width={40} height={40} className="rounded-md" />
            <p className="font-display text-sm font-bold tracking-[0.22em] text-white">
              {siteConfig.name}
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Architecting a play-to-progress rewards experience with claim loops, missions, and
            community growth.
          </p>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted hover:text-accent-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-muted hover:text-accent-cyan">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted hover:text-accent-cyan">
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent-green">
            Systems operational
          </p>
        </div>
      </div>

      <div className="border-t border-accent-cyan/10 py-5 text-center text-xs tracking-wide text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
