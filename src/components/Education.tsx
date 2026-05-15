"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const courses = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Design",
  "Data Structures & Algorithms",
  "Database Systems",
  "Computer Networks",
  "Computer Vision",
  "Natural Language Processing",
  "Software Engineering",
];

function SwinburneLogo() {
  return (
    <div className="h-12 w-24 rounded-xl overflow-hidden shadow-sm shrink-0 bg-black flex items-center justify-center">
      <Image
        src="/swinburne.png"
        alt="Swinburne University of Technology"
        width={192}
        height={96}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-[#0D0B0A]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#C9956B]" />
            <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold">
              Education
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#EDE5DA] mb-16 leading-tight tracking-[-0.01em]">
            Where I&apos;m learning.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 20px 56px 0 rgba(0,0,0,0.5)" }}
            transition={{ duration: 0.25 }}
            className="bg-[#181410] rounded-2xl border border-white/[0.07] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
              style={{ background: "linear-gradient(to bottom, #C9956B, rgba(201,149,107,0.1))" }}
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="mb-4">
                  <SwinburneLogo />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#EDE5DA] leading-tight">
                  Swinburne University
                  <br />
                  of Technology
                </h3>
                <p className="text-[#C9956B] font-medium text-sm mt-1">
                  Bachelor of Computer Science · Major in AI
                </p>
              </div>
              <div className="text-sm text-[#EDE5DA]/45 sm:text-right shrink-0">
                <p>Sep 2023 – Sep 2027</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium mt-1.5 px-2.5 py-0.5 rounded-full bg-[#C9956B]/10 text-[#C9956B] border border-[#C9956B]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9956B]" />
                  In progress
                </span>
              </div>
            </div>

            <div className="border-t border-white/[0.07] pt-6">
              <p className="text-xs text-[#EDE5DA]/35 tracking-widest uppercase font-semibold mb-4">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-[#EDE5DA]/55 border border-white/[0.08]"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
