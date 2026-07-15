import { features } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentMap = {
  cyan: "border-accent-cyan/30 text-accent-cyan",
  green: "border-accent-green/30 text-accent-green",
  magenta: "border-accent-magenta/30 text-accent-magenta",
  orange: "border-accent-orange/30 text-accent-orange",
} as const;

export function FeaturesSection() {
  return (
    <section id="ecosystem" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="System architecture"
          title="Ecosystem features"
          description="Everything players need in one dark, cyan-lit experience — tuned for clarity and repeat play."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`rounded-2xl border bg-secondary/70 p-6 ${accentMap[feature.accent]}`}
            >
              <h3 className="font-display text-lg font-semibold tracking-wide text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
