"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

/* ─── Brand-accurate logo badges ─────────────────────────────────────────── */

function AllianzLogo() {
  return (
    <div
      className="w-14 h-14 rounded-xl shadow-sm overflow-hidden shrink-0"
      style={{ background: "#003781" }}
    >
      <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified Allianz eagle — three nested arcs */}
        <g transform="translate(28,24)">
          {/* top wing pair */}
          <path
            d="M0,-11 C-5,-11 -11,-5 -11,2 C-7,-2 -3,-4 0,-4 C3,-4 7,-2 11,2 C11,-5 5,-11 0,-11Z"
            fill="white"
          />
          {/* mid body */}
          <path
            d="M-11,2 C-11,8 -7,12 -3,13 L0,14 L3,13 C7,12 11,8 11,2 C7,-2 3,-4 0,-4 C-3,-4 -7,-2 -11,2Z"
            fill="white"
            opacity="0.85"
          />
          {/* tail */}
          <path d="M-4,14 C-2,18 0,20 0,20 C0,20 2,18 4,14Z" fill="white" opacity="0.9" />
        </g>
        <text
          x="28"
          y="52"
          textAnchor="middle"
          fill="white"
          fontSize="6.5"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          letterSpacing="0.8"
        >
          ALLIANZ
        </text>
      </svg>
    </div>
  );
}

function YLTradingLogo() {
  return (
    <div
      className="w-14 h-14 rounded-xl shadow-sm flex flex-col items-center justify-center gap-0.5 shrink-0"
      style={{ background: "#1B2A4A" }}
    >
      <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle grid/tech pattern */}
        <line x1="14" y1="8" x2="14" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="28" y1="8" x2="28" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="42" y1="8" x2="42" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="14" x2="48" y2="14" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="28" x2="48" y2="28" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="42" x2="48" y2="42" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        {/* YL lettermark */}
        <text
          x="28"
          y="33"
          textAnchor="middle"
          fill="#C9A96B"
          fontSize="18"
          fontFamily="Georgia, serif"
          fontWeight="700"
        >
          YL
        </text>
        <text
          x="28"
          y="46"
          textAnchor="middle"
          fill="white"
          fontSize="5"
          fontFamily="Arial, sans-serif"
          fontWeight="400"
          letterSpacing="1.2"
          opacity="0.7"
        >
          TRADING
        </text>
      </svg>
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const experiences = [
  {
    logo: <YLTradingLogo />,
    company: "YL Trading",
    role: "Technical Advisor",
    type: "Part-time",
    duration: "Jan 2026 – Mar 2026",
    period: "3 months",
    location: "Sarawak, Malaysia · On-site",
    description:
      "Spearheaded the digital transformation of YL Trading by architecting an automated accounting solution that utilizes OCR technology and the Gemini API to migrate legacy paper-based revenue data into a structured digital ecosystem. Engineered a comprehensive overhaul of the company's network infrastructure, optimizing connectivity and system reliability to support modernized, data-driven business operations.",
    skills: ["OCR Technology", "Gemini API", "MySQL", "HTML", "Network Infrastructure", "Digital Transformation", "Python"],
  },
  {
    logo: <AllianzLogo />,
    company: "Allianz",
    role: "Insurance Agent",
    type: "Part-time",
    duration: "Feb 2021 – Present",
    period: "5+ years",
    location: "Sarawak, Malaysia · Hybrid",
    description:
      "Manage insurance and financial planning for clients across Sarawak, focusing on matching the right coverage to each individual's unique needs. Day-to-day responsibilities span new client acquisition, policy consultation, claims management, and ongoing relationship maintenance — with a strong emphasis on trust, clarity, and genuine care.",
    skills: ["Financial Planning", "Client Relations", "Sales", "Marketing", "Insurance"],
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#F2EDE8]/40">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold mb-3">
            Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2C2118] mb-16 leading-tight">
            Where I&apos;ve grown.
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#E0D5CB] hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.12}>
                <div className="sm:pl-14 relative">
                  <div className="hidden sm:block absolute left-[7px] top-7 w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-[#C9956B] shadow-sm" />

                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 8px 32px 0 rgba(44,33,24,0.08)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#FAF8F5] rounded-2xl border border-[#E0D5CB] p-7 shadow-sm"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                          <div>
                            <h3 className="font-serif text-xl font-semibold text-[#2C2118]">
                              {exp.role}
                            </h3>
                            <p className="text-[#C9956B] font-medium text-sm mt-0.5">
                              {exp.company} · {exp.type}
                            </p>
                          </div>
                          <div className="sm:text-right shrink-0">
                            <p className="text-[#9B8578] text-sm">{exp.duration}</p>
                            <p className="text-[#C9956B] text-xs font-medium">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#B09585] mb-4 flex items-center gap-1.5">
                      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {exp.location}
                    </p>

                    <p className="text-[#5A4236] text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-[#F2EDE8] text-[#7A6558] border border-[#E0D5CB]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
