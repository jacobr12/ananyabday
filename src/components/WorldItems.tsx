"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/content/rooms";
import { getItemWorldPosition, type Item } from "@/content/rooms";
import { ROOF_HEIGHT } from "@/lib/constants";
import { useCharacter } from "@/hooks/useCharacter";
import { ItemIcon } from "@/components/icons/ItemIcons";

type Props = {
  onOpenItem: (itemId: string) => void;
};

function ItemMarker({ item, size }: { item: Item; size: number }) {
  const image = item.favorite?.image ?? item.person?.photo;
  if (image) {
    const w = size + 4;
    const h = Math.round(size * 1.2);
    return (
      <div
        className="rounded-sm border-2 border-[#5c4a3a] bg-[#fffef8] p-[3px] shadow-[0_2px_6px_rgba(60,50,40,0.2)]"
        style={{ transform: "rotate(-2deg)", width: w, height: h }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2px]">
          <Image src={image} alt="" fill className="object-cover" sizes="48px" />
        </div>
      </div>
    );
  }
  return <ItemIcon id={item.icon} size={size} />;
}

export function WorldItems({ onOpenItem }: Props) {
  const { activeItemId, isMobile } = useCharacter();

  return (
    <>
      {rooms.flatMap((room) =>
        room.items
          .filter((item) => !item.isSecret)
          .map((item) => {
            const wp = getItemWorldPosition(item, room);
            const left = wp.x;
            const top = wp.y + ROOF_HEIGHT;
            const isActive = activeItemId === item.id;

            return (
              <div
                key={item.id}
                className="absolute z-20"
                style={{
                  left,
                  top,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: isMobile && isActive ? "auto" : "none",
                }}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#5c4a3a]/90 px-2.5 py-1 text-[10px] font-medium text-[#fdf6e9] md:text-xs"
                    >
                      {isMobile ? "tap to open" : "press space"}
                    </motion.div>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    className="absolute inset-0 -m-3 rounded-full border-2 border-[#d97757]/35"
                    animate={{ opacity: [0.4, 0.75, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ pointerEvents: "none" }}
                  />
                )}

                {isMobile && isActive ? (
                  <button
                    type="button"
                    aria-label={item.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenItem(item.id);
                    }}
                    className="flex items-center justify-center"
                  >
                    <ItemMarker item={item} size={40} />
                  </button>
                ) : (
                  <div
                    className="flex items-center justify-center"
                    style={{ filter: "drop-shadow(0 1px 3px rgba(92,74,58,0.12))" }}
                  >
                    <ItemMarker item={item} size={40} />
                  </div>
                )}
              </div>
            );
          })
      )}

      {rooms.flatMap((room) =>
        room.items
          .filter((item) => item.isSecret)
          .map((item) => {
            const wp = getItemWorldPosition(item, room);
            const isActive = activeItemId === item.id;
            if (!isActive) return null;
            return (
              <button
                key={item.id}
                type="button"
                aria-label="?"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenItem(item.id);
                }}
                className="absolute z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
                style={{ left: wp.x, top: wp.y + ROOF_HEIGHT }}
              />
            );
          })
      )}
    </>
  );
}
