"use client";

import { motion } from "framer-motion";
import { ROOF_HEIGHT } from "@/lib/constants";
import { useCharacter } from "@/hooks/useCharacter";

export function TriviaPrompt() {
  const { currentRoom, isMobile, openTrivia } = useCharacter();

  if (currentRoom.id !== "fun-facts") return null;

  const b = currentRoom.bounds;
  const left = b.x + b.w / 2;
  const top = b.y + ROOF_HEIGHT + 100;

  return (
    <motion.div
      className="absolute z-25 flex flex-col items-center"
      style={{ left, top, transform: "translate(-50%, 0)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {isMobile ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            openTrivia();
          }}
          className="rounded-full border border-[#7ee8fa]/40 bg-[#0d1520]/80 px-4 py-2 text-xs font-medium tracking-wide text-[#7ee8fa] shadow-[0_0_12px_rgba(126,232,250,0.25)] backdrop-blur-sm"
        >
          tap for trivia ✦
        </button>
      ) : (
        <p className="pointer-events-none rounded-full border border-[#7ee8fa]/30 bg-[#0d1520]/70 px-4 py-1.5 text-xs font-medium tracking-widest text-[#7ee8fa]/90 shadow-[0_0_10px_rgba(126,232,250,0.2)] backdrop-blur-sm">
          press space for trivia
        </p>
      )}
    </motion.div>
  );
}
