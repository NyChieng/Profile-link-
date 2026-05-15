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
          ? "bg-[#FAF8F5]/92 backdrop-blur-md shadow-sm border-b border-[#E0D5CB]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-lg font-semibold tracking-tight transition-colors duration-500 ${
            scrolled ? "text-[#1C1410]" : "text-[#EDE5DA]"
          }`}
        >
          Leslie Chieng
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative py-1">
              <a
                href={link.href}
                className={`text-sm transition-colors duration-300 tracking-wide ${
                  scrolled
                    ? activeSection === link.href
                      ? "text-[#1C1410]"
                      : "text-[#9B8578] hover:text-[#1C1410]"
                    : activeSection === link.href
                    ? "text-[#EDE5DA]"
                    : "text-[#EDE5DA]/50 hover:text-[#EDE5DA]"
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1C1410]" : "bg-[#EDE5DA]"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1C1410]" : "bg-[#EDE5DA]"
            } ${menuOpen ? "opacity-0" : ""}`}
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
          className="md:hidden bg-[#FAF8F5]/96 backdrop-blur-md border-b border-[#E0D5CB]"
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
                      : "text-[#9B8578] hover:text-[#1C1410]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
