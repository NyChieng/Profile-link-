"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0B0A]/90 backdrop-blur-md shadow-sm border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg font-semibold tracking-tight text-[#EDE5DA]"
        >
          Leslie Chieng
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 mr-2">
          {links.map((link) => (
            <li key={link.href} className="relative py-1">
              <a
                href={link.href}
                className={`text-sm transition-colors duration-300 tracking-wide ${
                  activeSection === link.href
                    ? "text-[#EDE5DA]"
                    : "text-[#EDE5DA]/45 hover:text-[#EDE5DA]"
                }`}
              >
                {link.label}
              </a>
              {/* Sliding underline for active section — only shown when scrolled into body */}
              {scrolled && activeSection === link.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full bg-[#C9956B]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* GitHub icon link — desktop */}
        <a
          href="https://github.com/NyChieng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hidden md:flex items-center justify-center text-[#EDE5DA]/45 hover:text-[#EDE5DA] transition-colors duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#EDE5DA] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#EDE5DA] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1C1410]" : "bg-[#EDE5DA]"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0D0B0A]/96 backdrop-blur-md border-b border-white/[0.07]"
        >
          <ul className="flex flex-col px-6 pb-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm transition-colors block py-1 ${
                    activeSection === link.href
                      ? "text-[#C9956B]"
                      : "text-[#EDE5DA]/45 hover:text-[#EDE5DA]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/NyChieng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#EDE5DA]/45 hover:text-[#EDE5DA] transition-colors flex items-center gap-2 py-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
