"use client";

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
    <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm shrink-0" style={{ background: "#fff" }}>
      <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" fill="white" />
        {/* Red accent bar at top */}
        <rect width="56" height="6" fill="#CE0E2D" />
        {/* Bold red "S" lettermark */}
        <text
          x="28"
          y="39"
          textAnchor="middle"
          fill="#CE0E2D"
          fontSize="30"
          fontFamily="Georgia, Times New Roman, serif"
          fontWeight="700"
        >
          S
        </text>
        {/* "SUT" label at bottom */}
        <text
          x="28"
          y="52"
          textAnchor="middle"
          fill="#CE0E2D"
          fontSize="5.5"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          letterSpacing="1"
        >
          SUT
        </text>
      </svg>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold mb-3">
            Education
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2C2118] mb-16 leading-tight">
            Where I&apos;m learning.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 12px 40px 0 rgba(44,33,24,0.09)" }}
            transition={{ duration: 0.25 }}
            className="bg-[#F2EDE8] rounded-2xl border border-[#E0D5CB] p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="mb-4">
                  <SwinburneLogo />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2C2118] leading-tight">
                  Swinburne University
                  <br />
                  of Technology
                </h3>
                <p className="text-[#C9956B] font-medium text-sm mt-1">
                  Bachelor of Computer Science · Major in AI
                </p>
              </div>
              <div className="text-sm text-[#9B8578] sm:text-right shrink-0">
                <p>Sep 2023 – Sep 2027</p>
                <p className="text-[#C9956B] text-xs font-medium mt-1">In progress</p>
              </div>
            </div>

            <div className="border-t border-[#E0D5CB] pt-6">
              <p className="text-xs text-[#9B8578] tracking-widest uppercase font-semibold mb-4">
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
                    className="text-xs px-3 py-1.5 rounded-full bg-[#FAF8F5] text-[#7A6558] border border-[#E0D5CB]"
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
