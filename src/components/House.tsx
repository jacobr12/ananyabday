"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HOUSE_VIEW_HEIGHT, HOUSE_WIDTH, ROOF_HEIGHT } from "@/lib/constants";
import { HouseIllustration } from "@/components/house/HouseIllustration";
import { Character } from "./Character";
import { WorldItems } from "./WorldItems";
import { useCharacter } from "@/hooks/useCharacter";
import { HouseTitle } from "./HouseTitle";
import { TriviaPrompt } from "./TriviaPrompt";
import { ConfettiBurst } from "./ConfettiBurst";

type Props = {
  revealed: boolean;
  roomLit: boolean[];
  showRevealConfetti?: boolean;
  showConfetti?: boolean;
  onOpenItem: (itemId: string) => void;
};

export function House({
  revealed,
  roomLit,
  showRevealConfetti,
  showConfetti,
  onOpenItem,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, setTapTarget, isMobile } = useCharacter();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      const titleSpace = 110;
      if (mobile) {
        const s = Math.min(
          (window.innerWidth - 16) / HOUSE_WIDTH,
          (window.innerHeight - titleSpace - 60) / HOUSE_VIEW_HEIGHT
        );
        setScale(Math.max(s, 0.28));
      } else {
        const s = Math.min(
          (window.innerWidth - 48) / HOUSE_WIDTH,
          (window.innerHeight - titleSpace - 80) / HOUSE_VIEW_HEIGHT,
          1
        );
        setScale(s);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current || !revealed) return;
    const target = x * scale - window.innerWidth / 2 + 80;
    containerRef.current.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [x, scale, isMobile, revealed]);

  return (
    <div className="relative w-full outline-none" tabIndex={-1}>
      <HouseTitle visible={revealed} />

      <div
        ref={containerRef}
        className={`relative w-full ${isMobile ? "overflow-x-auto overflow-y-auto pb-4" : "overflow-hidden"}`}
      >
        <motion.div
          className="relative mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: HOUSE_WIDTH * scale, height: HOUSE_VIEW_HEIGHT * scale }}
        >
          <ConfettiBurst show={!!showRevealConfetti} />
          <HouseScene
            scale={scale}
            revealed={revealed}
            roomLit={roomLit}
            showConfetti={showConfetti}
            onOpenItem={onOpenItem}
          />
        </motion.div>
      </div>
    </div>
  );
}

function HouseScene({
  scale,
  revealed,
  roomLit,
  showConfetti,
  onOpenItem,
}: {
  scale: number;
  revealed: boolean;
  roomLit: boolean[];
  showConfetti?: boolean;
  onOpenItem: (itemId: string) => void;
}) {
  const { setTapTarget, isMobile } = useCharacter();

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isMobile || !revealed) return;
    if ((e.target as HTMLElement).closest("button")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / scale;
    const clickY = (e.clientY - rect.top) / scale - ROOF_HEIGHT;
    setTapTarget(clickX, Math.max(72, clickY));
  };

  return (
    <div
      className="relative origin-top-left"
      style={{
        width: HOUSE_WIDTH,
        height: HOUSE_VIEW_HEIGHT,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        filter: "drop-shadow(0 20px 40px rgba(60,50,40,0.12))",
      }}
      onPointerDown={handlePointer}
    >
      <HouseIllustration roomLit={roomLit} />
      <WorldItems onOpenItem={onOpenItem} />
      <TriviaPrompt />
      <Character />

      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pointer-events-none absolute left-1/2 z-40 -translate-x-1/2 text-4xl"
            style={{ top: ROOF_HEIGHT + 8 }}
          >
            🎂
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
