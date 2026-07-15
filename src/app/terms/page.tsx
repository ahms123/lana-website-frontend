import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-cyan">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-wide text-white">
        Terms of Service
      </h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          By using LANA products and this website, you agree to participate fairly and follow
          community and platform standards.
        </p>
        <p>
          Abuse, multi-account manipulation, fraud, or exploitation of reward systems may result in
          restrictions or permanent suspension.
        </p>
        <p>
          LANA may update features, reward structures, and security protocols over time. Branding,
          intellectual property, and product assets remain the property of LANA unless otherwise
          stated.
        </p>
        <p>
          Continued use after updates means you accept the latest terms. Prefer fair play and
          long-term participation.
        </p>
        <p className="text-xs text-muted/80">
          Placeholder legal copy for the marketing site — replace with counsel-reviewed text before
          production launch.
        </p>
      </div>
      <Link href="/" className="mt-10 inline-block text-sm text-accent-cyan hover:text-accent-bright">
        ← Back to home
      </Link>
    </div>
  );
}
