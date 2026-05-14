"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-1 absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#EDD9C8]/50 blur-3xl" />
        <div className="blob-2 absolute bottom-1/3 -right-24 w-80 h-80 rounded-full bg-[#C9956B]/15 blur-3xl" />
        <div className="blob-3 absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-[#F2EDE8]/70 blur-2xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-center px-6 max-w-3xl mx-auto"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-[#E0D5CB] shadow-md ring-4 ring-[#FAF8F5]">
            <Image
              src="/profile.jpg"
              alt="Neng Yi (Leslie) Chieng"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="text-[#C9956B] text-xs tracking-[0.22em] uppercase font-semibold mb-4"
        >
          He / Him · Sarawak, Malaysia
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#2C2118] leading-tight mb-5"
        >
          Neng Yi
          <br />
          <span className="text-[#C9956B]">(Leslie)</span> Chieng
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[#9B8578] text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Computer Science student specializing in{" "}
          <span className="text-[#2C2118] font-medium">Artificial Intelligence</span>{" "}
          · Aspiring AI Engineer
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-7 py-3 rounded-full bg-[#2C2118] text-[#FAF8F5] text-sm font-medium tracking-wide hover:bg-[#3d2f22] transition-colors duration-200 shadow-sm"
          >
            Discover my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-[#E0D5CB] text-[#2C2118] text-sm font-medium tracking-wide hover:bg-[#F2EDE8] transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#C9956B] text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C9956B] to-transparent"
        />
      </motion.div>
    </section>
  );
}
