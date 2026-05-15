"use client";

import FadeIn from "./FadeIn";
import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

function AnimatedNumber({
  from,
  to,
  suffix = "",
}: {
  from: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(from.toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, from, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const highlights = [
  { node: <AnimatedNumber from={0} to={3} suffix="+" />, label: "Years building software" },
  { node: "AI", label: "Major specialization" },
  { node: <AnimatedNumber from={2024} to={2027} />, label: "Expected graduation" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0D0B0A]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#C9956B]" />
            <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold">
              About me
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#EDE5DA] mb-10 leading-tight tracking-[-0.01em]">
            Building the future,
            <br />
            one model at a time.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <FadeIn delay={0.2} className="md:col-span-3">
            <div className="space-y-5 text-[#EDE5DA]/60 text-base leading-[1.9]">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="font-medium text-[#EDE5DA]">
                  Swinburne University of Technology
                </span>{" "}
                in Sarawak, Malaysia, majoring in Artificial Intelligence. I
                genuinely enjoy building things that work in the real world, not
                just in theory.
              </p>
              <p>
                Right now I am working on an OCR pipeline powered by the Gemini API
                to automate invoice processing for a local trading company. I also
                helped overhaul their network infrastructure from the ground up.
                Watching something I built go from idea to production is still the
                best feeling.
              </p>
              <p>
                I am most interested in LLMs, computer vision, and systems that turn
                messy real world data into something actually useful. If that sounds
                like something you are working on, I would love to hear about it.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="md:col-span-2">
            <div className="bg-[#181410] rounded-2xl border border-white/[0.07] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex flex-col items-center text-center px-4 py-7"
                  >
                    <span className="font-serif text-3xl font-bold text-[#C9956B] mb-1.5 leading-none">
                      {h.node}
                    </span>
                    <span className="text-[0.67rem] text-[#EDE5DA]/40 leading-snug">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/[0.07] px-6 py-4 bg-[#141210]">
                <p className="text-xs text-[#EDE5DA]/40 leading-relaxed">
                  Currently open to AI engineering internships and collaborative
                  research projects.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
