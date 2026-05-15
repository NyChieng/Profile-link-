"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    top: "8%",
    left: "5%",
    width: 700,
    height: 700,
    color: "#C9956B",
    opacity: 0.042,
    duration: 36,
    delay: 0,
    x: ["0%", "4%", "0%"],
    y: ["0%", "-3%", "0%"],
  },
  {
    top: "48%",
    right: "2%",
    left: undefined,
    width: 560,
    height: 560,
    color: "#8B5E38",
    opacity: 0.036,
    duration: 28,
    delay: 10,
    x: ["0%", "-3%", "0%"],
    y: ["0%", "4%", "0%"],
  },
  {
    top: "75%",
    left: "28%",
    width: 440,
    height: 440,
    color: "#C9956B",
    opacity: 0.028,
    duration: 22,
    delay: 18,
    x: ["0%", "5%", "-2%", "0%"],
    y: ["0%", "-4%", "2%", "0%"],
  },
];

export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right ?? undefined,
            width: orb.width,
            height: orb.height,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity: orb.opacity,
            filter: "blur(64px)",
          }}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.05, 0.97, 1] }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
