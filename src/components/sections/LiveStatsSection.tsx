import { stats } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LiveStatsSection() {
  return (
    <section className="border-y border-accent-cyan/10 bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Live product tracking"
          title="Built for momentum"
          description="Core loops that keep players returning — claim, missions, frens, earn, and wallet progress."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-accent-cyan/20 bg-panel/80 px-4 py-5 text-center"
            >
              <p className="font-display text-2xl font-bold tracking-wide text-accent-cyan">
                {item.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
