"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

function AllianzLogo() {
  return (
    <div className="w-14 h-14 rounded-xl shadow-sm overflow-hidden shrink-0 bg-white flex items-center justify-center p-1.5">
      <Image
        src="/allianz.png"
        alt="Allianz"
        width={44}
        height={44}
        className="object-contain w-full h-full"
      />
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
        <line x1="14" y1="8" x2="14" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="28" y1="8" x2="28" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="42" y1="8" x2="42" y2="48" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="14" x2="48" y2="14" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="28" x2="48" y2="28" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <line x1="8" y1="42" x2="48" y2="42" stroke="#C9A96B" strokeWidth="0.4" opacity="0.4" />
        <text x="28" y="33" textAnchor="middle" fill="#C9A96B" fontSize="18" fontFamily="Georgia, serif" fontWeight="700">
          YL
        </text>
        <text x="28" y="46" textAnchor="middle" fill="white" fontSize="5" fontFamily="Arial, sans-serif" fontWeight="400" letterSpacing="1.2" opacity="0.7">
          TRADING
        </text>
      </svg>
    </div>
  );
}

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
      "Built an OCR pipeline using the Gemini API to automate invoice processing and move years of paper records into a proper database. Also handled a full overhaul of the company's network infrastructure to improve reliability and set the team up for more modern workflows.",
    skills: ["OCR Technology", "Gemini API", "MySQL", "Python", "Network Infrastructure", "HTML"],
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
      "Work directly with clients across Sarawak to understand their needs and guide them toward the right solution for their situation. The role has taught me a lot about listening carefully, communicating clearly, and building relationships that actually last.",
    skills: ["Client Relations", "Communication", "Sales", "Marketing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#100E0C]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#C9956B]" />
            <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold">
              Experience
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#EDE5DA] mb-16 leading-tight tracking-[-0.01em]">
            Where I&apos;ve grown.
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[1.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9956B]/50 via-white/[0.07] to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.12}>
                <div className="sm:pl-16 relative">
                  <div className="hidden sm:flex absolute left-[1.1rem] top-8 w-3 h-3 rounded-full bg-[#100E0C] border-2 border-[#C9956B] shadow-sm items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#C9956B]" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 20px 56px 0 rgba(0,0,0,0.5)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#181410] rounded-2xl border border-white/[0.07] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.5)] relative overflow-hidden"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                      style={{ background: "linear-gradient(to bottom, #C9956B, rgba(201,149,107,0.1))" }}
                    />

                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                          <div>
                            <h3 className="font-serif text-xl font-semibold text-[#EDE5DA]">
                              {exp.role}
                            </h3>
                            <p className="text-[#C9956B] font-medium text-sm mt-0.5">
                              {exp.company} · {exp.type}
                            </p>
                          </div>
                          <div className="sm:text-right shrink-0">
                            <p className="text-[#EDE5DA]/45 text-sm">{exp.duration}</p>
                            <p className="text-[#C9956B] text-xs font-medium">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#EDE5DA]/35 mb-4 flex items-center gap-1.5">
                      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {exp.location}
                    </p>

                    <p className="text-[#EDE5DA]/60 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-[#EDE5DA]/55 border border-white/[0.08]"
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
