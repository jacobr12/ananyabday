"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Item, RoomType } from "@/content/rooms";
import type { TriviaQuestion } from "@/content/triviaQuestions";
import { getItemById, getRoomForItem, rooms } from "@/content/rooms";
import { CharacterProvider, useCharacter } from "@/hooks/useCharacter";
import { useVisitedItems } from "@/hooks/useVisitedItems";
import { HELP_STORAGE_KEY, INTRO_STORAGE_KEY } from "@/lib/constants";
import { friend } from "@/content/friend";
import { House } from "./House";
import { ItemModal } from "./ItemModal";
import { IntroOverlay } from "./IntroOverlay";
import { GrainOverlay } from "./GrainOverlay";

export function BirthdayExperience() {
  const [showIntro, setShowIntro] = useState(true);
  const [houseRevealed, setHouseRevealed] = useState(false);
  const [roomLit, setRoomLit] = useState(() => rooms.map(() => false));
  const [showRevealConfetti, setShowRevealConfetti] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [activeTrivia, setActiveTrivia] = useState<TriviaQuestion | null>(null);
  const [activeRoomType, setActiveRoomType] = useState<RoomType | null>(null);
  const { markVisited, allVisited, ready } = useVisitedItems();

  const openItem = useCallback(
    (item: Item) => {
      if (!item.isSecret) markVisited(item.id);
      const room = getRoomForItem(item.id);
      setActiveTrivia(null);
      setActiveRoomType(item.isSecret ? "trivia" : (room?.type ?? null));
      setActiveItem(item);
    },
    [markVisited]
  );

  useEffect(() => {
    try {
      if (localStorage.getItem(INTRO_STORAGE_KEY)) {
        setShowIntro(false);
        setHouseRevealed(true);
        setRoomLit(rooms.map(() => true));
      }
      if (localStorage.getItem(HELP_STORAGE_KEY)) setShowHelp(false);
    } catch {
      /* ignore */
    }
  }, []);

  const dismissIntro = useCallback(() => {
    setShowIntro(false);
    try {
      localStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setHouseRevealed(true);
    rooms.forEach((_, i) => {
      setTimeout(() => {
        setRoomLit((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 200);
    });
    setShowRevealConfetti(true);
    setTimeout(() => setShowRevealConfetti(false), 1400);
    setTimeout(() => setShowHelp(true), 1600);
  }, []);

  const dismissHelp = useCallback(() => {
    setShowHelp(false);
    try {
      localStorage.setItem(HELP_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const handleOpenById = useCallback(
    (itemId: string) => {
      const item = getItemById(itemId);
      if (item) openItem(item);
    },
    [openItem]
  );

  return (
    <CharacterProvider
      onOpenItem={openItem}
      onOpenTrivia={(q) => {
        setActiveTrivia(q);
        setActiveRoomType("trivia");
        setActiveItem(null);
      }}
    >
      <ExperienceContent
        showIntro={showIntro}
        houseRevealed={houseRevealed}
        roomLit={roomLit}
        showRevealConfetti={showRevealConfetti}
        showHelp={showHelp && houseRevealed && !showIntro}
        dismissIntro={dismissIntro}
        dismissHelp={dismissHelp}
        activeItem={activeItem}
        activeTrivia={activeTrivia}
        activeRoomType={activeRoomType}
        setActiveItem={setActiveItem}
        setActiveTrivia={setActiveTrivia}
        setActiveRoomType={setActiveRoomType}
        onOpenItemId={handleOpenById}
        allVisited={ready && allVisited}
      />
    </CharacterProvider>
  );
}

function ExperienceContent({
  showIntro,
  houseRevealed,
  roomLit,
  showRevealConfetti,
  showHelp,
  dismissIntro,
  dismissHelp,
  activeItem,
  activeTrivia,
  activeRoomType,
  setActiveItem,
  setActiveTrivia,
  setActiveRoomType,
  onOpenItemId,
  allVisited,
}: {
  showIntro: boolean;
  houseRevealed: boolean;
  roomLit: boolean[];
  showRevealConfetti: boolean;
  showHelp: boolean;
  dismissIntro: () => void;
  dismissHelp: () => void;
  activeItem: Item | null;
  activeTrivia: TriviaQuestion | null;
  activeRoomType: RoomType | null;
  setActiveItem: (v: Item | null) => void;
  setActiveTrivia: (v: TriviaQuestion | null) => void;
  setActiveRoomType: (v: RoomType | null) => void;
  onOpenItemId: (id: string) => void;
  allVisited: boolean;
}) {
  const { setMovementEnabled } = useCharacter();
  const modalOpen = !!activeItem || !!activeTrivia;

  useEffect(() => {
    setMovementEnabled(houseRevealed && !showIntro && !modalOpen);
  }, [houseRevealed, showIntro, modalOpen, setMovementEnabled]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
        setActiveTrivia(null);
        setActiveRoomType(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setActiveItem, setActiveTrivia, setActiveRoomType]);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#fdf6e9] outline-none" tabIndex={-1}>
      <GrainOverlay />
      <IntroOverlay show={showIntro} onEnter={dismissIntro} />

      <div className="relative flex flex-1 flex-col items-center justify-center px-2 py-4 md:px-4 md:py-6">
        <AnimatePresence>
          {showHelp && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={dismissHelp}
              className="mb-3 rounded-full bg-[#5c4a3a]/8 px-4 py-1.5 text-sm text-[#5c4a3a]/70 hover:bg-[#5c4a3a]/12"
            >
              Walk close to something · Space to open (tap on mobile)
            </motion.button>
          )}
        </AnimatePresence>

        <House
          revealed={houseRevealed}
          roomLit={roomLit}
          showRevealConfetti={showRevealConfetti}
          showConfetti={allVisited}
          onOpenItem={onOpenItemId}
        />
      </div>

      <footer className="relative z-10 pb-4 text-center font-body text-xs text-[#5c4a3a]/50">
        Made with love for {friend.firstName}&apos;s birthday — May 23, 2026
      </footer>

      <ItemModal
        item={activeItem}
        trivia={activeTrivia}
        roomType={activeRoomType}
        onClose={() => {
          setActiveItem(null);
          setActiveTrivia(null);
          setActiveRoomType(null);
        }}
      />
    </main>
  );
}
