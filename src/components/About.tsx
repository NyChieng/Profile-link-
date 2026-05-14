"use client";

import FadeIn from "./FadeIn";

const highlights = [
  { value: "5+", label: "Years in client-facing roles" },
  { value: "AI", label: "Major specialization" },
  { value: "2027", label: "Expected graduation" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold mb-3">
            About me
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2C2118] mb-8 leading-tight">
            Building the future,
            <br />
            one model at a time.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="space-y-5 text-[#5A4236] text-base leading-[1.85]">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="font-medium text-[#2C2118]">Swinburne University of Technology</span>{" "}
                in Sarawak, Malaysia, majoring in Artificial Intelligence. I&apos;m passionate about
                creating intelligent systems that solve real-world problems — not just theoretically,
                but in ways that genuinely improve people&apos;s lives.
              </p>
              <p>
                Alongside my studies, I&apos;ve applied my technical skills professionally — from
                architecting an OCR-powered accounting automation system using the Gemini API, to
                overhauling network infrastructure at a local trading company. I believe the best
                engineers combine deep technical curiosity with a genuine care for the people
                they&apos;re building for.
              </p>
              <p>
                Outside of code, I work as an insurance agent at{" "}
                <span className="font-medium text-[#2C2118]">Allianz</span>, where I&apos;ve spent
                five years building trust with clients and helping them navigate important financial
                decisions — a skill I carry into every technical project I take on.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="bg-[#F2EDE8] rounded-2xl p-6 border border-[#E0D5CB] space-y-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-4">
                  <span className="font-serif text-3xl font-bold text-[#C9956B] min-w-[3rem]">
                    {h.value}
                  </span>
                  <span className="text-sm text-[#7A6558] leading-snug">{h.label}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#E0D5CB]">
                <p className="text-xs text-[#9B8578] leading-relaxed">
                  Currently open to AI engineering internships and collaborative research projects.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
