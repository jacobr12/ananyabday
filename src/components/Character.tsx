"use client";

import { motion } from "framer-motion";
import { useCharacter } from "@/hooks/useCharacter";
import { ROOF_HEIGHT } from "@/lib/constants";

export function Character() {
  const { x, y, isMoving, facing } = useCharacter();
  const frame = isMoving ? 1 : 0;

  return (
    <motion.div
      className="pointer-events-none absolute z-30"
      style={{ left: x, top: y + ROOF_HEIGHT }}
    >
      <div
        style={{
          transform: `translate(-50%, -100%) scaleX(${facing === "left" ? -1 : 1})`,
        }}
      >
        <motion.div
          animate={{
            y: isMoving ? [0, -3, 0, -2, 0] : [0, -2, 0],
          }}
          transition={
            isMoving
              ? { repeat: Infinity, duration: 0.38, ease: "easeInOut" }
              : { repeat: Infinity, duration: 2.4, ease: "easeInOut" }
          }
        >
          <AnanyaChibi walkFrame={frame} isMoving={isMoving} />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 h-2.5 w-12 -translate-x-1/2 rounded-full blur-[2px]"
          style={{ background: "rgba(60,50,40,0.12)" }}
          animate={{ scaleX: isMoving ? [1, 1.08, 1] : [1, 1.04, 1] }}
          transition={
            isMoving
              ? { repeat: Infinity, duration: 0.4 }
              : { repeat: Infinity, duration: 2.2 }
          }
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

function AnanyaChibi({
  walkFrame,
  isMoving,
}: {
  walkFrame: number;
  isMoving: boolean;
}) {
  const armSwing = isMoving ? (walkFrame === 1 ? -4 : 4) : 0;

  return (
    <svg width="64" height="68" viewBox="0 0 64 68" aria-label="Ananya">
      {/* Hair back */}
      <path
        d="M18 28 C14 38 12 52 14 62 C20 64 44 64 50 62 C52 50 50 36 46 28 C44 18 36 12 32 12 C28 12 20 18 18 28 Z"
        fill="#2a1f18"
      />
      {/* Mustard kurta body */}
      <path
        d="M22 38 L20 62 L44 62 L42 38 Q32 42 22 38 Z"
        fill="#d4a017"
        stroke="#5c4a3a"
        strokeWidth="1.5"
      />
      <path d="M22 38 L32 44 L42 38" fill="#c49214" stroke="#5c4a3a" strokeWidth="1" />
      {/* Arms */}
      <rect
        x="14"
        y="40"
        width="8"
        height="16"
        rx="3"
        fill="#d4a017"
        stroke="#5c4a3a"
        strokeWidth="1.2"
        transform={`rotate(${armSwing} 18 40)`}
      />
      <rect
        x="42"
        y="40"
        width="8"
        height="16"
        rx="3"
        fill="#d4a017"
        stroke="#5c4a3a"
        strokeWidth="1.2"
        transform={`rotate(${-armSwing} 46 40)`}
      />
      {/* Neck */}
      <rect x="28" y="34" width="8" height="6" fill="#c68b5e" />
      {/* Face */}
      <ellipse cx="32" cy="28" rx="15" ry="16" fill="#c68b5e" stroke="#5c4a3a" strokeWidth="1.5" />
      {/* Hair front / side part */}
      <path
        d="M17 26 C18 14 26 10 32 10 C40 10 48 16 47 28 C46 22 40 18 32 18 C24 18 20 22 19 28 C18 32 16 34 17 26 Z"
        fill="#2a1f18"
      />
      <path
        d="M19 24 C21 20 24 18 28 20"
        fill="none"
        stroke="#2a1f18"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 24 C43 20 40 18 36 20"
        fill="none"
        stroke="#2a1f18"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="26" cy="28" r="3.2" fill="#2a1f18" />
      <circle cx="38" cy="28" r="3.2" fill="#2a1f18" />
      <circle cx="27" cy="27" r="1" fill="#fff" />
      <circle cx="39" cy="27" r="1" fill="#fff" />
      {/* Blush */}
      <circle cx="22" cy="32" r="3" fill="#e8a090" opacity="0.45" />
      <circle cx="42" cy="32" r="3" fill="#e8a090" opacity="0.45" />
      {/* Smile */}
      <path
        d="M27 34 Q32 37 37 34"
        fill="none"
        stroke="#a06050"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
