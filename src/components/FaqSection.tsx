"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Частые вопросы</h2>

        <div className="mt-8 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="rounded-xl border border-border bg-background">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-navy">{item.q}</span>
                  <span className={`shrink-0 text-lg text-blue transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-foreground/70">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
