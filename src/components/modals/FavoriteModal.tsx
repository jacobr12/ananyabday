"use client";

import Image from "next/image";
import type { Item } from "@/content/rooms";
import { ItemIcon } from "@/components/icons/ItemIcons";

export function FavoriteModal({ item }: { item: Item }) {
  const fav = item.favorite!;
  return (
    <>
      {fav.image ? (
        <figure className="mx-auto overflow-hidden rounded-2xl border-2 border-[#5c4a3a]/15">
          <div className="relative aspect-[4/3] w-full min-h-[240px] md:min-h-[320px]">
            <Image
              src={fav.image}
              alt={fav.heading}
              fill
              className="object-cover"
              sizes="640px"
            />
          </div>
        </figure>
      ) : (
        <ItemIcon id={item.icon} size={48} />
      )}
      <h2 className="font-display mt-4 text-2xl text-[#5c4a3a] pr-8">{fav.heading}</h2>
      <p className="mt-3 font-body text-base leading-relaxed text-[#5c4a3a]/85">{fav.why}</p>
    </>
  );
}
