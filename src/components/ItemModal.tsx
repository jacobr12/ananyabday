"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Item, RoomType } from "@/content/rooms";
import type { TriviaQuestion } from "@/content/triviaQuestions";
import { FavoriteModal } from "@/components/modals/FavoriteModal";
import { TriviaModal } from "@/components/modals/TriviaModal";
import { PersonModal } from "@/components/modals/PersonModal";
import { ItemIcon } from "@/components/icons/ItemIcons";

type Props = {
  item: Item | null;
  trivia: TriviaQuestion | null;
  roomType: RoomType | null;
  onClose: () => void;
};

export function ItemModal({ item, trivia, roomType, onClose }: Props) {
  const isPerson = roomType === "people" && item?.person;
  const isLandscapePerson =
    isPerson && item?.person?.photoLayout === "landscape";
  const open = !!item || !!trivia;

  const modalWidth = isLandscapePerson
    ? "md:max-w-3xl md:w-full"
    : isPerson
      ? "md:max-w-xl md:w-full"
      : trivia
        ? "md:max-w-lg md:w-full"
        : "md:max-w-xl md:w-full";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#5c4a3a]/25 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className={`fixed inset-x-3 bottom-3 top-auto z-50 max-h-[90vh] overflow-y-auto rounded-3xl bg-[#fdf6e9] p-5 shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${modalWidth}`}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#5c4a3a]/10 text-[#5c4a3a]"
              aria-label="Close"
            >
              ✕
            </button>

            {isPerson && item && <PersonModal person={item.person!} />}
            {item && roomType === "favorites" && item.favorite && !item.isSecret && (
              <FavoriteModal item={item} />
            )}
            {trivia && <TriviaModal trivia={trivia} />}
            {(item?.isSecret && item.triviaFact) && (
              <div className="py-2 text-center">
                <p className="font-display text-2xl leading-snug text-[#5c4a3a] md:text-3xl">
                  {item.triviaFact}
                </p>
              </div>
            )}
            {item &&
              !isPerson &&
              roomType === "favorites" &&
              !item.favorite &&
              !item.triviaFact && <ItemIcon id={item.icon} size={44} />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
