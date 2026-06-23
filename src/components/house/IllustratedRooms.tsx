import type { HouseRoom } from "@/content/rooms";
import { FloorStrip, RoomWindow } from "./shared";
import { TriviaLedFloor } from "./TriviaLedFloor";

const FLOOR = 44;

function floorY(room: HouseRoom) {
  return room.bounds.y + room.bounds.h - FLOOR;
}

export function IllustratedRoom({ room }: { room: HouseRoom }) {
  const { x, y, w, h } = room.bounds;
  const floor = floorY(room);

  switch (room.id) {
    case "favorites":
      return (
        <g>
          <rect x={x} y={y} width={w} height={h - FLOOR} fill={room.moodColor} />
          <FloorStrip x={x} y={floor} w={w} h={FLOOR} />
          <RoomWindow x={x + w - 72} y={y + 32} skyClass="sky-cycle-night" showMoon />
          <ellipse cx={x + w - 50} cy={y + 70} rx="35" ry="28" fill="url(#lamp-glow)" opacity="0.5" />
          <rect x={x + 24} y={y + 100} width={120} height="8" fill="#a08060" stroke="#5c4a3a" strokeWidth="1.5" />
          <rect x={x + 24} y={y + 140} width="90" height="8" fill="#a08060" stroke="#5c4a3a" strokeWidth="1.5" />
          <rect x={x + 280} y={y + 90} width="80" height="100" fill="#c4a882" stroke="#5c4a3a" strokeWidth="2" rx="2" />
          <ellipse cx={x + 320} cy={floor - 30} rx="40" ry="8" fill="url(#lamp-glow)" opacity="0.35" />
        </g>
      );
    case "fun-facts":
      return (
        <g>
          <rect x={x} y={y} width={w} height={h - FLOOR} fill={room.moodColor} />
          <TriviaLedFloor room={room} />
          <FloorStrip x={x} y={floor} w={w} h={FLOOR} patternId="floor-wood-warm" />
          <RoomWindow x={x + 24} y={y + 36} skyClass="sky-cycle-golden" />
        </g>
      );
    case "girlfriends":
      return (
        <g>
          <rect x={x} y={y} width={w} height={h - FLOOR} fill={room.moodColor} />
          <FloorStrip x={x} y={floor} w={w} h={FLOOR} />
          <RoomWindow x={x + w - 64} y={y + 34} skyClass="sky-cycle-golden" />
          <rect x={x + 20} y={y + 120} width={w - 40} height="60" fill="#c4a882" stroke="#5c4a3a" strokeWidth="1.5" rx="3" opacity="0.5" />
        </g>
      );
    case "guyfriends":
      return (
        <g>
          <rect x={x} y={y} width={w} height={h - FLOOR} fill={room.moodColor} />
          <FloorStrip x={x} y={floor} w={w} h={FLOOR} />
          <RoomWindow x={x + 20} y={y + 32} skyClass="sky-cycle-morning" />
          <rect x={x + 40} y={y + 100} width="50" height="70" fill="#8b7355" stroke="#5c4a3a" strokeWidth="1.5" />
        </g>
      );
    case "family":
      return (
        <g>
          <rect x={x} y={y} width={w} height={h - FLOOR} fill={room.moodColor} />
          <FloorStrip x={x} y={floor} w={w} h={FLOOR} />
          <RoomWindow x={x + w - 62} y={y + 30} skyClass="sky-cycle-rain" showRain />
          <rect x={x + 20} y={y + 110} width={w - 40} height="8" fill="#8c1515" opacity="0.6" rx="1" />
          <text x={x + w / 2} y={y + 108} textAnchor="middle" fontSize="7" fill="#fff" opacity="0.8">
            stanford
          </text>
        </g>
      );
    default:
      return null;
  }
}
