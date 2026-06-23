"use client";

import { motion } from "framer-motion";
import { rooms } from "@/content/rooms";
import {
  HOUSE_HEIGHT,
  HOUSE_VIEW_HEIGHT,
  HOUSE_WIDTH,
  ROOF_HEIGHT,
} from "@/lib/constants";
import { SvgDefs } from "./SvgDefs";
import { HouseExterior } from "./HouseExterior";
import { IllustratedRoom } from "./IllustratedRooms";
import { RoomSign } from "./RoomSign";
import { WallsAndDoors } from "./WallsAndDoors";

type Props = {
  roomLit: boolean[];
};

export function HouseIllustration({ roomLit }: Props) {
  return (
    <svg
      width={HOUSE_WIDTH}
      height={HOUSE_VIEW_HEIGHT}
      viewBox={`0 0 ${HOUSE_WIDTH} ${HOUSE_VIEW_HEIGHT}`}
      className="block"
    >
      <SvgDefs />

      <g transform={`translate(0, ${ROOF_HEIGHT})`}>
        <rect
          x={0}
          y={0}
          width={HOUSE_WIDTH}
          height={HOUSE_HEIGHT}
          fill="#fdf6e9"
          stroke="#5c4a3a"
          strokeWidth="2.5"
          rx="2"
        />

        {rooms.map((room, i) => (
          <motion.g
            key={room.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: roomLit[i] !== false ? 1 : 0.12 }}
            transition={{ duration: 0.45, delay: i * 0.18 }}
          >
            <IllustratedRoom room={room} />
          </motion.g>
        ))}

        {rooms.map((room) => (
          <RoomSign key={`sign-${room.id}`} room={room} />
        ))}

        <WallsAndDoors />
      </g>

      <HouseExterior />
    </svg>
  );
}
