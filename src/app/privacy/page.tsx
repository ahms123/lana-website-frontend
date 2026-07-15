import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-cyan">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-wide text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          LANA (“we”, “our”) respects your privacy. This page summarizes how account and usage
          information may be handled across the LANA app and website.
        </p>
        <p>
          We collect information needed to operate core features such as authentication, claims,
          tasks, referrals, and support. We do not sell personal data.
        </p>
        <p>
          Data may be processed to secure accounts, improve product reliability, and deliver reward
          and progression features. Access is limited to systems and personnel required to operate
          the service.
        </p>
        <p>
          This policy may be updated as the product evolves. Continued use of LANA after updates
          constitutes acceptance of the revised policy.
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
