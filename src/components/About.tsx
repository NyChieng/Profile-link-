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
  {
    node: <AnimatedNumber from={0} to={5} suffix="+" />,
    label: "Years in client-facing roles",
  },
  {
    node: "AI",
    label: "Major specialization",
  },
  {
    node: <AnimatedNumber from={2024} to={2027} />,
    label: "Expected graduation",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
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
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1410] mb-10 leading-tight tracking-[-0.01em]">
            Building the future,
            <br />
            one model at a time.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <FadeIn delay={0.2} className="md:col-span-3">
            <div className="space-y-5 text-[#5A4236] text-base leading-[1.9]">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="font-medium text-[#1C1410]">
                  Swinburne University of Technology
                </span>{" "}
                in Sarawak, Malaysia, majoring in Artificial Intelligence. I&apos;m
                passionate about creating intelligent systems that solve real-world
                problems — not just theoretically, but in ways that genuinely improve
                people&apos;s lives.
              </p>
              <p>
                Alongside my studies, I&apos;ve applied my technical skills
                professionally — from architecting an OCR-powered accounting
                automation system using the Gemini API, to overhauling network
                infrastructure at a local trading company. I believe the best
                engineers combine deep technical curiosity with a genuine care for
                the people they&apos;re building for.
              </p>
              <p>
                Outside of code, I work as an insurance agent at{" "}
                <span className="font-medium text-[#1C1410]">Allianz</span>, where
                I&apos;ve spent five years building trust with clients and helping
                them navigate important financial decisions — a skill I carry into
                every technical project I take on.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="md:col-span-2">
            <div className="bg-[#F2EDE8] rounded-2xl border border-[#E0D5CB] overflow-hidden shadow-sm">
              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-[#E0D5CB]">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex flex-col items-center text-center px-4 py-7"
                  >
                    <span className="font-serif text-3xl font-bold text-[#C9956B] mb-1.5 leading-none">
                      {h.node}
                    </span>
                    <span className="text-[0.67rem] text-[#9B8578] leading-snug">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Availability callout */}
              <div className="border-t border-[#E0D5CB] px-6 py-4 bg-[#FAF8F5]">
                <p className="text-xs text-[#9B8578] leading-relaxed">
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
