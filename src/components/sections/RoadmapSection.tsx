import { roadmap } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const statusClass = {
  Live: "text-accent-green border-accent-green/40 bg-accent-green/10",
  Now: "text-accent-cyan border-accent-cyan/40 bg-accent-cyan/10",
  Next: "text-accent-orange border-accent-orange/40 bg-accent-orange/10",
  Soon: "text-muted border-white/15 bg-white/5",
} as const;

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Strategic evolution"
          title="Ecosystem roadmap"
          description="A multi-phase path from core loops to broader ecosystem scale."
        />
        <div className="relative grid gap-5 md:grid-cols-2">
          <div className="pointer-events-none absolute bottom-4 left-4 top-4 hidden w-px bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/15 to-transparent md:block" />
          {roadmap.map((item) => (
            <article
              key={item.phase}
              className="rounded-2xl border border-accent-cyan/20 bg-secondary/60 p-6 md:odd:translate-y-2"
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  {item.phase}
                </p>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${statusClass[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
