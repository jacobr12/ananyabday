"use client";

import { motion } from "framer-motion";
import { friend } from "@/content/friend";

export function HouseTitle({ visible }: { visible: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-4 text-center"
    >
      <h1 className="font-handwriting text-[2.75rem] font-semibold leading-tight text-[#5c4a3a] md:text-[3.5rem] lg:text-[4rem]">
        a little house for {friend.firstName.toLowerCase()}
      </h1>
      <svg
        className="mx-auto mt-1"
        width="280"
        height="18"
        viewBox="0 0 280 18"
        aria-hidden
      >
        <path
          d="M6 12 Q70 3 140 11 T268 10"
          fill="none"
          stroke="#e07a5f"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-handwriting mt-2 text-xl text-[#5c4a3a]/90 md:text-2xl">
        ananya &apos;the goat&apos; udaygiri
      </p>
    </motion.header>
  );
}
