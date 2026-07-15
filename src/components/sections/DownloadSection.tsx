import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-24 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-accent-cyan/25 bg-gradient-to-br from-secondary via-panel to-primary px-6 py-14 sm:px-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full glow-orb blur-2xl" />
        <div className="relative max-w-2xl">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-cyan">
            Launch access
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Download LANA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Get the Android APK now, and grab store links as distribution rolls out. Same dark gaming
            theme you know from the app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.links.apk}>Download APK</ButtonLink>
            <ButtonLink href={siteConfig.links.playStore} variant="secondary">
              Play Store
            </ButtonLink>
            <ButtonLink href={siteConfig.links.appStore} variant="secondary">
              App Store
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
