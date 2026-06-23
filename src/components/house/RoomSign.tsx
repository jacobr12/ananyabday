"use client";

import type { HouseRoom } from "@/content/rooms";

const FLOURISH: Record<string, { left: string; right: string }> = {
  favorites: { left: "★", right: "★" },
  "fun-facts": { left: "✦", right: "✦" },
  girlfriends: { left: "♥", right: "♥" },
  guyfriends: { left: "⚓", right: "⚓" },
  family: { left: "✿", right: "✿" },
};

const TILT: Record<string, number> = {
  favorites: -1.5,
  "fun-facts": 1.2,
  girlfriends: -0.8,
  guyfriends: 1.5,
  family: -1.2,
};

export function RoomSign({ room }: { room: HouseRoom }) {
  const { x, y, w } = room.bounds;
  const cx = x + w / 2;
  const signY = y + 34;
  const label =
    room.id === "favorites"
      ? "Ananya's Favorites"
      : room.id === "fun-facts"
        ? "Fun Facts"
        : room.name;
  const f = FLOURISH[room.id] ?? { left: "·", right: "·" };
  const tilt = TILT[room.id] ?? 0;

  return (
    <g transform={`rotate(${tilt} ${cx} ${signY})`}>
      <g className="room-sign-sway" style={{ transformOrigin: `${cx}px ${signY}px` }}>
        <line x1={cx - 52} y1={signY - 14} x2={cx - 52} y2={signY - 4} stroke="#8b7355" strokeWidth="1.5" />
        <line x1={cx + 52} y1={signY - 14} x2={cx + 52} y2={signY - 4} stroke="#8b7355" strokeWidth="1.5" />
        <rect x={cx - 70} y={signY - 4} width={140} height={28} rx={6} fill="#c4a574" stroke="#5a3a2a" strokeWidth="1.5" />
        <text x={cx - 38} y={signY + 14} textAnchor="middle" fontSize="11" fill="#d97757" fontFamily="var(--font-handwriting), cursive">
          {f.left}
        </text>
        <text x={cx} y={signY + 15} textAnchor="middle" fontSize="22" fill="#5a3a2a" fontFamily="var(--font-handwriting), cursive" fontWeight="600">
          {label}
        </text>
        <text x={cx + 38} y={signY + 14} textAnchor="middle" fontSize="11" fill="#d97757" fontFamily="var(--font-handwriting), cursive">
          {f.right}
        </text>
      </g>
    </g>
  );
}
