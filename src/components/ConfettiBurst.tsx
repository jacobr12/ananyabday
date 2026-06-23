"use client";

import { motion } from "framer-motion";

const PIECES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: (i % 8) * 12 - 42,
  color: ["#d97757", "#8aa87a", "#7a9cb8", "#f4d03f"][i % 4],
  delay: i * 0.03,
}));

export function ConfettiBurst({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-50 flex justify-center overflow-hidden h-32">
      {PIECES.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, y: -10, x: p.x, rotate: 0 }}
          animate={{ opacity: 0, y: 120, rotate: 180 + p.id * 20 }}
          transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
          className="absolute top-0 h-2 w-2 rounded-sm"
          style={{ backgroundColor: p.color, left: "50%" }}
        />
      ))}
    </div>
  );
}
