import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 site-grid" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full glow-orb blur-2xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full glow-orb blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="animate-fade-up font-display text-5xl font-black tracking-[0.14em] text-white sm:text-6xl md:text-7xl">
              {siteConfig.name}
            </p>
            <h1 className="animate-fade-up-delay mt-5 max-w-xl font-display text-2xl font-semibold leading-tight tracking-wide text-accent-cyan sm:text-3xl">
              {siteConfig.tagline}
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.links.apk}>Download APK</ButtonLink>
              <ButtonLink href="#ecosystem" variant="secondary">
                Explore ecosystem
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
            <div className="absolute inset-8 rounded-full border border-accent-cyan/25 animate-pulse-ring" />
            <div className="absolute inset-16 rounded-full border border-accent-cyan/15" />
            <div className="animate-float relative">
              <Image
                src="/lana-logo.png"
                alt="LANA app mark"
                width={420}
                height={420}
                priority
                className="h-auto w-full max-w-[360px] drop-shadow-[0_0_40px_rgba(0,212,255,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
