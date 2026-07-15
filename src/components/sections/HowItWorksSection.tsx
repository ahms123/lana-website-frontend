import { steps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-accent-cyan/10 bg-[#0c0c16] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Player path"
          title="How it works"
          description="Three clear steps from signup to ongoing rewards."
        />
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative overflow-hidden rounded-2xl border border-accent-cyan/20 bg-panel p-6"
            >
              <p className="font-display text-4xl font-black text-accent-cyan/25">{item.step}</p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
