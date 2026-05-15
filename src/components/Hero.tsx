"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  // Background layers drift up as you scroll (slower than content → parallax depth)
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  // Content drifts up slightly faster, exaggerating the separation
  const contentY = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0D0B0A" }}
    >
      {/* Grain texture — parallaxes with background */}
      <motion.div
        style={{ y: bgY }}
        className="hero-grain absolute inset-[-8%] pointer-events-none"
      />

      {/* Radial centre glow — parallaxes with background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, #1f1814 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-center px-6 max-w-3xl mx-auto"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div
            className="relative w-28 h-28 rounded-full overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 2px rgba(201,149,107,0.45), 0 0 0 5px rgba(201,149,107,0.10), 0 0 32px rgba(201,149,107,0.12)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Neng Yi (Leslie) Chieng"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.65rem] tracking-[0.2em] uppercase font-semibold"
            style={{
              background: "rgba(201,149,107,0.10)",
              border: "1px solid rgba(201,149,107,0.28)",
              color: "#C9956B",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9956B] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9956B]" />
            </span>
            Open to AI Engineering Roles
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-serif font-bold leading-[1.04] tracking-[-0.02em] mb-6"
          style={{
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            color: "#EDE5DA",
          }}
        >
          Neng Yi
          <br />
          <span style={{ color: "#C9956B", fontStyle: "italic" }}>(Leslie)</span>{" "}
          Chieng
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg leading-relaxed mb-11 tracking-wide"
          style={{ color: "rgba(237,229,218,0.48)" }}
        >
          Computer Science · Artificial Intelligence
          <span className="mx-3" style={{ color: "rgba(201,149,107,0.4)" }}>
            ·
          </span>
          Swinburne University · Sarawak
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3.5 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm"
            style={{ background: "#EDE5DA", color: "#0D0B0A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#EDE5DA")}
          >
            Discover my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200"
            style={{
              border: "1px solid rgba(237,229,218,0.22)",
              color: "rgba(237,229,218,0.72)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(237,229,218,0.42)";
              e.currentTarget.style.color = "#EDE5DA";
              e.currentTarget.style.background = "rgba(237,229,218,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(237,229,218,0.22)";
              e.currentTarget.style.color = "rgba(237,229,218,0.72)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[0.6rem] tracking-[0.28em] uppercase"
          style={{ color: "rgba(237,229,218,0.28)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,149,107,0.55), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
