import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export function LegalDoc({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const { legal } = siteConfig;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-cyan">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-wide text-white">{title}</h1>
      {description ? (
        <p className="mt-3 text-sm text-muted">{description}</p>
      ) : null}
      <p className="mt-2 text-xs tracking-wide text-muted/80">
        Effective Date: {legal.effectiveDate} · Last Updated: {legal.lastUpdated}
      </p>
      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted">{children}</div>
      <Link href="/" className="mt-12 inline-block text-sm text-accent-cyan hover:text-accent-bright">
        ← Back to home
      </Link>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-lg font-semibold tracking-wide text-white">{title}</h2>
      {children}
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-base font-semibold text-foreground">{children}</h3>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
