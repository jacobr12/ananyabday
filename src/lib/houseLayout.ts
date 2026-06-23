/** Shared house geometry — single source for movement + SVG */

export const HOUSE_INTERIOR = { w: 960, h: 520, upstairsH: 260 };

const CEILING = 72;

export const STAIR = {
  /** Visual step geometry (right column) */
  x: 888,
  w: 72,
  y: 188,
  h: 294,
  topFloorY: 212,
  bottomFloorY: 472,
  steps: 6,
};

/** Generous stair column — free movement here; only way to change floors */
export const STAIR_ZONE = {
  x: 760,
  y: CEILING,
  w: HOUSE_INTERIOR.w - 760,
  h: HOUSE_INTERIOR.h - CEILING,
};

export const DOORWAYS = {
  upstairs: { x: 450, y: 168, w: 60, h: 88 },
  downLeft: { x: 290, y: 384, w: 60, h: 88 },
  downRight: { x: 610, y: 384, w: 60, h: 88 },
};

export function inZone(
  x: number,
  y: number,
  z: { x: number; y: number; w: number; h: number }
): boolean {
  return x >= z.x && x < z.x + z.w && y >= z.y && y < z.y + z.h;
}

export function inStairZone(x: number, y: number): boolean {
  return inZone(x, y, STAIR_ZONE);
}

export function stairRampY(x: number): number {
  const t = Math.max(0, Math.min(1, (x - STAIR.x) / STAIR.w));
  return STAIR.topFloorY + t * (STAIR.bottomFloorY - STAIR.topFloorY);
}
