import React from "react";
import { StackText } from "../../Assets/Data/StackText";
import Stack from "./SingleStack";

/** The one deliberate accent field in the system: steel ground, type reversed to paper. */
const Stacks = () => (
  <section className="border-t border-ink/15 bg-steel-900 text-paper">
    <div className="mx-auto max-w-[1280px] px-8 py-16">
      <div className="flex flex-col items-start justify-between gap-6 border-b border-paper/20 pb-6 md:flex-row md:items-end md:gap-8">
        <h2 className="text-[44px] uppercase tracking-[-0.02em]">Meet the Stack</h2>
        <p className="max-w-[38ch] text-sm leading-relaxed text-paper/70">
          Because everyone has their favourite tools for the job
        </p>
      </div>
      <div className="grid md:grid-cols-3">
        {StackText.map((stack, index) => (
          <Stack key={stack.stack} num={index} {...stack} />
        ))}
      </div>
    </div>
  </section>
);

export default Stacks;
