"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y border-accent-cyan/10 bg-secondary/35 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Knowledge base"
          title="Frequently asked questions"
          description="Quick answers about LANA, claims, wallets, and downloads."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-accent-cyan/20 bg-panel"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <span className="font-display text-accent-cyan">{open ? "−" : "+"}</span>
                </button>
                {open ? (
                  <p className="border-t border-accent-cyan/10 px-5 py-4 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
