import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-cyan text-primary hover:bg-accent-bright shadow-[0_0_24px_rgba(0,212,255,0.35)]",
  secondary:
    "border border-accent-cyan/40 bg-secondary/80 text-accent-cyan hover:border-accent-cyan hover:bg-secondary",
  ghost: "text-accent-cyan hover:text-accent-bright",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`;
  const isExternal = external ?? /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
