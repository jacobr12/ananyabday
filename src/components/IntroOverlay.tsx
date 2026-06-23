"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { friend } from "@/content/friend";

type Phase = "greeting" | "invite";

type Props = {
  show: boolean;
  onEnter: () => void;
};

export function IntroOverlay({ show, onEnter }: Props) {
  const [phase, setPhase] = useState<Phase>("greeting");

  useEffect(() => {
    if (!show) return;
    setPhase("greeting");
    const t = setTimeout(() => setPhase("invite"), 2000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#f5ebe0] px-6 text-center"
        >
          <AnimatePresence mode="wait">
            {phase === "greeting" ? (
              <motion.h1
                key="greeting"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display text-4xl text-[#5c4a3a] md:text-5xl"
              >
                Happy birthday, {friend.firstName}
              </motion.h1>
            ) : (
              <motion.div
                key="invite"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <p className="font-display text-xl text-[#5c4a3a]/75 md:text-2xl">
                  {friend.tagline}
                </p>
                <motion.button
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={onEnter}
                  className="mt-10 rounded-full bg-[#d97757] px-10 py-3.5 text-lg text-white shadow-lg transition hover:bg-[#c4684a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97757] focus-visible:ring-offset-2"
                >
                  Come inside →
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
