"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "nengyichieng@gmail.com",
    href: "mailto:nengyichieng@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "neng-yi-chieng",
    href: "https://www.linkedin.com/in/neng-yi-chieng-32b18435a/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Sarawak, Malaysia",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#C9956B]" />
            <p className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold">
              Contact
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1410] mb-5 leading-tight tracking-[-0.01em]">
            Let&apos;s build something together.
          </h2>
          <p className="text-[#9B8578] text-base leading-relaxed max-w-xl mb-14">
            Whether you&apos;re looking to collaborate on an AI project, discuss
            opportunities, or just have a conversation — I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {links.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -4, boxShadow: "0 12px 36px 0 rgba(44,33,24,0.09)" }}
                transition={{ duration: 0.2 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col gap-3 bg-[#F2EDE8] rounded-2xl border border-[#E0D5CB] p-6 group transition-colors hover:bg-[#EDD9C8]/50 h-full"
                  >
                    <span className="text-[#C9956B]">{link.icon}</span>
                    <div>
                      <p className="text-[#9B8578] text-xs mb-1">{link.label}</p>
                      <p className="text-[#1C1410] text-sm font-medium group-hover:text-[#C9956B] transition-colors break-all">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col gap-3 bg-[#F2EDE8] rounded-2xl border border-[#E0D5CB] p-6 h-full">
                    <span className="text-[#C9956B]">{link.icon}</span>
                    <div>
                      <p className="text-[#9B8578] text-xs mb-1">{link.label}</p>
                      <p className="text-[#1C1410] text-sm font-medium">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Footer */}
        <div className="border-t border-[#E0D5CB] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-serif text-[#9B8578] text-sm">
            Neng Yi (Leslie) Chieng
          </p>
          <p className="text-[#C9956B]/70 text-xs tracking-wide">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
