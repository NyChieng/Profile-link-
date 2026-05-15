"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.75-7.896a24.301 24.301 0 0 0-4.5 0" />
      </svg>
    ),
    skills: ["Artificial Intelligence", "Machine Learning", "OCR Technology", "Gemini API", "Computer Vision", "NLP"],
  },
  {
    category: "Development",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: ["Python", "JavaScript", "TypeScript", "HTML / CSS", "MySQL", "React", "Next.js", "Git"],
  },
  {
    category: "Infrastructure & Tools",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: ["Network Infrastructure", "System Design", "Software Design", "Digital Transformation"],
  },
  {
    category: "Professional",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    skills: ["Financial Planning", "Client Relations", "Sales", "Marketing", "Insurance"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#100E0C]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#C9956B]" />
            <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold">
              Skills
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#EDE5DA] mb-16 leading-tight tracking-[-0.01em]">
            What I bring to the table.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.08}>
              <div className="bg-[#181410] rounded-2xl border border-white/[0.07] p-6 h-full shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="p-1.5 rounded-lg bg-white/[0.06] text-[#C9956B] border border-white/[0.07]">
                    {group.icon}
                  </span>
                  <h3 className="font-medium text-sm text-[#EDE5DA] tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.06 + si * 0.045, duration: 0.35, ease: "easeOut" }}
                      whileHover={{ scale: 1.04, backgroundColor: "rgba(201,149,107,0.15)", borderColor: "rgba(201,149,107,0.4)" }}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-[#EDE5DA]/55 border border-white/[0.08] cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
